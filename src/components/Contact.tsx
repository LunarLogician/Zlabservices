'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 6000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setErrorMsg(error instanceof Error ? error.message : 'Transmission error. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column — Direct Inquiries (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="font-sans text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] mb-3">
              DIRECT DISPATCH
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.08] mb-6">
              Let's engineer your system.
            </h2>

            <p className="font-sans text-sm md:text-base text-[#bbc7c6] font-normal leading-relaxed mb-8">
              Ready to ship a hardened multi-tenant AI application or autonomous agentic workflow? You work directly with the founder and lead engineer.
            </p>

            <div className="space-y-4">
              {/* Strategy Call Booking */}
              <div className="bg-[#003734] border border-[#004d49] rounded-[16px] p-6">
                <div className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#cbfffc] uppercase mb-1">
                  CALENDAR APPOINTMENT
                </div>
                <div className="font-sans text-lg font-medium text-[#ffffff] mb-2">
                  30-Min Technical Architecture Call
                </div>
                <p className="font-sans text-xs text-[#bbc7c6] mb-4">
                  Discuss database multi-tenancy, vector indexing, sprint timelines, and fixed deliverables.
                </p>
                <a
                  href="https://cal.com/code-zubair-3fs0gu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-aurora text-center block"
                >
                  SCHEDULE APPOINTMENT →
                </a>
              </div>

              {/* Direct Email & Location info */}
              <div className="bg-[#011d1c] border border-[#004d49]/70 rounded-[16px] p-6 space-y-4">
                <div>
                  <div className="font-sans text-[10px] font-medium tracking-[0.15em] text-[#bbc7c6]/70 uppercase mb-1">
                    FOUNDER INBOX
                  </div>
                  <a
                    href="mailto:zlabservices@gmail.com"
                    className="font-sans text-base font-medium text-[#cbfffc] hover:underline"
                  >
                    zlabservices@gmail.com
                  </a>
                </div>

                <div className="pt-3 border-t border-[#004d49]/60 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-sans text-[10px] text-[#bbc7c6]/60 uppercase tracking-[0.12em] block">
                      TYPICAL RESPONSE
                    </span>
                    <span className="font-sans text-[#edfffe] font-medium">&lt; 2.4 Hours</span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-[10px] text-[#bbc7c6]/60 uppercase tracking-[0.12em] block">
                      AVAILABILITY
                    </span>
                    <span className="font-sans text-[#cbfffc] font-medium">Accepting Q2 Engagements</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Project Brief Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#003734] border border-[#004d49] rounded-[16px] p-8 md:p-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#004d49]">
                <div className="font-sans text-lg font-medium text-[#ffffff]">
                  Project Transmission Terminal
                </div>
                <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#cbfffc] bg-[#012624] px-2.5 py-1 rounded-[6px] border border-[#00827c]/40">
                  DIRECT TO FOUNDER
                </span>
              </div>

              {submitted ? (
                <div className="bg-[#012624] border border-[#00827c] rounded-[12px] p-8 text-center my-8">
                  <div className="w-10 h-10 rounded-full bg-[#00827c] text-[#011d1c] flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="font-sans text-xl font-medium text-[#ffffff] mb-2">
                    Transmission Acknowledged
                  </h3>
                  <p className="font-sans text-sm text-[#bbc7c6] max-w-sm mx-auto">
                    Your architecture brief was received. Muhammad Zubair will review and reply within 2-4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-[6px] bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] block mb-2">
                      NAME / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Vance, Engineering Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#011d1c] border border-[#004d49] rounded-[6px] px-4 py-3 text-sm text-[#ffffff] placeholder-[#bbc7c6]/40 focus:border-[#cbfffc] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] block mb-2">
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#011d1c] border border-[#004d49] rounded-[6px] px-4 py-3 text-sm text-[#ffffff] placeholder-[#bbc7c6]/40 focus:border-[#cbfffc] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-[#bbc7c6] block mb-2">
                      SYSTEM REQUIREMENTS & SCOPE
                    </label>
                    <textarea
                      placeholder="Describe what you want to build (e.g. multi-tenant document RAG with Postgres RLS, autonomous agent with tool execution, or Flutter mobile app)..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#011d1c] border border-[#004d49] rounded-[6px] px-4 py-3 text-sm text-[#ffffff] placeholder-[#bbc7c6]/40 focus:border-[#cbfffc] focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-aurora w-full justify-center disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'TRANSMITTING BRIEF...' : 'SUBMIT ARCHITECTURE BRIEF →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
