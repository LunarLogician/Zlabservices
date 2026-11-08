'use client';

import { motion } from 'framer-motion';

export function BuildInPublic() {
  const activities = [
    {
      type: 'RELEASE',
      title: 'Released AI Proposal Maker v2.1',
      description: 'Integrated deterministic prompt templates and Stripe webhook reconciliation.',
      time: '2 HRS AGO',
    },
    {
      type: 'MILESTONE',
      title: '3 Hardened Systems Live in Production',
      description: 'Zero cross-tenant vector leakage verified across multi-tenant deployments.',
      time: '1 DAY AGO',
    },
    {
      type: 'SCALE',
      title: '10K+ Tool Executions & Installs',
      description: 'Full-stack AI developer utilities crossed 10,000 installations milestone.',
      time: '3 DAYS AGO',
    },
    {
      type: 'UPDATE',
      title: 'EverlearnAI v3.0 Multi-Tenant RAG Launched',
      description: 'Postgres Row-Level Security and chunked token streaming across web & Flutter app.',
      time: '1 WEEK AGO',
    },
    {
      type: 'OBSERVABILITY',
      title: '99.9% Uptime & Sentry Tracing Verified',
      description: 'Low-latency Redis caching and per-tenant rate limiters in active production.',
      time: '2 WEEKS AGO',
    },
  ];

  return (
    <section id="build" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            VERIFIED TELEMETRY
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              Shipping in real-time. Verified by production logs.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              No vanity metrics or marketing posturing. Transparent updates from our active engineering pipeline and shipped deployments.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid — Auros Lavender Phosphor metrics (#fde9ff) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { num: '3', lbl: 'LIVE PRODUCTION SYSTEMS' },
            { num: '10K+', lbl: 'DEVELOPER INSTALLS' },
            { num: '10K+', lbl: 'DOCUMENTS PROCESSED' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10"
            >
              <div className="font-sans text-5xl md:text-6xl font-medium tracking-[-0.04em] text-[#fde9ff] mb-2">
                {s.num}
              </div>
              <div className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#edfffe]/80 uppercase">
                {s.lbl}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Cards — Auros Surface list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-[#003734] border border-[#004d49] hover:border-[#00827c]/60 rounded-[16px] px-8 py-5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#cbfffc] bg-[#012624] px-2.5 py-1 rounded-[6px] border border-[#00827c]/30 shrink-0">
                    {a.type}
                  </span>
                  <div>
                    <h4 className="font-sans text-base font-medium text-[#ffffff] leading-snug">
                      {a.title}
                    </h4>
                    <p className="font-sans text-xs text-[#bbc7c6] mt-0.5 leading-relaxed font-normal">
                      {a.description}
                    </p>
                  </div>
                </div>

                <span className="font-sans text-[10px] font-medium tracking-[0.12em] text-[#bbc7c6]/60 shrink-0 self-start sm:self-center">
                  {a.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
