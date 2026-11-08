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
      timeframe: '3-4 weeks to MVP',
      highlight: 'Secure, production-ready multi-tenancy',
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
      timeframe: '3-4 weeks to launch',
      highlight: 'Deterministic, sandboxed agent execution',
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
      timeframe: '4-5 weeks to launch',
      highlight: 'Native performance, single codebase',
    },
  ];

  return (
    <section id="services" className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-emerald-400/3 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-white/60 tracking-widest">SERVICES_</span>
            <motion.div
              className="h-px w-12 bg-emerald-400/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6">
            What we
            <span className="text-emerald-400/80 not-italic"> build</span>
          </h2>
          
          <p className="text-sm text-white/70 leading-relaxed font-light max-w-2xl">
            We ship production-ready products, not fragile prototypes. Every project includes proper authentication, 
            payment processing, Redis caching, per-tenant rate limiting, and deployment. Real products need real infrastructure.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] p-8 transition-all duration-300"
            >
              {/* Service index */}
              <div className="font-mono text-[10px] text-emerald-400/60 tracking-widest mb-6">
                {service.index}
              </div>

              {/* Title */}
              <h3 className="font-serif italic text-2xl text-white mb-4 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/75 leading-relaxed font-light mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-emerald-400/60 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-mono text-[10px] text-white/60 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Meta info */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[9px] text-emerald-400/80 tracking-wider">
                  {service.timeframe}
                </span>
                <span className="font-mono text-[8px] text-white/40 tracking-wider">
                  {service.highlight}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-white/75 hover:text-emerald-400 border border-white/10 hover:border-emerald-400/40 px-6 py-3 transition-all"
          >
            DISCUSS YOUR ARCHITECTURE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
