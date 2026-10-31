import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router';
import { SITE } from '@/data/site';

export default function About() {
  return (
    <Layout>
      <Seo
        title={`About — the workshop on Whitton High Street | ${SITE.name}`}
        description={`${SITE.name} is an independent repair workshop on Whitton High Street: ESD mats, torque drivers, microscopes, and prices in writing. The bench, not the kiosk.`}
        path="/about/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>The workshop, not the kiosk</h1>
            <Reveal>
              <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 24 }}>
                My Gadgets UK is a physical shop on Whitton High Street with a proper bench in it: ESD mats, torque drivers, a microscope, a laser separator, and a magnetic tray that has caught every screw from every job since we opened.
              </p>
              <p className="body-copy text-muted">
                We started because the choice in this market was a kiosk with clip-art or a mail-in franchise with a call centre. Neither tells you the price without being asked, and neither shows you the part that went into your phone. We do both, in writing, on a docket you keep.
              </p>
              <p className="body-copy text-muted">
                The proof of quality is the bench. Come in and watch a repair happen — the work is done metres from the counter, and nothing leaves the building. Devices containing your data are locked away overnight and handled under a written data policy.
              </p>
            </Reveal>

            <Reveal>
              <div style={{ marginTop: 40 }}>
                <h2 className="h2" style={{ color: 'var(--bench-ink)' }}>How we source parts</h2>
                <p className="body-copy text-muted">
                  MacBook displays are OEM-pulls from low-cycle donor machines or matched aftermarket premium — your quote states which, and the docket records what was fitted. iPhone panels are soft-OLED aftermarket premium unless you ask for Apple-sourced. Samsung S-series get Samsung's own service-pack assemblies. Batteries are genuine-spec cells with correct controllers. We do not fit unbranded parts, because they come back.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/repairs/" className="btn btn-signal">See the repairs</Link>
                <Link to="/shop/" className="btn btn-ghost">Browse refurbished</Link>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <figure
                style={{
                  margin: 0,
                  aspectRatio: '4 / 5',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  border: '1px solid var(--bench-rule)',
                }}
              >
                <img
                  src="/images/about-technician-bench.webp"
                  alt="Technician at the repair bench, mid-repair on an open MacBook under a desk lamp"
                  width={400}
                  height={500}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </figure>
              <div style={{ marginTop: 24 }}>
                <figure
                  style={{
                    margin: 0,
                    aspectRatio: '4 / 3',
                    borderRadius: 'var(--radius-card)',
                    overflow: 'hidden',
                    border: '1px solid var(--bench-rule)',
                  }}
                >
                  <img
                    src="/images/about-logic-board-macro.webp"
                    alt="Macro shot of a logic board being soldered under a microscope"
                    width={1200}
                    height={896}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
