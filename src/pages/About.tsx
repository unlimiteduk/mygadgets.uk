import Seo, { breadcrumbSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router";
import { SITE } from "@/data/site";

export default function About() {
  return (
    <Layout>
      <Seo
        title={`About — the workshop on Whitton High Street | ${SITE.name}`}
        description={`${SITE.name} is an independent repair workshop on Whitton High Street: ESD mats, torque drivers, microscopes, and prices in writing. Visit our independent local repair shop.`}
        path="/about/"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="display-l"
              style={{ margin: 0, color: "var(--bench-ink)" }}
            >
              Your local tech people in Whitton
            </h1>
            <Reveal>
              <p
                className="body-copy text-muted"
                style={{ fontSize: "1.125rem", marginTop: 24 }}
              >
                My Gadgets Whitton is a computer repair shop and refurbished
                Apple store at 23 High Street, Whitton, Twickenham. We repair
                MacBooks, Windows laptops, phones, tablets and consoles, with a
                quote before work starts.
              </p>
              <p className="body-copy text-muted">
                Visit us for diagnosis, repair advice or help choosing
                refurbished tech. Tell us what matters most — getting back to
                work, keeping your files, or comparing repair and replacement
                costs.
              </p>
              <p className="body-copy text-muted">
                Before leaving a device, back up anything important if you can.
                Ask us about access, testing and data handling for your
                particular repair.
              </p>
            </Reveal>

            <Reveal>
              <div style={{ marginTop: 40 }}>
                <h2 className="h2" style={{ color: "var(--bench-ink)" }}>
                  How we source parts
                </h2>
                <p className="body-copy text-muted">
                  Replacement part options depend on your device and
                  availability. Ask us which part grade is included in your
                  quote, whether any features are affected, and what the written
                  repair warranty covers before you approve the work.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 32,
                  flexWrap: "wrap",
                }}
              >
                <Link to="/repairs/" className="btn btn-signal">
                  See the repairs
                </Link>
                <Link to="/shop/" className="btn btn-ghost">
                  Browse refurbished
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <figure
                style={{
                  margin: 0,
                  aspectRatio: "4 / 5",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  border: "1px solid var(--bench-rule)",
                }}
              >
                <img
                  src="/images/about-technician-bench.webp"
                  alt="Technician at the repair bench, mid-repair on an open MacBook under a desk lamp"
                  width={400}
                  height={500}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <div style={{ marginTop: 24 }}>
                <figure
                  style={{
                    margin: 0,
                    aspectRatio: "4 / 3",
                    borderRadius: "var(--radius-card)",
                    overflow: "hidden",
                    border: "1px solid var(--bench-rule)",
                  }}
                >
                  <img
                    src="/images/about-logic-board-macro.webp"
                    alt="Macro shot of a logic board being soldered under a microscope"
                    width={1200}
                    height={896}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
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
