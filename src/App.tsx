import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ChevronRight, ChevronLeft, ChevronDown, Facebook, Twitter, Instagram, Menu, X, ArrowLeft, Check, X as XIcon, Home, Search, Compass, MessageCircle, Send, Video, Play } from 'lucide-react';

function PremiumFleetPage({ onBack }: { onBack: () => void }) {
  const images = [
    'https://i.postimg.cc/VL3w9F2Z/62d0eb4c_dec7_4e79_847b_2d075c643b3e.jpg',
    'https://i.postimg.cc/jdWKJ13Q/a3f891ae_b056_4573_a9e6_7c1359e30707.jpg',
    'https://i.postimg.cc/7Yp41Npy/BUS.jpg',
    'https://i.postimg.cc/mgCsmHsx/IMG_1482.jpg',
    'https://i.postimg.cc/K8B20M22/z7632719940766_bf1cbc18f1dfd5be4ff42afbff5ffaee.jpg',
    'https://i.postimg.cc/pLzHsFH2/z7632719950380_a55cf808eba646c6232fa56a2fc9db58.jpg',
    'https://i.postimg.cc/vBSkYYsv/IMG_8707.jpg',
    'https://i.postimg.cc/76QdHHk9/IMG_8712.jpg',
    'https://i.postimg.cc/HxPRYYg2/IMG_8719.jpg',
    'https://i.postimg.cc/JndvrrLp/IMG_8746.jpg',
    'https://i.postimg.cc/ydrt11Hr/IMG_8747.jpg',
    'https://i.postimg.cc/3RbV88Tq/IMG_8877.jpg'
  ];

  return (
    <div className="bg-white min-h-screen pb-20 pt-8 px-4 md:px-8 max-w-7xl mx-auto">
      <button 
        onClick={onBack}
        className="mb-8 text-[#00205B] hover:text-[#BE1E2D] font-bold flex items-center gap-2 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>
      
      <h1 className="text-4xl md:text-5xl font-bold text-[#00205B] mb-4">Our Premium Fleet</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Travel in comfort and style with our modern fleet of premium vehicles. From luxury sedans to spacious coaches, we have the perfect transport solution for your journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-md h-64 group cursor-pointer">
            <img src={img} alt={`Premium Fleet ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

const tourData: Record<string, any> = {
    'Melbourne Culture': {
      title: 'Melbourne – Australia’s Most Vibrant and Creative City',
      image: 'https://i.postimg.cc/T2CC25Yj/1_(13).jpg',
      description: [
        'Welcome to Melbourne, a city where culture, creativity, and lifestyle come together to create one of the most exciting destinations in the world. Consistently ranked among the world’s most livable cities, Melbourne offers an irresistible blend of historic charm, modern architecture, world-class dining, and a thriving arts scene.',
        'Wander through the city’s famous hidden laneways where colourful street art, boutique cafés, and trendy bars create a vibrant urban atmosphere unlike anywhere else in Australia. Melbourne is globally recognised for its incredible coffee culture, with passionate baristas and stylish cafés on nearly every corner.',
        'Discover iconic landmarks such as Federation Square, the cultural heart of the city, and explore the historic beauty of Royal Arcade and Block Arcade, where elegant Victorian architecture meets luxury shopping.',
        'For lovers of art and creativity, Melbourne is a living gallery. From the world-famous street art of Hosier Lane to cutting-edge galleries and live music venues, the city pulses with artistic energy day and night.',
        'Food lovers will find Melbourne a true paradise. The city’s multicultural community has created one of the most diverse culinary scenes in the world, from authentic Asian cuisine and Mediterranean restaurants to modern Australian fine dining.',
        'Whether you’re exploring stylish laneways, relaxing in beautiful gardens, or enjoying the lively café culture, Melbourne offers an unforgettable experience full of character, creativity, and charm.'
      ],
      highlights: [
        'One of the world’s most livable cities',
        'Famous laneways and street art culture',
        'Globally celebrated coffee and café scene',
        'Vibrant arts, music, and cultural festivals',
        'Incredible international food and dining'
      ],
      quote: 'Melbourne is more than just a city – it’s an experience waiting to be discovered',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & City Exploration', description: 'Arrive in Melbourne, check-in to your hotel. Afternoon guided walking tour of the famous laneways and arcades.' },
        { day: 'Day 2', title: 'Arts & Culture', description: 'Visit the National Gallery of Victoria, explore the Royal Botanic Gardens, and enjoy a dinner cruise on the Yarra River.' },
        { day: 'Day 3', title: 'Food & Wine', description: 'Full day tour to the Yarra Valley for wine tasting and gourmet local produce.' }
      ],
      inclusions: ['2 nights accommodation', 'Daily breakfast', 'Guided laneways tour', 'Yarra Valley day trip', 'Airport transfers'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses', 'Meals not specified'],
      price: 'From $899 AUD',
      videos: ['https://www.youtube.com/embed/AbtyFah6fPY?si=FPVVN9Bv6X-V478R'],
      gallery: [
        'https://i.postimg.cc/VsDDs0LX/1_(10).jpg',
        'https://i.postimg.cc/bY33YSN9/1_(17).jpg',
        'https://i.postimg.cc/qBjjB6MC/1_(2).jpg',
        'https://i.postimg.cc/NGppG2fX/1_(2).jpg',
        'https://i.postimg.cc/ZYVVYvKd/1_(3).jpg',
        'https://i.postimg.cc/NGppG2f1/1_(8).jpg',
        'https://i.postimg.cc/VsDDs0LF/1_(5).jpg'
      ]
    },
    'Great Barrier Reef': {
      title: 'Great Barrier Reef',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80',
      description: [
        'Embark on an unforgettable journey to the breathtaking Great Barrier Reef, one of the most spectacular natural wonders on Earth. Stretching for over 2,300 kilometres along the coast of Queensland, this UNESCO World Heritage treasure is home to an extraordinary underwater world filled with vibrant coral gardens and thousands of species of marine life.',
        'Snorkel or dive in crystal-clear turquoise waters and discover a colourful paradise beneath the surface. Swim alongside tropical fish, graceful sea turtles, and magnificent coral formations that create one of the most diverse marine ecosystems on the planet.',
        'Departing from the tropical gateway city of Cairns, your adventure begins with a scenic cruise across the Coral Sea, offering spectacular views and the chance to witness the beauty of the reef from above before exploring its wonders below.',
        'Whether you\'re an experienced diver or trying snorkeling for the first time, the Great Barrier Reef promises a truly magical experience. With professional guides, modern vessels, and stunning reef locations, every moment is designed to immerse you in the beauty of this natural masterpiece.'
      ],
      highlights: [
        'Explore the world-famous Great Barrier Reef',
        'Snorkel or dive among vibrant coral reefs',
        'Encounter tropical fish, turtles, and marine life',
        'Scenic cruise across the stunning Coral Sea',
        'Suitable for both beginners and experienced divers'
      ],
      quote: 'A visit to the Great Barrier Reef isn’t just a tour — it’s a once-in-a-lifetime experience that will leave you with unforgettable memories of Australia’s most extraordinary natural wonder.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Cairns', description: 'Arrive in tropical Cairns. Evening at leisure to explore the Esplanade.' },
        { day: 'Day 2', title: 'Outer Reef Cruise', description: 'Full day cruise to the Outer Great Barrier Reef. Includes snorkeling equipment, semi-submersible tour, and buffet lunch.' },
        { day: 'Day 3', title: 'Kuranda Rainforest', description: 'Scenic Railway journey to Kuranda, explore the rainforest village, and return via the Skyrail Rainforest Cableway.' }
      ],
      inclusions: ['3 nights accommodation', 'Outer Reef full day cruise', 'Snorkeling gear & lunch on reef', 'Kuranda day tour', 'Return airport transfers'],
      exclusions: ['Flights', 'Scuba diving (optional extra)', 'Travel insurance', 'Dinners'],
      price: 'From $1,250 AUD',
      videos: ['https://www.youtube.com/embed/1LJkg2DKELE', 'https://www.youtube.com/embed/j1-xNNQ2T0Y'],
      gallery: [
        'https://i.postimg.cc/Zq4pB3ZK/1_(1).jpg',
        'https://i.postimg.cc/VNmnrM15/1_(1).jpg',
        'https://i.postimg.cc/KYfLnzv5/1_(10).jpg',
        'https://i.postimg.cc/6Qtn2Rwp/1_(2).jpg',
        'https://i.postimg.cc/zf8KbW5V/1_(2).jpg',
        'https://i.postimg.cc/k5qK6896/1_(3).jpg',
        'https://i.postimg.cc/fbDmtXZm/1_(5).jpg',
        'https://i.postimg.cc/HLdXc5H0/1_(6).jpg',
        'https://i.postimg.cc/CK7Dj1Ln/1_(7).jpg',
        'https://i.postimg.cc/zf7WnBXn/1_(9).jpg'
      ]
    },
    'Sydney Highlights': {
      title: 'Sydney Highlights',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
      description: [
        'Experience the very best of Sydney, one of the world’s most beautiful harbour cities. This unforgettable tour takes you to Sydney’s most iconic landmarks, offering breathtaking views, vibrant culture, and unforgettable coastal scenery.',
        'Marvel at the world-famous Sydney Opera House and capture stunning photos of the magnificent Harbour Bridge, two of Australia’s most recognised symbols. Stroll through the historic Rocks District, where Sydney’s rich history meets modern cafés, galleries, and local markets.',
        'Continue your journey along Sydney’s spectacular coastline to the legendary Bondi Beach, where golden sands, rolling surf, and relaxed beachside culture create the perfect Australian atmosphere. Enjoy scenic viewpoints along the way and take in panoramic views of the Pacific Ocean.',
        'Whether it’s your first visit or a return to this incredible city, Sydney Highlights is the perfect introduction to the beauty, history, and vibrant lifestyle of Australia’s most famous city.'
      ],
      highlights: [
        'Visit the iconic Sydney Opera House',
        'Photo stop at the magnificent Sydney Harbour Bridge',
        'Explore historic The Rocks',
        'Scenic coastal drive to Bondi Beach',
        'Stunning harbour and ocean views.'
      ],
      quote: '',
      itinerary: [
        { day: 'Day 1', title: 'Welcome to Sydney', description: 'Arrive in Sydney and transfer to your hotel. Evening sunset cruise on Sydney Harbour with dinner.' },
        { day: 'Day 2', title: 'City & Bondi Tour', description: 'Morning guided tour of the Opera House, The Rocks, and Mrs Macquarie\'s Chair. Afternoon visit to Bondi Beach.' },
        { day: 'Day 3', title: 'Blue Mountains', description: 'Full day excursion to the Blue Mountains, including Echo Point, Three Sisters, and Scenic World.' }
      ],
      inclusions: ['3 nights accommodation', 'Harbour dinner cruise', 'Half-day city tour', 'Blue Mountains day trip', 'Airport transfers'],
      exclusions: ['Flights', 'Travel insurance', 'Lunches and dinners (except cruise)'],
      price: 'From $1,100 AUD',
      videos: ['https://www.youtube.com/embed/xltecjj3g6c'],
      gallery: [
        'https://i.postimg.cc/WzL2zmLG/1_(1).jpg',
        'https://i.postimg.cc/mkfbk3fX/1_(1).jpg',
        'https://i.postimg.cc/sxdVxPdT/1_(2).jpg',
        'https://i.postimg.cc/XqSVqKSD/1_(2).jpg',
        'https://i.postimg.cc/3N5KNj5P/1_(4).jpg',
        'https://i.postimg.cc/XqSVqK6W/1_(5).jpg',
        'https://i.postimg.cc/ZntTnPz4/1_(6).jpg',
        'https://i.postimg.cc/gjFYjybG/1_(7).jpg'
      ]
    },
    'Brisbane & Gold Coast': {
      title: 'Brisbane & Gold Coast',
      image: 'https://i.postimg.cc/kM69SpT2/1_(8).jpg',
      description: [
        'Discover the vibrant energy of Brisbane and the breathtaking coastal beauty of the Gold Coast, two of Australia’s most exciting destinations where modern city life meets world-class beaches.',
        'Begin your journey in Brisbane, a dynamic riverside city known for its relaxed lifestyle, stylish cafés, and beautiful riverfront parks. Stroll along the lively South Bank Parklands, enjoy panoramic views of the city skyline, and soak up the warm Queensland sunshine.',
        'From there, travel south to the spectacular Gold Coast, a paradise famous for its golden beaches, sparkling blue ocean, and thrilling entertainment. Feel the excitement of the region’s world-class theme parks, including the iconic Warner Bros. Movie World, Sea World, and Dreamworld.',
        'Relax on the famous sands of Surfers Paradise Beach, where endless sunshine, rolling waves, and vibrant nightlife create the perfect holiday atmosphere.'
      ],
      highlights: [
        'Discover the lively riverfront culture of Brisbane',
        'Explore the beautiful South Bank Parklands',
        'Experience the thrill of Gold Coast’s world-class theme parks',
        'Relax on the iconic beaches of Surfers Paradise',
        'Enjoy the perfect mix of city lifestyle and coastal adventure'
      ],
      quote: 'From stunning beaches and thrilling attractions to vibrant city culture, the Brisbane & Gold Coast tour offers the ultimate Queensland experience filled with sunshine, excitement, and unforgettable memories.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival in Brisbane', description: 'Arrive in Brisbane and explore the South Bank Parklands.' },
        { day: 'Day 2', title: 'Gold Coast Transfer & Theme Parks', description: 'Travel to the Gold Coast and spend the day at a world-class theme park.' },
        { day: 'Day 3', title: 'Surfers Paradise', description: 'Relax on the beach and enjoy the vibrant nightlife of Surfers Paradise.' }
      ],
      inclusions: ['Accommodation', 'Theme park entry', 'Transport between Brisbane and Gold Coast'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'From $950 AUD',
      videos: ['https://www.youtube.com/embed/2vi33YsIKAU'],
      gallery: [
        'https://i.postimg.cc/5jdsQ0nn/1_(1).jpg',
        'https://i.postimg.cc/MX29fTd9/1_(1).webp',
        'https://i.postimg.cc/5jdsQ0nK/1_(1).jpg',
        'https://i.postimg.cc/pybs5Tq6/1_(2).jpg',
        'https://i.postimg.cc/ThMt5wt8/1_(2).webp',
        'https://i.postimg.cc/zDb5hcxJ/1_(4).jpg',
        'https://i.postimg.cc/9XRV9nLf/1_(5).jpg',
        'https://i.postimg.cc/fWtZdr8y/1_(6).jpg',
        'https://i.postimg.cc/pVhxj6sp/1_(7).jpg',
        'https://i.postimg.cc/kM69SpT2/1_(8).jpg'
      ]
    },
    'Adelaide & Barossa': {
      title: 'Adelaide, Hahndorf & Barossa Valley',
      image: 'https://i.postimg.cc/Kc0F3gS8/1_(1).jpg',
      description: [
        'Discover the timeless elegance of Adelaide, a charming city known for its beautiful parklands, vibrant markets, and relaxed lifestyle. Often called the “City of Churches,” Adelaide offers a perfect blend of culture, history, and modern sophistication.',
        'Just a short scenic drive into the picturesque Adelaide Hills, you will arrive at the enchanting German village of Hahndorf. Founded in 1839 by German settlers, Hahndorf is Australia’s oldest surviving German village, famous for its charming heritage buildings, boutique shops, artisan foods, and traditional German cafés. Stroll along its historic main street and experience a delightful blend of European culture and Australian countryside.',
        'The journey continues to the world-renowned Barossa Valley, one of Australia’s most celebrated wine regions. Surrounded by rolling vineyards and picturesque landscapes, Barossa is home to over 150 wineries producing some of the finest wines in the world.',
        'Enjoy premium wine tastings at iconic cellar doors, discover family-owned wineries, and indulge in delicious local produce perfectly paired with award-winning wines. From bold Shiraz to elegant Riesling, every sip reflects the rich winemaking heritage of this remarkable region.'
      ],
      highlights: [
        'Explore the elegant city of Adelaide',
        'Visit the historic German village of Hahndorf',
        'Experience the scenic beauty of Adelaide Hills',
        'Enjoy world-class wine tastings in Barossa Valley',
        'Discover gourmet food and award-winning Australian wines'
      ],
      quote: 'From charming European-style villages to world-famous vineyards, the Adelaide, Hahndorf & Barossa Valley tour offers an unforgettable journey through the culture, flavors, and landscapes of South Australia.',
      itinerary: [
        { day: 'Day 1', title: 'Adelaide City Tour', description: 'Explore the elegant city of Adelaide, including its beautiful parklands and vibrant markets.' },
        { day: 'Day 2', title: 'Hahndorf Village', description: 'Visit the historic German village of Hahndorf in the Adelaide Hills.' },
        { day: 'Day 3', title: 'Barossa Valley Wine Tasting', description: 'Full day tour of the Barossa Valley, enjoying premium wine tastings and gourmet food.' }
      ],
      inclusions: ['Accommodation', 'Wine tasting fees', 'Guided tours'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'From $850 AUD',
      videos: ['https://www.youtube.com/embed/NQQ03tDkF4E?si=Wtbh3CR7RHDmh5Iw'],
      gallery: [
        'https://i.postimg.cc/FFTmkJ5f/1_(1).png',
        'https://i.postimg.cc/hPhnLPcL/1_(1).jpg',
        'https://i.postimg.cc/g2ZP7Swr/1_(10).jpg',
        'https://i.postimg.cc/kgbdH1VV/1_(11).jpg',
        'https://i.postimg.cc/WbtVGbTS/1_(2).jpg',
        'https://i.postimg.cc/9FShJ5Qk/1_(3).webp',
        'https://i.postimg.cc/KvV2JS8V/1_(3).jpg',
        'https://i.postimg.cc/3J6Tn5xz/1_(4).webp',
        'https://i.postimg.cc/BQy0M9vb/1_(5).jpg',
        'https://i.postimg.cc/wjmdrftv/1_(7).jpg'
      ]
    },
    'Great Ocean Road': {
      title: 'Great Ocean Road',
      image: 'https://i.postimg.cc/vBWh6fKR/1.jpg',
      description: [
        'Experience one of the world’s most breathtaking coastal drives along the legendary Great Ocean Road, where dramatic cliffs, golden beaches, and the vast Southern Ocean create an unforgettable landscape of natural beauty.',
        'This iconic route winds along the stunning coastline of Victoria, offering spectacular ocean views, charming seaside towns, and incredible photo opportunities at every turn. As the road hugs the rugged cliffs, you’ll witness some of Australia’s most famous natural landmarks carved by the power of wind and waves over millions of years.',
        'Marvel at the majestic limestone formations of the world-renowned Twelve Apostles, rising dramatically from the ocean like ancient stone guardians. Continue your journey to the breathtaking Loch Ard Gorge, where towering cliffs and turquoise waters tell the dramatic story of Australia’s most famous shipwreck.',
        'Along the way, enjoy scenic stops at charming coastal towns such as Lorne and Apollo Bay, where you can relax, explore, and soak in the relaxed coastal lifestyle.'
      ],
      highlights: [
        'Drive along the world-famous Great Ocean Road',
        'Witness the iconic limestone stacks of the Twelve Apostles',
        'Explore the spectacular cliffs of Loch Ard Gorge',
        'Enjoy scenic coastal towns like Lorne and Apollo Bay',
        'Capture unforgettable views of the rugged Southern Ocean coastline'
      ],
      quote: 'From dramatic ocean cliffs to legendary natural formations, the Great Ocean Road tour delivers one of Australia’s most awe-inspiring coastal adventures and a journey you will remember for a lifetime.',
      itinerary: [
        { day: '1-Day Tour', title: 'Great Ocean Road Highlights', description: 'Depart Melbourne and drive along the Great Ocean Road, stopping at Lorne, Apollo Bay, the Twelve Apostles, and Loch Ard Gorge before returning to Melbourne.' },
        { day: '2-Day Tour (Day 1)', title: 'Coastal Drive & Overnight Stay', description: 'Enjoy a relaxed pace along the Great Ocean Road. Stop at coastal towns, spot wildlife, and stay overnight at Apollo Bay or Port Campbell.' },
        { day: '2-Day Tour (Day 2)', title: 'Shipwreck Coast & Return', description: 'Explore the Twelve Apostles at sunrise, Loch Ard Gorge, and other spectacular formations in Port Campbell National Park before heading back to Melbourne.' }
      ],
      inclusions: ['Guided group tour', 'Transport', 'Overnight accommodation at Apollo Bay or Port Campbell (for 2-Day Tour)'],
      exclusions: ['Flights', 'Travel insurance', 'Meals not specified'],
      price: '$130 AUD (1-Day) | $450 AUD (2-Day) per person (Group)',
      videos: ['https://www.youtube.com/embed/k8nuzc78bxQ'],
      gallery: [
        'https://i.postimg.cc/2yrwd3pm/2.jpg',
        'https://i.postimg.cc/Zn4cP0kS/3.jpg',
        'https://i.postimg.cc/T1f9jh8f/4.jpg',
        'https://i.postimg.cc/sxscP1FC/5.jpg',
        'https://i.postimg.cc/prRZQyNP/6.jpg',
        'https://i.postimg.cc/Gh3KHBJk/10.jpg',
        'https://i.postimg.cc/HsWzVJ47/7.jpg',
        'https://i.postimg.cc/7YP9fCM1/IMG_9164.jpg'
      ]
    },
    'Yarra Valley': {
      title: 'Yarra Valley',
      image: 'https://i.postimg.cc/V6SH0jsB/42.jpg',
      description: [
        'Escape the city and discover the rolling vineyards and breathtaking landscapes of Yarra Valley, one of Australia’s most celebrated wine regions located just a short drive from Melbourne.',
        'Surrounded by lush green hills, picturesque vineyards, and charming country estates, Yarra Valley is a paradise for wine lovers and food enthusiasts alike. This renowned region is home to some of Australia’s most prestigious wineries, producing world-class Chardonnay, Pinot Noir, and sparkling wines.',
        'Enjoy exclusive wine tastings at elegant cellar doors, meet passionate winemakers, and savour gourmet local produce crafted from the freshest regional ingredients. From artisanal cheeses and handcrafted chocolates to farm-fresh delicacies, every stop along the way offers a delightful culinary experience.',
        'Beyond the vineyards, the Yarra Valley offers breathtaking scenery and a relaxed countryside atmosphere. Visit iconic wineries such as Chandon Australia, famous for its sparkling wines and spectacular vineyard views, or explore boutique wineries hidden among the rolling hills.'
      ],
      highlights: [
        'Discover the stunning vineyards of Yarra Valley',
        'Enjoy premium wine tastings at world-class wineries',
        'Visit the famous Chandon Australia winery',
        'Indulge in delicious gourmet local foods',
        'Experience the beautiful countryside just outside Melbourne'
      ],
      quote: 'From award-winning wines to spectacular vineyard landscapes, the Yarra Valley tour offers a perfect day of relaxation, flavour, and unforgettable Australian wine country charm.',
      itinerary: [
        { day: 'Day 1', title: 'Winery Tours & Tastings', description: 'Visit top wineries including Chandon Australia for exclusive tastings.' },
        { day: 'Day 2', title: 'Gourmet Food Trail', description: 'Sample artisanal cheeses, chocolates, and fresh local produce.' },
        { day: 'Day 3', title: 'Countryside Relaxation', description: 'Enjoy the scenic beauty of the rolling hills before heading back.' }
      ],
      inclusions: ['Accommodation', 'Wine tasting fees', 'Gourmet lunch'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'From $650 AUD',
      videos: ['https://www.youtube.com/embed/vucPf8e3JzE'],
      gallery: [
        'https://i.postimg.cc/KzKs3nc5/15.jpg',
        'https://i.postimg.cc/pTgcfpyk/40.jpg',
        'https://i.postimg.cc/26P9QV3K/43.jpg',
        'https://i.postimg.cc/Y9JD6hjD/44.jpg',
        'https://i.postimg.cc/vBp2rcDP/45.jpg',
        'https://i.postimg.cc/FR2Cy718/IMG_8246.jpg',
        'https://i.postimg.cc/0jDWcPwR/IMG_8256.jpg',
        'https://i.postimg.cc/Y0YnbMWB/IMG_8632.jpg'
      ]
    },
    'Phillip Island': {
      title: 'Phillip Island',
      image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1200&q=80',
      description: [
        'Discover the breathtaking beauty of Phillip Island, one of Victoria’s most beloved coastal destinations, located just a scenic drive from Melbourne. Famous for its incredible wildlife and dramatic coastal landscapes, Phillip Island offers a truly unforgettable Australian nature experience.',
        'As the sun begins to set, prepare for the island’s most magical moment – the world-famous Penguin Parade. Each evening, hundreds of adorable little penguins emerge from the ocean and waddle across the beach to their burrows in the sand dunes. Watching these charming creatures return home at sunset is one of Australia’s most unique and heartwarming wildlife spectacles.',
        'Beyond the penguins, Phillip Island is also known for its rugged cliffs, wild ocean views, and abundant wildlife. Visit the spectacular The Nobbies, where boardwalks overlook the dramatic coastline and the powerful Southern Ocean. Keep an eye out for seals basking on the rocks and seabirds soaring above the waves.',
        'You may also encounter kangaroos, wallabies, and native birdlife as you explore the island’s beautiful natural reserves.'
      ],
      highlights: [
        'Witness the magical Penguin Parade at sunset',
        'Explore the dramatic coastal scenery of Phillip Island',
        'Visit the spectacular ocean viewpoints at The Nobbies',
        'See Australia’s famous little penguins in their natural habitat',
        'Enjoy a scenic journey through Victoria’s beautiful coastline'
      ],
      quote: 'From stunning ocean landscapes to one of the world’s most adorable wildlife experiences, the Phillip Island Tour promises a magical and unforgettable adventure for nature lovers of all ages.',
      itinerary: [
        { day: 'Day 1', title: 'Coastal Scenery & The Nobbies', description: 'Explore the rugged coastline and visit The Nobbies for spectacular ocean views.' },
        { day: 'Day 2', title: 'Wildlife Encounters', description: 'Spot native wildlife including kangaroos and wallabies in natural reserves.' },
        { day: 'Day 3', title: 'Penguin Parade', description: 'Experience the world-famous Penguin Parade at sunset.' }
      ],
      inclusions: ['Accommodation', 'Penguin Parade entry', 'Guided tour'],
      exclusions: ['Flights', 'Travel insurance', 'Meals not specified'],
      price: 'From $550 AUD',
      videos: ['https://www.youtube.com/embed/PCKa1DyB3LU'],
      gallery: [
        'https://i.postimg.cc/LsjDGfB7/1_(1).jpg',
        'https://i.postimg.cc/CKb79DH9/1_(1).jpg',
        'https://i.postimg.cc/xCY5QCt5/1_(1).jpg',
        'https://i.postimg.cc/PxhyHx26/1_(2).jpg',
        'https://i.postimg.cc/cHZhWHX5/1_(3).jpg',
        'https://i.postimg.cc/501gJ0nr/1_(4).jpg',
        'https://i.postimg.cc/NMYDtMpS/1_(5).jpg',
        'https://i.postimg.cc/nzZ2xz06/1_(6).jpg',
        'https://i.postimg.cc/0QxnvQVg/1_(7).jpg'
      ]
    },
    'Bright Autumn': {
      title: 'Bright Autumn',
      image: 'https://i.postimg.cc/0QcffP9D/1.jpg',
      description: [
        'Discover the breathtaking alpine beauty of Bright, a charming mountain town nestled in the heart of Victoria’s spectacular High Country. Surrounded by majestic alpine peaks, crystal-clear rivers, and picturesque valleys, Bright transforms into a stunning natural wonder during the autumn season.',
        'Each year from April to early May, the town bursts into a vibrant display of golden, crimson, and amber leaves, creating one of the most spectacular autumn landscapes in all of Australia. Tree-lined streets, riverside parks, and scenic country roads glow with breathtaking colours, making Bright a paradise for nature lovers and photographers alike.',
        'Stroll through charming avenues covered in falling leaves, relax along the peaceful banks of the Ovens River, and explore boutique cafés, artisan bakeries, and local shops that give this alpine town its warm and welcoming character.',
        'The journey to Bright is just as unforgettable. Travel through rolling countryside, vineyards, and picturesque valleys before arriving in this enchanting mountain retreat.'
      ],
      highlights: [
        'Witness the spectacular autumn colours of Bright',
        'Explore one of Victoria’s most beautiful alpine towns',
        'Scenic drive through the breathtaking High Country',
        'Walk along the tranquil Ovens River',
        'Capture unforgettable autumn photography moments'
      ],
      quote: 'From glowing autumn foliage to peaceful alpine landscapes, the Bright Tour offers a magical escape into one of Victoria’s most beautiful seasonal destinations.',
      itinerary: [
        { day: 'Day 1', title: 'Scenic Drive to High Country', description: 'Travel through rolling countryside and vineyards to reach the alpine town of Bright.' },
        { day: 'Day 2', title: 'Autumn Colours & Ovens River', description: 'Explore the vibrant autumn foliage and relax by the tranquil Ovens River.' },
        { day: 'Day 3', title: 'Local Culture & Departure', description: 'Visit boutique cafés and artisan shops before heading home.' }
      ],
      inclusions: ['Accommodation', 'Guided tour', 'Transport'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'From $650 AUD',
      videos: ['https://www.youtube.com/embed/FJdx3GQuAf4'],
      gallery: [
        'https://i.postimg.cc/pTqZZRPf/1.jpg',
        'https://i.postimg.cc/d339Np0B/10.jpg',
        'https://i.postimg.cc/MTdDDqzc/2.jpg',
        'https://i.postimg.cc/XJQ884nC/3.jpg',
        'https://i.postimg.cc/d14BBwJm/3.webp',
        'https://i.postimg.cc/wv0VVg9Q/4.jpg',
        'https://i.postimg.cc/cHXmm0dT/5.jpg',
        'https://i.postimg.cc/fyyvqpbj/8.jpg',
        'https://i.postimg.cc/zvvk26fF/9.jpg',
        'https://i.postimg.cc/gJNDDmGS/5.webp',
        'https://i.postimg.cc/k4fccq7T/6.jpg',
        'https://i.postimg.cc/C1mNNSwv/7.jpg'
      ]
    },
    'Canberra': {
      title: 'Canberra',
      image: 'https://i.postimg.cc/7G0ZJpC6/IMG-8901.jpg',
      description: [
        'Join us on an unforgettable journey to Canberra, the beautiful capital city of Australia, where modern architecture, national history, and stunning natural scenery come together in perfect harmony.',
        'Canberra is more than just the capital city – it is a destination rich in culture, history, and natural beauty. From world-class museums to breathtaking landscapes, this tour offers a perfect opportunity to explore the true spirit of Australia.'
      ],
      highlights: [
        'Parliament House: Visit Australia’s iconic Parliament House, one of the most impressive government buildings in the world. Walk up to the grass-covered roof and enjoy panoramic views while standing beneath the giant Australian flag.',
        'Australian War Memorial: Explore one of the most moving and significant war museums in the world. This memorial honors the courage and sacrifice of Australian soldiers and features fascinating historical exhibits.',
        'National Gallery of Australia: Discover an incredible collection of artworks, including world-famous Aboriginal art and contemporary masterpieces from Australia and around the globe.',
        'Lake Burley Griffin: Relax by the picturesque lake located in the heart of the city. Enjoy scenic views, fresh air, and perfect photo opportunities along the waterfront.',
        'Australian National Botanic Gardens: Experience Australia’s unique natural beauty with a visit to these beautiful gardens, home to hundreds of native plant species and peaceful walking trails.'
      ],
      quote: 'Come and discover Canberra – the heart of Australia!',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Parliament House', description: 'Arrive in Canberra and visit the iconic Parliament House.' },
        { day: 'Day 2', title: 'Museums & Memorials', description: 'Explore the Australian War Memorial and National Gallery of Australia.' },
        { day: 'Day 3', title: 'Nature & Departure', description: 'Relax by Lake Burley Griffin and visit the Botanic Gardens before departing.' }
      ],
      inclusions: ['Accommodation', 'Guided tours', 'Transport'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'From $750 AUD',
      videos: ['https://www.youtube.com/embed/xQPKjwPBvys?si=foVR26DPr2UVwJ9i'],
      gallery: [
        'https://i.postimg.cc/qRZhSr4x/IMG_8882.jpg',
        'https://i.postimg.cc/Kzskwbxr/IMG_8897.jpg',
        'https://i.postimg.cc/50kYTJbw/IMG_8901.jpg',
        'https://i.postimg.cc/XJDGmW4g/IMG_8907.jpg',
        'https://i.postimg.cc/Y9yGZ7Mn/IMG_8922.jpg',
        'https://i.postimg.cc/d1SkpFwN/IMG_8924.jpg',
        'https://i.postimg.cc/T3J8Tqhh/aa.jpg',
        'https://i.postimg.cc/XYkMncXJ/ab.jpg',
        'https://i.postimg.cc/y8wqKmqm/bbb.jpg'
      ]
    },
    'Mt Buller': {
      title: 'Mt Buller',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1200&q=80',
      description: [
        'Escape the city and step into a breathtaking winter wonderland at Mount Buller, one of the most famous alpine resorts in Australia. Located just a few hours from Melbourne, Mount Buller offers an unforgettable snow adventure filled with excitement, spectacular mountain scenery, and unforgettable winter experiences.',
        'The Mount Buller Snow Tour is more than just a trip – it’s an unforgettable winter adventure filled with excitement, beauty, and magical snowy moments. Join us and discover the incredible charm of Mount Buller this winter.'
      ],
      highlights: [
        'Experience the Snow Like Never Before: Feel the thrill of walking, playing, and exploring in fresh alpine snow. Whether it’s your first time seeing snow or you’re a winter lover, Mount Buller offers magical moments for everyone.',
        'Ski & Snowboard Adventures: Mount Buller is home to over 80 km of ski runs, making it one of Australia’s premier ski destinations. Beginners and experienced skiers alike can enjoy world-class slopes and professional ski facilities.',
        'Fun Snow Activities for Everyone: Not a skier? No problem! Enjoy snow play, tobogganing, snowball fights, and plenty of family-friendly winter activities.',
        'Spectacular Alpine Scenery: Surrounded by stunning mountain landscapes and snow-covered forests, Mount Buller is a paradise for nature lovers and photographers.',
        'Perfect Winter Photo Opportunities: Capture unforgettable moments with breathtaking snowy landscapes, charming alpine lodges, and panoramic mountain views.',
        'Explore the Alpine Village: Warm up in cozy cafés and restaurants in the charming Mount Buller village, where you can enjoy hot chocolate, delicious food, and relaxing mountain vibes.'
      ],
      quote: 'One of Australia’s most popular snow destinations. Stunning alpine scenery only a few hours from Melbourne. Perfect for families, couples, and adventure seekers. A true winter wonderland experience.',
      itinerary: [
        { day: 'Day 1', title: 'Journey to the Snow', description: 'Depart Melbourne and travel to the beautiful alpine resort of Mount Buller.' },
        { day: 'Day 2', title: 'Snow Adventures', description: 'Enjoy a full day of skiing, snowboarding, or snow play.' },
        { day: 'Day 3', title: 'Alpine Village & Return', description: 'Explore the charming village before returning to Melbourne.' }
      ],
      inclusions: ['Accommodation', 'Mountain entry fee', 'Transport'],
      exclusions: ['Ski equipment hire', 'Lift passes', 'Meals'],
      price: 'From $450 AUD',
      videos: ['https://www.youtube.com/embed/9sD0N8Dj6wc'],
      gallery: [
        'https://i.postimg.cc/25y9J3XN/IMG_8817.jpg',
        'https://i.postimg.cc/CK5rtd60/IMG_8818.jpg',
        'https://i.postimg.cc/q7qDYgZd/IMG_8821.jpg',
        'https://i.postimg.cc/bv5Vj84K/IMG_8823.jpg',
        'https://i.postimg.cc/ZqQshZ1k/IMG_8826.jpg',
        'https://i.postimg.cc/Bvz7Gsd3/IMG_8846_EFFECTS.jpg',
        'https://i.postimg.cc/LsWQMRr2/IMG_8866_(1).jpg'
      ]
    },
    'Puffing Billy Steam Train': {
      title: 'Puffing Billy Steam Train',
      image: 'https://i.postimg.cc/283q1Dt2/1_(1).webp',
      description: [
        'Step aboard the legendary Puffing Billy Railway, one of the most famous steam train experiences in the world, and travel through the breathtaking forests of the Dandenong Ranges, just outside Melbourne.',
        'This unforgettable journey offers a perfect combination of history, nature, and adventure – making it one of the most popular attractions for visitors to Melbourne. The Puffing Billy Steam Train Tour is more than just a train ride – it’s a magical journey back in time through one of Victoria’s most beautiful landscapes.',
        'Join us and experience the charm, history, and natural beauty of this unforgettable adventure!'
      ],
      highlights: [
        'Ride the Historic Steam Train: Experience the charm of the century-old steam train as it slowly winds its way through lush forests, rolling hills, and picturesque countryside. The highlight of the trip is sitting on the open carriage windows with your legs hanging out – a unique tradition that visitors love.',
        'Cross the Famous Monbulk Creek Trestle Bridge: One of the most photographed moments of the tour is when the train crosses the spectacular wooden trestle bridge surrounded by towering eucalyptus trees and beautiful mountain scenery.',
        'Explore the Beautiful Dandenong Ranges: Enjoy the fresh mountain air and stunning natural landscapes of the Dandenong Ranges. This region is known for its towering forests, charming villages, and peaceful atmosphere.',
        'Perfect Photo Opportunities: From historic railway stations to scenic forest views, every stop along the journey offers wonderful photo spots to capture unforgettable memories.',
        'Visit Charming Local Villages: Take time to explore lovely towns such as Belgrave and Emerald, where you can enjoy cozy cafés, local shops, and relaxing countryside vibes.'
      ],
      quote: 'One of Australia’s most iconic heritage railways. A unique steam train experience over 100 years old. Stunning forest scenery in the Dandenong Ranges. Perfect for families, couples, and photographers.',
      itinerary: [
        { day: 'Day 1', title: 'Dandenong Ranges & Train Ride', description: 'Travel to the Dandenong Ranges and enjoy a scenic ride on the Puffing Billy Steam Train.' }
      ],
      inclusions: ['Train ticket', 'Guided tour', 'Transport'],
      exclusions: ['Meals', 'Personal expenses'],
      price: 'From $150 AUD',
      videos: ['https://www.youtube.com/embed/GX9i5wcHv3M'],
      gallery: [
        'https://i.postimg.cc/xTqkX2Zs/1_(1).jpg',
        'https://i.postimg.cc/MKXcnSLP/1_(1).jpg',
        'https://i.postimg.cc/MKXcnSL5/1_(2).jpg',
        'https://i.postimg.cc/HsjJrgNK/1_(3).jpg',
        'https://i.postimg.cc/Gh9B4CfW/1_(4).jpg',
        'https://i.postimg.cc/pXy9mHSg/1_(5).jpg',
        'https://i.postimg.cc/PrNLCjcG/1_(6).jpg',
        'https://i.postimg.cc/sD1BMr8z/1_(7).jpg',
        'https://i.postimg.cc/Yqj4vHV2/1_(8).jpg'
      ]
    },
    'Maru Koala Park': {
      title: 'Maru Koala Park',
      image: 'https://i.postimg.cc/L5nX7kKv/1_(8).jpg',
      description: [
        'Experience the charm of Australia’s native wildlife with an unforgettable visit to Maru Koala and Animal Park, one of the most beloved wildlife parks in Victoria. Located along the scenic route to Phillip Island, this tour offers visitors a wonderful opportunity to get up close with Australia’s most iconic animals.',
        'The Maru Koala & Animal Park Tour is a delightful experience where visitors can connect with Australia’s incredible wildlife and create unforgettable memories.',
        'Join us and discover the magic of Australian animals at Maru Koala and Animal Park!'
      ],
      highlights: [
        'Meet the Adorable Koalas: Come face-to-face with Australia’s most famous animal – the koala. At Maru Koala Park, you can observe these gentle creatures up close and even take a memorable photo with one.',
        'Hand-Feed Friendly Kangaroos & Wallabies: Step into the open wildlife areas where kangaroos and wallabies roam freely. Visitors can hand-feed them and enjoy a truly interactive wildlife experience.',
        'Discover Unique Australian Animals: Meet a fascinating range of native animals including wombats, dingoes, Tasmanian devils, emus, reptiles, and colorful native birds.',
        'Perfect Wildlife Photo Opportunities: Capture incredible photos with Australia’s most iconic animals in a natural and relaxed environment.',
        'Relax in a Natural Bushland Setting: Surrounded by peaceful Australian bushland, Maru offers a relaxing and family-friendly atmosphere for visitors of all ages.'
      ],
      quote: 'A chance to interact with Australia’s unique wildlife. Perfect for families, children, and animal lovers. Great photo opportunities with native animals. A memorable stop on the way to Phillip Island.',
      itinerary: [
        { day: 'Day 1', title: 'Wildlife Park Visit', description: 'Travel to Maru Koala and Animal Park for a day of wildlife encounters and feeding experiences.' }
      ],
      inclusions: ['Park entry fee', 'Guided tour', 'Transport'],
      exclusions: ['Animal encounters (e.g., koala photo)', 'Meals'],
      price: 'From $120 AUD',
      videos: ['https://www.youtube.com/embed/iblj8RS2RmY'],
      gallery: [
        'https://i.postimg.cc/j582Zg97/1_(1).jpg',
        'https://i.postimg.cc/636TVJHN/1_(1).jpg',
        'https://i.postimg.cc/FRPzDWqz/1_(2).jpg',
        'https://i.postimg.cc/Y9X0bnVv/1_(2).jpg',
        'https://i.postimg.cc/V67vDGTr/1_(3).jpg',
        'https://i.postimg.cc/vBPT3qjf/1_(3).jpg',
        'https://i.postimg.cc/hjCvpyw0/1_(4).jpg',
        'https://i.postimg.cc/GtH2NPwy/1_(5).jpg',
        'https://i.postimg.cc/C5z1tCTD/1_(6).jpg',
        'https://i.postimg.cc/BbX6y59p/1_(7).jpg',
        'https://i.postimg.cc/RhNF815P/1_(9).jpg'
      ]
    },
    'Ballarat Tour': {
      title: 'Ballarat Tour',
      image: 'https://i.postimg.cc/h404bP6z/1_(1).webp',
      description: [
        'Travel back in time and discover the fascinating story of Australia’s gold rush era with an unforgettable journey to Ballarat, one of the most historic and charming cities in Australia. Located just 1.5 hours from Melbourne, Ballarat offers visitors a unique opportunity to experience the excitement of the 19th-century gold rush that transformed Australia.',
        'The Ballarat Tour is more than just a day trip – it’s a journey into the golden chapter of Australia’s history, where adventure, culture, and heritage come together.',
        'Join us and uncover the treasures of Ballarat!'
      ],
      highlights: [
        'Explore the Famous Sovereign Hill: Step into a living museum that recreates the vibrant gold mining town of the 1850s. Walk along historic streets, meet costumed characters, ride in horse-drawn carriages, and even try your luck at panning for real gold.',
        'Discover the Historic Streets of Ballarat: Admire the grand Victorian architecture that reflects the wealth and prosperity brought by the gold rush. Every building and street tells a story from Australia’s golden past.',
        'Relax at the Beautiful Ballarat Botanical Gardens: Enjoy a peaceful stroll through one of Victoria’s most beautiful gardens beside Lake Wendouree, surrounded by elegant statues, colorful flowers, and stunning lakeside views.',
        'A Photographer’s Dream: From historic gold-rush streets to tranquil gardens and lake reflections, Ballarat offers countless picturesque spots perfect for capturing unforgettable travel memories.'
      ],
      quote: 'Why You’ll Love This Tour: Experience Australia’s legendary gold rush history, try real gold panning at Sovereign Hill, explore charming historic architecture, and enjoy scenic gardens and lakeside landscapes.',
      itinerary: [
        { day: 'Day 1', title: 'Ballarat & Sovereign Hill', description: 'Travel to Ballarat, visit Sovereign Hill, explore the historic streets, and relax at the Botanical Gardens.' }
      ],
      inclusions: ['Transport', 'Sovereign Hill entry', 'Guided tour'],
      exclusions: ['Meals', 'Personal expenses'],
      price: 'From $145 AUD',
      videos: ['https://www.youtube.com/embed/GqDfM5uj5mg'],
      gallery: [
        'https://i.postimg.cc/PfMfzr9w/1_(1).jpg',
        'https://i.postimg.cc/ZYLYFK2N/1_(1).jpg',
        'https://i.postimg.cc/v8v8LHk7/1_(1).jpg',
        'https://i.postimg.cc/YqqrXBBm/1_(2).jpg',
        'https://i.postimg.cc/kXXJjPPb/1_(2).jpg',
        'https://i.postimg.cc/KvvG9hhT/1_(2).webp',
        'https://i.postimg.cc/rFFVh22x/1_(2).jpg',
        'https://i.postimg.cc/155mW11Y/1_(3).jpg',
        'https://i.postimg.cc/rFFVh227/1_(4).jpg'
      ]
    },
    'Mount Macedon': {
      title: 'Mount Macedon',
      image: 'https://i.postimg.cc/L6TSfCqb/9_(4).jpg',
      description: [
        'Just a short drive from Melbourne, the beautiful Mount Macedon offers a refreshing escape into nature, fresh mountain air, and breathtaking scenery. Known for its stunning forests, charming gardens, and panoramic views, Mount Macedon is one of Victoria’s most relaxing and picturesque destinations.',
        'The Mount Macedon Tour is the perfect getaway for anyone looking to relax, explore nature, and experience one of Victoria’s most beautiful mountain landscapes.'
      ],
      highlights: [
        'Spectacular Views from Mount Macedon Memorial Cross: Enjoy sweeping panoramic views across the countryside and surrounding valleys from the famous Memorial Cross lookout, one of the most iconic viewpoints in Victoria.',
        'Explore the Stunning Forest Glade Gardens: Discover one of Australia’s most beautiful private gardens, featuring tranquil lakes, vibrant flowers, and charming European-style landscapes.',
        'Seasonal Beauty All Year Round: Mount Macedon is especially famous for its spectacular autumn colors, when the forests transform into shades of gold, orange, and red.',
        'Peaceful Nature Walks: Enjoy relaxing walks through cool mountain forests filled with towering trees, birds, and fresh alpine air.',
        'Perfect Photo Opportunities: From scenic mountain lookouts to colourful gardens and forest trails, Mount Macedon offers countless beautiful spots for unforgettable photos.'
      ],
      quote: 'Why You’ll Love This Tour: A relaxing nature escape close to Melbourne, stunning mountain views and scenic landscapes, famous autumn foliage and beautiful gardens, perfect for nature lovers and photographers.',
      itinerary: [
        { day: 'Day 1', title: 'Mount Macedon Escape', description: 'Visit the Memorial Cross, explore Forest Glade Gardens, and enjoy peaceful nature walks.' }
      ],
      inclusions: ['Transport', 'Garden entry fees', 'Guided tour'],
      exclusions: ['Meals', 'Personal expenses'],
      price: 'From $135 AUD',
      videos: ['https://www.youtube.com/embed/aucCVWDZvMo'],
      gallery: [
        'https://i.postimg.cc/k5ZqG22k/1.jpg',
        'https://i.postimg.cc/k5D77QgK/2.jpg',
        'https://i.postimg.cc/1tqPqy6V/3.jpg',
        'https://i.postimg.cc/1zTsX8gm/3.webp',
        'https://i.postimg.cc/5tjffB2s/4.jpg',
        'https://i.postimg.cc/DzDn0SSp/5.jpg',
        'https://i.postimg.cc/xCzYz9HD/6.jpg',
        'https://i.postimg.cc/3Rv7v3pM/7.jpg',
        'https://i.postimg.cc/ydZBZ79d/8.jpg',
        'https://i.postimg.cc/VsXmsLm4/9_(1).jpg',
        'https://i.postimg.cc/G3vd3hdg/9_(1).webp',
        'https://i.postimg.cc/2SSDxQvG/9_(1).jpg',
        'https://i.postimg.cc/fTKsX23X/9_(3).jpg'
      ]
    },
    'Uluru': {
      title: 'Uluru',
      image: 'https://i.postimg.cc/bwHGQMX1/1_(1).webp',
      description: [
        'Embark on a once-in-a-lifetime journey to Uluru, one of the most iconic natural wonders in the world. Located in the vast outback of the Red Centre, Uluru is not only a breathtaking geological formation, but also a sacred site deeply connected to the culture of the Anangu people.'
      ],
      highlights: [
        'Sunrise & Sunset at Uluru: Witness the magical transformation of Uluru as it changes colors from deep red to glowing orange under the desert sky. These unforgettable moments are among the most photographed scenes in Australia.',
        'Guided Base Walk Around Uluru: Explore the base of this massive monolith on a guided walk, where you\'ll discover ancient rock formations, sacred sites, and fascinating Aboriginal stories passed down for thousands of years.',
        'Explore Kata Tjuta (The Olgas): Visit the stunning group of domed rock formations nearby and enjoy scenic walks through valleys and desert landscapes unlike anywhere else on Earth.',
        'Outback Stargazing Experience: Experience the brilliance of the night sky in the Australian outback, where the stars shine brighter than you\'ve ever seen before.',
        'Cultural Experience with the Anangu People: Learn about Indigenous traditions, bush food, and Dreamtime stories that reveal the deep spiritual significance of this land.',
        'Why You\'ll Love This Tour: Visit one of the world\'s most iconic landmarks, experience authentic Aboriginal culture and history, witness unforgettable desert sunrises and sunsets, and explore unique landscapes of Australia\'s Red Center.'
      ],
      quote: 'The Uluru Tour is more than just a trip – it\'s a powerful journey into the soul of Australia, where nature, culture, and history come together in a truly unforgettable way. Join us and discover the magic of Uluru.',
      itinerary: [
        { day: 'Day 1', title: 'Arrival & Sunset', description: 'Arrive at Uluru, check-in, and experience the magical sunset.' },
        { day: 'Day 2', title: 'Base Walk & Kata Tjuta', description: 'Guided base walk around Uluru and afternoon exploration of Kata Tjuta.' },
        { day: 'Day 3', title: 'Sunrise & Departure', description: 'Witness the breathtaking sunrise over Uluru before departing.' }
      ],
      inclusions: ['Accommodation', 'Guided tours', 'Transport'],
      exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
      price: 'Contact us for pricing',
      videos: ['https://www.youtube.com/embed/c-Pp6Vm1nKk?si=XzoAsZ3V9hh-qxmz'],
      gallery: [
        'https://i.postimg.cc/L8Bqz7dk/1_(1).jpg',
        'https://i.postimg.cc/y8XJF5qc/1_(1).jpg',
        'https://i.postimg.cc/L8Bqz7dk/1_(1).jpg',
        'https://i.postimg.cc/nhYsv58Y/1_(2).jpg',
        'https://i.postimg.cc/htbJ9wF1/1_(2).jpg',
        'https://i.postimg.cc/zGSLnMmk/1_(2).webp',
        'https://i.postimg.cc/CKhRJNYC/1_(3).jpg',
        'https://i.postimg.cc/13cgpTxM/1_(4).jpg'
      ]
    },
    'Cherry Farm': {
      title: 'Cherry Farm',
      image: 'https://i.postimg.cc/Y0zjBn6q/1.jpg',
      description: [
        'Enjoy a delightful day in the countryside with our Cherry Farm Tour, where fresh air, scenic landscapes, and the joy of fruit picking come together for a truly memorable experience. Just a short drive from Melbourne, visit beautiful cherry orchards in regions like Yarra Valley and Dandenong Ranges.'
      ],
      highlights: [
        'Pick Your Own Fresh Cherries: Experience the fun of hand-picking ripe, juicy cherries straight from the trees. Taste the sweetness of freshly harvested fruit and take home your own selection.',
        'Relax in Beautiful Orchard Landscapes: Stroll through rows of cherry trees surrounded by rolling hills, vineyards, and fresh country air – a perfect escape from the city.',
        'Perfect Photo Opportunities: Capture stunning photos among vibrant cherry trees, especially during peak season when the orchards are full of color and life.',
        'Family-Friendly Experience: A fun and relaxing activity for families, couples, and friends – suitable for all ages.',
        'Enjoy Local Produce & Farm Experience: Many farms also offer fresh juices, homemade products, and local treats for you to enjoy.',
        'Why You\'ll Love This Tour: Fun and interactive fruit-picking experience, fresh, delicious cherries straight from the farm, beautiful countryside scenery near Melbourne, and perfect for families and nature lovers.'
      ],
      quote: 'The Cherry Farm Tour is a refreshing getaway where you can relax, have fun, and enjoy the simple pleasures of nature and fresh produce. Join us and experience the sweetness of the season.',
      itinerary: [
        { day: 'Day 1', title: 'Cherry Picking', description: 'Visit the cherry farm, enjoy fruit picking, and relax in the beautiful orchard landscapes.' }
      ],
      inclusions: ['Farm entry fee', 'Guided tour', 'Transport'],
      exclusions: ['Meals', 'Personal expenses', 'Cost of picked cherries'],
      price: 'Contact us for pricing',
      videos: ['https://www.youtube.com/embed/-gSY55d7IeU?si=RV3Dpyp9k-gpCm3V'],
      gallery: [
        'https://i.postimg.cc/Vv85TQCk/2.jpg',
        'https://i.postimg.cc/gjHrbSV2/3.webp',
        'https://i.postimg.cc/Y0HjVKWm/4.jpg',
        'https://i.postimg.cc/6qfTxjrz/ee22ace3_9579_493b_93ba_525bd3fb16b0_3648x2736.jpg',
        'https://i.postimg.cc/XqkX6HfC/Miorgan_Hill_460.webp'
      ]
    },
    'Strawberry Farm': {
      title: 'Strawberry Farm',
      image: 'https://i.postimg.cc/nrPgrZG8/1.jpg',
      description: [
        'Enjoy a delightful day in the countryside with our Strawberry Farm Tour, where fresh air, scenic landscapes, and the joy of fruit picking come together for a truly memorable experience. Just a short drive from Melbourne, visit beautiful strawberry farms in regions like Yarra Valley and Dandenong Ranges.'
      ],
      highlights: [
        'Pick Your Own Fresh Strawberries: Experience the fun of hand-picking ripe, juicy strawberries straight from the plants. Taste the sweetness of freshly harvested fruit and take home your own selection.',
        'Relax in Beautiful Farm Landscapes: Stroll through rows of strawberry plants surrounded by rolling hills, vineyards, and fresh country air – a perfect escape from the city.',
        'Perfect Photo Opportunities: Capture stunning photos among vibrant strawberry fields, especially during peak season when the farms are full of color and life.',
        'Family-Friendly Experience: A fun and relaxing activity for families, couples, and friends – suitable for all ages.',
        'Enjoy Local Produce & Farm Experience: Many farms also offer fresh juices, homemade products, and local treats for you to enjoy.',
        'Why You\'ll Love This Tour: Fun and interactive fruit-picking experience, fresh, delicious strawberries straight from the farm, beautiful countryside scenery near Melbourne, and perfect for families and nature lovers.'
      ],
      quote: 'The Strawberry Farm Tour is a refreshing getaway where you can relax, have fun, and enjoy the simple pleasures of nature and fresh produce.',
      itinerary: [
        { day: 'Day 1', title: 'Strawberry Picking', description: 'Visit the strawberry farm, enjoy fruit picking, and relax in the beautiful farm landscapes.' }
      ],
      inclusions: ['Farm entry fee', 'Guided tour', 'Transport'],
      exclusions: ['Meals', 'Personal expenses', 'Cost of picked strawberries'],
      price: 'Contact us for pricing',
      videos: ['https://www.youtube.com/embed/bMV-amDoPPs?si=zkF6PwOh-pYr5T1v'],
      gallery: [
        'https://i.postimg.cc/4ydjXntq/3.jpg',
        'https://i.postimg.cc/j2Fm2K4W/4aec0dccb55542c950b2d4095369b8c8b09ed01c.webp',
        'https://i.postimg.cc/mk5JkRyz/5.jpg',
        'https://i.postimg.cc/L5bw5R3n/7.jpg',
        'https://i.postimg.cc/G37ZqJwQ/IMG_0539.webp',
        'https://i.postimg.cc/wxfS0c8w/IMG_3900.webp',
        'https://i.postimg.cc/jSNmxpW3/Strawberry_Field_187_df7e9ffc_eb46_4d79_b72b_af1650dc1ec0.jpg',
        'https://i.postimg.cc/VkMpfxSH/strawberry_picking_u_pick_farms_seattle_snohomish_tacoma_cc_i_Stock_535468622.jpg'
      ]
    }
  };

  tourData['Uluru & Red Centre'] = tourData['Uluru'];

  tourData['Melbourne 5 Days 4 Nights'] = {
    title: 'Melbourne 5 Ngày 4 Đêm – Lịch Trình Siêu Chi Tiết',
    image: 'https://i.ytimg.com/vi/OsOeSVJEA-0/hqdefault.jpg',
    description: [
      'Lịch trình khám phá Melbourne 5 ngày 4 đêm siêu chi tiết và mới nhất: từ trung tâm văn hóa sôi động Melbourne, cung đường Great Ocean Road kỳ vĩ, thung lũng rượu vang Yarra Valley cho đến đảo Phillip Island ngắm chim cánh cụt.',
      'Toàn bộ kinh nghiệm di chuyển, ăn uống, tham quan thực tế giúp chuyến du lịch nước Úc của bạn trọn vẹn và đáng nhớ nhất.'
    ],
    highlights: [
      'Lịch trình chuẩn 5 ngày 4 đêm khám phá đầy đủ biểu tượng của Melbourne & Victoria.',
      'Cung đường ven biển Great Ocean Road & kỳ quan Twelve Apostles.',
      'Trải nghiệm rượu vang thượng hạng tại thung lũng Yarra Valley.',
      'Khám phá thiên nhiên hoang dã và Penguin Parade tại Phillip Island.',
      'Hướng dẫn du lịch Úc tự túc mới nhất 2026 siêu chi tiết.'
    ],
    quote: 'Melbourne 5 ngày 4 đêm – Cẩm nang du lịch Úc trọn vẹn và thực tế nhất!',
    itinerary: [
      { day: 'Day 1', title: 'Trung tâm Melbourne & Phố cổ nghệ thuật', description: 'Federation Square, Flinders Street Station, các con ngõ nghệ thuật Laneways, và ngắm hoàng hôn bên sông Yarra.' },
      { day: 'Day 2', title: 'Cung đường huyền thoại Great Ocean Road', description: 'Lorne, Apollo Bay, kỳ quan 12 Vị Tông Đồ (Twelve Apostles) và hẻm núi Loch Ard Gorge.' },
      { day: 'Day 3', title: 'Thung lũng rượu vang Yarra Valley & Dandenong', description: 'Trải nghiệm thử rượu vang cao cấp, ghé xưởng sô-cô-la và đi tàu hơi nước Puffing Billy.' },
      { day: 'Day 4', title: 'Đảo Phillip Island & Penguin Parade', description: 'Thăm công viên động vật hoang dã Koala & ngắm đàn chim cánh cụt diễu hành về tổ lúc hoàng hôn.' },
      { day: 'Day 5', title: 'Chợ Queen Victoria & Cà phê Melbourne', description: 'Thưởng thức văn hóa cà phê nức tiếng thế giới và mua sắm nông sản quà lưu niệm đặc sắc.' }
    ],
    inclusions: ['Lịch trình hướng dẫn chi tiết', 'Tư vấn phương tiện & hỗ trợ tham quan'],
    exclusions: ['Chi phí cá nhân', 'Vé máy bay quốc tế'],
    price: 'Video Nổi Bật',
    videos: [
      'https://www.youtube.com/embed/OsOeSVJEA-0?si=vyE2mAx1oGbsFd0i'
    ],
    gallery: [
      'https://i.ytimg.com/vi/OsOeSVJEA-0/hqdefault.jpg',
      'https://i.postimg.cc/T2CC25Yj/1_(13).jpg',
      'https://i.postimg.cc/Hxv91nQh/2.jpg'
    ]
  };

const tourVideoItems = [
  { key: 'Melbourne 5 Days 4 Nights', label: 'Melbourne 5N4Đ Lịch Trình Chi Tiết Video' },
  { key: 'Melbourne Culture', label: 'Melbourne City Tour Video' },
  { key: 'Great Ocean Road', label: 'Great Ocean Road Video' },
  { key: 'Sydney Highlights', label: 'Sydney & Bondi Beach Video' },
  { key: 'Great Barrier Reef', label: 'Great Barrier Reef Video' },
  { key: 'Brisbane & Gold Coast', label: 'Brisbane & Gold Coast Video' },
  { key: 'Adelaide & Barossa', label: 'Adelaide & Barossa Valley Video' },
  { key: 'Yarra Valley', label: 'Yarra Valley Winery Video' },
  { key: 'Phillip Island', label: 'Phillip Island Penguin Parade Video' },
  { key: 'Puffing Billy Steam Train', label: 'Puffing Billy Steam Train Video' },
  { key: 'Mt Buller', label: 'Mt Buller Snow Tour Video' },
  { key: 'Bright Autumn', label: 'Bright Autumn Foliage Video' },
  { key: 'Canberra', label: 'Canberra Capital City Video' },
  { key: 'Uluru', label: 'Uluru & Red Centre Video' },
  { key: 'Maru Koala Park', label: 'Maru Koala & Animal Park Video' },
  { key: 'Ballarat Tour', label: 'Ballarat Sovereign Hill Video' },
  { key: 'Mount Macedon', label: 'Mount Macedon Tour Video' },
  { key: 'Cherry Farm', label: 'Cherry Farm Picking Video' },
  { key: 'Strawberry Farm', label: 'Strawberry Farm Picking Video' }
];

function VideosPage({ 
  onBack, 
  onSelectTour,
  initialVideoKey 
}: { 
  onBack: () => void; 
  onSelectTour: (tourName: string) => void;
  initialVideoKey?: string | null;
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialVideoKey) {
      setSelectedCategory('All');
      setSearchQuery('');
      const timer = setTimeout(() => {
        const el = document.getElementById(`video-${initialVideoKey}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialVideoKey]);

  const categories = [
    'All',
    'Melbourne & Victoria',
    'Sydney & NSW',
    'Queensland',
    'South Australia',
    'Red Centre & ACT',
    'Farm & Nature'
  ];

  const getRegion = (key: string) => {
    if (['Melbourne 5 Days 4 Nights', 'Melbourne Culture', 'Great Ocean Road', 'Yarra Valley', 'Phillip Island', 'Mt Buller', 'Puffing Billy Steam Train', 'Ballarat Tour'].includes(key)) {
      return 'Melbourne & Victoria';
    }
    if (['Maru Koala Park', 'Mount Macedon', 'Bright Autumn', 'Cherry Farm', 'Strawberry Farm'].includes(key)) {
      return 'Farm & Nature';
    }
    if (['Sydney Highlights', 'Blue Mountains'].includes(key)) {
      return 'Sydney & NSW';
    }
    if (['Great Barrier Reef', 'Brisbane & Gold Coast'].includes(key)) {
      return 'Queensland';
    }
    if (['Adelaide & Barossa'].includes(key)) {
      return 'South Australia';
    }
    if (['Uluru', 'Canberra'].includes(key)) {
      return 'Red Centre & ACT';
    }
    return 'Melbourne & Victoria';
  };

  const videoList = Object.entries(tourData)
    .filter(([key, tour]: [string, any]) => tour && tour.videos && tour.videos.length > 0 && key !== 'Uluru & Red Centre')
    .map(([key, tour]: [string, any]) => ({
      key,
      title: tour.title || key,
      image: tour.image,
      videos: tour.videos as string[],
      highlights: tour.highlights || [],
      price: tour.price,
      region: getRegion(key)
    }))
    .sort((a, b) => (a.key === 'Melbourne 5 Days 4 Nights' ? -1 : b.key === 'Melbourne 5 Days 4 Nights' ? 1 : 0));

  const filteredVideos = videoList.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.region === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-24 pt-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-[#00205B] hover:text-[#BE1E2D] font-bold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="bg-gradient-to-r from-[#00205B] via-[#003380] to-[#BE1E2D] rounded-2xl p-8 md:p-12 text-white mb-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="bg-white/20 text-white text-xs md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
              Media Gallery
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Australia Tour Video Highlights</h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Explore the natural wonders, vibrant cities, and iconic Australian adventures through our high-definition tour videos. Get inspired for your next vacation in Australia!
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Video size={280} />
          </div>
        </div>

        {/* Selected Video Banner */}
        {initialVideoKey && tourData[initialVideoKey] && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-[#BE1E2D] text-white p-2.5 rounded-xl shadow-sm shrink-0">
                <Play size={18} className="fill-white" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold tracking-wider text-[#BE1E2D]">Selected Tour Video</p>
                <h4 className="font-bold text-[#00205B] text-base md:text-lg">{tourData[initialVideoKey].title || initialVideoKey}</h4>
              </div>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById(`video-${initialVideoKey}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="text-xs font-bold text-white bg-[#00205B] hover:bg-[#BE1E2D] px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              Watch Video Below ↓
            </button>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00205B] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tours or videos..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#00205B]"
            />
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500 text-lg">No tour videos found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 bg-[#00205B] text-white rounded-md font-semibold text-sm hover:bg-[#BE1E2D] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((item) => (
              <div 
                key={item.key} 
                id={`video-${item.key}`}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 border flex flex-col group ${
                  initialVideoKey === item.key 
                    ? 'ring-4 ring-[#BE1E2D] shadow-2xl scale-[1.02] border-[#BE1E2D]' 
                    : 'shadow-md hover:shadow-xl border-gray-100'
                }`}
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={item.videos[0]}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#00205B]">
                        {item.region}
                      </span>
                      {item.price && (
                        <span className="text-xs font-bold text-[#BE1E2D]">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#00205B] mb-2 group-hover:text-[#BE1E2D] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    {item.highlights && item.highlights.length > 0 && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {item.highlights[0]}
                      </p>
                    )}
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectTour(item.key)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00205B] hover:text-[#BE1E2D] transition-colors cursor-pointer"
                    >
                      View Tour Details <ChevronRight size={16} />
                    </button>
                    {item.videos.length > 1 && (
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">
                        +{item.videos.length - 1} more video
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TourDetailsPage({ tourName, onBack }: { tourName: string, onBack: () => void }) {
  const tour = tourData[tourName] || {
    title: tourName,
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    description: ['Detailed information for this tour is coming soon. Please contact us for more details.'],
    highlights: ['Experience the best of Australia', 'Expert local guides', 'Comfortable transportation'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival', description: 'Welcome to your destination.' },
      { day: 'Day 2', title: 'Exploration', description: 'Full day of sightseeing and activities.' },
      { day: 'Day 3', title: 'Departure', description: 'Transfer to the airport for your onward journey.' }
    ],
    inclusions: ['Accommodation', 'Selected meals', 'Guided tours', 'Transport'],
    exclusions: ['Flights', 'Travel insurance', 'Personal expenses'],
    price: 'Contact for pricing'
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 md:p-16">
          <button 
            onClick={onBack}
            className="absolute top-8 left-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors flex items-center gap-2 px-4"
          >
            <ArrowLeft size={20} /> Back to Tours
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-4xl">{tour.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold text-[#00205B] mb-6 border-b pb-2">Overview</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {tour.description.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            {tour.quote && (
              <p className="mt-8 text-xl font-medium text-[#00205B] italic border-l-4 border-[#BE1E2D] pl-6 py-2 bg-gray-50 rounded-r-lg">
                "{tour.quote}"
              </p>
            )}
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-[#00205B] mb-6 border-b pb-2">Tour Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tour.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-[#00205B]/10 p-1 rounded-full text-[#00205B] mt-1 shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-3xl font-bold text-[#00205B] mb-6 border-b pb-2">Itinerary</h2>
            <div className="space-y-6">
              {tour.itinerary.map((item: any, idx: number) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#BE1E2D] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    {idx < tour.itinerary.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-[#00205B] mb-2">{item.day}: {item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {tour.gallery && tour.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-[#00205B] mb-6 border-b pb-2">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.gallery.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-md h-64 group cursor-pointer">
                    <img src={imgUrl} alt={`${tour.title} gallery image ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Video Highlight */}
          {tour.videos && tour.videos.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-[#00205B] mb-6 border-b pb-2">Video Highlight</h2>
              <div className="space-y-6">
                {tour.videos.map((videoUrl: string, index: number) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100">
                    <iframe 
                      className="w-full h-full"
                      src={videoUrl} 
                      title={`YouTube video player ${index + 1}`} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                    </iframe>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Pricing Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
            <div className="text-center mb-6">
              <p className="text-gray-500 font-medium mb-1">Starting from</p>
              <p className="text-4xl font-bold text-[#BE1E2D]">{tour.price}</p>
              <p className="text-sm text-gray-400 mt-2">per person, twin share</p>
            </div>
            
            <button className="w-full bg-[#00205B] hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg shadow-md mb-4">
              Book This Tour
            </button>
            <button className="w-full bg-white border-2 border-[#00205B] text-[#00205B] hover:bg-gray-50 font-bold py-4 px-6 rounded-xl transition-colors text-lg">
              Enquire Now
            </button>

            <hr className="my-8 border-gray-100" />

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#00205B] mb-3 flex items-center gap-2">
                  <Check size={20} className="text-green-500" /> Inclusions
                </h4>
                <ul className="space-y-2">
                  {tour.inclusions.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#00205B] mb-3 flex items-center gap-2">
                  <XIcon size={20} className="text-red-500" /> Exclusions
                </h4>
                <ul className="space-y-2">
                  {tour.exclusions.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedImageGallery, setZoomedImageGallery] = useState<string[]>([]);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number>(0);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        // Prevent zooming the already zoomed image
        if (target.closest('.zoomed-image-container')) return;
        
        const src = (target as HTMLImageElement).src;
        if (src) {
          // Find all images on the page to create a gallery context
          const allImages = Array.from(document.querySelectorAll('img'))
            .filter(img => !img.closest('.zoomed-image-container'))
            .map(img => img.src)
            .filter(src => src && !src.includes('data:image'));
            
          const uniqueImages = Array.from(new Set(allImages));
          const index = uniqueImages.indexOf(src);
          
          setZoomedImageGallery(uniqueImages);
          setZoomedImageIndex(index !== -1 ? index : 0);
          setZoomedImage(src);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    if (!zoomedImage || zoomedImageGallery.length <= 1) return;

    const handleGalleryKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setZoomedImageIndex(prev => {
          const newIndex = (prev - 1 + zoomedImageGallery.length) % zoomedImageGallery.length;
          setZoomedImage(zoomedImageGallery[newIndex]);
          return newIndex;
        });
      } else if (e.key === 'ArrowRight') {
        setZoomedImageIndex(prev => {
          const newIndex = (prev + 1) % zoomedImageGallery.length;
          setZoomedImage(zoomedImageGallery[newIndex]);
          return newIndex;
        });
      }
    };

    window.addEventListener('keydown', handleGalleryKeyDown);
    return () => window.removeEventListener('keydown', handleGalleryKeyDown);
  }, [zoomedImage, zoomedImageGallery]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [showPremiumFleet, setShowPremiumFleet] = useState(false);
  const [showVideosPage, setShowVideosPage] = useState(false);
  const [lastEscapeTime, setLastEscapeTime] = useState<number>(0);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (showPremiumFleet) {
          setShowPremiumFleet(false);
        } else if (showVideosPage) {
          setShowVideosPage(false);
          setSelectedVideoKey(null);
        } else if (selectedTour) {
          const now = Date.now();
          if (now - lastEscapeTime < 1000) {
            setSelectedTour(null);
            setLastEscapeTime(0);
          } else {
            setLastEscapeTime(now);
          }
        }
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [zoomedImage, selectedTour, showPremiumFleet, showVideosPage, lastEscapeTime]);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isDayToursOpen, setIsDayToursOpen] = useState(false);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTransportOpen, setIsTransportOpen] = useState(false);
  const [activeTransportState, setActiveTransportState] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false);
  const [selectedVideoKey, setSelectedVideoKey] = useState<string | null>(null);
  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterVideo = () => {
    if (videoTimeoutRef.current) {
      clearTimeout(videoTimeoutRef.current);
      videoTimeoutRef.current = null;
    }
    setIsVideoOpen(true);
  };

  const handleMouseLeaveVideo = () => {
    if (videoTimeoutRef.current) {
      clearTimeout(videoTimeoutRef.current);
    }
    videoTimeoutRef.current = setTimeout(() => {
      setIsVideoOpen(false);
    }, 400);
  };
  const [showExplore, setShowExplore] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [socialModalType, setSocialModalType] = useState<'zalo' | 'whatsapp' | null>(null);

  // Real Visitor counter statistics
  const [visitorStats, setVisitorStats] = useState({
    online: 1,
    day: 1,
    week: 1,
    month: 1,
    totalVisits: 1
  });

  useEffect(() => {
    let clientId = localStorage.getItem('aat_client_id');
    if (!clientId) {
      clientId = 'client_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      localStorage.setItem('aat_client_id', clientId);
    }

    const isNewSession = !sessionStorage.getItem('aat_session_registered');
    if (isNewSession) {
      sessionStorage.setItem('aat_session_registered', 'true');
    }

    const fetchStats = async (isNew: boolean) => {
      try {
        const res = await fetch('/api/stats/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clientId, isNewSession: isNew })
        });
        if (res.ok) {
          const data = await res.json();
          setVisitorStats({
            online: data.online || 1,
            day: data.day || 1,
            week: data.week || 1,
            month: data.month || 1,
            totalVisits: data.totalVisits || 1
          });
          localStorage.setItem('aat_cached_stats', JSON.stringify(data));
          return;
        }
      } catch (err) {
        console.warn('Real stats API unreachable, using local calculation:', err);
      }

      // Fallback calculation from site launch date if offline
      const launch = new Date('2026-09-29T00:00:00.000Z');
      const now = new Date();
      const diffMs = Math.max(0, now.getTime() - launch.getTime());
      const calcDay = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
      const calcWeek = Math.floor((calcDay - 1) / 7) + 1;
      const calcMonth = (now.getFullYear() - launch.getFullYear()) * 12 + (now.getMonth() - launch.getMonth()) + 1;

      const cached = localStorage.getItem('aat_cached_stats');
      let fallbackVisits = 1;
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          fallbackVisits = parsed.totalVisits || 1;
        } catch {}
      }
      if (isNew) {
        fallbackVisits += 1;
      }

      setVisitorStats({
        online: 1,
        day: calcDay,
        week: calcWeek,
        month: calcMonth,
        totalVisits: fallbackVisits
      });
    };

    fetchStats(isNewSession);

    // Heartbeat to keep real active online visitor count updated every 20 seconds
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/stats/heartbeat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clientId })
        });
        if (res.ok) {
          const data = await res.json();
          setVisitorStats(prev => ({
            ...prev,
            online: data.online || 1,
            day: data.day || prev.day,
            week: data.week || prev.week,
            month: data.month || prev.month,
            totalVisits: data.totalVisits || prev.totalVisits
          }));
        }
      } catch {}
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<{sender: 'user'|'ai', text: string}[]>([
    { sender: 'ai', text: 'Hi there! 👋 I\'m your virtual travel assistant. How can I help you plan your Australian adventure today?' }
  ]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    const newMsg = { sender: 'user' as const, text: chatMessage };
    setMessages(prev => [...prev, newMsg]);
    setChatMessage('');

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: 'Thank you for your message! I am an AI assistant demo. Our team will be happy to help you book your dream Australian tour.'
      }]);
    }, 1000);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedTour(null);
    setShowPremiumFleet(false);
    setShowVideosPage(false);
    setSelectedVideoKey(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsTransportOpen(false);
    setIsVideoOpen(false);
    setIsMobileVideoOpen(false);
    setIsMenuOpen(false);
    setIsDestinationsOpen(false);
    setIsDayToursOpen(false);
    setShowExplore(false);
    setShowContact(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setSocialModalType(null);
  };

  const handleDestinationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedTour(null);
    setShowPremiumFleet(false);
    setShowVideosPage(false);
    setSelectedVideoKey(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsDestinationsOpen(true);
    setIsDayToursOpen(false);
    setIsTransportOpen(false);
    setIsVideoOpen(false);
  };

  const handleDayToursClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedTour(null);
    setShowPremiumFleet(false);
    setShowVideosPage(false);
    setSelectedVideoKey(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsDayToursOpen(true);
    setIsDestinationsOpen(false);
    setIsTransportOpen(false);
    setIsVideoOpen(false);
  };

  const handleTransportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransportOpen(!isTransportOpen);
    setIsDestinationsOpen(false);
    setIsDayToursOpen(false);
    setIsVideoOpen(false);
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
    setSelectedVideoKey(null);
    setShowVideosPage(true);
    setSelectedTour(null);
    setShowPremiumFleet(false);
    setIsVideoOpen(false);
    setIsMobileVideoOpen(false);
    setIsMenuOpen(false);
    setIsTransportOpen(false);
    setIsDestinationsOpen(false);
    setIsDayToursOpen(false);
    setShowExplore(false);
    setShowContact(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setSocialModalType(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectVideoTour = (e: React.MouseEvent, tourKey: string) => {
    e.preventDefault();
    if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
    setSelectedVideoKey(tourKey);
    setShowVideosPage(true);
    setSelectedTour(null);
    setShowPremiumFleet(false);
    setIsVideoOpen(false);
    setIsMobileVideoOpen(false);
    setIsMenuOpen(false);
    setIsTransportOpen(false);
    setIsDestinationsOpen(false);
    setIsDayToursOpen(false);
    setShowExplore(false);
    setShowContact(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setSocialModalType(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePopularTourClick = (e: React.MouseEvent, tourName: string) => {
    e.preventDefault();
    setSelectedTour(tourName);
    setShowPremiumFleet(false);
    setShowVideosPage(false);
    setSelectedVideoKey(null);
    setIsVideoOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePremiumFleetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPremiumFleet(true);
    setSelectedTour(null);
    setShowVideosPage(false);
    setSelectedVideoKey(null);
    setIsVideoOpen(false);
    setIsMenuOpen(false);
    setIsTransportOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroImages = [
    { url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1350&q=80', title: 'Sydney' },
    { url: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1350&q=80', title: 'Melbourne' },
    { url: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=1350&q=80', title: 'Brisbane' },
    { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1350&q=80', title: 'Adelaide' },
    { url: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=1350&q=80', title: 'Northern Territory' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <div className="bg-[#00205B] text-white p-2 rounded-lg flex-shrink-0">
            <MapPin size={32} />
          </div>
          <div className="font-bold text-lg md:text-xl text-[#00205B] leading-tight">
            AUSTRALIA<br/>AMAZING TOURS
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" onClick={handleHomeClick} className="text-[#00205B] font-bold hover:text-[#BE1E2D] transition-colors">Home</a>
          
          <div className="relative" onMouseEnter={() => setIsDestinationsOpen(true)} onMouseLeave={() => { setIsDestinationsOpen(false); setActiveState(null); }}>
            <button 
              className="text-[#00205B] font-bold hover:text-[#BE1E2D] transition-colors flex items-center gap-1"
              onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
            >
              Destinations <ChevronDown size={16} className={`transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDestinationsOpen && (
              <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 before:absolute before:-top-8 before:-left-8 before:-right-8 before:-bottom-8 before:-z-10">
                {/* Victoria */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('Victoria')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'Victoria' ? null : 'Victoria')}
                  >
                    Victoria <ChevronRight size={16} className={`transition-transform ${activeState === 'Victoria' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'Victoria' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Melbourne Culture')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Melbourne</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Great Ocean Road')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Great Ocean Road</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Yarra Valley')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Yarra Valley</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Mt Buller')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Mt Buller</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Puffing Billy Steam Train')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Puffing Billy Steam Train</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Cherry Farm')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Cherry Farm</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Strawberry Farm')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Strawberry Farm</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Maru Koala Park')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Maru Koala Park</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Mount Macedon')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Mount Macedon</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Bright Autumn')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Bright</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Phillip Island')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Phillip Island</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Ballarat Tour')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Ballarat</a>
                    </div>
                  )}
                </div>
                
                {/* New South Wales */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('New South Wales')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'New South Wales' ? null : 'New South Wales')}
                  >
                    New South Wales <ChevronRight size={16} className={`transition-transform ${activeState === 'New South Wales' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'New South Wales' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Sydney Highlights')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Sydney</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Sydney Highlights')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Blue Mountains</a>
                    </div>
                  )}
                </div>
                
                {/* Queensland */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('Queensland')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'Queensland' ? null : 'Queensland')}
                  >
                    Queensland <ChevronRight size={16} className={`transition-transform ${activeState === 'Queensland' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'Queensland' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Brisbane & Gold Coast')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Brisbane & Gold Coast</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Great Barrier Reef')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Great Barrier Reef</a>
                    </div>
                  )}
                </div>
                
                {/* South Australia */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('South Australia')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'South Australia' ? null : 'South Australia')}
                  >
                    South Australia <ChevronRight size={16} className={`transition-transform ${activeState === 'South Australia' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'South Australia' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Adelaide & Barossa')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Discover South Australia</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Adelaide & Barossa')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">South Australia Adventure</a>
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Adelaide & Barossa')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">South Australia Highlights</a>
                    </div>
                  )}
                </div>
                
                {/* Northern Territory */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('Northern Territory')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'Northern Territory' ? null : 'Northern Territory')}
                  >
                    Northern Territory <ChevronRight size={16} className={`transition-transform ${activeState === 'Northern Territory' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'Northern Territory' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Uluru & Red Centre')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Uluru</a>
                    </div>
                  )}
                </div>
                
                {/* Australian Capital Territory */}
                <div className="relative group/sub" onMouseEnter={() => setActiveState('Australian Capital Territory')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveState(activeState === 'Australian Capital Territory' ? null : 'Australian Capital Territory')}
                  >
                    Australian Capital Territory <ChevronRight size={16} className={`transition-transform ${activeState === 'Australian Capital Territory' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeState === 'Australian Capital Territory' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" onClick={(e) => handlePopularTourClick(e, 'Sydney Highlights')} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Canberra</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative" onMouseEnter={() => setIsDayToursOpen(true)} onMouseLeave={() => setIsDayToursOpen(false)}>
            <button 
              className="text-[#00205B] font-bold hover:text-[#BE1E2D] transition-colors flex items-center gap-1"
              onClick={() => setIsDayToursOpen(!isDayToursOpen)}
            >
              Day Tours <ChevronDown size={16} className={`transition-transform ${isDayToursOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDayToursOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 before:absolute before:-top-8 before:-left-8 before:-right-8 before:-bottom-8 before:-z-10">
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Great Ocean Road')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Great Ocean Road Day Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Phillip Island')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Phillip Island Penguin Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Yarra Valley')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Yarra Valley Winery Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Yarra Valley')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Yara Valley Gourmet Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Puffing Billy Steam Train')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Puffing Billy Steam Train</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Melbourne Culture')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Melbourne City Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Maru Koala Park')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Maru Koala Park Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Ballarat Tour')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Ballarat Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Mount Macedon')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Mount Macedon</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Bright Autumn')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Brigh Autumn Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Bright Autumn')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Autumn in Mt Macedent</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Mt Buller')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Mt Buller Snow Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Cherry Farm')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Cherry Farm Tour</a>
                <a href="#" onClick={(e) => handlePopularTourClick(e, 'Strawberry Farm')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D]">Strawberry Farm Tour</a>
              </div>
            )}
          </div>
          
          <div className="relative" onMouseEnter={() => setIsTransportOpen(true)} onMouseLeave={() => { setIsTransportOpen(false); setActiveTransportState(null); }}>
            <button 
              className="text-[#00205B] font-bold hover:text-[#BE1E2D] transition-colors flex items-center gap-1"
              onClick={handleTransportClick}
            >
              Transport <ChevronDown size={16} className={`transition-transform ${isTransportOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTransportOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 before:absolute before:-top-8 before:-left-8 before:-right-8 before:-bottom-8 before:-z-10">
                {/* Airport transfer */}
                <div className="relative group/sub" onMouseEnter={() => setActiveTransportState('Airport transfer')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveTransportState(activeTransportState === 'Airport transfer' ? null : 'Airport transfer')}
                  >
                    Airport transfer <ChevronRight size={16} className={`transition-transform ${activeTransportState === 'Airport transfer' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeTransportState === 'Airport transfer' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Pick Up Airport to Hotel</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Pick Up Hotel to Airport</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Meet & Great Service</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Flight Tracking</a>
                      <a href="#" onClick={handlePremiumFleetClick} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Our Premium Fleet</a>
                    </div>
                  )}
                </div>
                
                {/* Private Car Hire */}
                <div className="relative group/sub" onMouseEnter={() => setActiveTransportState('Private Car Hire')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveTransportState(activeTransportState === 'Private Car Hire' ? null : 'Private Car Hire')}
                  >
                    Private Car Hire <ChevronRight size={16} className={`transition-transform ${activeTransportState === 'Private Car Hire' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeTransportState === 'Private Car Hire' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">VIP Mercides 15 Seater</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Mercides Vclass 15 Seater</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Toyota Rosa 24 Seater</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">VIP BUS 57 Seater</a>
                      <a href="#" onClick={handlePremiumFleetClick} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Our Premium Fleet</a>
                    </div>
                  )}
                </div>

                {/* Crew Transport */}
                <a href="#" className="block px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D]" onMouseEnter={() => setActiveTransportState(null)}>Crew Transport</a>

                {/* Group Transport */}
                <div className="relative group/sub" onMouseEnter={() => setActiveTransportState('Group Transport')}>
                  <button 
                    className="w-full text-left px-4 py-2 text-[#00205B] hover:bg-gray-50 hover:text-[#BE1E2D] flex justify-between items-center"
                    onClick={() => setActiveTransportState(activeTransportState === 'Group Transport' ? null : 'Group Transport')}
                  >
                    Group Transport <ChevronRight size={16} className={`transition-transform ${activeTransportState === 'Group Transport' ? 'rotate-90' : ''}`} />
                  </button>
                  {activeTransportState === 'Group Transport' && (
                    <div className="bg-gray-50 py-1">
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Tour Group Transport</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Event Transport</a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Conference Transport</a>
                      <a href="#" onClick={handlePremiumFleetClick} className="block px-8 py-2 text-sm text-gray-700 hover:text-[#BE1E2D]">Our Premium Fleet</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnterVideo} 
            onMouseLeave={handleMouseLeaveVideo}
          >
            <button 
              onClick={handleVideoClick} 
              className={`font-bold transition-colors cursor-pointer flex items-center gap-1 py-2 ${showVideosPage ? 'text-[#BE1E2D]' : 'text-[#00205B] hover:text-[#BE1E2D]'}`}
            >
              Video <ChevronDown size={16} className={`transition-transform duration-200 ${isVideoOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isVideoOpen && (
              <div 
                className="absolute top-full -left-6 pt-2 w-84 z-50"
                onMouseEnter={handleMouseEnterVideo}
                onMouseLeave={handleMouseLeaveVideo}
              >
                <div className="bg-white shadow-2xl rounded-xl border border-gray-200 overflow-hidden ring-1 ring-black/5">
                  <a 
                    href="#" 
                    onClick={handleVideoClick} 
                    className="flex items-center justify-between px-4 py-3 text-sm font-bold text-[#BE1E2D] hover:bg-red-50 border-b border-gray-100 transition-colors bg-white sticky top-0 z-10"
                  >
                    <span className="flex items-center gap-2">
                      <Play size={15} className="fill-[#BE1E2D] text-[#BE1E2D]" />
                      All Tour Videos (Tất cả video)
                    </span>
                    <span className="text-xs bg-red-100 text-[#BE1E2D] px-2 py-0.5 rounded-full font-semibold">
                      {tourVideoItems.length}
                    </span>
                  </a>
                  
                  <div className="py-1 max-h-[440px] overflow-y-auto overscroll-contain">
                    {tourVideoItems.map((item) => (
                      <a 
                        key={item.key}
                        href="#" 
                        onClick={(e) => {
                          if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
                          handleSelectVideoTour(e, item.key);
                        }} 
                        className={`flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BE1E2D] transition-colors ${selectedVideoKey === item.key && showVideosPage ? 'bg-red-50 text-[#BE1E2D] font-semibold' : ''}`}
                      >
                        <Play size={12} className="text-[#BE1E2D] shrink-0 fill-[#BE1E2D]/20" />
                        <span className="truncate">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <button onClick={() => setShowContact(true)} className="text-[#00205B] font-bold hover:text-[#BE1E2D] transition-colors cursor-pointer">Contact</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#00205B] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[76px] left-0 w-full z-40 border-t border-gray-100 max-h-[calc(100vh-76px)] overflow-y-auto">
          <nav className="flex flex-col p-4">
            <a href="#" className="py-3 px-4 text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md" onClick={handleHomeClick}>Home</a>
            
            <div className="flex flex-col">
              <button 
                className="py-3 px-4 text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md flex justify-between items-center"
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
              >
                Destinations <ChevronDown size={18} className={`transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDestinationsOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {/* Victoria */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'Victoria' ? null : 'Victoria')}
                    >
                      Victoria <ChevronDown size={16} className={`transition-transform ${activeState === 'Victoria' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'Victoria' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Melbourne Culture'); }}>Melbourne</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Great Ocean Road'); }}>Great Ocean Road</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Yarra Valley'); }}>Yarra Valley</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Mt Buller'); }}>Mt Buller</a>
                      </div>
                    )}
                  </div>
                  
                  {/* New South Wales */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'New South Wales' ? null : 'New South Wales')}
                    >
                      New South Wales <ChevronDown size={16} className={`transition-transform ${activeState === 'New South Wales' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'New South Wales' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Sydney Highlights'); }}>Sydney</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Sydney Highlights'); }}>Blue Mountains</a>
                      </div>
                    )}
                  </div>
                  
                  {/* Queensland */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'Queensland' ? null : 'Queensland')}
                    >
                      Queensland <ChevronDown size={16} className={`transition-transform ${activeState === 'Queensland' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'Queensland' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Brisbane & Gold Coast'); }}>Brisbane & Gold Coast</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Great Barrier Reef'); }}>Great Barrier Reef</a>
                      </div>
                    )}
                  </div>
                  
                  {/* South Australia */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'South Australia' ? null : 'South Australia')}
                    >
                      South Australia <ChevronDown size={16} className={`transition-transform ${activeState === 'South Australia' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'South Australia' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Adelaide & Barossa'); }}>Discover South Australia</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Adelaide & Barossa'); }}>South Australia Adventure</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Adelaide & Barossa'); }}>South Australia Highlights</a>
                      </div>
                    )}
                  </div>
                  
                  {/* Northern Territory */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'Northern Territory' ? null : 'Northern Territory')}
                    >
                      Northern Territory <ChevronDown size={16} className={`transition-transform ${activeState === 'Northern Territory' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'Northern Territory' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Uluru & Red Centre'); }}>Uluru</a>
                      </div>
                    )}
                  </div>

                  {/* Australian Capital Territory */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveState(activeState === 'Australian Capital Territory' ? null : 'Australian Capital Territory')}
                    >
                      Australian Capital Territory <ChevronDown size={16} className={`transition-transform ${activeState === 'Australian Capital Territory' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeState === 'Australian Capital Territory' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Sydney Highlights'); }}>Canberra</a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <button 
                className="py-3 px-4 text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md flex justify-between items-center"
                onClick={() => setIsDayToursOpen(!isDayToursOpen)}
              >
                Day Tours <ChevronDown size={18} className={`transition-transform ${isDayToursOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDayToursOpen && (
                <div className="pl-4 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Great Ocean Road'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Great Ocean Road Day Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Phillip Island'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Phillip Island Penguin Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Yarra Valley'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Yarra Valley Winery Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Yarra Valley'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Yara Valley Gourmet Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Puffing Billy Steam Train'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Puffing Billy Steam Train</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Melbourne Culture'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Melbourne City Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Maru Koala Park'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Maru Koala Park Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Ballarat Tour'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Ballarat Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Mount Macedon'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Mount Macedon</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Bright Autumn'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Brigh Autumn Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Bright Autumn'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Autumn in Mt Macedent</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Mt Buller'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Mt Buller Snow Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Cherry Farm'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Cherry Farm Tour</a>
                  <a href="#" onClick={(e) => { setIsMenuOpen(false); handlePopularTourClick(e, 'Strawberry Farm'); }} className="text-sm text-gray-600 hover:text-[#BE1E2D]">Strawberry Farm Tour</a>
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <button 
                className="py-3 px-4 text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md flex justify-between items-center"
                onClick={() => setIsTransportOpen(!isTransportOpen)}
              >
                Transport <ChevronDown size={18} className={`transition-transform ${isTransportOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTransportOpen && (
                <div className="pl-4 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                  {/* Airport transfer */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveTransportState(activeTransportState === 'Airport transfer' ? null : 'Airport transfer')}
                    >
                      Airport transfer <ChevronDown size={16} className={`transition-transform ${activeTransportState === 'Airport transfer' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeTransportState === 'Airport transfer' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Pick Up Airport to Hotel</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Pick Up Hotel to Airport</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Meet & Great Service</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Flight Tracking</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={handlePremiumFleetClick}>Our Premium Fleet</a>
                      </div>
                    )}
                  </div>
                  
                  {/* Private Car Hire */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveTransportState(activeTransportState === 'Private Car Hire' ? null : 'Private Car Hire')}
                    >
                      Private Car Hire <ChevronDown size={16} className={`transition-transform ${activeTransportState === 'Private Car Hire' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeTransportState === 'Private Car Hire' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>VIP Mercides 15 Seater</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Mercides Vclass 15 Seater</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Toyota Rosa 24 Seater</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>VIP BUS 57 Seater</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={handlePremiumFleetClick}>Our Premium Fleet</a>
                      </div>
                    )}
                  </div>

                  {/* Crew Transport */}
                  <a href="#" className="py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Crew Transport</a>

                  {/* Group Transport */}
                  <div>
                    <button 
                      className="w-full text-left py-2 px-4 text-[#00205B] font-medium hover:text-[#BE1E2D] flex justify-between items-center"
                      onClick={() => setActiveTransportState(activeTransportState === 'Group Transport' ? null : 'Group Transport')}
                    >
                      Group Transport <ChevronDown size={16} className={`transition-transform ${activeTransportState === 'Group Transport' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeTransportState === 'Group Transport' && (
                      <div className="pl-6 flex flex-col gap-2 py-2 border-l-2 border-gray-100 ml-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Tour Group Transport</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Event Transport</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={() => setIsMenuOpen(false)}>Conference Transport</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#BE1E2D]" onClick={handlePremiumFleetClick}>Our Premium Fleet</a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <button 
                className="py-3 px-4 text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md flex justify-between items-center transition-colors cursor-pointer"
                onClick={() => setIsMobileVideoOpen(!isMobileVideoOpen)}
              >
                <span className={showVideosPage ? 'text-[#BE1E2D]' : ''}>Video</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileVideoOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileVideoOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1 max-h-72 overflow-y-auto border-l-2 border-gray-100 ml-4 py-1">
                  <a 
                    href="#" 
                    className="text-sm font-bold text-[#BE1E2D] hover:bg-red-50 py-2 px-3 rounded flex items-center justify-between transition-colors"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      setIsMobileVideoOpen(false);
                      handleVideoClick(e);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Play size={14} className="fill-[#BE1E2D] text-[#BE1E2D]" /> All Tour Videos (Tất cả video)
                    </span>
                    <span className="text-xs bg-red-100 text-[#BE1E2D] px-2 py-0.5 rounded-full font-semibold">
                      {tourVideoItems.length}
                    </span>
                  </a>

                  {tourVideoItems.map((item) => (
                    <a 
                      key={item.key}
                      href="#" 
                      className={`text-sm text-gray-600 hover:text-[#BE1E2D] py-1.5 px-3 rounded flex items-center gap-2 transition-colors ${selectedVideoKey === item.key && showVideosPage ? 'bg-red-50 text-[#BE1E2D] font-semibold' : ''}`}
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        setIsMobileVideoOpen(false);
                        handleSelectVideoTour(e, item.key);
                      }}
                    >
                      <Play size={12} className="text-[#BE1E2D] shrink-0 fill-[#BE1E2D]/20" />
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button className="py-3 px-4 text-left text-[#00205B] font-bold hover:bg-gray-50 hover:text-[#BE1E2D] rounded-md" onClick={() => { setIsMenuOpen(false); setShowContact(true); }}>Contact</button>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      {showVideosPage ? (
        <VideosPage 
          onBack={() => {
            setShowVideosPage(false);
            setSelectedVideoKey(null);
          }} 
          initialVideoKey={selectedVideoKey}
          onSelectTour={(tourKey) => {
            setShowVideosPage(false);
            setSelectedVideoKey(null);
            setSelectedTour(tourKey);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      ) : showPremiumFleet ? (
        <PremiumFleetPage onBack={() => setShowPremiumFleet(false)} />
      ) : selectedTour ? (
        <TourDetailsPage tourName={selectedTour} onBack={() => setSelectedTour(null)} />
      ) : (
        <>
          {/* Hero Section */}
          <section 
            className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${heroImages[currentHeroIndex].url}')` }}
          >
            <div className="px-4 max-w-4xl z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">AUSTRALIA AMAZING TOURS</h1>
              <p className="text-lg md:text-2xl mb-8 drop-shadow-md font-medium text-gray-100">Expertly crafted tours by VAT Holiday Pty Ltd</p>
              <button onClick={(e) => { e.preventDefault(); setShowExplore(true); }} className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:-translate-y-1 border-2 border-white/20">
                Explore Tours
              </button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentHeroIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Main Content Placeholder */}
          <main className="flex-grow container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00205B] mb-4">Discover the Beauty of Australia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Join us for unforgettable experiences across the continent. From the Outback to the Great Barrier Reef, we have the perfect tour for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" alt="Sydney" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Sydney Highlights</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Experience the very best of Sydney, one of the world’s most beautiful harbour cities. This unforgettable tour takes you to Sydney’s most iconic landmarks, offering breathtaking views, vibrant culture, and unforgettable coastal scenery.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Sydney Highlights'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/T2CC25Yj/1_(13).jpg" alt="Melbourne City" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Melbourne Culture</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Welcome to Melbourne, a city where culture, creativity, and lifestyle come together to create one of the most exciting destinations in the world. Consistently ranked among the world’s most livable cities, Melbourne offers an irresistible blend of historic charm, modern architecture, world-class dining, and a thriving arts scene.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Melbourne Culture'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80" alt="Great Barrier Reef" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Great Barrier Reef</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Embark on an unforgettable journey to the breathtaking Great Barrier Reef, one of the most spectacular natural wonders on Earth. Stretching for over 2,300 kilometres along the coast of Queensland, this UNESCO World Heritage treasure is home to an extraordinary underwater world filled with vibrant coral gardens and thousands of species of marine life.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Great Barrier Reef'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 5 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/kM69SpT2/1_(8).jpg" alt="Brisbane and Gold Coast" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Brisbane & Gold Coast</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Discover the vibrant energy of Brisbane and the breathtaking coastal beauty of the Gold Coast, two of Australia’s most exciting destinations where modern city life meets world-class beaches.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Brisbane & Gold Coast'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 6 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/Kc0F3gS8/1_(1).jpg" alt="Adelaide" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Adelaide & Barossa</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Discover the timeless elegance of Adelaide, a charming city known for its beautiful parklands, vibrant markets, and relaxed lifestyle. Often called the “City of Churches,” Adelaide offers a perfect blend of culture, history, and modern sophistication.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Adelaide & Barossa'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 7 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/vBWh6fKR/1.jpg" alt="Great Ocean Road" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Great Ocean Road</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Experience one of the world’s most breathtaking coastal drives along the legendary Great Ocean Road, where dramatic cliffs, golden beaches, and the vast Southern Ocean create an unforgettable landscape of natural beauty.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Great Ocean Road'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 8 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/V6SH0jsB/42.jpg" alt="Yarra Valley" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Yarra Valley</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Escape the city and discover the rolling vineyards and breathtaking landscapes of Yarra Valley, one of Australia’s most celebrated wine regions located just a short drive from Melbourne.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Yarra Valley'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 9 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80" alt="Phillip Island" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Phillip Island</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Discover the breathtaking beauty of Phillip Island, one of Victoria’s most beloved coastal destinations, located just a scenic drive from Melbourne. Famous for its incredible wildlife and dramatic coastal landscapes, Phillip Island offers a truly unforgettable Australian nature experience.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Phillip Island'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 10 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/0QcffP9D/1.jpg" alt="Bright Autumn" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Bright Autumn</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Discover the breathtaking alpine beauty of Bright, a charming mountain town nestled in the heart of Victoria’s spectacular High Country. Surrounded by majestic alpine peaks, crystal-clear rivers, and picturesque valleys, Bright transforms into a stunning natural wonder during the autumn season.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Bright Autumn'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 11 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/7G0ZJpC6/IMG-8901.jpg" alt="Canberra" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Canberra</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Join us on an unforgettable journey to Canberra, the beautiful capital city of Australia, where modern architecture, national history, and stunning natural scenery come together in perfect harmony.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Canberra'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 12 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80" alt="Mt Buller" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Mt Buller</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Escape the city and step into a breathtaking winter wonderland at Mount Buller, one of the most famous alpine resorts in Australia. Located just a few hours from Melbourne, Mount Buller offers an unforgettable snow adventure filled with excitement, spectacular mountain scenery, and unforgettable winter experiences.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Mt Buller'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 13 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/283q1Dt2/1_(1).webp" alt="Puffing Billy Steam Train" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Puffing Billy Steam Train</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Step aboard the legendary Puffing Billy Railway, one of the most famous steam train experiences in the world, and travel through the breathtaking forests of the Dandenong Ranges, just outside Melbourne.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Puffing Billy Steam Train'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 14 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/L5nX7kKv/1_(8).jpg" alt="Maru Koala Park" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Maru Koala Park</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Experience the charm of Australia’s native wildlife with an unforgettable visit to Maru Koala and Animal Park, one of the most beloved wildlife parks in Victoria. Located along the scenic route to Phillip Island, this tour offers visitors a wonderful opportunity to get up close with Australia’s most iconic animals.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Maru Koala Park'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 15 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/h404bP6z/1_(1).webp" alt="Ballarat Tour" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Ballarat Tour</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Travel back in time and discover the fascinating story of Australia’s gold rush era with an unforgettable journey to Ballarat, one of the most historic and charming cities in Australia.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Ballarat Tour'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 16 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/L6TSfCqb/9_(4).jpg" alt="Mount Macedon" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Mount Macedon</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Just a short drive from Melbourne, the beautiful Mount Macedon offers a refreshing escape into nature, fresh mountain air, and breathtaking scenery.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Mount Macedon'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 17 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/bwHGQMX1/1_(1).webp" alt="Uluru" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Uluru</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Embark on a once-in-a-lifetime journey to Uluru, one of the most iconic natural wonders in the world. Located in the vast outback of the Red Centre, Uluru is not only a breathtaking geological formation, but also a sacred site deeply connected to the culture of the Anangu people.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Uluru'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 18 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/Y0zjBn6q/1.jpg" alt="Cherry Farm" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Cherry Farm</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Enjoy a delightful day in the countryside with our Cherry Farm Tour, where fresh air, scenic landscapes, and the joy of fruit picking come together for a truly memorable experience. Just a short drive from Melbourne, visit beautiful cherry orchards in regions like Yarra Valley and Dandenong Ranges.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Cherry Farm'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
          {/* Tour Card 19 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img src="https://i.postimg.cc/nrPgrZG8/1.jpg" alt="Strawberry Farm" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00205B] mb-2">Strawberry Farm</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">Enjoy a delightful day in the countryside with our Strawberry Farm Tour, where fresh air, scenic landscapes, and the joy of fruit picking come together for a truly memorable experience. Just a short drive from Melbourne, visit beautiful strawberry farms in regions like Yarra Valley and Dandenong Ranges.</p>
              <button onClick={(e) => { e.preventDefault(); setSelectedTour('Strawberry Farm'); }} className="text-[#BE1E2D] font-semibold flex items-center hover:text-red-800 transition-colors">View Details <ChevronRight size={18} className="ml-1" /></button>
            </div>
          </div>
        </div>
      </main>
      </>
      )}

      {/* Footer */}
      <footer className="bg-[#00205B] text-white pt-16 pb-12 px-6 mt-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 inline-block border-b-2 border-[#BE1E2D] pb-2">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Australia Amazing Tours is a premier tour provider operated by VAT Holiday Pty Ltd. We specialize in creating unforgettable travel experiences across Australia.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#BE1E2D] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#BE1E2D] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#BE1E2D] transition-colors"><Instagram size={20} /></a>
              <button onClick={(e) => { e.preventDefault(); setSocialModalType('zalo'); }} className="bg-white/10 p-2 rounded-full hover:bg-[#BE1E2D] transition-colors flex items-center justify-center w-[36px] h-[36px]">
                <span className="font-bold text-[10px] leading-none">Zalo</span>
              </button>
              <button onClick={(e) => { e.preventDefault(); setSocialModalType('whatsapp'); }} className="bg-white/10 p-2 rounded-full hover:bg-[#BE1E2D] transition-colors flex items-center justify-center w-[36px] h-[36px]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 inline-block border-b-2 border-[#BE1E2D] pb-2">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" onClick={handleHomeClick} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Home</a></li>
              <li><a href="#" onClick={handleDestinationsClick} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Destinations</a></li>
              <li><a href="#" onClick={handleDayToursClick} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Day Tours</a></li>
              <li><button onClick={() => setShowTerms(true)} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Terms & Conditions</button></li>
              <li><button onClick={() => setShowPrivacy(true)} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Privacy Policy</button></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 inline-block border-b-2 border-[#BE1E2D] pb-2">Popular Tours</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Great Ocean Road')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Great Ocean Road</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Phillip Island')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Phillip Island Penguin Parade</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Yarra Valley')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Yarra Valley Winery Tour</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Yarra Valley')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Yarra Valley Gourmet Tour</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Great Barrier Reef')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Great Barrier Reef</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Bright Autumn')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Bright Autumn Tour</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Maru Koala Park')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Maru Kaola Park Tour</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Ballarat Tour')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Ballarat Tour</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Mount Macedon')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Mount Macedon</a></li>
              <li><a href="#" onClick={(e) => handlePopularTourClick(e, 'Puffing Billy Steam Train')} className="hover:text-white hover:translate-x-1 inline-block transition-transform">Puffing Billy Steam Train Tour</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 inline-block border-b-2 border-[#BE1E2D] pb-2">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold text-white text-lg">VAT Holiday Pty Ltd</p>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#BE1E2D] shrink-0 mt-1" />
                <p>Level 7, 330 Lonsdale Street,<br/>Melbourne VIC 3000, Australia</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#BE1E2D] shrink-0" />
                <p>Mr Minh +61 4 313 08567</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#BE1E2D] shrink-0" />
                <p>Ms Dung +61 4 215 60280</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#BE1E2D] shrink-0" />
                <a href="mailto:info@melbournehalfdaytours.com.au" className="hover:text-white transition-colors">info@melbournehalfdaytours.com.au</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Red Line: Visitor Statistics & Copyright Bar */}
      <div className="bg-[#BE1E2D] text-white py-3 px-4 md:px-8 border-t border-red-700/40 select-none">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <p className="text-white text-center lg:text-left font-normal">
            &copy; {new Date().getFullYear()} VAT Holiday Pty Ltd. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs md:text-sm text-white font-medium">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5 shrink-0"></span>
              Online: <strong className="font-bold ml-1 text-white">{visitorStats.online}</strong>
            </span>
            <span>
              Day: <strong className="font-bold ml-1 text-white">{visitorStats.day}</strong>
            </span>
            <span>
              Week: <strong className="font-bold ml-1 text-white">{visitorStats.week}</strong>
            </span>
            <span>
              Month: <strong className="font-bold ml-1 text-white">{visitorStats.month.toLocaleString()}</strong>
            </span>
            <span>
              Total Visits: <strong className="font-bold ml-1 text-white">{visitorStats.totalVisits.toLocaleString()}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#00205B]">Terms & Conditions</h2>
              <button onClick={() => setShowTerms(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-gray-700 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#00205B] mb-2">Australia Amazing Tours</h3>
                <p>Welcome to Australia Amazing Tours. By booking a tour with us, you agree to the following Terms and Conditions.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#00205B] mb-2">1. Booking & Payment</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All bookings must be made through our website, email, or authorized travel agents.</li>
                  <li>Full payment is required at the time of booking unless otherwise stated. Your booking is confirmed once payment has been successfully processed.</li>
                  <li>Australia Amazing Tours reserves the right to cancel any booking if payment is not completed.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">2. Cancellation Policy</h4>
                <p className="mb-2">Cancellation fees may apply depending on the notice provided.</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 pr-4 font-semibold">Cancellation Time</th>
                        <th className="py-2 font-semibold">Refund Policy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4">More than 7 days before departure</td>
                        <td className="py-2">100% refund</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 pr-4">3–7 days before departure</td>
                        <td className="py-2">50% refund</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Less than 48 hours</td>
                        <td className="py-2">No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm italic">Some tours may have special cancellation conditions depending on third-party operators.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">3. Changes to Itinerary</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Australia Amazing Tours reserves the right to modify tour itineraries due to weather conditions, road closures, safety concerns, or operational reasons.</li>
                  <li>In such cases, alternative arrangements of equal value will be provided whenever possible.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">4. Customer Responsibility</h4>
                <p className="mb-2">Customers are responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Arriving at the designated meeting point on time</li>
                  <li>Following safety instructions from tour guides</li>
                  <li>Ensuring they are physically fit for the activities included in the tour</li>
                </ul>
                <p className="mt-2">Australia Amazing Tours will not be responsible for missed tours due to late arrival.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">5. Liability</h4>
                <p className="mb-2">While we take all reasonable precautions to ensure safety, Australia Amazing Tours is not responsible for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Loss or damage of personal belongings</li>
                  <li>Delays caused by weather, traffic, or unforeseen circumstances</li>
                  <li>Personal injury resulting from failure to follow safety instructions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">6. Travel Insurance</h4>
                <p>We strongly recommend that all travelers purchase comprehensive travel insurance before joining our tours.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">7. Photography</h4>
                <p>Photos or videos taken during tours may be used for promotional purposes unless guests request otherwise.</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowTerms(false)} className="bg-[#00205B] hover:bg-[#001540] text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#00205B]">Privacy Policy</h2>
              <button onClick={() => setShowPrivacy(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-gray-700 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#00205B] mb-2">Australia Amazing Tours</h3>
                <p>Australia Amazing Tours respects your privacy and is committed to protecting your personal information.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#00205B] mb-2">1. Information We Collect</h4>
                <p className="mb-2">When you book a tour or contact us, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Payment details</li>
                  <li>Travel preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">2. How We Use Your Information</h4>
                <p className="mb-2">Your information may be used to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Process bookings and payments</li>
                  <li>Provide customer support</li>
                  <li>Send booking confirmations and tour updates</li>
                  <li>Improve our services</li>
                </ul>
                <p className="mt-2">We do not sell or share your personal information with third parties for marketing purposes.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">3. Data Protection</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We take reasonable steps to protect your personal data from unauthorized access, loss, or misuse.</li>
                  <li>All payment transactions are processed through secure payment gateways.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">4. Cookies</h4>
                <p>Our website may use cookies to improve browsing experience and analyze website traffic.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">5. Third-Party Services</h4>
                <p className="mb-2">We may use trusted third-party services for analytics and payments, such as:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Google Analytics</li>
                  <li>Stripe</li>
                </ul>
                <p className="mt-2">These providers have their own privacy policies regarding the information we are required to provide to them.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00205B] mb-2">6. Contact Us</h4>
                <p className="mb-2">If you have any questions regarding our Terms or Privacy Policy, please contact us:</p>
                <p className="font-semibold">Australia Amazing Tours</p>
                <p>Email: info@melbournehalfdaytours.com.au</p>
                <p>Phone: Mr Minh +61 4 313 08567 / Ms Dung +61 4 215 60280</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowPrivacy(false)} className="bg-[#00205B] hover:bg-[#001540] text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explore Tours Modal */}
      {showExplore && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#00205B] via-[#003380] to-[#BE1E2D] rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="flex justify-between items-center p-6 border-b border-white/20 relative z-10">
              <h2 className="text-3xl font-bold text-white drop-shadow-md">Discover the Beauty of Australia</h2>
              <button onClick={() => setShowExplore(false)} className="text-white/80 hover:text-white transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-white space-y-6 leading-relaxed relative z-10">
              <p className="text-lg font-medium drop-shadow-sm">Australia is a land of extraordinary beauty and unforgettable experiences, where vibrant cities meet breathtaking natural wonders. From the iconic skyline of Sydney and the cultural charm of Melbourne, to the stunning beaches of the Gold Coast, every corner of this incredible country offers something unique to explore.</p>
              <p className="text-lg font-medium drop-shadow-sm">Marvel at the dramatic coastal scenery of the world-famous Great Ocean Road, dive into the vibrant underwater paradise of the Great Barrier Reef, or witness the magical wildlife experience at Phillip Island. Discover the rolling vineyards of Yarra Valley and Barossa Valley, where world-class wines and gourmet food create unforgettable moments.</p>
              <p className="text-lg font-medium drop-shadow-sm">For nature lovers, Australia’s landscapes are truly spectacular—from the golden autumn colours of Bright to the ancient spiritual heart of Uluru and the rich wildlife and cultural heritage of Kakadu National Park.</p>
              <p className="text-xl font-bold text-[#FFD700] drop-shadow-md">Whether you are seeking adventure, relaxation, culture, or breathtaking scenery, Australia offers a journey filled with wonder, discovery, and unforgettable memories. Welcome to a destination where every experience becomes a story worth sharing. ✨</p>
            </div>
            <div className="p-6 border-t border-white/20 bg-black/20 flex justify-end relative z-10">
              <button onClick={() => setShowExplore(false)} className="bg-white text-[#00205B] hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#00205B]">Contact Us</h2>
              <button onClick={() => setShowContact(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">VAT Holiday Pty Ltd</h3>
                <div className="flex items-start gap-3 text-gray-600 mb-4">
                  <MapPin size={20} className="text-[#BE1E2D] shrink-0 mt-1" />
                  <p>Branch Office: Level 7, 330 Lonsdale Street,<br/>Melbourne VIC 3000, Australia</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#BE1E2D] shrink-0" />
                    <p>Mr Minh +61 4 313 08567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#BE1E2D] shrink-0" />
                    <p>Ms Dung +61 4 215 60280</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#BE1E2D] shrink-0" />
                    <a href="mailto:info@melbournehalfdaytours.com.au" className="hover:text-[#BE1E2D] transition-colors">info@melbournehalfdaytours.com.au</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowContact(false)} className="bg-[#00205B] hover:bg-[#001540] text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Social Contact Modal */}
      {socialModalType && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[#00205B]">
                {socialModalType === 'zalo' ? 'Connect on Zalo' : 'Call on WhatsApp'}
              </h2>
              <button onClick={() => setSocialModalType(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <a 
                href={socialModalType === 'zalo' ? 'https://zalo.me/61421560280' : 'https://wa.me/61421560280'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#BE1E2D] hover:bg-red-50 transition-colors"
                onClick={() => setSocialModalType(null)}
              >
                <div>
                  <p className="font-bold text-[#00205B]">Ms Dung</p>
                  <p className="text-sm text-gray-600">+61 4 215 60280</p>
                </div>
                <div className="bg-[#BE1E2D] text-white px-4 py-2 rounded-md text-sm font-semibold">
                  {socialModalType === 'zalo' ? 'Add Friend' : 'Call Now'}
                </div>
              </a>
              <a 
                href={socialModalType === 'zalo' ? 'https://zalo.me/61431308567' : 'https://wa.me/61431308567'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#BE1E2D] hover:bg-red-50 transition-colors"
                onClick={() => setSocialModalType(null)}
              >
                <div>
                  <p className="font-bold text-[#00205B]">Mr Minh</p>
                  <p className="text-sm text-gray-600">+61 4 313 08567</p>
                </div>
                <div className="bg-[#BE1E2D] text-white px-4 py-2 rounded-md text-sm font-semibold">
                  {socialModalType === 'zalo' ? 'Add Friend' : 'Call Now'}
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[90] flex justify-around items-center py-2 px-4 md:hidden">
        <button 
          onClick={handleHomeClick}
          className="flex flex-col items-center gap-1 text-[#00205B] hover:text-[#BE1E2D] transition-colors"
        >
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </button>
        <button 
          onClick={handleDestinationsClick}
          className="flex flex-col items-center gap-1 text-[#00205B] hover:text-[#BE1E2D] transition-colors"
        >
          <Compass size={24} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Destinations</span>
        </button>
        <button 
          onClick={handleDayToursClick}
          className="flex flex-col items-center gap-1 text-[#00205B] hover:text-[#BE1E2D] transition-colors"
        >
          <Search size={24} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Tours</span>
        </button>
        <button 
          onClick={() => setShowContact(true)}
          className="flex flex-col items-center gap-1 text-[#00205B] hover:text-[#BE1E2D] transition-colors"
        >
          <MessageCircle size={24} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
        </button>
      </div>

      {/* AI Chat Bot */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-[95] flex flex-col items-end">
        {isChatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-96 h-[450px] flex flex-col overflow-hidden border border-gray-200 mb-4 transition-all duration-300">
            <div className="bg-[#00205B] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <h3 className="font-bold">Travel Assistant AI</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <XIcon size={20} />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-[#BE1E2D] text-white self-end rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 self-start rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#00205B]"
              />
              <button onClick={handleSendMessage} className="bg-[#00205B] text-white p-2 rounded-full hover:bg-blue-900 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#BE1E2D] text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition-transform hover:scale-105 flex items-center justify-center"
        >
          {isChatOpen ? <XIcon size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 zoomed-image-container cursor-zoom-out" onClick={() => setZoomedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]" onClick={() => setZoomedImage(null)}>
            <XIcon size={32} />
          </button>
          
          {zoomedImageGallery.length > 1 && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImageIndex(prev => {
                    const newIndex = (prev - 1 + zoomedImageGallery.length) % zoomedImageGallery.length;
                    setZoomedImage(zoomedImageGallery[newIndex]);
                    return newIndex;
                  });
                }}
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImageIndex(prev => {
                    const newIndex = (prev + 1) % zoomedImageGallery.length;
                    setZoomedImage(zoomedImageGallery[newIndex]);
                    return newIndex;
                  });
                }}
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain cursor-default" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
