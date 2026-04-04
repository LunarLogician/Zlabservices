'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-dark-bg text-white">
      <AuroraBackground />

      <Navbar />

      <Hero />

      <Services />

      <Products />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}
