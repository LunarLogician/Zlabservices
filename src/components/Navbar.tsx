'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ['Services', 'Products', 'Build', 'Stats', 'About', 'Contact'];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a08]/95 backdrop-blur-sm border-white/[0.08]'
          : 'bg-transparent border-white/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <span className="font-mono text-white text-sm tracking-widest">ZLAB_</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="font-mono text-[11px] text-white/40 hover:text-white tracking-wider transition-colors"
              >
                {link.toUpperCase()}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="font-mono text-[10px] text-white/30 tracking-wider">AVAILABLE</span>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-[11px] text-white/70 border border-white/15 px-4 py-2 hover:bg-white/[0.06] hover:text-white transition-all tracking-wider"
            >
              HIRE US →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-xs text-white/40 tracking-widest"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 border-t border-white/[0.06] mt-2 space-y-4 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-[11px] text-white/40 hover:text-white tracking-wider transition-colors"
              >
                {link.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-2 font-mono text-[11px] text-white/70 border border-white/15 px-4 py-2 hover:bg-white/[0.06] hover:text-white transition-all tracking-wider"
            >
              HIRE US →
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
