import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema, faqSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { getModel } from '@/data/models';
import { LISTINGS } from '@/data/listings';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NotFound from './NotFound';

// Model page (brief §5.3/§6) — auto-composed from the model table.
export default function ModelPage() {
  const { slug } = useParams();
  const model = getModel(slug ?? '');
  if (!model) return <NotFound />;

  const path = `/repairs/models/${model.slug}/`;
  const inStock = LISTINGS.filter(
    (l) => l.status === 'in stock' && l.identifier === model.identifier
  );

  return (
    <Layout>
      <Seo
        title={`${model.name} (${model.identifier}) repair prices | ${SITE.name}`}
        description={`${model.name} repairs in Whitton: ${model.faults.map((f) => `${f.label.toLowerCase()} ${f.price}`).join(', ')}. Most same day, ${model.warranty} warranty, free diagnosis.`}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Repairs', path: '/repairs/' },
            { name: 'Models', path: '/repairs/prices/' },
            { name: model.name, path },
          ]),
          faqSchema(model.faqs),
        ]}
      />
      <section className="container-12" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Crumbs items={[
          { name: 'Home', path: '/' },
          { name: 'Repairs', path: '/repairs/' },
          { name: model.device, path: `/repairs/${model.device.toLowerCase() === 'galaxy' ? 'samsung' : model.device.toLowerCase()}/` },
          { name: model.name },
        ]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>{model.name} repairs</h1>
            <p className="mono" style={{ color: '#6B7280', marginTop: 14 }}>
              {model.identifier} · {model.year}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Docket
              id={model.identifier.replace(/[^A-Z0-9]/gi, '').slice(0, 6)}
              title={model.name}
              rows={[
                { k: 'IDENTIFIER', v: model.identifier },
                { k: 'YEAR', v: String(model.year) },
                { k: 'WARRANTY', v: model.warranty },
                { k: 'DIAGNOSIS', v: 'Free', ok: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Faults & prices */}
      <section className="container-12" style={{ paddingBottom: 96 }}>
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>Faults and fitted prices</h2>
              <p className="text-muted" style={{ marginTop: 12 }}>
                Part grades for this model: {model.partGrades}. Every job carries a {model.warranty} warranty.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="panel" style={{ overflowX: 'auto' }}>
                <table className="price-table">
                  <thead>
                    <tr><th>Fault</th><th>Price</th><th>Turnaround</th><th></th></tr>
                  </thead>
                  <tbody>
                    {model.faults.map((f) => (
                      <tr key={f.label}>
                        <td style={{ color: 'var(--bench-ink)', fontWeight: 500 }}>{f.label}</td>
                        <td className="num" style={{ color: 'var(--signal)' }}>{f.price}</td>
                        <td className="num" style={{ color: '#6B7280' }}>{f.turnaround}</td>
                        <td style={{ textAlign: 'right' }}>
                          <Link to={`/repairs/${f.serviceSlug}/`} className="small mono" style={{ color: '#6B7280' }}>
                            Details →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/book/" className="btn btn-signal">Book this model in</Link>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><WhatsAppIcon size={18} /> WhatsApp a photo of the fault</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trade-in + refurb cross-links */}
      <section style={{ background: '#FFFFFF', borderBlock: '1px solid var(--bench-rule)' }}>
        <div className="container-12" style={{ paddingBlock: 64 }}>
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>We also buy this model</h2>
                <p className="text-muted body-copy">
                  {model.tradeIn}. Bring it in for a firm offer, paid the same day — working, broken or water-damaged.
                </p>
                <Link to="/sell-your-device/" className="btn btn-ghost" style={{ marginTop: 8 }}>Sell your {model.device === 'Galaxy' ? 'Samsung' : model.device} →</Link>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Reveal>
                <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>In stock refurbished</h2>
                {inStock.length > 0 ? (
                  <div style={{ display: 'grid', gap: 16 }}>
                    {inStock.map((l) => (
                      <Docket
                        key={l.slug}
                        id={`STK-${l.identifier}`}
                        title={`${l.name} · grade ${l.grade}`}
                        href={`/shop/${l.slug}/`}
                        rows={[
                          { k: 'SPEC', v: `${l.cpu.split(',')[0]} · ${l.ram} · ${l.ssd}` },
                          { k: 'PRICE', v: `£${l.price}`, price: true },
                        ]}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted body-copy">
                    None on the shelf today. Ask on WhatsApp — stock turns over weekly, and we will message you when one lands.
                  </p>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Model FAQ */}
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal><h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>{model.name} questions</h2></Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal>
              {model.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}<span className="faq-marker">+</span></summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
