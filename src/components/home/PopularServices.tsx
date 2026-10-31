import { Link } from 'react-router';
import { Laptop, BatteryCharging, ShieldCheck, Wrench, Cpu, Keyboard, Smartphone, TabletSmartphone, ArrowRight, HardDrive, Gamepad2 } from 'lucide-react';
import { getService } from '@/data/services';

// One representative service per popular-repair category, curated across
// devices — computer repair (MacBook + Windows laptop) leads, phones follow.
const POPULAR = [
  { category: 'Screen replacement', icon: Laptop, slug: 'macbook/screen-replacement' },
  { category: 'Battery replacement', icon: BatteryCharging, slug: 'macbook/battery-replacement' },
  { category: 'Virus removal & tune-up', icon: ShieldCheck, slug: 'laptop/virus-removal' },
  { category: 'Hinge & casing repair', icon: Wrench, slug: 'laptop/hinge-repair' },
  { category: 'Motherboard & logic board', icon: Cpu, slug: 'macbook/logic-board-repair' },
  { category: 'Keyboard & trackpad', icon: Keyboard, slug: 'macbook/keyboard-replacement' },
  { category: 'iPhone screen & battery', icon: Smartphone, slug: 'iphone/screen-replacement' },
  { category: 'Samsung Galaxy screen', icon: TabletSmartphone, slug: 'samsung/screen-replacement' },
  { category: 'Laptop SSD upgrade', icon: HardDrive, slug: 'laptop/ssd-upgrade' },
  { category: 'PlayStation HDMI port', icon: Gamepad2, slug: 'playstation/hdmi-port-repair' },
] as const;

export default function PopularServices() {
  return (
    <section className="container-12 section-pad" style={{ paddingTop: 0 }}>
      <div style={{ marginBottom: 40 }}>
        <p className="label" style={{ color: 'hsl(var(--primary))', marginBottom: 12 }}>Popular repairs</p>
        <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>The repairs people ask for most</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {POPULAR.map(({ category, icon: Icon, slug }) => {
          const service = getService(slug);
          if (!service) return null;
          return (
            <Link key={slug} to={`/repairs/${slug}/`} className="docket is-hoverable" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ padding: '24px 20px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'hsl(var(--accent))',
                    color: 'hsl(var(--primary))',
                    marginBottom: 14,
                  }}
                >
                  <Icon size={22} />
                </span>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--bench-ink)' }}>{category}</div>
                <p style={{ fontSize: '0.8125rem', color: '#6B7280', marginTop: 6, marginBottom: 14 }}>{service.deviceLabel} · {service.turnaround}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>{service.quoteOnly ? 'Quote at the bench' : `From ${service.fromPrice}`}</span>
                  <ArrowRight size={16} style={{ color: '#6B7280' }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
