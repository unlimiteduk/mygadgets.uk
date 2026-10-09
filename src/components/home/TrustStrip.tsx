import { Gem, Timer, ShieldCheck, Search } from 'lucide-react';
import { SITE } from '@/data/site';

const ITEMS = [
  { icon: Gem, label: 'Genuine parts', copy: 'OEM-spec or better, stated on the docket' },
  { icon: Timer, label: '30–60 min express repair', copy: 'Most screens and batteries, same visit' },
  { icon: ShieldCheck, label: `${SITE.repairsWarranty} warranty`, copy: 'On every repair we carry out' },
  { icon: Search, label: 'Free diagnostics', copy: 'We find the fault before you pay anything' },
];

export default function TrustStrip() {
  return (
    <section style={{ borderBlock: '1px solid var(--bench-rule)', background: '#FFFFFF' }}>
      <div
        className="container-12"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          columnGap: 24,
          rowGap: 20,
          paddingBlock: 28,
        }}
      >
        {ITEMS.map(({ icon: Icon, label, copy }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'hsl(var(--accent))',
                color: 'hsl(var(--primary))',
                flexShrink: 0,
              }}
            >
              <Icon size={20} />
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--bench-ink)' }}>{label}</div>
              <div style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: 2 }}>{copy}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
