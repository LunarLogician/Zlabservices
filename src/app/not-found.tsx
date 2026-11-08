import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found | ZLab Services',
  description: 'The requested page could not be found. Explore our full-stack AI case studies or return home.',
};

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0a0a08] text-white flex flex-col justify-between">
      <div className="fixed inset-0 pointer-events-none" style={GRID_BG} />
      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-40 text-center">
        <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-4">
          404 &middot; PAGE NOT FOUND
        </div>
        <h1 className="font-serif italic text-4xl md:text-6xl text-white mb-6">
          Lost in the architecture?
        </h1>
        <p className="text-sm md:text-base text-white/70 font-light max-w-md mx-auto mb-8 leading-relaxed">
          The route you are looking for has moved or does not exist. Browse our production AI case studies or return to the homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#07110d] transition-all hover:bg-emerald-300"
          >
            &larr; Return Home
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-white/80 transition-all hover:border-emerald-400 hover:text-emerald-400"
          >
            Explore Case Studies &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

