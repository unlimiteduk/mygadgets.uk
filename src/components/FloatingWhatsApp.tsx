import { SITE } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

// Desktop WhatsApp. On phones the sticky bar is the call button.
export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label={`WhatsApp us on ${SITE.whatsappDisplay}`}
      className="hidden md:flex"
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 55,
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 999,
        background: '#25D366',
        color: '#FFFFFF',
        boxShadow: '0 8px 24px rgba(10, 27, 51, 0.25)',
        textDecoration: 'none',
      }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
