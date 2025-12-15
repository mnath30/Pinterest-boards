import { Pin, Board, PinStackData } from './types';

// Helper to generate consistent images
const getImg = (id: number, width: number, height: number) => 
  `https://picsum.photos/id/${id}/${width}/${height}`;

// --- GENERIC PINS FOR FEED ---
export const MOCK_PINS: Pin[] = [
  { id: '1', title: 'Minimalist Shelf', imageUrl: getImg(12, 400, 600), heightRatio: 1.5 },
  { id: '2', title: 'Cozy Corner', imageUrl: getImg(24, 400, 400), heightRatio: 1.0 },
  { id: '3', title: 'Plants', imageUrl: getImg(45, 400, 500), heightRatio: 1.25 },
  { id: '4', title: 'Lighting', imageUrl: getImg(56, 400, 650), heightRatio: 1.6 },
  { id: '5', title: 'Textures', imageUrl: getImg(68, 400, 450), heightRatio: 1.1 },
  { id: '6', title: 'Ceramics', imageUrl: getImg(76, 400, 550), heightRatio: 1.3 },
  { id: '7', title: 'Woodwork', imageUrl: getImg(88, 400, 400), heightRatio: 1.0 },
  { id: '8', title: 'Abstract Art', imageUrl: getImg(91, 400, 600), heightRatio: 1.5 },
];

// --- HELPER TO CREATE STACKS ---
const createStack = (id: string, title: string, startImgId: number, count: number): PinStackData => {
  const pins: Pin[] = Array.from({ length: count }).map((_, i) => ({
    id: `${id}-pin-${i}`,
    title: `${title} Option ${i + 1}`,
    imageUrl: getImg(startImgId + i, 400, 400 + (i % 2) * 100), // Vary aspect ratio slightly
    heightRatio: 1 + (i % 2) * 0.3
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
    title: 'Bedroom Makeover',
    pinCount: 42,
    lastUpdated: '2h ago',
    coverImages: [getImg(102, 300, 300), getImg(130, 300, 300), getImg(132, 300, 300)],
    strongestPins: [
      { id: 'f1', title: 'Main Inspiration', imageUrl: getImg(102, 600, 800), heightRatio: 1.33 },
      { id: 'f2', title: 'Color Palette', imageUrl: getImg(110, 400, 300), heightRatio: 0.75 },
      { id: 'f3', title: 'Texture Idea', imageUrl: getImg(111, 400, 400), heightRatio: 1.0 },
      { id: 'f4', title: 'Lighting Match', imageUrl: getImg(112, 400, 500), heightRatio: 1.25 },
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
    title: 'Summer Outfit',
    pinCount: 28,
    lastUpdated: '1d ago',
    coverImages: [getImg(200, 300, 300), getImg(201, 300, 300), getImg(202, 300, 300)],
    strongestPins: [
      { id: 'so1', title: 'Vibe Check', imageUrl: getImg(200, 600, 800), heightRatio: 1.33 },
      { id: 'so2', title: 'Accessory', imageUrl: getImg(205, 400, 400), heightRatio: 1.0 },
      { id: 'so3', title: 'Shoes', imageUrl: getImg(208, 400, 500), heightRatio: 1.25 },
    ],
    sections: [
      {
        title: 'Wardrobe',
        stacks: [
          createStack('s7', 'Linen Dresses', 210, 6),
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
    id: 'kitchen-reno',
    title: 'Kitchen Reno',
    pinCount: 156,
    lastUpdated: '1w ago',
    coverImages: [getImg(300, 300, 300), getImg(301, 300, 300), getImg(302, 300, 300)],
    strongestPins: [
      { id: 'k1', title: 'Layout', imageUrl: getImg(300, 600, 800), heightRatio: 1.33 },
      { id: 'k2', title: 'Tile', imageUrl: getImg(305, 400, 400), heightRatio: 1.0 },
    ],
    sections: [
      {
        title: 'Cabinets',
        stacks: [
          createStack('s11', 'Green Cabinets', 310, 12),
          createStack('s12', 'Brass Handles', 330, 8),
        ]
      }
    ]
  }
];

export const BEDROOM_PINS = MOCK_BOARDS[0].strongestPins; // Backward compatibility fallback
