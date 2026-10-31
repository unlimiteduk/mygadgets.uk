import { Link } from 'react-router';
import Seo, { breadcrumbSchema } from '@/components/Seo';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import Docket from '@/components/Docket';
import Crumbs from '@/components/Crumbs';
import { LISTINGS, SHOP_CATEGORIES } from '@/data/listings';
import { SITE } from '@/data/site';

export default function Shop() {
  return <ShopGrid title="Refurbished, graded, warrantied" intro={`Every listing is one exact machine: the cycle count is shown, every mark is described in writing, and a ${SITE.refurbWarranty} warranty is in the box. What you read is the unit you inspect at the counter.`} />;
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

function ShopGrid({ title, intro, category, crumbs }: { title: string; intro: string; category?: string; crumbs?: { name: string; path?: string }[] }) {
  const items = LISTINGS.filter((l) => (!category || l.category === category));
  const path = category ? `/shop/${category}/` : '/shop/';
  return (
    <Layout>
      <Seo
        title={`${title} | ${SITE.name}`}
        description={intro}
        path={path}
        schema={breadcrumbSchema(crumbs ?? [{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop/' }])}
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
      </section>
    </Layout>
  );
}
