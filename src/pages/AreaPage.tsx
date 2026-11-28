import { useParams, Link } from "react-router";
import { MapPin, Phone } from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import Docket from "@/components/Docket";
import { getArea } from "@/data/areas";
import { getService } from "@/data/services";
import { AREAS_COVERED, SITE } from "@/data/site";
import ActionRow from "@/components/ActionRow";
import NotFound from "./NotFound";

export default function AreaPage() {
  const { slug } = useParams();
  const area = getArea(slug ?? "");
  if (!area) return <NotFound />;
  const path = `/areas/${area.slug}/`;
  const services = area.serviceSlugs.map(getService).filter((s) => s != null);
  return (
    <Layout>
      <Seo
        title={`${area.headline} | ${SITE.name}`}
        description={area.metaDescription}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: area.name, path },
          ]),
          faqSchema(area.faqs),
        ]}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: "Home", path: "/" }, { name: area.name }]} />
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="lg-eyebrow">
              {area.name} · {area.postcode}
            </p>
            <h1 className="display-l" style={{ margin: 0 }}>
              {area.headline}
            </h1>
            <p
              className="body-copy text-muted"
              style={{ marginTop: 24, fontSize: "1.0625rem" }}
            >
              {area.intro}
            </p>
            {["whitton", "twickenham", "hounslow"].includes(area.slug) && (
              <p className="body-copy text-muted" style={{ marginTop: 16 }}>
                See{" "}
                <Link to="/repairs/macbook/">MacBook repair</Link>,{" "}
                <Link to="/repairs/macbook/screen-replacement/">
                  MacBook screen replacement
                </Link>
                ,{" "}
                <Link to="/repairs/playstation/hdmi-port-repair/">
                  PS5 HDMI port repair
                </Link>
                ,{" "}
                <Link to="/repairs/xbox/hdmi-port-repair/">
                  Xbox HDMI port repair
                </Link>
                ,{" "}
                <Link to="/repairs/macbook/data-recovery/">
                  MacBook data recovery
                </Link>{" "}
                and the <Link to="/shop/">refurbished MacBook shop</Link>.
              </p>
            )}
            <div style={{ marginTop: 28 }}>
              <ActionRow bookLabel="Get a repair quote" />
            </div>
          </div>
          <aside
            className="col-span-12 lg:col-span-4 lg:col-start-9 panel"
            style={{ padding: 26, alignSelf: "start" }}
          >
            <p className="label">Visit our Whitton workshop</p>
            <h2 className="h3" style={{ marginTop: 14 }}>
              {SITE.name}
            </h2>
            <address style={{ fontStyle: "normal", marginTop: 14 }}>
              {SITE.street}, {SITE.locality}
              <br />
              {SITE.region} {SITE.postcode}
            </address>
            <div className="hours-list">
              {SITE.hours.map((h) => (
                <div key={h.days}>
                  <span>{h.days}</span>
                  <span>
                    {h.opens === "Closed" ? "Closed" : `${h.opens}–${h.closes}`}
                  </span>
                </div>
              ))}
            </div>
            <p className="small text-muted" style={{ marginTop: 12 }}>
              {SITE.hoursNote}
            </p>
            <div className="action-row" style={{ marginTop: 22 }}>
              <a
                className="btn btn-signal"
                href={SITE.directionsHref}
                target="_blank"
                rel="noopener"
              >
                <MapPin size={16} />
                Get directions
              </a>
              <a className="btn btn-ghost" href={SITE.landlineHref}>
                <Phone size={16} />
                {SITE.landlineDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>
      <section className="band">
        <div className="container-12 section-pad">
          <h2 className="h2">Repair options for {area.name}</h2>
          <p className="body-copy text-muted">
            Starting prices depend on your exact model and fault. We confirm
            parts, timing and the quote after checking the device.
          </p>
          <div className="grid-12" style={{ marginTop: 28 }}>
            {services.map((s) => (
              <div key={s.slug} className="col-span-12 md:col-span-6">
                <Docket
                  id={s.slug.split("/").pop()!.slice(0, 6).toUpperCase()}
                  title={`${s.deviceLabel} ${s.name.toLowerCase()}`}
                  href={`/repairs/${s.slug}/`}
                  rows={
                    s.quoteOnly
                      ? [
                          { k: "PRICE", v: "Quoted after diagnosis" },
                          { k: "DIAGNOSIS", v: "Free" },
                        ]
                      : [
                          { k: "FROM", v: s.fromPrice, price: true },
                          { k: "TURNAROUND", v: s.turnaround },
                        ]
                  }
                />
              </div>
            ))}
          </div>
          <Link
            to="/repairs/"
            className="btn btn-ghost"
            style={{ marginTop: 25 }}
          >
            Explore all repair services →
          </Link>
        </div>
      </section>
      <section className="container-12 section-pad">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="h2">{area.adviceHeading}</h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {area.advice.map((p) => (
              <p
                key={p}
                className="body-copy text-muted"
                style={{ marginBottom: 20 }}
              >
                {p}
              </p>
            ))}
            <p className="body-copy text-muted">
              All visits are to our shop in Whitton. Contact us to confirm any
              collection request before arranging handover.
            </p>
            <ActionRow bookLabel="Ask about your repair" />
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <h2 className="h2">Questions about repairs for {area.name}</h2>
          <div style={{ marginTop: 20, maxWidth: "72ch" }}>
            {area.faqs.map((faq) => (
              <details key={faq.q} style={{ marginBottom: 12 }}>
                <summary>{faq.q}</summary>
                <p className="body-copy text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <h2 className="h3">Nearby areas</h2>
          <div className="area-grid">
            {AREAS_COVERED.filter((a) => a.slug !== area.slug).map((a) => (
              <Link className="area-chip" key={a.slug} to={`/areas/${a.slug}/`}>
                {a.name}
                <span className="mono">{a.postcode}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
