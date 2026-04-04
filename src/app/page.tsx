'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
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

      <Stats />

      <About />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}
