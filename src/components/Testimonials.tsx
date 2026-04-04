'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Adam Chalmers',
      role: 'Founder & Project Lead',
      company: 'Repeat Client - UK',
      text: 'Zubair Mirza truly EXCELS in website development! His work exceeded expectations with stellar documentation and demonstrated remarkable professionalism. Working with him was a pleasure, as his proactive communication and deep understanding ensured timely delivery. I would 100% hire him again; his expertise shines through every project he undertakes.',
      rating: 5,
    },
    {
      name: 'Adam Chalmers',
      role: 'Project Manager',
      company: 'Repeat Client - UK',
      text: 'Demonstrates deep expertise and hard work. Consistently delivers high-quality results with attention to detail and professional communication throughout the project lifecycle.',
      rating: 5,
    }
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
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
                Loved By
              </span>
              {' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Real feedback from real projects. See what clients have to say about our work.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 40px 80px rgba(124, 58, 237, 0.15)' }}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500"
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

                {/* Star Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-1 mb-6 relative z-10"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-white/80 text-base leading-relaxed mb-8 relative z-10 group-hover:text-white/95 transition-colors italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">
                      {testimonial.role} at <span className="text-purple-400">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-white/60 mb-6">
              Ready to start your next project?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
