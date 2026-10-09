import { Link } from 'react-router';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found | My Gadgets UK" description="That page is not on the bench. Try the repair hub or the price list." path="/404/" />
      <section className="container-12 section-pad">
        <p className="label text-muted" style={{ marginBottom: 16 }}>Fault 404 — page not found</p>
        <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>This one we cannot repair.</h1>
        <p className="body-copy text-muted" style={{ marginTop: 20 }}>
          The page has moved or never existed. The rest of the bench is intact:
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <Link to="/repairs/" className="btn btn-signal">Repairs</Link>
          <Link to="/repairs/prices/" className="btn btn-ghost">Price list</Link>
          <Link to="/" className="btn btn-ghost">Home</Link>
        </div>
      </section>
    </Layout>
  );
}
