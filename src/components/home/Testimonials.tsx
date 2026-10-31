import { Star } from 'lucide-react';
import { Link } from 'react-router';
import GoogleReviewCard from '@/components/GoogleReviewCard';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '@/data/reviews';

export default function Testimonials() {
  return (
    <section className="container-12 section-pad">
      <p className="label section-kicker" style={{ color: 'hsl(var(--primary))' }}>What customers say</p>
      <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Reviews from Google</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0 28px', flexWrap: 'wrap' }}>
        <GoogleIcon size={22} />
        <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--bench-ink)' }}>{GOOGLE_RATING.average}</span>
        <span className="stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={16} fill="currentColor" />
          ))}
        </span>
        <span style={{ color: '#5c564e', fontSize: '0.9375rem' }}>
          {GOOGLE_RATING.count} Google reviews —{' '}
          <Link to="/reviews/" style={{ color: 'hsl(var(--primary))', fontWeight: 650 }}>
            read them all
          </Link>
        </span>
      </div>

      <div className="review-grid">
        {GOOGLE_REVIEWS.map((r) => (
          <GoogleReviewCard key={r.name} review={r} />
        ))}
      </div>
    </section>
  );
}
