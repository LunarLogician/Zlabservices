'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function HowWeWork() {
  const phases = [
    {
      step: '01',
      title: 'Discovery & Planning',
      duration: '1-2 days',
      description: 'We understand your requirements, define scope, and plan the architecture.',
      deliverables: [
        'Project requirements document',
        'Technical architecture plan',
        'Timeline & milestones',
        'Tech stack recommendations'
      ],
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Development & AI Integration',
      duration: '2-3 weeks',
      description: 'Building the core product with AI integration, authentication, and payments.',
      deliverables: [
        'Frontend + backend development',
        'AI model integration (Claude/OpenAI)',
        'Payment gateway setup',
        'Database design & implementation'
      ],
      icon: '⚡'
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      duration: '3-5 days',
      description: 'Rigorous testing, performance optimization, and security hardening.',
      deliverables: [
        'Quality assurance testing',
        'Performance optimization',
        'Security audit',
        'Bug fixes & refinements'
      ],
      icon: '🔧'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      duration: '1-2 days',
      description: 'Production deployment, monitoring setup, and handover.',
      deliverables: [
        'Production deployment',
        'CI/CD pipeline setup',
        'Monitoring & analytics',
        'Documentation & training'
      ],
      icon: '🚀'
    }
  ];

  const guarantees = [
    { title: 'Fixed Timeline', description: 'Clear deadlines with weekly updates' },
    { title: 'Transparent Pricing', description: 'No hidden costs, clear breakdown' },
    { title: 'Weekly Demos', description: 'See progress every Friday' },
    { title: 'Post-Launch Support', description: '30 days of free support included' }
  ];

  return (
    <section id="process" className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-white/60 tracking-widest">PROCESS_</span>
            <motion.div
              className="h-px w-12 bg-emerald-400/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6">
            How we
            <span className="text-emerald-400/80 not-italic"> work</span>
          </h2>
          
          <p className="text-sm text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
            From idea to production in 3-4 weeks. We follow a structured process that ensures
            quality, transparency, and on-time delivery.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/20 via-emerald-400/10 to-transparent hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full border-4 border-[#0a0a08] z-10 hidden md:block" />
                
                {/* Phase content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white/[0.02] border border-white/[0.08] p-8 hover:bg-white/[0.04] transition-all duration-300">
                    {/* Phase header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-emerald-400/30 rounded-full flex items-center justify-center">
                        <span className="text-lg">{phase.icon}</span>
                      </div>
                      <div>
                        <div className="font-mono text-[8px] text-emerald-400/60 tracking-widest">
                          PHASE {phase.step}
                        </div>
                        <h3 className="font-serif italic text-2xl text-white">
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="mb-4">
                      <div className="font-mono text-[8px] text-white/40 tracking-widest mb-1">
                        DURATION
                      </div>
                      <div className="font-mono text-[10px] text-emerald-400/80">
                        {phase.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/75 leading-relaxed font-light mb-6">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <div className="font-mono text-[8px] text-white/40 tracking-widest mb-3">
                        DELIVERABLES
                      </div>
                      <div className="space-y-2">
                        {phase.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-emerald-400/60 rounded-full mt-2 flex-shrink-0" />
                            <span className="font-mono text-[10px] text-white/60 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/8"
        >
          <div className="text-center mb-12">
            <div className="font-mono text-[9px] text-white/60 tracking-widest mb-2">
              OUR GUARANTEES
            </div>
            <h3 className="font-serif italic text-2xl text-white">
              What you can expect
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.08] p-6 text-center hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="font-serif italic text-lg text-white mb-2">
                  {guarantee.title}
                </div>
                <div className="font-mono text-[9px] text-white/60">
                  {guarantee.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-emerald-400/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
          >
            <span className="font-mono text-[10px] text-white/70 group-hover:text-emerald-400 tracking-widest">
              START YOUR PROJECT
            </span>
            <svg 
              className="w-4 h-4 text-white/50 group-hover:text-emerald-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="font-mono text-[8px] text-white/40 mt-4 tracking-widest">
            Free 30-minute consultation · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}