// Service-area information for one physical workshop in Whitton.
// No invented jobs, branch locations, travel times or customer statistics.
export interface Area {
  slug: string;
  name: string;
  postcode: string;
  headline: string;
  metaDescription: string;
  intro: string;
  adviceHeading: string;
  advice: string[];
  serviceSlugs: string[];
  faqs: { q: string; a: string }[];
}

function areaFaqs(place: string) {
  return [
    {
      q: `Do I need an appointment to come from ${place}?`,
      a: "No. Walk in at 23 High Street, Whitton, Twickenham TW2 7LB, Monday to Friday 9am–6pm or Saturday 10:30am–5pm. Sunday is closed. Any collection has to be agreed with the shop before you set it up; visits are to the Whitton workshop.",
    },
    {
      q: `How much is PS5 or Xbox HDMI port repair if I am coming from ${place}?`,
      a: "£70 when the socket is the fault. A PS5 can be posted from anywhere in the UK, repaired the same day it arrives, with free return postage. Xbox and PS4 are shop visits only.",
    },
    {
      q: `What warranty do you give on a repair from ${place}?`,
      a: "A written 3-month warranty on repairs, and 6 months on refurbished MacBooks. Diagnosis is free, and you approve a written quote before we start. If we cannot fix it, you pay nothing.",
    },
  ];
}

