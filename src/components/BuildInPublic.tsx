'use client';

import { motion } from 'framer-motion';
import { Code2, GitCommit, Users, MessageCircle, TrendingUp } from 'lucide-react';

export function BuildInPublic() {
  const activities = [
    {
      type: 'commit',
      title: 'Released AI Proposal Maker v2.1',
      description: 'Added Claude API integration for smarter proposal generation',
      time: '2 hours ago',
      icon: GitCommit,
      color: 'from-gray-500 to-gray-600',
    },
    {
      type: 'feature',
      title: '15+ Projects Now Live',
      description: 'Crossed 15 production applications milestone',
      time: '1 day ago',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
    },
    {
      type: 'users',
      title: '3K+ Active Users Reached',
      description: 'VS Code extensions hitting new user engagement records',
      time: '3 days ago',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      type: 'update',
      title: 'EverlearnAI Mobile v3.0 Released',
      description: 'New AI-powered quiz generation and flashcard system',
      time: '1 week ago',
      icon: Code2,
      color: 'from-purple-500 to-pink-600',
    },
    {
      type: 'milestone',
      title: '100K+ Downloads Achieved',
      description: 'All products combined now surpassing 100K total downloads',
      time: '2 weeks ago',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="build" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
                Building
              </span>
              {' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                in Public
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Real-time updates on what we're shipping. No BS, no vanity metrics — just progress.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>

                    <div className="relative z-10 flex gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        className={`hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex-shrink-0`}
                      >
                        <Icon size={28} className="text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                              {activity.title}
                            </h3>
                            <p className="text-white/60 text-sm mt-1">{activity.description}</p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 12 }}
                            className={`md:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} flex-shrink-0`}
                          >
                            <Icon size={20} className="text-white" />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                          <span className="text-xs text-white/50">{activity.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color} origin-left`}
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.a
              href="https://github.com/devpost-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold hover:shadow-xl hover:shadow-gray-500/50 transition-all"
            >
              <GitCommit size={20} />
              Follow on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
