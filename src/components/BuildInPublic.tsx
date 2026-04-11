'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function BuildInPublic() {
  const activities = [
    {
      type: 'RELEASE',
      title: 'Released AI Proposal Maker v2.1',
      description: 'Added Claude API integration for smarter proposal generation',
      time: '2 HRS AGO',
    },
    {
      type: 'MILESTONE',
      title: '15+ Projects Now Live',
      description: 'Crossed 15 production applications milestone',
      time: '1 DAY AGO',
    },
    {
      type: 'USERS',
      title: '3K+ Active Users Reached',
      description: 'VS Code extensions hitting new user engagement records',
      time: '3 DAYS AGO',
    },
    {
      type: 'UPDATE',
      title: 'EverlearnAI Mobile v3.0 Released',
      description: 'New AI-powered quiz generation and flashcard system',
      time: '1 WEEK AGO',
    },
    {
      type: 'MILESTONE',
      title: '100K+ Downloads Achieved',
      description: 'All products combined now surpassing 100K total downloads',
      time: '2 WEEKS AGO',
    },
  ];

  return (
    <section id="build" className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="font-mono text-[9px] text-white/60 tracking-widest uppercase">BUILD IN PUBLIC_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-4 mb-6">
            Shipping
            <span className="text-emerald-400/80 not-italic"> in real-time</span>
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-light max-w-xl">
            No smoke, no mirrors. Here's what's actually happening. Every milestone, release, and achievement tracked transparently.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {[
            { num: '15+', lbl: 'LIVE PRODUCTS' },
            { num: '100K+', lbl: 'TOTAL DOWNLOADS' },
            { num: '3K+', lbl: 'ACTIVE USERS' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-white/6 bg-gradient-to-br from-white/2 to-white/1 hover:border-emerald-400/30 hover:bg-emerald-400/5 px-8 py-8 transition-all duration-300"
            >
              <div className="font-serif italic text-4xl text-white mb-2 group-hover:text-emerald-300 transition-colors">{s.num}</div>
              <div className="font-mono text-[9px] text-white/50 group-hover:text-white/70 tracking-widest transition-colors">{s.lbl}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group border border-white/6 bg-gradient-to-r from-white/2 to-white/1 hover:border-emerald-400/30 hover:bg-emerald-400/5 px-8 py-6 transition-all duration-300"
            >
              <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-start">
                {/* Badge */}
                <span className="font-mono text-[8px] font-bold text-emerald-400/80 group-hover:text-emerald-400 border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-1.5 tracking-widest transition-all min-w-max">
                  {a.type}
                </span>

                {/* Content */}
                <div className="min-w-0">
                  <div className="text-white font-medium text-base leading-snug mb-1 group-hover:text-emerald-300 transition-colors">
                    {a.title}
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/75 transition-colors font-light leading-relaxed">
                    {a.description}
                  </div>
                </div>

                {/* Time */}
                <span className="font-mono text-[9px] text-white/40 group-hover:text-white/60 tracking-widest transition-colors text-right min-w-max">
                  {a.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
