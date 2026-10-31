import { Link } from 'react-router';
import { AREAS_COVERED } from '@/data/site';

export default function AreaLinks({ except }: { except?: string }) {
  const areas = AREAS_COVERED.filter((a) => a.slug !== except);
  return (
    <section style={{ borderTop: '1px solid var(--bench-rule)' }}>
      <div className="container-12" style={{ paddingBlock: 64 }}>
        <h2 className="h3" style={{ marginTop: 0, color: 'var(--bench-ink)' }}>Areas we cover</h2>
        <p className="body-copy text-muted">
          The bench is on Whitton High Street. Each of these places has its own page, with how to get here.
        </p>
        <div className="link-list">
          {areas.map((a) => (
            <Link key={a.slug} to={`/areas/${a.slug}/`}>
              <span>{a.name}</span>
              <span className="arrow">{a.postcode} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
