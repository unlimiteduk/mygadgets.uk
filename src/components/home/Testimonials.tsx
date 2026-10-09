import { Star } from 'lucide-react';
import { Link } from 'react-router';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import GoogleReviewCard from '@/components/GoogleReviewCard';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '@/data/reviews';

export default function Testimonials() {
  return (
    <section className="container-12 section-pad">
      <div style={{ marginBottom: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>What customers say</p>
          <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Reviews from Google</h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
        <GoogleIcon size={22} />
        <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--bench-ink)' }}>{GOOGLE_RATING.average}</span>
        <div style={{ display: 'flex', gap: 1 }}>
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={16} fill="#FBBC04" style={{ color: '#FBBC04' }} />
          ))}
        </div>
        <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>
          {GOOGLE_RATING.count} Google reviews —{' '}
          <Link to="/reviews/" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>
            read them all ↗
          </Link>
        </span>
      </div>

      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {GOOGLE_REVIEWS.map((r) => (
            <CarouselItem key={r.name} className="md:basis-1/2 lg:basis-1/3">
              <GoogleReviewCard review={r} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <CarouselPrevious style={{ position: 'static', translate: 'none' }} />
          <CarouselNext style={{ position: 'static', translate: 'none' }} />
        </div>
      </Carousel>
    </section>
  );
}
