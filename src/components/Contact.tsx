'use client';

import { motion } from 'framer-motion';
import { Code2, Link2 as LinkedInIcon, Share2 } from 'lucide-react';

export function Contact() {
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

  const socialLinks = [
    { icon: Code2, label: 'GitHub', href: 'https://github.com' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Share2, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2 variants={itemVariants} className="font-display mb-6">
            Let&apos;s build something.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Open to select client work, collabs, and interesting problems.
          </motion.p>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-3xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              zubair@zlabservices.com
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="mailto:zubair@zlabservices.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-btn inline-block"
            >
              Send a Message
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 flex-wrap"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="glass-sm p-4 group-hover:border-primary/50 transition-all">
                    <Icon size={24} className="text-white/70 group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
