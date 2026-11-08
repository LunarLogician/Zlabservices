'use client';

import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      index: '01',
      title: 'Hardened Multi-Tenant AI SaaS',
      description:
        'End-to-end full-stack AI applications with strict tenant isolation, PostgreSQL Row-Level Security (RLS), and zero cross-tenant vector leakage. Shipped ready for paying teams.',
      features: [
        'Next.js 16/React 19 with TypeScript',
        'Postgres RLS & isolated vector namespaces',
        'Claude 3.5 & OpenAI with zero data retention',
        'Stripe subscription checkout & automated webhooks',
        'Redis caching & per-tenant token rate limiting',
        'Hardened cloud deployment (Vercel/Railway/AWS)',
        'CI/CD pipelines, Sentry & uptime monitoring',
      ],
      timeframe: '3-4 WEEKS TO MVP',
      highlight: 'SECURE MULTI-TENANCY',
    },
    {
      index: '02',
      title: 'Autonomous AI Agents & Workflows',
      description:
        'Production agentic workflows with ReAct reasoning loops, sandboxed tool execution, and prompt injection defense. Built for reliable, deterministic business automation.',
      features: [
        'ReAct agent loops & tool calling (LangGraph)',
        'Sandboxed code execution & scoped OAuth tokens',
        'Guardrails against prompt injection & data leaks',
        'Background job queues (Temporal/Inngest)',
        'Per-tenant LLM token budgets & spend caps',
        'Structured outputs with Pydantic & Zod validation',
        'Complete audit trails & observability tracing',
      ],
      timeframe: '3-4 WEEKS TO LAUNCH',
      highlight: 'SANDBOXED AGENT EXECUTION',
    },
    {
      index: '03',
      title: 'Cross-Platform Mobile Apps (Flutter)',
      description:
        'High-performance iOS and Android mobile companions with clean architecture, offline-first local synchronization, and secure biometric authentication.',
      features: [
        'Flutter with clean Riverpod/Provider architecture',
        'Offline-first SQLite caching & real-time sync',
        'Biometric auth & secure device storage',
        'Cross-device state synchronization with web SaaS',
        'App Store & Google Play Store release pipelines',
        'Push notifications & analytics instrumentation',
        '60fps native performance on single codebase',
      ],
      timeframe: '4-5 WEEKS TO LAUNCH',
      highlight: 'NATIVE 60FPS PERFORMANCE',
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow & Section Heading in Matter 500 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            CAPABILITIES & SYSTEMS
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              Engineered for production. Built to withstand real load.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              We ship hardened systems with strict tenant isolation, automated subscription billing, and sandboxed AI orchestration — not fragile prototypes.
            </p>
          </div>
        </motion.div>

        {/* Services grid — Auros Surface Cards (16px radius, Liquid Kelp #003734, no shadows) */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#00827c]/60"
            >
              <div>
                {/* Header row: Index & Auros Arrow Icon Button (32x32, 6px radius) */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#edfffe]/70 uppercase">
                    SYSTEM {service.index}
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className="w-8 h-8 rounded-[6px] bg-[#012624]/60 border border-[#00827c]/40 flex items-center justify-center text-[#ffffff] hover:bg-[#00827c] hover:text-[#011d1c] transition-all"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                {/* Card Title — Matter 500 */}
                <h3 className="font-sans text-2xl font-medium tracking-[-0.025em] text-[#ffffff] mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description — Silver Mist */}
                <p className="font-sans text-sm text-[#bbc7c6] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#cbfffc] mt-1.5 shrink-0 opacity-80" />
                      <span className="font-sans text-xs text-[#edfffe]/90 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta footer row */}
              <div className="pt-6 border-t border-[#004d49] flex items-center justify-between font-sans text-[11px] tracking-[0.1em]">
                <span className="text-[#cbfffc] font-medium">
                  {service.timeframe}
                </span>
                <span className="text-[#bbc7c6]/60">
                  {service.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="btn-aurora"
          >
            DISCUSS YOUR ARCHITECTURE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
