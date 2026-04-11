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
      text: 'Zubair Mirza truly EXCELS in website development! His work exceeded expectations with stellar documentation and demonstrated remarkable professionalism. Working with him was a pleasure.',
      rating: 5,
    },
    {
      name: 'Adam Chalmers',
      role: 'Project Manager',
      company: 'Repeat Client · UK',
      text: 'Demonstrates deep expertise and hard work. Consistently delivers high-quality results with attention to detail and professional communication.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechStart · USA',
      text: 'One of the most competent developers I have worked with. The AI solutions delivered were beyond our expectations.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="font-mono text-[9px] text-white/60 tracking-widest uppercase">TESTIMONIALS_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-4 mb-6">
            Loved by
            <span className="text-emerald-400/80 not-italic"> clients</span>
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-light max-w-xl">
            Real feedback from real projects. 100% authentic client reviews.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-white/6 bg-gradient-to-br from-white/2 to-white/1 hover:border-emerald-400/30 hover:bg-emerald-400/5 p-8 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className={`font-mono text-sm ${
                      j < t.rating ? 'text-emerald-400/80' : 'text-white/20'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/70 leading-relaxed font-light mb-8 group-hover:text-white/80 transition-colors">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-[10px] text-emerald-400/80 font-medium">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white/80 font-medium text-sm">{t.name}</div>
                    <div className="font-mono text-[9px] text-white/50 tracking-wider">{t.role}</div>
                  </div>
                </div>
                <div className="font-mono text-[8px] text-white/40 tracking-widest">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
