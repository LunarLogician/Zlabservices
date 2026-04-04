'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function Stats() {
  const stats = [
    { value: '4+', label: 'YEARS EXPERIENCE', sub: 'Building products & leading teams' },
    { value: '15+', label: 'LIVE PROJECTS', sub: 'Production-ready applications' },
    { value: '100K+', label: 'DOWNLOADS', sub: 'Across all platforms & extensions' },
    { value: '3K+', label: 'ACTIVE USERS', sub: 'Daily active community' },
  ];

  return (
    <section id="stats" className="relative py-24 px-6 md:px-10 overflow-hidden
      border-y border-white/[0.06]">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] text-white/30 tracking-widest">NUMBERS_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3">
            By the
            <span className="text-white/30 not-italic"> numbers</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed mt-4 font-light max-w-lg">
            Real metrics from a real builder. No paid followers, no fake reviews.
          </p>
        </motion.div>

        {/* Stats grid — flush bordered panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.08]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] p-8
                transition-all duration-300 border-r border-white/[0.06] last:border-r-0"
            >
              <div className="font-serif italic text-4xl md:text-5xl text-white mb-2">
                {s.value}
              </div>
              <div className="font-mono text-[9px] text-white/50 tracking-widest mb-3">
                {s.label}
              </div>
              <div className="text-xs text-white/90 font-light">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
