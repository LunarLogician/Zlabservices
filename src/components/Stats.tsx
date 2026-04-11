'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Animated counter with easing
const AnimatedCounter = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace('+', ''));
  const hasPlus = value.includes('+');
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
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

// Individual stat card with 3D flip effect
const StatCard = ({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(springY, [-50, 50], [5, -5]);
  const rotateY = useTransform(springX, [-50, 50], [-5, 5]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative bg-white/[0.02] hover:bg-white/[0.04] p-8 transition-all duration-300
        border-r border-white/[0.06] last:border-r-0 overflow-hidden group cursor-default"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/0"
        animate={{
          background: isHovered
            ? 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0) 0%, transparent 100%)',
        }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Glowing border effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
      </motion.div>
      
      {/* Pulse ring behind number */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-emerald-400/10"
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.3, 0, 0.3] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      
      <div className="relative z-10">
        {/* Animated number */}
        <motion.div
          className="font-serif italic text-4xl md:text-5xl text-white mb-2"
          animate={{
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? 'rgba(16,185,129,0.9)' : 'rgba(255,255,255,1)',
          }}
          transition={{ duration: 0.2 }}
        >
          <AnimatedCounter value={stat.value} isInView={isInView} />
        </motion.div>
        
        {/* Label with underline animation */}
        <div className="relative inline-block mb-3">
          <div className="font-mono text-[9px] text-white/50 tracking-widest">
            {stat.label}
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-emerald-400/40"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Sub text with slide effect */}
        <motion.div
          className="text-xs text-white/90 font-light"
          animate={{
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.2 }}
        >
          {stat.sub}
        </motion.div>
        
        {/* Decorative corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <svg className="w-full h-full text-emerald-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4 L20 4 L20 20" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Progress ring component
const ProgressRing = ({ progress }: { progress: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  return (
    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="2"
        fill="none"
      />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke="rgba(16,185,129,0.4)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          strokeDasharray: circumference,
        }}
      />
    </svg>
  );
};

// Milestone timeline component
const MilestoneTracker = () => {
  const milestones = [
    { year: '2022', event: 'First product launch', achieved: true },
    { year: '2023', event: '10K downloads', achieved: true },
    { year: '2024', event: '100K milestone', achieved: true },
    { year: '2025', event: 'Global expansion', achieved: false },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-12 pt-8 border-t border-white/8"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[8px] text-emerald-400/80 tracking-widest">MILESTONES_</span>
        <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/20 to-transparent" />
      </div>
      
      <div className="flex justify-between gap-4">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className="flex-1 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          >
            <div className="relative mb-2">
              <div className={`w-2 h-2 rounded-full mx-auto ${
                m.achieved ? 'bg-emerald-400' : 'bg-white/20'
              }`}>
                {m.achieved && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              {i < milestones.length - 1 && (
                <div className={`absolute top-1 left-[calc(50%+8px)] w-[calc(100%-16px)] h-px ${
                  m.achieved && milestones[i + 1].achieved
                    ? 'bg-emerald-400/40'
                    : 'bg-white/10'
                }`} />
              )}
            </div>
            <div className="font-mono text-[9px] text-white/60">{m.year}</div>
            <div className="font-mono text-[7px] text-white/40 mt-1">{m.event}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Achievement badges
const AchievementBadges = () => {
  const badges = [
    { icon: '🏆', label: 'Top Performer', color: 'emerald' },
    { icon: '⚡', label: 'Fast Growth', color: 'blue' },
    { icon: '⭐', label: '5-Star Rating', color: 'amber' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex justify-center gap-4 mt-8"
    >
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.02]"
          whileHover={{ scale: 1.05, borderColor: 'rgba(16,185,129,0.3)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
        >
          <span className="text-sm">{badge.icon}</span>
          <span className="font-mono text-[8px] text-white/60 tracking-wider">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function Stats() {
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Add scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { value: '4+', label: 'YEARS EXPERIENCE', sub: 'Building products & leading teams' },
    { value: '15+', label: 'LIVE PROJECTS', sub: 'Production-ready applications' },
    { value: '100K+', label: 'DOWNLOADS', sub: 'Across all platforms & extensions' },
    { value: '3K+', label: 'ACTIVE USERS', sub: 'Daily active community' },
  ];

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/[0.06]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Cursor follower glow */}
      <motion.div
        className="fixed w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x * (window.innerWidth / 100) - 128,
          y: mousePosition.y * (window.innerHeight / 100) - 128,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      {/* Parallax background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ y }}
      />

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-8 h-px bg-emerald-400/60"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-mono text-[9px] text-white/60 tracking-widest">NUMBERS_</span>
          </div>
          
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight">
            By the
            <span className="text-emerald-400/80 not-italic"> numbers</span>
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full ml-3"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </h2>
          
          <p className="text-sm text-white/70 leading-relaxed mt-4 font-light max-w-lg">
            Real metrics from a real builder. No paid followers, no fake reviews — just results.
          </p>
        </motion.div>

        {/* Stats grid with enhanced cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.08] relative">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} isInView={isInView} />
          ))}
        </div>
        
        {/* Growth indicator */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
        />
        
        {/* Additional metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Avg. Response Time', value: '< 2hrs', icon: '⚡' },
            { label: 'Client Retention', value: '94%', icon: '💯' },
            { label: 'On-Time Delivery', value: '98%', icon: '🎯' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.01]"
              whileHover={{ borderColor: 'rgba(16,185,129,0.2)', scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg">{metric.icon}</span>
              <div>
                <div className="font-serif text-sm text-white">{metric.value}</div>
                <div className="font-mono text-[7px] text-white/40 tracking-wider">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Milestone tracker */}
        <MilestoneTracker />
        
        {/* Achievement badges */}
        <AchievementBadges />
      </motion.div>
    </section>
  );
}