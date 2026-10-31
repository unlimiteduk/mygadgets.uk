import { Star } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';
import type { GoogleReview } from '@/data/reviews';

function avatarColor(name: string) {
  const tones = ['#9a3412', '#1c1916', '#3f3a34', '#7c4a2d', '#5c4033', '#2f4a3c'];
  const hash = Array.from(name).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return tones[hash % tones.length];
}

export default function GoogleReviewCard({ review, clamp = true }: { review: GoogleReview; clamp?: boolean }) {
  const { name, reviewCount, rating, relativeTime, text, isNew } = review;

  return (
    <div className="docket" style={{ padding: 24, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: avatarColor(name),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '1rem',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {name.charAt(0).toUpperCase()}
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--bench-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {name}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{reviewCount}</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
        <div style={{ display: 'flex', gap: 1 }}>
          {Array.from({ length: rating }).map((_, s) => (
            <Star key={s} size={14} fill="#FBBC04" style={{ color: '#FBBC04' }} />
          ))}
        </div>
        <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
          {isNew ? 'New · ' : ''}
          {relativeTime}
        </span>
        <GoogleIcon size={14} />
      </div>

      <p
        style={{
          color: 'var(--bench-ink)',
          fontSize: '0.875rem',
          marginTop: 12,
          marginBottom: 0,
          lineHeight: 1.5,
          ...(clamp
            ? {
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical' as const,
                overflow: 'hidden',
              }
            : {}),
        }}
      >
        {text}
      </p>
    </div>
  );
}
