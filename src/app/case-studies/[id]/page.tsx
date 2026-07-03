'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Server, Smartphone, Clock, FileText } from 'lucide-react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

const CASE_STUDIES: Record<string, any> = {
  everlearnai: {
    id: 'everlearnai',
    name: 'EverlearnAI',
    header: 'AI study tools that turn notes into scores.',
    overview:
      'Built a student-first study platform with quizzes, MCQs, flashcards, document Q&A, AI chat, and assignment help.',
    problem:
      'Students were wasting time switching between notes, quizzes, and document search during exam prep.',
    solution:
      'Delivered an all-in-one learning workflow that generates MCQs, flashcards, and answers from notes or uploaded files instantly.',
    architecture:
      'Next.js frontend, Claude AI engine, file upload processing, student dashboard, and Android study companion.',
    timeline: '5 weeks from concept to launch-ready student product.',
    techStack: ['Next.js', 'Claude API', 'Android', 'Tailwind CSS', 'Document Q&A'],
    challenges: [
      'Making generated quizzes accurate and syllabus-aligned.',
      'Supporting fast file-based study tools without slow uploads.',
      'Keeping the experience intuitive for exam-focused students.',
    ],
    result: [
      'Released a study assistant that generates quizzes, flashcards, and exam prep content in seconds.',
      'Reduced friction with AI-powered explanations and study workflows.',
      'Created a mobile-friendly platform so students can learn anywhere.',
    ],
    screenshots: [
      { label: 'Quiz Generator', src: '/quiz.png' },
      { label: 'Student Dashboard', src: '/Dashboard.png' },
    ],
  },
  devpostai: {
    id: 'devpostai',
    name: 'DevPost AI',
    header: 'AI-Powered LinkedIn Content Platform',
    overview:
      'Built a production-ready SaaS platform that combines AI content generation with LinkedIn automation.',
    problem:
      'Professionals and founders know they should post consistently on LinkedIn, but creating engaging content every day is time-consuming. Existing AI writers generate generic text, while publishing still requires manual copy-pasting into LinkedIn.',
    solution:
      'Users connect their LinkedIn account once, generate posts using Claude AI, customize the tone and style, review the content, and publish directly to LinkedIn from a single dashboard.',
    architecture:
      'Next.js frontend, Claude AI generation pipeline, LinkedIn OAuth, secure publishing flow, and SaaS dashboard architecture.',
    timeline: '4 weeks to a scalable creator SaaS product.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Claude API', 'LinkedIn OAuth'],
    challenges: [
      'Integrating Claude AI with structured LinkedIn copy generation.',
      'Securing LinkedIn OAuth authentication and publish permissions.',
      'Designing a seamless generation → edit → publish workflow without copy-paste.',
    ],
    result: [
      'Production-ready SaaS platform with direct LinkedIn publishing.',
      'AI-generated posts in seconds with manual review and tone control.',
      'Extensible architecture for analytics, scheduling, and future AI features.',
    ],
    screenshots: [
      { label: 'LinkedIn Draft Editor', src: '/devposthome.png' },
    ],
  },
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      const study = CASE_STUDIES[id];
      if (study) {
        setCaseStudy(study);
      } else {
        router.push('/#case-studies');
      }
      setLoading(false);
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center text-white">
        Loading case study...
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center text-white">
        Case study not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a08] text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/#case-studies"
          className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to case studies</span>
        </Link>
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-emerald-400/50" />
              <span className="font-mono text-[9px] text-white/70 tracking-widest">CASE STUDY</span>
            </div>
            <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              {caseStudy.name}
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
              {caseStudy.header}
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.95fr] mb-16">
            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="font-serif italic text-3xl sm:text-4xl text-white">Overview</h2>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-3xl">{caseStudy.overview}</p>
              </section>

              <div className="grid gap-6 md:grid-cols-2">
                <section className="space-y-4 bg-white/[0.025] border border-white/10 rounded-3xl p-6">
                  <h3 className="font-serif italic text-2xl text-white">Problem</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">{caseStudy.problem}</p>
                </section>
                <section className="space-y-4 bg-white/[0.025] border border-white/10 rounded-3xl p-6">
                  <h3 className="font-serif italic text-2xl text-white">Solution</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">{caseStudy.solution}</p>
                </section>
              </div>

              <section className="space-y-4 bg-white/[0.025] border border-white/10 rounded-3xl p-6">
                <h2 className="font-serif italic text-3xl sm:text-4xl text-white">Architecture</h2>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">{caseStudy.architecture}</p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 bg-white/[0.025] border border-white/10 rounded-3xl p-6">
                  <h2 className="font-serif italic text-3xl text-white">Timeline</h2>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">{caseStudy.timeline}</p>
                </div>
                <div className="space-y-4 bg-white/[0.025] border border-white/10 rounded-3xl p-6">
                  <h2 className="font-serif italic text-3xl text-white">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech: string, index: number) => (
                      <span
                        key={`${tech}-${index}`}
                        className="font-mono text-[10px] sm:text-sm text-emerald-100 border border-emerald-400/15 bg-white/[0.03] px-3 py-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-28">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-mono text-[8px] text-white/40 uppercase tracking-[0.3em]">Timeline</div>
                    <div className="text-white/80 mt-1">{caseStudy.timeline}</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  {caseStudy.techStack.slice(0, 3).map((tech: string, index: number) => (
                    <span
                      key={`${tech}-${index}`}
                      className="font-mono text-[9px] text-white/60 border border-white/10 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-[8px] text-white/40 uppercase tracking-[0.3em]">Screenshots</div>
                {caseStudy.screenshots.map((screenshot: { label: string; src: string }) => (
                  <div key={screenshot.label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-3 overflow-hidden">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {screenshot.label}
                    </div>
                    <div className="h-56 sm:h-64 rounded-3xl overflow-hidden border border-white/10 bg-slate-950/30">
                      <Image
                        src={screenshot.src}
                        alt={`${screenshot.label} screenshot`}
                        width={1200}
                        height={750}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <section className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <h2 className="font-serif italic text-3xl text-white">Challenges</h2>
              </div>
              <ul className="space-y-4 pl-4">
                {caseStudy.challenges.map((item: string, index: number) => (
                  <li key={`challenge-${index}`} className="text-white/70 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <h2 className="font-serif italic text-3xl text-white">Result</h2>
              </div>
              <ul className="space-y-4 pl-4">
                {caseStudy.result.map((item: string, index: number) => (
                  <li key={`result-${index}`} className="text-white/70 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#case-studies"
              className="font-mono text-[11px] text-white/70 hover:text-emerald-400 transition-colors"
            >
              ← Back to case studies
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-400/15 border border-emerald-400/30 hover:bg-emerald-400/25 transition-all rounded-full text-white"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/90">Talk about your project</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
