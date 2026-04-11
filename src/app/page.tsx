'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
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

// Global grid background style (consistent across all sections)
const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Animated background that follows mouse
const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      {/* Base grid */}
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Animated gradient orbs that follow mouse */}
      <motion.div
        className="fixed w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * (window.innerWidth / 100) - 192,
          y: mousePosition.y * (window.innerHeight / 100) - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        style={{ opacity }}
      />
      
      <motion.div
        className="fixed w-64 h-64 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: (100 - mousePosition.x) * (window.innerWidth / 100) - 128,
          y: (100 - mousePosition.y) * (window.innerHeight / 100) - 128,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 150 }}
        style={{ opacity }}
      />
      
      {/* Static gradient orbs for depth */}
      <motion.div
        className="fixed top-1/4 -left-48 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed bottom-1/4 -right-48 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Scan line effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent opacity-0"
        animate={{ y: ['-100%', '100%'], opacity: [0, 0.3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
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

// Global cursor follower
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden lg:block"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <div className="w-6 h-6 border border-emerald-400/40 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-emerald-400 rounded-full"
        animate={{ scale: isHovering ? 2 : 1 }}
      />
    </motion.div>
  );
};

// Particle network overlay
const ParticleNetworkOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Attract to mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - dist) / 2000;
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          // Limit speed
          const speed = Math.hypot(p.vx, p.vy);
          if (speed > 1.5) {
            p.vx = (p.vx / speed) * 1.5;
            p.vy = (p.vy / speed) * 1.5;
          }
        }
        
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      });
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a08] text-white">
      {/* Global theme backgrounds */}
      <AnimatedBackground />
      <ParticleNetworkOverlay />
      <ScrollProgress />
      <CursorFollower />
      
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
          <Stats />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="relative">
          <About />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
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

// Add missing useRef import
import { useRef } from 'react';