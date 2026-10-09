import { Link } from 'react-router';

export interface DocketRow {
  k: string;
  v: string;
  price?: boolean;
  ok?: boolean;
  warn?: boolean;
}

interface DocketProps {
  id: string;
  title: string;
  rows: DocketRow[];
  href?: string;
  className?: string;
}

export default function Docket({ id, title, rows, href, className = '' }: DocketProps) {
  const body = (
    <>
      <div className="docket-id">MG-{id}</div>
      <div className="docket-body">
        <div className="docket-title">{title}</div>
        {rows.map((r) => (
          <div className="docket-row" key={r.k}>
            <span className="k">{r.k}</span>
            <span className={`v ${r.price ? 'price-v' : ''} ${r.ok ? 'text-ok' : ''} ${r.warn ? 'text-warn' : ''}`}>
              {r.v}
            </span>
          </div>
        ))}
      </div>
    </>
  );
  const cls = `docket ${className}`;
  if (href) {
    return (
      <Link to={href} className={cls} style={{ display: 'block', textDecoration: 'none' }}>
        {body}
      </Link>
    );
  }
  return <div className={cls}>{body}</div>;
}
