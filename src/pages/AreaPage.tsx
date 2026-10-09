import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema, faqSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import Map from '@/components/Map';
import { getArea } from '@/data/areas';
import { SERVICES } from '@/data/services';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NotFound from './NotFound';

// Area page template — satisfies §5.2: unique copy, real anchoring,
// travel module, a real job docket, area FAQs, distinct intent.
export default function AreaPage() {
  const { slug } = useParams();
  const area = getArea(slug ?? '');
  if (!area) return <NotFound />;
  const path = `/areas/${area.slug}/`;
  const featured = SERVICES.slice(0, 6);

  return (
    <Layout>
      <Seo
        title={`${area.headline} | My Gadgets UK`}
        description={area.metaDescription}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas', path: '/areas/whitton/' },
            { name: area.name, path },
          ]),
          faqSchema(area.faqs),
        ]}
      />

      <section className="container-12" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Areas' }, { name: area.name }]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="label text-muted" style={{ marginBottom: 16 }}>{area.name} · {area.postcode}</p>
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>{area.headline}</h1>
            {area.intro.map((p) => (
              <p key={p.slice(0, 20)} className="body-copy text-muted" style={{ fontSize: '1.0625rem', marginTop: 20 }}>{p}</p>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/book/" className="btn btn-signal">Get a price</Link>
              <a href={SITE.phoneHref} className="btn btn-ghost mono" style={{ fontSize: '0.875rem' }}>Call {SITE.phoneDisplay}</a>
            </div>
          </div>

          {/* Distance / route module */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9" style={{ marginTop: 24 }}>
            <Reveal>
              <Docket
                id={`RT-${area.postcode}`}
                title={`${area.name} → Whitton High Street`}
                rows={area.travel.map((t) => ({ k: t.mode.toUpperCase(), v: t.time }))}
              />
              <ul style={{ margin: '16px 0 0', padding: 0, listStyle: 'none' }}>
                {area.travel.map((t) => (
                  <li key={t.mode} className="small text-muted" style={{ padding: '10px 0', borderBottom: '1px solid var(--bench-rule)' }}>
                    <span className="mono" style={{ color: 'var(--bench-ink)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.mode} · </span>
                    {t.detail}
                  </li>
                ))}
              </ul>
              <p className="small" style={{ color: 'var(--signal)', marginTop: 14 }}>{area.anchorNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services with prices */}
      <section style={{ background: '#FFFFFF', borderBlock: '1px solid var(--bench-rule)' }}>
        <div className="container-12 section-pad">
          <Reveal>
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Repairs from {area.name}, priced here</h2>
            <p className="text-muted body-copy">Same prices as walking in off the High Street — because that is exactly what you are doing.</p>
          </Reveal>
          <div className="grid-12" style={{ marginTop: 32 }}>
            {featured.map((s) => (
              <Reveal key={s.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
                <Docket
                  id={s.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
                  title={`${s.deviceLabel} ${s.name.toLowerCase()}`}
                  href={`/repairs/${s.slug}/`}
                  rows={[
                    { k: 'FROM', v: s.fromPrice, price: true },
                    { k: 'TURNAROUND', v: s.turnaround, ok: true },
                  ]}
                />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to="/repairs/prices/" className="btn btn-ghost" style={{ marginTop: 32 }}>Full price list →</Link>
          </Reveal>
        </div>
      </section>

      {/* A real job from this area */}
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>A recent job from {area.name}</h2>
              <p className="text-muted body-copy">
                Real dockets from real repairs — the same record you get with yours. (Client-supplied completed jobs replace these examples at launch.)
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal>
              <Docket
                id={area.job.ticket.replace('MG-', '')}
                title={area.job.device}
                rows={[
                  { k: 'FAULT', v: area.job.fault },
                  { k: 'PART', v: area.job.part },
                  { k: 'TURNAROUND', v: area.job.turnaround, ok: true },
                  { k: 'PRICE', v: area.job.price, price: true },
                  { k: 'OUTCOME', v: area.job.outcome },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Area FAQs */}
      <section style={{ borderTop: '1px solid var(--bench-rule)' }}>
        <div className="container-12 section-pad">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-4">
              <Reveal><h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>{area.name} questions</h2></Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <Reveal>
                {area.faqs.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary>{f.q}<span className="faq-marker">+</span></summary>
                    <div className="faq-body">{f.a}</div>
                  </details>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid var(--bench-rule)' }}>
        <div className="container-12 section-pad">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div className="col-span-12 lg:col-span-6">
              <Reveal><Map /></Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Reveal>
                <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Fifteen minutes from {area.name} to a fixed quote</h2>
                <p className="text-muted body-copy">
                  {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}. {SITE.hours[0].days} {SITE.hours[0].opens}–{SITE.hours[0].closes}, Saturday {SITE.hours[1].opens}–{SITE.hours[1].closes}.
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
                  <Link to="/book/" className="btn btn-signal">Book a repair</Link>
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><WhatsAppIcon size={18} /> WhatsApp us</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
