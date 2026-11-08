import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/caseStudies';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Full-Stack AI & Multi-Tenant Systems Case Studies | ZLab Services',
  description:
    'Explore production AI systems, multi-tenant SaaS applications, and autonomous agent workflows engineered by ZLab Services. Shipped with isolated vector memory, Postgres RLS, and clean cloud infrastructure.',
  alternates: {
    canonical: 'https://zlabservices.site/case-studies',
  },
  openGraph: {
    title: 'Full-Stack AI & Multi-Tenant Systems Case Studies | ZLab Services',
    description:
      'Production AI systems engineered for B2B founders and engineering leaders. Explore shipped architectures, multi-tenant vector designs, and technical results.',
    url: 'https://zlabservices.site/case-studies',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZLab Services Full-Stack AI Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack AI & Multi-Tenant Systems Case Studies | ZLab Services',
    description:
      'Production AI systems engineered for B2B founders and engineering leaders. Explore shipped architectures and technical results.',
    images: ['/og-image.png'],
  },
};

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(203, 255, 252, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 255, 252, 0.018) 1px, transparent 1px)`,
  backgroundSize: '72px 72px',
};

export default function CaseStudiesIndexPage() {
  const breadcrumbJsonLd = {
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
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Full-Stack AI & Multi-Tenant Systems Case Studies',
    description:
      'Production-ready AI applications engineered for B2B founders and tech teams by ZLab Services.',
    url: 'https://zlabservices.site/case-studies',
    hasPart: CASE_STUDIES.map((study) => ({
      '@type': 'Article',
      headline: study.title,
      description: study.overview,
      url: `https://zlabservices.site/case-studies/${study.slug}`,
      author: {
        '@type': 'Person',
        name: study.author.name,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-[#012624] text-[#edfffe]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-28">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-[#bbc7c6] tracking-[0.1em] uppercase">
            <li>
              <Link href="/" className="hover:text-[#cbfffc] transition-colors">
                HOME
              </Link>
            </li>
            <li className="text-[#00827c]">/</li>
            <li className="text-[#cbfffc]" aria-current="page">
              CASE STUDIES
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
            VERIFIED PRODUCTION DOSSIERS
          </div>

          <h1 className="font-sans text-4xl md:text-6xl font-medium tracking-[-0.04em] text-[#ffffff] leading-[1.08] mb-6">
            Production Case Studies &amp; Shipped Architectures.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#bbc7c6] max-w-2xl font-normal leading-relaxed">
            Real production systems architected for B2B founders, SaaS innovators, and tech teams. Built with isolated tenant vector memory, PostgreSQL Row-Level Security (RLS), and zero prompt-leakage architecture.
          </p>
        </header>

        {/* Case Studies Grid — Auros Liquid Kelp Cards (#003734, 16px radius, no shadow) */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.slug}
              className="bg-[#003734] border border-[#004d49] hover:border-[#00827c]/60 rounded-[16px] p-8 md:p-12 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#004d49]">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs font-medium text-[#cbfffc] tracking-[0.15em]">
                    DOSSIER 0{idx + 1}
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-[#bbc7c6]/70">
                    {study.clientIndustry}
                  </span>
                </div>
                <div className="font-sans text-[11px] font-medium text-[#edfffe] uppercase tracking-[0.12em] px-3 py-1 bg-[#012624] border border-[#00827c]/40 rounded-[6px]">
                  TIMELINE: {study.timeline}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-[-0.03em] text-[#ffffff] mb-4">
                    <Link href={`/case-studies/${study.slug}`} className="hover:text-[#cbfffc] transition-colors">
                      {study.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed mb-6">
                    {study.overview}
                  </p>

                  <div className="bg-[#011d1c] border border-[#004d49] rounded-[10px] p-5 mb-6">
                    <div className="font-sans text-[10px] font-medium text-[#cbfffc] uppercase tracking-[0.15em] mb-1.5">
                      TENANT ISOLATION ARCHITECTURE
                    </div>
                    <p className="font-sans text-xs text-[#edfffe]/90 leading-relaxed font-normal">
                      {study.architectureFraming.multiTenancy}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-[11px] text-[#edfffe]/80 bg-[#012624] border border-[#004d49] px-2.5 py-1 rounded-[6px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 bg-[#011d1c] border border-[#004d49] rounded-[12px] p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="font-sans text-[10px] font-medium text-[#bbc7c6] uppercase tracking-[0.15em] mb-4">
                      VERIFIED OUTCOMES
                    </div>
                    <div className="space-y-4 mb-6">
                      {study.results.slice(0, 2).map((res, rIdx) => (
                        <div key={rIdx}>
                          <div className="font-sans text-2xl font-medium tracking-[-0.03em] text-[#fde9ff] mb-0.5">
                            {res.value}
                          </div>
                          <div className="font-sans text-xs text-[#bbc7c6] tracking-normal font-normal">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="btn-aurora text-center block w-full justify-center"
                  >
                    READ CASE STUDY →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Case Study Callout */}
        <section className="mt-20 bg-[#003734] border border-[#004d49] rounded-[16px] p-10 md:p-14 text-center">
          <div className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-[#cbfffc] mb-3">
            TECHNICAL ENGAGEMENT
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-medium tracking-[-0.03em] text-[#ffffff] mb-4">
            From architecture schema to production in 3 to 4 weeks.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#bbc7c6] max-w-xl mx-auto font-normal leading-relaxed mb-8">
            Book a 30-minute technical discovery call directly with Muhammad Zubair, EC-Council Certified Ethical Hacker. Zero sales pressure, just architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurora"
            >
              BOOK TECHNICAL STRATEGY CALL →
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
