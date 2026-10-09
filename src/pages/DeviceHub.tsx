import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { DEVICE_HUBS, servicesByDevice } from '@/data/services';
import { MODELS } from '@/data/models';
import NotFound from './NotFound';

export default function DeviceHub() {
  const { device } = useParams();
  const hub = DEVICE_HUBS.find((d) => d.slug === device);
  if (!hub) return <NotFound />;
  const services = servicesByDevice(hub.slug);
  const deviceModels = MODELS.filter((m) => m.device.toLowerCase() === hub.slug || (hub.slug === 'samsung' && m.device === 'Galaxy') || (hub.slug === 'laptop' && false));

  return (
    <Layout>
      <Seo
        title={`${hub.label} repairs — prices & turnaround | My Gadgets UK, Whitton`}
        description={`${hub.label} repairs on Whitton High Street: ${services.map((s) => s.name.toLowerCase()).join(', ')}. Prices in writing, most same day, 3-month warranty.`}
        path={`/repairs/${hub.slug}/`}
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Repairs', path: '/repairs/' },
          { name: hub.label, path: `/repairs/${hub.slug}/` },
        ])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Repairs', path: '/repairs/' }, { name: hub.label }]} />
        <div className="grid-12" style={{ marginBottom: 56 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>{hub.label} repairs</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>{hub.blurb}</p>
          </div>
        </div>

        <div className="grid-12" style={{ marginBottom: 72 }}>
          {services.map((s) => (
            <Reveal key={s.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Docket
                id={s.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
                title={s.name}
                href={`/repairs/${s.slug}/`}
                rows={[
                  { k: 'FROM', v: s.fromPrice, price: true },
                  { k: 'TURNAROUND', v: s.turnaround, ok: true },
                  { k: 'WARRANTY', v: '3 months' },
                ]}
              />
            </Reveal>
          ))}
        </div>

        {deviceModels.length > 0 && (
          <Reveal>
            <div className="grid-12">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>By model</h2>
                <p className="text-muted">Your exact model, with every fault priced.</p>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <div className="link-list">
                  {deviceModels.map((m) => (
                    <Link key={m.slug} to={`/repairs/models/${m.slug}/`}>
                      <span>{m.name} <span style={{ color: '#6B7280' }}>· {m.identifier}</span></span>
                      <span className="arrow">{m.year} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </section>
    </Layout>
  );
}
