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
}
export const AREAS: Area[] = [
  {
    slug: "whitton",
    name: "Whitton",
    postcode: "TW2",
    headline: "Computer and phone repair on Whitton High Street",
    metaDescription:
      "Computer and phone repair on Whitton High Street. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Our workshop at 23 High Street brings MacBook, Windows laptop, phone and console repairs together in one place. Walk in during shop hours, or send your model and fault before visiting.",
    adviceHeading: "Preparing for your visit",
    advice: [
      "Bring the device and describe when the fault started. For a laptop power problem, bring its charger too so we can check the full setup.",
      "If you need the device for work, ask us to confirm parts availability and the expected completion time before leaving it with us.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "laptop/screen-replacement",
      "iphone/battery-replacement",
      "playstation/hdmi-port-repair",
    ],
  },
  {
    slug: "twickenham",
    name: "Twickenham",
    postcode: "TW1",
    headline: "MacBook and laptop repair for Twickenham",
    metaDescription:
      "MacBook and laptop repair for Twickenham. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "For a MacBook or Windows laptop problem in Twickenham, our shop is at 23 High Street in nearby Whitton. We handle damaged displays, worn batteries, startup problems and upgrades after checking the machine.",
    adviceHeading: "Keep your work moving",
    advice: [
      "Send the model identifier from the underside of your MacBook, or the make and model of your Windows laptop. A photo of the fault can help us identify the part before your visit.",
      "Back up important work if the device still starts. If it does not, tell us whether preserving the files is your priority before we discuss repair or recovery options.",
    ],
    serviceSlugs: [
      "macbook/screen-replacement",
      "macbook/battery-replacement",
      "laptop/ssd-upgrade",
      "macbook/data-recovery",
    ],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    postcode: "TW3",
    headline: "iPhone, Samsung and laptop repair for Hounslow",
    metaDescription:
      "iPhone, Samsung and laptop repair for Hounslow. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Customers in Hounslow can bring iPhones, Samsung Galaxy phones and laptops to our Whitton workshop. Screen, battery and charging faults are checked before we confirm the repair and price.",
    adviceHeading: "A useful first message",
    advice: [
      "For a phone repair, send the exact model and tell us whether the display, touch and charging still work. Different models need different parts, so the model number matters.",
      "If you are comparing repair options, ask which replacement part is included and what the written warranty covers. The final quote is confirmed before work starts.",
    ],
    serviceSlugs: [
      "iphone/screen-replacement",
      "samsung/screen-replacement",
      "iphone/charging-port-repair",
      "laptop/screen-replacement",
    ],
  },
  {
    slug: "feltham",
    name: "Feltham",
    postcode: "TW13",
    headline: "Laptop and phone repair for Feltham",
    metaDescription:
      "Laptop and phone repair for Feltham. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "For device repairs from Feltham, contact our shop on Whitton High Street. We repair laptops and phones and can discuss local collection requests where availability allows.",
    adviceHeading: "Plan the handover first",
    advice: [
      "Call or message us with the device, fault and your preferred handover. If you need collection, ask us to confirm availability and any arrangements before preparing the device.",
      "Bring the charger for a laptop that will not power on. For screen damage, send a photo and the model so we can check replacement options.",
    ],
    serviceSlugs: [
      "laptop/screen-replacement",
      "laptop/hinge-repair",
      "iphone/screen-replacement",
      "macbook/battery-replacement",
    ],
  },
  {
    slug: "isleworth",
    name: "Isleworth",
    postcode: "TW7",
    headline: "MacBook and iPad repair for Isleworth",
    metaDescription:
      "MacBook and iPad repair for Isleworth. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Our Whitton shop supports customers in Isleworth with MacBook, iPad and Windows laptop repairs. Tell us the model and symptoms so we can advise on diagnosis and replacement parts.",
    adviceHeading: "Match the repair to your model",
    advice: [
      "For an iPad, send the A-number from the back or the model shown in Settings. Some iPad screens use a separate touch layer, while others need a complete display assembly.",
      "For a MacBook, tell us about liquid exposure, damaged keys or any charging problems as well as the main fault. That helps us check related issues before quoting.",
    ],
    serviceSlugs: [
      "ipad/screen-replacement",
      "macbook/keyboard-replacement",
      "macbook/screen-replacement",
      "laptop/screen-replacement",
    ],
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
  },
  {
    slug: "teddington",
    name: "Teddington",
    postcode: "TW11",
    headline: "MacBook and laptop repair for Teddington",
    metaDescription:
      "MacBook and laptop repair for Teddington. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "We offer MacBook and Windows laptop repairs for customers coming from Teddington to our Whitton High Street shop. Ask about display, battery, keyboard, storage and data-recovery work.",
    adviceHeading: "Check repair and upgrade options",
    advice: [
      "Tell us the exact model, the work you use it for and what has become difficult. Some machines support storage upgrades; others need a different solution. We check compatibility first.",
      "For a battery or display job, ask about part availability before making the trip. For a machine that will not start, tell us whether you have a current backup.",
    ],
    serviceSlugs: [
      "macbook/battery-replacement",
      "macbook/ssd-upgrade",
      "laptop/ssd-upgrade",
      "macbook/data-recovery",
    ],
  },
  {
    slug: "st-margarets",
    name: "St Margarets",
    postcode: "TW1",
    headline: "Phone and MacBook repair for St Margarets",
    metaDescription:
      "Phone and MacBook repair for St Margarets. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "If your phone or MacBook needs attention in St Margarets, contact our Whitton shop for diagnosis and a quote. We can check screens, batteries, charging and other device faults.",
    adviceHeading: "Arrange a convenient visit",
    advice: [
      "A model number and a clear photo help us prepare for a damaged screen. For an intermittent problem, describe what triggers it and whether restarting changes anything.",
      "Ask us to confirm the likely turnaround and parts before you travel. Walk-ins are welcome, and any pickup request must be agreed with the shop.",
    ],
    serviceSlugs: [
      "iphone/screen-replacement",
      "iphone/battery-replacement",
      "macbook/screen-replacement",
      "macbook/battery-replacement",
    ],
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
      "laptop/virus-removal",
    ],
  },
  {
    slug: "bedfont",
    name: "Bedfont",
    postcode: "TW14",
    headline: "Laptop, phone and Xbox repair for Bedfont",
    metaDescription:
      "Laptop, phone and Xbox repair for Bedfont. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Customers from Bedfont can contact our Whitton workshop for laptop, phone and Xbox repairs. We check damaged screens, charging faults and console problems and explain the quote first.",
    adviceHeading: "Check the part before travelling",
    advice: [
      "Send your device make and model with a photo or description of the damage. We can check what needs inspecting and whether a replacement part is available.",
      "For an Xbox display fault, tell us the console version and whether it powers on normally. Confirm the expected timing with us before arranging drop-off.",
    ],
    serviceSlugs: [
      "laptop/screen-replacement",
      "iphone/charging-port-repair",
      "xbox/hdmi-port-repair",
      "xbox/overheating-repair",
    ],
  },
  {
    slug: "heston",
    name: "Heston",
    postcode: "TW5",
    headline: "Samsung, iPhone and laptop repair for Heston",
    metaDescription:
      "Samsung, iPhone and laptop repair for Heston. Visit My Gadgets at 23 High Street, Whitton, Twickenham. Free diagnosis, upfront quotes and a written repair warranty.",
    intro:
      "Our shop on Whitton High Street handles Samsung Galaxy, iPhone and laptop repair enquiries from Heston. Bring the device for a diagnosis and a clear quote before work starts.",
    adviceHeading: "Give us the details that matter",
    advice: [
      "For a phone battery or screen issue, send the exact model and explain whether it still charges, turns on and responds to touch. Let us know about liquid damage or previous repairs.",
      "For a Windows laptop, bring the charger if the problem involves power or charging. Ask about parts and timing before your visit, especially when the device is needed for work.",
    ],
    serviceSlugs: [
      "samsung/screen-replacement",
      "iphone/battery-replacement",
      "laptop/hinge-repair",
      "laptop/virus-removal",
    ],
  },
];
export function getArea(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}
