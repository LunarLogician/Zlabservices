'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function About() {
  const credentials = [
    { label: '4+ YEARS EXPERIENCE', detail: 'Building production software', icon: '⚡' },
    { label: '15+ LIVE PRODUCTS', detail: 'In market with real users', icon: '🚀' },
    { label: 'FULL-STACK EXPERTISE', detail: 'Frontend to deployment', icon: '🔧' },
    { label: 'AI INTEGRATION SPECIALIST', detail: 'Claude, OpenAI, custom models', icon: '🤖' },
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 
    'Flutter', 'Redis', 'PostgreSQL', 'MongoDB', 'AWS',
    'Docker', 'Stripe', 'Claude API', 'OpenAI'
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-8 h-8 border border-emerald-400/30 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              </motion.div>
              <span className="font-mono text-[9px] text-white/60 tracking-widest">THE STUDIO_</span>
            </div>
            
            <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-8">
              Small team.
              <br />
              <span className="text-emerald-400/80 not-italic">Big output.</span>
            </h2>
            
            <div className="space-y-5 text-sm text-white/75 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                ZLab is a product-first AI studio. We don't consult —{' '}
                <span className="text-emerald-400/80">we build.</span> Every product starts
                with a sharp insight and ships as a real, working application in the world.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Founded by a CS student who refused to wait until graduation to start
                building. We move fast, ship real things, and keep the team lean on purpose.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Our focus: production-ready AI products with proper infrastructure — 
                payments, authentication, Redis caching, rate limiting, and deployment.
              </motion.p>
            </div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="bg-white/[0.02] border border-white/[0.08] p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{cred.icon}</span>
                    <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest">
                      {cred.label}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] text-white/70">
                    {cred.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Founder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 backdrop-blur-sm">
              {/* Founder identity */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.06]">
                <div className="w-14 h-14 border border-white/[0.15] flex items-center justify-center font-mono text-sm text-white/60 flex-shrink-0">
                  MZ
                </div>
                <div>
                  <div className="text-white font-light text-lg">
                    Muhammad Zubair
                  </div>
                  <div className="font-mono text-[10px] text-white/75 tracking-widest mt-0.5 flex items-center gap-2">
                    FOUNDER · FULL-STACK DEVELOPER
                    <motion.span
                      className="w-1 h-1 bg-emerald-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-white/75 leading-relaxed font-light mb-8">
                Full-Stack Developer with 4+ years building AI-powered SaaS products,
                RESTful APIs, and scalable web applications. Specializes in turning ideas
                into production-ready products with proper infrastructure.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="font-mono text-[8px] text-white/60 tracking-widest mb-3">
                  TECH STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="font-mono text-[9px] text-white/60 border border-white/10 px-2 py-1"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 font-mono text-[10px] text-white/75 border border-white/10 px-4 py-2 text-center hover:border-emerald-400/40 hover:text-emerald-400/80 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LINKEDIN →
                </motion.a>
                <motion.a
                  href="https://github.com/LunarLogician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 font-mono text-[10px] text-white/75 border border-white/10 px-4 py-2 text-center hover:border-emerald-400/40 hover:text-emerald-400/80 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GITHUB →
                </motion.a>
              </div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 pt-6 border-t border-white/8"
              >
                <div className="font-mono text-[8px] text-white/40 tracking-widest mb-2">
                  PHILOSOPHY
                </div>
                <div className="text-sm text-white/70 font-light">
                  "Build products that work at scale, not just demos."
                </div>
              </motion.div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Process Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/8"
        >
          <div className="text-center mb-8">
            <div className="font-mono text-[9px] text-white/60 tracking-widest mb-2">
              HOW WE WORK
            </div>
            <h3 className="font-serif italic text-2xl text-white">
              From idea to production in weeks
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirements & architecture planning' },
              { step: '02', title: 'Build', desc: 'Development & AI integration' },
              { step: '03', title: 'Test', desc: 'Quality assurance & optimization' },
              { step: '04', title: 'Deploy', desc: 'Production launch & monitoring' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-[10px] text-emerald-400/60 mb-2">{item.step}</div>
                <div className="font-serif italic text-lg text-white mb-2">{item.title}</div>
                <div className="font-mono text-[9px] text-white/60">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}