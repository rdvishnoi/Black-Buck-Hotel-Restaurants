import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import Hotel from '@/components/Hotel';
import Restaurant from '@/components/Restaurant';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileCTA from '@/components/MobileCTA';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Hotel />
        <Restaurant />
        <Gallery />
        <Reviews />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}
