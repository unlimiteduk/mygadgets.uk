import { Link } from "react-router";
import { MapPin, MessageCircle, Wrench } from "lucide-react";
import { SITE } from "@/data/site";
export default function StickyBar() {
  return (
    <nav className="lg-mobile-dock" aria-label="Quick actions">
      <Link to="/book/">
        <Wrench size={20} />
        Book repair
      </Link>
      <a href={SITE.whatsappHref} target="_blank" rel="noopener">
        <MessageCircle size={20} />
        WhatsApp
      </a>
      <a href={SITE.directionsHref} target="_blank" rel="noopener">
        <MapPin size={20} />
        Directions
      </a>
    </nav>
  );
}
