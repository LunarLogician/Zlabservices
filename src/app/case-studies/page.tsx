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
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
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
    <div className="relative min-h-screen bg-[#0a0a08] text-white">
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

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-mono text-[10px] text-white/50 tracking-widest uppercase">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400" aria-current="page">
              Case Studies
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-400/20 bg-emerald-400/5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-[8px] text-emerald-400/80 tracking-widest uppercase">
              Proven Production Work
            </span>
          </div>

          <h1 className="font-serif italic text-4xl md:text-6xl text-white leading-tight mb-6">
            Full-Stack AI Case Studies &amp; <span className="text-emerald-400 not-italic">Shipped Systems</span>
          </h1>

          <p className="text-base text-white/70 max-w-2xl font-light leading-relaxed">
            Real production systems architected for B2B founders, SaaS innovators, and tech teams. Built with isolated tenant vector memory, PostgreSQL Row-Level Security (RLS), and zero prompt-leakage architecture.
          </p>
        </header>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.slug}
              className="group relative bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 p-8 md:p-10 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 tracking-widest">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                    {study.clientIndustry}
                  </span>
                </div>
                <div className="font-mono text-[9px] text-emerald-400/80 uppercase tracking-widest border border-emerald-400/20 px-2.5 py-1 bg-emerald-400/5">
                  Timeline: {study.timeline}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
                <div className="md:col-span-2">
                  <h2 className="font-serif italic text-2xl md:text-3xl text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </h2>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                    {study.overview}
                  </p>

                  <div className="bg-white/[0.02] border border-white/8 p-4 mb-6">
                    <div className="font-mono text-[8px] text-emerald-400/90 uppercase tracking-widest mb-1.5">
                      Multi-Tenant Architecture &amp; Data Isolation
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {study.architectureFraming.multiTenancy}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[8px] text-white/60 border border-white/10 px-2 py-1 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="font-mono text-[9px] text-white/50 uppercase tracking-widest mb-4">
                      Key Results
                    </div>
                    <div className="space-y-4 mb-6">
                      {study.results.slice(0, 2).map((res, rIdx) => (
                        <div key={rIdx}>
                          <div className="font-serif text-lg text-emerald-400 mb-0.5">
                            {res.value}
                          </div>
                          <div className="font-mono text-[9px] text-white/50 tracking-wider">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded bg-emerald-400 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#07110d] transition-all hover:bg-emerald-300"
                  >
                    Read Full Case Study &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Case Study CTA */}
        <section className="mt-20 p-10 border border-emerald-400/30 bg-emerald-400/[0.03] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-400/30 rounded-full mb-4">
            <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest">
              Ready to Ship Your Multi-Tenant AI System?
            </span>
          </div>
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            From architecture to production in 3 to 4 weeks.
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed mb-8">
            Book a 30-minute technical discovery call directly with Muhammad Zubair, EC-Council Certified Ethical Hacker. Zero sales pressure, just architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/code-zubair-3fs0gu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#07110d] shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-300"
            >
              Book Technical Strategy Call &rarr;
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
