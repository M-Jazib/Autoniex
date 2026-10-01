import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import Ticker from '@/components/Ticker';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import EngageModels from '@/components/EngageModels';
import FAQ from '@/components/FAQ';
import ContactBrief from '@/components/ContactBrief';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text relative">
      <Navbar />
      <Hero3D />
      <Ticker />
      <Services />
      <Portfolio />
      <Process />
      <EngageModels />
      <FAQ />
      <ContactBrief />
      <Footer />
    </main>
  );
}
