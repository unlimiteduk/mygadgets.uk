import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, Phone } from 'lucide-react';
import { SITE } from '@/data/site';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';

const NAV = [
  { to: '/repairs/', label: 'Repairs' },
  { to: '/repairs/console/', label: 'Consoles' },
  { to: '/repairs/prices/', label: 'Prices' },
  { to: '/shop/', label: 'Refurbished' },
  { to: '/track/', label: 'Track repair' },
  { to: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-12 site-header-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label={`${SITE.brandName} — home`}>
          <img className="brand-logo" src="/logo.png" alt={SITE.brandName} />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/book/" className="btn btn-ghost" style={{ minHeight: 42 }}>
            Book a repair
          </Link>
          <div className="header-numbers">
            <a href={SITE.landlineHref}>
              <span className="k">Landline</span>
              {SITE.landlineDisplay}
            </a>
            <a href={SITE.mobileHref}>
              <span className="k">Mobile &amp; WhatsApp</span>
              {SITE.mobileDisplay}
            </a>
          </div>
        </div>

        <div className="header-numbers mobile-only">
          <a href={SITE.landlineHref}>
            <span className="k">Landline</span>
            {SITE.landlineDisplay}
          </a>
          <a href={SITE.mobileHref}>
            <span className="k">Mobile</span>
            {SITE.mobileDisplay}
          </a>
        </div>
        <div className="mobile-only" style={{ alignItems: 'center', gap: 8 }}>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="icon-btn">
            <Menu size={18} />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="z-[80] w-full sm:max-w-sm" style={{ background: '#fffcf8', padding: 0 }}>
          <SheetTitle style={{ padding: '20px 24px 0' }}>
            <img src="/logo.png" alt={SITE.brandName} style={{ height: 22, width: 'auto' }} />
          </SheetTitle>
          <nav aria-label="Mobile" style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column' }}>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{ padding: '14px 0', borderBottom: '1px solid var(--bench-rule)', color: 'var(--bench-ink)', textDecoration: 'none', fontWeight: 650, fontSize: '1.0625rem' }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.landlineHref} className="btn btn-signal" style={{ marginTop: 20 }}>
              <Phone size={16} /> Landline {SITE.landlineDisplay}
            </a>
            <a href={SITE.mobileHref} className="btn btn-ghost" style={{ marginTop: 10 }}>
              <Phone size={16} /> Mobile &amp; WhatsApp {SITE.mobileDisplay}
            </a>
            <a href={SITE.directionsHref} className="btn btn-ghost" style={{ marginTop: 10 }} target="_blank" rel="noopener">
              Get directions
            </a>
            <Link to="/book/" onClick={() => setOpen(false)} className="btn btn-ghost" style={{ marginTop: 10 }}>
              Book a repair
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