export const AREAS: Area[] = [
  {
    slug: "whitton",
    name: "Whitton",
    postcode: "TW2",
    headline: "MacBook, laptop and console repair on Whitton High Street",
    metaDescription:
      "The repair shop at 23 High Street, Whitton, Twickenham. MacBook and laptop screens, SSD upgrades, data recovery, and PS5 or Xbox HDMI port repair. Walk in, no appointment needed.",
    intro:
      "Our workshop at 23 High Street repairs MacBooks, Windows laptops and games consoles in one place. Walk in during shop hours, or send your model and fault before visiting.",
    adviceHeading: "Preparing for your visit",
    advice: [
      "Bring the device and describe when the fault started. For a laptop power problem, bring its charger too so we can check the full setup.",
      "If you need the device for work, ask us to confirm parts availability and the expected completion time before leaving it with us.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "playstation/hdmi-port-repair",
      "macbook/ssd-upgrade",
    ],
    faqs: [
      {
        q: "Do I need to book, or can I just walk in?",
        a: "Walk in. Booking ahead means the part is reserved and the job can start when you arrive, but the door is open either way during opening hours: Monday to Friday 9am–6pm and Saturday 10:30am–5pm.",
      },
      {
        q: "Where is the shop?",
        a: "23 High Street, Whitton, Twickenham TW2 7LB.",
      },
      {
        q: "How much is PS5 or Xbox HDMI port repair?",
        a: "£70 when the socket is the fault. A PS5 can be posted from anywhere in the UK, repaired the same day it arrives, with free return postage. Xbox and PS4 stay as shop jobs.",
      },
      {
        q: "Do you sell refurbished MacBooks?",
        a: "Yes, tested and graded, with a 6-month warranty. You can reserve a machine and inspect it in the shop before you pay.",
      },
      {
        q: "What if I only need the files off a dead laptop?",
        a: "Tell us that first. Data recovery starts from £129, and if we cannot recover the files you need, you pay nothing.",
      },
    ],
  },
  {
    slug: "twickenham",
    name: "Twickenham",
    postcode: "TW1",
    headline: "MacBook, laptop and console repair for Twickenham",
    metaDescription:
      "MacBook, laptop and console repair for Twickenham at our shop in Whitton. Screens, SSD upgrades, data recovery and PS5 HDMI repair. Free diagnosis and a written quote.",
    intro:
      "For a MacBook, Windows laptop or games console problem in Twickenham, our workshop is at 23 High Street, Whitton. We repair damaged displays, worn batteries, startup problems, SSD upgrades, data recovery and HDMI ports, after we have checked the machine.",
    adviceHeading: "Keep your work moving",
    advice: [
      "Send the model identifier from the underside of your MacBook, or the make and model of your Windows laptop. A photo of the fault can help us identify the part before your visit.",
      "Back up important work if the device still starts. If it does not, tell us whether preserving the files is your priority before we discuss repair or recovery options.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "playstation/hdmi-port-repair",
      "macbook/data-recovery",
    ],
    faqs: [
      {
        q: "Where do I take a MacBook for repair in Twickenham?",
        a: "To My Gadgets Whitton at 23 High Street, Whitton, Twickenham TW2 7LB. There is one workshop, in Whitton. You can walk in Monday to Friday 9am–6pm or Saturday 10:30am–5pm. No appointment is required.",
      },
      {
        q: "How much is MacBook screen replacement?",
        a: "From £129, depending on the model. A MacBook Air M1 (A2337) with an OEM-pull assembly is £189, usually fitted in 2–4 hours. We confirm the fault is the screen before quoting.",
      },
      {
        q: "Do you repair PlayStation and Xbox consoles for Twickenham customers?",
        a: "Yes. PS5 and Xbox HDMI port repair is £70 when the socket is the fault. A PS5 can also be posted from anywhere in the UK, repaired the same day it arrives, with free return postage. Xbox and PS4 are shop visits only.",
      },
      {
        q: "Can you recover data from a laptop that will not start?",
        a: "We can attempt it in the shop. If we cannot recover the files you need, you pay nothing. Tell us if the data matters more than the repair before we start.",
      },
      {
        q: "Do I need to book?",
        a: "No. Walk in during opening hours, or send the model and a photo of the fault first so we can check the part. Any collection has to be agreed with the shop before you set it up; visits are to the Whitton workshop.",
      },
      {
        q: "What warranty do you give?",
        a: "A written 3-month warranty on repairs, and 6 months on refurbished MacBooks.",
      },
    ],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    postcode: "TW3",
    headline: "MacBook, laptop and Xbox repair for Hounslow",
    metaDescription:
      "MacBook, laptop and Xbox repair for Hounslow at our workshop in Whitton. HDMI port repair is £70 when the socket is the fault. Free diagnosis and a written quote before we start.",
    intro:
      "Customers in Hounslow can bring MacBooks, Windows laptops, PlayStation and Xbox consoles to our workshop at 23 High Street, Whitton. We check the fault and confirm the price before any work starts.",
    adviceHeading: "A useful first message",
    advice: [
      "Send the exact model and tell us whether the machine still starts, shows a picture, or only needs the files recovered. Different models need different parts.",
      "If you are comparing repair options, ask which replacement part is included and what the written warranty covers. The final quote is confirmed before work starts.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "xbox/hdmi-port-repair",
      "playstation/hdmi-port-repair",
    ],
    faqs: [
      {
        q: "Do you repair Xbox consoles for customers in Hounslow?",
        a: "Yes. Bring a Series X, Series S or Xbox One to 23 High Street, Whitton, Twickenham TW2 7LB. HDMI port repair is £70 when the socket is the fault. Overheating, shutdowns and no power are quoted after a free diagnosis. Xbox consoles cannot be posted.",
      },
      {
        q: "Can I come from Hounslow without an appointment?",
        a: "Yes. Walk in Monday to Friday 9am–6pm or Saturday 10:30am–5pm. A message first is helpful if you are coming specifically for a console or a screen, so we know to expect it.",
      },
      {
        q: "Do you repair MacBooks as well as laptops?",
        a: "Yes. MacBook screen replacement starts from £129, batteries from £89, and we also do logic-board repair, liquid damage, data recovery and SSD upgrades on serviceable models.",
      },
      {
        q: "Can I post a PS5 from Hounslow?",
        a: "Yes, or you can walk in. PS5 HDMI port repair is £70 when the socket is the fault. Posted consoles are repaired the same day they arrive, and return postage is free. Send it to 23 High Street, Whitton, Twickenham TW2 7LB. Do not post an Xbox or a PS4.",
      },
      {
        q: "What does a repair cost, and is there a warranty?",
        a: "Diagnosis is free and you approve a written quote before we start. If we cannot fix it, you pay nothing. Repairs have a written 3-month warranty.",
      },
    ],
  },
  {
    slug: "feltham",
    name: "Feltham",
    postcode: "TW13",
    headline: "Laptop, MacBook and console repair for Feltham",
    metaDescription:
      "Laptop, MacBook and console repair for Feltham. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "For laptop, MacBook and console repairs from Feltham, contact our shop on Whitton High Street. We can discuss local collection requests where availability allows, and any collection has to be agreed first.",
    adviceHeading: "Plan the handover first",
    advice: [
      "Call or message us with the device, fault and your preferred handover. If you need collection, ask us to confirm availability and any arrangements before preparing the device.",
      "Bring the charger for a laptop that will not power on. For screen damage, send a photo and the model so we can check replacement options.",
    ],
    serviceSlugs: [
      "laptop/screen-replacement",
      "macbook/battery-replacement",
      "playstation/hdmi-port-repair",
      "macbook/screen-replacement",
    ],
    faqs: areaFaqs("Feltham"),
  },
  {
    slug: "isleworth",
    name: "Isleworth",
    postcode: "TW7",
    headline: "MacBook, laptop and console repair for Isleworth",
    metaDescription:
      "MacBook, laptop and console repair for Isleworth. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Our Whitton shop supports customers in Isleworth with MacBook, Windows laptop and console repairs. Tell us the model and symptoms so we can advise on diagnosis and replacement parts.",
    adviceHeading: "Match the repair to your model",
    advice: [
      "For a MacBook, send the model identifier from the underside. Tell us about liquid exposure, damaged keys or any charging problems as well as the main fault.",
      "For a console with no picture, say whether it still powers on and whether another HDMI cable has been tried. HDMI port repair is £70 when the socket is the fault.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "playstation/hdmi-port-repair",
      "macbook/battery-replacement",
    ],
    faqs: areaFaqs("Isleworth"),
  },
  {
    slug: "hanworth",
    name: "Hanworth",
    postcode: "TW13",
    headline: "Console and computer repair for Hanworth",
    metaDescription:
      "Console and computer repair for Hanworth. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Bring PlayStation, Xbox, laptop and desktop problems from Hanworth to our workshop at 23 High Street, Whitton. We check the cause before agreeing the repair.",
    adviceHeading: "Tell us what the console does",
    advice: [
      "A black screen can have several causes. Tell us whether the console powers on, whether another HDMI cable or TV has been tried, and whether the port looks damaged.",
      "For overheating or shutdowns, describe how long the console runs before the problem occurs. Let us inspect it before attempting further repairs or opening it yourself.",
    ],
    serviceSlugs: [
      "playstation/hdmi-port-repair",
      "xbox/hdmi-port-repair",
      "playstation/overheating-repair",
      "xbox/no-power",
    ],
    faqs: areaFaqs("Hanworth"),
  },
  {
    slug: "teddington",
    name: "Teddington",
    postcode: "TW11",
    headline: "MacBook and laptop repair for Teddington",
    metaDescription:
      "MacBook and laptop repair for Teddington. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "We offer MacBook and Windows laptop repairs for customers coming from Teddington to our Whitton High Street shop. Ask about display, battery, keyboard, storage, data recovery and HDMI port repair.",
    adviceHeading: "Check repair and upgrade options",
    advice: [
      "Tell us the exact model, the work you use it for and what has become difficult. Some machines support storage upgrades; others need a different solution. We check compatibility first.",
      "For a battery or display job, ask about part availability before making the trip. For a machine that will not start, tell us whether you have a current backup.",
    ],
    serviceSlugs: [
      "macbook/battery-replacement",
      "macbook/ssd-upgrade",
      "playstation/hdmi-port-repair",
      "macbook/data-recovery",
    ],
    faqs: areaFaqs("Teddington"),
  },
  {
    slug: "st-margarets",
    name: "St Margarets",
    postcode: "TW1",
    headline: "MacBook and laptop repair for St Margarets",
    metaDescription:
      "MacBook and laptop repair for St Margarets. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "If your MacBook or Windows laptop needs attention in St Margarets, contact our Whitton shop for diagnosis and a quote. We can check screens, batteries, storage and startup faults.",
    adviceHeading: "Arrange a convenient visit",
    advice: [
      "A model number and a clear photo help us prepare for a damaged screen. For an intermittent problem, describe what triggers it and whether restarting changes anything.",
      "Ask us to confirm the likely turnaround and parts before you travel. Walk-ins are welcome, and any pickup request must be agreed with the shop.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "macbook/battery-replacement",
      "macbook/data-recovery",
    ],
    faqs: areaFaqs("St Margarets"),
  },
  {
    slug: "richmond",
    name: "Richmond",
    postcode: "TW9",
    headline: "MacBook and computer repair for Richmond",
    metaDescription:
      "MacBook and computer repair for Richmond. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "For MacBook and computer repairs from Richmond, our workshop is at 23 High Street in Whitton, Twickenham. We diagnose display, power, battery and storage faults before quoting.",
    adviceHeading: "Repair before replacing",
    advice: [
      "Tell us the model, age and main problem. We can discuss the repair cost and, if useful, the refurbished devices available at the shop so you can compare your options.",
      "If the machine contains important files, make that clear before the repair. Recovery work depends on the condition of the storage and cannot be promised before diagnosis.",
    ],
    serviceSlugs: [
      "macbook/logic-board-repair",
      "macbook/screen-replacement",
      "laptop/data-recovery",
      "playstation/hdmi-port-repair",
    ],
    faqs: [
      {
        q: "Where do I take a MacBook for repair from Richmond?",
        a: "To My Gadgets Whitton at 23 High Street, Whitton, Twickenham TW2 7LB. There is one workshop, in Whitton. You can walk in Monday to Friday 9am–6pm or Saturday 10:30am–5pm. No appointment is required.",
      },
      {
        q: "How much is MacBook screen replacement for a Richmond customer?",
        a: "From £129, depending on the model. A MacBook Air M1 (A2337) with an OEM-pull assembly is £189, usually fitted in 2–4 hours. We confirm the fault is the screen before quoting.",
      },
      {
        q: "Do you repair PlayStation and Xbox consoles for Richmond customers?",
        a: "Yes. PS5 and Xbox HDMI port repair is £70 when the socket is the fault. A PS5 can also be posted from anywhere in the UK, repaired the same day it arrives, with free return postage. Xbox and PS4 are shop visits only.",
      },
      {
        q: "Can you recover data from a laptop that will not start?",
        a: "We can attempt it in the shop. If we cannot recover the files you need, you pay nothing. Tell us if the data matters more than the repair before we start.",
      },
    ],
  },
  {
    slug: "bedfont",
    name: "Bedfont",
    postcode: "TW14",
    headline: "Laptop, MacBook and Xbox repair for Bedfont",
    metaDescription:
      "Laptop, MacBook and Xbox repair for Bedfont. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Customers from Bedfont can contact our Whitton workshop for laptop, MacBook and Xbox repairs. We check damaged screens and console problems and explain the quote first.",
    adviceHeading: "Check the part before travelling",
    advice: [
      "Send your device make and model with a photo or description of the damage. We can check what needs inspecting and whether a replacement part is available.",
      "For an Xbox display fault, tell us the console version and whether it powers on normally. Confirm the expected timing with us before arranging drop-off.",
    ],
    serviceSlugs: [
      "laptop/screen-replacement",
      "xbox/hdmi-port-repair",
      "macbook/screen-replacement",
      "playstation/hdmi-port-repair",
    ],
    faqs: areaFaqs("Bedfont"),
  },
  {
    slug: "heston",
    name: "Heston",
    postcode: "TW5",
    headline: "Laptop, MacBook and console repair for Heston",
    metaDescription:
      "Laptop, MacBook and console repair for Heston. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Our shop on Whitton High Street handles laptop, MacBook and console repair enquiries from Heston. Bring the device for a diagnosis and a clear quote before work starts.",
    adviceHeading: "Give us the details that matter",
    advice: [
      "Send the exact model and explain whether it still starts, shows a picture, or only needs the files recovered. Let us know about liquid damage or previous repairs.",
      "For a Windows laptop, bring the charger if the problem involves power or charging. Ask about parts and timing before your visit, especially when the device is needed for work.",
    ],
    serviceSlugs: [
      "laptop/screen-replacement",
      "macbook/screen-replacement",
      "playstation/hdmi-port-repair",
      "macbook/battery-replacement",
    ],
    faqs: areaFaqs("Heston"),
  },
];

export function getArea(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}
