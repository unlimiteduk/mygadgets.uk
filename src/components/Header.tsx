import { useState } from "react";
import { Link, NavLink } from "react-router";
import { ArrowUpRight, Menu, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
const NAV = [
  { to: "/repairs/", label: "Repairs" },
  { to: "/repairs/prices/", label: "Prices" },
  { to: "/shop/", label: "Refurbished" },
  { to: "/track/", label: "Track repair" },
  { to: "/contact/", label: "Find us" },
];
export function Brand() {
  return (
    <span className="lg-brand">
      <span className="lg-monogram" aria-hidden="true">
        MG<span>✳</span>
      </span>
      <span>
        My Gadgets<small>WHITTON · TW2 7LB</small>
      </span>
    </span>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="lg-header">
      <a className="lg-skip-link" href="#main">
        Skip to content
      </a>
      <div className="container-12 lg-header-inner">
        <Link to="/" aria-label={`${SITE.brandName} — home`}>
          <Brand />
        </Link>
        <nav className="lg-primary-nav" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="lg-header-actions">
          <a
            className="lg-header-phone"
            href={SITE.landlineHref}
            aria-label={`Call ${SITE.landlineDisplay}`}
          >
            <Phone size={16} />
            <span>{SITE.landlineDisplay}</span>
          </a>
          <Link to="/book/" className="lg-button lg-button-glass">
            Book a repair <ArrowUpRight size={16} />
          </Link>
        </div>
        <button
          className="lg-menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={21} />
        </button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="lg-mobile-menu z-[80] w-full sm:max-w-sm"
        >
          <SheetTitle>
            <Brand />
          </SheetTitle>
          <nav aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
                <ArrowUpRight size={19} />
              </Link>
            ))}
          </nav>
          <Link
            to="/book/"
            onClick={() => setOpen(false)}
            className="lg-button lg-button-lime"
          >
            Get a repair quote <ArrowUpRight size={18} />
          </Link>
          <a href={SITE.landlineHref} className="lg-button lg-button-glass">
            <Phone size={17} />
            {SITE.landlineDisplay}
          </a>
          <p>
            23 High Street, Whitton
            <br />
            Twickenham {SITE.postcode}
          </p>
        </SheetContent>
      </Sheet>
    </header>
  );
}
