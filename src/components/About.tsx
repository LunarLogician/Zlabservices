'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function About() {
  const credentials = [
    { label: 'CEH CERTIFIED', detail: 'Ethical Hacker' },
    { label: '4+ LIVE PRODUCTS', detail: 'In production' },
    { label: '10K+ INSTALLS', detail: 'VS Code extensions' },
    { label: 'BAHRIA UNIVERSITY', detail: 'CS Student' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-[10px] text-white/30 tracking-widest">THE STUDIO_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3 mb-8">
            Small team.
            <br />
            <span className="text-white/30 not-italic">Big output.</span>
          </h2>
          <div className="space-y-5 text-sm text-white/40 leading-relaxed font-light">
            <p>
              ZLab is a product-first AI lab. We don&apos;t consult —{' '}
              <span className="text-white/70">we build.</span> Every product starts
              with a sharp insight and ships as a real, working product in the world.
            </p>
            <p>
              Founded by a CS student who refused to wait until graduation to start
              building. We move fast, ship real things, and keep the team lean on purpose.
            </p>
          </div>
        </motion.div>

        {/* Right — founder card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white/[0.03] border border-white/[0.08] p-8">
            {/* Identity */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.06]">
              <div className="w-14 h-14 border border-white/[0.15] flex items-center
                justify-center font-mono text-sm text-white/60 flex-shrink-0">
                MZ
              </div>
              <div>
                <div className="text-white font-light text-lg">Muhammad Zubair</div>
                <div className="font-mono text-[10px] text-white/30 tracking-widest mt-0.5">
                  FOUNDER · FULL-STACK DEV
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-white/40 leading-relaxed font-light mb-8">
              Full-Stack Developer with 4+ years building AI-powered SaaS products,
              RESTful APIs, and scalable web applications. Node.js Team Lead.
              Always learning, always shipping.
            </p>

            {/* Credentials list */}
            <div className="space-y-0 mb-8">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2.5
                    border-b border-white/[0.04] last:border-b-0"
                >
                  <span className="font-mono text-[10px] text-white/30 tracking-wider">
                    {c.label}
                  </span>
                  <span className="text-xs text-white/20 font-light">{c.detail}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/devpost-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-white/30 border border-white/10
                  px-4 py-2 hover:text-white/60 hover:border-white/25
                  transition-all tracking-wider"
              >
                GITHUB →
              </a>
              <a
                href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-white/30 border border-white/10
                  px-4 py-2 hover:text-white/60 hover:border-white/25
                  transition-all tracking-wider"
              >
                LINKEDIN →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
