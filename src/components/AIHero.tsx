'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Static grid only (no canvas animations)
const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Optimized: Single static gradient orb (no animation)
const StaticOrbs = () => {
  return (
    <>
      <div className="fixed top-20 left-0 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 right-0 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl pointer-events-none z-0" />
    </>
  );
};

// Optimized: Simple pulsing dot (CSS only, no canvas)
const StatusIndicator = () => {
  return (
    <div className="fixed top-6 right-6 z-20 hidden md:block">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
        </div>
        <span className="font-mono text-[7px] text-white/30 tracking-widest">SYSTEM ONLINE</span>
      </div>
    </div>
  );
};

// Lightweight typewriter (no glitch)
const TypewriterEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return (
    <span>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-5 bg-emerald-400 ml-0.5 align-middle animate-pulse" />
      )}
    </span>
  );
};

export function AIHero() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('**Ready.** What are you building?');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const suggestions = [
    'Build a SaaS with Stripe integration',
    'Create a mobile app with Flutter',
    'Develop a VS Code extension',
    'Add Claude API to my project',
  ];
  
  const ask = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setAnswer('');
    setShowSuggestions(false);
    
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
  
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    setTimeout(() => ask(), 100);
  };
  
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-10 pt-20 md:pt-32 pb-10 overflow-hidden bg-[#0a0a08]">
      {/* Static background only - NO canvas animations */}
      <div className="absolute inset-0 pointer-events-none z-0" style={GRID_BG} />
      <StaticOrbs />
      <StatusIndicator />
      
      {/* Simple gradient line at bottom (CSS only) */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 relative z-10">
        {/* Top status bar - simplified */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16 md:mb-20 flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-[9px] text-white/60 tracking-widest">AVAILABLE FOR SELECT PROJECTS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="font-mono text-[7px] text-white/30 tracking-widest">READY</div>
            <div className="w-8 h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start flex-1 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-400/20 bg-emerald-400/5 rounded-full mb-6">
              <span className="text-xs">🤖</span>
              <span className="font-mono text-[7px] text-emerald-400/80 tracking-widest">CLAUDE AI</span>
            </div>
            
            <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              <TypewriterEffect text="Production-ready AI SaaS" delay={0} />
              <br />
              <span className="text-emerald-400/80 not-italic">
                <TypewriterEffect text="in 3-4 weeks." delay={1.5} />
              </span>
            </h1>
            
            <p className="text-base text-white/70 leading-relaxed max-w-lg mb-10 font-light">
              We build full-stack AI products with payments, Redis caching, and deployment — not prototypes. See our live products below.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {['AI SAAS', 'FLUTTER', 'DEV TOOLS', 'CLAUDE API', 'NEXT.JS', 'TYPESCRIPT'].map((t, i) => (
                <span
                  key={t}
                  className="font-mono text-[8px] text-white/60 border border-white/10 px-2.5 py-1.5 tracking-widest hover:border-emerald-400/30 hover:text-emerald-400 transition-colors cursor-pointer"
                  style={{ animationDelay: `${2 + i * 0.05}s` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="relative bg-white/[0.02] border border-white/6 hover:border-emerald-400/30 rounded-lg p-6 transition-all duration-300 flex flex-col h-full min-h-96">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                <span className="ml-auto font-mono text-[8px] text-white/40 tracking-widest">
                  zlab — claude-sonnet
                </span>
              </div>

              {/* Response area */}
              <div className="flex-1 overflow-y-auto mb-4 pr-2 max-h-64 custom-scroll">
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-mono text-[8px] text-emerald-400/60 shrink-0">$ AI:</span>
                  <div className="text-white/70 text-xs leading-relaxed prose prose-invert prose-sm max-w-none flex-1">
                    <ReactMarkdown
                      components={{
                        p: ({...props}) => <p className="mb-2" {...props} />,
                        ul: ({...props}) => <ul className="list-disc list-inside mb-2 space-y-1 ml-2" {...props} />,
                        li: ({...props}) => <li className="text-white/70 ml-1" {...props} />,
                        strong: ({...props}) => <strong className="font-bold text-emerald-400" {...props} />,
                        code: ({inline, ...props}: any) => 
                          inline ? (
                            <code className="bg-emerald-400/10 px-1.5 rounded text-emerald-300 font-mono text-[8px]" {...props} />
                          ) : (
                            <code className="bg-white/5 px-2 py-1 rounded block my-1 text-emerald-300 font-mono text-[8px] overflow-x-auto" {...props} />
                          ),
                      }}
                    >
                      {answer}
                    </ReactMarkdown>
                    {loading && (
                      <div className="flex items-center gap-1 text-white/40 italic text-[10px]">
                        <span>Thinking</span>
                        <span className="animate-pulse">...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Suggestions */}
              {showSuggestions && !loading && (
                <div className="mb-4 p-3 border border-white/5 bg-white/[0.02]">
                  <div className="font-mono text-[6px] text-white/40 mb-2">QUICK START_</div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(s)}
                        className="text-[8px] text-white/50 hover:text-emerald-400 border border-white/10 hover:border-emerald-400/30 px-2 py-1 transition-all"
                      >
                        {s} →
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="flex gap-2 pt-3 border-t border-white/10">
                <span className="font-mono text-[8px] text-emerald-400/60 shrink-0 self-center">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && ask()}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  className="flex-1 bg-white/[0.02] border border-white/8 px-3 py-2 font-mono text-xs text-white placeholder:text-white/40 outline-none focus:border-emerald-400/30 transition-all disabled:opacity-40"
                />
                <button
                  onClick={ask}
                  disabled={loading}
                  className="bg-white/[0.02] border border-white/8 px-4 py-2 font-mono text-xs text-white/70 hover:border-emerald-400/30 hover:text-emerald-400 transition-all disabled:opacity-40"
                >
                  {loading ? '...' : 'RUN →'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom metrics - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/8 pt-10 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex gap-8">
            {[
            { num: '4', lbl: 'AI PRODUCTS' },
            { num: '10K+', lbl: 'VS CODE INSTALLS' },
            { num: '10K+', lbl: 'ACTIVE USERS' },
              { num: '99.9%', lbl: 'UPTIME' },
            ].map((m, i) => (
              <div key={m.lbl} className="group">
                <div className="font-serif italic text-2xl text-white group-hover:text-emerald-400 transition-colors">{m.num}</div>
                <div className="font-mono text-[8px] text-white/40 group-hover:text-white/60 tracking-widest">{m.lbl}</div>
              </div>
            ))}
          </div>
          
          <span className="font-mono text-[7px] text-white/20 tracking-wider hidden md:block">
            ISLAMABAD, PK
          </span>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}