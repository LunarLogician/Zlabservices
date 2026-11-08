'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

interface Product {
  id: string;
  name: string;
  badge: string;
  live?: boolean;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  video?: string;
}

const PRODUCTS_DATA: Product[] = [
  {
    id: 'everlearnai',
    name: 'EverlearnAI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description:
      'AI Study Tools platform with MCQ Generator, Quiz Maker, and Flashcards. Multi-tenant document RAG with Claude 3.5 Sonnet. Full-stack Next.js web application + Flutter mobile app.',
    link: 'https://everlearnai.live',
    tags: ['Next.js 16', 'Flutter', 'Claude 3.5', 'Stripe', 'Redis', 'Postgres RLS'],
    image: '/projects/everlearnai.png',
    video: '/projects/everlearnai.mp4',
  },
  {
    id: 'devpostai',
    name: 'DevPost AI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description:
      'AI-Powered Professional Content & Thought Leadership Engine. Autonomous multi-step draft generation with scoped tone calibration and scheduled social publishing.',
    link: 'https://devpostfe.vercel.app',
    tags: ['Next.js 16', 'OpenAI GPT-4o', 'MongoDB', 'Workspaces', 'Vercel'],
    image: '/projects/devpostai.png',
    video: '/projects/devpostai.mp4',
  },
  {
    id: 'aiproposalmaker',
    name: 'AI Proposal Maker',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description:
      'High-conversion Upwork proposal generator engineered with deterministic prompt templates, strict token budgets, and automated Stripe billing. Over 10,000 proposals generated.',
    link: 'https://aiproposalmaker.vercel.app',
    tags: ['Next.js 16', 'OpenAI API', 'Stripe Subscriptions', 'Rate Limiting', 'Tailwind'],
    image: '/projects/aiproposalmaker.png',
    video: '/projects/aiprop.mp4',
  },
];

export function Products() {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="products" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            SHIPPED PRODUCTS
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] max-w-2xl">
              Live in production. Used by real customers.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed max-w-md">
              Explore deployed applications engineered from architectural design to multi-tenant deployment, payment processing, and ongoing scale.
            </p>
          </div>
        </motion.div>

        {/* Product Cards Grid — Auros Liquid Kelp Cards (#003734, 16px radius, no shadow) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_DATA.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-[#003734] border border-[#004d49] hover:border-[#00827c]/60 rounded-[16px] overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Media Preview container */}
              <div>
                {p.video ? (
                  <div
                    className="relative h-56 bg-[#011d1c] overflow-hidden cursor-pointer group"
                    onClick={() => setModalOpen(i)}
                  >
                    <video
                      src={p.video}
                      preload="none"
                      loop
                      muted
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#011d1c]/40 group-hover:bg-[#011d1c]/20 transition-all">
                      <div className="w-12 h-12 rounded-[6px] bg-[#003734] border border-[#cbfffc]/40 flex items-center justify-center text-[#ffffff] shadow-none group-hover:bg-[#00827c] transition-colors">
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 font-sans text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 bg-[#012624]/90 text-[#cbfffc] border border-[#00827c]/40 rounded-[6px]">
                      PLAY DEMO
                    </div>
                  </div>
                ) : p.image ? (
                  <div className="relative h-56 bg-[#011d1c] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-[#011d1c] flex items-center justify-center text-[#bbc7c6]/40 font-mono text-xs tracking-wider">
                    SYSTEM SCHEMATIC
                  </div>
                )}

                {/* Content body */}
                <div className="p-8">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[10px] font-medium tracking-[0.12em] px-2.5 py-1 bg-[#012624] text-[#cbfffc] border border-[#00827c]/30 rounded-[6px]">
                      {p.badge}
                    </span>
                    <span className="font-sans text-[11px] text-[#bbc7c6]/60 tracking-[0.1em]">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-2xl font-medium tracking-[-0.025em] text-[#ffffff] mb-3">
                    <Link href={`/products/${p.id}`} className="hover:text-[#cbfffc] transition-colors">
                      {p.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#bbc7c6] leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[11px] text-[#edfffe]/80 bg-[#012624]/80 border border-[#004d49] px-2 py-0.5 rounded-[4px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-8 pb-8 pt-4 border-t border-[#004d49] flex items-center justify-between gap-3">
                <Link
                  href={`/products/${p.id}`}
                  className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#edfffe] hover:text-[#cbfffc] transition-colors"
                >
                  DEEP DIVE →
                </Link>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[6px] bg-[#012624]/60 border border-[#00827c]/40 flex items-center justify-center text-[#ffffff] hover:bg-[#00827c] hover:text-[#011d1c] transition-all"
                  aria-label={`Open ${p.name} live in new tab`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal with Auros styling */}
        {modalOpen !== null && PRODUCTS_DATA[modalOpen]?.video && (
          <div
            onClick={() => setModalOpen(null)}
            className="fixed inset-0 z-50 bg-[#011d1c]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#003734] border border-[#00827c]/50 rounded-[16px] p-4 cursor-default"
            >
              {/* Controls bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#004d49]">
                <span className="font-sans text-xs tracking-[0.12em] uppercase text-[#cbfffc]">
                  {PRODUCTS_DATA[modalOpen].name} · Architecture Walkthrough
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsMuted(!isMuted);
                      if (videoRef.current) {
                        videoRef.current.muted = !isMuted;
                      }
                    }}
                    className="font-sans text-[11px] uppercase tracking-[0.12em] text-[#edfffe] bg-[#012624] px-3 py-1.5 rounded-[6px] border border-[#00827c]/40 hover:border-[#cbfffc]"
                  >
                    {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
                  </button>
                  <button
                    onClick={() => setModalOpen(null)}
                    aria-label="Close walkthrough"
                    className="w-8 h-8 rounded-[6px] bg-[#012624] border border-[#00827c]/40 text-[#ffffff] flex items-center justify-center hover:bg-[#00827c] hover:text-[#011d1c]"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Video Element */}
              <video
                ref={videoRef}
                src={PRODUCTS_DATA[modalOpen].video}
                autoPlay
                controls
                muted={isMuted}
                className="w-full rounded-[10px] aspect-video object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
