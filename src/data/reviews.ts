// Real Google reviews for My Gadgets Whitton, captured verbatim from the
// Business Profile (google.com/maps/place/My+Gadgets+Whitton) on 2026-08-19.
// Per site policy (see Reviews.tsx): no fabricated or edited quotes — this
// is a manual snapshot until the Places API feed goes live.

export const GOOGLE_RATING = {
  average: 4.9,
  count: 90,
  profileUrl:
    'https://www.google.com/maps/place/My+Gadgets+Whitton/@51.4523375,-0.3580194,17z/data=!4m15!1m8!3m7!1s0x487673ebfed63241:0x8349bb9059d2bc27!2sMy+Gadgets+Whitton!8m2!3d51.4523533!4d-0.3578779!10e5!16s%2Fg%2F11x2kkpzpj!3m5!1s0x487673ebfed63241:0x8349bb9059d2bc27!8m2!3d51.4523533!4d-0.3578779!16s%2Fg%2F11x2kkpzpj',
};

export type GoogleReview = {
  name: string;
  reviewCount: string;
  rating: number;
  relativeTime: string;
  text: string;
  isNew?: boolean;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: 'Kashif Saeed',
    reviewCount: '2 reviews · 3 photos',
    rating: 5,
    relativeTime: 'a month ago',
    text: 'Great guys at My gadgets, sorted my laptop under 2 hours, been around many shops, great service on whitton high street, thank you and will definitely come again as saw that they have great deals on MacBooks too.',
  },
  {
    name: 'Jose Francisco Estribio',
    reviewCount: '6 reviews · 1 photo',
    rating: 5,
    relativeTime: 'a month ago',
    text: 'Fantastic and friendly team, always kind and ready to help. Variety of tech reasonably priced for resale. Anytime I needed any help they were there for me. Highly recommended trader, specialised in used and new Apple devices, specially Macbooks. I am very fortunate to be their customer for quite some time. 5* service and products :)',
  },
  {
    name: 'Eman wh',
    reviewCount: '3 reviews · 1 photo',
    rating: 5,
    relativeTime: '3 weeks ago',
    isNew: true,
    text: 'Highly recommend My Gadgets Ltd Whitton high street. They fixed my laptop quickly and did a fantastic job. The pricing is very reasonable, and they took the time to answer all of my queries without rushing me. Great service and super reliable!',
  },
  {
    name: 'Faddy Bakali',
    reviewCount: '2 reviews · 1 photo',
    rating: 5,
    relativeTime: 'a month ago',
    text: 'I recently purchased a MacBook Air and honestly couldn\'t be happier with both the product and the service I received. Communication was absolutely first-class throughout. Every question was answered promptly, professionally and honestly, giving me complete confidence in the purchase. It\'s rare these days to find someone who genuinely takes the time to keep customers informed every step of the way. Delivery was incredibly fast, with the MacBook arriving exactly as described and exceptionally well packaged. The condition "exceeded my expectations" and it was clear that great care had been taken to ensure everything arrived safely. 10/10',
  },
  {
    name: 'henry',
    reviewCount: '2 reviews',
    rating: 5,
    relativeTime: '3 weeks ago',
    isNew: true,
    text: "Really appreciate the staff here, gave me a really good deal on a used mac, were super friendly and helpful. Couldn't have asked for a better seller. Overall amazing experience",
  },
  {
    name: 'Louise Monocillo',
    reviewCount: '1 review',
    rating: 5,
    relativeTime: '5 months ago',
    text: 'Very happy with my experience here! The Macbook I purchased from them was working perfectly, and felt like I had just bought it brand new. When I had problems they sorted it out very quickly, and were very helpful throughout. Incredibly trustworthy and reliable. Thanks guys!',
  },
  {
    name: "Phoenix O'Neill",
    reviewCount: '1 review',
    rating: 5,
    relativeTime: '4 weeks ago',
    text: 'Came in with a Dell laptop that was refusing to connect to the internet. Staff were very friendly and knowledgable, and had the problem identified and fixed in 2-3 working days. Very good turnaround time and service quality!',
  },
  {
    name: 'Joti Sidhu',
    reviewCount: '3 reviews',
    rating: 5,
    relativeTime: '3 months ago',
    text: 'Just bought a top spec macbook pro from these guys, best prices around and top quality. Super happy with my purchase, will be my go-to for all things mac moving forward. Highly recommended. Super nice bunch of people to do business with.',
  },
  {
    name: 'Nadia Abdul',
    reviewCount: '4 reviews · 2 photos',
    rating: 5,
    relativeTime: 'Edited 4 weeks ago',
    text: 'Excellent service from My Gadgets Whitton! They fixed my laptop quickly, kept me informed throughout the process, and the price was fair and most affordable quote on the high street, Friendly, professional, and reliable, I wouldn\'t hesitate to recommend them.',
  },
];
