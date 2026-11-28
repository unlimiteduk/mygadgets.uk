import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { Brand } from "./Header";
export default function Footer() {
  return (
    <footer className="lg-footer">
      <div className="container-12">
        <div className="lg-footer-grid">
          <div>
            <Link to="/" aria-label="My Gadgets home">
              <Brand />
            </Link>
            <p>
              Expert repairs. Honest advice.
              <br />
              Your local tech people in Whitton.
            </p>
            <address>
              {SITE.street}, {SITE.locality}
              <br />
              {SITE.region} {SITE.postcode}
            </address>
          </div>
          <div>
            <h2>Repair &amp; reuse</h2>
            {[
              ["/repairs/macbook/", "MacBook repairs"],
              ["/repairs/laptop/", "Laptop repairs"],
              ["/repairs/iphone/", "Phone repairs"],
              ["/repairs/console/", "Console repairs"],
              ["/repairs/prices/", "Repair prices"],
            ].map(([href, text]) => (
              <Link key={href} to={href}>
                {text}
              </Link>
            ))}
          </div>
          <div>
            <h2>A little more</h2>
            {[
              ["/shop/", "Refurbished tech"],
              ["/sell-your-device/", "Sell your device"],
              ["/warranty/", "Our warranty"],
              ["/about/", "About the shop"],
              ["/reviews/", "Customer reviews"],
              ["/blog/", "Advice & guides"],
            ].map(([href, text]) => (
              <Link key={href} to={href}>
                {text}
              </Link>
            ))}
          </div>
          <div>
            <h2>Let’s talk tech</h2>
            <a href={SITE.landlineHref}>{SITE.landlineDisplay}</a>
            <a href={SITE.mobileHref}>{SITE.mobileDisplay}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener">
              Message on WhatsApp <ArrowUpRight size={15} />
            </a>
            <p>
              Mon–Fri 09:00–18:00
              <br />
              Sat 10:30–17:00 · Sun closed
            </p>
          </div>
        </div>
        <div className="lg-footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. Registered in
            England.
          </span>
          <span>
            <Link to="/business/">For businesses</Link>
            <Link to="/track/">Track a repair</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/privacy-policy/">Privacy policy</Link>
            <Link to="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
