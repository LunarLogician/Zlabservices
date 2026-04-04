'use client';

import { motion } from 'framer-motion';
import { Brain, Smartphone, Terminal, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI SaaS Development',
      description:
        'We build full-stack AI-powered web applications from scratch — smart, scalable, and ready for real users.',
      techs: ['Claude API', 'OpenAI', 'React', 'Node.js', 'MongoDB'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description:
        'Cross-platform Flutter apps shipped to Play Store and App Store. Polished UI, clean architecture, production-ready.',
      techs: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
    },
    {
      icon: Terminal,
      title: 'Dev Tools & Extensions',
      description:
        'We build developer tools, VS Code extensions, CLI packages, and npm libraries used by thousands of developers globally.',
      techs: ['Node.js', 'TypeScript', 'VS Code API', 'npm'],
    },
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
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">What We</span>
              {' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Three core competencies. One mission: <span className="text-white">ship amazing products.</span>
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, boxShadow: '0 40px 80px rgba(124, 58, 237, 0.15)' }}
                  className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500"
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-6 relative z-10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow">
                      <Icon size={28} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-3 relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-6 text-base leading-relaxed relative z-10 group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {service.techs.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
