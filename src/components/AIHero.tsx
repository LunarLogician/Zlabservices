'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export function AIHero() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('Ready. What are you building?');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setAnswer('');

    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    setInput('');
    const reader = res.body?.getReader();
    if (!reader) return;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = new TextDecoder().decode(value);
      setAnswer(prev => prev + text);
    }
    setLoading(false);
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a08]
      flex flex-col px-6 md:px-10 pt-20 md:pt-24 pb-10 overflow-hidden">

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px,
            transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,0.03) 1px,
            transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />

      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1">

        {/* Top bar */}
        <div className="relative z-10 flex justify-between
          items-center mb-10 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400
              shadow-[0_0_8px_#4ade80] animate-pulse" />
            <span className="font-mono text-xs
              text-white/75">Available for select projects</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="relative z-10 grid md:grid-cols-2
          gap-10 items-start flex-1">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              text-white leading-tight mb-5">
              We build AI products
              <span className="text-white/75 not-italic">
                {' '}that{' '}
              </span>
              ship.
            </h1>
            <p className="text-sm text-white/75 leading-relaxed
              max-w-sm mb-8 font-light">
              A one-person product lab out of Islamabad.
              Full-stack AI SaaS, mobile apps, and dev tools
              — from zero to production, fast.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI SAAS', 'FLUTTER',
                'DEV TOOLS', 'CLAUDE API'].map(t => (
                <span key={t} className="font-mono text-[10px]
                  text-white/75 border border-white/10
                  px-2.5 py-1 tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — terminal widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/[0.08]
              rounded-sm p-6"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-1.5 mb-5
              pb-4 border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="ml-auto font-mono text-[10px]
                text-white/20 tracking-widest">
                zlab — claude-sonnet
              </span>
            </div>

            {/* Response */}
            <div className="min-h-[120px] mb-4 text-xs leading-relaxed overflow-y-auto max-h-48">
              <p className="text-white/20 mb-2 font-mono">
                $ ask anything about your project
              </p>
              <div className="text-white/70 prose prose-invert prose-sm">
                <ReactMarkdown
                  components={{
                    p: ({...props}) => <p className="mb-2" {...props} />,
                    ul: ({...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                    ol: ({...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                    li: ({...props}) => <li className="text-white/70 ml-2" {...props} />,
                    strong: ({...props}) => <strong className="font-bold text-white" {...props} />,
                    em: ({...props}) => <em className="italic text-white/80" {...props} />,
                    code: ({inline, ...props}: any) => 
                      inline ? (
                        <code className="bg-white/10 px-1 rounded text-pink-300 font-mono text-[10px]" {...props} />
                      ) : (
                        <code className="bg-black/40 px-2 py-1 rounded block my-1 text-pink-300 font-mono text-[10px] overflow-x-auto" {...props} />
                      ),
                    h1: ({...props}) => <h1 className="text-sm font-bold mt-2 mb-1 text-pink-300" {...props} />,
                    h2: ({...props}) => <h2 className="text-xs font-bold mt-2 mb-1 text-purple-300" {...props} />,
                  }}
                >
                  {answer}
                </ReactMarkdown>
                {loading && <span className="inline-block w-1.5 h-3 bg-white/60 ml-0.5 animate-pulse align-middle" />}
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && ask()}
                placeholder="e.g. I need a SaaS with auth..."
                disabled={loading}
                className="flex-1 bg-white/[0.04] border
                  border-white/10 px-3 py-2.5 font-mono
                  text-xs text-white placeholder:text-white/20
                  outline-none focus:border-white/25
                  transition-colors disabled:opacity-40"
              />
              <button
                onClick={ask}
                disabled={loading}
                className="bg-white/[0.08] border
                  border-white/15 px-4 py-2.5 font-mono
                  text-xs text-white/70 hover:bg-white/15
                  hover:text-white transition-all
                  disabled:opacity-40"
              >
                {loading ? '...' : 'run →'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom metrics */}
        <div className="relative z-10 mt-12 pt-5
          border-t border-white/[0.06] flex flex-wrap
          justify-between items-center gap-y-4">
          <div className="flex flex-wrap gap-8">
            {[
              { num: '15+', lbl: 'LIVE PRODUCTS' },
              { num: '100K+', lbl: 'DOWNLOADS' },
              { num: '3K+', lbl: 'ACTIVE USERS' },
            ].map(m => (
              <div key={m.lbl}>
                <div className="font-serif italic text-2xl
                  text-white">{m.num}</div>
                <div className="font-mono text-[18px]
                  text-white/75 tracking-widest mt-0.5">
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>
          <span className="font-mono text-[10px]
            text-white/20 tracking-wider hidden md:block">
            ISLAMABAD, PK · EST. 2026
          </span>
        </div>

      </div>
    </section>
  );
}
