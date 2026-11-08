'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Adam Chalmers',
      role: 'Founder & Technical Project Lead',
      company: 'Repeat Client · United Kingdom',
      text: 'Zubair truly excels in full-stack architecture and AI systems engineering. His work exceeded expectations with stellar documentation, bulletproof error handling, and remarkable professionalism throughout.',
      rating: 5,
    },
    {
      name: 'Adam Chalmers',
      role: 'Project Manager',
      company: 'Repeat Client · United Kingdom',
      text: 'Demonstrates deep technical rigor, ethical standards, and high velocity. Consistently delivers production-grade code with acute attention to detail, robust testing, and transparent communication.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'TechStart · United States',
      text: 'One of the most competent systems engineers I have collaborated with. The multi-tenant AI pipelines and agent workflows delivered were secure, scalable, and far exceeded our launch benchmarks.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 px-6 md:px-10 overflow-hidden">
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
            VERIFIED ENDORSEMENTS
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              Trusted by international engineering leaders and founders.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              100% authentic client evaluations from shipped commercial contracts in the United Kingdom and North America.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid — Auros Liquid Kelp Cards (#003734, 16px radius, no shadow) */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#003734] border border-[#004d49] hover:border-[#00827c]/60 rounded-[16px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Rating indicators */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className="text-xs text-[#cbfffc]"
                    >
                      ★
                    </span>
                  ))}
                  <span className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#bbc7c6]/60 ml-2 uppercase">
                    VERIFIED
                  </span>
                </div>

                {/* Quote in Ash (#f2f2f2) */}
                <p className="font-sans text-sm md:text-base text-[#f2f2f2] leading-relaxed font-normal mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 border-t border-[#004d49] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-[#012624] border border-[#00827c]/40 flex items-center justify-center font-sans text-xs font-medium text-[#cbfffc] shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-sans text-sm font-medium text-[#ffffff]">
                    {t.name}
                  </div>
                  <div className="font-sans text-[11px] text-[#bbc7c6] font-normal">
                    {t.role}
                  </div>
                  <div className="font-sans text-[10px] tracking-[0.08em] uppercase text-[#cbfffc]/70 mt-0.5">
                    {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
