'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Zap, Code2, Rocket } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const statCards = [
    { number: '4+', label: 'Live Products', icon: Rocket },
    { number: '10K+', label: 'Extension Installs', icon: Zap },
    { number: '5+', label: 'Years Building', icon: Code2 },
    { number: '3', label: 'Services', icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={floatingVariants.float}
        className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        style={{ opacity: 0.3 }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], transition: { duration: 8, repeat: Infinity } }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        style={{ opacity: 0.2 }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ y, opacity }}
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors mb-8 cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">AI Product Studio · Islamabad, PK</span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Building AI-powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              SaaS products
            </span>
            <br />
            <span className="text-white">that scale.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Full-Stack Developer with <span className="text-white font-medium">4+ years</span> of experience building production-ready applications, APIs, and developer tools. <span className="text-white font-medium">Always shipping.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative">View Our Work</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch <span className="ml-2">→</span>
          </motion.button>
        </motion.div>

        {/* Stats with enhanced interactivity */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { number: '4+', label: 'Years Experience', icon: Rocket },
            { number: '15+', label: 'Live Projects', icon: Zap },
            { number: '100K+', label: 'File Downloads', icon: Code2 },
            { number: '3K+', label: 'Users Reached', icon: Zap },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(124, 58, 237, 0.2)' }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all"></div>

                <div className="relative z-10">
                  <Icon className="w-5 h-5 text-purple-400 mb-3 group-hover:text-pink-400 transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 cursor-pointer transition-colors group"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={28} className="group-hover:scale-110 transition-transform" />
      </motion.div>
    </section>
  );
}
