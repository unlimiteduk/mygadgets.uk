import { Link } from 'react-router';
import PhotoSlot from '@/components/PhotoSlot';
import type { BlogPost } from '@/data/blog';

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}/`} style={{ textDecoration: 'none', display: 'block' }}>
      {post.coverImage ? (
        <figure
          style={{
            margin: 0,
            aspectRatio: '16 / 10',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--bench-rule)',
          }}
        >
          <img
            src={post.coverImage}
            alt={post.coverShot}
            width={1376}
            height={860}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </figure>
      ) : (
        <PhotoSlot shot={post.coverShot} ratio="16 / 10" />
      )}
      <div style={{ marginTop: 16 }}>
        <p className="mono small" style={{ color: '#6B7280', margin: 0 }}>
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--bench-ink)', margin: '8px 0' }}>{post.title}</h3>
        <p style={{ fontSize: '0.875rem', color: '#4B5563', margin: 0 }}>{post.excerpt}</p>
      </div>
    </Link>
  );
}
