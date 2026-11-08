'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 px-6 md:px-10 py-16 bg-[#070705]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-mono text-white text-base font-bold tracking-widest">
                ZLAB SERVICES
              </span>
            </Link>
            <p className="text-xs text-white/60 font-light leading-relaxed mt-3">
              Specialized AI engineering studio building hardened multi-tenant AI SaaS, autonomous agent workflows, and cross-platform mobile apps for tech founders.
            </p>
            <div className="mt-4 font-mono text-[9px] text-emerald-400/90 tracking-widest uppercase">
              LED BY EC-COUNCIL CERTIFIED ETHICAL HACKER
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest mb-4">
                NAVIGATION
              </div>
              <div className="space-y-2.5">
                {[
                  { l: 'SERVICES', h: '/#services' },
                  { l: 'CASE STUDIES', h: '/case-studies' },
                  { l: 'PRODUCTS', h: '/#products' },
                  { l: 'ABOUT', h: '/#about' },
                  { l: 'FAQ', h: '/#faq' },
                  { l: 'CONTACT', h: '/#contact' },
                ].map((item) => (
                  <Link
                    key={item.l}
                    href={item.h}
                    className="block font-mono text-[10px] text-white/70 hover:text-emerald-400 tracking-wider transition-colors"
                  >
                    {item.l}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest mb-4">
                CAPABILITIES
              </div>
              <div className="space-y-2.5">
                {[
                  'MULTI-TENANT RAG',
                  'AGENTIC WORKFLOWS',
                  'POSTGRES RLS SECURITY',
                  'NEXT.JS 16 & REACT 19',
                  'FLUTTER MOBILE APPS',
                ].map((s) => (
                  <div key={s} className="font-mono text-[10px] text-white/60 tracking-wider">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest mb-4">
                DIRECT CONNECT
              </div>
              <div className="space-y-2.5">
                <a
                  href="https://cal.com/code-zubair-3fs0gu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-[10px] text-emerald-400 hover:text-emerald-300 tracking-wider transition-colors"
                >
                  BOOK 30-MIN CALL &rarr;
                </a>
                <a
                  href="mailto:zlabservices@gmail.com"
                  className="block font-mono text-[10px] text-white/70 hover:text-emerald-400 tracking-wider transition-colors"
                >
                  zlabservices@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-[10px] text-white/70 hover:text-emerald-400 tracking-wider transition-colors"
                >
                  LINKEDIN &rarr;
                </a>
                <a
                  href="https://github.com/LunarLogician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-[10px] text-white/70 hover:text-emerald-400 tracking-wider transition-colors"
                >
                  GITHUB &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[9px] text-white/50 tracking-widest">
            &copy; 2026 ZLAB SERVICES &middot; ALL RIGHTS RESERVED
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-white/40 tracking-widest hidden md:block">
              ISLAMABAD, PK &middot; REMOTE WORLDWIDE
            </span>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={scrollToTop}
              className="font-mono text-[9px] text-emerald-400/80 hover:text-emerald-300 tracking-widest transition-colors cursor-pointer"
            >
              &uarr; TOP
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
