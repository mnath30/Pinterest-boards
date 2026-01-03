import { Pin, Board, PinStackData } from './types';

// Helper to generate consistent, high-quality aesthetic images
const getImg = (id: number, width: number, height: number) => 
  `https://picsum.photos/id/${id}/${width}/${height}`;

// A selection of aesthetic IDs: 
// 10: landscape, 28: nature, 43: architecture, 54: landscape, 75: plants, 
// 122: interior, 164: architecture, 175: watch, 182: plants, 191: computer
// 204: fashion/people, 250: camera, 445: fashion, 674: interior

// --- GENERIC PINS FOR FEED ---
export const MOCK_PINS: Pin[] = [
  { id: '1', title: 'Modern Minimalist Living', imageUrl: getImg(674, 800, 1200), heightRatio: 1.5 },
  { id: '2', title: 'Ethereal Forest Light', imageUrl: getImg(28, 800, 800), heightRatio: 1.0 },
  { id: '3', title: 'Urban Architecture Lines', imageUrl: getImg(43, 800, 1000), heightRatio: 1.25 },
  { id: '4', title: 'Serene Morning Coffee', imageUrl: getImg(429, 800, 1100), heightRatio: 1.37 },
  { id: '5', title: 'Scandinavian Textures', imageUrl: getImg(122, 800, 1000), heightRatio: 1.25 },
  { id: '6', title: 'Botanical Sanctuary', imageUrl: getImg(182, 800, 1200), heightRatio: 1.5 },
  { id: '7', title: 'Sunset Coastal Drive', imageUrl: getImg(54, 800, 800), heightRatio: 1.0 },
  { id: '8', title: 'Artistic Shadows', imageUrl: getImg(91, 800, 1200), heightRatio: 1.5 },
  { id: '9', title: 'Linen Fashion Style', imageUrl: getImg(445, 800, 1100), heightRatio: 1.37 },
  { id: '10', title: 'Golden Hour Peak', imageUrl: getImg(10, 800, 800), heightRatio: 1.0 },
  { id: '11', title: 'Abstract Design Elements', imageUrl: getImg(158, 800, 1200), heightRatio: 1.5 },
  { id: '12', title: 'Rustic Studio Space', imageUrl: getImg(164, 800, 1000), heightRatio: 1.25 },
];

// --- HELPER TO CREATE STACKS ---
const createStack = (id: string, title: string, startImgId: number, count: number): PinStackData => {
  const pins: Pin[] = Array.from({ length: count }).map((_, i) => ({
    id: `${id}-pin-${i}`,
    title: `${title} Style ${i + 1}`,
    imageUrl: getImg(startImgId + (i * 3), 800, 800), // High quality square
    heightRatio: 1.0
  }));
  return {
    id,
    title,
    count,
    coverUrl: pins[0].imageUrl,
    pins
  };
};

// --- BOARDS DATA ---

export const MOCK_BOARDS: Board[] = [
  {
    id: 'bedroom-makeover',
    title: 'Bedroom Sanctuary',
    pinCount: 42,
    lastUpdated: '2h ago',
    coverImages: [getImg(674, 600, 600), getImg(122, 600, 600), getImg(111, 600, 600)],
    strongestPins: [
      { id: 'f1', title: 'Main Inspiration', imageUrl: getImg(674, 800, 1000), heightRatio: 1.25 },
      { id: 'f2', title: 'Textural Layers', imageUrl: getImg(122, 800, 600), heightRatio: 0.75 },
      { id: 'f3', title: 'Morning Light', imageUrl: getImg(182, 800, 800), heightRatio: 1.0 },
      { id: 'f4', title: 'Evening Ambiance', imageUrl: getImg(112, 800, 1000), heightRatio: 1.25 },
    ],
    sections: [
      {
        title: 'Furniture',
        stacks: [
          createStack('s1', 'Platform Beds', 130, 5),
          createStack('s2', 'Oak Nightstands', 140, 3),
        ]
      },
      {
        title: 'Decor & Atmosphere',
        stacks: [
          createStack('s3', 'Linen Bedding', 150, 8),
          createStack('s4', 'Woven Rugs', 160, 4),
          createStack('s5', 'Ceramic Lamps', 170, 2),
          createStack('s6', 'Wall Sconces', 180, 6),
        ]
      }
    ]
  },
  {
    id: 'summer-outfit',
    title: 'Coastal Summer',
    pinCount: 28,
    lastUpdated: '1d ago',
    coverImages: [getImg(445, 600, 600), getImg(20, 600, 600), getImg(10, 600, 600)],
    strongestPins: [
      { id: 'so1', title: 'Summer Vibe', imageUrl: getImg(445, 800, 1000), heightRatio: 1.25 },
      { id: 'so2', title: 'Essential Accessory', imageUrl: getImg(175, 800, 800), heightRatio: 1.0 },
      { id: 'so3', title: 'Beach Footwear', imageUrl: getImg(208, 800, 1000), heightRatio: 1.25 },
    ],
    sections: [
      {
        title: 'Wardrobe',
        stacks: [
          createStack('s7', 'Linen Pieces', 210, 6),
          createStack('s8', 'Sandals', 220, 4),
        ]
      },
      {
        title: 'Accessories',
        stacks: [
          createStack('s9', 'Straw Hats', 230, 3),
          createStack('s10', 'Tote Bags', 240, 5),
        ]
      }
    ]
  },
  {
    id: 'modern-architecture',
    title: 'Modern Forms',
    pinCount: 156,
    lastUpdated: '1w ago',
    coverImages: [getImg(43, 600, 600), getImg(164, 600, 600), getImg(12, 600, 600)],
    strongestPins: [
      { id: 'k1', title: 'Concrete Forms', imageUrl: getImg(43, 800, 1000), heightRatio: 1.25 },
      { id: 'k2', title: 'Glass & Steel', imageUrl: getImg(164, 800, 800), heightRatio: 1.0 },
    ],
    sections: [
      {
        title: 'Structural Ideas',
        stacks: [
          createStack('s11', 'Brutalist Concrete', 310, 12),
          createStack('s12', 'Curved Glass', 330, 8),
        ]
      }
    ]
  }
];

export const BEDROOM_PINS = MOCK_BOARDS[0].strongestPins;
