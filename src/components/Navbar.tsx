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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#011d1c]/95 backdrop-blur-md border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-white text-base font-medium tracking-widest uppercase">
              ZLAB_
            </span>
            <span className="text-[10px] text-[#edfffe]/70 tracking-[0.15em] uppercase hidden sm:inline border-l border-white/15 pl-3">
              SYSTEMS ARCHITECT
            </span>
          </Link>

          {/* Ghost Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] font-normal uppercase tracking-[0.12em] text-[#bbc7c6] hover:text-[#ffffff] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00827c] animate-pulse" />
              <span className="text-[10px] text-[#edfffe]/80 tracking-[0.12em] uppercase font-normal">
                AVAILABLE FOR SPRINTS
              </span>
            </div>
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurora px-4 py-2 text-[12px] uppercase tracking-[0.08em] shadow-sm"
            >
              Book Call &rarr;
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-[12px] uppercase tracking-[0.12em] text-[#edfffe]"
          >
            {isOpen ? 'CLOSE_' : 'MENU_'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 border-t border-white/10 mt-2 space-y-4 pt-4 bg-[#011d1c]/95"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[12px] font-normal uppercase tracking-[0.12em] text-[#bbc7c6] hover:text-[#ffffff] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-aurora inline-block mt-2 px-4 py-2 text-[12px]"
            >
              Book Call &rarr;
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
