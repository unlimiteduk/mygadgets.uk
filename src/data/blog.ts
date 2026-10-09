// Sample blog content — plain paragraph arrays, no CMS/markdown tooling.
// Swap or extend before launch; the shape is stable so more posts just
// append to BLOG_POSTS.

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string; // ISO
  author: string;
  excerpt: string;
  coverShot: string;
  coverImage?: string;
  bodyParagraphs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'battery-or-charging-port',
    title: "Battery or charging port — how to tell which one's failing",
    metaDescription:
      "Phone dying fast, or just not charging properly? Here's how to tell the difference before you book a repair, and what each fix actually costs.",
    date: '2026-06-02',
    author: 'The bench',
    excerpt: "Two of our most common bookings look identical from the outside. Here's the two-minute check that tells them apart.",
    coverShot: 'Close-up — phone connected to a cable on the bench, multimeter reading visible',
    coverImage: '/images/blog-battery-or-charging-port.webp',
    bodyParagraphs: [
      "\"My phone won't charge\" and \"my battery is dying fast\" get booked in as the same problem more often than you'd think — and they're not. One is a worn cell, the other is a dirty or damaged connector, and mixing them up means paying for the wrong fix.",
      'The quickest test: plug in a cable you know works, and wiggle it gently at the connector while watching the charging icon. If charging starts and stops as you move the cable, that points to the port — often just pocket lint packed into the connector, which we clear for free before quoting anything else.',
      "If the phone charges fine overnight but is dead again by mid-afternoon on a day you used to get through easily, that's a battery health issue, not a port issue. Check Settings → Battery on iPhone, or Settings → Battery on Android, for a health percentage — under 80% and it's normally time.",
      'Swollen battery is the one to stop and act on immediately: if the screen is lifting slightly at one edge, or the back case bulges, stop charging it and bring it in. That is not a "wait and see" fault.',
      "Both fixes are usually 20 to 60 minutes on the bench, and we always test which one it actually is before quoting — a £39-£59 port clean or replacement is a very different job to a battery swap, and we'd rather tell you that up front than guess.",
    ],
  },
  {
    slug: 'screen-protector-myths',
    title: 'Screen protector myths: what actually prevents cracked screens',
    metaDescription:
      "Tempered glass, plastic film, or a case — what genuinely reduces cracked-screen repairs, and what's mostly marketing. From a shop that sees the breaks.",
    date: '2026-05-14',
    author: 'The bench',
    excerpt: "We replace a lot of screens. Here's what we've actually seen make a difference, and what doesn't.",
    coverShot: 'Overhead — cracked phone screen next to a fresh tempered glass panel, unopened',
    coverImage: '/images/blog-screen-protector-myths.webp',
    bodyParagraphs: [
      "\"I had a screen protector on and it still smashed\" is something we hear weekly, usually followed by frustration that the protector didn't do its job. It did — screen protectors are there to take the hit on the surface, not to save the glass underneath from a hard enough drop.",
      'Tempered glass genuinely helps with the common failure: a flat drop onto a hard surface, screen-down. The glass protector absorbs and spreads that impact, and often you\'ll find the protector cracked while the phone underneath is fine. That is the protector doing exactly its job.',
      'What tempered glass does very little for is corner drops and edge impacts — which, from what we see on the bench, cause the majority of the screens we actually replace. A drop that lands on a corner concentrates force in a small area, and no thin glass layer on the front face changes that physics.',
      "The single biggest factor we see isn't the protector at all — it's a case with a raised lip that sits proud of the screen by a millimetre or two, so the glass never touches the ground directly on a flat drop. Combine that with tempered glass and you've covered both common failure modes reasonably well.",
      'Plastic film protectors are mostly there to stop scratches and fingerprint wear, not impact — worth having, but don\'t expect them to save a screen in a real drop. If budget allows one upgrade, a proper case beats a better screen protector every time.',
    ],
  },
  {
    slug: 'what-happens-to-your-data-during-a-repair',
    title: 'What happens to your data during a repair (and how we protect it)',
    metaDescription:
      'A straight answer on data privacy during phone and laptop repairs: what we can see, what we never touch, and what to back up before you bring a device in.',
    date: '2026-04-08',
    author: 'The bench',
    excerpt: 'A fair question we get asked constantly, answered plainly rather than with a generic privacy policy.',
    coverShot: 'Overhead flatlay — device on the ESD mat with screen off, no personal content visible',
    coverImage: '/images/blog-what-happens-to-your-data-during-a-repair.webp',
    bodyParagraphs: [
      'Handing over a phone or laptop with years of messages, photos and logins on it is a reasonable thing to be uneasy about, and we would rather answer that directly than wave a privacy policy at you.',
      'For the repairs most people book — screens, batteries, charging ports, cameras — your storage is never touched. The device stays locked, the repair happens around the chip, and the fault we are fixing has no path to your data at all.',
      'Board-level repairs and data recovery are different, because by definition we sometimes need to access storage to diagnose or recover it. When that is the case, we tell you exactly what we need to see and why before starting, not after — and you can decline and take the device elsewhere with no obligation.',
      "Screen lock and passcodes stay set unless recovering data specifically requires removing them, and we ask first. We don't photograph, copy, or browse device contents as a matter of routine, and any data recovered is handed back on the original device or an encrypted drive you provide, not kept on our systems.",
      'Our one practical piece of advice: any device can be dropped, lost, or need a factory reset mid-repair for an unrelated reason, so a current backup is good practice regardless of who is repairing it — not a comment on trust, just what we\'d tell a friend.',
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
