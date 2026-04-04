'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const statCards = [
    { number: '4+', label: 'Live Products' },
    { number: '10K+', label: 'Extension Installs' },
    { number: '5+', label: 'Years Building' },
    { number: '3', label: 'Services' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="pill-badge mb-6 justify-center">
            AI Product Studio · Islamabad, PK
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="font-display mb-6 font-bold">
          We engineer AI products that ship.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          ZLab builds intelligent software — from idea to production. Fast, focused, and built to scale.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-btn"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ghost-btn flex items-center justify-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch <span className="text-primary">→</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(124, 58, 237, 0.1)' }}
              className="stat-card cursor-pointer transition-all"
            >
              <div className="stat-card-value">{stat.number}</div>
              <div className="stat-card-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/70 cursor-pointer transition-colors"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
