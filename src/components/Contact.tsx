'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Interactive 3D Email Card that follows cursor
const EmailCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText('zlabservices@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      className="relative mb-12"
    >
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />
      
      <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0"
          animate={{ x: isHovered ? ['-100%', '100%'] : '-100%' }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
        
        <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest mb-2">PREFERRED CONTACT</div>
            <motion.a
              href="mailto:zlabservices@gmail.com"
              className="font-serif italic text-2xl md:text-3xl text-white/60 hover:text-white transition-colors inline-block"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              zlabservices@gmail.com
            </motion.a>
          </div>
          
          <motion.button
            onClick={copyEmail}
            className="relative font-mono text-[9px] px-4 py-2 border border-white/10 hover:border-emerald-400/50 transition-all overflow-hidden group/btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {copied ? '✓ COPIED!' : 'COPY →'}
            </span>
            <motion.div
              className="absolute inset-0 bg-emerald-400/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
        
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-2 right-2 font-mono text-[8px] text-emerald-400/80"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Interactive Phone Card with animated dialer
const PhoneCard = () => {
  const [isDialing, setIsDialing] = useState(false);
  const [dialProgress, setDialProgress] = useState(0);
  
  const handleCall = () => {
    setIsDialing(true);
    setDialProgress(0);
    const interval = setInterval(() => {
      setDialProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDialing(false);
          window.location.href = 'tel:+923123232695';
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };
  
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <div className="bg-white/[0.03] border border-white/[0.08] p-8 overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest mb-2">DIRECT LINE</div>
            <a
              href="tel:+923123232695"
              className="font-mono text-xl md:text-2xl text-white/60 hover:text-white transition-colors inline-block"
            >

            </a>
          </div>
          
          <motion.button
            onClick={handleCall}
            className="relative font-mono text-[9px] px-4 py-2 border border-white/10 hover:border-emerald-400/50 transition-all overflow-hidden group/btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isDialing}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isDialing ? (
                <>
                  <motion.div
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  {dialProgress}%
                </>
              ) : (
                'CALL →'
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-emerald-400/20"
              initial={{ width: '0%' }}
              animate={{ width: isDialing ? `${dialProgress}%` : '0%' }}
              transition={{ duration: 0.1 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Availability Calendar / Status
const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  
  const isWorkingHours = currentTime.getHours() >= 9 && currentTime.getHours() <= 18;
  const dayOfWeek = currentTime.getDay();
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isAvailable = isWorkingHours && isWeekday;
  
  const timeSlots = ['09:00', '11:00', '13:00', '15:00', '17:00'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-white/[0.02] border border-white/[0.08] p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-emerald-400' : 'bg-red-400/50'}`}
          animate={{ scale: isAvailable ? [1, 1.5, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-[8px] text-white/60 tracking-widest">CURRENT STATUS</span>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-white/70 text-sm font-light">
            {isAvailable ? 'Available for calls' : 'Offline'}
          </div>
          <div className="font-mono text-[7px] text-white/40 mt-1">
            {currentTime.toLocaleTimeString()} · {currentTime.toLocaleDateString()}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isAvailable ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          className="text-xl"
        >
          {isAvailable ? '🟢' : '🔴'}
        </motion.div>
      </div>
      
      {isAvailable && (
        <div className="mt-4 pt-4 border-t border-white/8">
          <div className="font-mono text-[7px] text-white/40 mb-3">QUICK SCHEDULE</div>
          <div className="flex gap-2 flex-wrap">
            {timeSlots.map(slot => (
              <motion.button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`px-2 py-1 font-mono text-[7px] border transition-all ${
                  selectedSlot === slot
                    ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-400/80'
                    : 'border-white/10 text-white/40 hover:border-emerald-400/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slot}
              </motion.button>
            ))}
          </div>
          {selectedSlot && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-[7px] text-emerald-400/60 font-mono"
            >
              ✓ Slot selected at {selectedSlot}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Office Locations Map (simulated)
const OfficeLocations = () => {
  const locations = [
    { city: 'Karachi, PK', timezone: 'GMT+5', flag: '🇵🇰', active: true },
    { city: 'London, UK', timezone: 'GMT+1', flag: '🇬🇧', active: false },
    { city: 'Dubai, UAE', timezone: 'GMT+4', flag: '🇦🇪', active: false },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="bg-white/[0.02] border border-white/[0.08] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">📍</span>
        <span className="font-mono text-[8px] text-white/60 tracking-widest">GLOBAL PRESENCE</span>
      </div>
      
      <div className="space-y-3">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{loc.flag}</span>
              <div>
                <div className="text-white/70 text-xs">{loc.city}</div>
                <div className="font-mono text-[6px] text-white/30">{loc.timezone}</div>
              </div>
            </div>
            {loc.active && (
              <motion.div
                className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/8">
        <div className="font-mono text-[6px] text-white/30 text-center">
          24/7 support · Global coverage
        </div>
      </div>
    </motion.div>
  );
};

// Contact Form with 3D effect
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="bg-white/[0.02] border border-white/[0.08] p-6"
    >
      <div className="flex items-center gap-2 mb-4">
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
            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/70 focus:border-emerald-400/50 focus:outline-none transition-colors resize-none"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full font-mono text-[9px] py-3 border border-white/15 hover:border-emerald-400/50 transition-all relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          <span className="relative z-10">
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                ⚡
              </motion.div>
            ) : submitted ? (
              '✓ SENT!'
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
    </motion.div>
  );
};

// Response Time Indicator
const ResponseTimeIndicator = () => {
  const [responseTime] = useState(() => Math.floor(Math.random() * 60) + 30);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className="flex items-center justify-between p-3 border border-white/8 bg-white/[0.01]"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm">⏱️</span>
        <div>
          <div className="font-mono text-[7px] text-white/40">AVG RESPONSE TIME</div>
          <div className="font-serif text-lg text-emerald-400/80">{responseTime}s</div>
        </div>
      </div>
      <motion.div
        className="h-1 w-24 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="h-full bg-emerald-400/60 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: responseTime, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  );
};

// Floating particles background
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bg-emerald-400/20 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Social Media Stats
const SocialStats = () => {
  const stats = [
    { platform: 'LINKEDIN', followers: '2.5K', engagement: '+12%', icon: '💼' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="bg-white/[0.02] border border-white/[0.08] p-4"
    >
      {stats.map(stat => (
        <div key={stat.platform} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{stat.icon}</span>
            <div>
              <div className="font-mono text-[8px] text-white/60">{stat.platform}</div>
              <div className="font-serif text-sm text-white">{stat.followers}</div>
            </div>
          </div>
          <motion.div
            className="font-mono text-[7px] text-emerald-400/80"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {stat.engagement}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

// Main Component
export function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };
  
  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/[0.06]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <FloatingParticles />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      {/* Cursor follower glow */}
      <motion.div
        className="fixed w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x * (window.innerWidth / 100) - 128,
          y: mousePosition.y * (window.innerHeight / 100) - 128,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-8 h-px bg-emerald-400/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="font-mono text-[9px] text-white/60 tracking-widest">CONTACT_</span>
            </div>
            
            <h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6">
              Let&apos;s build
              <br />
              <span className="text-emerald-400/80 not-italic">something.</span>
              <motion.span
                className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full ml-3"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </h2>
            
            <p className="text-sm text-white/70 leading-relaxed font-light mb-12 max-w-md">
              Open to select client work, collaborations, and interesting problems.
              Usually respond within minutes, not days.
            </p>
            
            <EmailCard />
            <PhoneCard />
            
            {/* Response time indicator */}
            <div className="mt-6">
              <ResponseTimeIndicator />
            </div>
          </motion.div>
          
          {/* Right Column - Interactive widgets */}
          <div className="space-y-6">
            <ContactForm />
            <AvailabilityStatus />
            
            <div className="grid grid-cols-2 gap-4">
              <OfficeLocations />
              <SocialStats />
            </div>
            
            {/* Call to action buttons */}
            <div className="flex gap-3 pt-4">
              {[
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true', icon: '💼' },
                { label: 'GITHUB', href: '#', icon: '🐙' },
                { label: 'TWITTER', href: '#', icon: '🐦' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 font-mono text-[9px] text-white/60 hover:text-white/90 border border-white/10 px-4 py-3 hover:border-emerald-400/30 transition-all text-center flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xs">{s.icon}</span>
                  <span>{s.label} →</span>
                </motion.a>
              ))}
            </div>
            
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-center pt-4 border-t border-white/8"
            >
              <div className="font-mono text-[6px] text-white/30 tracking-widest">
                🚀 READY TO START · 24/7 RESPONSE
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}