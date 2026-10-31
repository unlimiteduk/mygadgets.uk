import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema, faqSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import PhotoSlot from '@/components/PhotoSlot';
import { getService, SERVICES, type Service } from '@/data/services';
import { AREAS_COVERED, SITE, canonical } from '@/data/site';
import AreaLinks from '@/components/AreaLinks';
import RepairCta from '@/components/RepairCta';
import ActionRow from '@/components/ActionRow';
import NotFound from './NotFound';

function serviceOffer(svc: Service, path: string) {
  const base = {
    '@type': 'Service',
    name: `${svc.deviceLabel} ${svc.name}`,
    serviceType: svc.name,
    url: canonical(path),
    provider: { '@id': `${SITE.domain}/#business` },
    areaServed: AREAS_COVERED.map((a) => a.name),
  };
  if (svc.quoteOnly) return base;
  return {
    ...base,
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', description: `From ${svc.fromPrice}` },
    },
  };
}

// Repair service page template (brief §6). Docket header → fault →
// what we do → parts → price table on bench → warranty → before/after
// → FAQ → cross-links.
export default function ServicePage() {
  const { device, service } = useParams();
  const svc = getService(`${device}/${service}`);
  if (!svc) return <NotFound />;

  const path = `/repairs/${svc.slug}/`;
  const deviceHub = `/repairs/${svc.device}/`;
  const sameDevice = SERVICES.filter((s) => s.device === svc.device && s.slug !== svc.slug);
  const sameFault = SERVICES.filter((s) => s.device !== svc.device && s.name === svc.name);

  return (
    <Layout>
      <Seo
        title={`${svc.title} | ${SITE.name}`}
        description={svc.metaDescription}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Repairs', path: '/repairs/' },
            { name: svc.deviceLabel, path: deviceHub },
            { name: svc.name, path },
          ]),
          serviceOffer(svc, path),
          faqSchema(svc.faqs),
        ]}
      />

      {/* Docket header */}
      <section className="container-12" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Crumbs items={[
          { name: 'Home', path: '/' },
          { name: 'Repairs', path: '/repairs/' },
          { name: svc.deviceLabel, path: deviceHub },
          { name: svc.name },
        ]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>
              {svc.h1 ?? `${svc.deviceLabel} ${svc.name.toLowerCase()}`}
            </h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>
              {svc.metaDescription}
            </p>
            <div style={{ marginTop: 28 }}>
              <ActionRow bookLabel="Book this repair" whatsappLabel="WhatsApp a photo of the damage" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9" style={{ marginTop: 24 }}>
            <Docket
              id={svc.slug.split('/').pop()!.slice(0, 6).toUpperCase()}
              title={`${svc.deviceLabel} · ${svc.name}`}
              rows={svc.quoteOnly ? [
                { k: 'QUOTE', v: 'At the bench' },
                { k: 'DIAGNOSIS', v: 'Free' },
                { k: 'WARRANTY', v: SITE.repairsWarranty },
              ] : [
                { k: 'FROM', v: svc.fromPrice, price: true },
                { k: 'TURNAROUND', v: svc.turnaround, ok: true },
                { k: 'WARRANTY', v: SITE.repairsWarranty },
                { k: 'DIAGNOSIS', v: 'Free' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* What the fault looks like */}
      <section className="container-12" style={{ paddingBottom: 96 }}>
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal><h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>What the fault looks like</h2></Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {svc.faultLooksLike.map((f) => (
                  <li key={f} className="body-copy" style={{ color: '#6B7280', padding: '12px 0 12px 22px', borderBottom: '1px solid var(--bench-rule)', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--signal)' }} className="mono">—</span>{f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section style={{ background: '#FFFFFF', borderBlock: '1px solid var(--bench-rule)' }}>
        <div className="container-12 section-pad">
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal><h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>What we actually do</h2></Reveal>
              {svc.whatWeDo.map((p) => (
                <Reveal key={p.slice(0, 24)}>
                  <p className="body-copy text-muted" style={{ borderLeft: '1px solid var(--bench-rule)', paddingLeft: 20, marginBlock: 20 }}>{p}</p>
                </Reveal>
              ))}
              <Reveal>
                <h3 className="h3" style={{ color: 'var(--bench-ink)', marginTop: 40 }}>Parts and grades, stated plainly</h3>
                <p className="body-copy text-muted">{svc.parts}</p>
              </Reveal>
              <Reveal>
                <h3 className="h3" style={{ color: 'var(--bench-ink)', marginTop: 32 }}>Warranty</h3>
                <p className="body-copy text-muted">{svc.warranty} Full terms on the <Link to="/warranty/" style={{ color: 'var(--bench-ink)' }}>warranty page</Link>.</p>
              </Reveal>
              {svc.sections?.map((section) => (
                <Reveal key={section.heading}>
                  <h3 className="h3" style={{ color: 'var(--bench-ink)', marginTop: 40 }}>{section.heading}</h3>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="body-copy text-muted">{p}</p>
                  ))}
                </Reveal>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Reveal>
                {svc.photoImage ? (
                  <figure
                    style={{
                      margin: 0,
                      aspectRatio: '4 / 5',
                      borderRadius: 'var(--radius-card)',
                      overflow: 'hidden',
                      border: '1px solid var(--bench-rule)',
                    }}
                  >
                    <img
                      src={svc.photoImage}
                      alt={svc.photoShot ?? `Before and after — ${svc.name.toLowerCase()} on a ${svc.deviceLabel}`}
                      width={1200}
                      height={1500}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </figure>
                ) : (
                  <PhotoSlot shot={svc.photoShot ?? 'Before / after — repair in progress, same device, same angle'} ratio="4 / 5" />
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Price table on bench, or a quote panel when no figure is published */}
      <section className="bench">
        <div className="container-12 section-pad">
          {svc.quoteOnly || svc.priceTable.length === 0 ? (
            <Reveal>
              <div className="grid-12">
                <div className="col-span-12 lg:col-span-7">
                  <h2 className="h2" style={{ margin: 0 }}>Quote at the bench</h2>
                  <p style={{ color: '#4B5563', marginTop: 12, maxWidth: '62ch' }}>
                    This repair is not on the published price list. The fault and the part depend on the exact machine, so we look at it first. Diagnosis is free, and the figure we give you is the one we stick to. Call {SITE.phoneDisplay} or bring it to {SITE.street}.
                  </p>
                  <div style={{ marginTop: 28 }}>
                    <ActionRow visitLabel="Visit the shop" />
                  </div>
                </div>
              </div>
            </Reveal>
          ) : (
          <>
          <Reveal>
            <div className="grid-12" style={{ marginBottom: 40 }}>
              <div className="col-span-12 lg:col-span-7">
                <h2 className="h2" style={{ margin: 0 }}>Prices by model</h2>
                <p style={{ color: '#4B5563', marginTop: 12, maxWidth: '56ch' }}>
                  The number on the quote is the number on the docket. If your model is not listed, call or WhatsApp — we quote by exact part number, never by guesswork.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bench-panel" style={{ overflowX: 'auto' }}>
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Part</th>
                    <th>Price</th>
                    <th>Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {svc.priceTable.map((r) => (
                    <tr key={r.model}>
                      <td style={{ color: 'var(--bench-ink)', fontWeight: 500 }}>
                        {r.modelSlug ? (
                          <Link to={`/repairs/models/${r.modelSlug}/`} style={{ color: 'inherit' }}>{r.model}</Link>
                        ) : r.model}
                      </td>
                      <td style={{ color: '#4B5563' }}>{r.part}</td>
                      <td className="num" style={{ color: 'var(--bench-ink)', fontWeight: 500 }}>{r.price}</td>
                      <td className="num" style={{ color: '#4B5563' }}>{r.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/book/" className="btn btn-signal">Book this repair</Link>
              <Link to="/repairs/prices/" className="btn btn-ghost-bench">Full price list →</Link>
            </div>
          </Reveal>
          </>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal><h2 className="h2" style={{ margin: 0, color: 'var(--bench-ink)' }}>Questions we actually get</h2></Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal>
              {svc.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}<span className="faq-marker">+</span></summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ borderTop: '1px solid var(--bench-rule)' }}>
        <div className="container-12" style={{ paddingBlock: 64 }}>
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Other {svc.deviceLabel} faults</h2>
              <div className="link-list">
                {sameDevice.map((s) => (
                  <Link key={s.slug} to={`/repairs/${s.slug}/`}>
                    <span>{s.name}</span>
                    <span className="arrow">{s.quoteOnly ? 'Quote →' : `FROM ${s.fromPrice} →`}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Same fault, other devices</h2>
              <div className="link-list">
                {sameFault.length > 0 ? sameFault.map((s) => (
                  <Link key={s.slug} to={`/repairs/${s.slug}/`}>
                    <span>{s.deviceLabel} {s.name.toLowerCase()}</span>
                    <span className="arrow">{s.quoteOnly ? 'Quote →' : `FROM ${s.fromPrice} →`}</span>
                  </Link>
                )) : (
                  <p className="small text-muted">This one is {svc.deviceLabel}-specific — board-level work lives on the Mac side of the bench.</p>
                )}
              </div>
            </div>
          </div>
          {svc.related && svc.related.length > 0 && (
            <div className="grid-12" style={{ marginTop: 40 }}>
              <div className="col-span-12">
                <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Related repairs</h2>
                <div className="link-list">
                  {svc.related.map((l) => (
                    <Link key={l.href} to={l.href}>
                      <span>{l.label}</span>
                      <span className="arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <AreaLinks />
      {svc.quoteOnly && <RepairCta heading="Call or bring it in" />}
    </Layout>
  );
}
