'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { BioluminescentSphere } from '@/components/BioluminescentSphere';

export function AIHero() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(
    '**Ready.** What multi-tenant AI system, autonomous agent, or full-stack architecture are you engineering?'
  );
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = [
    'How do you isolate vector memory between tenants in RAG?',
    'Build an autonomous agent with sandboxed tool calling',
    'Develop an offline-ready Flutter app with cloud sync',
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
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 pt-28 md:pt-36 pb-16 overflow-hidden bg-[#012624]">
      {/* Abyssal grid background */}
      <div className="absolute inset-0 pointer-events-none abyssal-grid opacity-60 z-0" />

      {/* Bioluminescent floating sphere in background */}
      <div className="absolute top-16 right-4 lg:right-24 z-0 opacity-40 lg:opacity-75 pointer-events-none">
        <BioluminescentSphere size={440} />
      </div>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1 relative z-10">
        {/* Top Eyebrow Status */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00827c] animate-pulse" />
            <span className="text-[11px] font-normal uppercase tracking-[0.15em] text-[#bbc7c6]">
              SECURE AI PRODUCT STUDIO &middot; LED BY CERTIFIED ETHICAL HACKER
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-[10px] text-[#edfffe]/60 tracking-[0.15em] uppercase font-normal">
              SYSTEM LEVEL: HARDENED
            </span>
            <div className="w-6 h-px bg-[#edfffe]/20" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start flex-1 mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-block text-[11px] font-normal uppercase tracking-[0.15em] text-[#edfffe] border-b border-[#00827c] pb-1 mb-6">
              Full-Stack &middot; Multi-Tenant &middot; Autonomous
            </div>

            {/* Headline: Matter weight 500, line-height 1.05, tight negative tracking */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.05] mb-6">
              Hardened Multi-Tenant AI
              <span className="block text-[#edfffe] opacity-90 mt-2">
                &amp; Agentic Systems.
              </span>
            </h1>

            {/* Subtext: Silver Mist, 16px, line-height 1.4 */}
            <p className="text-base text-[#bbc7c6] leading-[1.4] max-w-xl mb-10 font-normal">
              We engineer production-grade Full-Stack AI SaaS with isolated tenant vector memory, sandboxed tool execution, and zero prompt-leakage architecture. Shipped in 3 to 4 weeks by EC-Council Certified Ethical Hackers.
            </p>

            {/* Action Buttons: 6px radius, Auros palette */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="btn-aurora px-6 py-3.5 text-[13px] tracking-[0.08em] shadow-sm"
              >
                Start Your Secure MVP &rarr;
              </a>
              <a
                href="https://cal.com/code-zubair-3fs0gu/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-kelp px-6 py-3.5 text-[13px] tracking-[0.08em]"
              >
                Book Technical Discovery
              </a>
            </div>

            {/* Founder Trust Card: 16px radius, Liquid Kelp raised surface */}
            <div className="flex items-center gap-4 surface-card p-4 max-w-md border border-white/5">
              <Image
                src="/founder-avatar.svg"
                alt="Muhammad Zubair - Founder & Certified Ethical Hacker"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-[#00827c] object-cover shrink-0"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#edfffe] font-medium">
                  Founder-Led Delivery
                </p>
                <p className="text-xs text-[#bbc7c6] leading-snug mt-0.5">
                  Muhammad Zubair, EC-Council Certified Ethical Hacker (CEH, GPA 3.98). Direct architecture from day one.
                </p>
              </div>
            </div>

            {/* Uppercase Tracked Tags */}
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
                  className="text-[10px] uppercase tracking-[0.12em] text-[#bbc7c6] bg-[#003734] px-3 py-1.5 rounded-[6px] border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Abyssal Terminal Instrument (5 cols) */}
          <div className="lg:col-span-5">
            <div className="surface-card p-6 md:p-8 border border-white/10 flex flex-col h-full min-h-[460px] relative overflow-hidden backdrop-blur-md">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00827c]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#707777]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#edfffe]/30" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#bbc7c6]">
                  terminal : ai architect
                </span>
              </div>

              {/* Response area */}
              <div className="flex-1 overflow-y-auto mb-5 pr-2 max-h-64 custom-scroll">
                <div className="flex items-start gap-2.5">
                  <span className="text-[11px] text-[#cbfffc] font-mono shrink-0">$ AI:</span>
                  <div className="text-xs text-[#edfffe]/90 leading-relaxed prose prose-invert prose-sm max-w-none flex-1">
                    <ReactMarkdown
                      components={{
                        p: ({ ...props }) => <p className="mb-2 leading-relaxed" {...props} />,
                        ul: ({ ...props }) => (
                          <ul className="list-disc list-inside mb-2 space-y-1 ml-2" {...props} />
                        ),
                        li: ({ ...props }) => <li className="text-[#bbc7c6] ml-1" {...props} />,
                        strong: ({ ...props }) => (
                          <strong className="font-medium text-[#cbfffc]" {...props} />
                        ),
                        code: ({ inline, ...props }: any) =>
                          inline ? (
                            <code
                              className="bg-[#011d1c] px-1.5 py-0.5 rounded-[4px] text-[#cbfffc] font-mono text-[10px]"
                              {...props}
                            />
                          ) : (
                            <code
                              className="bg-[#011d1c] p-2 rounded-[6px] block my-2 text-[#cbfffc] font-mono text-[10px] overflow-x-auto"
                              {...props}
                            />
                          ),
                      }}
                    >
                      {answer}
                    </ReactMarkdown>
                    {loading && (
                      <div className="flex items-center gap-1.5 text-[#cbfffc]/80 text-[11px]">
                        <span>Analyzing system architecture</span>
                        <span className="animate-pulse">...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              {showSuggestions && !loading && (
                <div className="mb-5 p-3 rounded-[6px] bg-[#011d1c] border border-white/5">
                  <div className="text-[9px] uppercase tracking-[0.15em] text-[#bbc7c6] mb-2 font-normal">
                    TOPICS OF INQUIRY_
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSuggestionClick(s)}
                        className="text-left text-[11px] text-[#bbc7c6] hover:text-[#cbfffc] py-1.5 px-2 rounded-[4px] hover:bg-[#003734] transition-colors"
                      >
                        {s} &rarr;
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                <span className="text-xs text-[#cbfffc] font-mono self-center">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && ask()}
                  placeholder="Ask about multi-tenant RAG, agent security..."
                  aria-label="Describe your multi-tenant AI architecture query"
                  disabled={loading}
                  className="flex-1 bg-[#011d1c] border border-white/10 rounded-[6px] px-3.5 py-2 text-xs text-white placeholder:text-[#bbc7c6]/50 outline-none focus:border-[#00827c] transition-colors disabled:opacity-40"
                />
                <button
                  type="button"
                  onClick={ask}
                  disabled={loading}
                  className="btn-aurora px-4 py-2 text-xs uppercase tracking-[0.08em] disabled:opacity-40"
                >
                  {loading ? '...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics: Lavender Phosphor Pink on Deep Teal Canvas */}
        <div className="border-t border-white/10 pt-12 flex flex-wrap justify-between items-end gap-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-14">
            {[
              { num: '15+', lbl: 'SHIPPED PRODUCTS & TOOLS' },
              { num: '10K+', lbl: 'AGENT RUNS & PROPOSALS' },
              { num: '3-4', lbl: 'WEEKS TO PRODUCTION MVP' },
              { num: '100%', lbl: 'ZERO-DATA-LEAKAGE RIGOR' },
            ].map((m) => (
              <div key={m.lbl} className="group">
                {/* Luminous pink statistics counter */}
                <div className="text-4xl sm:text-5xl font-medium text-[#fde9ff] tracking-[-0.04em] leading-none mb-2">
                  {m.num}
                </div>
                <div className="text-[11px] uppercase tracking-[0.12em] text-[#edfffe]/75">
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[11px] uppercase tracking-[0.15em] text-[#bbc7c6]/60 hidden md:block">
            REMOTE STUDIO &middot; SERVING TECH FOUNDERS WORLDWIDE
          </div>
        </div>
      </div>
    </section>
  );
}
