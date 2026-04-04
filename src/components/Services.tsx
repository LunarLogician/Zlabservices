'use client';

import { motion } from 'framer-motion';
import { Brain, Smartphone, Terminal } from 'lucide-react';

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
    <section id="services" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display mb-4">What We Build</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Three core competencies. One mission: ship amazing products.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass glass-hover group overflow-hidden p-6 md:p-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white group-hover:shadow-glow transition-shadow"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className="font-display text-xl mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
