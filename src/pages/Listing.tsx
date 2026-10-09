import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import PhotoSlot from '@/components/PhotoSlot';
import { getListing, SHOP_CATEGORIES } from '@/data/listings';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NotFound from './NotFound';

// Listing detail (brief §6 Shop): a spec sheet, not a product page.
// Honesty is the design feature — the marks are described in writing.
export default function Listing() {
  const { slug } = useParams();
  const l = getListing(slug ?? '');
  if (!l) return <NotFound />;
  const cat = SHOP_CATEGORIES.find((c) => c.slug === l.category)!;
  const path = `/shop/${l.slug}/`;
  const available = l.status === 'in stock';

  return (
    <Layout>
      <Seo
        title={`${l.name} ${l.year} · grade ${l.grade} · £${l.price} | My Gadgets UK refurbished`}
        description={`${l.name} (${l.identifier}, ${l.year}): ${l.cpu}, ${l.ram}, ${l.ssd}. ${l.cycles > 0 ? `${l.cycles} battery cycles, ${l.batteryHealth}% health. ` : ''}Grade ${l.grade} with every mark described. ${SITE.refurbWarranty} warranty. £${l.price}.`}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Shop', path: '/shop/' },
            { name: cat.label, path: `/shop/${cat.slug}/` },
            { name: `${l.name} ${l.year}`, path },
          ]),
          {
            '@type': 'Product',
            name: `${l.name} (${l.identifier}, ${l.year}) — refurbished`,
            sku: `MGU-${l.slug.toUpperCase().slice(0, 18)}`,
            description: l.summary,
            itemCondition: 'https://schema.org/RefurbishedCondition',
            brand: { '@type': 'Brand', name: 'Apple' },
            offers: {
              '@type': 'Offer',
              price: l.price,
              priceCurrency: 'GBP',
              availability: available ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
              seller: { '@id': `${SITE.domain}/#business` },
              warranty: `${SITE.refurbWarranty} warranty, in writing`,
            },
          },
        ]}
      />
      <section className="container-12" style={{ paddingTop: 56, paddingBottom: 96 }}>
        <Crumbs items={[
          { name: 'Home', path: '/' },
          { name: 'Shop', path: '/shop/' },
          { name: cat.label, path: `/shop/${cat.slug}/` },
          { name: `${l.name} ${l.year}` },
        ]} />

        <div className="grid-12">
          {/* Gallery */}
          <div className="col-span-12 lg:col-span-7">
            <PhotoSlot
              shot={`Top-down unit photo — this exact ${l.name}, grey seamless, even light (shop template, brief §3.7)`}
              ratio="4 / 3"
              src={l.photoHero}
              alt={`${l.name} ${l.year}, ${l.grade} grade`}
            />
            <div className="grid-12" style={{ marginTop: 24 }}>
              <div className="col-span-6"><PhotoSlot shot="Lid + every mark, close" ratio="1 / 1" src={l.photoLid} alt={`${l.name} lid, close`} /></div>
              <div className="col-span-6"><PhotoSlot shot="Ports, edges, bottom case" ratio="1 / 1" src={l.photoPorts} alt={`${l.name} ports and bottom case`} /></div>
            </div>
            <p className="small" style={{ color: '#6B7280', marginTop: 16 }}>
              {l.photoHero
                ? 'These are AI-generated representative renders, not photographs of this exact unit. Real photos replace them once the commissioned shoot happens.'
                : 'Photographs are of this exact unit, never a manufacturer render. Frames show after the commissioned shoot.'}
            </p>
          </div>

          {/* Spec sheet */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="label" style={{ marginBottom: 10, color: '#6B7280' }}>
              {available ? 'In stock now' : l.status === 'reserved' ? 'Reserved — ask us' : 'Sold — shown as a grading example'}
            </div>
            <h1 className="h2" style={{ margin: '0 0 6px' }}>{l.name}</h1>
            <p className="mono" style={{ color: '#6B7280', marginTop: 0 }}>{l.identifier} · {l.year}</p>
            <p className="price" style={{ margin: '18px 0 4px' }}>£{l.price}</p>
            <p className="small" style={{ color: '#6B7280', marginTop: 0 }}>{SITE.refurbWarranty} warranty included</p>

            <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
              {available && <Link to="/contact/" className="btn btn-signal" style={{ width: '100%' }}>Reserve this one</Link>}
              <a
                href={`${SITE.whatsappHref}?text=${encodeURIComponent(`Hi — is the ${l.name} (${l.identifier}, £${l.price}) still available?`)}`}
                target="_blank"
                rel="noopener"
                className="btn btn-ghost-bench"
                style={{ width: '100%' }}
              >
                <WhatsAppIcon size={18} /> WhatsApp about this one
              </a>
            </div>

            <div className="bench-panel" style={{ marginTop: 28, padding: '8px 0' }}>
              <table className="price-table">
                <tbody>
                  {[
                    ['Model', `${l.name} (${l.year})`],
                    ['Identifier', l.identifier],
                    ['CPU', l.cpu],
                    ['Memory', l.ram],
                    ['Storage', l.ssd],
                    ['Screen', l.screen],
                    ['Cosmetic grade', l.grade],
                    ['Warranty', SITE.refurbWarranty],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280', whiteSpace: 'nowrap' }}>{k}</td>
                      <td style={{ color: 'var(--bench-ink)', fontWeight: 500, textAlign: 'right' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {l.cycles > 0 && (
              <div className="bench-panel" style={{ marginTop: 16, padding: 18 }}>
                <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: 10 }}>
                  <span style={{ color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}>Battery health</span>
                  <span style={{ color: 'var(--bench-ink)' }}>{l.cycles} cycles · {l.batteryHealth}%</span>
                </div>
                <div className="health-bar"><span style={{ width: `${l.batteryHealth}%` }} /></div>
                <p className="small" style={{ color: '#6B7280', marginTop: 10, marginBottom: 0 }}>
                  Apple rates this battery for 1,000 cycles. Health verified on our bench, not guessed.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Marks + box */}
        <div className="grid-12" style={{ marginTop: 72 }}>
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="h2" style={{ marginTop: 0 }}>Every mark on this unit</h2>
              <p className="body-copy" style={{ color: '#374151' }}>{l.marks}</p>
              <p className="body-copy" style={{ color: '#374151' }}>{l.summary}</p>
            </Reveal>
            <Reveal>
              <h3 className="h3" style={{ marginTop: 36 }}>In the box</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {l.inBox.map((i) => (
                  <li key={i} className="mono" style={{ padding: '10px 0', borderBottom: '1px solid var(--bench-rule)', fontSize: '0.875rem', color: 'var(--bench-ink)' }}>
                    — {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <Docket
                id={`STK-${l.identifier}`}
                title="Grading, in writing"
                rows={[
                  { k: 'GRADE', v: l.grade },
                  { k: 'TESTED', v: 'Full bench check, 30+ points' },
                  { k: 'DATA', v: 'Securely erased, certificate on file' },
                  { k: 'RETURNS', v: '14 days, no argument' },
                  { k: 'WARRANTY', v: SITE.refurbWarranty, ok: true },
                ]}
              />
              <p className="small" style={{ color: '#6B7280', marginTop: 14 }}>
                Grades: A+ (effectively unmarked) · A (light marks, described) · B (visible wear, priced for it). We photograph and describe the scuffs because that is what trust looks like in used hardware.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
