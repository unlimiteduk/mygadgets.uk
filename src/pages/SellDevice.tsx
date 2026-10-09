import { useMemo, useState } from 'react';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import { MODELS } from '@/data/models';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const CONDITIONS = [
  { key: 'working', label: 'Working — normal wear', factor: 1 },
  { key: 'tired', label: 'Working but tired (battery, marks)', factor: 0.8 },
  { key: 'broken', label: 'Broken (screen, port, keys)', factor: 0.35 },
  { key: 'liquid', label: 'Water-damaged / dead', factor: 0.22 },
] as const;

// Sell your device (brief §6): stepped quote — device → model →
// condition → instant indicative price. Honest framing throughout.
export default function SellDevice() {
  const [device, setDevice] = useState('');
  const [modelSlug, setModelSlug] = useState('');
  const [condition, setCondition] = useState('');

  const models = useMemo(() => MODELS.filter((m) => !device || m.device === device), [device]);
  const model = MODELS.find((m) => m.slug === modelSlug);
  const cond = CONDITIONS.find((c) => c.key === condition);

  const estimate = useMemo(() => {
    if (!model || !cond) return null;
    const match = model.tradeIn.match(/Working: up to £(\d+)/);
    if (!match) return null;
    const base = parseInt(match[1], 10);
    const est = Math.round((base * cond.factor) / 5) * 5;
    return est;
  }, [model, cond]);

  return (
    <Layout>
      <Seo
        title="Sell your device — working, broken or water-damaged | My Gadgets UK, Whitton"
        description="We buy working, broken and water-damaged iPhones, MacBooks, iPads and Samsung phones. Indicative price online, firm offer at the counter, paid the same day."
        path="/sell-your-device/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Sell your device', path: '/sell-your-device/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0 }}>Sell your device</h1>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: 20, maxWidth: '58ch' }}>
              We buy working, broken and water-damaged devices. This gives you an indicative price; bring it in for a firm offer, paid the same day. Devices are data-wiped to a written standard before anything else happens.
            </p>

            <div style={{ display: 'grid', gap: 20, marginTop: 36, maxWidth: 560 }}>
              <div className="field">
                <label htmlFor="sd-device">Device type</label>
                <select id="sd-device" value={device} onChange={(e) => { setDevice(e.target.value); setModelSlug(''); }}>
                  <option value="">Choose…</option>
                  {['iPhone', 'MacBook', 'iPad', 'Galaxy'].map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="sd-model">Model</label>
                <select id="sd-model" value={modelSlug} onChange={(e) => setModelSlug(e.target.value)} disabled={!device}>
                  <option value="">Choose a model…</option>
                  {models.map((m) => <option key={m.slug} value={m.slug}>{m.name} ({m.identifier})</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="sd-cond">Condition</label>
                <select id="sd-cond" value={condition} onChange={(e) => setCondition(e.target.value)} disabled={!modelSlug}>
                  <option value="">Be honest — we test it anyway…</option>
                  {CONDITIONS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
                </select>
              </div>
            </div>

            {estimate !== null && model && cond && (
              <Reveal>
                <div className="bench-panel" style={{ marginTop: 32, padding: 28, maxWidth: 560 }}>
                  <div className="label" style={{ marginBottom: 8 }}>Indicative offer</div>
                  <p className="price" style={{ margin: 0 }}>up to £{estimate}</p>
                  <p className="small" style={{ color: '#6B7280', marginTop: 12, marginBottom: 0 }}>
                    For a {model.name} · {cond.label.toLowerCase()}. The firm offer happens at the counter after a bench test — it can move up as well as down. Same-day payment by bank transfer.
                  </p>
                  <a
                    href={`${SITE.whatsappHref}?text=${encodeURIComponent(`Hi — I'd like to sell my ${model.name} (${cond.label.toLowerCase()}). Indicative quote says up to £${estimate}.`)}`}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-signal"
                    style={{ marginTop: 20 }}
                  >
                    <WhatsAppIcon size={18} /> Get a firm offer on WhatsApp
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <h2 className="h3" style={{ marginTop: 0 }}>How selling works here</h2>
              {[
                ['Indicative price online', 'The figure above is a starting point from real trade-in values, not a teaser rate.'],
                ['Bench test at the counter', 'Ten minutes: function, battery health, board inspection. We show you what we find.'],
                ['Firm offer, same-day payment', 'Bank transfer before you leave. No "we will post it to a warehouse" — the decision happens in front of you.'],
                ['Data wiped to a written standard', 'Signed-out, erased and verified. Devices containing customer data are handled under our written data policy.'],
              ].map(([h, p]) => (
                <div key={h} style={{ borderTop: '1px solid var(--bench-rule)', paddingBlock: 18 }}>
                  <h3 style={{ margin: '0 0 6px', fontSize: '1.0625rem', fontWeight: 600 }}>{h}</h3>
                  <p className="small" style={{ margin: 0, color: '#4B5563' }}>{p}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
