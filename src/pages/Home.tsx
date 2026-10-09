import { Link } from 'react-router';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Map from '@/components/Map';
import { SITE, AREAS_COVERED } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { LISTINGS } from '@/data/listings';
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
        title="My Gadgets UK — Computer, MacBook & Laptop Repairs, Whitton High Street"
        description="Computer repair specialists on Whitton High Street, TW2: MacBook and Windows laptop screens, batteries, logic boards and virus removal, plus iPhone, iPad and Samsung. Most back the same day, prices in writing. Refurbished MacBooks with a 6-month warranty."
        path="/"
        schema={{
          '@type': 'WebSite',
          name: SITE.name,
          url: SITE.domain,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE.domain}/repairs/prices/?q={query}`,
            'query-input': 'required name=query',
          },
        }}
      />

      <Hero />
      <TrustStrip />
      <DeviceSelector />
      <OfferBanner />
      <PopularServices />

      {/* --------------------------- IN THE SHOP --------------------------- */}
      <section style={{ background: '#FFFFFF', borderBlock: '1px solid var(--bench-rule)' }}>
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

      <HowItWorks />
      <PricingPreview />
      <WhyChooseUs />
      <Testimonials />
      <HomeFaq />

      {/* ------------------------------ FIND US ------------------------------ */}
      <section style={{ background: '#FFFFFF', borderBlock: '1px solid var(--bench-rule)' }}>
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
                <p style={{ color: '#4B5563' }}>{SITE.landmark} {SITE.parking}</p>
                <div style={{ marginTop: 20, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>
                  {SITE.hours.map((h) => (
                    <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 320, paddingBlock: 8, borderBottom: '1px solid var(--bench-rule)' }}>
                      <span style={{ color: '#6B7280' }}>{h.days}</span>
                      <span className="mono">{h.opens === 'Closed' ? 'Closed' : `${h.opens}–${h.closes}`}</span>
                    </div>
                  ))}
                </div>
                <p className="small" style={{ marginTop: 12, color: '#6B7280' }}>{SITE.hoursNote}</p>
                <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                  <a href={SITE.phoneHref} className="btn btn-signal">Call the shop</a>
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><WhatsAppIcon size={18} /> WhatsApp us</a>
                  <a href="https://maps.google.com/?q=My+Gadgets+UK+Whitton+High+Street" target="_blank" rel="noopener" className="btn btn-ghost">Directions</a>
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ AREAS ------------------------------ */}
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Coverage</p>
              <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Areas we cover</h2>
              <p style={{ color: '#4B5563' }}>
                Within four miles of the bench. Each area page has real travel times, prices and a job we have actually done from that area.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="link-list">
                {AREAS_COVERED.map((a) => (
                  <Link key={a.slug} to={`/areas/${a.slug}/`}>
                    <span>{a.name}</span>
                    <span className="arrow">{a.postcode} →</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
