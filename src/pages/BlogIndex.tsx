import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Crumbs from '@/components/Crumbs';
import BlogPostCard from '@/components/BlogPostCard';
import { BLOG_POSTS } from '@/data/blog';

export default function BlogIndex() {
  return (
    <Layout>
      <Seo
        title="Blog — repair guides and advice | My Gadgets UK"
        description="Straight answers on device repair, data safety and getting more life out of your phone and laptop, from the bench at My Gadgets UK."
        path="/blog/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} />
        <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>From the bench</h1>
        <p style={{ color: '#4B5563', marginTop: 16, maxWidth: '60ch', marginBottom: 48 }}>
          Straight answers on repairs, data safety and getting more life out of your devices — written by the people who actually fix them.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
