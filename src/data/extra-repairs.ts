// Console, iMac, PC, Windows SSD and Windows data-recovery pages.
// No prices or turnaround times: none are published elsewhere in this repo.
// Warranty wording follows the existing sitewide repair warranty.

import type { DeviceHub, RepairLink, Service } from './services';
import { SITE } from './site';

const REPAIR_WARRANTY = `${SITE.repairsWarranty} on the work we carry out, the same written repair warranty as every other job on this site. It covers the part we fitted and the work we did. New physical damage after the repair is not covered. Full terms are on the warranty page.`;

export const PRIORITY_REPAIR_LINKS: RepairLink[] = [
  { href: '/repairs/macbook/screen-replacement/', label: 'MacBook screen repair', note: 'Prices published' },
  { href: '/repairs/macbook/ssd-upgrade/', label: 'MacBook SSD upgrade', note: 'Prices published' },
  { href: '/repairs/macbook/data-recovery/', label: 'MacBook data recovery', note: 'Prices published' },
  { href: '/repairs/laptop/', label: 'Windows laptop repair', note: 'Prices published' },
  { href: '/repairs/laptop/screen-replacement/', label: 'Laptop screen repair', note: 'Prices published' },
  { href: '/repairs/laptop/ssd-upgrade/', label: 'Laptop SSD upgrade' },
  { href: '/repairs/laptop/data-recovery/', label: 'Laptop data recovery' },
  { href: '/repairs/console/', label: 'Games console repair' },
  { href: '/repairs/playstation/', label: 'PlayStation repair' },
  { href: '/repairs/playstation/hdmi-port-repair/', label: 'PS4 and PS5 HDMI port repair' },
  { href: '/repairs/xbox/', label: 'Xbox repair' },
  { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair' },
  { href: '/repairs/imac/', label: 'iMac repair' },
  { href: '/repairs/pc/', label: 'PC repair' },
  { href: '/repairs/ipad/', label: 'iPad repair', note: 'Prices published' },
];

const AREAS_LINE =
  'People bring consoles and computers in from Whitton itself, and from Twickenham, Hounslow, Isleworth, Feltham, Hanworth, Heston and Teddington. Each of those places has its own page with the train, bus or drive to 23 High Street.';

export const EXTRA_SERVICES: Service[] = [
  {
    slug: 'playstation/hdmi-port-repair',
    device: 'playstation',
    deviceLabel: 'PlayStation',
    name: 'HDMI port repair',
    h1: 'PlayStation HDMI port repair in Whitton',
    title: 'PlayStation HDMI port repair in Whitton, Twickenham',
    metaDescription:
      'PS4 and PS5 HDMI port repair in Whitton, Twickenham. No signal, flicker or a loose socket. Free diagnosis, quote before any work. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'The TV stays on "no signal" with a cable and input you have already proved on another device',
      'Picture only appears if the plug is held at an angle, or it drops out when the console is nudged',
      'A bent, pushed-in or missing pin inside the HDMI socket',
      'Sound with no picture, or a picture that flashes then dies, on a PS4, PS4 Pro or PS5',
    ],
    whatWeDo: [
      'The first check is boring and it saves people money. We try a known-good HDMI cable and a known-good screen in the shop before anyone talks about a new port. A surprising number of "broken consoles" from Twickenham and Hounslow are a crushed cable or the TV left on the wrong input.',
      'If the socket is loose or the pins are damaged, that is a port job. We open the console and check whether the fault stops at the connector or continues into the HDMI chip. Those are different repairs, which is why this page does not print a price.',
      'Saves stay on the console. An HDMI repair does not format the drive and does not touch your PSN account. You do not need to bring a controller for the diagnosis, though the power lead and the cable you were using are useful.',
    ],
    parts:
      'A replacement HDMI connector when the socket is the fault, or a board repair when the inspection shows the fault is past the connector. The quote names which, before any soldering starts.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'PlayStation HDMI socket under magnification, beside the cable the customer brought in',
    priceTable: [],
    faqs: [
      {
        q: 'Will I lose my saves and games?',
        a: 'No. HDMI work does not wipe the hard drive or SSD. Your installs and saves stay where they are. We still recommend that anything precious is also in cloud storage, because no repair shop should be your only copy.',
      },
      {
        q: 'PS4 or PS5 — do you do both?',
        a: 'Yes. Original PS4, Slim, Pro and PS5. The boards are not the same, so the quote is for the machine in front of us, not a flat rate copied from a different model.',
      },
      {
        q: 'Why is there no price on this page?',
        a: 'A bent socket and a failed HDMI chip are different jobs. Publishing one number would mean guessing. Diagnosis on the bench is free, and you get the figure before we start. MacBook and laptop prices that are already known are on the price list.',
      },
    ],
    sections: [
      {
        heading: 'What the bench is actually deciding',
        paragraphs: [
          'PlayStation HDMI faults split into two piles. In the first, the metal socket has taken a knock: a lead caught in Isleworth, or a plug forced in upside down. The shell looks fine and the pins do not. That repair is the connector.',
          'In the second pile the socket looks perfect and there is still no picture. A chip on the board makes the HDMI signal, and a new socket will not fix a failed chip. We only know which pile you are in after the console is open. That free look is why this page has no price.',
        ],
      },
    ],
    related: [
      { href: '/repairs/playstation/', label: 'All PlayStation repairs' },
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair' },
      { href: '/repairs/console/', label: 'Games console repair' },
      { href: '/repairs/xbox/', label: 'Xbox repair' },
    ],
  },
  {
    slug: 'xbox/hdmi-port-repair',
    device: 'xbox',
    deviceLabel: 'Xbox',
    name: 'HDMI port repair',
    h1: 'Xbox HDMI port repair in Whitton',
    title: 'Xbox HDMI port repair in Whitton, Twickenham',
    metaDescription:
      'Xbox HDMI port repair in Whitton for Series X, Series S and Xbox One. No signal or a loose port. Free diagnosis, then a quote. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'No signal on a Series X, Series S, Xbox One, One S or One X, with the TV and cable already ruled out',
      'The picture cuts out when the cable moves, or only works if the plug is pressed upward',
      'A visibly bent or recessed HDMI socket after the console was pulled off a shelf',
      'Series S with no picture at all — there is no disc drive and no other video output to fall back on',
    ],
    whatWeDo: [
      'We try another cable, another screen, and a look at whether the console is actually booting. If it is, and there is still no picture, the fault is in the console.',
      'Xbox One, One S, One X, Series S and Series X do not share a board. A Series X "no signal" is sometimes the port and sometimes the chip that builds the HDMI signal. We open the machine and quote the repair that matches what we find.',
      'Games and profiles stay on the console. Bring the power brick as well if your Xbox One has one, so we test the supply you actually use.',
    ],
    parts:
      'A replacement HDMI connector when the socket is damaged, or board-level repair when the fault is past the connector. The quote says which. We do not fit a port onto a board that has already failed further in, and we do not tell you it is "just the port" until we have looked.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'Xbox HDMI port on the bench, socket lit so bent pins are visible',
    priceTable: [],
    faqs: [
      {
        q: 'Do you repair Series X and Series S, or only older Xbox Ones?',
        a: 'All of them: original Xbox One, One S, One X, Series S and Series X. Tell us the model when you call, or just bring it. The model is printed on the console.',
      },
      {
        q: 'The Series S has no disc drive. Is a dead HDMI the end of it?',
        a: 'Not by itself. Series S only outputs picture over HDMI, so a port or HDMI-chip fault looks like a completely dead console. It is often repairable. We will tell you if yours is not, before you spend anything.',
      },
      {
        q: 'How much does it cost?',
        a: 'A damaged socket and a failed HDMI chip are different jobs, so we do not guess. The look is free, and you approve the quote or take the console home.',
      },
      {
        q: 'Will my account and installs be wiped?',
        a: 'No. An HDMI repair does not factory-reset the console. Sign in details and installed games stay put.',
      },
    ],
    sections: [
      {
        heading: 'Why an Xbox quote is not a PlayStation quote',
        paragraphs: [
          'The symptom is the same black screen, but the machines are not interchangeable. Series X and Series S do not share a board. An original Xbox One has an external power brick we test separately, because a dead brick looks like a dead console. We name the fault after the inspection, not from a texted model name.',
          'Bring the cable that failed at home. Comparing it with a known-good lead takes a minute. PlayStation HDMI repair is a separate page, because the boards are not the same job.',
        ],
      },
    ],
    related: [
      { href: '/repairs/xbox/', label: 'All Xbox repairs' },
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PlayStation HDMI port repair' },
      { href: '/repairs/console/', label: 'Games console repair' },
      { href: '/repairs/playstation/', label: 'PlayStation repair' },
    ],
  },
  {
    slug: 'laptop/ssd-upgrade',
    device: 'laptop',
    deviceLabel: 'Windows laptop',
    name: 'SSD upgrade',
    h1: 'Laptop SSD upgrade in Whitton',
    title: 'Laptop SSD upgrade in Whitton, Twickenham',
    metaDescription:
      'SSD upgrades for Dell, HP, Lenovo and other Windows laptops in Whitton. We clone your files across. Quote after we see the machine. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'A laptop that takes minutes to reach the desktop, or grinds whenever you open a folder',
      'A drive so full that Windows cannot update, on a machine you otherwise still want to keep',
      'An older hard drive you can hear clicking or spinning, and you would like the files off it as part of the upgrade',
      'A machine you have been told "needs a new SSD" without anyone checking whether the storage is soldered',
    ],
    whatWeDo: [
      'Some laptops take a 2.5-inch drive, some an M.2 stick, and a few ultrabooks have the storage soldered down. Soldered storage cannot be upgraded. We would rather say that at the counter than sell a drive that will not fit. The model sticker is under the machine, or just bring the laptop.',
      'Where the drive comes out, we clone it so Windows and your files come back, and we check the clone boots. If the old drive is already failing, that is data recovery, which has its own page.',
      'Apple machines are a different connector and, on M1 and later, often cannot be upgraded at all. Those prices, where we publish them, are on the MacBook SSD page. We do not copy those figures onto a Dell or a Lenovo.',
    ],
    parts:
      'Named-brand drives, the same rule as our MacBook upgrades. Capacity depends on the laptop, so the quote comes after we identify the machine.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'M.2 SSD seated in a Windows laptop, old hard drive beside it before the clone is checked',
    priceTable: [],
    faqs: [
      {
        q: 'Will I lose my files?',
        a: 'The point of the job is that you do not. We clone the old drive and confirm the new one boots. If the old drive is too damaged to clone, we stop and talk about data recovery instead of pretending the upgrade still applies.',
      },
      {
        q: 'Can every laptop be upgraded?',
        a: 'No. If the storage is soldered, we will say so and we will not charge you for a drive. Many Dell, HP, Lenovo, ASUS and Acer models from the last decade still have a removable drive. The sticker or a two-minute look tells us which yours is.',
      },
      {
        q: 'Why no price list?',
        a: 'The drive, the bracket and whether a clone is even possible change the job. MacBook SSD prices are published because those models are known. A random Windows laptop is not, until it is on the bench. Diagnosis is free.',
      },
      {
        q: 'Do you upgrade MacBooks as well?',
        a: 'Yes, on the models that can take a drive. That is a separate page with its own prices. M1 and later MacBooks have soldered storage; we will not pretend otherwise.',
      },
    ],
    sections: [
      {
        heading: 'What to tell us when you book',
        paragraphs: [
          'The model number matters more than the name on the lid. A photo of the sticker underneath is enough to say whether an upgrade is possible before you leave Hounslow or Feltham. In Whitton, skip the photo and walk it in.',
          'Tell us whether the laptop still boots. A machine that reaches the desktop is a clone. A machine that clicks and never gets there is a data recovery first, and an upgrade second, and we will not quote them as the same job.',
        ],
      },
    ],
    related: [
      { href: '/repairs/macbook/ssd-upgrade/', label: 'MacBook SSD and RAM upgrades' },
      { href: '/repairs/laptop/data-recovery/', label: 'Laptop data recovery' },
      { href: '/repairs/laptop/', label: 'All Windows laptop repairs' },
      { href: '/repairs/laptop/screen-replacement/', label: 'Laptop screen replacement' },
    ],
  },
  {
    slug: 'laptop/data-recovery',
    device: 'laptop',
    deviceLabel: 'Windows laptop',
    name: 'Data recovery',
    h1: 'Laptop data recovery in Whitton',
    title: 'Laptop data recovery in Whitton, Twickenham',
    metaDescription:
      'Data recovery from dead or damaged Windows laptops in Whitton, Twickenham. If we cannot recover the files you need, you pay nothing. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'A laptop that will not switch on, and the only copy of the work is on it',
      'Windows that starts to boot and then repairs itself in a loop',
      'A drive that clicks, or a machine that asks for a BitLocker recovery key you are not sure you have',
      'Water or a drop, and you care more about the documents than about having the same laptop back',
    ],
    whatWeDo: [
      'On many Windows laptops the drive comes out. We image it onto fresh media and stop once the files are off. A MacBook is different: the storage is often soldered to the board. Use the MacBook data recovery page for that machine.',
      'If we cannot recover the files you asked for, you pay nothing, including the assessment. That is the same rule already published for MacBook data recovery, and it applies here too. We would rather lose the job than invoice you for a folder full of nothing.',
      'If Windows was encrypting the drive, we need the BitLocker recovery key from your Microsoft account. Without it the image can still be unreadable. Bring the laptop either way.',
    ],
    parts:
      'Often no parts. The work is imaging a drive that still talks, or repairing a machine just far enough to copy the files off. Where a donor or a replacement part is the only way to reach the data, that is quoted separately, after the assessment, and you can say no.',
    warranty:
      'The files are checked with you at collection. No data recovered, no fee — the same published rule as our MacBook data recovery. This is not a "we tried" invoice.',
    photoShot: 'Laptop drive connected to the recovery dock, with the customer folders listed and nothing personal on screen',
    priceTable: [],
    faqs: [
      {
        q: 'Do you charge if you cannot get the files?',
        a: 'No. If we cannot recover the files you asked for, you pay nothing, including the assessment. That rule is already on our MacBook data recovery page and it is the rule for this job too.',
      },
      {
        q: 'Who sees my documents?',
        a: 'The technician doing the recovery. The shop already works to a written data-handling policy: machines are locked away outside opening hours, and working copies are wiped after you have the files. We do not email your documents anywhere.',
      },
      {
        q: 'The laptop is physically smashed. Is there any point?',
        a: 'Often yes, if the drive itself survived. A broken screen or a dead motherboard is not the same as a dead drive. Bring it in. The assessment is free, and we will say if the drive is gone.',
      },
      {
        q: 'Can you recover a MacBook as well?',
        a: 'Yes. The storage is usually part of the logic board, so start on the MacBook data recovery page if that is the machine.',
      },
    ],
    sections: [
      {
        heading: 'What we need from you',
        paragraphs: [
          'Tell us the last thing the laptop did, whether it was dropped or wet, and which folders actually matter. "Everything" is allowed, but naming the thesis, the accounts file or the photos makes the check at the end honest. We verify those folders open before you leave.',
          'You take the files on a drive we supply or on one of yours. Repairing the laptop afterwards is a separate quote. Many people only want the documents. The bench is on Whitton High Street; Isleworth and Teddington each have an area page with the route. A call helps if the drive is likely to read slowly.',
        ],
      },
    ],
    related: [
      { href: '/repairs/macbook/data-recovery/', label: 'MacBook data recovery' },
      { href: '/repairs/laptop/ssd-upgrade/', label: 'Laptop SSD upgrade' },
      { href: '/repairs/laptop/', label: 'All Windows laptop repairs' },
      { href: '/shop/', label: 'Refurbished MacBooks' },
    ],
  },
];

