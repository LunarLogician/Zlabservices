'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
};

const StaticOrbs = () => {
  return (
    <>
      <div className="fixed top-20 left-0 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 right-0 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl pointer-events-none z-0" />
    </>
  );
};

const StatusIndicator = () => {
  return (
    <div className="fixed top-6 right-6 z-20 hidden md:block">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
        </div>
        <span className="font-mono text-[8px] text-white/50 tracking-widest uppercase">
          SECURE MULTI-TENANT RUNTIME
        </span>
      </div>
    </div>
  );
};

export function AIHero() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(
    '**Ready.** What multi-tenant AI system, autonomous agent, or full-stack SaaS are you engineering?'
  );
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = [
    'How do you isolate vector memory between tenants in RAG?',
    'Build an autonomous agent with sandboxed tool calling',
    'Develop an offline-ready Flutter app with AI sync',
    'Prevent prompt injection & data exfiltration in AI SaaS',
  ];

  const ask = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setAnswer('');
    setShowSuggestions(false);

    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        setAnswer(errorText || 'Error connecting to AI service. Please verify your API key.');
        setLoading(false);
        return;
      }

      setInput('');
      const reader = res.body?.getReader();
      if (!reader) {
        setLoading(false);
        setAnswer('Unable to initialize response stream.');
        return;
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = new TextDecoder().decode(value);
        setAnswer((prev) => prev + text);
      }
    } catch (err: any) {
      setAnswer(err?.message || 'Error connecting to AI service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    setTimeout(() => ask(), 100);
  };

  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-10 pt-24 md:pt-36 pb-12 overflow-hidden bg-[#0a0a08]">
      <div className="absolute inset-0 pointer-events-none z-0" style={GRID_BG} />
      <StaticOrbs />
      <StatusIndicator />

      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 relative z-10">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-12 md:mb-16 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-[9px] text-white/70 tracking-widest uppercase">
              ACCEPTING SELECT MULTI-TENANT &amp; AGENTIC AI SPRINTS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="font-mono text-[8px] text-emerald-400/80 tracking-widest uppercase">
              CEH SECURITY RIGOR
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start flex-1 mb-16">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-400/30 bg-emerald-400/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest font-semibold">
                SECURE AI PRODUCT STUDIO · CEH CERTIFIED
              </span>
            </div>

            {/* Semantic static H1 for 100% SSR visibility, no layout shift */}
            <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Hardened Multi-Tenant AI{' '}
              <span className="text-emerald-400 not-italic block mt-1">
                &amp; Agentic Systems.
              </span>
            </h1>

            {/* AEO Lead Definition (Answers who, what, timeline directly) */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-lg mb-8 font-light">
              We engineer production-grade Full-Stack AI SaaS with isolated tenant vector memory, sandboxed tool execution, and zero prompt-leakage architecture. Shipped in 3 to 4 weeks by EC-Council Certified Ethical Hackers.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07110d] shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Start Your Secure MVP &rarr;
              </a>
              <a
                href="https://cal.com/code-zubair-3fs0gu/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 transition-all hover:border-emerald-400 hover:text-emerald-400"
              >
                Book a Technical Strategy Call
              </a>
            </div>

            {/* Founder trust card with dimensions to prevent CLS */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 max-w-md">
              <Image
                src="/founder-avatar.svg"
                alt="Muhammad Zubair - Founder & Certified Ethical Hacker"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-emerald-400/40 object-cover shrink-0"
              />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  Founder-Led Delivery
                </p>
                <p className="text-xs text-white/70 leading-snug">
                  Muhammad Zubair, EC-Council Certified Ethical Hacker (CEH, GPA 3.98). Direct architecture from day one.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'MULTI-TENANT RAG',
                'AGENTIC WORKFLOWS',
                'POSTGRES RLS',
                'NEXT.JS 16',
                'FLUTTER APPS',
                'CEH SECURITY RIGOR',
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[8px] text-white/80 border border-white/15 bg-white/[0.04] px-2.5 py-1.5 tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Terminal Widget */}
          <div className="group">
            <div className="relative bg-white/[0.02] border border-white/10 hover:border-emerald-400/30 rounded-lg p-6 transition-all duration-300 flex flex-col h-full min-h-96">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-auto font-mono text-[9px] text-white/50 tracking-widest uppercase">
                  zlab : ai systems architect
                </span>
              </div>

              {/* Response area */}
              <div className="flex-1 overflow-y-auto mb-4 pr-2 max-h-64 custom-scroll">
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-mono text-[9px] text-emerald-400/80 shrink-0">$ AI:</span>
                  <div className="text-white/80 text-xs leading-relaxed prose prose-invert prose-sm max-w-none flex-1">
                    <ReactMarkdown
                      components={{
                        p: ({ ...props }) => <p className="mb-2" {...props} />,
                        ul: ({ ...props }) => (
                          <ul className="list-disc list-inside mb-2 space-y-1 ml-2" {...props} />
                        ),
                        li: ({ ...props }) => <li className="text-white/80 ml-1" {...props} />,
                        strong: ({ ...props }) => (
                          <strong className="font-bold text-emerald-400" {...props} />
                        ),
                        code: ({ inline, ...props }: any) =>
                          inline ? (
                            <code
                              className="bg-emerald-400/10 px-1.5 py-0.5 rounded text-emerald-300 font-mono text-[9px]"
                              {...props}
                            />
                          ) : (
                            <code
                              className="bg-white/5 px-2 py-1 rounded block my-1 text-emerald-300 font-mono text-[9px] overflow-x-auto"
                              {...props}
                            />
                          ),
                      }}
                    >
                      {answer}
                    </ReactMarkdown>
                    {loading && (
                      <div className="flex items-center gap-1 text-emerald-400/70 italic text-[10px]">
                        <span>Analyzing system architecture</span>
                        <span className="animate-pulse">...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              {showSuggestions && !loading && (
                <div className="mb-4 p-3 border border-white/10 bg-white/[0.02]">
                  <div className="font-mono text-[7px] text-white/50 mb-2 uppercase tracking-wider">
                    TECHNICAL ARCHITECTURE TOPICS_
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSuggestionClick(s)}
                        className="text-left text-[9px] text-white/70 hover:text-emerald-400 hover:border-emerald-400/40 border border-white/5 px-2.5 py-1.5 transition-all rounded bg-white/[0.01]"
                      >
                        {s} &rarr;
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="flex gap-2 pt-3 border-t border-white/10">
                <span className="font-mono text-[9px] text-emerald-400/80 shrink-0 self-center">
                  $
                </span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && ask()}
                  placeholder="Ask about multi-tenant RAG, agent security, or MVP sprint timelines..."
                  aria-label="Describe your AI architecture, multi-tenant app, or agentic workflow"
                  disabled={loading}
                  className="flex-1 bg-white/[0.04] border border-white/15 px-3 py-2 font-mono text-xs text-white placeholder:text-white/40 outline-none focus:border-emerald-400 transition-all disabled:opacity-40 rounded"
                />
                <button
                  type="button"
                  onClick={ask}
                  disabled={loading}
                  aria-label="Send query to Claude AI architect"
                  className="rounded bg-emerald-400 px-4 py-2 font-mono text-xs font-semibold text-[#07110d] shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? '...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-between items-center gap-8">
          <div className="flex gap-8 sm:gap-12 flex-wrap">
            {[
              { num: '15+', lbl: 'SHIPPED PRODUCTS & TOOLS' },
              { num: '10K+', lbl: 'AGENT RUNS & PROPOSALS' },
              { num: '3-4', lbl: 'WEEKS TO PRODUCTION MVP' },
              { num: '100%', lbl: 'ZERO-DATA-LEAKAGE RIGOR' },
            ].map((m) => (
              <div key={m.lbl} className="group">
                <div className="font-serif italic text-2xl text-white group-hover:text-emerald-400 transition-colors">
                  {m.num}
                </div>
                <div className="font-mono text-[8px] text-white/50 tracking-widest uppercase">
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>

          <span className="font-mono text-[8px] text-white/40 tracking-wider hidden md:block">
            REMOTE STUDIO &middot; SERVING B2B &amp; TECH FOUNDERS WORLDWIDE
          </span>
        </div>
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
