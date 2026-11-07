import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, getCaseStudy } from '@/data/caseStudies';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  CASE_STUDIES.forEach((cs) => {
    params.push({ id: cs.slug });
    if (cs.id !== cs.slug) {
      params.push({ id: cs.id });
    }
  });
  // Also add legacy IDs for backwards compatibility
  params.push({ id: 'everlearnai' });
  params.push({ id: 'devpostai' });
  params.push({ id: 'aiproposalmaker' });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  // Map legacy ids if needed
  let lookupId = id;
  if (id === 'everlearnai') lookupId = 'clinical-document-ai';
  if (id === 'devpostai') lookupId = 'healthtech-content-engine';
  if (id === 'aiproposalmaker') lookupId = 'healthtech-rfp-proposal-ai';

  const study = getCaseStudy(lookupId);
  if (!study) {
    return {
      title: 'Case Study Not Found | ZLab Services',
    };
  }

  const title = `${study.title} | Healthcare AI Case Study`;
  const description = `${study.overview.slice(0, 155)}...`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://zlabservices.site/case-studies/${study.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://zlabservices.site/case-studies/${study.slug}`,
      publishedTime: study.publishedAt,
      authors: [study.author.name],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: study.title,
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

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  let lookupId = id;
  if (id === 'everlearnai') lookupId = 'clinical-document-ai';
  if (id === 'devpostai') lookupId = 'healthtech-content-engine';
  if (id === 'aiproposalmaker') lookupId = 'healthtech-rfp-proposal-ai';

  const study = getCaseStudy(lookupId);

  if (!study) {
    notFound();
  }

  const breadcrumbsJsonLd = {
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
        name: 'Case Studies',
        item: 'https://zlabservices.site/case-studies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: study.title,
        item: `https://zlabservices.site/case-studies/${study.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: study.title,
    description: study.overview,
    url: `https://zlabservices.site/case-studies/${study.slug}`,
    datePublished: study.publishedAt,
    dateModified: study.publishedAt,
    author: {
      '@type': 'Person',
      name: study.author.name,
      jobTitle: study.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZLab Services',
      url: 'https://zlabservices.site',
      logo: 'https://zlabservices.site/og-image.png',
    },
    about: {
      '@type': 'Thing',
      name: study.clientIndustry,
    },
    keywords: [
      'Healthcare AI',
      'HIPAA Compliance',
      'Clinical AI MVP',
      'Next.js Healthcare Application',
      study.clientIndustry,
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a08] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-white/50 tracking-widest uppercase">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/case-studies" className="hover:text-emerald-400 transition-colors">
                Case Studies
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400 truncate max-w-xs" aria-current="page">
              {study.title}
            </li>
          </ol>
        </nav>

        {/* Header Block */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
              {study.clientIndustry}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
              Timeline: {study.timeline}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/80 hover:text-emerald-300 ml-auto flex items-center gap-1"
              >
                Live Product &rarr;
              </a>
            )}
          </div>

          <h1 className="font-serif italic text-3xl md:text-5xl text-white leading-tight mb-6">
            {study.title}
          </h1>

          <p className="text-lg md:text-xl text-emerald-400/90 font-light leading-relaxed mb-6">
            {study.header}
          </p>

          <p className="text-base text-white/70 font-light leading-relaxed">
            {study.overview}
          </p>
        </header>

        {/* Metrics Grid */}
        <section aria-labelledby="results-heading" className="mb-14">
          <h2 id="results-heading" className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-6">
            Shipped Metrics &amp; Key Outcomes
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {study.results.map((metric, i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/10 p-5 rounded-none flex flex-col justify-between"
              >
                <div className="font-serif text-2xl text-emerald-400 mb-2 font-medium">
                  {metric.value}
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-white/50 font-light leading-snug">
                    {metric.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8">
            <h2 className="font-mono text-[10px] text-red-400/90 uppercase tracking-widest mb-4">
              The Problem
            </h2>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="bg-white/[0.02] border border-emerald-400/30 p-6 md:p-8">
            <h2 className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-4">
              The Engineered Solution
            </h2>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              {study.solution}
            </p>
          </div>
        </section>

        {/* Healthcare Framing (HIPAA, Data Privacy, Integrations) */}
        <section aria-labelledby="healthcare-framing-heading" className="mb-14 border border-white/10 bg-white/[0.02] p-8">
          <h2 id="healthcare-framing-heading" className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-6">
            Healthcare Architecture &amp; Data Governance
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-400 pl-4">
              <h3 className="font-mono text-[11px] text-white uppercase tracking-wider mb-1">
                HIPAA Compliance Safeguards
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {study.healthcareFraming.hipaaCompliance}
              </p>
            </div>

            <div className="border-l-2 border-emerald-400/60 pl-4">
              <h3 className="font-mono text-[11px] text-white uppercase tracking-wider mb-1">
                Data Privacy &amp; PHI Isolation
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {study.healthcareFraming.dataPrivacy}
              </p>
            </div>

            <div className="border-l-2 border-emerald-400/30 pl-4">
              <h3 className="font-mono text-[11px] text-white uppercase tracking-wider mb-1">
                System Integrations &amp; Infrastructure
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {study.healthcareFraming.integrations}
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section aria-labelledby="process-heading" className="mb-14">
          <h2 id="process-heading" className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-6">
            Engineering Process &amp; Milestones
          </h2>
          <div className="space-y-4">
            {study.process.map((step) => (
              <div
                key={step.step}
                className="bg-white/[0.02] border border-white/8 p-6 flex flex-col md:flex-row gap-4 md:items-center"
              >
                <div className="font-mono text-sm text-emerald-400/80 font-bold tracking-widest shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif italic text-lg text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section aria-labelledby="stack-heading" className="mb-14">
          <h2 id="stack-heading" className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-4">
            Production Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs text-white/80 border border-white/10 bg-white/[0.03] px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Author Bio & CEH Credentials */}
        <section className="mb-14 border-t border-white/10 pt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-400/10 flex items-center justify-center font-mono text-xs text-emerald-400 shrink-0">
            MZ
          </div>
          <div>
            <div className="font-serif italic text-base text-white">
              {study.author.name}
            </div>
            <div className="font-mono text-[9px] text-white/50 tracking-wider">
              {study.author.role} · Bahria University (GPA 3.98)
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="p-8 md:p-10 border border-emerald-400/30 bg-emerald-400/[0.04] text-center">
          <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-3">
            Build your healthcare AI product with production rigor.
          </h2>
          <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed mb-6">
            We partner with US healthcare founders to deliver HIPAA-aligned AI applications in 3 to 4 weeks. Let&apos;s evaluate your technical architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#07110d] transition-all hover:bg-emerald-300"
            >
              Book a 30-Min Strategy Call
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-white/80 transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              &larr; View All Case Studies
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
