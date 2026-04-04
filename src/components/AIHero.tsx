'use client';

import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function AIHero() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setHasInteracted(true);
    setResponse('');

    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error('API Error');

      const reader = res.body?.getReader();
      if (!reader) throw new Error('No reader');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        setResponse((prev) => prev + text);
      }
    } catch (error) {
      setResponse('Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], transition: { duration: 6, repeat: Infinity } }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], transition: { duration: 8, repeat: Infinity } }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto z-10 w-full"
      >
        {/* Badge */}
        <motion.div className="text-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors mb-8 cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              AI-Powered Studio
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ask me anything.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              I'll build it.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Experience AI-powered development in real-time. Ask questions about any project, technology, or idea. No constraints.
          </p>
        </motion.div>

        {/* AI Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative group"
        >
          {/* Container with glass effect */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all duration-500 p-8 md:p-10">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Response Display */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  ref={responseRef}
                  className={`min-h-32 max-h-64 overflow-y-auto mb-6 p-6 rounded-2xl bg-black/40 border border-white/10 transition-all ${
                    hasInteracted ? 'block' : 'hidden'
                  }`}
                >
                  {response ? (
                    <div className="text-white/90 text-base leading-relaxed whitespace-pre-wrap">
                      {response}
                      {loading && <span className="animate-pulse">▌</span>}
                    </div>
                  ) : (
                    <div className="text-white/40 text-sm">
                      {loading ? 'Thinking...' : 'Your response will appear here'}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me about building SaaS, AI, mobile apps, scalable systems..."
                  disabled={loading}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-4 rounded-xl font-bold text-white overflow-hidden group/btn disabled:opacity-50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2">
                    {loading ? (
                      <Loader size={20} className="animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Helper text */}
              <p className="text-white/40 text-xs mt-4 text-center">
                Powered by Claude AI • Built with Next.js & TypeScript
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info cards below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: 'Instant Responses',
              desc: 'Get real-time AI-powered answers to your technical questions',
            },
            {
              title: 'Production Ready',
              desc: 'All solutions tested, documented, and battle-tested in production',
            },
            {
              title: 'Full Stack Expertise',
              desc: 'Frontend, backend, databases, DevOps, and everything in between',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all"
            >
              <h3 className="font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
