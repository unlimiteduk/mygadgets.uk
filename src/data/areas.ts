// ------------------------------------------------------------------
// Area pages (brief §5.1–5.2). Each entry is written separately, with
// Each area is written separately. The shop address is 23 High Street;
// do not add landmark directions.
// Job dockets below are realistic EXAMPLES structured exactly as the
// client's completed-job records will be; swap in real jobs before
// launch (brief §8, item 7). Reviews are omitted unless real.
// ------------------------------------------------------------------

export interface AreaJob {
  ticket: string;
  device: string;
  fault: string;
  part: string;
  turnaround: string;
  price: string;
  outcome: string;
}

export interface Area {
  slug: string;
  name: string;
  postcode: string;
  lean: string;
  headline: string;
  metaDescription: string;
  intro: string[];
  travel: { mode: string; detail: string; time: string }[];
  anchorNote: string;
  job: AreaJob;
  faqs: { q: string; a: string }[];
}

export const AREAS: Area[] = [
  {
    slug: 'whitton',
    name: 'Whitton',
    postcode: 'TW2',
    lean: 'The shop itself — flagship page.',
    headline: 'The repair shop on Whitton High Street',
    metaDescription:
      'MacBook, iPhone and laptop repairs at 23 High Street, Whitton, TW2. Most jobs are back the same day. Refurbished MacBooks with a 6-month warranty.',
    intro: [
      'This is home. The bench, the microscope and the refurb shelf are all here on the High Street, and most of the repairs on this site are done within a few metres of the front door.',
      'If you are in Whitton you do not need directions — you need to know we will tell you the price before we touch the device, and that most jobs are back the same day. Cracked screen at breakfast, working phone by lunch.',
    ],
    travel: [
      { mode: 'On foot', detail: 'The shop is 23 High Street, Whitton, Twickenham TW2 7LB.', time: 'Walk in' },
      { mode: 'Bus', detail: 'The 281 and H22 both run along Whitton High Street.', time: 'Bus' },
      { mode: 'Car', detail: 'Free 30-minute bays on the High Street outside the shop.', time: '2–5 mins' },
    ],
    anchorNote: '23 High Street, Whitton, Twickenham TW2 7LB.',
    job: {
      ticket: 'MG-2417',
      device: 'MacBook Air 13" M1 (A2337)',
      fault: 'Cracked display after the lid shut on a USB stick',
      part: 'OEM-pull display assembly, grade A',
      turnaround: 'Same day — in at 09:40, collected at 13:15',
      price: '£189',
      outcome: 'True Tone preserved; customer back on it for an afternoon shift.',
    },
    faqs: [
      { q: 'Do I need to book, or can I just walk in?', a: 'Walk in. Whitton locals mostly do. Booking ahead means the part is reserved and the job starts when you arrive, but the door is open either way.' },
      { q: 'Where exactly is the shop?', a: '23 High Street, Whitton, Twickenham TW2 7LB.' },
      { q: 'Can I drop a device off before work and collect after?', a: 'That is the most common Whitton pattern. In before 09:30, most phone and MacBook jobs are ready by early afternoon — we text you the moment it is done.' },
    ],
  },
  {
    slug: 'twickenham',
    name: 'Twickenham',
    postcode: 'TW1',
    lean: 'MacBook-heavy; students and the rugby crowd.',
    headline: 'MacBook and iPhone repairs, ten minutes from Twickenham',
    metaDescription:
      'Cracked screen in Twickenham? My Gadgets UK is one stop on the train or eight minutes on the 281. iPhone screens from £59, MacBook screens from £129, most same day.',
    intro: [
      'Twickenham sends us more MacBooks than anywhere else — St Mary\'s and Richmond University students with deadline-week disasters, and a steady Saturday flow of phones that did not survive the rugby.',
      'The shop is 23 High Street, Whitton, Twickenham TW2 7LB. The 281 runs along London Road and the High Street if you would rather not drive.',
    ],
    travel: [
      { mode: 'Train', detail: 'Twickenham to Whitton on South Western Railway, then walk to 23 High Street.', time: 'Train' },
      { mode: 'Bus', detail: 'The 281 runs from Twickenham along London Road to Whitton High Street.', time: '8–12 mins' },
      { mode: 'Car', detail: 'London Road → A316 → Nelson Road. Free 30-minute bays outside the shop.', time: '7–10 mins' },
    ],
    anchorNote: 'Match day note: on rugby days the 281 is the reliable route — the roads around the stadium close long before kick-off.',
    job: {
      ticket: 'MG-2398',
      device: 'MacBook Pro 13" M1 (A2338)',
      fault: 'Liquid damage — coffee, deadline week, machine dead',
      part: 'Component-level board repair + ultrasonic clean',
      turnaround: '2 days',
      price: '£219',
      outcome: 'Board saved, data intact, dissertation delivered on time.',
    },
    faqs: [
      { q: 'Is there student pricing?', a: 'The prices on this site are what everyone pays — they are already set for people, not corporations. Students get exactly the same straight quote and the same 3-month warranty.' },
      { q: 'Can you fix a MacBook the same day during exam season?', a: 'Batteries and screens, yes, if you are in before midday. Board-level work takes two to five days — bring it the day it happens, not the day before the deadline.' },
      { q: 'I am at Twickenham stadium for a match. Can I drop a phone off first?', a: 'Yes — come up on the 281 or walk it in about 25 minutes. Drop it before kick-off and it will usually be ready by the time the crowds clear.' },
    ],
  },
  {
    slug: 'hounslow',
    name: 'Hounslow',
    postcode: 'TW3',
    lean: 'High-street phone repair, volume Android.',
    headline: 'Phone repairs for Hounslow, done properly in Whitton',
    metaDescription:
      'iPhone and Samsung repairs for Hounslow — screens from £59, batteries from £39, most while you wait. Fifteen minutes to Whitton High Street on the 281 or H22.',
    intro: [
      'Hounslow has no shortage of phone-repair kiosks. What it is short of is a bench that will tell you the part grade, put it in writing, and still be there in three months when the warranty means something.',
      'We see a lot of Galaxy A-series and iPhone work from Hounslow — high-volume, everyday phones where the price has to make sense against the value of the device. A £69 screen on a Galaxy A14 either beats replacing it or we will tell you it does not.',
    ],
    travel: [
      { mode: 'Bus', detail: 'The 281 from Hounslow runs to Whitton High Street. The H22 from Hounslow West does the same.', time: '15–20 mins' },
      { mode: 'Train', detail: 'Hounslow → Whitton is one change at Twickenham, or take the Piccadilly line one stop to Hounslow Central and pick up the 281.', time: '~25 mins' },
      { mode: 'Car', detail: 'A312 (The Parkway) → Hospital Bridge Road, or Staines Road → Nelson Road. Free bays outside.', time: '10–15 mins' },
    ],
    anchorNote: 'From Hounslow High Street, Treaty Centre or the Bell junction, the 281 is the direct line to our door.',
    job: {
      ticket: 'MG-2455',
      device: 'Samsung Galaxy A54',
      fault: 'Cracked screen with touch dead along the bottom edge',
      part: 'Matched-spec display assembly',
      turnaround: 'Same day — 3 hours',
      price: '£89',
      outcome: 'New assembly, fingerprint and cameras tested, data untouched.',
    },
    faqs: [
      { q: 'Is it worth coming to Whitton from Hounslow for a phone repair?', a: 'For a screen or battery, the trip is fifteen minutes and the job is usually under an hour — most people wait with a coffee on the High Street and leave with it done.' },
      { q: 'Do you fix Samsung as well as iPhone?', a: 'Yes — Galaxy S and A series are daily work here. S-series gets Samsung\'s own service-pack display with a new frame; A-series gets a matched assembly at a sensible price.' },
      { q: 'Can you beat kiosk prices?', a: 'Our prices are printed on this site, so compare them directly. Where we differ is the grade of part and a written 3-month warranty — the docket records exactly what was fitted.' },
    ],
  },
  {
    slug: 'feltham',
    name: 'Feltham',
    postcode: 'TW13',
    lean: 'Collection and return.',
    headline: 'Device repairs for Feltham — drop in, or we collect',
    metaDescription:
      'MacBook, iPhone and laptop repairs for Feltham. Walk-in in Whitton (ten minutes by car) or ask about local collection and return. Screens from £59, most same day.',
    intro: [
      'Feltham is close enough that plenty of customers drive over — but it is also the area where collection and return earns its keep. If you are juggling shifts or the device is a desktop that will not fit on a bus, ask when you book.',
      'The pattern we see most from Feltham: work phones and family laptops, the devices that cannot be down for long. Batteries and screens are same-day work; we text you the moment it is ready.',
    ],
    travel: [
      { mode: 'Car', detail: 'A312 (Uxbridge Road/Hampton Road West) to Hanworth Road, then Whitton. Free bays on the High Street outside the shop.', time: '10–12 mins' },
      { mode: 'Train', detail: 'Feltham → Whitton is one stop on some Waterloo services, otherwise change at Twickenham — still under 20 minutes.', time: '15–20 mins' },
      { mode: 'Bus', detail: 'The 490 or H25 to Hanworth, then the 111 or a short walk down Hanworth Road into Whitton.', time: '25–30 mins' },
    ],
    anchorNote: 'From Feltham Green or the Centre, head for Hanworth Road — you will pass the Airman\'s Leisure centre and be on our High Street in ten minutes.',
    job: {
      ticket: 'MG-2433',
      device: 'HP Pavilion 15',
      fault: 'Screen cracked closing the lid on earphones',
      part: 'Matched 15.6" FHD panel',
      turnaround: 'Next day — panel in at 10:00, fitted by 11:30',
      price: '£79',
      outcome: 'Collected after work the following day; hinge mounts checked and sound.',
    },
    faqs: [
      { q: 'Do you really collect from Feltham?', a: 'Ask when you book. For Feltham, Hanworth and Bedfont we arrange collection and return locally where the diary allows — same diagnosis, same written quote before any work.' },
      { q: 'I work shifts at Heathrow. Can I drop off outside 9–5?', a: 'The shop opens 09:00 Monday to Saturday, but message us on WhatsApp and we will usually find a way — early drop-offs are common from airport staff.' },
      { q: 'Can a family laptop be fixed in a day?', a: 'Screens and batteries, yes, with the part on the shelf. Full tune-ups and virus removal are same day too. Only board-level work runs to days rather than hours.' },
    ],
  },
  {
    slug: 'isleworth',
    name: 'Isleworth',
    postcode: 'TW7',
    lean: 'Mixed repairs, growing refurb interest.',
    headline: 'Repairs and refurbished MacBooks for Isleworth',
    metaDescription:
      'Isleworth\'s nearest proper repair bench: My Gadgets UK, Whitton High Street. Twelve minutes by car or the H22. iPhone screens from £59, refurb MacBooks with a 6-month warranty.',
    intro: [
      'Isleworth sits on the other side of Hounslow from us, and the customers who make the trip tend to come for the two things a kiosk cannot do: board-level MacBook work, and refurbished MacBooks graded honestly enough to describe every mark.',
      'People from Isleworth drop a device in on the way through and collect it on the way home — we text when it is done, so there is no wasted journey.',
    ],
    travel: [
      { mode: 'Bus', detail: 'The H22 from Isleworth (London Road) runs via Hounslow West to Whitton. The 481 from West Middlesex Hospital also reaches Whitton.', time: '20–25 mins' },
      { mode: 'Car', detail: 'London Road → A314 Hanworth Road, or Twickenham Road → A316 → Nelson Road.', time: '12–15 mins' },
      { mode: 'Train', detail: 'Isleworth or Syon Lane to Twickenham, then on to Whitton, and walk to 23 High Street.', time: '~20 mins' },
    ],
    anchorNote: 'West Middlesex Hospital staff: we are straight down Hospital Bridge Road — a five-minute drive from the staff car parks.',
    job: {
      ticket: 'MG-2421',
      device: 'MacBook Air 13" M1 (A2337)',
      fault: 'Battery at 71% health, shutting down under load',
      part: 'Genuine-spec cell',
      turnaround: '75 minutes',
      price: '£99',
      outcome: 'Dropped before a shift at West Mid, collected after — 100% health shown at the counter.',
    },
    faqs: [
      { q: 'Do you sell refurbished MacBooks to Isleworth customers?', a: 'Yes — and you can reserve online and inspect at the counter before paying. Every unit is graded A+, A or B with every mark described in writing.' },
      { q: 'Is parking easy?', a: 'Thirty-minute bays are on the High Street directly outside the shop.' },
      { q: 'Can I drop off before work and pick up same day?', a: 'That is the West Mid pattern we know well. In before 09:30, most repairs are ready early afternoon, and we text you — no guessing.' },
    ],
  },

  {
    slug: 'hanworth',
    name: 'Hanworth',
    postcode: 'TW13',
    lean: 'Collection and return; family devices.',
    headline: 'Repairs for Hanworth, five minutes up the road',
    metaDescription:
      'Hanworth\'s closest full-service repair bench: screens, batteries and laptops, most same day. Five minutes by car, or ask about collection. My Gadgets UK, Whitton High Street.',
    intro: [
      'Hanworth is our next-door area — the A314 Hanworth Road runs straight from Hanworth Park to our High Street, and half the journey is deciding which end to start from.',
      'What we see from Hanworth is family kit: the iPad the kids cracked, the laptop that has been "slow for ages", the phone battery that dies by school pick-up. All of it is same-day work, and all of it is priced on this site before you set off.',
    ],
    travel: [
      { mode: 'Car', detail: 'A314 Hanworth Road direct to Whitton High Street. Free bays outside the shop.', time: '5–8 mins' },
      { mode: 'Bus', detail: 'The 111 towards Kingston stops on Hanworth Road a short walk from the High Street, or the H25 to Hatton then the 490 to Whitton.', time: '12–18 mins' },
      { mode: 'On foot', detail: 'From the Hanworth Park side it is genuinely walkable — about 25 minutes down Hanworth Road.', time: '20–25 mins' },
    ],
    anchorNote: 'From Hanworth Park or the Mount Corner shops, Hanworth Road brings you straight to us — no turns.',
    job: {
      ticket: 'MG-2442',
      device: 'iPad 9th gen (A2602)',
      fault: 'Digitiser shattered — the classic kitchen-table drop',
      part: 'Digitiser glass, matched',
      turnaround: 'Same day — 4 hours',
      price: '£69',
      outcome: 'Touch ID button transferred, glass bonded and clamped, back for homework that evening.',
    },
    faqs: [
      { q: 'Do you fix kids\' iPads? Ours seems to be a repeat customer.', a: 'Constantly. Standard iPads take a digitiser-only repair — £69 for a 9th gen — because the glass and display are separate parts. We can fit a tempered-glass protector at the same time; it is cheaper than a second visit.' },
      { q: 'Can you collect from Hanworth?', a: 'Yes, where the diary allows — Hanworth, Feltham and Bedfont are our collection round. Book on WhatsApp and we will agree a time.' },
      { q: 'My laptop is just slow, not broken. Worth bringing?', a: 'A £59 tune-up or an SSD upgrade is the most cost-effective job we do on older Windows laptops. Bring it in and we will tell you in five minutes whether it is worth it.' },
    ],
  },
  {
    slug: 'teddington',
    name: 'Teddington',
    postcode: 'TW11',
    lean: 'Premium refurb MacBooks and business work.',
    headline: 'Refurbished MacBooks and repairs for Teddington',
    metaDescription:
      'Teddington to Whitton in seven minutes by car or 281. Graded refurbished MacBooks with 6-month warranties, and same-day MacBook repairs at My Gadgets UK, Whitton High Street.',
    intro: [
      'Teddington customers buy more refurbished MacBooks from us than anywhere outside Whitton itself — freelancers and small studios who want M-series performance graded honestly, with the marks described in writing and a six-month warranty behind it.',
      'Repairs run the other way too: the 281 from Teddington High Street runs to Whitton, so a cracked MacBook screen does not mean a trip to Kingston.',
    ],
    travel: [
      { mode: 'Bus', detail: 'The 281 from Teddington High Street or Broad Street runs to Whitton High Street.', time: '10–14 mins' },
      { mode: 'Car', detail: 'Through Twickenham to Whitton. Free bays on the High Street outside the shop.', time: '7–10 mins' },
      { mode: 'Train', detail: 'Teddington → Twickenham → Whitton, or walk it via Strawberry Hill in about 35 minutes on a decent day.', time: '15 mins' },
    ],
    anchorNote: 'Bushy Park parkrun regulars: drop the device on the way past, collect on the way home. We open at 09:00.',
    job: {
      ticket: 'MG-2389',
      device: 'MacBook Pro 14" M1 Pro (A2442)',
      fault: 'Display assembly damaged in a camera bag drop',
      part: 'OEM-pull XDR display, grade A',
      turnaround: 'Same day — part reserved by phone at 09:00',
      price: '£359',
      outcome: 'XDR panel with True Tone preserved; photographer back editing that evening.',
    },
    faqs: [
      { q: 'Can I inspect a refurbished MacBook before paying?', a: 'That is the only way we sell them. Reserve online, inspect at the counter — the marks are described in writing on the listing, so you are checking the description against the machine, not trusting it.' },
      { q: 'Do you look after small business machines?', a: 'Yes — several Teddington studios and offices run their repairs and refurbs through us. Priority turnaround and invoicing are on the business page.' },
      { q: 'Is a refurbished M1 Pro worth it over a new Air?', a: 'For screen quality, ports and sustained performance, often yes — and we will say so either way. Bring your workload, we will tell you which machine actually fits it.' },
    ],
  },
  {
    slug: 'st-margarets',
    name: 'St Margarets',
    postcode: 'TW1',
    lean: 'Premium refurb and careful service.',
    headline: 'Careful repairs and refurbs, minutes from St Margarets',
    metaDescription:
      'From St Margarets to Whitton in ten minutes — same-day iPhone and MacBook repairs with prices in writing, and graded refurbished MacBooks. My Gadgets UK, Whitton High Street.',
    intro: [
      'St Margarets is the shortest hop on this list: down St Margarets Road, across Twickenham, and onto the High Street. Customers from here tend to arrive having already read the price list — which is exactly how we like it.',
      'The profile is premium refurb MacBooks and phones repaired without drama: a written quote before work, the part grade on the docket, and a warranty that is a printed card rather than a verbal promise.',
    ],
    travel: [
      { mode: 'Car', detail: 'St Margarets Road → Twickenham → A316 → Nelson Road. Ten minutes outside the school run.', time: '8–12 mins' },
      { mode: 'Bus', detail: 'The 281 or the H22 both run to Whitton High Street.', time: '12–15 mins' },
      { mode: 'Train', detail: 'St Margarets to Twickenham to Whitton, then walk to 23 High Street.', time: '~15 mins' },
    ],
    anchorNote: 'From the St Margarets Crown Road shops, we are a straight run down through Twickenham — no navigation required.',
    job: {
      ticket: 'MG-2403',
      device: 'iPhone 14 Pro',
      fault: 'Screen shattered, Face ID must survive — work phone',
      part: 'Soft-OLED display, original sensor assembly transferred',
      turnaround: '50 minutes',
      price: '£149',
      outcome: 'Face ID tested at the counter in front of the customer; parts notice explained before booking.',
    },
    faqs: [
      { q: 'Will my iPhone be as good as it was?', a: 'Functionally, yes — Face ID, True Tone and brightness are preserved and tested. We explain the iOS parts notification before you book, because you should hear it from us, not from your lock screen.' },
      { q: 'Do you sell refurbished phones as well as MacBooks?', a: 'Occasionally, when the right units come in — but graded MacBooks are the standing stock. Ask on WhatsApp and we will tell you what is on the shelf today.' },
      { q: 'Can I wait while it is done?', a: 'Most iPhone work is 30 to 60 minutes. Whitton High Street does a decent coffee; your phone is on the bench, not in a pile.' },
    ],
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    postcode: 'TW9',
    lean: 'Premium refurb MacBooks and business.',
    headline: 'The repair workshop Richmond does not have on its high street',
    metaDescription:
      'Richmond to Whitton in twelve minutes for same-day MacBook and iPhone repair, graded refurbished MacBooks and business support. Prices in writing at My Gadgets UK.',
    intro: [
      'Richmond has plenty of places to buy a MacBook and surprisingly few benches that will open one. When a logic board is "uneconomical" elsewhere, it comes to us — component-level repair under the microscope is the job this shop is built around.',
      'For refurbished machines, Richmond businesses and freelancers make up a growing share of the shelf: graded units, every mark described, six months of warranty, and the machine inspected at the counter before any money moves.',
    ],
    travel: [
      { mode: 'Train', detail: 'Richmond to Twickenham to Whitton on South Western Railway, then walk to 23 High Street.', time: '12–15 mins' },
      { mode: 'Car', detail: 'A316 from Richmond Circus towards Whitton, or through Twickenham. Free bays on the High Street outside the shop.', time: '12–18 mins' },
      { mode: 'Bus', detail: 'The H22 runs Richmond → Whitton along the High Street. The 281 connects via Twickenham.', time: '25–30 mins' },
    ],
    anchorNote: 'From Richmond, the train via Twickenham avoids the traffic on match days and market days.',
    job: {
      ticket: 'MG-2361',
      device: 'MacBook Air 13" M2 (A2681)',
      fault: 'Dead — quoted £560 board replacement elsewhere',
      part: 'Component-level repair: corroded power rail, two components',
      turnaround: '3 days',
      price: '£219',
      outcome: 'Board repaired, data intact, customer kept the £341 difference.',
    },
    faqs: [
      { q: 'Is it worth travelling from Richmond for a repair?', a: 'For board-level work, yes — it is the difference between repairing your board and replacing it. For screens and batteries the prices are on this site, so you can decide before the twelve-minute trip.' },
      { q: 'Do you support Richmond businesses?', a: 'Yes — repairs, refurbished fleet machines and priority turnaround, invoiced monthly where that helps. See the business page or call the shop.' },
      { q: 'Can I get a MacBook assessed without committing?', a: 'Diagnosis is free and the quote is fixed before any work starts. If it is not worth repairing, we say so and you owe nothing.' },
    ],
  },
  {
    slug: 'bedfont',
    name: 'Bedfont',
    postcode: 'TW14',
    lean: 'Collection and return; practical repairs.',
    headline: 'Repairs for Bedfont — in, fixed and back, without the faff',
    metaDescription:
      'Bedfont\'s practical repair route: ten minutes to Whitton High Street or local collection and return. Phone screens from £59, laptop screens £79, most same day.',
    intro: [
      'Bedfont sits just west of Feltham, and the pattern from here is refreshingly practical: devices that earn their keep, repaired at prices that make sense, back in service fast.',
      'If getting to the High Street is awkward — shifts, kids, a desktop under the desk — ask about collection when you book. Bedfont, Feltham and Hanworth are the regular round.',
    ],
    travel: [
      { mode: 'Car', detail: 'Staines Road → A314 through Hanworth, or Clockhouse Lane → Feltham → Hanworth Road. Free bays outside the shop.', time: '10–12 mins' },
      { mode: 'Bus', detail: 'The 235 or 116 to Hounslow, then the 281 or H22 to Whitton High Street.', time: '30–35 mins' },
      { mode: 'Collection', detail: 'Ask on WhatsApp when you book — Bedfont is on the regular collection round with Feltham and Hanworth.', time: 'Arranged' },
    ],
    anchorNote: 'From Bedfont Green or the clock tower, head for Hanworth and you are ten minutes from our door.',
    job: {
      ticket: 'MG-2448',
      device: 'iPhone 12',
      fault: 'Battery at 76%, dead by mid-shift',
      part: 'Genuine-spec cell',
      turnaround: 'Collected 11:00, returned 16:30 same day',
      price: '£45',
      outcome: 'Collection-and-return job; health shown 100% on handover.',
    },
    faqs: [
      { q: 'How does collection and return work?', a: 'Book on WhatsApp, we collect at an agreed time, diagnose and quote in writing before any work, and return it the same day for most repairs. Nothing starts without your yes.' },
      { q: 'Is a repair worth it on an older phone?', a: 'A £39–£45 battery on a working phone beats a £300 replacement almost every time. If the phone itself is the problem, we will tell you that instead.' },
      { q: 'Do you take broken devices off our hands?', a: 'Yes — we buy working, broken and water-damaged devices. Bring it in or mention it at collection; you get a firm offer, paid the same day.' },
    ],
  },
  {
    slug: 'heston',
    name: 'Heston',
    postcode: 'TW5',
    lean: 'Value phone and laptop repairs.',
    headline: 'Straightforward repairs for Heston, priced before you travel',
    metaDescription:
      'Heston to Whitton High Street in fifteen minutes. iPhone screens from £59, laptop screens £79, honest grades, written warranty. My Gadgets UK — the bench, not the kiosk.',
    intro: [
      'Heston is the far edge of our regular catchment, and the customers who come from here do so for one reason: the price is on the website, the part grade is on the docket, and the job costs what the quote said.',
      'We see a lot of value Androids and family laptops from Heston — the jobs where "is it worth it?" is the real question. We answer that at the counter in five minutes, free, before anyone commits to anything.',
    ],
    travel: [
      { mode: 'Car', detail: 'A312 The Parkway south to Whitton. Free bays on the High Street outside the shop.', time: '12–15 mins' },
      { mode: 'Bus', detail: 'The H32 or 111 to Hounslow, then the 281 or H22 down to Whitton High Street.', time: '30–35 mins' },
      { mode: 'Train', detail: 'Hounslow West (Piccadilly) to Hounslow Central for the 281, or Osterley then the H28 towards Osterley Tesco and change — the bus via Hounslow is usually simpler.', time: '30–40 mins' },
    ],
    anchorNote: 'From Heston village or the M4 services side, The Parkway (A312) is the direct line to us.',
    job: {
      ticket: 'MG-2426',
      device: 'Lenovo IdeaPad 3',
      fault: 'Cracked 15.6" panel + hinge mounts starting to split',
      part: 'Matched FHD panel; mounts rebuilt with brass inserts',
      turnaround: 'Panel next day; hinge cure one more day',
      price: '£79 + £69',
      outcome: 'Both faults caught in one diagnosis — the hinge would have cracked the new screen within months.',
    },
    faqs: [
      { q: 'Is it worth the trip from Heston for a £79 laptop screen?', a: 'The trip is fifteen minutes down The Parkway and the price is the same as on this site. Check the price list before you set off — that is what it is for.' },
      { q: 'Do you fix budget laptops, or only MacBooks?', a: 'Dell, HP, Lenovo, ASUS, Acer — Windows laptops are half the bench. Budget machines get the same honest assessment: if the repair beats replacement, we do it; if not, we say so.' },
      { q: 'Can you look at a phone and a laptop in one visit?', a: 'Yes — most people bring both. Phone batteries and screens are while-you-wait; the laptop quote usually lands before the phone is done.' },
    ],
  },
];


export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
