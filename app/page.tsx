import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import SubHero from '../components/SubHero/SubHero';
import About from '@/components/About/About';
import ContactMe from '@/components/ContactMe/ContactMe';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col font-sans">
      <Header />
      <main className="flex-1 overflow-x-hidden pt-16 md:pt-8">
        <Hero />
        <SubHero />
        <About />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
