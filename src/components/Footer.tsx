'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ opacity: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary shadow-glow-sm"></div>
            <span className="text-lg font-bold font-display">ZLab</span>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2025 ZLab Services · Islamabad, Pakistan
          </p>

          {/* Navigation */}
          <div className="flex gap-6 text-sm text-white/50">
            <motion.a
              href="#services"
              whileHover={{ color: '#7c3aed' }}
              className="hover:text-primary transition-colors"
            >
              Services
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ color: '#7c3aed' }}
              className="hover:text-primary transition-colors"
            >
              Products
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ color: '#7c3aed' }}
              className="hover:text-primary transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: '#7c3aed' }}
              className="hover:text-primary transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
