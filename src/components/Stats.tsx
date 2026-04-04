'use client';

import { motion } from 'framer-motion';
import { Rocket, Code2, Zap, Users } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Rocket,
      value: '4+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500',
      description: 'Building products & leading teams',
    },
    {
      icon: Code2,
      value: '15+',
      label: 'Live Projects',
      color: 'from-blue-500 to-cyan-500',
      description: 'Production-ready applications',
    },
    {
      icon: Zap,
      value: '100K+',
      label: 'Downloads',
      color: 'from-yellow-500 to-orange-500',
      description: 'Across all platforms & extensions',
    },
    {
      icon: Users,
      value: '3K+',
      label: 'Active Users',
      color: 'from-green-500 to-emerald-500',
      description: 'Daily active community',
    },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="stats" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                By The
              </span>
              {' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Real metrics from a real builder. No paid followers, no fake reviews.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 40px 80px rgba(124, 58, 237, 0.15)' }}
                  className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500"
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-3 mb-6 flex items-center justify-center relative z-10`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="font-display text-5xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{stat.description}</p>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} origin-left`}
                  ></motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
