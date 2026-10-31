import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import { Link } from 'react-router';
import { SITE } from '@/data/site';

export default function Business() {
  return (
    <Layout>
      <Seo
        title={`Business repairs & refurbished fleets | ${SITE.name}`}
        description="Repairs, refurbished Mac fleets and priority turnaround for schools, offices and studios around Whitton, Twickenham and Richmond. Invoiced, warrantied, documented."
        path="/business/"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Business', path: '/business/' }])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>Your fleet, our bench</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>
              Schools, offices and studios around TW postcodes run their repairs and refurbished purchases through us. Priority turnaround, monthly invoicing, and a paper trail your finance person will actually like.
            </p>
            {[
              ['Priority turnaround', 'Business jobs jump the walk-in queue. Screens and batteries same day; board work quoted within 24 hours of arrival.'],
              ['Refurbished fleets', 'Graded MacBooks in ones or twenties, each unit documented with cycle count, marks and warranty. Standardise on a model and we will source to it.'],
              ['Data handling in writing', 'Devices containing school or company data are handled under our written data-handling policy, locked away out of hours, and wiped with certificates on request.'],
              ['WEEE-registered disposal', 'End-of-life kit is disposed of through registered WEEE channels, with paperwork.'],
            ].map(([h, p]) => (
              <Reveal key={h}>
                <div style={{ borderTop: '1px solid var(--bench-rule)', paddingBlock: 24 }}>
                  <h2 className="h3" style={{ margin: '0 0 8px', color: 'var(--bench-ink)' }}>{h}</h2>
                  <p className="body-copy text-muted" style={{ margin: 0 }}>{p}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <a href={`mailto:${SITE.email}?subject=Business%20account`} className="btn btn-signal">Email about a business account</a>
                <Link to="/shop/" className="btn btn-ghost">Current refurb stock</Link>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <Docket
                id="B2B-010"
                title="Example: school iPad fleet"
                rows={[
                  { k: 'SCOPE', v: '14 × iPad 9 digitiser' },
                  { k: 'PRICE EACH', v: '£59 (fleet rate)', price: true },
                  { k: 'TURNAROUND', v: 'One half-term week', ok: true },
                  { k: 'PAPERWORK', v: 'Dockets + single invoice' },
                  { k: 'WARRANTY', v: '3 months, each unit' },
                ]}
              />
              <p className="small text-muted" style={{ marginTop: 14 }}>
                An example of how a fleet job is documented — individual dockets per device, one invoice for the bursar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
