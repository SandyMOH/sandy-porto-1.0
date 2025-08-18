import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import SubHero from '../components/SubHero/SubHero';

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <main className="flex-1 pt-16 md:pt-8">
        <Hero />
        <SubHero />
      </main>
    </div>
  );
}
