import { Star } from 'lucide-react';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import GoogleReviewCard from '@/components/GoogleReviewCard';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { SITE } from '@/data/site';
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '@/data/reviews';

export default function Reviews() {
  return (
    <Layout>
      <Seo
        title="Reviews — straight from Google, verbatim | My Gadgets UK"
        description={`${GOOGLE_RATING.average} stars from ${GOOGLE_RATING.count} Google reviews for My Gadgets UK, Whitton. Real reviewer names, ratings and quotes, pulled from our Business Profile — we do not write, curate or filter them.`}
        path="/reviews/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Reviews, verbatim</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>
              Pulled from our Google Business Profile — reviewer names, star ratings and quotes, unedited. No fabricated testimonials, no invented aggregate ratings: that is a hard rule of this build, not a preference.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <GoogleIcon size={24} />
              <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--bench-ink)' }}>{GOOGLE_RATING.average}</span>
              <div style={{ display: 'flex', gap: 1 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={18} fill="#FBBC04" style={{ color: '#FBBC04' }} />
                ))}
              </div>
              <span style={{ color: '#6B7280', fontSize: '0.9375rem' }}>{GOOGLE_RATING.count} Google reviews</span>
              <a href={SITE.socials.gbp} target="_blank" rel="noopener" className="btn btn-ghost" style={{ padding: '10px 18px', fontSize: '0.875rem' }}>
                Read them on Google ↗
              </a>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="grid-12" style={{ marginTop: 48, gap: '20px 0' }}>
            {GOOGLE_REVIEWS.map((r) => (
              <div key={r.name} className="col-span-12 md:col-span-6 lg:col-span-4">
                <GoogleReviewCard review={r} clamp={false} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="grid-12" style={{ marginTop: 64 }}>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>The review card</h2>
              <p className="text-muted body-copy">
                Every completed repair leaves with this card — a QR code straight to the Google review form. Steady, recent, honest reviews beat a pile of old five-stars, and we would rather earn them than buy them.
              </p>
              <div className="docket" style={{ maxWidth: 320 }}>
                <div className="docket-id">MG-REVIEW</div>
                <div className="docket-body" style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ width: 96, height: 96, margin: '0 auto 14px', background: 'var(--bench-rule)', borderRadius: 4, display: 'grid', placeItems: 'center' }}>
                    <span className="label" style={{ color: '#6B7280' }}>QR</span>
                  </div>
                  <div className="docket-title">Fixed? Tell Whitton.</div>
                  <div className="small" style={{ color: '#6B7280' }}>
                    Scan → 60 seconds → helps the next person with a cracked screen find a real bench.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginTop: 72, maxWidth: 520 }}>
            <figure
              style={{
                margin: 0,
                aspectRatio: '16 / 9',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                border: '1px solid var(--bench-rule)',
              }}
            >
              <img
                src="/images/reviews-ribbon-cable.webp"
                alt="Gloved hands using tweezers to lift a display ribbon cable during a phone repair"
                width={1376}
                height={768}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </figure>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
