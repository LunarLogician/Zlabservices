'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/[0.06]">
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
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="h-px w-12 bg-emerald-400/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="font-mono text-[9px] text-white/60 tracking-widest">CONTACT_</span>
            </div>
            
            <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6">
              Let's build
              <br />
              <span className="text-emerald-400/80 not-italic">something.</span>
            </h2>
            
            <p className="text-sm text-white/70 leading-relaxed font-light mb-12 max-w-md">
              Ready to turn your idea into a production-ready product? 
              We respond within hours, not days.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest mb-2">
                  EMAIL
                </div>
                <a
                  href="mailto:zubair@zlabservices.com"
                  className="font-serif italic text-xl text-white/60 hover:text-white transition-colors inline-block"
                >
                  zubair@zlabservices.com
                </a>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest mb-2">
                  WHATSAPP
                </div>
                <a
                  href="https://wa.me/923123232695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xl text-white/60 hover:text-white transition-colors inline-block"
                >
                  +92 312 3232695
                </a>
                <div className="font-mono text-[8px] text-white/40 mt-1">
                  Fastest response · Free consultation
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest mb-2">
                  LOCATION
                </div>
                <div className="font-mono text-sm text-white/60">
                  Islamabad, Pakistan
                </div>
                <div className="font-mono text-[8px] text-white/40 mt-1">
                  GMT+5 · Remote-first studio
                </div>
              </motion.div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-white/8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[8px] text-white/40">AVG RESPONSE TIME</div>
                  <div className="font-serif text-lg text-emerald-400/80">2-4 hours</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[8px] text-white/40">AVAILABILITY</div>
                  <div className="font-mono text-[10px] text-emerald-400/60">24/7 for urgent projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.08] p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm">✉️</span>
                <span className="font-mono text-[8px] text-white/60 tracking-widest">SEND A MESSAGE</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full font-mono text-[10px] py-4 border border-white/15 hover:border-emerald-400/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-4 h-4"
                        >
                          ⚡
                        </motion.div>
                        SENDING...
                      </span>
                    ) : submitted ? (
                      '✓ MESSAGE SENT!'
                    ) : (
                      'SEND MESSAGE →'
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-400/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center"
                >
                  <div className="font-mono text-[9px] text-emerald-400/80">
                    ✓ We'll get back to you within 2-4 hours!
                  </div>
                </motion.div>
              )}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {[
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true', icon: '💼' },
                { label: 'GITHUB', href: 'https://github.com/LunarLogician', icon: '🐙' },
                { label: 'PRODUCTS', href: '#products', icon: '🚀' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-[9px] text-white/60 hover:text-white/90 border border-white/10 px-4 py-3 hover:border-emerald-400/30 transition-all text-center flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xs">{s.icon}</span>
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-6 border-t border-white/8 text-center"
            >
              <div className="font-mono text-[8px] text-white/40 tracking-widest mb-2">
                OUR GUARANTEE
              </div>
              <div className="text-sm text-white/70 font-light">
                Free 30-minute consultation · No commitment · Clear pricing
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/8 text-center"
        >
          <div className="font-serif italic text-2xl text-white mb-4">
            Ready to start your project?
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/923123232695"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-400/10 border border-emerald-400/30 hover:bg-emerald-400/20 transition-all font-mono text-[10px] tracking-widest"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📱 CHAT ON WHATSAPP
            </motion.a>
            <div className="font-mono text-[8px] text-white/40">
              OR
            </div>
            <motion.a
              href="mailto:zubair@zlabservices.com"
              className="px-8 py-4 border border-white/10 hover:border-emerald-400/30 transition-all font-mono text-[10px] tracking-widest"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ SEND AN EMAIL
            </motion.a>
          </div>
          <div className="font-mono text-[8px] text-white/40 mt-4 tracking-widest">
            We respond within 2-4 hours · 24/7 availability for urgent projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}