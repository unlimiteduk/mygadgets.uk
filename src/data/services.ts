// ------------------------------------------------------------------
// Repair services. Structured data, not page copy — the "CMS" layer.
// Prices are realistic market figures; replace with the client's
// signed-off price list before launch (brief §8, blocking item 3).
// ------------------------------------------------------------------

import { EXTRA_HUBS, EXTRA_SERVICES } from './extra-repairs';

export interface PriceRow {
  model: string;
  modelSlug?: string;
  part: string;
  price: string;
  turnaround: string;
}

export interface Faq {
  q: string;
  a: string;
}

export type RepairDevice =
  | 'macbook'
  | 'iphone'
  | 'ipad'
  | 'samsung'
  | 'laptop'
  | 'playstation'
  | 'xbox'
  | 'imac'
  | 'pc';

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface RepairLink {
  href: string;
  label: string;
  note?: string;
}

export interface Service {
  slug: string;
  device: RepairDevice;
  deviceLabel: string;
  name: string;
  title: string;
  metaDescription: string;
  /** When set, used as the page H1 instead of "{device} {name}". */
  h1?: string;
  fromPrice: string;
  turnaround: string;
  /** No published price. The page must not invent one. */
  quoteOnly?: boolean;
  faultLooksLike: string[];
  whatWeDo: string[];
  parts: string;
  warranty: string;
  photoShot?: string;
  photoImage?: string;
  priceTable: PriceRow[];
  faqs: Faq[];
  sections?: ServiceSection[];
  related?: RepairLink[];
}

export interface DeviceHub {
  slug: string;
  label: string;
  blurb: string;
  /** Omitted or true: the device appears in the booking flow. */
  bookable?: boolean;
  /** Homepage device card destination. Defaults to the booking form. */
  selectorTo?: string;
  modelPlaceholder?: string;
  title?: string;
  metaDescription?: string;
  h1?: string;
  intro?: string[];
  sections?: ServiceSection[];
  faqs?: Faq[];
  links?: RepairLink[];
}

