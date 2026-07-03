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
    id: 'everlearnai',
    title: 'EverlearnAI Study Platform',
    description: 'AI study tools for quizzes, MCQs, flashcards, document Q&A, and assignment help — built for students who need faster exam prep.',
    result: 'Helps students create high-quality study content instantly and stay on track with smart learning tools.',
    tech: 'Next.js • Claude API • Tailwind CSS • Android',
  },
  {
    id: 'devpostai',
    title: 'DevPost AI',
    description: 'AI-powered LinkedIn content platform with direct publishing, tone presets, drafts, and scheduling.',
    result: 'Removes the write-edit-copy-paste workflow so creators can publish LinkedIn content in seconds.',
    tech: 'Next.js • Claude API • TypeScript • LinkedIn OAuth',
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
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-white/60 tracking-widest">CASE STUDIES_</span>
            <motion.div
              className="h-px w-12 bg-emerald-400/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6">
            Real projects that shipped
          </h2>

          <p className="text-sm text-white/70 leading-relaxed font-light max-w-2xl">
            Short, high-impact examples to show how we turn ideas into paying products with fast timelines and clean execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <Link
              key={item.id}
              href={`/case-studies/${item.id}`}
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] p-8 transition-all duration-300"
            >
              <div className="font-mono text-[10px] text-emerald-400/60 tracking-widest mb-4">
                {`0${index + 1}`}
              </div>
              <h3 className="font-serif italic text-2xl text-white mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                {item.description}
              </p>
              <div className="font-mono text-[10px] text-emerald-400/80 tracking-widest mb-2">
                RESULT
              </div>
              <div className="text-sm text-white/80 mb-4">
                {item.result}
              </div>
              <div className="font-mono text-[8px] text-white/40 tracking-widest uppercase mb-8">
                {item.tech}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
                View Case Study →
              </div>
              <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/20 transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
