import { MAPS_EMBED, SITE } from '@/data/site';

// Keyless Google embed. Do not lazy-load it: a lazy iframe inside a
// transformed parent (the reveal animation) stays a blank grey box,
// and the output=embed URL redirects with X-Frame-Options: SAMEORIGIN.
export default function Map() {
  return (
    <div className="panel map-card">
      <iframe
        className="map-frame"
        src={MAPS_EMBED}
        title={`Map of ${SITE.name}, ${SITE.street}, ${SITE.locality}, ${SITE.region} ${SITE.postcode}`}
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="small map-caption">
        {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}
        {' · '}
        {SITE.parking}
        {' · '}
        <a href={SITE.directionsHref} target="_blank" rel="noopener">
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
