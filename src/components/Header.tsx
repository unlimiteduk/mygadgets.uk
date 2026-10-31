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
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid var(--bench-rule)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label={`${SITE.brandName} — home`}>
          <span style={{ display: 'inline-flex', alignItems: 'center', background: '#FFFFFF', borderRadius: 8, padding: '6px 12px' }}>
            <img src="/logo.png" alt={SITE.brandName} style={{ height: 26, width: 'auto', display: 'block' }} />
          </span>
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }} aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? 'hsl(var(--primary))' : 'var(--bench-ink)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
              })}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 16 }}>
          <a href={SITE.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--bench-ink)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
            <Phone size={16} style={{ color: 'hsl(var(--primary))' }} />
            {SITE.phoneDisplay}
          </a>
          <Link to="/book/" className="btn btn-signal" style={{ padding: '11px 20px' }}>
            Book a repair
          </Link>
        </div>

        <div className="flex md:hidden" style={{ alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              background: 'transparent',
              border: '1px solid var(--bench-rule)',
              borderRadius: 8,
              color: 'var(--bench-ink)',
            }}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[85vw] sm:max-w-sm" style={{ background: '#FFFFFF', padding: 0 }}>
          <SheetTitle style={{ padding: '20px 24px 0' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', background: '#FFFFFF', borderRadius: 8, padding: '6px 12px' }}>
              <img src="/logo.png" alt={SITE.brandName} style={{ height: 24, width: 'auto' }} />
            </span>
          </SheetTitle>
          <nav aria-label="Mobile" style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column' }}>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{ padding: '14px 0', borderBottom: '1px solid var(--bench-rule)', color: 'var(--bench-ink)', textDecoration: 'none', fontWeight: 600, fontSize: '1.0625rem' }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book/"
              onClick={() => setOpen(false)}
              className="btn btn-signal"
              style={{ marginTop: 20, justifyContent: 'center' }}
            >
              Book a repair
            </Link>
            <a
              href={SITE.phoneHref}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, padding: '13px 0', color: 'var(--bench-ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid var(--bench-rule)', borderRadius: 4 }}
            >
              <Phone size={16} /> Call {SITE.phoneDisplay}
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
