'use client';

import { Navbar } from '@/components/Navbar';
import { AIHero } from '@/components/AIHero';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { BuildInPublic } from '@/components/BuildInPublic';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-dark-bg text-white">
      <Navbar />

      <AIHero />

      <Services />

      <Products />

      <BuildInPublic />

      <Stats />

      <About />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}
