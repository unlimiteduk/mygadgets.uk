import { SITE } from '@/data/site';

// Real, live Google Maps embed (no API key needed — the classic
// maps?...&output=embed form). Replaces the earlier hand-drawn SVG mock.
export default function Map() {
  const address = `${SITE.name}, ${SITE.street}, ${SITE.locality}, ${SITE.region} ${SITE.postcode}`;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;

  return (
    <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
      <iframe
        src={src}
        title={`Map showing ${SITE.name} on ${SITE.street}, ${SITE.locality}`}
        width="100%"
        height="340"
        style={{ display: 'block', border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="small" style={{ padding: '12px 16px', borderTop: '1px solid var(--bench-rule)', color: '#6B7280' }}>
        {SITE.landmark} · free 30-min bays outside ·{' '}
        <a href={SITE.socials.gbp} target="_blank" rel="noopener" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>
          Open in Google Maps ↗
        </a>
      </div>
    </div>
  );
}
