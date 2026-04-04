'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';

interface Product {
  name: string;
  badge: string;
  description: string;
  link: string;
  tags: string[];
  isComingSoon?: boolean;
}

export function Products() {
  const products: Product[] = [
    {
      name: 'DevPost AI',
      badge: 'Live - SaaS',
      description:
        'AI-powered platform that automatically generates high-quality LinkedIn posts for developers, founders, and professionals. Integrates with LinkedIn API for direct publishing.',
      link: 'https://devpostfe.vercel.app',
      tags: ['Node.js', 'Express.js', 'OpenAI API', 'MongoDB', 'Next.js'],
    },
    {
      name: 'AI Proposal Maker',
      badge: 'Live - Web',
      description:
        'Intelligent proposal generator for freelancers and agencies. Automatically generates personalized proposals from resumes and job descriptions, cutting proposal time by 90%.',
      link: 'https://aiproposalmaker.vercel.app/',
      tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    },
    {
      name: 'EverlearnAI Mobile',
      badge: 'Play Store - Active',
      description:
        'AI-powered mobile learning platform on Play Store. Features MCQ generation, smart flashcards, quizzes, and gamified progress tracking for student success.',
      link: 'https://everlearnai.live',
      tags: ['Flutter', 'Dart', 'Claude API', 'Firebase', 'Node.js'],
    },
    {
      name: 'Bahria University Hub',
      badge: 'Student App',
      description:
        'Smart scraper app for Bahria University students. Tracks assignments, classes, deadlines with real-time alarms and push notifications to stay on top of coursework.',
      link: '#',
      tags: ['Flutter', 'Web Scraping', 'Firebase FCM', 'Node.js', 'Notifications'],
    },
    {
      name: 'MicroLearning Platform',
      badge: 'Full-Stack AI',
      description:
        'AI-powered platform converting documents (PDF, DOCX, TXT) into 60-second interactive learning modules with AI-generated flashcards, quizzes, and gamified tracking.',
      link: '#',
      tags: ['Flutter', 'Node.js', 'Spring Boot 3', 'OpenAI', 'Supabase'],
    },
    {
      name: 'SigCoin Mining',
      badge: 'Production Ready',
      description:
        'Cryptocurrency mining application allowing users to earn virtual coins through engagement. Features real-time tracking, JWT authentication, and Docker deployment.',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions'],
    },
    {
      name: 'VS Code Extensions',
      badge: '3K+ Users',
      description:
        'Multiple developer productivity extensions for VS Code with 3,000+ users each. Built with JavaScript and VS Code API for seamless integration.',
      link: '#',
      tags: ['JavaScript', 'Node.js', 'VS Code API'],
      isComingSoon: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="products" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
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
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">What We&apos;ve</span>
              {' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Shipped</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              <span className="text-white font-medium">Real products.</span> Real users. No vaporware.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!product.isComingSoon ? { y: -12, boxShadow: '0 40px 80px rgba(124, 58, 237, 0.15)' } : {}}
                className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500 flex flex-col ${
                  product.isComingSoon ? 'opacity-60' : ''
                }`}
              >
                {/* Animated gradient overlay on hover */}
                {!product.isComingSoon && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                )}

                {/* Header with title and link */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="font-display text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                    {product.name}
                  </h3>
                  {!product.isComingSoon && (
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.25, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-purple-400/50 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Badge */}
                <div className="mb-4 relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30 hover:border-purple-500/50 transition-all"
                  >
                    <Zap size={12} />
                    {product.badge}
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-6 text-base leading-relaxed relative z-10 group-hover:text-white/90 transition-colors flex-grow">
                  {product.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 relative z-10">
                  {product.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Coming soon overlay */}
                {product.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-20">
                    <div className="px-4 py-2 rounded-lg bg-purple-600/80 text-white font-semibold text-sm">
                      Coming Soon
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
