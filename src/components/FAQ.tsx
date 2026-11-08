'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="faq" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            ARCHITECTURAL FAQ
          </div>

          <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] mb-4">
            Frequently asked questions.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-xl">
            Everything you need to know about our multi-tenant isolation, ethical hacking security verification, sprint delivery, and IP ownership.
          </p>
        </div>

        {/* Accordion — Auros Surface cards (#003734 & #011d1c with 16px radius) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[16px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#00827c] bg-[#003734]'
                    : 'border-[#004d49] bg-[#011d1c] hover:border-[#00827c]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-lg md:text-xl font-medium text-[#ffffff] tracking-[-0.02em] leading-snug">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-[6px] bg-[#012624] border border-[#00827c]/40 flex items-center justify-center text-[#cbfffc] shrink-0 transition-transform duration-200">
                    <span className="text-base font-light">{isOpen ? '−' : '+'}</span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 border-t border-[#004d49]/60">
                        <p className="font-sans text-sm md:text-base text-[#bbc7c6] leading-relaxed font-normal pt-4">
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
