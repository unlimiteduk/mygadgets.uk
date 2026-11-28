import { Link } from 'react-router';
import Seo, { breadcrumbSchema, faqSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { LISTINGS, SHOP_CATEGORIES } from '@/data/listings';
import { SITE, canonical } from '@/data/site';

const SHOP_FAQS = [
  {
    q: 'Do your refurbished MacBooks come with a warranty?',
    a: 'Yes. Refurbished MacBooks and iMacs have a 6-month warranty. Repair work on a machine you already own has a 3-month warranty.',
  },
  {
    q: 'Can I inspect the MacBook before I pay?',
    a: 'Yes. You can reserve an in-stock machine and inspect it at the counter at 23 High Street, Whitton, before paying. The written mark description and cycle count are part of the sale.',
  },
  {
    q: 'Is each listing the exact machine I will receive?',
    a: 'Yes. Each listing is one exact machine, not a generic grade. The cycle count is shown and every mark is described in writing. Sold units stay listed so you can see what the grading looks like.',
  },
  {
    q: 'What if I need more storage than my current MacBook has?',
    a: 'Apple silicon MacBooks cannot be upgraded. If you need more storage or memory, choose a refurbished machine that already has it. We can also look at a part-exchange if you bring your current machine in.',
  },
  {
    q: 'Do I need an appointment to view a machine?',
    a: 'No. Walk in during opening hours, or reserve the machine first so it is held for you.',
  },
];

export default function Shop() {
  return (
    <ShopGrid
      title="Refurbished MacBooks in Whitton, Twickenham"
      intro={`Every listing is one exact machine: the cycle count is shown, every mark is described in writing, and a ${SITE.refurbWarranty} warranty is in the box. What you read is the unit you inspect at the counter.`}
      showFaqs
    />
  );
}

export function ShopCategory({ categorySlug }: { categorySlug: string }) {
  const cat = SHOP_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) return <NotFoundShop />;
  return (
    <ShopGrid
      title={`Refurbished ${cat.label}`}
      intro={`Graded ${cat.label} stock, each unit one exact machine with its marks described and a ${SITE.refurbWarranty} warranty.`}
      category={cat.slug}
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop/' }, { name: cat.label }]}
    />
  );
}

function NotFoundShop() {
  return (
    <Layout>
      <div className="container-12 section-pad">
        <h1 className="display-l" style={{ color: 'var(--bench-ink)' }}>Category not found</h1>
        <Link to="/shop/" className="btn btn-signal" style={{ marginTop: 24 }}>Back to the shop</Link>
      </div>
    </Layout>
  );
}

function ShopGrid({ title, intro, category, crumbs, showFaqs }: { title: string; intro: string; category?: string; crumbs?: { name: string; path?: string }[]; showFaqs?: boolean }) {
  const items = LISTINGS.filter((l) => (!category || l.category === category));
  const path = category ? `/shop/${category}/` : '/shop/';
  const itemList = {
    '@type': 'ItemList',
    itemListElement: items.map((listing, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${listing.name} · ${listing.year}`,
      url: canonical(`/shop/${listing.slug}/`),
    })),
  };
  return (
    <Layout>
      <Seo
        title={`${title} | ${SITE.name}`}
        description={intro}
        path={path}
        schema={[
          breadcrumbSchema(crumbs ?? [{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop/' }]),
          ...(showFaqs ? [faqSchema(SHOP_FAQS), itemList] : []),
        ]}
      />
      <section className="container-12 section-pad">
        <Crumbs items={crumbs ?? [{ name: 'Home', path: '/' }, { name: 'Shop' }]} />
        <div className="grid-12" style={{ marginBottom: 56 }}>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-l" style={{ margin: 0, color: 'var(--bench-ink)' }}>{title}</h1>
            <p className="body-copy text-muted" style={{ fontSize: '1.125rem', marginTop: 20 }}>{intro}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="area-grid">
              {SHOP_CATEGORIES.map((c) => (
                <Link key={c.slug} to={`/shop/${c.slug}/`} className="area-chip">
                  <span>{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid-12">
          {items.map((l) => (
            <Reveal key={l.slug} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Docket
                id={`STK-${l.identifier}`}
                title={`${l.name} · ${l.year}`}
                href={`/shop/${l.slug}/`}
                image={l.photoHero}
                imageAlt={l.photoHero ? `${l.name} ${l.year}, grade ${l.grade}` : undefined}
                rows={[
                  { k: 'SPEC', v: `${l.cpu.split(',')[0]} · ${l.ram} · ${l.ssd}` },
                  { k: 'BATTERY', v: l.cycles > 0 ? `${l.cycles} cycles · ${l.batteryHealth}%` : 'Desktop unit' },
                  { k: 'GRADE', v: l.grade },
                  { k: 'STATUS', v: l.status.toUpperCase(), ok: l.status === 'in stock', warn: l.status === 'sold' },
                  { k: 'PRICE', v: `£${l.price}`, price: true },
                ]}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="small text-muted" style={{ marginTop: 40, maxWidth: '64ch' }}>
            Sold units stay listed so you can see what good grading looks like. Reserve any in-stock unit and inspect it at the counter before paying — the written mark description is part of the sale.
          </p>
        </Reveal>
        {showFaqs && (
          <div style={{ marginTop: 48, maxWidth: '72ch' }}>
            <h2 className="h2">Questions about refurbished MacBooks</h2>
            {SHOP_FAQS.map((faq) => (
              <details key={faq.q} style={{ marginTop: 12 }}>
                <summary>{faq.q}</summary>
                <p className="body-copy text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
