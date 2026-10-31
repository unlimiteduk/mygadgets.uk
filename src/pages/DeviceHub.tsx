import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema, faqSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import AreaLinks from '@/components/AreaLinks';
import RepairCta from '@/components/RepairCta';
import { DEVICE_HUBS, servicesByDevice } from '@/data/services';
import { MODELS } from '@/data/models';
import { SITE } from '@/data/site';
import NotFound from './NotFound';

export default function DeviceHub() {
  const { device } = useParams();
  const hub = DEVICE_HUBS.find((d) => d.slug === device);
  if (!hub) return <NotFound />;
  const services = servicesByDevice(hub.slug);
  const deviceModels = MODELS.filter((m) => m.device.toLowerCase() === hub.slug || (hub.slug === 'samsung' && m.device === 'Galaxy') || (hub.slug === 'laptop' && false));
  const path = `/repairs/${hub.slug}/`;
  const title = hub.title ? `${hub.title} | ${SITE.name}` : `${hub.label} repairs — Whitton | ${SITE.name}`;
  const description = hub.metaDescription ?? `${hub.label} repairs on Whitton High Street: ${services.map((s) => s.name.toLowerCase()).join(', ')}. Prices in writing where we publish them, ${SITE.repairsWarranty} warranty.`;

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Repairs', path: '/repairs/' },
            { name: hub.label, path },
          ]),
          ...(hub.faqs?.length ? [faqSchema(hub.faqs)] : []),
        ]}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Repairs', path: '/repairs/' }, { name: hub.label }]} />
        <div className="grid-12" style={{ marginBottom: 56 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>{hub.h1 ?? `${hub.label} repairs`}</h1>
            {hub.intro ? hub.intro.map((p) => (
              <p key={p.slice(0, 24)} className="body-copy text-muted" style={{ fontSize: '1.0625rem', marginTop: 20 }}>{p}</p>
            )) : (
              <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>{hub.blurb}</p>
            )}
          </div>
        </div>

        {services.length > 0 && (
          <div className="grid-12" style={{ marginBottom: 72 }}>
            {services.map((s) => (
              <Reveal key={s.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
                <Docket
                  id={s.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
                  title={s.name}
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
              </Reveal>
            ))}
          </div>
        )}

        {hub.links && hub.links.length > 0 && (
          <div style={{ marginBottom: 72 }}>
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>On this bench</h2>
            <div className="link-list">
              {hub.links.map((l) => (
                <Link key={l.href} to={l.href}>
                  <span>{l.label}{l.note ? <span style={{ color: '#6B7280' }}> · {l.note}</span> : null}</span>
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hub.sections?.map((section) => (
          <div key={section.heading} className="grid-12" style={{ marginBottom: 56 }}>
            <div className="col-span-12 lg:col-span-4">
              <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>{section.heading}</h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="body-copy text-muted" style={{ borderLeft: '1px solid var(--bench-rule)', paddingLeft: 20, marginBlock: 20 }}>{p}</p>
              ))}
            </div>
          </div>
        ))}

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

        {hub.faqs && hub.faqs.length > 0 && (
          <div className="grid-12" style={{ marginTop: 24 }}>
            <div className="col-span-12 lg:col-span-4">
              <h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>Questions we actually get</h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {hub.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}<span className="faq-marker">+</span></summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        )}
      </section>
      <AreaLinks />
      {hub.intro && <RepairCta heading={`Bring it to ${SITE.locality}`} />}
    </Layout>
  );
}
