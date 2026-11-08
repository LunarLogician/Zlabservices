'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Counter component for numeric metrics
const Counter = ({ value, isInView }: { value: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  const parseValue = (val: string): number => {
    const clean = val.replace('+', '');
    if (clean.includes('K')) {
      return parseFloat(clean.replace('K', '')) * 1000;
    }
    return parseInt(clean, 10);
  };

  const numericValue = parseValue(value);
  const hasPlus = value.includes('+');

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span className="font-sans font-medium text-[#fde9ff] tracking-[-0.04em]">
      {count.toLocaleString()}
      {hasPlus && <span className="text-[#cbfffc] font-normal">+</span>}
    </span>
  );
};

export function StatsLight() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '4+', label: 'YEARS IN SYSTEMS DEV', sub: 'Hardened production architectures' },
    { value: '3', label: 'SHIPPED AI PRODUCTS', sub: 'Live multi-tenant SaaS & apps' },
    { value: '10K+', label: 'EXTENSION INSTALLS', sub: 'Developer productivity tools' },
    { value: '10K+', label: 'PROCESSED WORKFLOWS', sub: 'Automated documents & proposals' },
  ];

  return (
    <section id="stats" className="relative py-28 px-6 md:px-10 overflow-hidden">
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
            PERFORMANCE METRICS
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              Engineered with quantifiable accountability.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              Real telemetry from shipped applications. Tested with real user traffic, subscription checkouts, and active multi-tenant workloads.
            </p>
          </div>
        </motion.div>

        {/* Primary Metric Cards — Auros Surface Card (#003734, 16px radius, Lavender Phosphor numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl md:text-[61px] leading-none mb-3">
                  <Counter value={s.value} isInView={isInView} />
                </div>
                <div className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#edfffe] uppercase mb-2">
                  {s.label}
                </div>
              </div>
              <div className="font-sans text-xs text-[#bbc7c6] font-normal leading-relaxed mt-4 pt-4 border-t border-[#004d49]">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auxiliary Metrics — Auros Liquid Deep recessed panels (#011d1c, 16px radius) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'AVERAGE RESPONSE TIME', value: '< 2.4 HOURS', detail: 'Direct founder engineering access' },
            { label: 'CLIENT RETENTION RATE', value: '100% REPEAT CLIENTS', detail: 'UK & US founder engagements' },
            { label: 'CORE INFRASTRUCTURE UPTIME', value: '99.9% RELIABILITY', detail: 'Sentry observability & automated failover' },
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-[#011d1c] border border-[#004d49]/70 rounded-[16px] p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#bbc7c6]/70 uppercase">
                  {metric.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#cbfffc] opacity-80" />
              </div>
              <div className="font-sans text-xl font-medium tracking-[-0.02em] text-[#ffffff] mb-1">
                {metric.value}
              </div>
              <div className="font-sans text-xs text-[#bbc7c6]/80 font-normal">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
