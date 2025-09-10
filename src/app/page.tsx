import HeroSection from './components/HeroSection';
import Navbar from './components/NavBar';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
      <Navbar />
      <HeroSection />
      {/* You can add your other sections (Projects, About, etc.) below */}
    </main>
  );
}
