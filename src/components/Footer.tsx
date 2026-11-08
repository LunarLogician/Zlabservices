'use client';

import Link from 'next/link';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[#004d49] px-6 md:px-10 py-24 bg-[#011d1c] text-[#edfffe]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 max-w-sm">
            <Link href="/" className="inline-block">
              <span className="font-sans text-lg font-medium tracking-[0.1em] text-[#ffffff] uppercase">
                ZLAB SERVICES
              </span>
            </Link>
            <p className="font-sans text-sm text-[#bbc7c6] font-normal leading-relaxed mt-4">
              Specialized AI engineering studio building hardened multi-tenant AI SaaS, autonomous agent workflows, and companion mobile applications for technology founders.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 font-sans text-[10px] font-medium tracking-[0.12em] text-[#cbfffc] uppercase px-3 py-1.5 rounded-[6px] bg-[#003734] border border-[#00827c]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbfffc]" />
              EC-COUNCIL CERTIFIED ETHICAL HACKER LED
            </div>
          </div>

          {/* Navigation Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-sans text-[11px] font-medium text-[#bbc7c6] uppercase tracking-[0.15em] mb-4">
                NAVIGATION
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  { label: 'SERVICES', href: '/#services' },
                  { label: 'CASE STUDIES', href: '/case-studies' },
                  { label: 'PRODUCTS', href: '/#products' },
                  { label: 'THE STUDIO', href: '/#about' },
                  { label: 'TECHNICAL FAQ', href: '/#faq' },
                  { label: 'CONTACT', href: '/#contact' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-[#bbc7c6] hover:text-[#cbfffc] tracking-[0.05em] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-sans text-[11px] font-medium text-[#bbc7c6] uppercase tracking-[0.15em] mb-4">
                CAPABILITIES
              </div>
              <div className="space-y-3 font-sans text-xs text-[#bbc7c6]/80 tracking-[0.05em]">
                <div>MULTI-TENANT RAG</div>
                <div>AUTONOMOUS AGENTS</div>
                <div>POSTGRES RLS POLICIES</div>
                <div>NEXT.JS 16 & REACT 19</div>
                <div>FLUTTER MOBILE APPS</div>
                <div>STRIPE BILLING ENGINES</div>
              </div>
            </div>

            <div>
              <div className="font-sans text-[11px] font-medium text-[#bbc7c6] uppercase tracking-[0.15em] mb-4">
                CONNECT
              </div>
              <div className="space-y-3 font-sans text-xs">
                <a
                  href="https://cal.com/code-zubair-3fs0gu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#cbfffc] hover:underline tracking-[0.05em]"
                >
                  BOOK 30-MIN CALL ↗
                </a>
                <a
                  href="mailto:zlabservices@gmail.com"
                  className="block text-[#bbc7c6] hover:text-[#cbfffc] tracking-[0.05em] transition-colors"
                >
                  FOUNDER INBOX
                </a>
                <a
                  href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#bbc7c6] hover:text-[#cbfffc] tracking-[0.05em] transition-colors"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="https://github.com/LunarLogician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#bbc7c6] hover:text-[#cbfffc] tracking-[0.05em] transition-colors"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#004d49] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans text-[11px] text-[#bbc7c6]/70 tracking-[0.08em]">
          <div>
            &copy; {new Date().getFullYear()} ZLAB SERVICES. ALL ARCHITECTURAL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[#bbc7c6]/50">
              ISLAMABAD (GMT+5) · REMOTE WORLDWIDE
            </span>
            <button
              onClick={scrollToTop}
              className="text-[#cbfffc] hover:text-[#ffffff] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>RETURN TO APEX</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
