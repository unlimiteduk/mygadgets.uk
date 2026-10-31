import { Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { DEVICE_HUBS, servicesByDevice } from '@/data/services';
import { SITE } from '@/data/site';

export default function RepairsHub() {
  return (
    <Layout>
      <Seo
        title={`Computer, MacBook, laptop and console repairs | ${SITE.name}`}
        description="MacBook, laptop, PlayStation, Xbox, iMac and PC repairs on Whitton High Street, plus the priced phone and tablet work already on this site. Free diagnosis. Quote before any work."
        path="/repairs/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Repairs', path: '/repairs/' }])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Repairs' }]} />
        <div className="grid-12" style={{ marginBottom: 64 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Repairs, priced before we start</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>
              Where a price is printed, that is the fitted price. Console, iMac, PC and some laptop jobs are quoted after a free diagnosis, because the part depends on the machine. If we cannot fix it, you pay nothing.
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
                {services.length > 0 ? (
                <div className="grid-12">
                  {services.map((s) => (
                    <div key={s.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
                      <Docket
                        id={s.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
                        title={`${d.label} ${s.name.toLowerCase()}`}
                        href={`/repairs/${s.slug}/`}
                        rows={s.quoteOnly ? [
                          { k: 'QUOTE', v: 'At the bench' },
                          { k: 'DIAGNOSIS', v: 'Free' },
                          { k: 'WARRANTY', v: SITE.repairsWarranty },
                        ] : [
                          { k: 'FROM', v: s.fromPrice, price: true },
                          { k: 'TURNAROUND', v: s.turnaround, ok: true },
                          { k: 'WARRANTY', v: SITE.repairsWarranty },
                        ]}
                      />
                    </div>
                  ))}
                </div>
                ) : (
                  <div className="link-list">
                    {(d.links ?? []).map((l) => (
                      <Link key={l.href} to={l.href}>
                        <span>{l.label}</span>
                        <span className="arrow">{l.note ?? 'View'} →</span>
                      </Link>
                    ))}
                  </div>
                )}
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
