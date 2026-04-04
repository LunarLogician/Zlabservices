'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function Services() {
  const services = [
    {
      index: '01',
      title: 'AI SaaS Development',
      description:
        'Full-stack AI-powered web applications built from scratch — smart, scalable, and ready for real users.',
      techs: ['Claude API', 'OpenAI', 'React', 'Node.js', 'MongoDB'],
    },
    {
      index: '02',
      title: 'Mobile Applications',
      description:
        'Cross-platform Flutter apps shipped to Play Store and App Store. Polished UI, clean architecture, production-ready.',
      techs: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
    },
    {
      index: '03',
      title: 'Dev Tools & Extensions',
      description:
        'VS Code extensions, CLI packages, and npm libraries used by thousands of developers globally.',
      techs: ['Node.js', 'TypeScript', 'VS Code API', 'npm'],
    },
  ];

  return (
    <section id="services" className="relative py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] text-white/30 tracking-widest">SERVICES_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3">
            What we
            <span className="text-white/30 not-italic"> build</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed mt-4 font-light max-w-lg">
            Three core competencies. One mission: ship amazing products.
          </p>
        </motion.div>

        {/* Services grid — flush bordered panels */}
        <div className="grid md:grid-cols-3 border border-white/[0.08]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-white/[0.02] hover:bg-white/[0.04] p-8 transition-all duration-300
                border-r border-white/[0.06] last:border-r-0"
            >
              <div className="font-mono text-[10px] text-white/20 tracking-widest mb-6">{s.index}</div>
              <h3 className="font-serif italic text-2xl text-white mb-4 leading-snug">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.techs.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-white/30 border border-white/10
                      px-2 py-0.5 tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
