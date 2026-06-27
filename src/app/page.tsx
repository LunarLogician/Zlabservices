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
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

// Global grid background style (consistent across all sections)
const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
};

// Lightweight static background
const StaticBackground = () => {
  return (
    <>
      {/* Base grid */}
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Simple static gradient orbs */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl pointer-events-none opacity-30" />
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl pointer-events-none opacity-30" />
    </>
  );
};

// Progress scroll indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a08] text-white">
      {/* Global theme backgrounds */}
      <StaticBackground />
      <ScrollProgress />
      
      {/* Loading indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none bg-[#0a0a08]"
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <PageTransition>
          <AIHero />
        </PageTransition>
        
        {/* Section dividers with animated gradients */}
        <div className="relative">
          <Services />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <Products />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <BuildInPublic />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <StatsLight />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <HowWeWork />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <About />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <Testimonials />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <Contact />
        </div>
        
        <Footer />
      </div>
      
      {/* Global styles for theme consistency */}
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); text-shadow: -1px 0 red, 1px 0 blue; }
          20% { transform: translate(-1px, 0.5px); text-shadow: 1px 0 red, -1px 0 blue; }
          40% { transform: translate(-0.5px, -0.5px); text-shadow: -1px 0 blue, 1px 0 red; }
          60% { transform: translate(0.5px, 0.5px); text-shadow: 1px 0 blue, -1px 0 red; }
          80% { transform: translate(0.5px, -0.5px); text-shadow: -1px 0 red, 1px 0 blue; }
          100% { transform: translate(0); text-shadow: 1px 0 blue, -1px 0 red; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-glitch {
          animation: glitch 0.15s ease-in-out;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
        
        /* Selection color */
        ::selection {
          background: rgba(16, 185, 129, 0.2);
          color: rgba(16, 185, 129, 0.9);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 2px solid rgba(16, 185, 129, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}

