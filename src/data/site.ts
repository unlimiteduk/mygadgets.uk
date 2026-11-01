// ------------------------------------------------------------------
// Site-wide business data (NAP). Single source of truth.
// ------------------------------------------------------------------

/** Exact Google listing for My Gadgets Whitton. Directions and JSON-LD use this. */
export const MAPS_PLACE =
  'https://www.google.com/maps/place/My+Gadgets+Whitton/@51.4523375,-0.3580194,17z/data=!4m15!1m8!3m7!1s0x487673ebfed63241:0x8349bb9059d2bc27!2sMy+Gadgets+Whitton!8m2!3d51.4523533!4d-0.3578779!10e5!16s%2Fg%2F11x2kkpzpj!3m5!1s0x487673ebfed63241:0x8349bb9059d2bc27!8m2!3d51.4523533!4d-0.3578779!16s%2Fg%2F11x2kkpzpj';

/**
 * Keyless embed for that same place. The maps?q=&output=embed form 301s with
 * X-Frame-Options: SAMEORIGIN, which leaves a blank frame. This is the URL
 * that redirect lands on, and it can be framed.
 */
export const MAPS_EMBED =
  'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sMy+Gadgets+Whitton,+23+High+Street,+Whitton,+Twickenham+TW2+7LB';

export const SITE = {
  // Visual logo wordmark. Schema, titles and NAP use `name` (the Google Business Profile).
  brandName: 'My Gadgets UK',
  name: 'My Gadgets Whitton',
  legalName: 'MY GADGETS LTD',
  domain: 'https://www.mygadgets.uk',
  street: '23 High Street',
  locality: 'Whitton',
  region: 'Twickenham',
  postcode: 'TW2 7LB',
  country: 'GB',
  geo: { lat: 51.4523533, lng: -0.3578779 },
  phoneDisplay: '07918 440326',
  phoneHref: 'tel:+447918440326',
  whatsappDisplay: '07918 440326',
  whatsappHref: 'https://wa.me/447918440326',
  directionsHref: MAPS_PLACE,
  email: 'contact@mygadgets.uk',
  hours: [
    { days: 'Monday – Friday', opens: '09:00', closes: '18:30' },
    { days: 'Saturday', opens: '09:30', closes: '17:30' },
    { days: 'Sunday', opens: 'Closed', closes: '' },
  ],
  hoursNote: 'Bank holiday hours posted on the door and on Google.',
  repairsWarranty: '3 months',
  refurbWarranty: '6 months',
  parking: 'Free 30-minute bays on the High Street outside the shop.',
  socials: {
    facebook: 'https://www.facebook.com/mygadgetsuk',
    instagram: 'https://www.instagram.com/mygadgetsuk',
    tiktok: 'https://www.tiktok.com/@mygadgetsuk',
    trustpilot: 'https://uk.trustpilot.com/review/mygadgetsuk.co.uk',
    gbp: MAPS_PLACE,
  },
} as const;

export const AREAS_COVERED = [
  { slug: 'whitton', name: 'Whitton', postcode: 'TW2' },
  { slug: 'twickenham', name: 'Twickenham', postcode: 'TW1' },
  { slug: 'hounslow', name: 'Hounslow', postcode: 'TW3' },
  { slug: 'feltham', name: 'Feltham', postcode: 'TW13' },
  { slug: 'isleworth', name: 'Isleworth', postcode: 'TW7' },
  { slug: 'hanworth', name: 'Hanworth', postcode: 'TW13' },
  { slug: 'teddington', name: 'Teddington', postcode: 'TW11' },
  { slug: 'st-margarets', name: 'St Margarets', postcode: 'TW1' },
  { slug: 'richmond', name: 'Richmond', postcode: 'TW9' },
  { slug: 'bedfont', name: 'Bedfont', postcode: 'TW14' },
  { slug: 'heston', name: 'Heston', postcode: 'TW5' },
] as const;

export function canonical(path: string): string {
  const p = path.endsWith('/') ? path : path + '/';
  return SITE.domain + p;
}
