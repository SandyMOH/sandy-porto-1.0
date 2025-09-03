import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import SubHero from '../components/SubHero/SubHero';
import About from '@/components/About/About';
import AboutMobile from '@/components/About/AboutMobile';

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <main className="flex-1 overflow-x-hidden pt-16 md:pt-8">
        <Hero />
        <SubHero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
