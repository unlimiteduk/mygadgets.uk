import { useParams, Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Crumbs from '@/components/Crumbs';
import PhotoSlot from '@/components/PhotoSlot';
import { getPost, BLOG_POSTS } from '@/data/blog';
import { SITE } from '@/data/site';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug ?? '');
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}/`;
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <Seo
        title={`${post.title} | My Gadgets UK`}
        description={post.metaDescription}
        path={path}
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }, { name: post.title, path }]),
          {
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            author: { '@type': 'Organization', name: SITE.name },
          },
        ]}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }, { name: post.title }]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-8">
            <p className="mono small" style={{ color: '#6B7280', margin: 0 }}>
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.author}
            </p>
            <h1 className="display-l" style={{ margin: '12px 0 28px', color: 'var(--bench-ink)' }}>{post.title}</h1>
            {post.coverImage ? (
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
                  src={post.coverImage}
                  alt={post.coverShot}
                  width={1376}
                  height={768}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </figure>
            ) : (
              <PhotoSlot shot={post.coverShot} ratio="16 / 9" />
            )}
            <div style={{ maxWidth: '68ch', marginTop: 32 }}>
              {post.bodyParagraphs.map((p, i) => (
                <p key={i} style={{ color: '#374151', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 22 }}>{p}</p>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: 24, borderRadius: 16, background: 'hsl(var(--accent))' }}>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--bench-ink)' }}>Got the same problem?</p>
              <p style={{ margin: '6px 0 16px', color: '#4B5563', fontSize: '0.9375rem' }}>Book a free diagnosis and we'll give you a written quote before any work starts.</p>
              <Link to="/book/" className="btn btn-signal">Book a repair</Link>
            </div>
          </div>

          {more.length > 0 && (
            <div className="col-span-12 lg:col-span-3 lg:col-start-10" style={{ marginTop: 8 }}>
              <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 16 }}>More from the bench</p>
              <div className="link-list">
                {more.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}/`}>
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
