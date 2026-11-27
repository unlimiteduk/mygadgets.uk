import Seo, { breadcrumbSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Docket from "@/components/Docket";
import { Link } from "react-router";
import { SITE } from "@/data/site";

export default function Business() {
  return (
    <Layout>
      <Seo
        title={`Business repairs & refurbished fleets | ${SITE.name}`}
        description="Computer repair and refurbished device enquiries for businesses in Whitton and Twickenham. Discuss your devices, repair priorities, timing and a written quote."
        path="/business/"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Business", path: "/business/" },
        ])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="display-l"
              style={{ margin: 0, color: "var(--bench-ink)" }}
            >
              Your fleet, our bench
            </h1>
            <p
              className="body-copy text-muted"
              style={{ fontSize: "1.125rem", marginTop: 20 }}
            >
              Contact our Whitton shop about repairs and refurbished devices for
              your business. Send the models, faults and required timing so we
              can discuss the options and provide a quote.
            </p>
            {[
              [
                "Repair priorities",
                "Tell us which devices are essential to your work. We confirm parts availability, expected timing and cost before work starts.",
              ],
              [
                "Refurbished devices",
                "Discuss the specifications and quantity you need. Availability and the written warranty are confirmed for the devices offered.",
              ],
              [
                "Data and access",
                "Tell us about any business data or access restrictions before handing over a device. Back up your files where possible and agree what testing is needed.",
              ],
              [
                "End-of-life equipment",
                "Ask us about your options for equipment that is not economical to repair. Confirm data erasure and recycling arrangements before handover.",
              ],
            ].map(([h, p]) => (
              <Reveal key={h}>
                <div
                  style={{
                    borderTop: "1px solid var(--bench-rule)",
                    paddingBlock: 24,
                  }}
                >
                  <h2
                    className="h3"
                    style={{ margin: "0 0 8px", color: "var(--bench-ink)" }}
                  >
                    {h}
                  </h2>
                  <p className="body-copy text-muted" style={{ margin: 0 }}>
                    {p}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 32,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`mailto:${SITE.email}?subject=Business%20account`}
                  className="btn btn-signal"
                >
                  Email about a business account
                </a>
                <Link to="/shop/" className="btn btn-ghost">
                  Current refurb stock
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <Docket
                id="BUSINESS"
                title="What to send with your enquiry"
                rows={[
                  { k: "DEVICES", v: "Make, model and quantity" },
                  { k: "FAULTS", v: "Symptoms and any damage" },
                  { k: "TIMING", v: "Your preferred turnaround" },
                  { k: "DATA", v: "Access or backup requirements" },
                ]}
              />
              <p className="small text-muted" style={{ marginTop: 14 }}>
                We confirm the scope, quote and handover arrangements with you
                before accepting the work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
