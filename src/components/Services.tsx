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
      title: 'Full-Stack AI SaaS Development',
      description:
        'End-to-end AI-powered web applications built with production-grade infrastructure. We handle everything from AI integration to payment processing and deployment.',
      features: [
        'Next.js/React frontend with TypeScript',
        'Node.js/Python backend with REST/GraphQL APIs',
        'Claude/OpenAI integration & fine-tuning',
        'Stripe/Razorpay payment processing',
        'Redis caching & rate limiting',
        'Vercel/Railway/AWS deployment',
        'CI/CD pipelines & monitoring'
      ],
      timeframe: '3-4 weeks to MVP',
      highlight: 'Production-ready from day one'
    },
    {
      index: '02',
      title: 'Mobile App Development (Flutter)',
      description:
        'Cross-platform iOS & Android apps with native performance. We build apps that users love and that scale with your business.',
      features: [
        'Flutter with clean architecture',
        'Riverpod/Provider state management',
        'Backend API integration',
        'App Store & Play Store deployment',
        'Push notifications & analytics',
        'Offline-first capabilities',
        'Performance optimization'
      ],
      timeframe: '4-5 weeks to launch',
      highlight: 'Native performance, single codebase'
    },
    {
      index: '03',
      title: 'End-to-End Deployment & DevOps',
      description:
        'We don\'t just write code — we ship it. Complete infrastructure setup, monitoring, and scaling for your applications.',
      features: [
        'Production environment configuration',
        'Database optimization & migrations',
        'SSL certificates & security hardening',
        'Performance monitoring (Sentry, LogRocket)',
        'Auto-scaling & load balancing',
        'Backup & disaster recovery',
        '24/7 uptime monitoring'
      ],
      timeframe: '1-2 weeks setup',
      highlight: 'Sleep well knowing your app is secure'
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
            We ship production-ready products, not prototypes. Every project includes proper authentication, 
            payment processing, Redis caching, rate limiting, and deployment — because real products need real infrastructure.
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

              {/* Timeframe & highlight */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mono text-[8px] text-white/40 tracking-widest mb-1">
                      TIMEFRAME
                    </div>
                    <div className="font-mono text-[10px] text-emerald-400/80">
                      {service.timeframe}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[8px] text-white/40 tracking-widest mb-1">
                      HIGHLIGHT
                    </div>
                    <div className="font-mono text-[10px] text-white/80">
                      {service.highlight}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-serif italic text-3xl text-emerald-400/80 mb-2">15+</div>
              <div className="font-mono text-[8px] text-white/50 tracking-widest">LIVE PRODUCTS</div>
              <div className="text-xs text-white/70 mt-1">Built & deployed</div>
            </div>
            <div className="text-center">
              <div className="font-serif italic text-3xl text-emerald-400/80 mb-2">3-4</div>
              <div className="font-mono text-[8px] text-white/50 tracking-widest">WEEKS TO MVP</div>
              <div className="text-xs text-white/70 mt-1">Average timeline</div>
            </div>
            <div className="text-center">
              <div className="font-serif italic text-3xl text-emerald-400/80 mb-2">100%</div>
              <div className="font-mono text-[8px] text-white/50 tracking-widest">CLIENT SATISFACTION</div>
              <div className="text-xs text-white/70 mt-1">Repeat business rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
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
            Free consultation · No commitment · 30-minute call
          </p>
        </motion.div>
      </div>
    </section>
  );
}