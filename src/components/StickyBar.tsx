import { Link, useLocation } from 'react-router';
import { Home, Wrench, Wand2, Tag, PackageSearch } from 'lucide-react';

// Mobile-only bottom nav, present on every page (brief: sticky action bar).
export default function StickyBar() {
  const { pathname } = useLocation();
  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  const itemStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    fontSize: '0.6875rem',
    fontWeight: 600,
    color: active ? 'hsl(var(--primary))' : '#6B7280',
    textDecoration: 'none',
  });

  return (
    <nav className="sticky-bar" aria-label="Quick actions">
      <Link to="/" style={itemStyle(isActive('/'))}>
        <Home size={20} />
        Home
      </Link>
      <Link to="/repairs/" style={itemStyle(isActive('/repairs/'))}>
        <Wrench size={20} />
        Services
      </Link>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Link
          to="/book/"
          aria-label="Book a repair"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 52,
            height: 52,
            borderRadius: 999,
            background: 'var(--brand-gradient)',
            color: '#FFFFFF',
            marginTop: -26,
            boxShadow: '0 6px 16px rgba(21, 103, 232, 0.4)',
            border: '4px solid #FFFFFF',
          }}
        >
          <Wand2 size={22} />
        </Link>
      </div>

      <Link to="/shop/" style={itemStyle(isActive('/shop/'))}>
        <Tag size={20} />
        Offers
      </Link>
      <Link to="/track/" style={itemStyle(isActive('/track/'))}>
        <PackageSearch size={20} />
        Track
      </Link>
    </nav>
  );
}
