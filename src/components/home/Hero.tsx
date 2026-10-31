import { Link } from 'react-router';
import { ShieldCheck, Star } from 'lucide-react';
import { SITE } from '@/data/site';
import { GOOGLE_RATING } from '@/data/reviews';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function Hero() {
  return (
    <section className="container-12 hero">
      <div className="hero-grid">
        <div>
          <p className="label section-kicker" style={{ color: 'hsl(var(--primary))' }}>
            {SITE.locality} High Street · {SITE.postcode}
          </p>
          <h1 className="display-ll hero-title">MacBook, Laptop & Console Repair in Whitton, Twickenham</h1>
          <p className="hero-lede">
            MacBook and Windows laptop repairs — screens, batteries, logic boards, SSD upgrades and data recovery — plus PlayStation and Xbox HDMI port repair. Most repairs are back the same day. Where a price is published on this site, that is the price, and every repair carries a written warranty.
          </p>

          <div className="action-row">
            <a href={SITE.phoneHref} className="btn btn-signal">
              Call {SITE.phoneDisplay}
            </a>
            <a href={SITE.directionsHref} className="btn btn-ghost" target="_blank" rel="noopener">
              Get directions
            </a>
          </div>
          <p className="hero-more">
            Or <Link to="/book/">book a repair</Link>
            {' · '}
            <a href={SITE.whatsappHref} target="_blank" rel="noopener">
              <WhatsAppIcon size={14} /> WhatsApp us
            </a>
          </p>

          <div className="hero-facts">
            <Link
              to="/reviews/"
              className="rating-inline"
              aria-label={`${GOOGLE_RATING.average} out of 5 from ${GOOGLE_RATING.count} Google reviews`}
            >
              <span className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </span>
              {GOOGLE_RATING.average}
              <span>· {GOOGLE_RATING.count} Google reviews</span>
            </Link>
            <address className="hero-address">
              {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}
            </address>
            <p className="hero-hours">
              {SITE.hours.map((h) => (
                <span key={h.days}>
                  {h.days} {h.opens === 'Closed' ? 'Closed' : `${h.opens}–${h.closes}`}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="hero-media">
          <figure className="hero-figure">
            <img
              src="/images/storefront.webp"
              alt="My Gadgets UK shop front on Whitton High Street"
              width={1376}
              height={774}
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-badge">
              <ShieldCheck size={22} style={{ color: 'var(--ok)' }} aria-hidden="true" />
              <div>
                <strong>{SITE.repairsWarranty} warranty</strong>
                <span>on every repair</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
