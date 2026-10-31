import { Link } from "react-router";
import {
  Laptop,
  Smartphone,
  Tablet,
  TabletSmartphone,
  Laptop2,
  ArrowRight,
  Gamepad2,
  Monitor,
  PcCase,
} from "lucide-react";
import { DEVICE_HUBS } from "@/data/services";

const ICONS: Record<string, typeof Laptop> = {
  macbook: Laptop,
  iphone: Smartphone,
  ipad: Tablet,
  samsung: TabletSmartphone,
  laptop: Laptop2,
  console: Gamepad2,
  playstation: Gamepad2,
  xbox: Gamepad2,
  imac: Monitor,
  pc: PcCase,
};

export default function DeviceSelector() {
  return (
    <section className="container-12 section-pad">
      <div style={{ marginBottom: 40 }}>
        <p
          className="label"
          style={{ color: "hsl(var(--primary))", marginBottom: 12 }}
        >
          What needs fixing?
        </p>
        <h2
          className="display-l"
          style={{ margin: 0, color: "var(--bench-ink)" }}
        >
          Pick your device
        </h2>
        <p style={{ color: "#4B5563", marginTop: 12, maxWidth: "60ch" }}>
          Phones and laptops open booking. Consoles, iMacs and PCs open the repair page.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
        }}
      >
        {DEVICE_HUBS.map((d) => {
          const Icon = ICONS[d.slug] ?? Laptop;
          return (
            <Link
              key={d.slug}
              to={d.selectorTo ?? `/book/?device=${d.slug}`}
              className="docket is-hoverable"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div style={{ padding: "28px 22px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "hsl(var(--accent))",
                    color: "hsl(var(--primary))",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={24} />
                </span>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: "var(--bench-ink)",
                  }}
                >
                  {d.label}
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#6B7280",
                    marginTop: 6,
                    marginBottom: 16,
                    minHeight: 36,
                  }}
                >
                  {d.blurb}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "hsl(var(--primary))",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  View repairs <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
