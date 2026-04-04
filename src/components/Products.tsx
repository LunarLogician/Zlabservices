'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

interface Product {
  name: string;
  badge: string;
  live?: boolean;
  description: string;
  link: string;
  tags: string[];
}

export function Products() {
  const products: Product[] = [
    {
      name: 'DevPost AI',
      badge: 'LIVE · SAAS',
      live: true,
      description:
        'AI-powered platform that auto-generates LinkedIn posts for developers and founders. Direct publishing via LinkedIn API.',
      link: 'https://devpostfe.vercel.app',
      tags: ['Node.js', 'Express.js', 'OpenAI API', 'MongoDB', 'Next.js'],
    },
    {
      name: 'AI Proposal Maker',
      badge: 'LIVE · WEB',
      live: true,
      description:
        'Intelligent proposal generator for freelancers. Generates personalized proposals from resumes, cutting turnaround by 90%.',
      link: 'https://aiproposalmaker.vercel.app/',
      tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    },
     {
      name: 'EverlearnAI Web',
      badge: 'PLAY STORE · ACTIVE',
      live: true,
      description:
        'AI-powered mobile learning platform. MCQ generation, smart flashcards, quizzes, and gamified progress tracking.',
      link: 'https://everlearnai.live',
      tags: ['Flutter', 'Dart', 'Claude API', 'Firebase', 'Node.js'],
    },
    {
      name: 'EverlearnAI Mobile',
      badge: 'PLAY STORE · ACTIVE',
      live: true,
      description:
        'AI-powered mobile learning platform. MCQ generation, smart flashcards, quizzes, and gamified progress tracking.',
      link: 'https://everlearnai.live',
      tags: ['Flutter', 'Dart', 'Claude API', 'Firebase', 'Node.js'],
    },
    {
      name: 'Bahria University Hub',
      badge: 'STUDENT APP',
      description:
        'Smart scraper for Bahria University students. Tracks assignments, classes, and deadlines with push notifications.',
      link: '#',
      tags: ['Flutter', 'Web Scraping', 'Firebase FCM', 'Node.js'],
    },
   
    {
      name: 'SigCoin Mining',
      badge: 'PRODUCTION READY',
      description:
        'Crypto mining app for virtual coin earning. Real-time tracking, JWT auth, Docker deployment.',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions'],
    },
    {
      name: 'VS Code Extensions',
      badge: '3K+ USERS',
      live: true,
      description:
        'Multiple developer productivity extensions with 3,000+ active users each. Built with VS Code API.',
      link: '#',
      tags: ['JavaScript', 'Node.js', 'VS Code API'],
    },
  ];

  return (
    <section id="products" className="relative py-24 px-6 md:px-10 overflow-hidden">
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
          <span className="font-mono text-[10px] text-white/75 tracking-widest">PRODUCTS_</span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-3">
            What we&apos;ve
            <span className="text-white/75 not-italic"> shipped</span>
          </h2>
          <p className="text-sm text-white/75 leading-relaxed mt-4 font-light max-w-lg">
            Real products. Real users. No vaporware.
          </p>
        </motion.div>

        {/* Products — card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {products.map((p, i) => {
            const isLast = i === products.length - 1;
            const aloneInRow = isLast && products.length % 3 === 1;
            return (
            <motion.div
              key={i}
              className={`group bg-[#0a0a08] hover:bg-white/[0.03] p-8
                transition-all duration-300 flex flex-col
                ${aloneInRow ? 'lg:col-span-full' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              {/* Top row — index + badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-mono text-[9px] px-2.5 py-1 tracking-widest border
                  ${p.live
                    ? 'text-emerald-400/80 border-emerald-400/20'
                    : 'text-white/50 border-white/[0.12]'}`}>
                  {p.badge}
                </span>
              </div>

              {/* Product name */}
              <h3 className="font-serif italic text-3xl text-white leading-tight mb-4">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              {/* Footer — tags + link */}
              <div className="border-t border-white/[0.06] pt-5 flex justify-between
                items-end gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] text-white/50 border border-white/20
                        px-2 py-0.5 tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link !== '#' && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-white/75 hover:text-white
                      transition-all tracking-wider shrink-0 group-hover:translate-x-0.5
                      inline-flex items-center gap-1"
                  >
                    VIEW <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
