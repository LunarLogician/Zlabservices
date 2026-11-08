'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

const FAQ_ITEMS = [
  {
    question: 'How do you isolate vector memory between tenants in multi-tenant AI systems?',
    answer:
      'We enforce tenant-level isolation at both the database and embedding layer using PostgreSQL with native Row-Level Security (RLS) and namespaced vector collections (e.g. pgvector, Qdrant, or Pinecone). Every query binds strictly to the authenticated tenant ID, mathematically preventing an agent or vector search from retrieving data belonging to another workspace.',
  },
  {
    question: 'How do you protect AI agents from prompt injection and runaway loops?',
    answer:
      'Led by an EC-Council Certified Ethical Hacker (CEH), we apply offensive cybersecurity principles to agentic architecture: (1) Structured input sanitization and delimiter boundary enforcement; (2) Sandboxed tool execution with scoped, ephemeral credentials; (3) Hard per-tenant token budgets and maximum recursion depth guards to prevent runaway loops and unexpected LLM bills.',
  },
  {
    question: 'What is the typical timeline and cost for an AI MVP sprint?',
    answer:
      'A production-grade full-stack AI MVP is engineered and launched in 3 to 4 weeks. Sprints include full Next.js 16 frontend, backend API, multi-tenant database with RLS, LLM orchestration, Stripe payments, Redis caching, and cloud deployment. We provide fixed-price milestone contracts with no hidden fees.',
  },
  {
    question: 'Can you build companion mobile applications alongside the web SaaS?',
    answer:
      'Yes. We build cross-platform mobile companions using Flutter for iOS and Android. Mobile apps feature clean Provider/Riverpod architecture, offline-first local SQLite caching, biometric authentication, and real-time state synchronization with your web platform.',
  },
  {
    question: 'Who owns the intellectual property, source code, and trained pipelines?',
    answer:
      'You do. 100% of all source code, API schemas, prompt workflows, vector database configurations, and infrastructure setups belong entirely to you from day one. We never hold proprietary code hostage or claim licensing royalties.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase">
              TECHNICAL FAQ_
            </span>
            <div className="h-px w-12 bg-emerald-400/40" />
          </div>

          <h2 className="font-serif italic text-4xl md:text-5xl text-white leading-tight mb-4">
            Frequently asked <span className="text-emerald-400 not-italic">questions</span>
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed max-w-xl">
            Everything you need to know about our multi-tenant architecture, AI agent security, sprint timelines, and code ownership.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-400/40 bg-white/[0.03]'
                    : 'border-white/10 bg-white/[0.01] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif italic text-lg md:text-xl text-white pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`font-mono text-xs text-emerald-400 transition-transform duration-200 shrink-0 mt-1.5 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
                        <p className="text-sm text-white/75 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

