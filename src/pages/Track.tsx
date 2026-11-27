import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import Seo, { breadcrumbSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import { SITE } from "@/data/site";

export default function Track() {
  const [reference, setReference] = useState("");
  const message = `Hi, could you check my repair status? Reference: ${reference.trim() || "I need help finding my reference"}.`;
  return (
    <Layout>
      <Seo
        title={`Repair status | ${SITE.name}`}
        description="Ask the Whitton shop for an update on your repair by WhatsApp or phone. Have your job reference ready."
        path="/track/"
        robots="noindex, follow"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Repair status", path: "/track/" },
        ])}
      />
      <section className="container-12 section-pad">
        <h1 className="display-l">Need an update on your repair?</h1>
        <p className="body-copy text-muted" style={{ marginTop: 20 }}>
          Your technician can check the job and give you the latest update.
          Online status lookup is not available; please contact the shop with
          your reference.
        </p>
        <div className="field" style={{ maxWidth: 440, marginTop: 28 }}>
          <label htmlFor="repair-reference">Repair reference (optional)</label>
          <input
            id="repair-reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Reference from your job receipt"
            maxLength={80}
            autoComplete="off"
          />
        </div>
        <div className="action-row" style={{ marginTop: 24 }}>
          <a
            className="btn btn-signal"
            href={`${SITE.whatsappHref}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.landlineHref}>
            <Phone size={18} />
            {SITE.landlineDisplay}
          </a>
        </div>
      </section>
    </Layout>
  );
}
