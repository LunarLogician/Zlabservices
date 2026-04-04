'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-md">
      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
        style={{ opacity: 0.4 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md"></div>
                <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </div>
              <span className="text-xl font-bold font-display bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">ZLab</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Building AI products that ship. Fast, focused, and built to scale.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">QUICK LINKS</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">SERVICES</h4>
            <div className="space-y-3">
              {['AI SaaS', 'Mobile Apps', 'Dev Tools'].map((service) => (
                <motion.a
                  key={service}
                  whileHover={{ x: 4 }}
                  className="block text-white/60 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">CONNECT</h4>
            <div className="space-y-3">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ x: 4 }}
                  className="block text-white/60 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-xs">
            © 2025 ZLab Services · Islamabad, Pakistan · All rights reserved
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/60 transition-all"
            title="Back to top"
          >
            <ArrowUp size={18} className="text-white/60 group-hover:text-white transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
