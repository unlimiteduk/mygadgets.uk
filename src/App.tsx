import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PageErrorBoundary from "./components/PageErrorBoundary";
const RepairsHub = lazy(() => import("./pages/RepairsHub"));
const DeviceHub = lazy(() => import("./pages/DeviceHub"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Prices = lazy(() => import("./pages/Prices"));
const ModelPage = lazy(() => import("./pages/ModelPage"));
const Shop = lazy(() => import("./pages/Shop"));
const ShopCategory = lazy(() =>
  import("./pages/Shop").then((module) => ({ default: module.ShopCategory })),
);
const Listing = lazy(() => import("./pages/Listing"));
import { SHOP_CATEGORIES } from "./data/listings";
const SellDevice = lazy(() => import("./pages/SellDevice"));
const Book = lazy(() => import("./pages/Book"));
const AreaPage = lazy(() => import("./pages/AreaPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Warranty = lazy(() => import("./pages/Warranty"));
const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Business = lazy(() => import("./pages/Business"));
const Track = lazy(() => import("./pages/Track"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <PageErrorBoundary>
    <Suspense
      fallback={
        <div className="container-12 section-pad" role="status">
          Loading the repair page…
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repairs/" element={<RepairsHub />} />
        <Route path="/repairs/prices/" element={<Prices />} />
        <Route path="/repairs/models/:slug/" element={<ModelPage />} />
        <Route path="/repairs/:device/" element={<DeviceHub />} />
        <Route path="/repairs/:device/:service/" element={<ServicePage />} />
        <Route path="/shop/" element={<Shop />} />
        {SHOP_CATEGORIES.map((c) => (
          <Route
            key={c.slug}
            path={`/shop/${c.slug}/`}
            element={<ShopCategory categorySlug={c.slug} />}
          />
        ))}
        <Route path="/shop/:slug/" element={<Listing />} />
        <Route path="/sell-your-device/" element={<SellDevice />} />
        <Route path="/areas/:slug/" element={<AreaPage />} />
        <Route path="/business/" element={<Business />} />
        <Route path="/warranty/" element={<Warranty />} />
        <Route path="/about/" element={<About />} />
        <Route path="/reviews/" element={<Reviews />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/book/" element={<Book />} />
        <Route path="/track/" element={<Track />} />
        <Route path="/blog/" element={<BlogIndex />} />
        <Route path="/blog/:slug/" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </PageErrorBoundary>
  );
}
