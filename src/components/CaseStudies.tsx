'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

const caseStudies = [
  {
    slug: 'clinical-document-ai',
    title: 'EverlearnAI: Clinical Knowledge & Exam Prep System',
    industry: 'Clinical Education & Healthcare Training',
    description:
      'AI study architecture for clinical guidelines, medical textbooks, and spaced repetition flashcards. Engineered with zero-retention inference pipelines.',
    result: '[FILL: real metric, e.g. 3,000+ clinical learners and 50,000+ quizzes generated]',
    tech: 'Next.js 16 • Flutter • Claude API • Supabase • Redis',
  },
  {
    slug: 'healthtech-content-engine',
    title: 'DevPost AI: HealthTech Communication Engine',
    industry: 'Digital Health & HealthTech B2B',
    description:
      'Publishing and thought leadership engine for healthtech founders and clinical innovators, with encrypted OAuth 2.0 direct publishing.',
    result: '[FILL: real metric, e.g. 80% time saved on thought leadership publishing]',
    tech: 'Next.js • Claude API • LinkedIn OAuth 2.0 • MongoDB',
  },
  {
    slug: 'healthtech-rfp-proposal-ai',
    title: 'AI Proposal Maker: Enterprise B2B RFP Generator',
    industry: 'HealthTech Enterprise Sales & Consulting',
    description:
      'High-speed proposal generator analyzing hospital and health system RFP requirements with built-in compliance scoping and zero client data retention.',
    result: '[FILL: real metric, e.g. 10,000+ proposals generated in under 30 seconds]',
    tech: 'Next.js • OpenAI & Claude • Stripe • Redis Rate Limiting',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] text-white/60 tracking-widest">PROVEN PRODUCTION WORK_</span>
              <motion.div
                className="h-px w-12 bg-emerald-400/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <h2 className="font-serif italic text-4xl md:text-5xl text-white leading-tight mb-4">
              Healthcare AI Case Studies &amp; <span className="text-emerald-400/80 not-italic">Shipped Systems</span>
            </h2>

            <p className="text-sm text-white/70 leading-relaxed font-light max-w-2xl">
              Real systems shipped for healthcare founders, digital health leaders, and enterprise teams. Engineered with HIPAA-aligned security, data privacy, and rapid deployment.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-[10px] text-emerald-400 uppercase tracking-widest hover:text-emerald-300 transition-colors shrink-0"
          >
            All Case Studies &rarr;
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-mono text-[10px] text-emerald-400/80 tracking-widest">
                    0{index + 1}
                  </div>
                  <div className="font-mono text-[8px] text-white/40 uppercase tracking-wider">
                    {item.industry}
                  </div>
                </div>

                <h3 className="font-serif italic text-xl text-white mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="font-mono text-[9px] text-emerald-400/90 tracking-widest uppercase mb-1">
                  Verified Outcome
                </div>
                <div className="text-xs text-white/80 mb-4 font-light">
                  {item.result}
                </div>
                <div className="font-mono text-[8px] text-white/40 tracking-widest uppercase mb-6">
                  {item.tech}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Architecture &rarr;
                </div>
              </div>

              <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/20 transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
