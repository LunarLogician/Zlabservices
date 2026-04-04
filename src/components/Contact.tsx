'use client';

import { motion } from 'framer-motion';
import { Code2, Link2 as LinkedInIcon, Share2, Mail, Phone } from 'lucide-react';

export function Contact() {
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

  const socialLinks = [
    { icon: Code2, label: 'GitHub', href: 'https://github.com/devpost-ai', color: 'from-gray-600 to-gray-700' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true', color: 'from-blue-500 to-blue-600' },
    { icon: Share2, label: 'Twitter', href: 'https://twitter.com', color: 'from-sky-400 to-sky-500' },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white text-xs font-bold tracking-wider">
              LET&apos;S TALK
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Let&apos;s build</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">something amazing.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Open to select client work, collabs, and interesting problems. <span className="text-white font-medium">Let&apos;s connect.</span>
          </motion.p>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="mailto:zlabservices@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <p className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent hover:from-purple-200 hover:to-purple-200 transition-all">
                zlabservices@gmail.com
              </p>
            </motion.a>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.a
              href="mailto:zlabservices@gmail.com"
              whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-xl font-bold text-white overflow-hidden group inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                <Mail size={20} />
                Send Message
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                  title={social.label}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-2xl transition-all group-hover:scale-110`}>
                    <Icon size={24} />
                  </div>
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white whitespace-nowrap pointer-events-none"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Alternative contact method */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-white/10">
            <p className="text-white/60 mb-6">Or reach out via</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.a
                href="tel:+923123232695"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-purple-400" />
                <span>+92 312 323 2695</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
