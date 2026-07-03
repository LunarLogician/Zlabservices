'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

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
      'AI Study Tools platform with MCQ Generator, Quiz Maker, and Flashcards. Helps students generate study materials using Claude AI. Full-stack web + Flutter mobile app.',
    link: 'https://everlearnai.live',
    tags: ['Next.js', 'Flutter', 'Claude API', 'Stripe', 'Redis', 'Firebase'],
    image: '/projects/everlearnai.png',
    video : '/projects/everlearnai.mp4',
  },
  {
    id: 'devpostai',
    name: 'DevPost AI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description:
      'AI-Powered LinkedIn Content Engine. Creates professional posts tailored for LinkedIn with templates, AI generation, and content scheduling.',
    link: 'https://devpostfe.vercel.app',
    tags: ['Next.js', 'OpenAI API', 'MongoDB', 'Authentication', 'Vercel'],
    image: '/projects/devpostai.png',
    video : '/projects/devpostai.mp4',

  },
  {
    id: 'aiproposalmaker',
    name: 'AI Proposal Maker',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description:
      'Upwork AI Proposal Generator. Creates personalized, professional proposals in 30 seconds with 85% success rate. 10,000+ proposals generated.',
    link: 'https://aiproposalmaker.vercel.app',
    tags: ['Next.js', 'OpenAI API', 'Stripe', 'Rate Limiting', 'Tailwind CSS'],
    image: '/projects/aiproposalmaker.png',
    video : '/projects/aiprop.mp4',
  },
];

export function Products() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="products" className="relative py-32 px-6 md:px-10 overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="font-mono text-[9px] text-white/60 tracking-widest uppercase">
            PRODUCTS_
          </span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mt-4 mb-6">
            Products already <span className="text-emerald-400/80">delivered</span>
            <br></br>
            <span className="text-white/40 not-italic">Live & production-ready</span>
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-light max-w-lg">
            Live products you can use right now. Full-stack, deployed, production-grade.
          </p>
        </motion.div>

        {/* Products — card grid */}
        <div className="grid md:grid-cols-2 gap-6 border border-white/6">
          {PRODUCTS_DATA.map((p, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => router.push(`/products/${p.id}`)}
            >
              <motion.div
                className="bg-[#0a0a08] hover:bg-white/5 transition-all duration-300 flex flex-col border border-white/6 overflow-hidden h-full cursor-pointer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {/* Media — Video or Image / Placeholder */}
                {p.video ? (
                  <div 
                    className="relative h-64 md:h-80 bg-white/3 border-b border-white/6 overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setModalOpen(i);
                    }}
                  >
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/50 flex items-center justify-center group-hover:bg-emerald-400/40 transition-colors">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Mute button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsMuted(!isMuted);
                      }}
                      className="absolute top-4 right-4 z-10 p-2 rounded bg-black/50 hover:bg-black/70 transition-colors border border-white/20"
                    >
                      {isMuted ? (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16257448 C3.34915502,0.9054770743 2.40734225,1.01158275 1.77946707,1.4829749 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5950961 3.19218622,10.7521935 3.50612381,10.7521935 L16.6915026,11.5376804 C16.6915026,11.5376804 17.1624089,11.5376804 17.1624089,12.0089725 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                ) : p.image ? (
                  <div className="relative h-64 md:h-80 bg-white/3 border-b border-white/6 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-64 md:h-80 bg-gradient-to-br from-emerald-400/10 to-transparent border-b border-white/6 flex items-center justify-center">
                    <span className="text-white/30 font-mono text-sm">SCREENSHOT</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-10 md:p-14 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="mb-6">
                    <span className="font-mono text-[8px] px-3 py-1.5 tracking-widest border text-emerald-400/80 border-emerald-400/25 bg-emerald-400/5 rounded-full inline-block">
                      {p.badge}
                    </span>
                  </div>

                  {/* Product name */}
                  <h3 className="font-serif italic text-3xl md:text-4xl text-white leading-tight mb-4 group-hover:text-emerald-300/50 transition-colors">
                  
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed mb-8 flex-1 font-light">
                    {p.description}
                  </p>

                  {/* Footer — tags + link */}
                  <div className="border-t border-white/10 pt-6 flex justify-between items-end gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[8px] text-white/60 border border-white/15 px-2.5 py-1 tracking-wider hover:border-emerald-400/30 hover:text-white/80 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="font-mono text-[10px] text-white/75 hover:text-white transition-all tracking-wider shrink-0 group-hover:translate-x-0.5 inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      LIVE{' '}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Full-screen Modal */}
        {modalOpen !== null && PRODUCTS_DATA[modalOpen]?.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl cursor-default"
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(null)}
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal mute button */}
              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                  }
                }}
                className="absolute top-4 right-4 z-20 p-3 rounded bg-black/60 hover:bg-black/80 transition-colors border border-white/30"
              >
                {isMuted ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16257448 C3.34915502,0.9054770743 2.40734225,1.01158275 1.77946707,1.4829749 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5950961 3.19218622,10.7521935 3.50612381,10.7521935 L16.6915026,11.5376804 C16.6915026,11.5376804 17.1624089,11.5376804 17.1624089,12.0089725 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                )}
              </button>

              {/* Modal video */}
              <video
                ref={videoRef}
                src={PRODUCTS_DATA[modalOpen]?.video}
                autoPlay
                controls
                muted={isMuted}
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