export const SERVICES: Service[] = [
  // ---------------------------------------------------------- MacBook
  {
    slug: 'macbook/screen-replacement',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Screen replacement',
    title: 'MacBook screen replacement in Whitton',
    metaDescription:
      'Cracked MacBook screen replaced on Whitton High Street, TW2. OEM-pull and premium aftermarket assemblies, most models back the same day. From £129.',
    fromPrice: '£129',
    turnaround: '2–4 hrs, same day',
    faultLooksLike: [
      'Cracked glass or a shattered corner, with or without image',
      'Vertical or horizontal lines, flickering, or ink-like black blotches',
      'Backlight on but no picture — the classic "black screen" after a drop',
      'Pressure marks from something trapped between keyboard and lid',
    ],
    whatWeDo: [
      'We confirm the fault is the display assembly and not the display cable or GPU before quoting — a loose eDP cable costs nothing like a screen.',
      'The bottom case comes off on the bench, the battery is disconnected first, and the display assembly is swapped as a complete unit. On M-series machines that means the lid comes off whole; on 2016–2019 models we can replace the panel alone where it saves you money.',
      'True Tone is preserved where the model supports it — we transfer the display data so colour calibration stays intact.',
      'Every screen is run through a full-brightness colour and uniformity check, plus a lid-angle flex test, before it goes back in the queue for collection.',
    ],
    parts:
      'We fit two grades, stated on your quote. OEM-pull: a genuine Apple display assembly removed from a low-cycle donor machine, graded A. Aftermarket premium: a matched-spec panel with the same resolution and brightness, at a lower price. We will tell you which is on your machine — the docket records it.',
    warranty: '3 months on the part and the fitting, covering defects. New physical damage is not covered.',
    photoShot: 'Before / after — cracked MacBook lid next to the same machine with a fresh display, same angle',
    photoImage: '/images/macbook-screen-replacement.webp',
    priceTable: [
      { model: 'MacBook Air 13" M1 (A2337)', modelSlug: 'macbook-air-m1-a2337', part: 'OEM-pull assembly', price: '£189', turnaround: '2–4 hrs' },
      { model: 'MacBook Air 13" M2 (A2681)', modelSlug: 'macbook-air-m2-a2681', part: 'OEM-pull assembly', price: '£229', turnaround: 'Same day' },
      { model: 'MacBook Pro 13" M1 (A2338)', modelSlug: 'macbook-pro-13-m1-a2338', part: 'OEM-pull assembly', price: '£219', turnaround: '2–4 hrs' },
      { model: 'MacBook Pro 14" M3 (A2918)', modelSlug: 'macbook-pro-14-m3-a2918', part: 'OEM-pull assembly', price: '£389', turnaround: 'Same day' },
      { model: 'MacBook Air 13" (A1466, 2017)', modelSlug: 'macbook-air-13-a1466', part: 'Aftermarket premium', price: '£129', turnaround: '2–4 hrs' },
    ],
    faqs: [
      { q: 'How much is a MacBook Air M1 screen replacement?', a: '£189 with an OEM-pull assembly, fitted in two to four hours. That is the complete lid assembly — panel, glass, camera and hinges — not a bare panel swap.' },
      { q: 'Will I lose my data?', a: 'No. A screen replacement never touches the storage. Your Mac goes back exactly as it came in, down to the open tabs.' },
      { q: 'Do you keep True Tone working?', a: 'Yes, on models that support it. We transfer the display calibration data from your old assembly to the new one.' },
      { q: 'Is it cheaper through Apple?', a: 'Rarely. Apple quotes for a full display assembly at their flat rate, which on an M1 Air typically runs well above £300. Our OEM-pull route is the same panel for less.' },
      { q: 'Can you fix it the same day?', a: 'If you are in before 12:00 and the assembly is on the shelf — it is for the common models — you collect the same afternoon. Rarer lids take one working day to source.' },
      { q: 'My screen flickers but has no crack. Is it the screen?', a: 'Sometimes it is the display cable, which is a cheaper fix. Diagnosis is free either way, and we quote before any work starts.' },
    ],
  },
  {
    slug: 'macbook/battery-replacement',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Battery replacement',
    title: 'MacBook battery replacement in Whitton',
    metaDescription:
      'MacBook battery replacement from £89 on Whitton High Street. Cycle counts checked in front of you, genuine-spec cells, most models done in an hour. 3-month warranty.',
    fromPrice: '£89',
    turnaround: '60–90 mins',
    faultLooksLike: [
      '"Service Battery" or "Replace Soon" in the battery menu',
      'Dying at 30–40% or shutting down under any real load',
      'Trackpad getting stiff or the bottom case bulging — a swollen cell',
      'Cycle count over 800 with a fraction of the original runtime',
    ],
    whatWeDo: [
      'We read the cycle count and full-charge capacity with you at the counter before quoting, so you can see the same numbers we do.',
      'On M-series MacBooks the battery is bonded to the top case; we release it with solvent, not prying, so the chassis and trackpad are untouched.',
      'A swollen battery is treated as a safety job: it goes in the fire bag the moment the case opens, and we do not charge it or ship it back.',
      'After fitting we run one full charge cycle and check the reported capacity matches spec before you collect.',
    ],
    parts:
      'Genuine-spec cells with the correct controller board, so macOS reports health accurately and Optimised Battery Charging still works. We do not fit unbranded cells — they misreport and age badly.',
    warranty: '3 months, including capacity falling below 80% of rated within the warranty period.',
    photoShot: 'Open MacBook bottom case — old swollen battery lifted free beside the new cell before fitting',
    photoImage: '/images/macbook-battery-replacement.webp',
    priceTable: [
      { model: 'MacBook Air 13" M1 (A2337)', modelSlug: 'macbook-air-m1-a2337', part: 'Genuine-spec cell', price: '£99', turnaround: '60–90 mins' },
      { model: 'MacBook Pro 13" M1 (A2338)', modelSlug: 'macbook-pro-13-m1-a2338', part: 'Genuine-spec cell', price: '£109', turnaround: '60–90 mins' },
      { model: 'MacBook Pro 16" (A2141, 2019)', modelSlug: 'macbook-pro-16-a2141', part: 'Genuine-spec cell', price: '£149', turnaround: 'Same day' },
      { model: 'MacBook Air 13" (A1466, 2017)', modelSlug: 'macbook-air-13-a1466', part: 'Genuine-spec cell', price: '£89', turnaround: '60 mins' },
    ],
    faqs: [
      { q: 'How do I know it is the battery and not the charger?', a: 'Bring both in. We test the charger, the port and the battery at the counter — free — and you only pay for what is actually faulty.' },
      { q: 'What cycle count means it is time?', a: 'Apple rates most MacBooks for 1,000 cycles. Below 80% maximum capacity, or any swelling, is when we recommend replacement — we will show you the reading.' },
      { q: 'Will macOS warn about a non-genuine part?', a: 'No. The cells we fit carry the correct controller, so System Settings reports normal battery health with no warnings.' },
      { q: 'My trackpad has gone stiff. Battery?', a: 'Very likely a swollen cell pressing up from below. Stop charging it and bring it in — a swollen battery is the one fault we treat as urgent.' },
      { q: 'How long does it take?', a: 'An hour to ninety minutes for Airs and 13-inch Pros. You can wait with a coffee or leave it with us.' },
      { q: 'Do you take the old battery away?', a: 'Yes. All cells go to registered WEEE disposal. You never have to dispose of a lithium battery yourself.' },
    ],
  },
  {
    slug: 'macbook/keyboard-replacement',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Keyboard replacement',
    title: 'MacBook keyboard replacement in Whitton',
    metaDescription:
      'Sticky, dead or repeating MacBook keys? Keyboard and top-case replacement from £119, Whitton High Street. Butterfly and scissor mechanisms both repaired. 3-month warranty.',
    fromPrice: '£119',
    turnaround: 'Same day – 2 days',
    faultLooksLike: [
      'Keys repeating, missing letters, or needing a hard press',
      'A whole row dead after a spill',
      'Butterfly keys (2016–2019) stuck down with dust under the cap',
      'Backlight uneven or a zone of keys gone dark',
    ],
    whatWeDo: [
      'First we establish whether it is the keyboard, the flex cable, or liquid on the logic board connector — each is a different price.',
      'Single stuck butterfly keys can often be cleaned and re-capped for a fraction of a keyboard price. We will always try that first.',
      'Where the keyboard itself is done, on most unibody MacBooks it is a top-case-level job: the keyboard is riveted in, so we replace keyboard and palm-rest assembly together.',
      'Spill jobs get the board inspected under the microscope before we quote — a new keyboard on a corroded connector fails in weeks.',
    ],
    parts:
      'Matched-generation top cases or keyboards. We do not mix butterfly and scissor parts across generations; your machine goes back with the mechanism it was designed for, or better where Apple revised the part.',
    warranty: '3 months on part and fitting.',
    photoShot: 'Top case swap — worn keyboard beside the replacement top case, keys macro',
    photoImage: '/images/macbook-keyboard-replacement.webp',
    priceTable: [
      { model: 'MacBook Air 13" M1 (A2337)', modelSlug: 'macbook-air-m1-a2337', part: 'Top case with keyboard', price: '£159', turnaround: 'Same day' },
      { model: 'MacBook Pro 13" (A1708, 2017)', modelSlug: 'macbook-pro-13-a1708', part: 'Keyboard, scissor', price: '£119', turnaround: '1–2 days' },
      { model: 'MacBook Pro 15" (A1990, 2019)', modelSlug: 'macbook-pro-15-a1990', part: 'Top case with keyboard', price: '£189', turnaround: '1–2 days' },
    ],
    faqs: [
      { q: 'Can you fix one stuck key, or is it the whole keyboard?', a: 'Often one key. Butterfly keys especially can be cleaned or re-capped for £25–£40. We only quote a full keyboard when the mechanism or cable is actually dead.' },
      { q: 'I spilled coffee on it yesterday. What now?', a: 'Switch it off, do not charge it, and bring it in as soon as you can. Corrosion starts within hours. The keyboard may be the least of it — we check the board first.' },
      { q: 'Is the butterfly keyboard a known problem?', a: 'Yes, 2016–2019 models. Apple ran a service programme that has now ended. We still repair them, and where possible we fit the revised-generation part.' },
      { q: 'How long will I be without the laptop?', a: 'Top-case jobs are same day when the part is on the shelf, one to two working days otherwise. We tell you which before you leave it.' },
      { q: 'Will my data be safe?', a: 'Keyboard work never touches storage. The machine stays in the shop, powered off, until you collect.' },
    ],
  },
  {
    slug: 'macbook/logic-board-repair',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Logic board repair',
    title: 'MacBook logic board repair in Whitton',
    metaDescription:
      'Component-level MacBook logic board repair under the microscope — dead machines, no-backlight, USB-C faults. From £149, Whitton High Street. No fix, no fee.',
    fromPrice: '£149',
    turnaround: '2–5 days',
    faultLooksLike: [
      'Completely dead — no chime, no fan, no sign of life on any charger',
      'Chargers negotiate but the machine will not power on',
      'Screen black with an external display working — a backlight circuit fault',
      'One or more USB-C ports dead or intermittent',
    ],
    whatWeDo: [
      'This is bench work, not part swapping. The board comes out, goes under the microscope, and we trace the fault with a schematic and boardview — the same maps Apple-authorised centres use.',
      'Common fixes: backlight driver and fuse, CD3215 USB-C controllers, corroded power-rail components, dead NAND power lines. We replace the failed component, not the board.',
      'Every repair is ultrasonic-cleaned first if there is any corrosion history — you cannot solder reliably onto a contaminated board.',
      'Where a board is genuinely beyond economic repair we say so, quote a replacement board if one makes sense, and offer data recovery as a separate route.',
    ],
    parts:
      'Discrete components — controllers, MOSFETs, capacitors, connectors — sourced to the original specification. Nothing is "reworked" unless it is the correct fix.',
    warranty: '3 months on the repaired circuit. No fix, no fee: if we cannot repair it, the diagnosis costs you nothing.',
    photoShot: 'Macro — logic board under the microscope, probing a suspect component',
    photoImage: '/images/macbook-logic-board-repair.webp',
    priceTable: [
      { model: 'Backlight circuit repair', part: 'Component-level', price: '£149', turnaround: '2–3 days' },
      { model: 'USB-C / charging fault', part: 'Component-level', price: '£169', turnaround: '2–3 days' },
      { model: 'Dead board, no power', part: 'Component-level', price: '£189–£249', turnaround: '3–5 days' },
      { model: 'Liquid-damaged board', part: 'Component-level', price: 'From £199', turnaround: '3–5 days' },
    ],
    faqs: [
      { q: 'Apple told me the board needs replacing for £600+. Can you do better?', a: 'Usually, yes. Apple replaces boards; we repair them. Most "dead board" faults are a handful of components. The diagnosis is free, so the worst case is you know for certain.' },
      { q: 'What is component-level repair?', a: 'Identifying the exact failed chip or component on the board and replacing just that part under a microscope, rather than swapping the whole logic board.' },
      { q: 'Will my data survive?', a: 'On modern MacBooks the storage is on the board, so repairing your board is usually the only route to your data. That is exactly why we repair rather than replace.' },
      { q: 'How long does board repair take?', a: 'Two to five working days depending on the fault. We give you a firm quote after the bench diagnosis, usually within 24 hours of drop-off.' },
      { q: 'Is it worth repairing an older machine?', a: 'We will tell you honestly. If the repair approaches the value of a good refurbished replacement, we say so — and can quote you one from the shop shelf.' },
    ],
  },
  {
    slug: 'macbook/liquid-damage',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Liquid damage',
    title: 'MacBook liquid damage repair in Whitton',
    metaDescription:
      'Spilled on your MacBook? Switch it off and bring it to Whitton High Street. Ultrasonic cleaning, microscope board repair, from £99 assessment applied to the repair. No fix, no fee.',
    fromPrice: '£99',
    turnaround: '2–5 days',
    faultLooksLike: [
      'Spill just happened — machine on or off, wet or apparently dry',
      'Keys, ports or trackpad dead days after a spill that "seemed fine"',
      'Random shutdowns or a fan at full speed after liquid exposure',
      'Corrosion found by another shop, quoted a full board replacement',
    ],
    whatWeDo: [
      'Time matters more than anything. Do not charge it, do not test it "to see" — every power-on pushes corrosion further. Bring it in as it is.',
      'The board comes straight out and into an ultrasonic bath with electronics-safe solution, then under the microscope for a component-by-component inspection.',
      'You get an honest assessment: what the liquid reached, what it will cost, and whether it is worth it. If the data matters more than the machine, we say so and quote recovery separately.',
      'Keyboard, battery and trackpad are inspected as well as the board — liquid rarely stops at one component.',
    ],
    parts:
      'Whatever the liquid actually damaged — from a £2 fuse to a keyboard or a display cable. We replace only what fails inspection, and show you the corrosion photos.',
    warranty: '3 months on the repaired circuits. Because liquid damage can have delayed effects, the warranty covers the specific circuits we repaired.',
    photoShot: 'Macro — corrosion being cleaned from a logic board with isopropyl and a brush',
    photoImage: '/images/macbook-liquid-damage.webp',
    priceTable: [
      { model: 'Assessment + ultrasonic clean', part: 'Bench service', price: '£99', turnaround: '24–48 hrs' },
      { model: 'Board-level repair after spill', part: 'Component-level', price: 'From £199', turnaround: '3–5 days' },
      { model: 'Keyboard/top case after spill', part: 'Matched part', price: 'From £119', turnaround: '1–2 days' },
    ],
    faqs: [
      { q: 'I just spilled something. What do I do right now?', a: 'Power off, unplug, do not charge it, do not put it in rice. Bring it in as soon as possible — same day if you can. Speed is the single biggest factor in the outcome.' },
      { q: 'It still works. Do I need to worry?', a: 'Yes, quietly. Liquid under chips keeps corroding for days. Machines that "seemed fine" are our most common liquid jobs a week later. A clean now is far cheaper than a dead board later.' },
      { q: 'Will rice help?', a: 'No. Rice does nothing for the liquid already under the chips, and the wait costs you the window where cleaning alone would have fixed it.' },
      { q: 'What are the chances?', a: 'Brought in quickly and cleaned properly, most liquid-damaged MacBooks survive. Brought in after a week of testing it "to see", far fewer. The free assessment gives you a straight answer.' },
      { q: 'Is my data safe?', a: 'Storage on modern MacBooks is on the logic board, so the data question and the board question are the same question. We treat both together.' },
    ],
  },
  {
    slug: 'macbook/data-recovery',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'Data recovery',
    title: 'MacBook data recovery in Whitton',
    metaDescription:
      'Data recovery from dead and liquid-damaged MacBooks on Whitton High Street. Board-level work, your files back on a drive. No data, no fee. From £129.',
    fromPrice: '£129',
    turnaround: '2–7 days',
    faultLooksLike: [
      'MacBook dead or damaged and the only copy of something lives on it',
      'Machine quoted as "uneconomical to repair" but the data matters',
      'Failed upgrade, botched update, or a drive that no longer mounts',
    ],
    whatWeDo: [
      'On Apple-silicon and T2 MacBooks the storage is soldered to the board and encrypted to it — the only route to the data is making your board work well enough to boot. That is board-level repair with a different goal.',
      'We get the machine to a state where it mounts, then image the drive to fresh media. Your original board is never risked further once the data is off.',
      'Everything is handled in the shop under our written data-handling policy: devices are locked away overnight, drives are wiped after handover, and nothing leaves the premises.',
      'If recovery is impossible we tell you at assessment — no data, no fee.',
    ],
    parts: 'No parts in the usual sense. The "part" is a bench, a microscope, and a known-good donor board where a transplant is the only route.',
    warranty: 'The recovered data is verified with you at collection. No data recovered, no fee.',
    photoShot: 'Failed drive connected to the recovery dock, progress bar mid-read',
    photoImage: '/images/macbook-data-recovery.webp',
    priceTable: [
      { model: 'Logical recovery (drive mounts)', part: 'Bench service', price: '£129', turnaround: '2–3 days' },
      { model: 'Board-level recovery (dead machine)', part: 'Component-level', price: '£249–£399', turnaround: '3–7 days' },
      { model: 'Liquid-damaged machine', part: 'Component-level', price: 'From £299', turnaround: '3–7 days' },
    ],
    faqs: [
      { q: 'Can you get data off a completely dead MacBook?', a: 'Usually, yes. Because the storage is encrypted to the logic board, we repair the board far enough to boot and image it. Success rates are high when the machine has not been through a failed repair attempt first.' },
      { q: 'Who sees my files?', a: 'The technician doing the recovery, and no one else. We operate a written data-handling policy, devices are locked away out of hours, and our working copies are securely wiped at handover.' },
      { q: 'How do I get the data back?', a: 'On an encrypted external drive we supply, or your own drive if you prefer. We verify the important folders open before you leave.' },
      { q: 'What does "no data, no fee" mean exactly?', a: 'If we cannot recover the data you asked for, you pay nothing — including the assessment.' },
      { q: 'Should I keep trying to switch it on?', a: 'No. Every failed boot can make things worse. Bring it in as it is.' },
    ],
  },
  {
    slug: 'macbook/ssd-upgrade',
    device: 'macbook',
    deviceLabel: 'MacBook',
    name: 'SSD & RAM upgrades',
    title: 'MacBook SSD and RAM upgrades in Whitton',
    metaDescription:
      'Speed up an older MacBook: SSD upgrades, RAM upgrades on serviceable models, macOS migration included. Whitton High Street, from £79 fitted. 3-month warranty.',
    fromPrice: '£79',
    turnaround: 'Same day',
    faultLooksLike: [
      'Beachballing on every click, minutes to boot',
      'Full storage warnings on a machine that is otherwise fine',
      'An older Intel MacBook that feels done but is not',
    ],
    whatWeDo: [
      'On serviceable models — most 2012–2017 machines — an SSD and a RAM lift transform the machine for a fraction of a replacement.',
      'We clone your existing drive sector-for-sector, so the machine comes back exactly as it was, only faster. Nothing to reinstall, nothing to set up.',
      'Honest line: Apple-silicon MacBooks (M1 onward) have soldered storage and memory. They cannot be upgraded, by us or anyone. If that is your machine we will tell you straight and, if it helps, quote a refurb with more headroom.',
    ],
    parts: 'NVMe drives from named manufacturers with proper adapters where the Apple connector requires one. No white-label drives.',
    warranty: '3 months on drive and fitting. The drive manufacturer warranty passes to you.',
    photoShot: 'New SSD module being seated into the logic board slot, macro',
    photoImage: '/images/macbook-ssd-upgrade.webp',
    priceTable: [
      { model: '512GB SSD, cloned + fitted', part: 'Named-brand NVMe', price: '£129', turnaround: 'Same day' },
      { model: '1TB SSD, cloned + fitted', part: 'Named-brand NVMe', price: '£179', turnaround: 'Same day' },
      { model: 'RAM 8GB → 16GB (serviceable models)', part: 'Matched SODIMM', price: '£79', turnaround: 'Same day' },
    ],
    faqs: [
      { q: 'Can my M1/M2/M3 MacBook get more storage?', a: 'No — storage and memory are soldered on Apple silicon. Anyone claiming otherwise is mistaken. We can move you to a refurb with more storage and take yours in part-exchange.' },
      { q: 'Which MacBooks can be upgraded?', a: 'Roughly 2012–2017 models, plus the 2018–2020 Intel Airs and Pros for SSD only. Bring the serial or the model identifier and we will tell you at the counter.' },
      { q: 'Will I lose anything in the swap?', a: 'No. We clone the old drive completely and verify the clone boots before the old drive comes out.' },
      { q: 'Is it worth it on a 2015 machine?', a: 'If the machine otherwise does what you need, an SSD is the best £129 you can spend on it. If the screen hinges and battery are also tired, we will tell you honestly and show you a refurb instead.' },
    ],
  },
  // ----------------------------------------------------------- iPhone
  {
    slug: 'iphone/screen-replacement',
    device: 'iphone',
    deviceLabel: 'iPhone',
    name: 'Screen replacement',
    title: 'iPhone screen replacement in Whitton',
    metaDescription:
      'iPhone screen replacement while you wait on Whitton High Street. iPhone 11 to 16, OLED-quality panels, Face ID preserved. From £59, 30–60 minutes. 3-month warranty.',
    fromPrice: '£59',
    turnaround: '30–60 mins',
    faultLooksLike: [
      'Cracked glass, touch still working — or not',
      'Green lines, flicker, or a black screen that still rings',
      'Touch registering by itself ("ghost touch")',
      'Face ID working but the display shattered around it',
    ],
    whatWeDo: [
      'Most iPhone screens are a 30-to-60-minute job, done on the bench while you wait if you book ahead.',
      'Face ID components stay with your phone — we transfer your original earpiece assembly and sensors, so Face ID keeps working. Shops that skip this kill it.',
      'On iPhone 13 and later we pair the new display to your logic board so True Tone and auto-brightness behave as they should.',
      'Seals are replaced with fresh adhesive and the phone is dust-checked under the lamp before it is closed up.',
    ],
    parts:
      'Two grades, your choice, stated on the docket: soft-OLED aftermarket premium (closest to the original in colour and brightness) or a quality LCD where budget matters more. We say which is which and price both.',
    warranty: '3 months on the display and fitting. New drops are not covered — we can fit a case and glass while you wait.',
    photoImage: '/images/phone-screen-repair.webp',
    priceTable: [
      { model: 'iPhone 16 / 16 Pro', modelSlug: 'iphone-16', part: 'Soft OLED', price: 'From £149', turnaround: '45–60 mins' },
      { model: 'iPhone 15 / 15 Pro', modelSlug: 'iphone-15', part: 'Soft OLED', price: 'From £139', turnaround: '45–60 mins' },
      { model: 'iPhone 14', modelSlug: 'iphone-14', part: 'Soft OLED', price: '£119', turnaround: '30–45 mins' },
      { model: 'iPhone 13', modelSlug: 'iphone-13', part: 'Soft OLED', price: '£99', turnaround: '30–45 mins' },
      { model: 'iPhone 12', modelSlug: 'iphone-12', part: 'Soft OLED', price: '£89', turnaround: '30–45 mins' },
      { model: 'iPhone 11', modelSlug: 'iphone-11', part: 'LCD premium', price: '£59', turnaround: '30 mins' },
      { model: 'iPhone XR', modelSlug: 'iphone-xr', part: 'LCD premium', price: '£59', turnaround: '30 mins' },
    ],
    faqs: [
      { q: 'How much is an iPhone 13 screen replacement?', a: '£99 with a soft-OLED panel, fitted in about 40 minutes. iPhone 12 is £89, iPhone 11 is £59.' },
      { q: 'Will Face ID still work?', a: 'Yes. Your original Face ID components are transferred to the new screen. That pairing is why we do not rush the job.' },
      { q: 'Will I get a "non-genuine part" warning?', a: 'On iPhone 11 and later, iOS shows a parts notification for any non-Apple display — including ones fitted by excellent independent shops. It does not affect function and disappears from the lock screen after a few days. We tell you this before you book, not after.' },
      { q: 'Genuine Apple screen or aftermarket?', a: 'We explain both. Apple-sourced displays cost substantially more; our soft-OLED panels match the original closely at a much lower price. You choose, and the docket records what was fitted.' },
      { q: 'Do I need to book?', a: 'Walk-ins are welcome, but a booking means the panel is reserved and the job starts when you arrive — genuinely 30 to 60 minutes.' },
      { q: 'Is my data safe?', a: 'The repair never touches storage. Still, any phone can be lost or dropped, so a current backup is always good practice.' },
    ],
  },
  {
    slug: 'iphone/battery-replacement',
    device: 'iphone',
    deviceLabel: 'iPhone',
    name: 'Battery replacement',
    title: 'iPhone battery replacement in Whitton',
    metaDescription:
      'iPhone battery replacement while you wait — from £39, 20–40 minutes, Whitton High Street. Health read in front of you before we quote. 3-month warranty.',
    fromPrice: '£39',
    turnaround: '20–40 mins',
    faultLooksLike: [
      'Battery health under 85% in Settings → Battery',
      'Dying by mid-afternoon on a charge that used to last the day',
      'Shutting down in the cold or at 20–30%',
      'Screen lifting at the edge — a swollen battery; stop charging it',
    ],
    whatWeDo: [
      'We read your battery health and cycle count at the counter and show you before quoting. If the battery is fine and something else is draining it, we say so.',
      'The swap takes 20 to 40 minutes. Adhesive and seals are renewed, not reused.',
      'After fitting, the phone is charge-tested and the new health reading confirmed in front of you.',
    ],
    parts: 'High-capacity cells to original specification with the correct protection board. No stretched "extended capacity" cells — they swell.',
    warranty: '3 months, including health dropping below 90% in that period.',
    photoShot: 'Old swollen iPhone battery lifted free beside the new cell, adhesive tabs visible',
    photoImage: '/images/iphone-battery-replacement.webp',
    priceTable: [
      { model: 'iPhone 15 / 16 series', modelSlug: 'iphone-15', part: 'Spec cell', price: '£59', turnaround: '30–40 mins' },
      { model: 'iPhone 13 / 14 series', modelSlug: 'iphone-13', part: 'Spec cell', price: '£49', turnaround: '30 mins' },
      { model: 'iPhone 11 / 12 series', modelSlug: 'iphone-11', part: 'Spec cell', price: '£45', turnaround: '20–30 mins' },
      { model: 'iPhone XR / XS', modelSlug: 'iphone-xr', part: 'Spec cell', price: '£39', turnaround: '20–30 mins' },
    ],
    faqs: [
      { q: 'How much is an iPhone battery replacement?', a: 'From £39 for older models, £49–£59 for recent ones, fitted while you wait. The health reading is free and takes a minute.' },
      { q: 'Will my phone say the battery is non-genuine?', a: 'On iPhone XR and later, iOS shows a parts notice for any battery fitted outside Apple. Function and health reporting are unaffected after pairing. We tell you upfront.' },
      { q: 'At what health percentage should I replace it?', a: 'Apple considers under 80% consumed. In practice, if the runtime is annoying you, it is time — a £45 battery beats a £900 phone.' },
      { q: 'How long does it take?', a: 'Twenty to forty minutes. Book ahead and we start when you walk in.' },
    ],
  },
  {
    slug: 'iphone/charging-port-repair',
    device: 'iphone',
    deviceLabel: 'iPhone',
    name: 'Charging port repair',
    title: 'iPhone charging port repair in Whitton',
    metaDescription:
      'iPhone not charging? Port cleaned or replaced while you wait on Whitton High Street. Free cable-and-lint check first — half of them need nothing else. From £39.',
    fromPrice: '£39',
    turnaround: '30–60 mins',
    faultLooksLike: [
      'Cable only charges at a certain angle',
      'Nothing happens when you plug in, on any cable',
      'Accessories connect intermittently, or CarPlay drops',
      '"Liquid detected" warnings that will not clear',
    ],
    whatWeDo: [
      'First, the free check: half of all "dead ports" are pocket lint compacted at the back of the connector. Two minutes with the pick and the microscope, no charge.',
      'If the port itself is worn or damaged, we replace the full charge-port flex assembly — which also carries the primary microphone, so calls get tested too.',
      'If the fault is on the board (tristar/Hydra charging IC), we say so and quote board-level work instead. A new port on a dead charging IC fixes nothing.',
    ],
    parts: 'Complete OEM-spec charge port flex assemblies, matched by model and colour where the surround is visible.',
    warranty: '3 months on port and fitting.',
    photoShot: 'Macro — charging port being cleared of lint and corrosion with a fine pick',
    photoImage: '/images/iphone-charging-port-repair.webp',
    priceTable: [
      { model: 'Port clean + test', part: 'Bench service', price: 'Free', turnaround: '5 mins' },
      { model: 'iPhone 11–13 charge port flex', modelSlug: 'iphone-13', part: 'OEM-spec flex', price: '£49', turnaround: '45–60 mins' },
      { model: 'iPhone 14–16 charge port flex', modelSlug: 'iphone-14', part: 'OEM-spec flex', price: '£59', turnaround: '45–60 mins' },
      { model: 'Charging IC (board-level)', part: 'Component-level', price: 'From £89', turnaround: '1–2 days' },
    ],
    faqs: [
      { q: 'My iPhone stopped charging. Is it definitely the port?', a: 'No — and the difference matters. Lint is free to fix, a port is £49–£59, a charging IC is board work. We test in that order, cheapest first.' },
      { q: 'Can you really fix it for free?', a: 'If it is lint, yes. We would rather you tell three people the shop fixed your phone for nothing than charge you £39 for two minutes with a pick.' },
      { q: 'How long does a port replacement take?', a: 'Forty-five minutes to an hour. The part also carries the main microphone, so we test calls and voice notes before you leave.' },
      { q: 'Wireless charging works but the cable does not. Port?', a: 'Almost always, yes — wireless uses a different circuit. The free check will confirm it.' },
    ],
  },
  {
    slug: 'iphone/back-glass-replacement',
    device: 'iphone',
    deviceLabel: 'iPhone',
    name: 'Back glass replacement',
    title: 'iPhone back glass replacement in Whitton',
    metaDescription:
      'Shattered iPhone back glass replaced properly — laser-separated, not chiselled. Whitton High Street, from £59, same day. 3-month warranty.',
    fromPrice: '£59',
    turnaround: 'Same day',
    faultLooksLike: [
      'Shattered back panel, camera lenses exposed or at risk',
      'Cracks spreading towards the camera surround',
      'Wireless charging getting unreliable under the broken glass',
    ],
    whatWeDo: [
      'Back glass is bonded over the wireless coil and camera surround, so we separate it with a laser machine, not a pry tool — the coil and internals stay untouched.',
      'The frame is cleaned of old adhesive and glass, checked for bends, and the new panel is bonded with fresh adhesive and cured.',
      'Camera lenses and the wireless coil are tested after fitting. A bent frame gets quoted honestly before any glass goes on.',
    ],
    parts: 'Matched glass panels with the correct camera surround and finish by colour.',
    warranty: '3 months on glass and bonding.',
    photoShot: 'Before / after — cracked iPhone back glass beside the same phone with a fresh panel',
    photoImage: '/images/iphone-back-glass-replacement.webp',
    priceTable: [
      { model: 'iPhone 11 / 12', modelSlug: 'iphone-12', part: 'Back glass, laser-separated', price: '£59', turnaround: 'Same day' },
      { model: 'iPhone 13 / 14', modelSlug: 'iphone-13', part: 'Back glass, laser-separated', price: '£69', turnaround: 'Same day' },
      { model: 'iPhone 15 / 16', modelSlug: 'iphone-15', part: 'Back glass, laser-separated', price: '£89', turnaround: 'Same day' },
    ],
    faqs: [
      { q: 'Is back glass worth fixing?', a: 'Yes, and sooner rather than later — cracks let dust and moisture straight onto the wireless coil and camera. It is also the difference between a phone you can trade in and one you cannot.' },
      { q: 'How is it done without damaging the phone?', a: 'A laser separation machine breaks down the adhesive so the glass lifts off cleanly. No chiselling near the logic board.' },
      { q: 'Does it look original afterwards?', a: 'Matched by colour and finish, bonded and cured properly — you will not tell the difference.' },
      { q: 'How long does it take?', a: 'Same day. The laser pass is quick; the curing time is what takes the hours, so morning drop-off, afternoon collection.' },
    ],
  },
  {
    slug: 'iphone/camera-replacement',
    device: 'iphone',
    deviceLabel: 'iPhone',
    name: 'Camera replacement',
    title: 'iPhone camera replacement in Whitton',
    metaDescription:
      'iPhone rear or front camera replaced on Whitton High Street — blurry, black, or cracked lens fixed same day. From £69. 3-month warranty.',
    fromPrice: '£69',
    turnaround: '45–60 mins',
    faultLooksLike: [
      'Blurry, foggy, or completely black photos',
      'Camera app showing "unable to activate camera"',
      'Cracked rear lens glass, photos fine or not',
      'Shaky, non-stabilised video after a knock or drop',
    ],
    whatWeDo: [
      'We test rear wide, ultra-wide and telephoto (where fitted) individually against a test chart, so we know exactly which module has failed before quoting.',
      'A cracked lens alone does not always mean a dead sensor — if the glass is chipped but the module tests clean, we say so and price the cheaper fix.',
      'On Face ID models the TrueDepth front camera is paired and tested after fitting so Face ID and Portrait mode keep working.',
    ],
    parts: 'OEM-pull camera modules matched by model — wide, ultra-wide, telephoto and front TrueDepth assemblies stocked separately.',
    warranty: '3 months on the module and fitting.',
    photoShot: 'Macro — camera module being seated back into the iPhone housing',
    photoImage: '/images/iphone-camera-replacement.webp',
    priceTable: [
      { model: 'iPhone 11–13 rear camera', modelSlug: 'iphone-13', part: 'OEM-pull module', price: '£69', turnaround: '45–60 mins' },
      { model: 'iPhone 14–16 rear camera', modelSlug: 'iphone-14', part: 'OEM-pull module', price: '£89', turnaround: '45–60 mins' },
      { model: 'Front (TrueDepth/Face ID) camera', modelSlug: 'iphone-13', part: 'OEM-pull module', price: '£79', turnaround: '45–60 mins' },
      { model: 'Rear lens glass only (module tests OK)', part: 'Lens cover', price: '£29', turnaround: '20–30 mins' },
    ],
    faqs: [
      { q: 'My photos are blurry — is that the camera or the lens?', a: 'Often just the glass over the lens, especially after a drop. We test the module first; if it is only the cover glass, that is £29, not a full £69–£89 module.' },
      { q: 'Will Face ID still work after a front camera swap?', a: 'Yes — the TrueDepth module is paired and Face ID tested before you leave with it.' },
      { q: 'Can you fix just the ultra-wide or telephoto lens?', a: 'Each rear module is tested and replaced individually, so if only one lens has failed, that is the only one we quote.' },
      { q: 'How long does a camera replacement take?', a: '45 to 60 minutes, same as a battery. Book ahead and the module is on the bench when you arrive.' },
    ],
  },
  // ------------------------------------------------------------- iPad
  {
    slug: 'ipad/screen-replacement',
    device: 'ipad',
    deviceLabel: 'iPad',
    name: 'Screen replacement',
    title: 'iPad screen replacement in Whitton',
    metaDescription:
      'iPad screen and digitiser replacement on Whitton High Street — all generations, glass-only and full-assembly options. From £69, 3-month warranty.',
    fromPrice: '£69',
    turnaround: 'Same day – 2 days',
    faultLooksLike: [
      'Cracked glass but the picture is fine — a digitiser-only job on most iPads',
      'Cracked glass with lines, blotches or no picture — glass and LCD both',
      'Touch dead in a band across the screen',
      'Corner bent from a drop, glass lifting',
    ],
    whatWeDo: [
      'On standard iPads the glass (digitiser) and the LCD are separate parts — a crack with a good picture is the cheaper repair. On Air and Pro models they are laminated together and replaced as one assembly. We tell you which yours is before quoting.',
      'The broken glass is lifted under heat with the internals protected, the frame is cleaned, and the new part is bonded and clamped.',
      'Home buttons and Touch ID components are transferred from your original — like Face ID on iPhone, they are paired to your board.',
    ],
    parts: 'Matched digitisers and laminated assemblies, grade stated on the docket. Original-quality glass on Pro models.',
    warranty: '3 months on part and fitting.',
    photoShot: 'Before / after — cracked iPad digitiser beside the same iPad with a fresh screen',
    photoImage: '/images/ipad-screen-replacement.webp',
    priceTable: [
      { model: 'iPad 9th / 10th gen (digitiser)', modelSlug: 'ipad-10', part: 'Digitiser glass', price: '£79', turnaround: 'Same day' },
      { model: 'iPad 7th / 8th gen (digitiser)', modelSlug: 'ipad-9', part: 'Digitiser glass', price: '£69', turnaround: 'Same day' },
      { model: 'iPad Air 4 / 5 (laminated)', modelSlug: 'ipad-air-5', part: 'Laminated assembly', price: '£149', turnaround: '1–2 days' },
      { model: 'iPad Pro 11" (laminated)', modelSlug: 'ipad-pro-11', part: 'Laminated assembly', price: '£189', turnaround: '1–2 days' },
      { model: 'iPad mini 6 (laminated)', modelSlug: 'ipad-mini-6', part: 'Laminated assembly', price: '£139', turnaround: '1–2 days' },
    ],
    faqs: [
      { q: 'The glass is cracked but the picture is fine. What does that cost?', a: 'On standard iPads, that is a digitiser-only job — £69–£79. On Airs and Pros the glass and display are one laminated part, which is why those cost more.' },
      { q: 'Will Touch ID still work?', a: 'Yes — your original home button or Touch ID sensor is transferred to the new screen. It is paired to your iPad and cannot be replaced with a new one.' },
      { q: 'How long does an iPad screen take?', a: 'Standard iPads same day; laminated models one to two days. We confirm when you book, because it depends on the part being on the shelf.' },
      { q: 'Is it worth repairing an older iPad?', a: 'A £69 digitiser on an iPad 8 that does everything the family needs is money well spent. We will say honestly if a model is past saving.' },
    ],
  },
  // ---------------------------------------------------------- Samsung
  {
    slug: 'samsung/screen-replacement',
    device: 'samsung',
    deviceLabel: 'Samsung Galaxy',
    name: 'Screen replacement',
    title: 'Samsung Galaxy screen replacement in Whitton',
    metaDescription:
      'Samsung Galaxy screen replacement on Whitton High Street — S and A series, genuine-service-pack displays with frame. From £69, same day. 3-month warranty.',
    fromPrice: '£69',
    turnaround: 'Same day',
    faultLooksLike: [
      'Cracked glass with or without display damage',
      'AMOLED "ink bleed" — spreading black or purple blotches',
      'Green line down the display',
      'Touch dead in part of the screen',
    ],
    whatWeDo: [
      'On Galaxy phones we fit service-pack display assemblies — Samsung\'s own part, supplied with the frame. It costs more than a bare panel and it is the right way to do it: factory fit, correct adhesive, no display-gap.',
      'Everything is transferred and tested: earpiece, cameras, buttons, wireless coil, ultrasonic fingerprint where fitted.',
      'A-series phones use simpler assemblies and come in cheaper. The docket states exactly which part went in.',
    ],
    parts: 'Samsung service-pack assemblies on S-series; matched-spec assemblies on A-series. Stated plainly on your quote.',
    warranty: '3 months on display and fitting.',
    photoImage: '/images/phone-screen-repair.webp',
    priceTable: [
      { model: 'Galaxy S23 / S24', modelSlug: 'galaxy-s23', part: 'Service pack with frame', price: '£189', turnaround: 'Same day' },
      { model: 'Galaxy S21 / S22', modelSlug: 'galaxy-s22', part: 'Service pack with frame', price: '£159', turnaround: 'Same day' },
      { model: 'Galaxy A54 / A55', modelSlug: 'galaxy-a54', part: 'Matched assembly', price: '£89', turnaround: 'Same day' },
      { model: 'Galaxy A13 / A14', modelSlug: 'galaxy-a14', part: 'Matched assembly', price: '£69', turnaround: 'Same day' },
    ],
    faqs: [
      { q: 'Why is a Samsung screen more than an iPhone one?', a: 'Because we fit Samsung service-pack assemblies — the genuine display with a new frame. The part itself costs more; the result is factory-standard. Cheaper bare-panel options exist and we will quote them if you ask.' },
      { q: 'The black blotch is spreading. Will it stop?', a: 'No — AMOLED damage spreads with pressure and time. Back up now and book in; the phone will not get better on its own.' },
      { q: 'How long does a Galaxy screen take?', a: 'Same day for S and A series when the part is on the shelf — book ahead and we reserve it.' },
      { q: 'Will the fingerprint sensor still work?', a: 'Yes. Service-pack assemblies are calibrated for the ultrasonic sensor, and we test it before you leave.' },
    ],
  },
  {
    slug: 'samsung/camera-replacement',
    device: 'samsung',
    deviceLabel: 'Samsung Galaxy',
    name: 'Camera replacement',
    title: 'Samsung Galaxy camera replacement in Whitton',
    metaDescription:
      'Samsung Galaxy rear or front camera module replaced on Whitton High Street — S and A series. From £79, same day. 3-month warranty.',
    fromPrice: '£79',
    turnaround: 'Same day',
    faultLooksLike: [
      'Blurry, dark, or completely black camera preview',
      'Cracked rear camera lens glass',
      '"Camera failed" error on opening the app',
      'Front camera fine, rear modules not switching properly',
    ],
    whatWeDo: [
      'S-series phones stack wide, ultra-wide and telephoto in one housing — we test each against a chart to identify exactly which sensor has failed rather than replacing the whole housing on a guess.',
      'Cracked lens glass with a working sensor underneath is quoted as a lens-only fix where the design allows it, cheaper than a full module.',
      'After fitting we test autofocus, OIS (where fitted) and the flash before handing the phone back.',
    ],
    parts: 'Matched-spec camera modules and lens housings by model, S-series and A-series stocked separately.',
    warranty: '3 months on the module and fitting.',
    photoShot: 'Macro — camera module being seated into a Samsung Galaxy housing',
    priceTable: [
      { model: 'Galaxy S23 / S24 rear module', modelSlug: 'galaxy-s23', part: 'Matched module', price: '£99', turnaround: 'Same day' },
      { model: 'Galaxy S21 / S22 rear module', modelSlug: 'galaxy-s22', part: 'Matched module', price: '£89', turnaround: 'Same day' },
      { model: 'Galaxy A-series rear module', modelSlug: 'galaxy-a54', part: 'Matched module', price: '£79', turnaround: 'Same day' },
      { model: 'Front camera, any series', part: 'Matched module', price: '£69', turnaround: 'Same day' },
    ],
    faqs: [
      { q: 'How much is a Samsung camera repair?', a: 'From £79 for A-series, £89–£99 for S-series rear modules, £69 for a front camera — same day when the part is on the shelf.' },
      { q: 'Is it always the whole camera module?', a: 'Not always. If the sensor tests fine and it is only the lens glass cracked, we quote the cheaper lens-only fix where the phone allows it.' },
      { q: 'Will autofocus and stabilisation still work?', a: 'Yes — autofocus and OIS are tested against a chart before the phone leaves the bench.' },
      { q: 'Do you fix water-damaged cameras?', a: 'Often, if caught early. Bring it in for a free diagnosis — corrosion on the sensor connector is common and sometimes cleanable rather than needing a new module.' },
    ],
  },
  // ----------------------------------------------------------- Laptop
  {
    slug: 'laptop/screen-replacement',
    device: 'laptop',
    deviceLabel: 'Windows laptop',
    name: 'Screen replacement',
    title: 'Laptop screen replacement in Whitton (Dell, HP, Lenovo)',
    metaDescription:
      'Windows laptop screen replacement — Dell, HP, Lenovo, ASUS, Acer. Most panels sourced next day, fitted in an hour. From £79, Whitton High Street. 3-month warranty.',
    fromPrice: '£79',
    turnaround: 'Next day most models',
    faultLooksLike: [
      'Cracked or shattered panel',
      'Lines, flicker, or a dim picture with the backlight working',
      'Pressure blotches from something closed in the lid',
      'Touch models where the glass is cracked but the picture is fine',
    ],
    whatWeDo: [
      'Windows laptops vary enormously, so we identify the exact panel by the part number on the back of yours — never by guesswork. That is why the quote takes one phone photo of the sticker or a quick bench look.',
      'Most panels arrive next working day; the fitting itself is about an hour.',
      'Touch assemblies and 2-in-1s are quoted separately — the part is different and the price is honest about it.',
    ],
    parts: 'Matched-specification panels — same resolution, brightness and connector as the original, from named panel manufacturers.',
    warranty: '3 months on panel and fitting.',
    photoShot: 'Before / after — cracked laptop screen beside the same machine with a fresh panel',
    photoImage: '/images/laptop-screen-replacement.webp',
    priceTable: [
      { model: 'Standard 15.6" FHD non-touch', part: 'Matched panel', price: '£79', turnaround: 'Next day' },
      { model: '14" FHD (Dell/HP/Lenovo)', part: 'Matched panel', price: '£85', turnaround: 'Next day' },
      { model: 'Touchscreen assembly', part: 'Matched assembly', price: 'From £119', turnaround: '1–2 days' },
      { model: 'High-refresh / OLED panels', part: 'Matched panel', price: 'Quoted on part no.', turnaround: '1–3 days' },
    ],
    faqs: [
      { q: 'How much is a laptop screen replacement?', a: 'Most standard 15.6-inch non-touch panels are £79 fitted. Touchscreens and OLED panels cost more — send us the model sticker and we quote exactly.' },
      { q: 'How long will I be without it?', a: 'The panel usually arrives next working day and fitting takes an hour. Common panels are sometimes on the shelf for same-day.' },
      { q: 'Do you fix Dell/HP/Lenovo specifically?', a: 'Yes — those three are the bulk of what we see, along with ASUS, Acer and Microsoft Surface (Surface screens are a different job; ask us first).' },
      { q: 'Can you match my exact screen?', a: 'Yes. We order by the part number printed on your panel, so resolution, connector and brightness match the original.' },
    ],
  },
  {
    slug: 'laptop/hinge-repair',
    device: 'laptop',
    deviceLabel: 'Windows laptop',
    name: 'Hinge & casing repair',
    title: 'Laptop hinge and casing repair in Whitton',
    metaDescription:
      'Broken laptop hinge? We rebuild mounting points and re-case rather than quoting a new lid. Dell, HP, Lenovo. From £69, Whitton High Street.',
    fromPrice: '£69',
    turnaround: '1–3 days',
    faultLooksLike: [
      'Lid creaks, cracks or separates when you open it',
      'Bezel popping away from the screen at one corner',
      'Hinge seized so stiff it is breaking the casing around it',
      'The classic: dropped once, now the lid will not stay open',
    ],
    whatWeDo: [
      'Nine times out of ten the hinge is fine — the plastic mounting points in the lid or base have sheared. We rebuild the mounts with structural epoxy and brass inserts, which is stronger than the original moulding.',
      'Where the casing itself is too far gone, we source a replacement lid or palm-rest and transfer everything over.',
      'Catching it early matters: a £69 mount rebuild becomes a screen replacement once the twisting lid cracks the panel.',
    ],
    parts: 'Brass thread inserts, structural epoxy, and replacement casings where needed — quoted separately and honestly.',
    warranty: '3 months on the repair.',
    photoShot: 'Macro — a laptop hinge mechanism open, old hinge beside the replacement',
    photoImage: '/images/laptop-hinge-repair.webp',
    priceTable: [
      { model: 'Mount-point rebuild (one side)', part: 'Brass inserts + epoxy', price: '£69', turnaround: '1–2 days' },
      { model: 'Mount-point rebuild (both sides)', part: 'Brass inserts + epoxy', price: '£89', turnaround: '1–2 days' },
      { model: 'Replacement lid / palm-rest', part: 'Replacement casing', price: 'From £99', turnaround: '2–3 days' },
    ],
    faqs: [
      { q: 'My laptop lid is cracking at the corner when I open it. Urgent?', a: 'Yes. Every open twists the screen a little more. Stop using the lid where you can and bring it in — the mount rebuild is cheap, the screen it will eventually crack is not.' },
      { q: 'Can you fix it without replacing the whole lid?', a: 'Usually. We rebuild the broken plastic mounts with brass inserts — stronger than the original. Only shattered casings need a replacement part.' },
      { q: 'Which brands do you see most?', a: 'HP and Lenovo consumer models are the repeat offenders, but the repair is the same across Dell, ASUS and Acer.' },
      { q: 'How long does it take?', a: 'One to three days — the epoxy needs a proper cure, and we will not rush that.' },
    ],
  },
  {
    slug: 'laptop/virus-removal',
    device: 'laptop',
    deviceLabel: 'Windows laptop',
    name: 'Virus removal & tune-up',
    title: 'Virus removal and laptop tune-up in Whitton',
    metaDescription:
      'Malware removal, scam pop-ups cleaned, slow laptops tuned up properly — not wiped unless it has to be. Whitton High Street, £59 flat. Data kept.',
    fromPrice: '£59',
    turnaround: 'Same day – 24 hrs',
    faultLooksLike: [
      'Pop-ups claiming infection, or a browser that opens pages you never asked for',
      'The "Microsoft support" scam — call us before you call any number on screen',
      'A machine suddenly slow, fans loud at idle',
      'Ransomware or a hijacked browser homepage',
    ],
    whatWeDo: [
      'We clean the machine properly: full malware sweep, browser hijackers removed, startup and services audited, temp and update caches cleared, drivers and Windows brought current.',
      'Your files and programmes stay. We do not wipe and reinstall unless the infection genuinely leaves no alternative — and we ask you first.',
      'If you have already paid a scammer or given remote access, tell us — we will check for what they left behind and help you secure banking and passwords.',
    ],
    parts: 'No parts. This is bench time and discipline.',
    warranty: 'If the same infection returns within 30 days, the re-clean is free.',
    photoShot: 'Laptop screen mid-scan, clean desktop visible, no personal content',
    photoImage: '/images/laptop-virus-removal.webp',
    priceTable: [
      { model: 'Malware removal + tune-up', part: 'Bench service', price: '£59', turnaround: 'Same day' },
      { model: 'Scam aftermath check + secure', part: 'Bench service', price: '£59', turnaround: 'Same day' },
      { model: 'Full reinstall + data migration', part: 'Bench service', price: '£89', turnaround: '24 hrs' },
    ],
    faqs: [
      { q: 'A pop-up says my computer is infected and to call Microsoft. Is it real?', a: 'No. Microsoft never shows a phone number in a pop-up. Do not call it, do not pay, close the browser and bring the laptop in if anything was clicked or installed.' },
      { q: 'Will I lose my files and photos?', a: 'No. Cleaning keeps everything in place. Even the rare full reinstall includes migrating your documents, photos and desktop back.' },
      { q: 'I gave a caller remote access. What should I do?', a: 'Bring the laptop in, and from a different device change your banking and email passwords. We will remove what they installed and check for anything left running.' },
      { q: 'Why is my laptop suddenly so slow?', a: 'Often junkware and a startup list grown out of control rather than a virus — the tune-up fixes both, and you get the machine back the same day in most cases.' },
    ],
  },
  ...EXTRA_SERVICES,
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const DEVICE_HUBS: DeviceHub[] = [
  { slug: 'macbook', label: 'MacBook', blurb: 'Screens, batteries, keyboards, logic boards, liquid damage, data recovery and upgrades.' },
  { slug: 'laptop', label: 'Windows laptops', blurb: 'Screens, hinges, SSD upgrades, data recovery and tune-ups for Dell, HP, Lenovo, ASUS and Acer.' },
  { slug: 'iphone', label: 'iPhone', blurb: 'Screens, batteries, charge ports and back glass — most while you wait.' },
  { slug: 'samsung', label: 'Samsung Galaxy', blurb: 'Service-pack screen assemblies for S and A series, same day.' },
  { slug: 'ipad', label: 'iPad', blurb: 'Digitiser and laminated screen replacement across all generations.' },
  ...EXTRA_HUBS,
];

export function servicesByDevice(device: string): Service[] {
  return SERVICES.filter((s) => s.device === device);
}
