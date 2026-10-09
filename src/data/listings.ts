// ------------------------------------------------------------------
// Refurbished inventory (brief §6 Shop). Each listing is a spec sheet
// for one exact unit — never a generic product page.
// ------------------------------------------------------------------

export type Grade = 'A+' | 'A' | 'B';

export interface Listing {
  slug: string;
  category: 'macbook-air' | 'macbook-pro' | 'imac';
  name: string;
  identifier: string;
  year: number;
  cpu: string;
  ram: string;
  ssd: string;
  screen: string;
  cycles: number;
  batteryHealth: number; // %
  grade: Grade;
  marks: string; // written description of every mark on this exact unit
  inBox: string[];
  price: number;
  status: 'in stock' | 'reserved' | 'sold';
  summary: string;
  // AI-generated stand-in renders (client override, see PhotoSlot.tsx) —
  // not photos of this exact unit. Optional: falls back to the
  // "to commission" placeholder when absent.
  photoHero?: string;
  photoLid?: string;
  photoPorts?: string;
}

export const LISTINGS: Listing[] = [
  {
    slug: 'macbook-air-m1-a2337-silver-8-256',
    category: 'macbook-air',
    name: 'MacBook Air 13" M1',
    identifier: 'A2337',
    year: 2020,
    cpu: 'Apple M1, 8-core',
    ram: '8GB unified',
    ssd: '256GB',
    screen: '13.3" Retina 2560×1600, True Tone',
    cycles: 214,
    batteryHealth: 94,
    grade: 'A',
    marks:
      'Two hairline marks on the lid near the Apple logo, visible only at an angle. One faint rub mark on the bottom case. Keyboard and palm rests clean, no shine. Screen flawless.',
    inBox: ['MacBook Air', '30W USB-C charger (tested)', 'USB-C charge cable', '6-month warranty card'],
    price: 449,
    status: 'in stock',
    summary: 'The best-value MacBook we sell. Silent, cool, and still faster than most new Windows laptops at twice the price.',
    photoHero: '/images/macbook-air-m1-silver-hero.webp',
    photoLid: '/images/macbook-air-m1-silver-lid.webp',
    photoPorts: '/images/macbook-air-m1-silver-ports.webp',
  },
  {
    slug: 'macbook-air-m2-a2681-midnight-8-256',
    category: 'macbook-air',
    name: 'MacBook Air 13" M2',
    identifier: 'A2681',
    year: 2022,
    cpu: 'Apple M2, 8-core',
    ram: '8GB unified',
    ssd: '256GB',
    screen: '13.6" Liquid Retina 2560×1664',
    cycles: 96,
    batteryHealth: 97,
    grade: 'A+',
    marks:
      'As close to new as a used machine gets. One microfibre-visible wipe mark on the lid. Midnight finish — we have de-fingerprinted it, and it will collect them again, as they all do.',
    inBox: ['MacBook Air', '35W dual USB-C charger', 'MagSafe 3 cable', '6-month warranty card'],
    price: 629,
    status: 'in stock',
    summary: 'Low-cycle M2 Air in midnight. MagSafe charging, the bigger screen, and the wedge gone.',
  },
  {
    slug: 'macbook-pro-14-m1-pro-a2442-16-512',
    category: 'macbook-pro',
    name: 'MacBook Pro 14" M1 Pro',
    identifier: 'A2442',
    year: 2021,
    cpu: 'Apple M1 Pro, 10-core',
    ram: '16GB unified',
    ssd: '512GB',
    screen: '14.2" Liquid Retina XDR, 120Hz ProMotion',
    cycles: 168,
    batteryHealth: 95,
    grade: 'A',
    marks:
      'Light scuff on the front-left corner edge, photographed. Small dent on the bottom case near the vent — cosmetic only, no flex. Screen and keyboard excellent.',
    inBox: ['MacBook Pro', '67W USB-C charger', 'MagSafe 3 cable', '6-month warranty card'],
    price: 899,
    status: 'in stock',
    summary: 'The XDR screen and six-speaker machine. Proper ports back: HDMI, SD, MagSafe.',
  },
  {
    slug: 'macbook-air-m1-a2337-grey-16-512',
    category: 'macbook-air',
    name: 'MacBook Air 13" M1',
    identifier: 'A2337',
    year: 2020,
    cpu: 'Apple M1, 8-core',
    ram: '16GB unified',
    ssd: '512GB',
    screen: '13.3" Retina 2560×1600, True Tone',
    cycles: 341,
    batteryHealth: 91,
    grade: 'A',
    marks:
      'Keyboard shows light use — slight shine on space bar and E key. Casing unmarked. One tiny nick on the display bezel, top edge.',
    inBox: ['MacBook Air', '30W USB-C charger (tested)', 'USB-C charge cable', '6-month warranty card'],
    price: 529,
    status: 'reserved',
    summary: 'The rare one: 16GB and 512GB in an M1 Air. Multitasks like a Pro at an Air price.',
  },
  {
    slug: 'macbook-pro-13-m1-a2338-grey-8-256',
    category: 'macbook-pro',
    name: 'MacBook Pro 13" M1',
    identifier: 'A2338',
    year: 2020,
    cpu: 'Apple M1, 8-core',
    ram: '8GB unified',
    ssd: '256GB',
    screen: '13.3" Retina 2560×1600, True Tone',
    cycles: 402,
    batteryHealth: 89,
    grade: 'B',
    marks:
      'Honest B grade: visible wear on the front edge where palms rest, a 4mm dent on the bottom case, and keyboard shine on the home row. Screen perfect. Priced for the wear.',
    inBox: ['MacBook Pro', '61W USB-C charger', 'USB-C charge cable', '6-month warranty card'],
    price: 489,
    status: 'in stock',
    summary: 'Active cooling means it holds full speed for hours. Cosmetic wear, mechanical excellence.',
  },
  {
    slug: 'macbook-air-m3-a3113-starlight-16-512',
    category: 'macbook-air',
    name: 'MacBook Air 13" M3',
    identifier: 'A3113',
    year: 2024,
    cpu: 'Apple M3, 8-core',
    ram: '16GB unified',
    ssd: '512GB',
    screen: '13.6" Liquid Retina 2560×1664',
    cycles: 41,
    batteryHealth: 99,
    grade: 'A+',
    marks:
      'Effectively unmarked. The original owner traded up after four months — the cycle count tells the story.',
    inBox: ['MacBook Air', '35W dual USB-C charger', 'MagSafe 3 cable', 'Original box', '6-month warranty card'],
    price: 949,
    status: 'in stock',
    summary: 'Forty-one cycles. Apple warranty ran out; ours runs six months from today.',
  },
  {
    slug: 'imac-24-m1-a2438-blue-8-256',
    category: 'imac',
    name: 'iMac 24" M1',
    identifier: 'A2438',
    year: 2021,
    cpu: 'Apple M1, 8-core',
    ram: '8GB unified',
    ssd: '256GB',
    screen: '24" 4.5K Retina 4480×2520',
    cycles: 0,
    batteryHealth: 100,
    grade: 'A',
    marks:
      'Stand shows two light scratches on the underside, invisible in use. Screen and chin immaculate. Keyboard and mouse in matching blue, both excellent.',
    inBox: ['iMac 24"', 'Magic Keyboard with Touch ID', 'Magic Mouse', 'Power cable + Ethernet adapter', '6-month warranty card'],
    price: 649,
    status: 'in stock',
    summary: 'The family-computer answer: one cable, a 4.5K screen, and nothing to maintain.',
  },
  {
    slug: 'macbook-pro-16-a2141-grey-i7-16-512',
    category: 'macbook-pro',
    name: 'MacBook Pro 16" (2019)',
    identifier: 'A2141',
    year: 2019,
    cpu: 'Intel Core i7 6-core',
    ram: '16GB DDR4',
    ssd: '512GB',
    screen: '16" Retina 3072×1920',
    cycles: 288,
    batteryHealth: 92,
    grade: 'A',
    marks:
      'One faint pressure mark on the lid, a light scratch across the bottom case. New battery fitted by us 30 cycles ago — receipt on file.',
    inBox: ['MacBook Pro', '96W USB-C charger', 'USB-C charge cable', '6-month warranty card'],
    price: 529,
    status: 'sold',
    summary: 'For anyone who still needs Intel or Boot Camp. New battery fitted in-house.',
  },
];

export function getListing(slug: string): Listing | undefined {
  return LISTINGS.find((l) => l.slug === slug);
}

export const SHOP_CATEGORIES = [
  { slug: 'macbook-air', label: 'MacBook Air' },
  { slug: 'macbook-pro', label: 'MacBook Pro' },
  { slug: 'imac', label: 'iMac' },
] as const;
