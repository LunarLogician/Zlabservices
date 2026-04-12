'use client';

import { useState } from 'react';

export function ContactLight() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
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
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-8 border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-emerald-400/40" />
              <span className="font-mono text-xs text-white/60 tracking-widest">CONTACT</span>
            </div>
            
            <h2 className="font-serif italic text-4xl md:text-5xl text-white leading-tight mb-6">
              Let's build
              <br />
              <span className="text-emerald-400/80 not-italic">something.</span>
            </h2>
            
            <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-md">
              Ready to turn your idea into a production-ready product? 
              We respond within hours.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="font-mono text-xs text-emerald-400/80 tracking-widest mb-2">
                  EMAIL
                </div>
                <a
                  href="mailto:zlabservices@gmail.com"
                  className="font-serif italic text-lg text-white/60 hover:text-white transition-colors inline-block"
                >
                  zlabservices@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <div className="font-mono text-xs text-emerald-400/80 tracking-widest mb-2">
                  WHATSAPP
                </div>
                <a
                  href="https://wa.me/923123232695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg text-white/60 hover:text-white transition-colors inline-block"
                >
                  +92 312 3232695
                </a>
                <div className="font-mono text-xs text-white/40 mt-1">
                  Fast response · Free consultation
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white/[0.02] border border-white/[0.08] p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm">✉️</span>
                <span className="font-mono text-xs text-white/60 tracking-widest">SEND A MESSAGE</span>
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                
                {error && (
                  <div className="text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full font-mono text-xs py-3 border border-white/15 hover:border-emerald-400/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        SENDING...
                      </span>
                    ) : submitted ? (
                      '✓ MESSAGE SENT!'
                    ) : (
                      'SEND MESSAGE →'
                    )}
                  </span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 text-center">
                  <div className="font-mono text-xs text-emerald-400/80">
                    ✓ We'll get back to you soon!
                  </div>
                </div>
              )}
            </div>

            {/* Simple CTA */}
            <div className="mt-8 pt-6 border-t border-white/8 text-center">
              <div className="font-mono text-xs text-white/40 tracking-widest mb-2">
                OUR GUARANTEE
              </div>
              <div className="text-sm text-white/70">
                Free consultation · No commitment · Clear pricing
              </div>
            </div>
          </div>
        </div>

        {/* Simple Footer */}
        <div className="mt-12 pt-8 border-t border-white/8 text-center">
          <div className="font-mono text-xs text-white/40">
            We respond within 2-4 hours · 24/7 for urgent projects
          </div>
        </div>
      </div>
    </section>
  );
}