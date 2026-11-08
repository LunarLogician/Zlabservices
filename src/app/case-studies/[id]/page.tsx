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
  // Also add legacy slugs for full backwards compatibility
  params.push({ id: 'clinical-document-ai' });
  params.push({ id: 'healthtech-content-engine' });
  params.push({ id: 'healthtech-rfp-proposal-ai' });
  params.push({ id: 'everlearnai' });
  params.push({ id: 'devpostai' });
  params.push({ id: 'aiproposalmaker' });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = getCaseStudy(id);
  if (!study) {
    return {
      title: 'Case Study Not Found | ZLab Services',
    };
  }

  const title = `${study.title} | Full-Stack AI Case Study`;
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
  backgroundImage: `linear-gradient(rgba(203, 255, 252, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 255, 252, 0.018) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
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
      'Multi-Tenant AI',
      'Autonomous Agents',
      'Full-Stack AI SaaS',
      'Next.js 16 AI Application',
      'Postgres Row-Level Security',
      study.clientIndustry,
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#012624] text-[#edfffe]">
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-36 pb-28">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#bbc7c6] tracking-[0.1em] uppercase">
            <li>
              <Link href="/" className="hover:text-[#cbfffc] transition-colors">
                HOME
              </Link>
            </li>
            <li className="text-[#00827c]">/</li>
            <li>
              <Link href="/case-studies" className="hover:text-[#cbfffc] transition-colors">
                CASE STUDIES
              </Link>
            </li>
            <li className="text-[#00827c]">/</li>
            <li className="text-[#cbfffc] truncate max-w-xs" aria-current="page">
              {study.title}
            </li>
          </ol>
        </nav>

        {/* Header Block */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] px-3 py-1 bg-[#003734] border border-[#00827c]/40 text-[#cbfffc] rounded-[6px]">
              {study.clientIndustry}
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-[#bbc7c6]/70">
              TIMELINE: {study.timeline}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#cbfffc] hover:underline ml-auto flex items-center gap-1"
              >
                LIVE SYSTEM ↗
              </a>
            )}
          </div>

          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] mb-6">
            {study.title}
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#cbfffc] font-normal leading-relaxed mb-6">
            {study.header}
          </p>

          <p className="font-sans text-base text-[#bbc7c6] font-normal leading-relaxed">
            {study.overview}
          </p>
        </header>

        {/* Metrics Grid — Auros Lavender Phosphor */}
        <section aria-labelledby="results-heading" className="mb-14">
          <h2 id="results-heading" className="font-sans text-[12px] font-medium text-[#bbc7c6] uppercase tracking-[0.12em] mb-6">
            SHIPPED METRICS &amp; KEY OUTCOMES
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {study.results.map((metric, i) => (
              <div
                key={i}
                className="bg-[#003734] border border-[#004d49] rounded-[16px] p-6 flex flex-col justify-between"
              >
                <div className="font-sans text-3xl font-medium tracking-[-0.03em] text-[#fde9ff] mb-2">
                  {metric.value}
                </div>
                <div>
                  <div className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#ffffff] mb-1">
                    {metric.label}
                  </div>
                  <div className="font-sans text-xs text-[#bbc7c6] font-normal leading-snug">
                    {metric.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8">
            <h2 className="font-sans text-[11px] font-medium text-[#cbfffc] uppercase tracking-[0.15em] mb-3">
              THE ARCHITECTURAL PROBLEM
            </h2>
            <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="bg-[#003734] border border-[#00827c]/60 rounded-[16px] p-8">
            <h2 className="font-sans text-[11px] font-medium text-[#cbfffc] uppercase tracking-[0.15em] mb-3">
              THE ENGINEERED SOLUTION
            </h2>
            <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
              {study.solution}
            </p>
          </div>
        </section>

        {/* Multi-Tenant Architecture & Data Governance */}
        <section aria-labelledby="architecture-framing-heading" className="mb-14 bg-[#011d1c] border border-[#004d49] rounded-[16px] p-8 md:p-10">
          <h2 id="architecture-framing-heading" className="font-sans text-[12px] font-medium text-[#cbfffc] uppercase tracking-[0.12em] mb-6">
            MULTI-TENANT ARCHITECTURE &amp; DATA GOVERNANCE
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-[#cbfffc] pl-5">
              <h3 className="font-sans text-sm font-medium text-[#ffffff] uppercase tracking-[0.05em] mb-1.5">
                Multi-Tenant Isolation Safeguards
              </h3>
              <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
                {study.architectureFraming.multiTenancy}
              </p>
            </div>

            <div className="border-l-2 border-[#00827c] pl-5">
              <h3 className="font-sans text-sm font-medium text-[#ffffff] uppercase tracking-[0.05em] mb-1.5">
                Data Privacy &amp; Zero Leakage
              </h3>
              <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
                {study.architectureFraming.securityAndIsolation}
              </p>
            </div>

            <div className="border-l-2 border-[#004d49] pl-5">
              <h3 className="font-sans text-sm font-medium text-[#ffffff] uppercase tracking-[0.05em] mb-1.5">
                System Integrations &amp; Infrastructure
              </h3>
              <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
                {study.architectureFraming.integrations}
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section aria-labelledby="process-heading" className="mb-14">
          <h2 id="process-heading" className="font-sans text-[12px] font-medium text-[#bbc7c6] uppercase tracking-[0.12em] mb-6">
            ENGINEERING PROCESS &amp; MILESTONES
          </h2>
          <div className="space-y-4">
            {study.process.map((step) => (
              <div
                key={step.step}
                className="bg-[#003734] border border-[#004d49] rounded-[16px] p-6 flex flex-col md:flex-row gap-5 md:items-center"
              >
                <div className="font-sans text-sm text-[#cbfffc] font-medium tracking-[0.15em] shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-sans text-lg font-medium text-[#ffffff] mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section aria-labelledby="stack-heading" className="mb-14">
          <h2 id="stack-heading" className="font-sans text-[12px] font-medium text-[#bbc7c6] uppercase tracking-[0.12em] mb-4">
            PRODUCTION TECHNOLOGY STACK
          </h2>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span
                key={item}
                className="font-sans text-xs text-[#edfffe]/90 border border-[#004d49] bg-[#003734] px-3.5 py-1.5 rounded-[6px]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Author Bio & CEH Credentials */}
        <section className="mb-14 border-t border-[#004d49] pt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-[6px] border border-[#00827c]/40 bg-[#003734] flex items-center justify-center font-sans text-sm font-medium text-[#cbfffc] shrink-0">
            MZ
          </div>
          <div>
            <div className="font-sans text-base font-medium text-[#ffffff]">
              {study.author.name}
            </div>
            <div className="font-sans text-xs text-[#bbc7c6] tracking-normal font-normal">
              {study.author.role} · Bahria University (GPA 3.98) · EC-Council Certified Ethical Hacker
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="p-8 md:p-12 border border-[#004d49] bg-[#003734] rounded-[16px] text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-[-0.03em] text-[#ffffff] mb-3">
            Build your multi-tenant AI system with production rigor.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#bbc7c6] max-w-lg mx-auto font-normal leading-relaxed mb-6">
            We partner with tech founders and engineering leaders to deliver hardened multi-tenant AI applications in 3 to 4 weeks. Let&apos;s evaluate your technical architecture.
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
              href="/case-studies"
              className="btn-kelp"
            >
              ← VIEW ALL CASE STUDIES
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
