import { Link } from 'react-router';
import { SITE, AREAS_COVERED } from '@/data/site';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--shim)' }}>
      <div className="container-12" style={{ paddingBlock: '64px 32px' }}>
        <div className="grid-12">
          <div className="col-span-12 md:col-span-4">
            <span style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--bone)', borderRadius: 8, padding: '6px 12px', marginBottom: 16 }}>
              <img src="/logo.png" alt="My Gadgets UK" style={{ height: 24, width: 'auto', display: 'block' }} />
            </span>
            <p className="small text-aluminium" style={{ maxWidth: '32ch' }}>
              {SITE.street}, {SITE.locality}, {SITE.region} {SITE.postcode}
            </p>
            <p className="small" style={{ marginTop: 12 }}>
              <a href={SITE.phoneHref} className="mono" style={{ color: 'var(--bone)', textDecoration: 'none' }}>{SITE.phoneDisplay}</a>
              <br />
              <a href={SITE.whatsappHref} className="mono" style={{ color: 'var(--aluminium)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }} target="_blank" rel="noopener">
                <WhatsAppIcon size={14} /> WhatsApp {SITE.whatsappDisplay}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>{SITE.email}</a>
            </p>
            <p className="small text-aluminium" style={{ marginTop: 12 }}>
              Mon–Fri 09:00–18:30 · Sat 09:30–17:30 · Sun closed
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label" style={{ marginBottom: 14, color: 'var(--bone)' }}>Repairs</div>
            <FooterLinks links={[
              ['/repairs/macbook/screen-replacement/', 'MacBook screens'],
              ['/repairs/laptop/screen-replacement/', 'Laptop screens'],
              ['/repairs/laptop/virus-removal/', 'Laptop virus removal'],
              ['/repairs/iphone/screen-replacement/', 'iPhone screens'],
              ['/repairs/samsung/screen-replacement/', 'Samsung screens'],
              ['/repairs/ipad/screen-replacement/', 'iPad screens'],
              ['/repairs/prices/', 'Full price list'],
            ]} />
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label" style={{ marginBottom: 14, color: 'var(--bone)' }}>Shop</div>
            <FooterLinks links={[
              ['/shop/macbook-air/', 'MacBook Air'],
              ['/shop/macbook-pro/', 'MacBook Pro'],
              ['/shop/imac/', 'iMac'],
              ['/sell-your-device/', 'Sell your device'],
              ['/warranty/', 'Warranty'],
              ['/business/', 'Business'],
            ]} />
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="label" style={{ marginBottom: 14, color: 'var(--bone)' }}>Areas we cover</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px' }}>
              {AREAS_COVERED.map((a) => (
                <Link key={a.slug} to={`/areas/${a.slug}/`} className="small" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>
                  {a.name} <span className="mono" style={{ fontSize: '0.6875rem' }}>{a.postcode}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--shim)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' }}>
          <p className="small text-aluminium" style={{ margin: 0 }}>
            © {new Date().getFullYear()} {SITE.legalName}. Registered in England. Repairs carry a {SITE.repairsWarranty} warranty; refurbished units {SITE.refurbWarranty}.
          </p>
          <div className="small" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link to="/track/" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>Track repair</Link>
            <Link to="/blog/" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>Blog</Link>
            <Link to="/reviews/" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>Reviews</Link>
            <Link to="/contact/" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>Contact</Link>
            <Link to="/about/" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ links }: { links: [string, string][] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
      {links.map(([to, label]) => (
        <li key={to}>
          <Link to={to} className="small" style={{ color: 'var(--aluminium)', textDecoration: 'none' }}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
