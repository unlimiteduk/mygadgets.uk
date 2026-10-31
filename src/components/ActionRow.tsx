import { Link } from 'react-router';
import { MapPin, Phone } from 'lucide-react';
import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function ActionRow({
  bookLabel,
  bookTo = '/book/',
  whatsappLabel,
  visitLabel,
}: {
  bookLabel?: string;
  bookTo?: string;
  whatsappLabel?: string;
  visitLabel?: string;
}) {
  return (
    <div className="action-row">
      <a href={SITE.phoneHref} className="btn btn-signal">
        <Phone size={18} aria-hidden="true" /> Call {SITE.phoneDisplay}
      </a>
      <a href={SITE.directionsHref} className="btn btn-ghost" target="_blank" rel="noopener">
        <MapPin size={18} aria-hidden="true" /> Get directions
      </a>
      {bookLabel && (
        <Link to={bookTo} className="btn btn-ghost">
          {bookLabel}
        </Link>
      )}
      {whatsappLabel && (
        <a href={SITE.whatsappHref} className="btn btn-ghost" target="_blank" rel="noopener">
          <WhatsAppIcon size={18} /> {whatsappLabel}
        </a>
      )}
      {visitLabel && (
        <Link to="/contact/" className="btn btn-ghost">
          {visitLabel}
        </Link>
      )}
    </div>
  );
}
