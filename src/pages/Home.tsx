import { Link } from 'react-router';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Map from '@/components/Map';
import { SITE, AREAS_COVERED, canonical } from '@/data/site';
import { LISTINGS } from '@/data/listings';
import ActionRow from '@/components/ActionRow';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import DeviceSelector from '@/components/home/DeviceSelector';
import OfferBanner from '@/components/home/OfferBanner';
import PopularServices from '@/components/home/PopularServices';
import HowItWorks from '@/components/home/HowItWorks';
import PricingPreview from '@/components/home/PricingPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import HomeFaq from '@/components/home/HomeFaq';

export default function Home() {
  return (
    <Layout>
      <Seo
        title="MacBook & Laptop Repair Whitton, Twickenham | My Gadgets Whitton"
        description="MacBook, laptop and console repair on Whitton High Street, Twickenham. Screens, SSD upgrades, PlayStation and Xbox HDMI ports. Refurbished MacBooks in stock."
        path="/"
        schema={{
          '@type': 'WebSite',
          name: SITE.name,
          url: canonical('/'),
        }}
      />

      <Hero />
      <TrustStrip />
      <PopularServices />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />

      {/* --------------------------- IN THE SHOP --------------------------- */}
      <section className="band">
        <div className="container-12 section-pad">
          <Reveal>
            <div className="grid-12" style={{ alignItems: 'end', marginBottom: 48 }}>
              <div className="col-span-12 lg:col-span-7">
                <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 14 }}>Refurbished · graded, tested, warrantied</p>
                <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>In the shop now</h2>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <p style={{ margin: 0, color: '#4B5563' }}>
                  Every unit is one exact machine — cycle count shown, every mark described, {SITE.refurbWarranty} warranty in the box.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid-12">
            {LISTINGS.filter((l) => l.status === 'in stock').slice(0, 3).map((l) => (
              <Reveal key={l.slug} className="col-span-12 md:col-span-4">
                <Docket
                  id={`STK-${l.identifier}`}
                  title={`${l.name} · ${l.year}`}
                  href={`/shop/${l.slug}/`}
                  image={l.photoHero}
                  imageAlt={l.photoHero ? `${l.name} ${l.year}, grade ${l.grade}` : undefined}
                  rows={[
                    { k: 'SPEC', v: `${l.cpu.split(',')[0]} · ${l.ram} · ${l.ssd}` },
                    { k: 'BATTERY', v: `${l.cycles > 0 ? `${l.cycles} cycles · ` : ''}${l.batteryHealth}% health`, ok: true },
                    { k: 'GRADE', v: `${l.grade} — marks described on listing` },
                    { k: 'WARRANTY', v: SITE.refurbWarranty },
                    { k: 'PRICE', v: `£${l.price}`, price: true },
                  ]}
                />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <Link to="/shop/" className="btn btn-ghost">Browse the shelf →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <DeviceSelector />
      <PricingPreview />
      <OfferBanner />
      <HomeFaq />

      {/* ------------------------------ AREAS ------------------------------ */}
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Coverage</p>
              <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Areas we cover</h2>
              <p style={{ color: '#5c564e' }}>
                Within four miles of the bench. Each area page has real travel times, prices and a job we have actually done from that area.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="area-grid">
                {AREAS_COVERED.map((a) => (
                  <Link key={a.slug} to={`/areas/${a.slug}/`} className="area-chip">
                    <span>{a.name}</span>
                    <span className="mono">{a.postcode}</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ FIND US ------------------------------ */}
      <section className="band">
        <div className="container-12 section-pad">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Find us</p>
                <h2 className="display-l" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Whitton High Street</h2>
                <address style={{ fontStyle: 'normal', color: 'var(--bench-ink)', marginTop: 16, marginBottom: 20 }}>
                  {SITE.name}<br />
                  {SITE.street}, {SITE.locality}<br />
                  {SITE.region} {SITE.postcode}
                </address>
                <p style={{ color: '#5c564e' }}>{SITE.landmark} {SITE.parking}</p>
                <div className="hours-list">
                  {SITE.hours.map((h) => (
                    <div key={h.days}>
                      <span>{h.days}</span>
                      <span className="mono">{h.opens === 'Closed' ? 'Closed' : `${h.opens}–${h.closes}`}</span>
                    </div>
                  ))}
                </div>
                <p className="small" style={{ marginTop: 12, color: '#5c564e' }}>{SITE.hoursNote}</p>
                <div style={{ marginTop: 24 }}>
                  <ActionRow whatsappLabel="WhatsApp us" />
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Reveal>
                <Map />
              </Reveal>
              <Reveal>
                <figure
                  style={{
                    margin: '24px 0 0',
                    aspectRatio: '16 / 9',
                    borderRadius: 'var(--radius-card)',
                    overflow: 'hidden',
                    border: '1px solid var(--bench-rule)',
                  }}
                >
                  <img
                    src="/images/storefront.webp"
                    alt="My Gadgets UK shop front on Whitton High Street"
                    width={1376}
                    height={774}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      </Layout>
  );
}
