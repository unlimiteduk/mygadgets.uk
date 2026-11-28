import { Link } from "react-router";
import Seo, { breadcrumbSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import { SITE } from "@/data/site";

const UPDATED = "28 November 2026";

export default function Terms() {
  return (
    <Layout>
      <Seo
        title={`Terms and conditions | ${SITE.name}`}
        description="Terms for repairs, quotes and refurbished devices at My Gadgets Whitton, 23 High Street, Whitton, Twickenham. Data, warranties, payment and your consumer rights."
        path="/terms/"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms and conditions", path: "/terms/" },
        ])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: "Home", path: "/" }, { name: "Terms and conditions" }]} />
        <div style={{ maxWidth: "72ch" }}>
          <h1 className="display-l" style={{ margin: 0 }}>
            Terms and conditions
          </h1>
          <p className="body-copy text-muted" style={{ marginTop: 20 }}>
            These terms cover repairs and refurbished devices from {SITE.legalName}
            , trading as {SITE.name}, at {SITE.street}, {SITE.locality},{" "}
            {SITE.region} {SITE.postcode}. They also cover enquiries by phone,
            WhatsApp, email, this website, Google Business Profile and Facebook.
            Last updated {UPDATED}.
          </p>
          <p className="body-copy">
            Opening hours are Monday to Friday 09:00–18:00, Saturday
            10:30–17:00, and Sunday closed. Phone{" "}
            <a href={SITE.landlineHref}>{SITE.landlineDisplay}</a> or{" "}
            <a href={SITE.mobileHref}>{SITE.mobileDisplay}</a>. Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Quotes and diagnostics
          </h2>
          <p className="body-copy">
            Diagnosis is free. We inspect the device and give you a quote
            before paid work starts. Nothing is charged for the repair until
            you agree that quote. A figure on the website is a starting point
            for that type of job. The quote for your device, confirmed before
            we start, is the price that applies.
          </p>
          <p className="body-copy">
            You can walk in during opening hours. Booking ahead reserves a part
            or a time where we have said so. A request for collection is not
            agreed until we confirm it. We only accept a device by post where
            the relevant page on this website says that we do.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Your responsibility to back up
          </h2>
          <p className="body-copy">
            You are responsible for backing up photos, files, accounts and game
            saves before you leave a device with us or post it to us. Please
            remove accessories you do not want us to store, and tell us if the
            data matters more than the repair.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Data on the device
          </h2>
          <p className="body-copy">
            We only access data on the device as far as we need to test or
            repair it. We do not copy it and we do not keep it, unless you have
            asked us to recover or transfer files and we have agreed that job.
            Screen, battery, port and HDMI work does not include wiping the
            device. If storage has failed and the data cannot stay, we tell you
            before anything is erased.
          </p>
          <p className="body-copy">
            We are not liable for loss of data, or for loss that follows from
            it, except where we agreed in writing to recover or transfer
            specified files. Even then, recovery depends on the condition of
            the storage and is not promised before diagnosis. Where we have
            said that you pay nothing if we cannot recover the files you asked
            for, that statement applies to that data-recovery job.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Parts
          </h2>
          <p className="body-copy">
            Before you agree, we tell you the kind of part we intend to fit,
            including whether it is genuine, an original pull from another
            machine, or a compatible replacement. That description is part of
            the quote or the receipt. We do not fit a part that will not fix
            the fault we have found.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Repair warranty
          </h2>
          <p className="body-copy">
            Repairs carry the written warranty period stated on your receipt.
            Our published warranty page currently describes a {SITE.repairsWarranty}{" "}
            warranty on the part we fitted and the work we did, and a{" "}
            {SITE.refurbWarranty} warranty on refurbished devices. If your
            receipt names the period for that job, the receipt is the record
            you hold. The warranty does not cover new physical damage, liquid
            damage after the repair, or a fault we did not work on. How a claim
            works is set out on the <Link to="/warranty/">warranty page</Link>.
            Your statutory rights are not affected.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Uncollected devices
          </h2>
          <p className="body-copy">
            When a device is ready, we contact you using the details you gave
            us. Please collect it promptly. This page does not set a fixed
            number of days we will store an uncollected device. We will tell
            you at the time how long we can keep it and what we will do if it
            is not collected. We do not sell or dispose of a device without
            trying to reach you first.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Refurbished devices
          </h2>
          <p className="body-copy">
            Each listing is one machine, with its cycle count and marks
            described in writing. You can inspect an in-stock machine at the
            counter before you pay. Under the Consumer Rights Act 2015, goods
            must be of satisfactory quality, fit for purpose, and as described.
            You have the short-term right to reject faulty goods within the
            period the Act sets, and the other rights the Act gives you. Our{" "}
            {SITE.refurbWarranty} refurbished warranty sits alongside those
            rights and does not replace them.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Payment
          </h2>
          <p className="body-copy">
            You pay the amount on the agreed quote, at the time we agree, which
            is normally when you collect the device or when you buy a
            refurbished machine. Card payments are processed by our payment
            provider. We do not store full card numbers. We also take the other
            methods we tell you in the shop, which can include cash and bank
            transfer. This page does not add a fee, a deposit rule, or a
            discount.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Liability
          </h2>
          <p className="body-copy">
            Nothing in these terms limits our liability for death or personal
            injury caused by negligence, for fraud, or for your rights under
            the Consumer Rights Act 2015. Subject to that, we are not liable
            for loss of profit, or for loss that was not a foreseeable result
            of our breach. We have not set a further money cap on this page.
            The data-loss wording above is the limit that applies to files on
            the device.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Governing law
          </h2>
          <p className="body-copy">
            These terms are governed by the law of England and Wales. The
            courts of England and Wales will hear disputes, without taking away
            any right you have to bring a claim in your home part of the United
            Kingdom where the law gives you that choice.
          </p>

          <p className="body-copy" style={{ marginTop: 36 }}>
            How we handle personal information is in the{" "}
            <Link to="/privacy-policy/">privacy policy</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
