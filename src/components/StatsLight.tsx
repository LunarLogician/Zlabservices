'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Simple counter without heavy animations
const SimpleCounter = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace('+', ''));
  const hasPlus = value.includes('+');
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, numericValue]);
  
  return (
    <span className="relative inline-block">
      {count}
      {hasPlus && <span className="text-emerald-400/60">+</span>}
    </span>
  );
};

export function StatsLight() {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { value: '4+', label: 'YEARS EXPERIENCE', sub: 'Building products & leading teams' },
    { value: '4', label: 'AI PRODUCTS', sub: 'Production-ready SaaS & apps' },
    { value: '10K+', label: 'VS CODE INSTALLS', sub: 'Claude AI extension' },
    { value: '10K+', label: 'ACTIVE USERS', sub: 'Global community' },
  ];

  return (
    <section 
      id="stats" 
      className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/[0.06]"
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Simple static gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-emerald-400/60" />
            <span className="font-mono text-[9px] text-white/60 tracking-widest">NUMBERS_</span>
          </div>
          
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight">
            By the
            <span className="text-emerald-400/80 not-italic"> numbers</span>
          </h2>
          
          <p className="text-sm text-white/70 leading-relaxed mt-4 font-light max-w-lg">
            Real metrics from a real builder. No paid followers, no fake reviews — just results.
          </p>
        </motion.div>

        {/* Stats grid - simple cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.08]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/[0.02] hover:bg-white/[0.04] p-8 transition-all duration-300
                border-r border-white/[0.06] last:border-r-0 group"
            >
              {/* Simple hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
              </div>
              
              <div className="relative z-10">
                {/* Number */}
                <div className="font-serif italic text-4xl md:text-5xl text-white mb-2 group-hover:text-emerald-400/90 transition-colors duration-300">
                  <SimpleCounter value={s.value} isInView={isInView} />
                </div>
                
                {/* Label */}
                <div className="relative inline-block mb-3">
                  <div className="font-mono text-[9px] text-white/50 tracking-widest group-hover:text-white/70 transition-colors">
                    {s.label}
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400/40 group-hover:w-full transition-all duration-300" />
                </div>
                
                {/* Sub text */}
                <div className="text-xs text-white/90 font-light opacity-70 group-hover:opacity-100 transition-opacity">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Simple divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
        
        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Avg. Response Time', value: '< 2hrs', icon: '⚡' },
            { label: 'Client Retention', value: '94%', icon: '💯' },
            { label: 'On-Time Delivery', value: '98%', icon: '🎯' },
          ].map((metric, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.01] hover:border-emerald-400/20 transition-colors"
            >
              <span className="text-lg">{metric.icon}</span>
              <div>
                <div className="font-serif text-sm text-white">{metric.value}</div>
                <div className="font-mono text-[7px] text-white/40 tracking-wider">{metric.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}