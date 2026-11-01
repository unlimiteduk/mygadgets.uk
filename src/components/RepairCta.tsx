import { SITE } from '@/data/site';
import ActionRow from '@/components/ActionRow';

export default function RepairCta({ heading }: { heading: string }) {
  return (
    <section className="band">
      <div className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>{heading}</h2>
            <p className="body-copy text-muted">
              {SITE.name}, {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}.
            </p>
            <div className="hours-list">
              {SITE.hours.map((h) => (
                <div key={h.days}>
                  <span>{h.days}</span>
                  <span className="mono">{h.opens === 'Closed' ? 'Closed' : `${h.opens}–${h.closes}`}</span>
                </div>
              ))}
            </div>
            <p className="small" style={{ marginTop: 12, color: '#5c564e' }}>{SITE.hoursNote}</p>
            <div style={{ marginTop: 24 }}>
              <ActionRow bookLabel="Book a repair" whatsappLabel="WhatsApp" visitLabel="Visit the shop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
