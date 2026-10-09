import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import StickyBar from './StickyBar';
import Consent from './Consent';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <StickyBar />
      <FloatingWhatsApp />
      <Consent />
    </div>
  );
}
