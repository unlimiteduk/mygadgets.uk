import { Link } from 'react-router';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function RepairCta({ heading }: { heading: string }) {
  return (
    <section style={{ background: '#FFFFFF', borderTop: '1px solid var(--bench-rule)' }}>
      <div className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>{heading}</h2>
            <p className="body-copy text-muted">
              {SITE.name}, {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}. {SITE.landmark}
            </p>
            <div style={{ maxWidth: 360, marginTop: 8 }}>
              {SITE.hours.map((h) => (
                <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: 8, borderBottom: '1px solid var(--bench-rule)', fontSize: '0.9375rem' }}>
                  <span style={{ color: '#6B7280' }}>{h.days}</span>
                  <span className="mono">{h.opens === 'Closed' ? 'Closed' : `${h.opens}–${h.closes}`}</span>
                </div>
              ))}
            </div>
            <p className="small" style={{ marginTop: 12, color: '#6B7280' }}>{SITE.hoursNote}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a href={SITE.phoneHref} className="btn btn-signal">Call {SITE.phoneDisplay}</a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><WhatsAppIcon size={18} /> WhatsApp</a>
              <Link to="/book/" className="btn btn-ghost">Book a repair</Link>
              <Link to="/contact/" className="btn btn-ghost">Visit the shop</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
