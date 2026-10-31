import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import { SITE } from '@/data/site';

export default function Warranty() {
  return (
    <Layout>
      <Seo
        title={`Warranty — repairs ${SITE.repairsWarranty}, refurbished ${SITE.refurbWarranty} | ${SITE.name}`}
        description="Every repair carries a written 3-month warranty; every refurbished Mac carries 6 months. What is covered, what is not, and how a claim actually works."
        path="/warranty/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Warranty', path: '/warranty/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0 }}>Warranty, in plain English</h1>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: 20, maxWidth: '58ch' }}>
              Your docket is your warranty record. No registration, no fine print you need a microscope for — fittingly, the microscope stays on the bench.
            </p>

            {[
              ['Repairs — 3 months', 'Covers the part we fitted and the work we did. If the same fault returns through a defect in the part or our fitting, we put it right free. It does not cover new physical damage, liquid damage after the repair, or unrelated faults — we will show you the difference if it ever matters.'],
              ['Refurbished devices — 6 months', 'Covers hardware failure in normal use, including the battery holding within 10% of its listed health. It does not cover drops, spills or software you install. Batteries are consumables, but ours are bench-verified before sale and warranted like everything else.'],
              ['Liquid-damage repairs', 'Covered for the specific circuits we repaired, for 3 months. Liquid can have delayed effects elsewhere, and we say that plainly rather than hiding it.'],
              ['How a claim works', 'Bring the device and the docket (or just your name — we keep the records). We test it on the bench while you wait where we can. If it is our part or our work, it is fixed free, prioritised over new work.'],
            ].map(([h, p]) => (
              <Reveal key={h}>
                <div style={{ borderTop: '1px solid var(--bench-rule)', paddingBlock: 24 }}>
                  <h2 className="h3" style={{ margin: '0 0 8px' }}>{h}</h2>
                  <p className="body-copy" style={{ margin: 0, color: '#374151' }}>{p}</p>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <p className="small" style={{ color: '#6B7280', marginTop: 24 }}>
                Your statutory rights under the Consumer Rights Act 2015 sit alongside all of this and are unaffected by it. Full written terms are provided with every docket and are available in the shop.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <Docket
                id="WTY-001"
                title="What you hold in your hand"
                rows={[
                  { k: 'REPAIRS', v: SITE.repairsWarranty, ok: true },
                  { k: 'REFURBISHED', v: SITE.refurbWarranty, ok: true },
                  { k: 'CLAIM TIME', v: 'Bench test while you wait' },
                  { k: 'PROOF NEEDED', v: 'The docket — or just your name' },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
