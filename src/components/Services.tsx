'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Magnetic card effect
const MagneticCard = ({ children, index, service }: { children: React.ReactNode; index: number; service: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(springY, [-30, 30], [3, -3]);
  const rotateY = useTransform(springX, [-30, 30], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = e.clientX - centerX;
      const moveY = e.clientY - centerY;
      x.set(moveX * 0.15);
      y.set(moveY * 0.15);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative bg-white/[0.02] hover:bg-white/[0.04] p-8 transition-all duration-300
        border-r border-white/[0.06] last:border-r-0 overflow-hidden`}
    >
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(16,185,129,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(16,185,129,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(16,185,129,0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 80}%`,
                y: `${50 + (Math.random() - 0.5) * 80}%`,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Animated index number */}
        <motion.div
          className="font-mono text-[10px] tracking-widest mb-6 relative"
          animate={{
            color: isHovered ? 'rgba(16,185,129,0.8)' : 'rgba(255,255,255,0.2)',
          }}
        >
          {service.index}
          <motion.span
            className="absolute left-0 top-0 opacity-0 group-hover:opacity-100"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 0.5 }}
          >
            _
          </motion.span>
        </motion.div>

        {/* Title with typing effect on view */}
        <motion.h3
          className="font-serif italic text-2xl text-white mb-4 leading-snug"
          initial={{ backgroundSize: '0% 100%' }}
          whileInView={{ backgroundSize: '100% 100%' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          style={{
            backgroundImage: 'linear-gradient(120deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.2) 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0',
          }}
        >
          {service.title}
        </motion.h3>

        {/* Description with staggered reveal */}
        <motion.p
          className="text-sm text-white/75 leading-relaxed font-light mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {service.description}
        </motion.p>

        {/* Tech tags with 3D flip on hover */}
        <div className="flex flex-wrap gap-1.5">
          {service.techs.map((t: string, tagIdx: number) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + tagIdx * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: 'rgba(16,185,129,0.15)',
                borderColor: 'rgba(16,185,129,0.4)',
              }}
              className="font-mono text-[10px] text-white/75 border border-white/10 px-2 py-0.5 tracking-wider cursor-default inline-block transition-all duration-200"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Animated arrow indicator on hover */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: isHovered ? [0, 5, 0] : 0 }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        >
          <svg className="w-5 h-5 text-emerald-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated background orbs
const AnimatedOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 -left-20 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

// Counter component for numbers
const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = numValue / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= numValue) {
              setCount(numValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numValue]);

  return <span ref={ref}>{count}+</span>;
};

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = [
    {
      index: '01',
      title: 'AI SaaS Development',
      description:
        'Full-stack AI-powered web applications built from scratch — smart, scalable, and ready for real users.',
      techs: ['Claude API', 'OpenAI', 'React', 'Node.js', 'MongoDB'],
      metrics: { projects: '12+', satisfaction: '100%' },
    },
    {
      index: '02',
      title: 'Mobile Applications',
      description:
        'Cross-platform Flutter apps shipped to Play Store and App Store. Polished UI, clean architecture, production-ready.',
      techs: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
      metrics: { projects: '8+', downloads: '50K+' },
    },
    {
      index: '03',
      title: 'Dev Tools & Extensions',
      description:
        'VS Code extensions, CLI packages, and npm libraries used by thousands of developers globally.',
      techs: ['Node.js', 'TypeScript', 'VS Code API', 'npm'],
      metrics: { downloads: '100K+', packages: '15+' },
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 md:px-10 overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <AnimatedOrbs />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-white/60 tracking-widest">SERVICES_</span>
            <motion.div
              className="h-px w-12 bg-emerald-400/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight">
            What we
            <span className="text-emerald-400/80 not-italic"> build</span>
            <motion.span
              className="inline-block w-1 h-1 bg-emerald-400 ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </h2>
          
          <p className="text-sm text-white/70 leading-relaxed mt-4 font-light max-w-lg">
            Three core competencies. One mission: ship amazing products that users love.
          </p>
        </motion.div>

        {/* Services grid with magnetic cards */}
        <div className="grid md:grid-cols-3 border border-white/[0.08] relative">
          {services.map((s, i) => (
            <MagneticCard key={i} index={i} service={s}>
              <div />
            </MagneticCard>
          ))}
        </div>

        {/* Bottom metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8 pt-8 border-t border-white/8"
        >
          {[
            { label: 'Projects Delivered', value: '35+', icon: '🚀' },
            { label: 'Happy Clients', value: '28+', icon: '⭐' },
            { label: 'Years Experience', value: '4+', icon: '⚡' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="text-xl">{stat.icon}</span>
              <div>
                <motion.div
                  className="font-serif italic text-xl text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <AnimatedCounter value={stat.value} />
                </motion.div>
                <div className="font-mono text-[8px] text-white/50 tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            className="group relative inline-flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-emerald-400/40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-mono text-[9px] text-white/70 group-hover:text-emerald-400 tracking-widest">
              LET'S BUILD SOMETHING
            </span>
            <motion.span
              className="text-white/50 group-hover:text-emerald-400"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
            
            {/* Button background glow */}
            <motion.div
              className="absolute inset-0 bg-emerald-400/5 -z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}