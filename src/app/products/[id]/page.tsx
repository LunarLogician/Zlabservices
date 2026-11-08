import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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
  metrics: { label: string; value: string }[];
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
      { label: 'ACTIVE USERS', value: '3,000+' },
      { label: 'GENERATED ARTIFACTS', value: '50,000+' },
      { label: 'DEVELOPMENT SPRINT', value: '4 WEEKS' },
      { label: 'CODEBASE LINES', value: '25,000+' },
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
      'An intelligent content creation and distribution engine that helps founders and professionals create high-engagement LinkedIn posts, technical write-ups, and thought leadership articles using tailored AI models.',
    link: 'https://devpostfe.vercel.app',
    tags: ['Next.js 16', 'OpenAI API', 'MongoDB', 'Authentication', 'Vercel'],
    video: '/projects/devpostai.mp4',
    features: [
      'Multi-format content generation with style-transfer algorithms',
      'Smart hashtag and mention suggestion based on viral patterns',
      'Scheduled publishing with calendar view and queue management',
      'Analytics dashboard tracking post performance metrics',
      'Custom tone-of-voice training using existing user content',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 16', 'React', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB Atlas'] },
      { category: 'AI/ML', items: ['OpenAI GPT-4o', 'Fine-tuned Prompts'] },
      { category: 'Infrastructure', items: ['Vercel', 'Cron Jobs', 'Cloudinary'] },
    ],
    metrics: [
      { label: 'POSTS GENERATED', value: '15,000+' },
      { label: 'AVG ENGAGEMENT LIFT', value: '3.2X' },
      { label: 'SPRINT TIMELINE', value: '3 WEEKS' },
      { label: 'SYSTEM RELIABILITY', value: '99.9%' },
    ],
    challenges: [
      'Avoiding robotic and repetitive AI text patterns',
      'Ensuring post formatting matches LinkedIn standards',
      'Handling high-concurrency generation requests during peak hours',
    ],
    solutions: [
      'Engineered structured prompt chains with few-shot industry examples',
      'Created automated post format validators checking line breaks and length',
      'Implemented worker queues for batch background generation',
    ],
  },
  aiproposalmaker: {
    id: 'aiproposalmaker',
    name: 'AI Proposal Maker',
    badge: 'LIVE · PRODUCTION',
    live: true,
    description: 'Upwork AI Proposal Generator with 85% client interview rate',
    longDescription:
      'A specialized proposal automation tool that parses Upwork job descriptions and generates highly customized, persuasive freelance proposals in under 30 seconds. Powered by OpenAI with strict rate limits and Stripe subscriptions.',
    link: 'https://aiproposalmaker.vercel.app',
    tags: ['Next.js 16', 'OpenAI API', 'Stripe', 'Rate Limiting', 'Tailwind CSS'],
    video: '/projects/aiprop.mp4',
    features: [
      'Instant job posting analysis and requirements extraction',
      'Personalized pitch generation matching the client tone',
      'Stripe subscription checkout with usage-based rate limits',
      'Proposal history with success and interview telemetry',
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Next.js Server Actions', 'Redis Rate Limiter'] },
      { category: 'AI/ML', items: ['OpenAI GPT-4o', 'Few-shot Prompt Chains'] },
      { category: 'Infrastructure', items: ['Vercel', 'Stripe Billing'] },
    ],
    metrics: [
      { label: 'PROPOSALS GENERATED', value: '10,000+' },
      { label: 'INTERVIEW WIN RATE', value: '85%' },
      { label: 'GENERATION LATENCY', value: '< 3.5s' },
      { label: 'ACTIVE USERS', value: '2,500+' },
    ],
    challenges: [
      'Synthesizing complex technical job briefs into concise pitches',
      'Preventing API abuse while offering a generous free trial',
    ],
    solutions: [
      'Tuned prompt architectures emphasizing relevant portfolio proof points',
      'Integrated Redis-backed sliding window rate limiters per IP and account',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_DETAIL_DATA).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS_DETAIL_DATA[id];
  if (!product) {
    return {
      title: 'Product Not Found | ZLab Services',
    };
  }

  const title = `${product.name} | Shipped Production AI Product`;
  const description = `${product.description}. Production-ready AI application engineered by ZLab Services.`;

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
          alt: product.name,
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
  backgroundImage: `linear-gradient(rgba(203, 255, 252, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 255, 252, 0.018) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
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
    <div className="relative min-h-screen bg-[#012624] text-[#edfffe] flex flex-col justify-between">
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

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28 w-full">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/#products"
            className="btn-kelp inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PRODUCTS</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-14 pb-10 border-b border-[#004d49]">
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            SHIPPED PRODUCT DOSSIER
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] text-[#ffffff] leading-[1.08] mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-medium tracking-[0.12em] px-3 py-1 bg-[#003734] border border-[#00827c]/40 rounded-[6px] text-[#cbfffc]">
                  {product.badge}
                </span>
                {product.live && (
                  <span className="flex items-center gap-2 font-sans text-xs text-[#edfffe]/80">
                    <span className="w-2 h-2 rounded-full bg-[#cbfffc] animate-pulse" />
                    LIVE PRODUCTION SYSTEM
                  </span>
                )}
              </div>
            </div>

            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurora"
            >
              <span>VISIT LIVE SYSTEM</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <p className="font-sans text-base md:text-lg text-[#bbc7c6] leading-relaxed max-w-3xl font-normal">
            {product.longDescription}
          </p>
        </header>

        {/* Metrics Grid — Auros Lavender Phosphor */}
        <section aria-label="Key Product Metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {product.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#003734] border border-[#004d49] p-6 rounded-[16px] flex flex-col justify-between"
            >
              <div className="font-sans text-[10px] font-medium text-[#cbfffc] tracking-[0.15em] uppercase mb-2">
                {metric.label}
              </div>
              <div className="font-sans text-3xl md:text-4xl font-medium tracking-[-0.03em] text-[#fde9ff]">
                {metric.value}
              </div>
            </div>
          ))}
        </section>

        {/* Video Demo (if available) */}
        {product.video && (
          <section aria-label="Product Demo Video" className="mb-14">
            <div className="aspect-video bg-[#011d1c] border border-[#004d49] rounded-[16px] overflow-hidden p-2">
              <video
                src={product.video}
                preload="metadata"
                controls
                playsInline
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </section>
        )}

        {/* Features & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <section className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10">
            <h2 className="font-sans text-2xl font-medium tracking-[-0.025em] text-[#ffffff] mb-6">
              Core Capabilities &amp; Features
            </h2>
            <ul className="space-y-3.5">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cbfffc] mt-2 shrink-0 opacity-80" />
                  <span className="font-sans text-sm text-[#edfffe]/90 font-normal leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10">
            <h2 className="font-sans text-2xl font-medium tracking-[-0.025em] text-[#ffffff] mb-6">
              Production Architecture Stack
            </h2>
            <div className="space-y-5">
              {product.techStack.map((stack, i) => (
                <div key={i}>
                  <div className="font-sans text-[10px] font-medium text-[#cbfffc] uppercase tracking-[0.15em] mb-2">
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <span
                        key={j}
                        className="font-sans text-xs text-[#edfffe]/90 bg-[#012624] border border-[#004d49] px-3 py-1 rounded-[6px]"
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
        <section className="bg-[#011d1c] border border-[#004d49] rounded-[16px] p-8 md:p-12 mb-14">
          <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-[-0.03em] text-[#ffffff] mb-8">
            Engineering Challenges &amp; Technical Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.challenges.map((challenge, i) => (
              <div key={i} className="border-l-2 border-[#cbfffc] pl-5">
                <div className="font-sans text-[10px] font-medium text-[#bbc7c6] uppercase tracking-[0.15em] mb-1">
                  CHALLENGE 0{i + 1}
                </div>
                <div className="font-sans text-base font-medium text-[#ffffff] mb-2">
                  {challenge}
                </div>
                <div className="font-sans text-[10px] font-medium text-[#cbfffc] uppercase tracking-[0.15em] mb-1 mt-3">
                  ENGINEERING RESOLUTION
                </div>
                <div className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
                  {product.solutions[i]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <span className="font-sans text-xs text-[#bbc7c6]/60 uppercase tracking-[0.1em] mr-2">STACK TAGS:</span>
          {product.tags.map((tag, i) => (
            <span
              key={i}
              className="font-sans text-xs text-[#edfffe]/80 bg-[#003734] border border-[#004d49] px-3 py-1 rounded-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <section className="p-8 md:p-12 border border-[#004d49] bg-[#003734] rounded-[16px] text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-[-0.03em] text-[#ffffff] mb-3">
            Want an AI system built with this velocity?
          </h2>
          <p className="font-sans text-sm md:text-base text-[#bbc7c6] max-w-lg mx-auto font-normal leading-relaxed mb-6">
            We build and ship hardened multi-tenant AI products in 3 to 4 weeks. Let&apos;s evaluate your roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurora"
            >
              BOOK 30-MIN STRATEGY CALL →
            </a>
            <Link
              href="/#contact"
              className="btn-kelp"
            >
              SUBMIT ARCHITECTURE BRIEF
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
