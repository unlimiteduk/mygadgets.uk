import { MapPin, Phone } from 'lucide-react';
import { SITE } from '@/data/site';

// Mobile-only call bar. Phone calls and walk-ins are the two actions.
export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a href={SITE.directionsHref} className="btn btn-ghost" target="_blank" rel="noopener">
        <MapPin size={16} aria-hidden="true" /> Directions
      </a>
      <a href={SITE.landlineHref} className="btn btn-signal" aria-label={`Landline ${SITE.landlineDisplay}`}>
        <Phone size={16} aria-hidden="true" /> {SITE.landlineDisplay}
      </a>
      <a href={SITE.mobileHref} className="btn btn-ghost" aria-label={`Mobile and WhatsApp ${SITE.mobileDisplay}`}>
        <Phone size={16} aria-hidden="true" /> {SITE.mobileDisplay}
      </a>
    </div>
  );
}
