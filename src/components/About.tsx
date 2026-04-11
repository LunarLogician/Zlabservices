'use client';

import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';

const GRID_BG = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,0.02) 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
};

// Typewriter effect with glitch
const TypewriterGlitch = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (displayText.length === text.length && Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, [displayText.length, text.length]);
  
  return (
    <span className={`relative ${isGlitching ? 'animate-glitch' : ''}`}>
      {displayText}
      {displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-emerald-400 ml-0.5"
        />
      )}
    </span>
  );
};

// Interactive 3D Cube that follows cursor
const InteractiveCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cubeRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * 30;
      const rotateX = ((e.clientY - centerY) / rect.height) * -30;
      setRotation({ x: rotateX, y: rotateY });
    }
  };
  
  return (
    <motion.div
      ref={cubeRef}
      className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block pointer-events-auto"
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cube faces */}
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, i) => (
          <motion.div
            key={face}
            className={`absolute w-full h-full border border-emerald-400/20 bg-emerald-400/5 backdrop-blur-sm
              flex items-center justify-center text-emerald-400/40 font-mono text-xs`}
            style={{
              transform: `rotateY(${face === 'front' ? 0 : face === 'back' ? 180 : face === 'right' ? 90 : face === 'left' ? -90 : 0}deg)
                         rotateX(${face === 'top' ? 90 : face === 'bottom' ? -90 : 0}deg)
                         translateZ(128px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            {face.toUpperCase()}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Holographic projection effect
const HolographicBadge = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  
  return (
    <motion.div
      className="relative overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-emerald-400/5 to-transparent p-4"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16,185,129,0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border border-emerald-400/40 rounded-full flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
        </motion.div>
        <div>
          <div className="font-mono text-[8px] text-emerald-400/80 tracking-widest">VERIFIED</div>
          <div className="font-mono text-[6px] text-white/40">HOLOGRAPHIC SEAL</div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated code rain effect (Matrix style)
const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/=+-*';
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(16,185,129,0.3)';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
    />
  );
};

// Particle network (connecting dots that follow mouse)
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Initialize particles
      particlesRef.current = Array(50).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Attract to mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += dx * 0.005;
          p.vy += dy * 0.005;
          // Limit speed
          const speed = Math.hypot(p.vx, p.vy);
          if (speed > 2) {
            p.vx = (p.vx / speed) * 2;
            p.vy = (p.vy / speed) * 2;
          }
        }
        
        ctx.fillStyle = 'rgba(16,185,129,0.5)';
        ctx.fillRect(p.x, p.y, 2, 2);
      });
      
      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(16,185,129,${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      onMouseMove={handleMouseMove}
    />
  );
};

// Floating skill tags with orbit animation
const FloatingSkills = () => {
  const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'Flutter', 'AWS', 'Docker', 'MongoDB'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={skill}
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
            style={{ x, y }}
            animate={{
              x: mousePosition.x * 0.5 + x,
              y: mousePosition.y * 0.5 + y,
              rotate: [0, 360],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="font-mono text-[8px] text-emerald-400/60 border border-emerald-400/20 px-2 py-1 bg-black/50 backdrop-blur-sm whitespace-nowrap">
              {skill}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Digital fingerprint scanner effect
const FingerprintScanner = () => {
  const [scanPosition, setScanPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-emerald-400/10 to-transparent"
        animate={{ y: [0, -100, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[6px] text-emerald-400/40">
        SCANNING IDENTITY...
      </div>
    </div>
  );
};

// Quantum state badge (collapses on click)
const QuantumBadge = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [quantumState, setQuantumState] = useState<'0' | '1'>('0');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(Math.random() > 0.5 ? '0' : '1');
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="border border-purple-400/30 bg-purple-400/5 px-3 py-2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            className="text-purple-400/60 text-xs"
          >
            ⚛️
          </motion.div>
          <div className="font-mono text-[8px] text-purple-400/80 tracking-widest">
            QUANTUM STATE: |{quantumState}&gt;
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isCollapsed ? 0 : 'auto', opacity: isCollapsed ? 0 : 1 }}
          className="overflow-hidden"
        >
          <div className="mt-2 pt-2 border-t border-purple-400/20">
            <div className="font-mono text-[6px] text-white/40">
              Superposition collapsed upon observation
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function About() {
  const [isHologramActive, setIsHologramActive] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  const credentials = [
    { label: 'CEH CERTIFIED', detail: 'Ethical Hacker', icon: '🔓' },
    { label: '4+ LIVE PRODUCTS', detail: 'In production', icon: '⚡' },
    { label: '10K+ INSTALLS', detail: 'VS Code extensions', icon: '📦' },
    { label: 'BAHRIA UNIVERSITY', detail: 'CS Student', icon: '🎓' },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 md:px-10 overflow-hidden border-y border-white/8"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setCursorText(`${Math.floor(x)}%, ${Math.floor(y)}%`);
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
      <CodeRain />
      <ParticleNetwork />
      <InteractiveCube />
      <FloatingSkills />
      <FingerprintScanner />
      
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

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Unexpected interactive elements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
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
            <TypewriterGlitch text="Small team." delay={0} />
            <br />
            <span className="text-emerald-400/80 not-italic">
              <TypewriterGlitch text="Big output." delay={1.5} />
            </span>
          </h2>
          
          <div className="space-y-5 text-sm text-white/75 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              ZLab is a product-first AI lab. We don&apos;t consult —{' '}
              <span className="text-emerald-400/80">we build.</span> Every product starts
              with a sharp insight and ships as a real, working product in the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Founded by a CS student who refused to wait until graduation to start
              building. We move fast, ship real things, and keep the team lean on purpose.
            </motion.p>
          </div>
          
          {/* Unexpected: Holographic badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <HolographicBadge />
          </motion.div>
          
          {/* Unexpected: Quantum badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-4"
          >
            <QuantumBadge />
          </motion.div>
        </motion.div>

        {/* Right Column - Founder card with insane interactions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Glowing border that follows cursor */}
          <div className="absolute -inset-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 backdrop-blur-sm overflow-hidden">
            {/* Identity with 3D flip on hover */}
            <motion.div
              className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.06] relative"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-14 h-14 border border-white/[0.15] flex items-center justify-center font-mono text-sm text-white/60 flex-shrink-0 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-400/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                MZ
              </motion.div>
              <div>
                <motion.div 
                  className="text-white font-light text-lg"
                  whileHover={{ color: 'rgba(16,185,129,0.8)' }}
                >
                  Muhammad Zubair
                </motion.div>
                <div className="font-mono text-[10px] text-white/75 tracking-widest mt-0.5 flex items-center gap-2">
                  FOUNDER · FULL-STACK DEV
                  <motion.span
                    className="w-1 h-1 bg-emerald-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio with interactive highlight */}
            <motion.p
              className="text-sm text-white/75 leading-relaxed font-light mb-8 relative"
              whileHover={{ letterSpacing: '0.3px' }}
              transition={{ duration: 0.3 }}
            >
              Full-Stack Developer with 4+ years building AI-powered SaaS products,
              RESTful APIs, and scalable web applications. Node.js Team Lead.
              Always learning, always shipping.
            </motion.p>

            {/* Credentials list with unexpected animations */}
            <div className="space-y-0 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center py-2.5 border-b border-white/[0.04] last:border-b-0 group/cred relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-50">{c.icon}</span>
                    <span className="font-mono text-[10px] text-white/75 tracking-wider">
                      {c.label}
                    </span>
                  </div>
                  <span className="text-xs text-white/70 font-light flex items-center gap-1">
                    {c.detail}
                    <motion.span
                      className="opacity-0 group-hover/cred:opacity-100"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 -translate-x-full group-hover/cred:translate-x-0 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Links with unexpected hover effects */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/company/devpost-ai/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-mono text-[10px] text-white/75 border border-white/10 px-4 py-2 overflow-hidden group/link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">LINKEDIN →</span>
                <motion.div
                  className="absolute inset-0 bg-emerald-400/20 -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300"
                />
              </motion.a>
              
              {/* Unexpected: Live cursor tracker */}
              <motion.div
                className="font-mono text-[7px] text-white/30 border border-white/5 px-2 py-2 flex items-center"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🖱️ {cursorText || '0%, 0%'}
              </motion.div>
            </div>
            
            {/* Unexpected: Bio-rhythm monitor */}
            <motion.div
              className="mt-6 pt-4 border-t border-white/8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/20 to-transparent" />
                <div className="font-mono text-[6px] text-white/30 tracking-widest">ACTIVE</div>
                <motion.div
                  className="w-1 h-1 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Unexpected: Hidden easter egg (Konami code detector) */}
      <EasterEgg />
    </section>
  );
}

// Hidden easter egg component
const EasterEgg = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [showEgg, setShowEgg] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key];
      if (newSequence.length > konamiCode.length) newSequence.shift();
      setSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setShowEgg(true);
        setTimeout(() => setShowEgg(false), 5000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);
  
  if (!showEgg) return null;
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-black/90 border border-emerald-400/50 p-4 rounded-lg shadow-2xl"
    >
      <div className="font-mono text-[10px] text-emerald-400">
        🥚 KONAMI CODE ACTIVATED! 🥚
        <div className="text-white/60 text-[8px] mt-1">You found the secret!</div>
      </div>
    </motion.div>
  );
};
