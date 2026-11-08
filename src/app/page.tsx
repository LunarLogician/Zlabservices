'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { AIHero } from '@/components/AIHero';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { BuildInPublic } from '@/components/BuildInPublic';
import { StatsLight } from '@/components/StatsLight';
import { HowWeWork } from '@/components/HowWeWork';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

// Global grid background style (consistent across all sections)
const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(203, 255, 252, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 255, 252, 0.018) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
};

// Abyssal bioluminescent ambient background
const StaticBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-[#00827c]/15 rounded-full blur-3xl pointer-events-none opacity-40" />
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-[#cbfffc]/8 rounded-full blur-3xl pointer-events-none opacity-30" />
    </>
  );
};

// Progress scroll indicator with aurora sweep
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-50"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, rgb(203, 255, 252) 0%, rgb(237, 255, 254) 50%, rgb(250, 209, 255) 100%)',
      }}
    />
  );
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#012624] text-[#edfffe]">
      {/* Global theme backgrounds */}
      <StaticBackground />
      <ScrollProgress />
      
      {/* Loading indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none bg-[#012624]"
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <PageTransition>
          <AIHero />
        </PageTransition>
        
        {/* Section dividers */}
        <div className="relative">
          <Services />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <Products />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <BuildInPublic />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <StatsLight />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <HowWeWork />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <About />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <Testimonials />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>
        
        <div className="relative">
          <FAQ />
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00827c]/25 to-transparent" />
        </div>

        <div className="relative">
          <Contact />
        </div>
        
        <Footer />
      </div>
      
      {/* Global styles for theme consistency */}
      <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #011d1c;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #003734;
          border-radius: 4px;
          border: 1px solid rgba(203, 255, 252, 0.1);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #00827c;
        }
        
        /* Selection color */
        ::selection {
          background: rgba(0, 130, 124, 0.4);
          color: #cbfffc;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid #cbfffc;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}

