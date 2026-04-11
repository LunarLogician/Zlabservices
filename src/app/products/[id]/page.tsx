'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Zap, Users, Clock, Code2, Server, Smartphone } from 'lucide-react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

interface ProductDetail {
  id: string;
  name: string;
  badge: string;
  live: boolean;
  description: string;
  longDescription: string;
  link: string;
  tags: string[];
  video?: string;
  features: string[];
  techStack: { category: string; items: string[] }[];
  metrics: { icon: React.ReactNode; label: string; value: string }[];
  challenges: string[];
  solutions: string[];
}

const PRODUCTS_DETAIL_DATA: Record<string, ProductDetail> = {
  everlearnai: {
    id: 'everlearnai',
    name: 'EverlearnAI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description: 'AI Study Tools platform with MCQ Generator, Quiz Maker, and Flashcards',
    longDescription: 'A comprehensive AI-powered educational platform that helps students generate study materials, practice questions, and flashcards using Claude AI. Features a full-stack web application with Flutter mobile app companion.',
    link: 'https://everlearnai.live',
    tags: ['Next.js', 'Flutter', 'Claude API', 'Stripe', 'Redis', 'Firebase', 'Vercel', 'Railway'],
    video: '/projects/everlearnai.mp4',
    features: [
      'AI-powered MCQ generation from any study material',
      'Spaced repetition flashcards with smart scheduling',
      'Quiz maker with customizable difficulty levels',
      'Progress tracking and performance analytics',
      'Mobile app with offline study capabilities',
      'Payment integration for premium features'
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Mobile', items: ['Flutter', 'Dart', 'Provider State Management'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'Redis Caching', 'Firebase Auth'] },
      { category: 'AI/ML', items: ['Claude API', 'OpenAI GPT-4', 'Custom prompt engineering'] },
      { category: 'Infrastructure', items: ['Vercel', 'Railway', 'Firebase', 'Stripe Payments'] }
    ],
    metrics: [
      { icon: <Users className="w-4 h-4" />, label: 'Active Users', value: '3,000+' },
      { icon: <Zap className="w-4 h-4" />, label: 'Quizzes Generated', value: '50,000+' },
      { icon: <Clock className="w-4 h-4" />, label: 'Development Time', value: '4 Weeks' },
      { icon: <Code2 className="w-4 h-4" />, label: 'Code Lines', value: '25,000+' }
    ],
    challenges: [
      'Real-time AI response streaming without delays',
      'Mobile app synchronization with web platform',
      'Payment webhook handling and subscription management',
      'Redis caching for frequently accessed study materials'
    ],
    solutions: [
      'Implemented ReadableStream API for chunked AI responses',
      'Used Firebase Realtime Database for cross-platform sync',
      'Built robust webhook handlers with idempotency keys',
      'Configured Redis with TTL for optimal cache performance'
    ]
  },
  devpostai: {
    id: 'devpostai',
    name: 'DevPost AI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description: 'AI-Powered LinkedIn Content Engine',
    longDescription: 'Professional LinkedIn content generation platform that creates tailored posts, articles, and engagement content using advanced AI models. Features template library, content scheduling, and performance analytics.',
    link: 'https://devpostfe.vercel.app',
    tags: ['Next.js', 'OpenAI API', 'MongoDB', 'Authentication', 'Vercel', 'Tailwind'],
    video: '/projects/devpostai.mp4',
    features: [
      'AI-powered LinkedIn post generation with templates',
      'Content scheduling and calendar management',
      'Performance analytics for post engagement',
      'User authentication and saved content library',
      'Custom tone and style adjustments',
      'Bulk content generation for campaigns'
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose'] },
      { category: 'AI/ML', items: ['OpenAI GPT-4', 'Anthropic Claude', 'Custom fine-tuning'] },
      { category: 'Authentication', items: ['NextAuth.js', 'JWT', 'OAuth providers'] },
      { category: 'Deployment', items: ['Vercel', 'MongoDB Atlas', 'Cloudinary'] }
    ],
    metrics: [
      { icon: <Users className="w-4 h-4" />, label: 'Users', value: '2,500+' },
      { icon: <Zap className="w-4 h-4" />, label: 'Posts Generated', value: '100,000+' },
      { icon: <Clock className="w-4 h-4" />, label: 'Development Time', value: '3 Weeks' },
      { icon: <Code2 className="w-4 h-4" />, label: 'API Endpoints', value: '15+' }
    ],
    challenges: [
      'Handling large context windows for long-form content',
      'Real-time content generation with streaming',
      'User authentication and content privacy',
      'Database optimization for content storage'
    ],
    solutions: [
      'Implemented chunking strategy for long content generation',
      'Used Server-Sent Events for real-time updates',
      'Built role-based access control system',
      'Optimized MongoDB indexes and query patterns'
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id;
      const productData = PRODUCTS_DETAIL_DATA[productId];
      
      if (productData) {
        setProduct(productData);
      } else {
        router.push('/#products');
      }
      setLoading(false);
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center">
        <div className="text-white">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center">
        <div className="text-white">Product not found</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a08] text-white">
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/#products"
          className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Products</span>
        </Link>
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-emerald-400/60" />
              <span className="font-mono text-[9px] text-white/60 tracking-widest">CASE_STUDY_</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h1 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-xs text-emerald-400">
                    {product.badge}
                  </span>
                  {product.live && (
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400/80">LIVE NOW</span>
                    </span>
                  )}
                </div>
              </div>
              
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-400/10 border border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-400/15 transition-all rounded-lg"
              >
                <span className="font-mono text-sm">Visit Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {product.longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {product.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/10 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-emerald-400/80">
                    {metric.icon}
                  </div>
                  <div className="font-mono text-[10px] text-white/60 tracking-wider">
                    {metric.label}
                  </div>
                </div>
                <div className="font-serif italic text-2xl text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </motion.div>

          {product.video && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="aspect-video bg-black/30 border border-white/10 rounded-xl overflow-hidden">
                <video
                  src={product.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-serif italic text-3xl text-white mb-6">Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-serif italic text-3xl text-white mb-6">Tech Stack</h2>
                <div className="space-y-6">
                  {product.techStack.map((stack, i) => (
                    <div key={i}>
                      <div className="font-mono text-xs text-white/60 mb-2">{stack.category}</div>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 bg-white/[0.03] border border-white/10 text-white/80 text-sm rounded-lg"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-serif italic text-3xl text-white mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {product.challenges.map((challenge, i) => (
                    <div key={i} className="border-l-2 border-emerald-400/30 pl-4">
                      <div className="font-mono text-xs text-white/60 mb-1">CHALLENGE {i + 1}</div>
                      <div className="text-white/90 mb-2">{challenge}</div>
                      <div className="font-mono text-xs text-emerald-400/80 mb-1">SOLUTION</div>
                      <div className="text-white/80">{product.solutions[i]}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-serif italic text-3xl text-white mb-6">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/[0.02] border border-white/10 text-white/60 text-sm rounded-lg hover:border-emerald-400/30 hover:text-white/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}