import { Link } from 'react-router';
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Cpu,
  Gamepad2,
  HardDrive,
  Keyboard,
  Laptop,
  Monitor,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Wrench,
} from 'lucide-react';
import { DEVICE_HUBS, getService } from '@/data/services';

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
  { category: 'Xbox HDMI port', icon: Cable, slug: 'xbox/hdmi-port-repair' },
  { category: 'Laptop screen', icon: Monitor, slug: 'laptop/screen-replacement' },
] as const;

function priceLine(slug: string) {
  const service = getService(slug);
  if (!service) return '';
  return service.quoteOnly ? 'Quote at the bench' : `From ${service.fromPrice}`;
}

export default function PopularServices() {
  const macbook = DEVICE_HUBS.find((d) => d.slug === 'macbook');
  const consoles = DEVICE_HUBS.find((d) => d.slug === 'console');
  const screen = getService('macbook/screen-replacement');
  const laptopScreen = getService('laptop/screen-replacement');
  const ssd = getService('macbook/ssd-upgrade');
  const hdmi = getService('playstation/hdmi-port-repair');

  const featuredHrefs = new Set([
    '/repairs/macbook/screen-replacement/',
    '/repairs/playstation/hdmi-port-repair/',
  ]);

  return (
    <section className="container-12 section-pad">
      <p className="label section-kicker" style={{ color: 'hsl(var(--primary))' }}>Popular repairs</p>
      <h2 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>The repairs people ask for most</h2>

      <div className="feature-grid" style={{ marginTop: 28 }}>
        <Link to="/repairs/macbook/" className="feature-card is-lead">
          <img
            src="/images/macbook-screen-replacement.webp"
            alt="Before and after — cracked MacBook lid next to the same machine with a fresh display"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <div className="feature-copy">
            <span className="icon-tile" aria-hidden="true"><Laptop size={22} /></span>
            <h3>MacBook repair</h3>
            <p>{macbook?.blurb}</p>
            <div className="feature-meta">
              <span>View MacBook repairs</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        <Link to="/repairs/macbook/screen-replacement/" className="feature-card">
          <span className="icon-tile" aria-hidden="true"><Monitor size={22} /></span>
          <h3>Screen & LCD repair</h3>
          <p>
            {screen ? `${screen.deviceLabel} screens ${screen.quoteOnly ? 'quoted at the bench' : `from ${screen.fromPrice}`}, ${screen.turnaround.toLowerCase()}.` : null}
            {laptopScreen && !laptopScreen.quoteOnly ? ` Windows laptops from ${laptopScreen.fromPrice}.` : null}
          </p>
          <div className="feature-meta">
            <span>{screen && !screen.quoteOnly ? `From ${screen.fromPrice}` : 'Quote at the bench'}</span>
            <ArrowRight size={16} />
          </div>
        </Link>

        <Link to="/repairs/macbook/ssd-upgrade/" className="feature-card">
          <span className="icon-tile" aria-hidden="true"><HardDrive size={22} /></span>
          <h3>SSD upgrade</h3>
          <p>
            {ssd ? `${ssd.deviceLabel} ${ssd.name.toLowerCase()}${ssd.quoteOnly ? ', quoted at the bench' : `, from ${ssd.fromPrice}`}. ${ssd.turnaround}.` : null}
            {' '}Windows laptop SSD upgrades are quoted after we see the machine.
          </p>
          <div className="feature-meta">
            <span>{ssd && !ssd.quoteOnly ? `From ${ssd.fromPrice}` : 'Quote at the bench'}</span>
            <ArrowRight size={16} />
          </div>
        </Link>

        <Link to="/repairs/console/" className="feature-card">
          <span className="icon-tile" aria-hidden="true"><Gamepad2 size={22} /></span>
          <h3>Console repair</h3>
          <p>{consoles?.blurb}</p>
          <div className="feature-meta">
            <span>PlayStation & Xbox</span>
            <ArrowRight size={16} />
          </div>
        </Link>

        <Link to="/repairs/playstation/hdmi-port-repair/" className="feature-card">
          <span className="icon-tile" aria-hidden="true"><Cable size={22} /></span>
          <h3>HDMI port repair</h3>
          <p>
            {hdmi ? `${hdmi.name} for PlayStation and Xbox. ${hdmi.quoteOnly ? 'Quote at the bench after a free look.' : `From ${hdmi.fromPrice}.`}` : null}
          </p>
          <div className="feature-meta">
            <span>{hdmi?.quoteOnly ? 'Quote at the bench' : priceLine('playstation/hdmi-port-repair')}</span>
            <ArrowRight size={16} />
          </div>
        </Link>
      </div>

      <h3 className="h3" style={{ margin: '40px 0 16px', color: 'var(--bench-ink)' }}>More from the bench</h3>
      <div className="service-grid">
        {POPULAR.filter((item) => !featuredHrefs.has(`/repairs/${item.slug}/`)).map(({ category, icon: Icon, slug }) => {
          const service = getService(slug);
          if (!service) return null;
          return (
            <Link key={slug} to={`/repairs/${slug}/`} className="service-card">
              <span className="icon-tile" aria-hidden="true"><Icon size={20} /></span>
              <strong>{category}</strong>
              <p>{service.deviceLabel} · {service.turnaround}</p>
              <div className="feature-meta">
                <span>{service.quoteOnly ? 'Quote at the bench' : `From ${service.fromPrice}`}</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
