import { Star } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';
import type { GoogleReview } from '@/data/reviews';

function avatarColor(name: string) {
  const tones = ['#3b5a43', '#365b56', '#526b3e', '#416959', '#4d5e49', '#2f4a3c'];
  const hash = Array.from(name).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return tones[hash % tones.length];
}

export default function GoogleReviewCard({ review, clamp = true }: { review: GoogleReview; clamp?: boolean }) {
  const { name, rating, text } = review;

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
          <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Google reviewer</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
        <div aria-label={`${rating} out of 5 stars`} style={{ display: 'flex', gap: 1 }}>
          {Array.from({ length: rating }).map((_, s) => (
            <Star key={s} size={14} fill="#FBBC04" style={{ color: '#FBBC04' }} />
          ))}
        </div>
        <GoogleIcon size={14} />
      </div>

      <p
        style={{
          color: 'var(--bench-ink)',
          fontSize: '1rem',
          marginTop: 12,
          marginBottom: 0,
          lineHeight: 1.8,
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
