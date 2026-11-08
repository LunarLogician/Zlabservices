'use client';

import { motion } from 'framer-motion';

export function About() {
  const credentials = [
    { label: '4+ YEARS PRODUCTION ENG', detail: 'Hardened web & mobile applications', marker: 'SYS' },
    { label: '3 SHIPPED AI PRODUCTS', detail: 'Live multi-tenant platforms in production', marker: 'PRD' },
    { label: 'CEH CERTIFIED ETHICAL HACKER', detail: 'Offensive security & penetration testing', marker: 'SEC' },
    { label: '3.98 GPA CS/IT FOUNDATION', detail: 'Mathematical rigor & distributed systems', marker: 'ENG' },
  ];

  const techStack = [
    'Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Python', 
    'Flutter', 'Redis', 'PostgreSQL (RLS)', 'Docker', 'AWS',
    'Stripe Checkout', 'Claude 3.5 API', 'OpenAI GPT-4o', 'LangGraph'
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column — Studio Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
              THE STUDIO
            </div>
            
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] mb-8">
              Founder-led execution. Offensive security rigor.
            </h2>
            
            <div className="space-y-5 font-sans text-base text-[#bbc7c6] font-normal leading-relaxed">
              <p>
                ZLab is a specialized AI systems studio. We do not do slide decks or bloated agency meetings: <span className="text-[#ffffff] font-medium">we write code and ship hardened production software.</span> Every product starts with a clear architecture and launches with strict tenant isolation, payment flows, and automated monitoring.
              </p>
              <p>
                Founded by <span className="text-[#cbfffc] font-medium">Muhammad Zubair</span>, an EC-Council Certified Ethical Hacker (CEH) with a 3.98 GPA in Computer Science. We approach AI software engineering from an offensive security perspective — protecting multi-tenant databases against cross-tenant vector contamination, prompt injection exploits, and runaway agent loops before deployment.
              </p>
              <p>
                Every project is founder-led. You communicate directly with the engineer architecting your system — from initial schema definition to production deployment on AWS, Vercel, or Railway.
              </p>
            </div>

            {/* Credentials Grid — Auros Liquid Deep Panels */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="bg-[#003734] border border-[#004d49] rounded-[16px] p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#cbfffc] uppercase">
                      {cred.label}
                    </span>
                    <span className="font-sans text-[9px] font-medium px-2 py-0.5 rounded-[4px] bg-[#012624] text-[#edfffe]/70 border border-[#00827c]/30">
                      {cred.marker}
                    </span>
                  </div>
                  <div className="font-sans text-xs text-[#bbc7c6] font-normal">
                    {cred.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Founder Dossier Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10">
              {/* Founder Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#004d49]">
                <div className="w-14 h-14 rounded-[6px] bg-[#012624] border border-[#00827c]/40 flex items-center justify-center font-sans text-base font-medium text-[#cbfffc]">
                  MZ
                </div>
                <div>
                  <h3 className="font-sans text-xl font-medium text-[#ffffff]">
                    Muhammad Zubair
                  </h3>
                  <div className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#cbfffc] uppercase flex items-center gap-2 mt-0.5">
                    FOUNDER & SYSTEMS ARCHITECT
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbfffc] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Bio summary */}
              <p className="font-sans text-sm text-[#bbc7c6] leading-relaxed mb-6 font-normal">
                Full-stack AI engineer and EC-Council Certified Ethical Hacker. 4+ years architecting multi-tenant document RAG systems, autonomous agentic loops, and companion Flutter mobile applications.
              </p>

              {/* Verified Technical Stack */}
              <div className="mb-8">
                <div className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-[#edfffe]/70 mb-3">
                  PRIMARY ARSENAL
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[11px] text-[#edfffe]/90 bg-[#012624] border border-[#004d49] px-2.5 py-1 rounded-[6px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Links */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#004d49]">
                <a
                  href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-kelp text-center justify-center"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="https://github.com/LunarLogician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-kelp text-center justify-center"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
