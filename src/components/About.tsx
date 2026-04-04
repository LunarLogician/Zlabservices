'use client';

import { motion } from 'framer-motion';
import { Code2, Package, Award, BookOpen } from 'lucide-react';

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                The Studio
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-display mb-6">
              Small team. Big output.
            </motion.h2>
            <div className="space-y-4 text-white/70">
              <motion.p variants={itemVariants}>
                ZLab is a product-first AI lab. We don&apos;t consult — we build.
                Every product starts with a sharp insight and ships as a real,
                working product in the world.
              </motion.p>
              <motion.p variants={itemVariants}>
                Founded by a CS student who refused to wait until graduation to
                start building. We move fast, ship real things, and keep the
                team lean on purpose.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Founder Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -8 }}
              className="glass glass-hover group p-8 text-center"
            >
              {/* Avatar Circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display text-2xl font-bold shadow-glow">
                  MZ
                </div>
              </motion.div>

              <h3 className="font-display text-2xl mb-1">Muhammad Zubair</h3>
              <p className="text-primary font-semibold text-sm mb-4">
                Founder & Lead Engineer
              </p>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                CS student, full-stack engineer, builder. CEH certified. Former
                Node.js Team Lead. Creator of Zubified — a dev content brand
                with 10K+ organic reach.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {statChips.map((chip, index) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="glass-sm p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-primary/30"
                    >
                      <Icon size={18} className="text-primary mb-1" />
                      <span className="text-xs text-white/70">{chip.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
