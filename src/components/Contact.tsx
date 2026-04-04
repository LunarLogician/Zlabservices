'use client';

import { motion } from 'framer-motion';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 overflow-hidden
      border-t border-white/[0.06]">
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-[10px] text-white/75 tracking-widest">CONTACT_</span>
          <h2 className="font-serif italic text-6xl md:text-7xl text-white leading-tight mt-3 mb-6">
            Let&apos;s build
            <br />
            <span className="text-white/75 not-italic">something.</span>
          </h2>
          <p className="text-sm text-white/75 leading-relaxed font-light mb-12 max-w-md">
            Open to select client work, collaborations, and interesting problems.
          </p>

          {/* Email — large serif link */}
          <a
            href="mailto:zlabservices@gmail.com"
            className="font-serif italic text-2xl md:text-3xl text-white/60
              hover:text-white transition-colors border-b border-white/20
              pb-1 inline-block mb-12"
          >
            zlabservices@gmail.com
          </a>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="mailto:zlabservices@gmail.com"
              className="font-mono text-[11px] text-white/70 border border-white/15
                px-6 py-3 hover:bg-white/[0.06] hover:text-white
                transition-all tracking-wider"
            >
              SEND MESSAGE →
            </a>
            <a
              href="tel:+923123232695"
              className="font-mono text-[11px] text-white/75 border border-white/[0.08]
                px-6 py-3 hover:border-white/15 hover:text-white/60
                transition-all tracking-wider"
            >
              +92 312 323 2695
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-8 pt-6 border-t border-white/[0.06]">
            {[
              { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-white/75 hover:text-white/60
                  tracking-widest transition-colors"
              >
                {s.label} →
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
