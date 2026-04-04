'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/14 px-6 md:px-10 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-mono text-white text-sm tracking-widest">ZLAB_</span>
            <p className="text-xs text-white/35 font-light leading-relaxed mt-3 max-w-[200px]">
              Building AI products that ship. Fast, focused, and built to scale.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-14 flex-wrap">
            <div>
              <div className="font-mono text-[9px] text-white/70 tracking-widest mb-5">NAVIGATE</div>
              <div className="space-y-3">
                {[
                  { l: 'SERVICES', h: '#services' },
                  { l: 'PRODUCTS', h: '#products' },
                  { l: 'ABOUT', h: '#about' },
                  { l: 'TESTIMONIALS', h: '#testimonials' },
                  { l: 'CONTACT', h: '#contact' },
                ].map((item) => (
                  <a
                    key={item.h}
                    href={item.h}
                    className="block font-mono text-[10px] text-white/75
                      hover:text-white/60 tracking-wider transition-colors"
                  >
                    {item.l}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-white/70 tracking-widest mb-5">SERVICES</div>
              <div className="space-y-3">
                {['AI SAAS', 'MOBILE APPS', 'DEV TOOLS'].map((s) => (
                  <div key={s} className="font-mono text-[10px] text-white/75 tracking-wider">{s}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-white/70 tracking-widest mb-5">CONNECT</div>
              <div className="space-y-3">
                {[
                  { l: 'LINKEDIN', h: 'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true' },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-[10px] text-white/75
                      hover:text-white/60 tracking-wider transition-colors"
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex justify-between items-center">
          <span className="font-mono text-[9px] text-white/70 tracking-widest">
            © 2026 ZLAB SERVICES
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-white/70 tracking-widest hidden md:block">
              ISLAMABAD, PK · EST. 2024
            </span>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={scrollToTop}
              className="font-mono text-[9px] text-white/75 hover:text-white/50
                tracking-widest transition-colors"
            >
              ↑ TOP
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
