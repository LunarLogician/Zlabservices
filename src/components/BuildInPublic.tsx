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
    <section id="build" className="relative py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] text-white/75 tracking-widest">BUILD IN PUBLIC_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3">
            Shipping
            <span className="text-white/75 not-italic"> in real-time</span>
          </h2>
          <p className="text-sm text-white/75 leading-relaxed mt-4 font-light max-w-lg">
            No smoke, no mirrors. Here&apos;s what&apos;s actually happening.
          </p>
        </motion.div>

        {/* Live stats bar */}
        <div className="grid grid-cols-3 border border-white/[0.08] mb-12">
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
              className="bg-white/[0.02] px-8 py-6 border-r border-white/[0.06] last:border-r-0"
            >
              <div className="font-serif italic text-4xl text-white mb-1">{s.num}</div>
              <div className="font-mono text-[9px] text-white/25 tracking-widest">{s.lbl}</div>
            </motion.div>
          ))}
        </div>

        {/* Activity log */}
        <div className="border-t border-white/[0.08]">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group border-b border-white/[0.05] hover:bg-white/[0.025]
                transition-all duration-200"
            >
              <div className="grid grid-cols-[80px_1fr_100px] gap-4 items-center py-6 px-2">
                <span className="font-mono text-[9px] font-medium text-white/80
                  tracking-widest border border-white/[0.08] px-2 py-1 text-center">
                  {a.type}
                </span>
                <div>
                  <div className="text-white text-base font-medium leading-snug">
                    {a.title}
                  </div>
                  <div className="text-xs text-white/55 mt-1">{a.description}</div>
                </div>
                <span className="font-mono text-[9px] text-white/20 tracking-widest text-right">
                  {a.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
