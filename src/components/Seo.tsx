import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { SITE, canonical } from '@/data/site';

interface SeoProps {
  title: string;
  description: string;
  path: string; // canonical path, e.g. /repairs/macbook/screen-replacement/
  schema?: object | object[]; // page-specific JSON-LD
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, path, schema }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical(path));

    // JSON-LD: sitewide LocalBusiness + page-specific graph
    const id = 'jsonld-page';
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    const graph = [localBusinessSchema(), ...(Array.isArray(schema) ? schema : schema ? [schema] : [])];
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(script);
  }, [title, description, path, pathname]);

  return null;
}

export function localBusinessSchema() {
  return {
    '@type': ['LocalBusiness', 'ComputerStore'],
    '@id': `${SITE.domain}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.domain,
    telephone: SITE.phoneHref.replace('tel:', ''),
    email: SITE.email,
    description:
      'Computer repair specialists on Whitton High Street: MacBook and Windows laptop screens, batteries, logic boards and virus removal, plus iPhone, iPad and Samsung Galaxy repairs and refurbished MacBooks.',
    knowsAbout: [
      'Computer repair',
      'Laptop repair',
      'MacBook repair',
      'Windows laptop repair',
      'iPhone repair',
      'iPad repair',
      'Samsung Galaxy repair',
      'Refurbished MacBooks',
    ],
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      postalCode: SITE.postcode,
      addressCountry: SITE.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:30', closes: '17:30' },
    ],
    areaServed: [
      'Whitton', 'Twickenham', 'Hounslow', 'Feltham', 'Isleworth', 'Hanworth',
      'Teddington', 'St Margarets', 'Richmond', 'Bedfont', 'Heston',
      'TW1', 'TW2', 'TW3', 'TW5', 'TW7', 'TW9', 'TW11', 'TW13', 'TW14',
    ],
    hasMap: 'https://maps.google.com/?q=My+Gadgets+UK+Whitton',
    sameAs: [SITE.socials.gbp, SITE.socials.facebook, SITE.socials.instagram, SITE.socials.tiktok, SITE.socials.trustpilot],
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonical(it.path ?? '/'),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
