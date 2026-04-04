'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

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
      role: 'Founder & Project Lead',
      company: 'Repeat Client · UK',
      text: 'Zubair Mirza truly EXCELS in website development! His work exceeded expectations with stellar documentation and demonstrated remarkable professionalism. Working with him was a pleasure, as his proactive communication and deep understanding ensured timely delivery. I would 100% hire him again; his expertise shines through every project he undertakes.',
      rating: 5,
    },
    {
      name: 'Adam Chalmers',
      role: 'Project Manager',
      company: 'Repeat Client · UK',
      text: 'Demonstrates deep expertise and hard work. Consistently delivers high-quality results with attention to detail and professional communication throughout the project lifecycle.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] text-white/75 tracking-widest">TESTIMONIALS_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3">
            Loved by
            <span className="text-white/75 not-italic"> clients</span>
          </h2>
          <p className="text-sm text-white/75 leading-relaxed mt-4 font-light max-w-lg">
            Real feedback from real projects.
          </p>
        </motion.div>

        {/* Cards — flush bordered panels */}
        <div className="grid md:grid-cols-2 border border-white/[0.08]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/[0.02] hover:bg-white/[0.04] p-8
                transition-all duration-300 border-r border-white/[0.06] last:border-r-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="font-mono text-[11px] text-white/50">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/55 leading-relaxed font-light italic mb-8">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-white/[0.06] pt-5 flex justify-between items-end">
                <div>
                  <div className="text-white/70 text-sm font-light">{t.name}</div>
                  <div className="font-mono text-[10px] text-white/75 tracking-wider mt-0.5">
                    {t.role}
                  </div>
                </div>
                <span className="font-mono text-[9px] text-white/70 tracking-widest">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}
