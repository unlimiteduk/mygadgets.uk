import { Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { DEVICE_HUBS, servicesByDevice } from '@/data/services';

export default function RepairsHub() {
  return (
    <Layout>
      <Seo
        title="Computer & Laptop Repairs — MacBook, Windows, iPhone, Samsung, iPad | My Gadgets UK, Whitton"
        description="Every repair we do, with the price in writing: MacBook and Windows laptop computer repair, plus iPhone, Samsung Galaxy and iPad. Same-day on most, 3-month warranty on all. Whitton High Street."
        path="/repairs/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Repairs', path: '/repairs/' }])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Repairs' }]} />
        <div className="grid-12" style={{ marginBottom: 64 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Repairs, priced before we start</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>
              Every service below has a real price and a real turnaround. Diagnosis is free, the quote is fixed in writing, and if we cannot fix it you pay nothing.
            </p>
          </div>
        </div>

        {DEVICE_HUBS.map((d) => {
          const services = servicesByDevice(d.slug);
          return (
            <Reveal key={d.slug}>
              <div style={{ marginBottom: 72 }}>
                <div className="grid-12" style={{ alignItems: 'baseline', marginBottom: 24 }}>
                  <div className="col-span-12 lg:col-span-4">
                    <h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>
                      <Link to={`/repairs/${d.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>{d.label} →</Link>
                    </h2>
                    <p className="small text-muted" style={{ marginTop: 8, marginBottom: 0 }}>{d.blurb}</p>
                  </div>
                </div>
                <div className="grid-12">
                  {services.map((s) => (
                    <div key={s.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
                      <Docket
                        id={s.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
                        title={`${d.label} ${s.name.toLowerCase()}`}
                        href={`/repairs/${s.slug}/`}
                        rows={[
                          { k: 'FROM', v: s.fromPrice, price: true },
                          { k: 'TURNAROUND', v: s.turnaround, ok: true },
                          { k: 'WARRANTY', v: '3 months' },
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="panel" style={{ padding: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
            <div>
              <h3 className="h3" style={{ margin: '0 0 6px', color: 'var(--bench-ink)' }}>Just want the numbers?</h3>
              <p className="text-muted" style={{ margin: 0 }}>The full price list, filterable by device, on one page.</p>
            </div>
            <Link to="/repairs/prices/" className="btn btn-signal">Full price list →</Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
