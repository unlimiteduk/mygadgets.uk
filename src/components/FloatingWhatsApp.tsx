import { SITE } from "@/data/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label={`WhatsApp us on ${SITE.whatsappDisplay}`}
      className="lg-floating-whatsapp"
    >
      <WhatsAppIcon size={25} />
    </a>
  );
}
