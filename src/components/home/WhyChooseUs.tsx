import { BadgeCheck, Gem, Tag, ShieldCheck } from 'lucide-react';
import { SITE } from '@/data/site';

const ITEMS = [
  { icon: BadgeCheck, h: 'Done on our bench', p: 'Repairs are carried out at 23 High Street, Whitton. A PS5 HDMI port can be posted to us. We do not send your machine to another shop.' },
  { icon: Gem, h: 'Genuine parts', p: 'OEM-spec or better on every job, and the docket states exactly what grade was fitted.' },
  { icon: Tag, h: 'Upfront pricing, no hidden charges', p: 'A fixed quote in writing before any work starts. If it is not worth repairing, we say so.' },
  { icon: ShieldCheck, h: `Warranty on every repair`, p: `${SITE.repairsWarranty} on repairs, ${SITE.refurbWarranty} on refurbished units — in writing, every time.` },
];

export default function WhyChooseUs() {
  return (
    <section className="band">
      <div className="container-12 section-pad">
        <div style={{ marginBottom: 40 }}>
          <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Why choose us</p>
          <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Repairs you don't have to think twice about</h2>
        </div>
        <div className="why-grid">
          {ITEMS.map(({ icon: Icon, h, p }) => (
            <div key={h}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'hsl(var(--accent))',
                  color: 'hsl(var(--primary))',
                  marginBottom: 16,
                }}
              >
                <Icon size={24} />
              </span>
              <div style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--bench-ink)' }}>{h}</div>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: 8 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