export const EXTRA_HUBS: DeviceHub[] = [
  {
    slug: 'console',
    label: 'Games consoles',
    blurb: 'PlayStation and Xbox, including HDMI port repair. Quote after a free look, not a guessed price.',
    bookable: false,
    selectorTo: '/repairs/console/',
    title: 'Games console repair in Whitton, Twickenham',
    h1: 'Games console repair in Whitton, Twickenham',
    metaDescription:
      'PlayStation and Xbox repair in Whitton, Twickenham, including HDMI port faults. Free diagnosis, quote before work. Visit 23 High Street or call 07918 440326.',
    intro: [
      'My Gadgets Whitton repairs PlayStation and Xbox consoles on the same bench as the laptops. The job we see most is HDMI: no signal, a picture that only works if the cable is held just so, or a socket that took a knock when the lead was caught. Disc faults, consoles that will not power on, and machines that overheat and shut down come in as well.',
      'This page is the hub. The PlayStation page and the Xbox page go into each brand, and each has its own HDMI port repair page, because the boards are not the same and a single price would be a guess. We do not publish console prices. Diagnosis is free, and the quote is made after the console is open.',
      'The shop is 23 High Street, Whitton, Twickenham TW2 7LB. Call 07918 440326 or walk in during opening hours.',
    ],
    sections: [
      {
        heading: 'What we will and will not pretend to know',
        paragraphs: [
          'A console that boots and has no picture is often the HDMI port or the chip that drives it. A console that does not boot at all might be the power supply, a short on the board, or a drive that never comes ready. Those are not one repair with one number. Anyone who quotes you a flat "HDMI repair" over the phone, without the machine, is guessing. We will not do that.',
          'Saves and installed games stay on the console for an HDMI repair. We are not formatting it. If the hard drive or SSD itself has failed, that is a different conversation, and we will tell you before anything is wiped. You should still keep anything precious in the console account cloud, because a repair shop is not a backup.',
          AREAS_LINE,
        ],
      },
      {
        heading: 'What to bring',
        paragraphs: [
          'The console, the power lead or power brick, and the HDMI cable you were using. A controller is optional for an HDMI fault. You do not need the TV. If you have already tried another cable and another screen, say so — it shortens the diagnosis.',
          'Walk-ins are normal. If you are coming from Feltham, Heston or Hanworth specifically for a console, a phone call means we know to expect it. From Twickenham it is one stop on the train to Whitton, then a short walk. The area pages have the detail for Hounslow, Isleworth and Teddington as well.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you repair both PlayStation and Xbox?',
        a: 'Yes. PS4, PS4 Pro, PS5, Xbox One, One S, One X, Series S and Series X. Start with the brand page if you want the detail, or just bring the console to the shop.',
      },
      {
        q: 'How much is an HDMI port repair?',
        a: 'We do not print a price. A damaged socket and a failed HDMI chip are different repairs, and the quote follows a free look on the bench. You can say no and take the console away.',
      },
      {
        q: 'Will I lose my games?',
        a: 'Not for an HDMI repair. The drive is not wiped. If the storage itself is the fault, we stop and tell you before anything is erased.',
      },
      {
        q: 'Do I need to book?',
        a: 'No. Walk in during opening hours, or call 07918 440326. Booking is there if you want the part of the day set aside. The address is 23 High Street, Whitton, TW2 7LB.',
      },
    ],
    links: [
      { href: '/repairs/playstation/', label: 'PlayStation repair', note: 'PS4 and PS5' },
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PlayStation HDMI port', note: 'No signal, loose socket' },
      { href: '/repairs/xbox/', label: 'Xbox repair', note: 'Series and Xbox One' },
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port', note: 'No signal, loose socket' },
      { href: '/repairs/laptop/', label: 'Windows laptop repair', note: 'If it is not a console' },
    ],
  },
  {
    slug: 'playstation',
    label: 'PlayStation',
    blurb: 'PS4 and PS5, including HDMI port repair. We quote after a free diagnosis.',
    bookable: true,
    selectorTo: '/repairs/playstation/',
    modelPlaceholder: 'e.g. PS5, PS4 Pro, PS4 Slim…',
    title: 'PlayStation repair in Whitton — PS4 and PS5',
    h1: 'PlayStation repair in Whitton — PS4 and PS5',
    metaDescription:
      'PS4 and PS5 repair in Whitton, Twickenham. HDMI ports, no power, disc faults and overheating. Free diagnosis, quote before work. Call 07918 440326.',
    intro: [
      'We repair PS4, PS4 Slim, PS4 Pro and PS5 at the shop on Whitton High Street. HDMI is the fault people travel in for: the console sounds awake and the television stays black. Disc drives that spit games back out, consoles that overheat and shut down mid-game, and machines that will not power on at all are the rest of the queue.',
      'Prices are not listed here. A PlayStation quote depends on which board is in the machine and what the inspection finds. The HDMI port page explains that split in more detail. Diagnosis is free. If we cannot justify a repair, we say so.',
    ],
    sections: [
      {
        heading: 'Faults we actually see',
        paragraphs: [
          'No picture is not automatically a dead console. We test a known-good cable and screen first, then the socket, then the HDMI circuitry. A port that has been yanked in a living room in Twickenham looks different under the microscope from a console that lost picture with the cable never touched. Both are repairable often enough that it is worth the trip, and neither gets a price until it is open.',
          'Disc-drive complaints need the same honesty. A PS5 Digital and a disc PS5 are different machines; a Digital has no drive to blame. On a disc model, a drive that ejects every game can be the drive, the rails, or the board telling the drive to give up. We identify which before we talk about parts.',
          'Overheating that triggers a shutdown is usually dust and dried thermal paste, sometimes a fan that no longer spins properly. We do not sell that as a mystical "deep clean package". If that is the fault, the quote describes the work. If the console is shutting down for another reason, we will not clean it and call that the repair.',
        ],
      },
      {
        heading: 'Saves, accounts, and the visit',
        paragraphs: [
          'HDMI and cleaning work do not format the console. Your installs stay. We will never sign into your PlayStation account, and we do not need your password for a port repair. If a fault really does require a system setting, we will ask you to do that part yourself.',
          `${AREAS_LINE} The console hub covers Xbox as well, if the machine in the bag turns out to be the other brand.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Which PlayStation models do you take?',
        a: 'PS4, PS4 Slim, PS4 Pro and PS5, disc and digital. Bring the power lead. The HDMI cable you were using is worth bringing too.',
      },
      {
        q: 'Can you fit a new HDMI port?',
        a: 'When the socket is the fault, yes. When the fault is further into the board, a new socket would not fix it, and we will not fit one for show. The HDMI page describes how we tell those apart. There is no printed price, because they are not the same job.',
      },
      {
        q: 'Do you wipe the console?',
        a: 'Not for the repairs described here. If storage has failed and the data cannot stay, we tell you before anything is erased.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Bring it to 23 High Street, Whitton, TW2 7LB, or call 07918 440326. The look is free. You can also book a repair online and describe the fault. Opening hours are on this site and on the door.',
      },
    ],
    links: [
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PS4 and PS5 HDMI port repair', note: 'The job we see most' },
      { href: '/repairs/console/', label: 'Games console repair', note: 'PlayStation and Xbox' },
      { href: '/repairs/xbox/', label: 'Xbox repair' },
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair' },
    ],
  },
  {
    slug: 'xbox',
    label: 'Xbox',
    blurb: 'Xbox Series and Xbox One, including HDMI port repair. Quote after we open it.',
    bookable: true,
    selectorTo: '/repairs/xbox/',
    modelPlaceholder: 'e.g. Series X, Series S, Xbox One S…',
    title: 'Xbox repair in Whitton — Series X, Series S and Xbox One',
    h1: 'Xbox repair in Whitton — Series X, Series S and Xbox One',
    metaDescription:
      'Xbox repair in Whitton, Twickenham for Series X, Series S and Xbox One. HDMI, no power and overheating. Free diagnosis. Call 07918 440326.',
    intro: [
      'Xbox repairs at the Whitton shop cover the original Xbox One, Xbox One S, Xbox One X, Series S and Series X. The familiar complaint is HDMI: the console powers up, the controller connects, and the screen never leaves "no signal". No-power faults and consoles that shut themselves down after a few minutes are the other regulars.',
      'We do not publish Xbox prices. Series S and Series X are different boards, and an original Xbox One still has an external power brick that has to be tested on its own. The quote comes after that inspection, not from a table copied off the internet. The HDMI page is the detailed version of the picture fault.',
    ],
    sections: [
      {
        heading: 'Picture, power, and heat',
        paragraphs: [
          'Start with picture faults, because they are the ones that get misdiagnosed in the living room. A Series S has no disc drive and no second video port, so a bad HDMI socket looks like a console that is simply dead. We check that it is actually running, then the cable, then the port, then the chip that produces the HDMI signal. You get told which of those it is.',
          'Original Xbox One power bricks fail on their own. If you still have the brick, bring it. Replacing a console that only needed a power supply is a bad outcome, and we will not do it. One S, One X and the Series models have the power supply inside; those are bench jobs, quoted after they are open.',
          'A console that boots, runs a game, and then shuts off is often heat: a fan full of dust, or paste that has dried out on a Series X that has lived on a carpet in a Hounslow flat. Sometimes it is not heat at all. We measure what it is doing rather than selling a clean as a cure-all.',
        ],
      },
      {
        heading: 'Your account stays yours',
        paragraphs: [
          'We do not need your Microsoft password to replace an HDMI port or to deal with a power fault. Games stay installed. If a drive has failed and the console cannot keep the data, that is said out loud before anyone wipes anything.',
          `${AREAS_LINE} If the console is a PlayStation, use that page instead — the parts are not shared.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Which Xbox models do you repair?',
        a: 'Xbox One, Xbox One S, Xbox One X, Series S and Series X. Bring the power brick as well if your model has one.',
      },
      {
        q: 'Is a Series S with no picture worth repairing?',
        a: 'Often, yes. It only has HDMI for video, so a port fault looks terminal. The HDMI page explains what we check. There is no flat price: the socket and the HDMI chip are different repairs.',
      },
      {
        q: 'Can you recover my game saves?',
        a: 'Saves that synced to your Xbox account are in the account, not in our hands. Local data stays on the console unless the drive itself has failed. We will not reset the console as part of an HDMI repair.',
      },
      {
        q: 'Where is the shop?',
        a: '23 High Street, Whitton, Twickenham TW2 7LB. Call 07918 440326. Area pages cover Twickenham, Hounslow, Isleworth, Feltham, Hanworth, Heston and Teddington.',
      },
    ],
    links: [
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair', note: 'No signal and loose sockets' },
      { href: '/repairs/console/', label: 'Games console repair' },
      { href: '/repairs/playstation/', label: 'PlayStation repair' },
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PlayStation HDMI port repair' },
    ],
  },
  {
    slug: 'imac',
    label: 'iMac',
    blurb: 'Intel and M1 iMac repairs. Screen, storage and data, quoted after we see the machine.',
    bookable: true,
    selectorTo: '/repairs/imac/',
    modelPlaceholder: 'e.g. iMac 27-inch 2017, iMac 24-inch M1…',
    title: 'iMac repair in Whitton, Twickenham',
    h1: 'iMac repair in Whitton, Twickenham',
    metaDescription:
      'iMac repair in Whitton and Twickenham: screens, drives and data on Intel and 24-inch M1 models. Free diagnosis, no guessed prices. Call 07918 440326.',
    intro: [
      'An iMac is not a laptop with a bigger screen. The glass, the display and the computer are one unit, and a 27-inch Intel machine is a different repair from a 24-inch M1. We work on both at 23 High Street, Whitton. There is no iMac price list on this site, because we do not have a signed-off figure for these jobs. The quote is made after a free look.',
      'If you want a machine to take away today rather than a repair, the refurbished iMacs are on the shop page, graded and described the same way as the MacBooks. A repair and a replacement are both options. We will say which one makes sense once we have seen yours.',
    ],
    sections: [
      {
        heading: 'Screens, storage, and machines that will not start',
        paragraphs: [
          'Cracked iMac glass is usually from a corner impact or from something shut against the stand. The panel behind the glass may be fine, or it may not. We do not quote a "glass only" job until the display has been tested, and we do not publish a price we would then have to walk back. Bring it in. From Teddington or Twickenham it is a short trip; the computer is awkward rather than fragile in a car if it is screened with a blanket.',
          'Many 2012 to 2019 Intel iMacs can have the drive dealt with. The 24-inch M1 has soldered storage, the same limitation we already state for M1 MacBooks, and nobody can fit a bigger drive. We will say that at the counter rather than take the machine apart to discover it.',
          'A dead iMac needs a diagnosis, not a guess. On many Intel machines the files are still on a removable drive. On an M1 they are tied to the board, as on the MacBook data recovery page. Tell us whether you want a working iMac or the files.',
        ],
      },
      {
        heading: 'Getting a large iMac here',
        paragraphs: [
          'A 27-inch travels on the back seat more happily than on the train from Twickenham. Hounslow, Isleworth, Feltham, Hanworth, Heston and Teddington are a short drive. Short-stay bays are on the High Street outside the shop.',
          'Call 07918 440326 before you set off if the iMac is a 27-inch and you want to be sure there is bench space the same day. Walk-ins are still welcome. Opening hours are the ones already published on this site: Monday to Friday 09:00–18:30, Saturday 09:30–17:30, Sunday closed.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you repair the 24-inch M1 iMac?',
        a: 'Yes, for faults that are actually repairable. Storage and memory on the M1 are soldered, so we cannot upgrade them. We will tell you that immediately rather than booking the machine in for an upgrade that cannot happen.',
      },
      {
        q: 'How much is an iMac screen?',
        a: 'We do not publish a price. Glass-only and full display failures are different, and the part depends on the year and the size. The diagnosis is free and the quote is before any work.',
      },
      {
        q: 'Can you get my files off a dead iMac?',
        a: 'Often. On many Intel iMacs the drive can be read even when the computer will not boot. On an M1 the storage is part of the board, as with MacBook data recovery. Say if you want the files rather than a repaired computer.',
      },
    ],
    links: [
      { href: '/shop/imac/', label: 'Refurbished iMacs', note: 'Graded machines in the shop' },
      { href: '/repairs/macbook/', label: 'MacBook repair', note: 'If it is a laptop, not an iMac' },
      { href: '/repairs/macbook/data-recovery/', label: 'MacBook data recovery' },
      { href: '/repairs/macbook/ssd-upgrade/', label: 'MacBook SSD upgrades', note: 'Published prices, different machines' },
      { href: '/repairs/laptop/data-recovery/', label: 'Windows laptop data recovery' },
    ],
  },
  {
    slug: 'pc',
    label: 'PC',
    blurb: 'Desktop PCs: no display, no power, failing drives and upgrades that are actually possible.',
    bookable: true,
    selectorTo: '/repairs/pc/',
    modelPlaceholder: 'e.g. Dell OptiPlex, HP Pavilion desktop…',
    title: 'PC repair in Whitton, Twickenham',
    h1: 'PC repair in Whitton, Twickenham',
    metaDescription:
      'Desktop PC repair in Whitton and Twickenham. No power, no display, failing drives and SSD upgrades where the PC allows it. Free diagnosis. Call 07918 440326.',
    intro: [
      'This page is for desktop PCs: towers, small-form machines and all-in-ones that are not iMacs. Laptops have their own pages, because a Dell tower and a Dell laptop do not fail the same way and should not be booked as the same job. We repair PCs at 23 High Street, Whitton. There is no PC price list in this site. We quote after a free diagnosis.',
      'The usual arrivals are a PC that does not switch on, a PC that switches on and never shows a picture, and a PC that has become too slow to use because the drive is failing or full. People also ask for an SSD. We will fit one when the machine has a bay or a slot for it, and we will say so when it does not.',
    ],
    sections: [
      {
        heading: 'No power and no picture',
        paragraphs: [
          'No power is often the power supply, sometimes the case switch, sometimes the board. We test the supply before we condemn the computer. No picture, with the fans spinning, is a different list: lead, graphics output, memory, then the board. Bring the cable. We have screens in the shop.',
          'We do not build gaming PCs or sell a menu of graphics cards. If a card has failed, the quote is for that fault. If a replacement does not make sense for the age of the machine, we will say so.',
        ],
      },
      {
        heading: 'Drives, files, and upgrades',
        paragraphs: [
          'A desktop drive is usually the easiest storage we see, because it comes out. Data recovery from a PC that will not boot is often an image of that drive, and the rule is the same one published for laptop and MacBook data recovery: if we cannot recover the files you asked for, you pay nothing. BitLocker still needs the recovery key. Name the folders that matter.',
          'An SSD upgrade on a tower is a clone plus a drive that physically fits. We use named-brand drives, the standard already stated for MacBook upgrades. We do not publish a PC price beside the MacBook price, because they are not the same part. The laptop SSD page covers notebooks. Use that one if the computer folds shut.',
          'Twickenham is one train stop away. Hounslow, Isleworth, Feltham, Hanworth, Heston and Teddington are a short drive, and each has an area page. Call 07918 440326 if you want the tower looked at the same day.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you repair laptops as well?',
        a: 'Yes, on the Windows laptop pages: screens, hinges, virus removal, SSD upgrades and data recovery. This page is for desktops so the two do not get mixed up.',
      },
      {
        q: 'Can you recover files from a PC that will not turn on?',
        a: 'Usually, if the drive itself is readable. You pay nothing if we cannot recover the files you asked for. That is the same rule as our other data-recovery work. Bring the recovery key if the drive was encrypted.',
      },
      {
        q: 'Will you upgrade the graphics card?',
        a: 'Only as a repair of a failed card, quoted after we have seen the PC. We do not run a gaming-build service and we do not publish card prices.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Bring the tower to 23 High Street, Whitton, TW2 7LB, or call 07918 440326. Diagnosis is free. You approve the price before any parts are ordered or any work starts.',
      },
    ],
    links: [
      { href: '/repairs/laptop/', label: 'Windows laptop repair', note: 'If it is not a desktop' },
      { href: '/repairs/laptop/ssd-upgrade/', label: 'Laptop SSD upgrade' },
      { href: '/repairs/laptop/data-recovery/', label: 'Laptop data recovery' },
      { href: '/repairs/imac/', label: 'iMac repair' },
      { href: '/repairs/macbook/data-recovery/', label: 'MacBook data recovery' },
      { href: '/shop/', label: 'Refurbished MacBooks' },
    ],
  },
];
