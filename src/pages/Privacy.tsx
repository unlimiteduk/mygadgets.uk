import { Link } from "react-router";
import Seo, { breadcrumbSchema } from "@/components/Seo";
import Layout from "@/components/Layout";
import Crumbs from "@/components/Crumbs";
import { SITE } from "@/data/site";

const UPDATED = "28 November 2026";

export default function Privacy() {
  return (
    <Layout>
      <Seo
        title={`Privacy policy | ${SITE.name}`}
        description="How MY GADGETS LTD uses personal information for repairs and refurbished MacBooks at 23 High Street, Whitton, Twickenham. Your rights, and how to contact us."
        path="/privacy-policy/"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy/" },
        ])}
      />
      <section className="container-12 section-pad">
        <Crumbs items={[{ name: "Home", path: "/" }, { name: "Privacy policy" }]} />
        <div style={{ maxWidth: "72ch" }}>
          <h1 className="display-l" style={{ margin: 0 }}>
            Privacy policy
          </h1>
          <p className="body-copy text-muted" style={{ marginTop: 20 }}>
            This policy explains how {SITE.legalName}, trading as {SITE.name},
            uses personal information. It is written for customers in the
            United Kingdom and follows the UK GDPR and the Data Protection Act
            2018. Last updated {UPDATED}.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Who we are
          </h2>
          <p className="body-copy">
            {SITE.legalName} is the data controller. We trade as {SITE.name}.
            The workshop is at {SITE.street}, {SITE.locality}, {SITE.region}{" "}
            {SITE.postcode}. We are registered in England and Wales. Ask us if
            you need the company number; it is not printed on this page.
          </p>
          <p className="body-copy">
            Privacy requests:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>,{" "}
            <a href={SITE.landlineHref}>{SITE.landlineDisplay}</a>, or{" "}
            <a href={SITE.mobileHref}>{SITE.mobileDisplay}</a> (mobile and
            WhatsApp). You can also write to the address above. Website:{" "}
            <a href={SITE.domain}>{SITE.domain.replace("https://", "")}</a>.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            What we collect
          </h2>
          <p className="body-copy">
            When you contact us or leave a device with us, we may keep:
          </p>
          <ul className="body-copy">
            <li>Your name and contact details (phone, email, and a message).</li>
            <li>
              Device details and repair notes: the make, model, fault, the work
              agreed, and the quote or receipt.
            </li>
            <li>
              Messages you send by phone, WhatsApp, email, the website, Google
              Business Profile, or Facebook.
            </li>
          </ul>
          <p className="body-copy">
            The website forms do not save that information on our servers. The
            contact form opens WhatsApp or your email app. The repair request,
            the sell-your-device calculator, and the repair-status box stay in
            your browser until you choose to send a WhatsApp message or an
            email. A repair request can include your name, phone number, device,
            fault, and whether you will walk in or ask about collection.
            Collection is only if we agree it.
          </p>
          <p className="body-copy">
            Data stored on a device you bring in is yours. We only open or use
            what we need to test or repair it. We do not copy it and we do not
            keep it, except where you have asked us to recover or transfer
            files. We do not need your account password for an HDMI or port
            repair. If a job really needs a setting only you can change, we will
            ask you to do that part.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            How and why we use it
          </h2>
          <p className="body-copy">We use personal information to:</p>
          <ul className="body-copy">
            <li>
              Quote for, carry out, and warranty a repair, or sell a refurbished
              device (contract).
            </li>
            <li>
              Reply to you, keep a record of the job, and run the workshop
              (legitimate interests).
            </li>
            <li>
              Meet accounting and other legal duties (legal obligation).
            </li>
          </ul>
          <p className="body-copy">
            We do not sell personal information. We do not use it for automated
            decisions that have a legal effect on you.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Payments
          </h2>
          <p className="body-copy">
            Card payments in the shop are processed by our payment provider. We
            do not store your full card number or security code. This website
            does not name that provider and does not take card payments itself.
            If we agree a bank transfer, we use the account details needed to
            match the payment to your job.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Cookies and analytics
          </h2>
          <p className="body-copy">
            This website does not load analytics or advertising tags. There is
            no Google Analytics, Microsoft Clarity, Vercel Analytics, or similar
            tool in the code. We do not set advertising cookies.
          </p>
          <p className="body-copy">
            A short notice may ask you to accept or reject. Your choice is
            stored in this browser only (local storage, under the name
            mg-consent) so we do not ask every time. It is not sent to us. If
            we add analytics later, we will load them only after you accept, and
            we will update this policy first.
          </p>
          <p className="body-copy">
            The contact page embeds a Google Map. Loading that page can send
            your IP address and browser details to Google. Fonts are served from
            this website, not from a third-party font service.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Who else sees it
          </h2>
          <p className="body-copy">Only where the service is actually in use:</p>
          <ul className="body-copy">
            <li>
              WhatsApp (Meta), if you message us or send a form that way.
            </li>
            <li>
              Facebook (Meta), if you message the shop page, and Google, if you
              message us on our Google Business Profile or leave a Google
              review.
            </li>
            <li>
              Google, when the contact-page map loads, as described above.
            </li>
            <li>Our card payment provider, for a card payment in the shop.</li>
            <li>
              The email service that delivers mail to {SITE.email}, when you
              email us.
            </li>
          </ul>
          <p className="body-copy">
            Those companies process the message or payment under their own
            terms as well as ours. We do not pass your details to a marketing
            list.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            How long we keep it
          </h2>
          <p className="body-copy">
            We keep enquiry and repair records for as long as we need them to
            finish the job, deal with a warranty claim, and meet legal and
            accounting duties. This page does not set a single number of years.
            Files recovered for you are not kept once the job is done, unless
            you ask us to hold them and we agree.
          </p>

          <h2 className="h3" style={{ marginTop: 36 }}>
            Your rights
          </h2>
          <p className="body-copy">
            You can ask for a copy of the personal information we hold, ask us
            to correct it, erase it, restrict it, or transfer it, and you can
            object to use based on legitimate interests. Where we ever rely on
            consent, you can withdraw it. We may need to keep some records where
            the law says we must.
          </p>
          <p className="body-copy">
            To use these rights, email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
            <a href={SITE.landlineHref}>{SITE.landlineDisplay}</a>. You can also
            complain to the Information Commissioner’s Office at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener">
              ico.org.uk
            </a>
            . We would like the chance to put a problem right first.
          </p>

          <p className="body-copy" style={{ marginTop: 36 }}>
            Our repair and sale terms are on the{" "}
            <Link to="/terms/">terms and conditions</Link> page. The published
            warranty is on the <Link to="/warranty/">warranty</Link> page.
          </p>
        </div>
      </section>
    </Layout>
  );
}
