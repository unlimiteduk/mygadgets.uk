import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Crumbs from '@/components/Crumbs';
import { MODELS } from '@/data/models';
import { SERVICES } from '@/data/services';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const FILTERS = ['All', 'MacBook', 'iPhone', 'Galaxy', 'iPad'] as const;

// Computer repair leads the list, then phones, then tablets.
const DEVICE_ORDER: Record<string, number> = { MacBook: 0, iPhone: 1, Galaxy: 2, iPad: 3 };

// Full filterable price list (brief §5.1 /repairs/prices/). On bench.
export default function Prices() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    const all = MODELS.flatMap((m) =>
      m.faults.map((f) => ({
        model: m.name,
        identifier: m.identifier,
        device: m.device,
        modelSlug: m.slug,
        fault: f.label,
        price: f.price,
        turnaround: f.turnaround,
        serviceSlug: f.serviceSlug,
      }))
    );
    return all
      .filter(
        (r) =>
          (filter === 'All' || r.device === filter) &&
          (q === '' || `${r.model} ${r.identifier} ${r.fault}`.toLowerCase().includes(q.toLowerCase()))
      )
      .sort((a, b) => DEVICE_ORDER[a.device] - DEVICE_ORDER[b.device]);
  }, [filter, q]);

  return (
    <Layout>
      <Seo
        title="Repair price list — every model, every fault | My Gadgets UK, Whitton"
        description="The full repair price list: MacBook, iPhone, Samsung and iPad, by model, with turnaround — plus Windows laptop screen and hinge pricing by part number. No 'contact us for a quote' — the numbers are here."
        path="/repairs/prices/"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Repairs', path: '/repairs/' },
          { name: 'Prices', path: '/repairs/prices/' },
        ])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Repairs', path: '/repairs/' }, { name: 'Prices' }]} />
        <div className="grid-12" style={{ marginBottom: 40 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0 }}>The price list, all of it</h1>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: 20, maxWidth: '62ch' }}>
              Every price is the fitted price — part, labour and a 3-month warranty included. Diagnosis is free, and the quote you approve is the number on the docket.
            </p>
          </div>
        </div>

        <Reveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24, alignItems: 'center' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="mono"
                style={{
                  padding: '9px 16px',
                  borderRadius: 4,
                  border: '1px solid var(--bench-rule)',
                  background: filter === f ? 'var(--bench-ink)' : '#FFFFFF',
                  color: filter === f ? 'var(--bench)' : 'var(--bench-ink)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {f}
              </button>
            ))}
            <input
              type="search"
              placeholder="Search a model — e.g. A2337, iPhone 13"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search models"
              style={{
                marginLeft: 'auto',
                minWidth: 240,
                background: '#FFFFFF',
                border: '1px solid var(--bench-rule)',
                borderRadius: 4,
                padding: '10px 14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.8125rem',
                color: 'var(--bench-ink)',
              }}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="bench-panel" style={{ overflowX: 'auto' }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Fault / service</th>
                  <th>Price (fitted)</th>
                  <th>Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={`${r.modelSlug}-${r.fault}-${i}`}>
                    <td style={{ color: 'var(--bench-ink)', fontWeight: 500 }}>
                      <Link to={`/repairs/models/${r.modelSlug}/`} style={{ color: 'inherit' }}>{r.model}</Link>
                      <div className="mono" style={{ fontSize: '0.6875rem', color: '#6B7280' }}>{r.identifier}</div>
                    </td>
                    <td>
                      <Link to={`/repairs/${r.serviceSlug}/`} style={{ color: '#374151' }}>{r.fault}</Link>
                    </td>
                    <td className="num" style={{ color: 'var(--bench-ink)', fontWeight: 500 }}>{r.price}</td>
                    <td className="num" style={{ color: '#4B5563' }}>{r.turnaround}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={4} style={{ color: '#6B7280' }}>No match — try a model name or identifier, or WhatsApp us the model number and we will quote it.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <p className="small" style={{ color: '#6B7280', marginTop: 20 }}>
            Windows laptop screens and hinges are quoted by exact panel part number — see{' '}
            <Link to="/repairs/laptop/screen-replacement/" style={{ color: 'var(--bench-ink)' }}>laptop screen replacement</Link> and{' '}
            <Link to="/repairs/laptop/hinge-repair/" style={{ color: 'var(--bench-ink)' }}>hinge repair</Link>.{' '}
            Board-level services ({SERVICES.filter((s) => s.slug.includes('logic-board') || s.slug.includes('liquid') || s.slug.includes('data')).map((s) => s.name.toLowerCase()).join(', ')}) are assessed free first.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/book/" className="btn btn-signal">Book a repair</Link>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost-bench"><WhatsAppIcon size={18} /> WhatsApp your model number</a>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
