import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Zap, Users, Clock, Code2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ id: string }>;
}

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
  metrics: { icon: 'users' | 'zap' | 'clock' | 'code'; label: string; value: string }[];
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
    longDescription:
      'A comprehensive AI-powered learning and assessment platform that helps students generate study materials, practice questions, and flashcards using Claude AI. Features a full-stack Next.js web application with a companion Flutter mobile app.',
    link: 'https://everlearnai.live',
    tags: ['Next.js 16', 'Flutter', 'Claude API', 'Stripe', 'Redis', 'Supabase', 'Vercel', 'Railway'],
    video: '/projects/everlearnai.mp4',
    features: [
      'AI-powered MCQ generation from any study material or textbook PDF',
      'Spaced repetition flashcards with smart scheduling algorithms',
      'Custom quiz maker with adjustable difficulty and citation tracking',
      'Performance analytics and learning progress telemetry',
      'Cross-platform Flutter mobile app with offline study capabilities',
      'Stripe subscription checkout with automated webhook validation',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Mobile', items: ['Flutter', 'Dart', 'Provider Architecture'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'Redis Caching', 'Supabase Auth'] },
      { category: 'AI/ML', items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Prompt Engineering'] },
      { category: 'Infrastructure', items: ['Vercel', 'Railway', 'Stripe Payments'] },
    ],
    metrics: [
      { icon: 'users', label: 'Active Users', value: '3,000+' },
      { icon: 'zap', label: 'Quizzes Generated', value: '50,000+' },
      { icon: 'clock', label: 'Development Time', value: '4 Weeks' },
      { icon: 'code', label: 'Code Lines', value: '25,000+' },
    ],
    challenges: [
      'Real-time streaming for multi-paragraph AI explanations',
      'Mobile app synchronization with the web platform',
      'Stripe payment webhook handling and subscription lifecycle management',
      'Redis cache invalidation for frequently requested study decks',
    ],
    solutions: [
      'Implemented chunked streaming via Web Streams API for immediate token display',
      'Built a synchronized relational schema on PostgreSQL with real-time updates',
      'Implemented robust webhook handlers with idempotency key verification',
      'Configured Redis with automated TTL rules for sub-millisecond retrieval',
    ],
  },
  devpostai: {
    id: 'devpostai',
    name: 'DevPost AI',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description: 'AI-Powered Professional Content & Thought Leadership Engine',
    longDescription:
      'Professional LinkedIn and Twitter/X content generation platform that creates tailored posts, technical articles, and engagement content using advanced AI models. Features template libraries, content scheduling, and multi-tenant workspace isolation.',
    link: 'https://devpostfe.vercel.app',
    tags: ['Next.js 16', 'OpenAI API', 'MongoDB', 'NextAuth', 'Vercel', 'Tailwind CSS'],
    video: '/projects/devpostai.mp4',
    features: [
      'AI-powered post generation calibrated for tech founders and leaders',
      'Content scheduling and calendar management with direct API posting',
      'Performance analytics and audience engagement tracking',
      'User authentication with isolated multi-tenant workspaces',
      'Custom tone presets (Executive, Technical, Consultative)',
      'Bulk content generation for distribution campaigns',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB Atlas'] },
      { category: 'AI/ML', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Prompt Templates'] },
      { category: 'Authentication', items: ['NextAuth.js', 'JWT', 'OAuth 2.0'] },
      { category: 'Deployment', items: ['Vercel', 'MongoDB Atlas'] },
    ],
    metrics: [
      { icon: 'users', label: 'Active Creators', value: '2,500+' },
      { icon: 'zap', label: 'Posts Generated', value: '100,000+' },
      { icon: 'clock', label: 'Development Time', value: '3 Weeks' },
      { icon: 'code', label: 'API Endpoints', value: '15+' },
    ],
    challenges: [
      'Handling large context windows for long-form technical content',
      'Real-time content streaming without API timeout errors',
      'User authentication and multi-tenant draft privacy',
      'Database optimization for high-volume content queries',
    ],
    solutions: [
      'Implemented chunking strategy for long content generation',
      'Used Server-Sent Events (SSE) for streaming updates',
      'Built strict role-based access control (RBAC) and isolated workspaces',
      'Optimized MongoDB indexes and compound query patterns',
    ],
  },
  aiproposalmaker: {
    id: 'aiproposalmaker',
    name: 'AI Proposal Maker',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description: 'Autonomous B2B RFP & Upwork Proposal Generator',
    longDescription:
      'Autonomous proposal generation engine that analyzes client job requirements, matches past portfolio skills, and generates tailored proposals in 30 seconds with an 85% success rate.',
    link: 'https://aiproposalmaker.vercel.app',
    tags: ['Next.js 16', 'Claude API', 'OpenAI', 'Stripe', 'Redis', 'Vercel'],
    video: '/projects/aiprop.mp4',
    features: [
      'Instant job description & RFP parsing with requirement extraction',
      'Dynamic portfolio & skill matching via vector search',
      'Custom tone presets (Executive, Technical, Consultative)',
      'Export to PDF, Markdown, and DOCX formats',
      'Stripe credit billing and rate limiting safeguards',
      'Sub-30 second end-to-end proposal generation speed',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'Redis Rate Limiting'] },
      { category: 'AI/ML', items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Prompt Chaining'] },
      { category: 'Infrastructure', items: ['Vercel', 'Redis', 'Stripe'] },
    ],
    metrics: [
      { icon: 'zap', label: 'Proposals Created', value: '10,000+' },
      { icon: 'clock', label: 'Generation Speed', value: '30s' },
      { icon: 'users', label: 'Active Users', value: '1,200+' },
      { icon: 'code', label: 'Delivery Time', value: '3 Weeks' },
    ],
    challenges: [
      'Extracting unstructured requirements from varied RFP formats',
      'Balancing high-speed generation with customized voice',
      'Preventing API abuse and runaway LLM costs',
      'Exporting clean formatted PDFs and DOCX files',
    ],
    solutions: [
      'Designed structured heuristic extraction prompts with Pydantic schemas',
      'Implemented dynamic prompt chaining with portfolio vector injection',
      'Built Redis sliding-window rate limiters per authenticated user',
      'Created custom headless server-side document compilers',
    ],
  },
};

