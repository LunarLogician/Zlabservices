'use client';

import { motion } from 'framer-motion';
import { Code2, Package, Award, BookOpen, ArrowRight } from 'lucide-react';

export function About() {
  const statChips = [
    { icon: Award, label: 'CEH Certified' },
    { icon: Package, label: '4+ Live Products' },
    { icon: Code2, label: '10K+ Installs' },
    { icon: BookOpen, label: 'Bahria University' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white text-xs font-bold tracking-wider">
                THE STUDIO
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Small team.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Big output.</span>
            </motion.h2>

            <div className="space-y-5 text-white/70">
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                ZLab is a product-first AI lab. We don&apos;t consult — <span className="text-white font-medium">we build.</span>
                Every product starts with a sharp insight and ships as a real, working product in the world.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Founded by a CS student who refused to wait until graduation to start building. We move fast, ship real things, and keep the team lean on purpose.
              </motion.p>

              <motion.div variants={itemVariants} className="flex items-center gap-2 text-purple-400 mt-8 group cursor-pointer">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Founder Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -16, boxShadow: '0 40px 80px rgba(124, 58, 237, 0.2)' }}
              className="group relative overflow-hidden rounded-3xl p-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

              <div className="relative z-10 p-8 text-center">
                {/* Avatar Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-display text-4xl font-bold shadow-2xl">
                    MZ
                  </div>
                </motion.div>

                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                  Muhammad Zubair
                </h3>
                <p className="text-purple-400 font-bold text-sm mb-6">
                  FULL-STACK DEVELOPER & FOUNDER
                </p>

                <p className="text-white/70 text-base leading-relaxed mb-10">
                  Full-Stack Developer with 4+ years of experience building AI-powered SaaS products, RESTful APIs, and scalable web applications. Node.js Team Lead with a proven track record of shipping production apps and growing developer tools to 3,000+ users. Always learning, always shipping.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {statChips.map((chip, index) => {
                    const Icon = chip.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="group/chip relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover/chip:from-purple-500/5 group-hover/chip:to-pink-500/5 transition-all"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                          <Icon size={20} className="text-purple-400 mb-2 group-hover/chip:scale-110 transition-transform" />
                          <span className="text-xs font-medium text-white/70 group-hover/chip:text-white transition-colors">{chip.label}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  <motion.a
                    href="https://github.com/devpost-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-600/20 hover:bg-gray-600/40 text-white border border-gray-500/30 hover:border-gray-500/60 transition-all text-sm font-medium"
                  >
                    <Code2 size={16} />
                    View GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-white border border-blue-500/30 hover:border-blue-500/60 transition-all text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
