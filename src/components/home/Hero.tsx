import { Link } from "react-router";
import { ShieldCheck } from "lucide-react";
import { SITE } from "@/data/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const BADGES = ["Fast", "Reliable", "Affordable"];
const AVATARS = ["SB", "RK", "MT", "JH"];

export default function Hero() {
  return (
    <section
      className="container-12"
      style={{ paddingTop: 56, paddingBottom: 72 }}
    >
      <div className="grid-12" style={{ alignItems: "center" }}>
        <div className="col-span-12 lg:col-span-6">
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {BADGES.map((b) => (
              <span
                key={b}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "hsl(var(--accent))",
                  color: "hsl(var(--primary))",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                }}
              >
                {b}
              </span>
            ))}
          </div>

          <h1
            className="display-ll"
            style={{ color: "var(--bench-ink)", margin: 0 }}
          >
            <span className="accent-underline">MacBook, Laptop & Console Repair in Whitton, Twickenham</span>
          </h1>
          <p
            style={{
              color: "#4B5563",
              fontSize: "1.125rem",
              marginTop: 24,
              maxWidth: "48ch",
            }}
          >
            MacBook and Windows laptop repairs — screens, batteries, logic
            boards, SSD upgrades and data recovery — plus PlayStation and Xbox
            HDMI port repair. Most repairs are back the same day. Where a price
            is published on this site, that is the price, and every repair
            carries a written warranty.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 32,
            }}
          >
            <Link
              to="/book/"
              className="btn btn-signal"
              style={{ padding: "15px 26px", fontSize: "1rem" }}
            >
              Book a repair
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost"
              style={{ padding: "15px 26px", fontSize: "1rem" }}
            >
              <WhatsAppIcon size={18} /> WhatsApp us
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 36,
            }}
          >
            <div style={{ display: "flex" }}>
              {AVATARS.map((initials, i) => (
                <span
                  key={initials}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    background: "hsl(var(--accent))",
                    color: "hsl(var(--primary))",
                    border: "2px solid var(--bench)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    marginLeft: i === 0 ? 0 : -10,
                  }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#4B5563" }}>
              Trusted across Whitton, Twickenham &amp; Hounslow —{" "}
              <Link
                to="/reviews/"
                style={{ color: "hsl(var(--primary))", fontWeight: 600 }}
              >
                read our Google reviews ↗
              </Link>
            </p>
          </div>
        </div>

        <div
          className="col-span-12 lg:col-span-5 lg:col-start-8"
          style={{ marginTop: 40, position: "relative" }}
        >
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
              src="/images/hero-device-group.webp"
              alt="iPhone, MacBook and Galaxy phone laid out on the repair bench, freshly repaired"
              width={800}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </figure>
          <div
            style={{
              position: "absolute",
              bottom: -18,
              left: -18,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#FFFFFF",
              borderRadius: 14,
              padding: "12px 16px",
              boxShadow: "var(--card-shadow)",
              border: "1px solid var(--bench-rule)",
            }}
          >
            <ShieldCheck size={22} style={{ color: "var(--success)" }} />
            <div style={{ lineHeight: 1.2 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--bench-ink)",
                }}
              >
                {SITE.repairsWarranty} warranty
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                on every repair
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