export async function generateStaticParams() {
  return [
    { id: 'everlearnai' },
    { id: 'devpostai' },
    { id: 'aiproposalmaker' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS_DETAIL_DATA[id];

  if (!product) {
    return {
      title: 'Product Not Found | ZLab Services',
    };
  }

  const title = `${product.name} | Production AI Product Deep Dive`;
  const description = `${product.description} Engineered by ZLab Services. Shipped in 3-4 weeks.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://zlabservices.site/products/${product.id}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://zlabservices.site/products/${product.id}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${product.name} - ZLab Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS_DETAIL_DATA[id];

  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.longDescription,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    url: `https://zlabservices.site/products/${product.id}`,
    author: {
      '@type': 'Organization',
      name: 'ZLab Services',
      url: 'https://zlabservices.site',
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zlabservices.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://zlabservices.site/#products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://zlabservices.site/products/${product.id}`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a08] text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24 w-full">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:border-emerald-400/40 hover:text-emerald-400 transition-colors rounded-lg text-xs font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Back to All Products</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-14 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase">
              SHIPPED PRODUCT DEEP DIVE_
            </span>
            <div className="w-8 h-px bg-emerald-400/60" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-xs font-mono text-emerald-400">
                  {product.badge}
                </span>
                {product.live && (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION APP
                  </span>
                )}
              </div>
            </div>

            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-400 text-[#07110d] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-emerald-300 transition-all rounded-full shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              <span>Visit Live App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl font-light">
            {product.longDescription}
          </p>
        </header>

        {/* Metrics Grid */}
        <section aria-label="Key Product Metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {product.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white/[0.02] border border-white/10 p-5 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-400">
                  {metric.icon === 'users' && <Users className="w-4 h-4" />}
                  {metric.icon === 'zap' && <Zap className="w-4 h-4" />}
                  {metric.icon === 'clock' && <Clock className="w-4 h-4" />}
                  {metric.icon === 'code' && <Code2 className="w-4 h-4" />}
                </span>
                <span className="font-mono text-[10px] text-white/60 tracking-wider uppercase">
                  {metric.label}
                </span>
              </div>
              <div className="font-serif italic text-2xl md:text-3xl text-white">
                {metric.value}
              </div>
            </div>
          ))}
        </section>

        {/* Video Demo (if available) */}
        {product.video && (
          <section aria-label="Product Demo Video" className="mb-14">
            <div className="aspect-video bg-black/40 border border-white/10 rounded-xl overflow-hidden">
              <video
                src={product.video}
                preload="metadata"
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Features & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section className="space-y-6">
            <h2 className="font-serif italic text-2xl md:text-3xl text-white">
              Core Capabilities &amp; Features
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="text-white/80 font-light text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif italic text-2xl md:text-3xl text-white">
              Production Architecture Stack
            </h2>
            <div className="space-y-5">
              {product.techStack.map((stack, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] text-emerald-400/80 uppercase tracking-widest mb-2">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-white/[0.03] border border-white/10 text-white/80 font-mono text-xs rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Challenges & Engineering Solutions */}
        <section className="border border-white/10 bg-white/[0.02] p-8 md:p-10 mb-16">
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-8">
            Engineering Challenges &amp; Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.challenges.map((challenge, i) => (
              <div key={i} className="border-l-2 border-emerald-400/50 pl-4">
                <div className="font-mono text-[9px] text-white/50 uppercase tracking-wider mb-1">
                  CHALLENGE 0{i + 1}
                </div>
                <div className="text-white/90 text-sm font-medium mb-3">
                  {challenge}
                </div>
                <div className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider mb-1">
                  ENGINEERING SOLUTION
                </div>
                <div className="text-white/70 font-light text-xs leading-relaxed">
                  {product.solutions[i]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-16">
          <span className="font-mono text-[10px] text-white/40 uppercase mr-2">Tags:</span>
          {product.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/[0.02] border border-white/10 text-white/60 font-mono text-xs rounded hover:border-emerald-400/40 hover:text-emerald-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <section className="p-8 md:p-10 border border-emerald-400/30 bg-emerald-400/[0.04] text-center rounded-xl">
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-3">
            Want an AI system built with this velocity?
          </h2>
          <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed mb-6">
            We build and ship hardened multi-tenant AI products in 3 to 4 weeks. Let&apos;s discuss your roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#07110d] transition-all hover:bg-emerald-300"
            >
              Book a 30-Min Strategy Call &rarr;
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-white/80 transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              Send Project Brief
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
