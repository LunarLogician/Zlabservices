'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
      name: 'EverlearnAI',
      badge: 'Live on Play Store',
      description:
        'AI study platform with MCQ generation, smart flashcards, and quiz tools. Built for students who want to study smarter.',
      link: 'https://everlearnai.live',
      tags: ['Flutter', 'Claude API', 'Node.js'],
    },
    {
      name: 'DevPost AI',
      badge: 'Live',
      description:
        'AI-powered LinkedIn post generator. Write content that actually gets engagement — in seconds.',
      link: 'https://devpostfe.vercel.app',
      tags: ['React', 'OpenAI', 'LinkedIn OAuth'],
    },
    {
      name: 'VS Code Extension',
      badge: '10K+ Installs',
      description:
        'A developer productivity extension that went viral. Built under the Zubified brand with organic reach.',
      link: 'https://marketplace.visualstudio.com',
      tags: ['TypeScript', 'VS Code API'],
    },
    {
      name: 'LocalBeam',
      badge: 'Open Source',
      description:
        'npm CLI tool for local data translation and transformation workflows. Published and used by devs worldwide.',
      link: 'https://www.npmjs.com',
      tags: ['Node.js', 'CLI', 'npm'],
    },
    {
      name: 'PromptCraft',
      badge: 'Coming Soon',
      description:
        'A prompt engineering toolkit for developers building on top of LLMs. Craft, test, and ship better AI prompts.',
      link: '#',
      tags: ['AI', 'Prompting', 'Developer Tool'],
      isComingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="products" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display mb-4">What We&apos;ve Shipped</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real products. Real users. No vaporware.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: product.isComingSoon ? 0 : -8 }}
                className={`glass glass-hover group overflow-hidden p-6 md:p-8 flex flex-col ${
                  product.isComingSoon ? 'opacity-75' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-lg">{product.name}</h3>
                  {!product.isComingSoon && (
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="text-primary/50 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary/80 border border-primary/30">
                    {product.badge}
                  </span>
                </div>

                <p className="text-white/70 mb-6 text-sm leading-relaxed flex-grow">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="tech-pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
