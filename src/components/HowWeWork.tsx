'use client';

import { motion } from 'framer-motion';

export function HowWeWork() {
  const phases = [
    {
      step: '01',
      title: 'Discovery & Threat Modeling',
      duration: '1-2 DAYS',
      description: 'System specifications, multi-tenant database schema, vector isolation strategy, and security threat modeling.',
      deliverables: [
        'Postgres schema & RLS policy matrix',
        'LLM orchestration architecture (Claude/OpenAI)',
        'Tenant data isolation specification',
        'Milestone-bound fixed delivery timeline',
      ],
    },
    {
      step: '02',
      title: 'Core Architecture & AI Pipeline',
      duration: '2 WEEKS',
      description: 'Engineering the full-stack system, secure vector indexing, background job queues, and payment gateways.',
      deliverables: [
        'Next.js 16 frontend + authenticated API',
        'Multi-tenant vector namespace isolation',
        'Stripe Checkout & automated webhook validation',
        'Redis caching with per-tenant rate limits',
      ],
    },
    {
      step: '03',
      title: 'Hardening & Offensive Auditing',
      duration: '3-5 DAYS',
      description: 'Offensive ethical hacking review led by CEH Muhammad Zubair: prompt injection defense, token leak tests, and load stress.',
      deliverables: [
        'OWASP Top 10 for LLM security audit',
        'Cross-tenant data leakage penetration testing',
        'End-to-end token budget limit verification',
        'Deterministic output validation (Zod/Pydantic)',
      ],
    },
    {
      step: '04',
      title: 'Cloud Deployment & Observability',
      duration: '1-2 DAYS',
      description: 'Production cloud rollout (AWS/Vercel/Railway) with Sentry error tracing, automated CI/CD, and complete IP transfer.',
      deliverables: [
        'Production DNS, SSL & CDN configuration',
        'Automated CI/CD release pipelines',
        'Sentry tracing & uptime monitoring',
        '100% source code & pipeline IP handover',
      ],
    },
  ];

  const guarantees = [
    { title: 'Deterministic Timeline', description: 'Strict sprint milestones with direct weekly builds delivered every Friday.' },
    { title: 'Transparent Pricing', description: 'Fixed-cost milestones with zero billing surprises or licensing royalties.' },
    { title: 'Offensive Security', description: 'Hardened against prompt leaks and cross-tenant vector contamination from day one.' },
    { title: 'Full IP Ownership', description: 'Complete source code, database schemas, and AI prompts belong to you 100%.' },
  ];

  return (
    <section id="process" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            DELIVERY LIFECYCLE
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              From architecture blueprint to production in 3-4 weeks.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              A structured, deterministic engineering process combining offensive security verification with high-velocity product execution.
            </p>
          </div>
        </motion.div>

        {/* Process Steps Grid — Auros Liquid Kelp Cards (#003734, 16px radius, no shadow) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#003734] border border-[#004d49] hover:border-[#00827c]/60 rounded-[16px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header row: Step index and duration pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xl font-medium text-[#cbfffc] tracking-[-0.02em]">
                    PHASE {phase.step}
                  </span>
                  <span className="font-sans text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 bg-[#012624] text-[#edfffe] border border-[#00827c]/30 rounded-[6px]">
                    {phase.duration}
                  </span>
                </div>

                {/* Phase title */}
                <h3 className="font-sans text-2xl font-medium tracking-[-0.025em] text-[#ffffff] mb-3">
                  {phase.title}
                </h3>

                {/* Phase description */}
                <p className="font-sans text-sm text-[#bbc7c6] leading-relaxed mb-6 font-normal">
                  {phase.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 mb-4">
                  <div className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#edfffe]/70 uppercase mb-2">
                    TECHNICAL DELIVERABLES
                  </div>
                  {phase.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#cbfffc] mt-1.5 shrink-0 opacity-80" />
                      <span className="font-sans text-xs text-[#edfffe]/90 leading-relaxed font-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees — Auros Liquid Deep recessed panels (#011d1c, 16px radius) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#011d1c] border border-[#004d49]/70 rounded-[16px] p-8 md:p-12 mb-16"
        >
          <div className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#cbfffc] uppercase mb-2">
            ENGINEERING COMMITMENTS
          </div>
          <h3 className="font-sans text-2xl md:text-3xl font-medium tracking-[-0.03em] text-[#ffffff] mb-8">
            What you can depend on throughout our engagement.
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <div key={i} className="border-t border-[#004d49] pt-4">
                <div className="font-sans text-base font-medium text-[#ffffff] mb-2">
                  {g.title}
                </div>
                <div className="font-sans text-xs text-[#bbc7c6] leading-relaxed font-normal">
                  {g.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center text-center">
          <a
            href="#contact"
            className="btn-aurora"
          >
            START YOUR ARCHITECTURE SPRINT →
          </a>
          <p className="font-sans text-xs text-[#bbc7c6]/70 mt-4 tracking-normal">
            Direct founder collaboration · EC-Council CEH verified · 3-4 week MVP target
          </p>
        </div>
      </div>
    </section>
  );
}
