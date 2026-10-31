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
    <section className="trust-strip" aria-label="Why people use the shop">
      <div className="container-12 trust-grid">
        {ITEMS.map(({ icon: Icon, label, copy }) => (
          <div key={label} className="trust-item">
            <span className="icon-tile" aria-hidden="true">
              <Icon size={20} />
            </span>
            <div>
              <strong>{label}</strong>
              <span>{copy}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
