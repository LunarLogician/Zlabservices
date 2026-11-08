'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'SERVICES', href: '/#services' },
    { label: 'CASE STUDIES', href: '/case-studies' },
    { label: 'PRODUCTS', href: '/#products' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a08]/95 backdrop-blur-md border-white/10'
          : 'bg-transparent border-white/[0.06]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-white text-sm font-semibold tracking-widest group-hover:text-emerald-400 transition-colors">
              ZLAB_
            </span>
            <span className="font-mono text-[9px] text-emerald-400/80 tracking-wider hidden sm:inline">
              SECURE AI STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] text-white/80 hover:text-emerald-400 tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-400/90 tracking-widest">
                AVAILABLE FOR SPRINTS
              </span>
            </div>
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-white/90 border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 hover:bg-emerald-400 hover:text-[#07110d] transition-all tracking-wider rounded"
            >
              BOOK CALL &rarr;
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden font-mono text-xs text-white/80 hover:text-emerald-400 tracking-widest"
          >
            {isOpen ? 'CLOSE_' : 'MENU_'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 border-t border-white/10 mt-2 space-y-4 pt-4 bg-[#0a0a08]/95"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-[11px] text-white/80 hover:text-emerald-400 tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-2 font-mono text-[11px] text-emerald-400 border border-emerald-400/40 px-4 py-2 hover:bg-emerald-400 hover:text-[#07110d] transition-all tracking-wider rounded"
            >
              BOOK 30-MIN CALL &rarr;
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
