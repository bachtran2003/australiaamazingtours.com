import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

const app = express();
app.use(express.json());

const dataDir = path.resolve(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const statsFile = path.resolve(dataDir, 'stats.json');

// Default initial data
// Website launch date (defaults to project deployment date)
const defaultStats = {
  launchDate: '2026-09-29T00:00:00.000Z',
  totalVisits: 1,
  dailyVisits: {} as Record<string, number>
};

function getStats() {
  try {
    if (fs.existsSync(statsFile)) {
      const data = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
      return { ...defaultStats, ...data };
    }
  } catch (e) {
    console.error('Error reading stats:', e);
  }
  return { ...defaultStats };
}

function saveStats(stats: any) {
  try {
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving stats:', e);
  }
}

// Active sessions tracking for real Online count (heartbeats within 45s)
const activeSessions = new Map<string, number>();

setInterval(() => {
  const now = Date.now();
  for (const [clientId, lastPing] of activeSessions.entries()) {
    if (now - lastPing > 45000) {
      activeSessions.delete(clientId);
    }
  }
}, 10000);

function computeStats(stats: any) {
  const now = new Date();
  const launch = new Date(stats.launchDate || defaultStats.launchDate);
  const diffTime = Math.max(0, now.getTime() - launch.getTime());
  const day = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const week = Math.floor((day - 1) / 7) + 1;
  const month = (now.getFullYear() - launch.getFullYear()) * 12 + (now.getMonth() - launch.getMonth()) + 1;
  const online = Math.max(1, activeSessions.size);

  return {
    online,
    day,
    week,
    month,
    totalVisits: stats.totalVisits || 1,
    launchDate: stats.launchDate
  };
}

// API Endpoints
app.post('/api/stats/visit', (req, res) => {
  const { clientId, isNewSession } = req.body || {};
  const stats = getStats();
  const id = clientId || req.ip || 'anonymous';
  activeSessions.set(id, Date.now());

  if (isNewSession) {
    stats.totalVisits = (stats.totalVisits || 0) + 1;
    const todayKey = new Date().toISOString().slice(0, 10);
    stats.dailyVisits = stats.dailyVisits || {};
    stats.dailyVisits[todayKey] = (stats.dailyVisits[todayKey] || 0) + 1;
    saveStats(stats);
  }

  res.json(computeStats(stats));
});

app.post('/api/stats/heartbeat', (req, res) => {
  const { clientId } = req.body || {};
  const id = clientId || req.ip || 'anonymous';
  activeSessions.set(id, Date.now());
  const stats = getStats();
  res.json(computeStats(stats));
});

app.get('/api/stats', (_req, res) => {
  const stats = getStats();
  res.json(computeStats(stats));
});

app.get('/robots.txt', (_req, res) => {
  const robotsPath = path.resolve(__dirname, 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.type('text/plain').sendFile(robotsPath);
  } else {
    res.type('text/plain').send('User-agent: *\nAllow: /\nSitemap: https://www.australiaamazingtours.com/sitemap.xml\n');
  }
});

app.get('/sitemap.xml', (_req, res) => {
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.type('application/xml').sendFile(sitemapPath);
  } else {
    res.status(404).send('Not found');
  }
});

async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
