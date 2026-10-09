import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import RepairsHub from './pages/RepairsHub';
import DeviceHub from './pages/DeviceHub';
import ServicePage from './pages/ServicePage';
import Prices from './pages/Prices';
import ModelPage from './pages/ModelPage';
import Shop, { ShopCategory } from './pages/Shop';
import Listing from './pages/Listing';
import { SHOP_CATEGORIES } from './data/listings';
import SellDevice from './pages/SellDevice';
import Book from './pages/Book';
import AreaPage from './pages/AreaPage';
import Contact from './pages/Contact';
import Warranty from './pages/Warranty';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Business from './pages/Business';
import Track from './pages/Track';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repairs/" element={<RepairsHub />} />
      <Route path="/repairs/prices/" element={<Prices />} />
      <Route path="/repairs/models/:slug/" element={<ModelPage />} />
      <Route path="/repairs/:device/" element={<DeviceHub />} />
      <Route path="/repairs/:device/:service/" element={<ServicePage />} />
      <Route path="/shop/" element={<Shop />} />
      {SHOP_CATEGORIES.map((c) => (
        <Route key={c.slug} path={`/shop/${c.slug}/`} element={<ShopCategory categorySlug={c.slug} />} />
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
  );
}
