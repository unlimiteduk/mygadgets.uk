import { Link } from "react-router";

// Placeholder promo — swap the code/copy for the client's actual offer
// before launch, same as the prices in data/services.ts.
export default function OfferBanner() {
  return (
    <section className="container-12" style={{ paddingBlock: 8 }}>
      <div
        style={{
          borderRadius: 20,
          padding: "40px 32px",
          background: "linear-gradient(120deg, var(--navy) 0%, #123061 100%)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 64,
          gap: 24,
        }}
      >
        <div>
          <p className="label" style={{ color: "#8FB4F5", marginBottom: 10 }}>
            West London service
          </p>
          <h2
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Easy repair booking from Whitton to Feltham.
          </h2>
          <p
            style={{
              color: "#B9C7DE",
              marginTop: 8,
              marginBottom: 0,
              maxWidth: "48ch",
            }}
          >
            Tell us the device and fault, then choose the handover that works
            for you.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: 10,
              border: "1.5px dashed #5B87D6",
              color: "#FFFFFF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            WELCOME10
          </span> */}
          <Link
            to="/book/"
            className="btn btn-signal"
            style={{ padding: "14px 24px" }}
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
}
