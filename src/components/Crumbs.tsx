import { Link } from 'react-router';

export default function Crumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span className="sep">/</span>}
          {it.path ? <Link to={it.path}>{it.name}</Link> : <span style={{ color: 'var(--bench-ink)' }}>{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}
