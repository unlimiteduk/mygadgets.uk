// ------------------------------------------------------------------
// Model table (brief §5.3). One structured record per model; the page
// at /repairs/models/[slug]/ auto-composes from this. The client
// maintains prices here — no developer needed.
// ------------------------------------------------------------------

export interface ModelFault {
  label: string;
  price: string;
  turnaround: string;
  serviceSlug: string; // links to the full service page
}

export interface Model {
  slug: string;
  name: string;
  identifier: string;
  year: number;
  device: 'iPhone' | 'MacBook' | 'iPad' | 'Galaxy';
  faults: ModelFault[];
  partGrades: string;
  warranty: string;
  tradeIn: string; // indicative buy price, honest framing
  faqs: { q: string; a: string }[];
}

const W1 = '3 months';

export const MODELS: Model[] = [
  // --------------------------------------------------------- iPhone
  {
    slug: 'iphone-16', name: 'iPhone 16', identifier: 'A3287', year: 2024, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£149', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£59', turnaround: '30–40 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£59', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£89', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium; OEM-refurbished display available on request',
    warranty: W1, tradeIn: 'Working: up to £420 · Broken: up to £140',
    faqs: [
      { q: 'How much is an iPhone 16 screen replacement?', a: '£149 with a soft-OLED panel, fitted in under an hour. Your Face ID components are transferred so Face ID keeps working.' },
      { q: 'Is the iPhone 16 battery replaceable same day?', a: 'Yes — 30 to 40 minutes with the part on the shelf. Book ahead and we start when you arrive.' },
    ],
  },
  {
    slug: 'iphone-16-pro', name: 'iPhone 16 Pro', identifier: 'A3293', year: 2024, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£189', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£59', turnaround: '30–40 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£99', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £620 · Broken: up to £220',
    faqs: [
      { q: 'How much is an iPhone 16 Pro screen?', a: '£189 with a soft-OLED panel matched for ProMotion. The 120Hz refresh works exactly as before.' },
    ],
  },
  {
    slug: 'iphone-15', name: 'iPhone 15', identifier: 'A3090', year: 2023, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£139', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£59', turnaround: '30–40 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port (USB-C)', price: '£59', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£89', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £330 · Broken: up to £110',
    faqs: [
      { q: 'iPhone 15 screen replacement cost?', a: '£139, about 45 minutes. iOS may show a parts notification — function is unaffected and we explain it before you book.' },
    ],
  },
  {
    slug: 'iphone-15-pro', name: 'iPhone 15 Pro', identifier: 'A3102', year: 2023, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£169', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£59', turnaround: '30–40 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£99', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £500 · Broken: up to £180',
    faqs: [
      { q: 'iPhone 15 Pro screen price?', a: '£169 fitted. The titanium frame is unforgiving of bent corners — if the frame is bent we tell you before any glass goes on.' },
    ],
  },
  {
    slug: 'iphone-14', name: 'iPhone 14', identifier: 'A2882', year: 2022, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£119', turnaround: '30–45 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£49', turnaround: '30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£59', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£69', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £260 · Broken: up to £90',
    faqs: [
      { q: 'How much is an iPhone 14 screen replacement near Whitton?', a: '£119 with a soft-OLED panel, 30 to 45 minutes on the bench. Walk-ins welcome; booking reserves the part.' },
    ],
  },
  {
    slug: 'iphone-14-pro', name: 'iPhone 14 Pro', identifier: 'A2890', year: 2022, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£149', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£49', turnaround: '30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£79', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £400 · Broken: up to £140',
    faqs: [
      { q: 'iPhone 14 Pro screen with Dynamic Island — repairable?', a: 'Yes, £149 fitted. The Dynamic Island is software, not a separate part; the whole display is replaced as one assembly.' },
    ],
  },
  {
    slug: 'iphone-13', name: 'iPhone 13', identifier: 'A2633', year: 2021, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£99', turnaround: '30–45 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£49', turnaround: '30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£49', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£69', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium; budget LCD option on request', warranty: W1, tradeIn: 'Working: up to £210 · Broken: up to £70',
    faqs: [
      { q: 'How much to fix an iPhone 13 screen?', a: '£99 with a soft-OLED panel — colour and brightness matched to the original. Fitted in 30 to 45 minutes.' },
      { q: 'iPhone 13 battery price?', a: '£49, about 30 minutes. We read the health in front of you first, so you can see the before and after.' },
    ],
  },
  {
    slug: 'iphone-13-pro', name: 'iPhone 13 Pro', identifier: 'A2638', year: 2021, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£129', turnaround: '45–60 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£49', turnaround: '30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£79', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium, ProMotion matched', warranty: W1, tradeIn: 'Working: up to £320 · Broken: up to £110',
    faqs: [
      { q: 'iPhone 13 Pro screen replacement cost?', a: '£129 with a ProMotion-matched soft-OLED panel. The 120Hz refresh works as it should.' },
    ],
  },
  {
    slug: 'iphone-12', name: 'iPhone 12', identifier: 'A2403', year: 2020, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£89', turnaround: '30–45 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£49', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£59', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium; budget LCD on request', warranty: W1, tradeIn: 'Working: up to £160 · Broken: up to £55',
    faqs: [
      { q: 'iPhone 12 screen replacement price?', a: '£89 with soft OLED, £69 with a quality LCD if budget matters more. Both fitted in under an hour.' },
    ],
  },
  {
    slug: 'iphone-12-pro', name: 'iPhone 12 Pro', identifier: 'A2407', year: 2020, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£99', turnaround: '30–45 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£69', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £230 · Broken: up to £80',
    faqs: [
      { q: 'iPhone 12 Pro screen cost?', a: '£99 fitted in 30 to 45 minutes, Face ID transferred and working.' },
    ],
  },
  {
    slug: 'iphone-11', name: 'iPhone 11', identifier: 'A2221', year: 2019, device: 'iPhone',
    faults: [
      { label: 'Screen (LCD premium)', price: '£59', turnaround: '30 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£49', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
      { label: 'Back glass', price: '£59', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'LCD premium (original is LCD); soft-OLED upgrade not applicable', warranty: W1, tradeIn: 'Working: up to £110 · Broken: up to £40',
    faqs: [
      { q: 'How much is an iPhone 11 screen replacement?', a: '£59 with a premium LCD — the same panel type as the original. Thirty minutes on the bench.' },
      { q: 'Is an iPhone 11 still worth repairing in 2026?', a: 'At £59 for a screen and £45 for a battery, yes — it still runs current iOS and does everything most people need.' },
    ],
  },
  {
    slug: 'iphone-11-pro', name: 'iPhone 11 Pro', identifier: 'A2215', year: 2019, device: 'iPhone',
    faults: [
      { label: 'Screen (soft OLED)', price: '£79', turnaround: '30–45 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Back glass', price: '£59', turnaround: 'Same day', serviceSlug: 'iphone/back-glass-replacement' },
    ],
    partGrades: 'Soft-OLED aftermarket premium', warranty: W1, tradeIn: 'Working: up to £150 · Broken: up to £50',
    faqs: [
      { q: 'iPhone 11 Pro screen price?', a: '£79 with soft OLED — the 11 Pro used an OLED panel, so we fit OLED, not LCD.' },
    ],
  },
  {
    slug: 'iphone-xr', name: 'iPhone XR', identifier: 'A2105', year: 2018, device: 'iPhone',
    faults: [
      { label: 'Screen (LCD premium)', price: '£59', turnaround: '30 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£39', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£45', turnaround: '45–60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'LCD premium', warranty: W1, tradeIn: 'Working: up to £80 · Broken: up to £30',
    faqs: [
      { q: 'iPhone XR screen and battery same visit?', a: 'Yes — £59 and £39 respectively, both done in the same 40-minute slot.' },
    ],
  },
  {
    slug: 'iphone-se-2022', name: 'iPhone SE (3rd gen)', identifier: 'A2783', year: 2022, device: 'iPhone',
    faults: [
      { label: 'Screen (LCD premium)', price: '£55', turnaround: '30 mins', serviceSlug: 'iphone/screen-replacement' },
      { label: 'Battery', price: '£39', turnaround: '20–30 mins', serviceSlug: 'iphone/battery-replacement' },
    ],
    partGrades: 'LCD premium', warranty: W1, tradeIn: 'Working: up to £90 · Broken: up to £30',
    faqs: [
      { q: 'iPhone SE 2022 screen cost?', a: '£55 fitted in half an hour. Touch ID stays with your phone and keeps working.' },
    ],
  },
  // -------------------------------------------------------- MacBook
  {
    slug: 'macbook-air-m1-a2337', name: 'MacBook Air 13" M1', identifier: 'A2337', year: 2020, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£189', turnaround: '2–4 hrs', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£99', turnaround: '60–90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£159', turnaround: 'Same day', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'Charging / USB-C port', price: '£119', turnaround: 'Same day', serviceSlug: 'macbook/logic-board-repair' },
      { label: 'Logic board (component-level)', price: 'From £189', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A; genuine-spec cells', warranty: W1, tradeIn: 'Working: up to £320 · Broken: up to £110',
    faqs: [
      { q: 'MacBook Air M1 screen replacement price?', a: '£189 with a graded-A OEM-pull assembly — the genuine panel from a low-cycle donor. Back the same day if you are in before 12.' },
      { q: 'MacBook Air M1 battery replacement cost?', a: '£99, 60 to 90 minutes. We show you the cycle count before and after.' },
      { q: 'Is an M1 Air still worth repairing?', a: 'Yes. It is one of the best-value MacBooks ever made; a £189 screen on an M1 Air beats £900 on a new one for most workloads.' },
    ],
  },
  {
    slug: 'macbook-air-m2-a2681', name: 'MacBook Air 13" M2', identifier: 'A2681', year: 2022, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£229', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£119', turnaround: '90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£179', turnaround: 'Same day', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'Logic board (component-level)', price: 'From £199', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £480 · Broken: up to £160',
    faqs: [
      { q: 'MacBook Air M2 screen cost?', a: '£229 with an OEM-pull assembly, True Tone preserved. Same day when the part is on the shelf — it usually is.' },
    ],
  },
  {
    slug: 'macbook-air-m3-a3113', name: 'MacBook Air 13" M3', identifier: 'A3113', year: 2024, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£259', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£129', turnaround: '90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Logic board (component-level)', price: 'From £219', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £620 · Broken: up to £200',
    faqs: [
      { q: 'MacBook Air M3 screen replacement?', a: '£259 with a graded-A OEM-pull assembly. Midnight-finish lids show fingerprints — we clean and inspect the whole lid while it is on the bench.' },
    ],
  },
  {
    slug: 'macbook-air-13-a1466', name: 'MacBook Air 13" (2017)', identifier: 'A1466', year: 2017, device: 'MacBook',
    faults: [
      { label: 'Screen (aftermarket premium)', price: '£129', turnaround: '2–4 hrs', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£89', turnaround: '60 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'SSD upgrade 512GB', price: '£129', turnaround: 'Same day', serviceSlug: 'macbook/ssd-upgrade' },
    ],
    partGrades: 'Aftermarket premium panels; named-brand NVMe drives', warranty: W1, tradeIn: 'Working: up to £90 · Broken: up to £30',
    faqs: [
      { q: 'Is a 2017 MacBook Air worth fixing?', a: 'For basic use with a new battery and SSD, it can still earn its keep — £89 and £129 respectively. We will tell you honestly if your money is better spent on a refurb M1.' },
    ],
  },
  {
    slug: 'macbook-air-2020-intel-a2179', name: 'MacBook Air 13" (2020, Intel)', identifier: 'A2179', year: 2020, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£189', turnaround: '2–4 hrs', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£99', turnaround: '60–90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£149', turnaround: 'Same day', serviceSlug: 'macbook/keyboard-replacement' },
    ],
    partGrades: 'OEM-pull display assemblies', warranty: W1, tradeIn: 'Working: up to £180 · Broken: up to £60',
    faqs: [
      { q: 'Intel MacBook Air 2020 screen price?', a: '£189 with an OEM-pull assembly, same day. The Intel Air shares its display with the M1 — parts are never a problem.' },
    ],
  },
  {
    slug: 'macbook-pro-13-m1-a2338', name: 'MacBook Pro 13" M1', identifier: 'A2338', year: 2020, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£219', turnaround: '2–4 hrs', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£109', turnaround: '60–90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£169', turnaround: 'Same day', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'Logic board (component-level)', price: 'From £189', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £400 · Broken: up to £130',
    faqs: [
      { q: 'MacBook Pro M1 screen replacement?', a: '£219 with a graded-A OEM-pull assembly, back the same day if you are in before 12.' },
    ],
  },
  {
    slug: 'macbook-pro-14-m3-a2918', name: 'MacBook Pro 14" M3', identifier: 'A2918', year: 2023, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£389', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£149', turnaround: '2 hrs', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Logic board (component-level)', price: 'From £229', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £780 · Broken: up to £260',
    faqs: [
      { q: 'MacBook Pro 14 M3 screen cost?', a: '£389 with an OEM-pull Liquid Retina XDR assembly. It is a serious panel — we fit the genuine part, not a substitute.' },
    ],
  },
  {
    slug: 'macbook-pro-16-a2141', name: 'MacBook Pro 16" (2019)', identifier: 'A2141', year: 2019, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£329', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£149', turnaround: 'Same day', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£189', turnaround: '1–2 days', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'SSD upgrade 1TB', price: '£179', turnaround: 'Same day', serviceSlug: 'macbook/ssd-upgrade' },
    ],
    partGrades: 'OEM-pull display assemblies; named-brand NVMe', warranty: W1, tradeIn: 'Working: up to £320 · Broken: up to £110',
    faqs: [
      { q: 'MacBook Pro 16 2019 battery swollen — cost?', a: '£149 fitted, same day. Do not keep charging it — a swollen cell is the one fault we treat as urgent.' },
    ],
  },
  {
    slug: 'macbook-pro-13-a1708', name: 'MacBook Pro 13" (2017)', identifier: 'A1708', year: 2017, device: 'MacBook',
    faults: [
      { label: 'Screen (aftermarket premium)', price: '£159', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£99', turnaround: '90 mins', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard (scissor)', price: '£119', turnaround: '1–2 days', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'SSD upgrade 512GB', price: '£129', turnaround: 'Same day', serviceSlug: 'macbook/ssd-upgrade' },
    ],
    partGrades: 'Aftermarket premium panels', warranty: W1, tradeIn: 'Working: up to £130 · Broken: up to £45',
    faqs: [
      { q: '2017 MacBook Pro keyboard repair?', a: '£119 for the keyboard. Single stuck keys are often a £25–£40 clean and re-cap — we try that first.' },
    ],
  },
  {
    slug: 'macbook-pro-15-a1990', name: 'MacBook Pro 15" (2019)', identifier: 'A1990', year: 2019, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£299', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£139', turnaround: 'Same day', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Keyboard', price: '£189', turnaround: '1–2 days', serviceSlug: 'macbook/keyboard-replacement' },
      { label: 'Logic board (component-level)', price: 'From £199', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies', warranty: W1, tradeIn: 'Working: up to £280 · Broken: up to £95',
    faqs: [
      { q: 'A1990 butterfly keyboard — fixable?', a: 'Yes. Where the mechanism is worn we fit the revised-generation top case. Single keys we clean first, for far less.' },
    ],
  },
  {
    slug: 'macbook-pro-14-m1-pro-a2442', name: 'MacBook Pro 14" M1 Pro', identifier: 'A2442', year: 2021, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£359', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£139', turnaround: '2 hrs', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Logic board (component-level)', price: 'From £219', turnaround: '2–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £580 · Broken: up to £190',
    faqs: [
      { q: 'MacBook Pro 14 M1 Pro screen price?', a: '£359 with a graded-A OEM-pull XDR assembly, True Tone preserved.' },
    ],
  },
  {
    slug: 'macbook-pro-16-m1-max-a2485', name: 'MacBook Pro 16" M1 Max', identifier: 'A2485', year: 2021, device: 'MacBook',
    faults: [
      { label: 'Screen (OEM-pull assembly)', price: '£419', turnaround: 'Same day', serviceSlug: 'macbook/screen-replacement' },
      { label: 'Battery', price: '£159', turnaround: '2 hrs', serviceSlug: 'macbook/battery-replacement' },
      { label: 'Logic board (component-level)', price: 'From £249', turnaround: '3–5 days', serviceSlug: 'macbook/logic-board-repair' },
    ],
    partGrades: 'OEM-pull display assemblies, graded A', warranty: W1, tradeIn: 'Working: up to £720 · Broken: up to £240',
    faqs: [
      { q: 'M1 Max 16-inch screen replacement?', a: '£419 with a genuine-spec XDR assembly. We stock-check before you travel — call or WhatsApp and we will confirm the part.' },
    ],
  },
  // ----------------------------------------------------------- iPad
  {
    slug: 'ipad-10', name: 'iPad 10th gen', identifier: 'A2696', year: 2022, device: 'iPad',
    faults: [
      { label: 'Digitiser glass', price: '£79', turnaround: 'Same day', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Glass + LCD', price: '£129', turnaround: 'Same day', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Charging port', price: '£69', turnaround: 'Same day', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Matched digitisers and LCDs', warranty: W1, tradeIn: 'Working: up to £170 · Broken: up to £50',
    faqs: [
      { q: 'iPad 10 screen cracked, picture fine — cost?', a: '£79 for the digitiser glass alone. If the picture is damaged too it is £129 for glass and LCD together.' },
    ],
  },
  {
    slug: 'ipad-9', name: 'iPad 9th gen', identifier: 'A2602', year: 2021, device: 'iPad',
    faults: [
      { label: 'Digitiser glass', price: '£69', turnaround: 'Same day', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Glass + LCD', price: '£119', turnaround: 'Same day', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Battery', price: '£69', turnaround: 'Same day', serviceSlug: 'iphone/battery-replacement' },
    ],
    partGrades: 'Matched digitisers and LCDs', warranty: W1, tradeIn: 'Working: up to £130 · Broken: up to £40',
    faqs: [
      { q: 'iPad 9 screen replacement price?', a: '£69 for digitiser-only (cracked glass, good picture), £119 for glass and LCD. Touch ID transfers from your original button.' },
    ],
  },
  {
    slug: 'ipad-air-5', name: 'iPad Air 5', identifier: 'A2588', year: 2022, device: 'iPad',
    faults: [
      { label: 'Screen (laminated assembly)', price: '£149', turnaround: '1–2 days', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Charging port', price: '£79', turnaround: 'Same day', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Laminated assemblies, original-quality glass', warranty: W1, tradeIn: 'Working: up to £260 · Broken: up to £80',
    faqs: [
      { q: 'iPad Air 5 screen replacement?', a: '£149. The Air display is laminated — glass and panel are one part — which is why it costs more than a standard iPad digitiser.' },
    ],
  },
  {
    slug: 'ipad-air-4', name: 'iPad Air 4', identifier: 'A2316', year: 2020, device: 'iPad',
    faults: [
      { label: 'Screen (laminated assembly)', price: '£139', turnaround: '1–2 days', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Charging port', price: '£79', turnaround: 'Same day', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Laminated assemblies', warranty: W1, tradeIn: 'Working: up to £200 · Broken: up to £60',
    faqs: [
      { q: 'iPad Air 4 cracked screen cost?', a: '£139 for the laminated assembly, one to two working days. We confirm the part is in before you leave the iPad.' },
    ],
  },
  {
    slug: 'ipad-pro-11', name: 'iPad Pro 11" (2018–2022)', identifier: 'A1980 / A2228 / A2377 / A2759', year: 2022, device: 'iPad',
    faults: [
      { label: 'Screen (laminated assembly)', price: '£189', turnaround: '1–2 days', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Battery', price: '£99', turnaround: '1–2 days', serviceSlug: 'iphone/battery-replacement' },
    ],
    partGrades: 'Laminated assemblies, original-quality glass', warranty: W1, tradeIn: 'Working: up to £340 · Broken: up to £110',
    faqs: [
      { q: 'iPad Pro 11 screen — why the price?', a: 'The ProMotion laminated assembly is one of the most expensive panels we fit. £189 is the part at trade plus an hour of careful bench work.' },
    ],
  },
  {
    slug: 'ipad-mini-6', name: 'iPad mini 6', identifier: 'A2567', year: 2021, device: 'iPad',
    faults: [
      { label: 'Screen (laminated assembly)', price: '£139', turnaround: '1–2 days', serviceSlug: 'ipad/screen-replacement' },
      { label: 'Charging port', price: '£75', turnaround: 'Same day', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Laminated assemblies', warranty: W1, tradeIn: 'Working: up to £190 · Broken: up to £55',
    faqs: [
      { q: 'iPad mini 6 screen replacement?', a: '£139 for the laminated assembly. The mini\'s jelly-scroll trait is normal, not damage — we will show you the difference.' },
    ],
  },
  // ---------------------------------------------------------- Galaxy
  {
    slug: 'galaxy-s24', name: 'Galaxy S24', identifier: 'SM-S921B', year: 2024, device: 'Galaxy',
    faults: [
      { label: 'Screen (service pack + frame)', price: '£199', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£59', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£59', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Samsung service-pack assembly with frame', warranty: W1, tradeIn: 'Working: up to £300 · Broken: up to £90',
    faqs: [
      { q: 'Galaxy S24 screen replacement price?', a: '£199 with a Samsung service-pack display and new frame — factory fit, fingerprint calibrated.' },
    ],
  },
  {
    slug: 'galaxy-s23', name: 'Galaxy S23', identifier: 'SM-S911B', year: 2023, device: 'Galaxy',
    faults: [
      { label: 'Screen (service pack + frame)', price: '£189', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£55', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£55', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Samsung service-pack assembly with frame', warranty: W1, tradeIn: 'Working: up to £240 · Broken: up to £75',
    faqs: [
      { q: 'Galaxy S23 screen cost?', a: '£189 with the genuine service-pack assembly. Cheaper bare-panel fixes exist — we will quote one if you ask, with the trade-offs explained.' },
    ],
  },
  {
    slug: 'galaxy-s22', name: 'Galaxy S22', identifier: 'SM-S901B', year: 2022, device: 'Galaxy',
    faults: [
      { label: 'Screen (service pack + frame)', price: '£159', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£49', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£49', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Samsung service-pack assembly with frame', warranty: W1, tradeIn: 'Working: up to £180 · Broken: up to £55',
    faqs: [
      { q: 'Galaxy S22 green line — fix?', a: 'The green line is panel failure, and the fix is a new display: £159 with a service-pack assembly, same day.' },
    ],
  },
  {
    slug: 'galaxy-s21', name: 'Galaxy S21', identifier: 'SM-G991B', year: 2021, device: 'Galaxy',
    faults: [
      { label: 'Screen (service pack + frame)', price: '£149', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Samsung service-pack assembly with frame', warranty: W1, tradeIn: 'Working: up to £130 · Broken: up to £40',
    faqs: [
      { q: 'Galaxy S21 screen replacement?', a: '£149 with a genuine service-pack display and frame, fitted the same day.' },
    ],
  },
  {
    slug: 'galaxy-a55', name: 'Galaxy A55', identifier: 'SM-A556B', year: 2024, device: 'Galaxy',
    faults: [
      { label: 'Screen (matched assembly)', price: '£95', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Matched-spec assembly', warranty: W1, tradeIn: 'Working: up to £140 · Broken: up to £40',
    faqs: [
      { q: 'Galaxy A55 screen price?', a: '£95 with a matched assembly, same day. The A-series part keeps the cost sensible.' },
    ],
  },
  {
    slug: 'galaxy-a54', name: 'Galaxy A54', identifier: 'SM-A546B', year: 2023, device: 'Galaxy',
    faults: [
      { label: 'Screen (matched assembly)', price: '£89', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£45', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Matched-spec assembly', warranty: W1, tradeIn: 'Working: up to £110 · Broken: up to £35',
    faqs: [
      { q: 'Galaxy A54 screen replacement near Hounslow?', a: '£89 fitted same day on Whitton High Street — ten minutes from Hounslow on the 281 or the train.' },
    ],
  },
  {
    slug: 'galaxy-a14', name: 'Galaxy A14', identifier: 'SM-A145F', year: 2023, device: 'Galaxy',
    faults: [
      { label: 'Screen (matched assembly)', price: '£69', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£39', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£39', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Matched-spec assembly', warranty: W1, tradeIn: 'Working: up to £55 · Broken: up to £18',
    faqs: [
      { q: 'Galaxy A14 screen cost?', a: '£69, same day. On a phone at this price we will always tell you honestly whether the repair beats replacing it.' },
    ],
  },
  {
    slug: 'galaxy-a13', name: 'Galaxy A13', identifier: 'SM-A137F', year: 2022, device: 'Galaxy',
    faults: [
      { label: 'Screen (matched assembly)', price: '£65', turnaround: 'Same day', serviceSlug: 'samsung/screen-replacement' },
      { label: 'Battery', price: '£39', turnaround: '60 mins', serviceSlug: 'iphone/battery-replacement' },
      { label: 'Charging port', price: '£39', turnaround: '60 mins', serviceSlug: 'iphone/charging-port-repair' },
    ],
    partGrades: 'Matched-spec assembly', warranty: W1, tradeIn: 'Working: up to £45 · Broken: up to £15',
    faqs: [
      { q: 'Is a Galaxy A13 worth a new screen?', a: 'At £65, usually yes if the phone otherwise serves you. We check the rest of the phone over and tell you straight.' },
    ],
  },
];

export function getModel(slug: string): Model | undefined {
  return MODELS.find((m) => m.slug === slug);
}

export const MODEL_COUNT = MODELS.length;
