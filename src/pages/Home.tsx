import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Gamepad2,
  Laptop,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Star,
  Wrench,
} from "lucide-react";
import Seo from "@/components/Seo";
import Layout from "@/components/Layout";
import { SITE, AREAS_COVERED, canonical } from "@/data/site";
import { GOOGLE_RATING, GOOGLE_REVIEWS } from "@/data/reviews";
import { servicesByDevice } from "@/data/services";
import { LISTINGS } from "@/data/listings";

const DEVICES = [
  {
    slug: "macbook",
    label: "MacBook",
    Icon: Laptop,
    image: "/images/about-technician-bench.webp",
    alt: "A technician working inside a MacBook at a repair bench",
    title: "A fresh start for your Mac.",
    price: "£89",
    priceLabel: "Battery replacement from",
    link: "/repairs/macbook/",
  },
  {
    slug: "laptop",
    label: "Laptop",
    Icon: Laptop,
    image: "/images/laptop-screen-replacement.webp",
    alt: "Laptop screen repair at the workbench",
    title: "Back to work. And everything else.",
    price: "£79",
    priceLabel: "Screen replacement from",
    link: "/repairs/laptop/",
  },
  {
    slug: "iphone",
    label: "Phone",
    Icon: Smartphone,
    image: "/images/phone-screen-repair.webp",
    alt: "A phone being repaired at the workbench",
    title: "Keep the phone you love.",
    price: "£59",
    priceLabel: "iPhone screen repair from",
    link: "/repairs/iphone/",
  },
  {
    slug: "playstation",
    label: "Console",
    Icon: Gamepad2,
    image: "/images/about-logic-board-macro.webp",
    alt: "Close view of an electronic circuit board",
    title: "Less downtime. More game time.",
    price: "£70",
    priceLabel: "HDMI port repair from",
    link: "/repairs/console/",
  },
] as const;
const FAQS = [
  {
    q: "Can I just walk into the shop?",
    a: `Yes. Visit us at ${SITE.street}, Whitton, during opening hours. For a specific repair, call or WhatsApp first so we can check the part and expected turnaround.`,
  },
  {
    q: "How long will my repair take?",
    a: "Many phone screens and batteries take 30–60 minutes. MacBook screens are usually 2–4 hours. Board repairs and liquid damage take longer. We confirm the timing after checking your device and parts availability.",
  },
  {
    q: "Will I know the price before you start?",
    a: "Yes. Diagnosis is free and we give you a quote before starting work. Prices shown are starting prices; the final quote depends on your exact model and fault.",
  },
  {
    q: "Does my repair come with a warranty?",
    a: `Every repair comes with a written ${SITE.repairsWarranty} warranty. Refurbished devices come with ${SITE.refurbWarranty}. Ask us about the coverage for your repair before going ahead.`,
  },
  {
    q: "Do you repair Samsung phones, iPads and other devices?",
    a: "Yes. Alongside MacBooks, Windows laptops and iPhones, we repair Samsung Galaxy phones, iPads, iMacs, desktop PCs, PlayStation and Xbox consoles. Tell us your model and what has gone wrong.",
  },
];
function Stars() {
  return (
    <span className="lg-stars" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}
export default function Home() {
  const [selected, setSelected] = useState(0);
  const device = DEVICES[selected];
  const rows = servicesByDevice(device.slug).slice(0, 4);
  function switchWithKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % DEVICES.length;
    else if (event.key === "ArrowLeft")
      next = (index + DEVICES.length - 1) % DEVICES.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = DEVICES.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    event.currentTarget.parentElement
      ?.querySelectorAll("button")
      [next]?.focus();
  }
  return (
    <Layout>
      <Seo
        title="MacBook, Laptop & Phone Repair Whitton | My Gadgets"
        description="MacBook, laptop, phone and console repairs in Whitton, Twickenham. Free diagnosis, upfront quotes and a written warranty. Visit 23 High Street or get a quote."
        path="/"
        schema={{ "@type": "WebSite", name: SITE.name, url: canonical("/") }}
      />
      <div className="lg-home">
        <section className="lg-hero" aria-labelledby="home-title">
          <div className="lg-hero-glow" aria-hidden="true" />
          <div className="container-12 lg-hero-grid">
            <div className="lg-hero-copy">
              <p className="lg-eyebrow">
                <MapPin size={15} /> YOUR LOCAL REPAIR SPECIALISTS
              </p>
              <h1 id="home-title">
                Back to life.
                <br />
                <span>Back to you.</span>
                <span className="lg-hero-service-line">
                  MacBook, laptop, phone &amp; console repair in Whitton,
                  Twickenham
                </span>
              </h1>
              <p className="lg-hero-description">
                Visit 23 High Street for expert care for the tech you rely on.
                Free diagnosis and a clear quote before work starts.
              </p>
              <div className="lg-hero-actions">
                <Link to="/book/" className="lg-button lg-button-lime">
                  Get a repair quote <ArrowUpRight size={19} />
                </Link>
                <a href="#visit" className="lg-button lg-button-glass">
                  <MapPin size={17} /> Find our shop
                </a>
              </div>
              <p className="lg-hero-promise">
                <Check size={15} /> Free diagnosis <span /> A clear quote before
                we start
              </p>
              <div className="lg-hero-review">
                <span className="lg-google" aria-hidden="true">
                  G
                </span>
                <div>
                  <Stars />
                  <Link to="/reviews/">
                    <strong>{GOOGLE_RATING.average.toFixed(1)}/5</strong> ·{" "}
                    {GOOGLE_RATING.count} Google reviews{" "}
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg-showcase">
              <div className="lg-showcase-top">
                <span>GOOD TECH. IN GOOD HANDS.</span>
                <Wrench size={16} />
              </div>
              <div
                className="lg-device-tabs"
                role="tablist"
                aria-label="Choose your repair device"
              >
                {DEVICES.map(({ slug, label, Icon }, i) => (
                  <button
                    key={slug}
                    id={`device-tab-${slug}`}
                    role="tab"
                    aria-selected={selected === i}
                    aria-controls="device-panel"
                    tabIndex={selected === i ? 0 : -1}
                    onClick={() => setSelected(i)}
                    onKeyDown={(e) => switchWithKey(e, i)}
                  >
                    <Icon size={17} />
                    {label}
                  </button>
                ))}
              </div>
              <div
                className="lg-device-panel"
                id="device-panel"
                role="tabpanel"
                aria-labelledby={`device-tab-${device.slug}`}
              >
                <img
                  key={device.image}
                  className="lg-device-image"
                  src={device.image}
                  alt={device.alt}
                  width="600"
                  height="650"
                  fetchPriority="high"
                />
                <div className="lg-warranty-bubble">
                  <ShieldCheck size={24} />
                  <strong>
                    3 month<span>repair warranty</span>
                  </strong>
                </div>
                <div className="lg-device-caption">
                  <p>
                    {device.priceLabel} <strong>{device.price}</strong>
                  </p>
                  <h2>{device.title}</h2>
                  <Link
                    to={device.link}
                    aria-label={`Explore ${device.label} repairs`}
                  >
                    <ArrowUpRight size={23} />
                  </Link>
                </div>
              </div>
              <div className="lg-showcase-bottom">
                <span>REPAIR. REUSE. KEEP GOING.</span>
                <ShieldCheck size={16} />
              </div>
            </div>
          </div>
          <div className="container-12 lg-hero-foot">
            <span>
              <MapPin size={15} /> 23 High Street, Whitton · TW2 7LB
            </span>
            <a href="#repairs">
              Explore repairs <ArrowDown size={15} />
            </a>
          </div>
        </section>
        <div className="lg-assurances">
          <div className="container-12">
            <span>
              <Wrench size={20} />
              <strong>Free diagnostics</strong>
            </span>
            <span>
              <Check size={20} />
              <strong>Upfront pricing</strong>
            </span>
            <span>
              <Clock3 size={20} />
              <strong>Same-day options</strong>
            </span>
            <span>
              <ShieldCheck size={20} />
              <strong>Written warranty</strong>
            </span>
          </div>
        </div>
        <section id="repairs" className="container-12 lg-section">
          <div className="lg-section-heading">
            <div>
              <p className="lg-eyebrow">A FIX FOR THE EVERYDAY</p>
              <h2>What needs a little care?</h2>
            </div>
            <Link to="/repairs/" className="lg-text-link">
              All repair services <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="lg-service-grid">
            {[
              {
                image: "/images/macbook-screen-replacement.webp",
                title: "MacBook & laptop",
                text: "Cracked screens, tired batteries or a machine that won’t start. Let’s take a look.",
                meta: "MacBook screens from £129",
                href: "/repairs/macbook/",
                tag: "WORK. CREATE. CONNECT.",
              },
              {
                image: "/images/phone-screen-repair.webp",
                title: "Phone & tablet",
                text: "Screens, batteries and charging problems. Get your everyday essential back.",
                meta: "iPhone screens from £59",
                href: "/repairs/iphone/",
                tag: "YOUR WORLD. RECONNECTED.",
              },
              {
                image: "/images/about-logic-board-macro.webp",
                title: "PlayStation & Xbox",
                text: "No picture, no power or running too hot? We’ll get to the heart of the problem.",
                meta: "HDMI port repairs from £70",
                href: "/repairs/console/",
                tag: "READY FOR THE NEXT LEVEL.",
              },
            ].map((service) => (
              <Link
                className="lg-service"
                to={service.href}
                key={service.title}
              >
                <div className="lg-service-image">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <span>{service.tag}</span>
                  <span className="lg-round-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="lg-service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <strong>{service.meta}</strong>
                </div>
              </Link>
            ))}
          </div>
          <div className="lg-more-devices">
            <span>More devices, same expert care.</span>
            {[
              ["/repairs/samsung/", "Samsung"],
              ["/repairs/ipad/", "iPad"],
              ["/repairs/imac/", "iMac"],
              ["/repairs/pc/", "Desktop PC"],
            ].map(([href, label]) => (
              <Link key={href} to={href}>
                {label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </section>
        <section className="lg-price-section">
          <div className="container-12 lg-section lg-price-grid">
            <div>
              <p className="lg-eyebrow">LET’S MAKE IT SIMPLE</p>
              <h2>
                Great repairs.
                <br />
                Clear prices.
              </h2>
              <p className="lg-body">
                No guesswork. No work without your go-ahead. We check your
                device and confirm the quote first.
              </p>
              <Link to="/repairs/prices/" className="lg-text-link">
                See every repair price <ArrowUpRight size={18} />
              </Link>
              <p className="lg-price-note">
                Starting prices depend on model and fault. Turnaround depends on
                parts and diagnosis.
              </p>
            </div>
            <div className="lg-price-card">
              <label className="lg-select-label" htmlFor="price-device">
                Choose your device
              </label>
              <select
                id="price-device"
                value={selected}
                onChange={(e) => setSelected(Number(e.target.value))}
              >
                {DEVICES.map((d, i) => (
                  <option key={d.slug} value={i}>
                    {d.label}
                  </option>
                ))}
              </select>
              <div className="lg-price-rows">
                {rows.map((service) => (
                  <Link key={service.slug} to={`/repairs/${service.slug}/`}>
                    <span>
                      <strong>{service.name}</strong>
                      <small>{service.turnaround}</small>
                    </span>
                    <span>
                      {service.fromPrice}
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                className="lg-button lg-button-dark"
                to={`/book/?device=${device.slug}`}
              >
                Get my repair quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        <section className="container-12 lg-section lg-local-grid" id="visit">
          <div className="lg-shop-photo">
            <img
              src="/images/storefront.webp"
              alt="My Gadgets shop at 23 High Street, Whitton"
              width="1376"
              height="774"
              loading="lazy"
            />
            <div className="lg-shop-photo-label">
              <MapPin size={19} />
              <span>
                Real people. A real local shop.
                <strong>23 High Street · Whitton</strong>
              </span>
              <ArrowUpRight size={20} />
            </div>
          </div>
          <div className="lg-local-copy">
            <p className="lg-eyebrow">JUST AROUND THE CORNER</p>
            <h2>
              Your tech.
              <br />
              Our neighbourhood.
            </h2>
            <p className="lg-body">
              Pop into our Whitton High Street shop and speak to the people
              fixing your device. From a quick battery swap to a complex board
              repair, we’ll talk you through your options.
            </p>
            <div className="lg-process">
              <div>
                <span>01</span>
                <p>
                  <strong>Tell us what’s wrong</strong>Walk in, call or send a
                  photo on WhatsApp.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Get a clear quote</strong>Free diagnosis. You decide
                  before we start.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Pick up. Power on.</strong>Quality checked, with your
                  warranty in writing.
                </p>
              </div>
            </div>
            <div className="lg-opening-hours">
              {SITE.hours.map((h) => (
                <div key={h.days}>
                  <span>{h.days}</span>
                  <strong>
                    {h.opens === "Closed" ? "Closed" : `${h.opens}–${h.closes}`}
                  </strong>
                </div>
              ))}
            </div>
            <div className="lg-visit-actions">
              <a
                href={SITE.directionsHref}
                target="_blank"
                rel="noopener"
                className="lg-button lg-button-dark"
              >
                <MapPin size={17} /> Get directions
              </a>
              <a href={SITE.landlineHref} className="lg-text-link">
                <Phone size={16} />
                {SITE.landlineDisplay}
              </a>
            </div>
            <p className="lg-price-note">
              {SITE.parking} {SITE.hoursNote}
            </p>
          </div>
        </section>
        <section className="lg-review-section">
          <div className="container-12 lg-section">
            <div className="lg-section-heading">
              <div>
                <p className="lg-eyebrow">LOCAL PEOPLE. HAPPY DEVICES.</p>
                <h2>A good word goes a long way.</h2>
              </div>
              <Link to="/reviews/" className="lg-rating-link">
                <Stars />
                <span>
                  <strong>{GOOGLE_RATING.average.toFixed(1)}/5</strong> on
                  Google <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
            <div className="lg-review-grid">
              {[GOOGLE_REVIEWS[0], GOOGLE_REVIEWS[2], GOOGLE_REVIEWS[6]].map(
                (review) => (
                  <figure key={review.name} className="lg-review">
                    <Stars />
                    <blockquote>{review.text}</blockquote>
                    <figcaption>
                      <span>{review.name.charAt(0)}</span>
                      <div>
                        <strong>{review.name}</strong>
                        <small>Google review</small>
                      </div>
                      <span className="lg-google">G</span>
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
            <p className="lg-price-note">
              Google rating checked {GOOGLE_RATING.checkedOn}. Read the latest
              reviews on Google.
            </p>
          </div>
        </section>
        <section className="container-12 lg-section">
          <div className="lg-refurb-banner">
            <div>
              <p className="lg-eyebrow">A SECOND LIFE. A SMARTER BUY.</p>
              <h2>Meet your next MacBook.</h2>
              <p>
                Refurbished, tested and ready for a fresh start.
                <br />
                {SITE.refurbWarranty} warranty included.
              </p>
              <Link to="/shop/" className="lg-button lg-button-glass">
                Explore refurbished tech <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="lg-refurb-product">
              <img
                src={LISTINGS[0].photoHero}
                alt="Refurbished silver MacBook Air"
                width="1200"
                height="896"
                loading="lazy"
              />
              <span>
                MacBooks, iMacs &amp; more <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </section>
        <section className="container-12 lg-section lg-faq-section">
          <div>
            <p className="lg-eyebrow">A FEW THINGS YOU MIGHT ASK</p>
            <h2>
              Good questions.
              <br />
              Straight answers.
            </h2>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener"
              className="lg-text-link"
            >
              <MessageCircle size={18} /> Ask us on WhatsApp{" "}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div>
            {FAQS.map((faq) => (
              <details className="lg-faq" key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="container-12 lg-areas">
          <p className="lg-eyebrow">WHITTON &amp; THE NEIGHBOURHOOD</p>
          <h2>Local care, a little further.</h2>
          <div>
            {AREAS_COVERED.map((area) => (
              <Link to={`/areas/${area.slug}/`} key={area.slug}>
                {area.name}
                <span>{area.postcode}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="lg-final-cta">
          <div className="container-12">
            <p className="lg-eyebrow">LET’S GET YOU UP AND RUNNING</p>
            <h2>
              Good tech deserves
              <br />
              <span>another chance.</span>
            </h2>
            <div>
              <Link to="/book/" className="lg-button lg-button-lime">
                Get a repair quote <ArrowUpRight size={19} />
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener"
                className="lg-button lg-button-glass"
              >
                <MessageCircle size={18} /> WhatsApp us
              </a>
            </div>
            <p>Visit 23 High Street, Whitton · {SITE.postcode}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
