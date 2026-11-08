'use client';

import { useEffect, useRef } from 'react';

interface SphereProps {
  className?: string;
  size?: number;
}

export function BioluminescentSphere({ className = '', size = 360 }: SphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.2;
    let angleY = 0.4;

    // Distribute points on sphere using Fibonacci spiral
    const numPoints = 680;
    const points: { x: number; y: number; z: number; isAccent: boolean }[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      points.push({
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(theta),
        isAccent: i % 11 === 0, // Accent particles for lavender phosphor glow
      });
    }

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.42;

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Subtle ambient depth glow
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.1);
      grad.addColorStop(0, 'rgba(0, 130, 124, 0.12)');
      grad.addColorStop(0.7, 'rgba(1, 38, 36, 0.05)');
      grad.addColorStop(1, 'rgba(1, 38, 36, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      angleY += 0.0035;
      angleX += 0.0018;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Sort points by projected Z for correct depth drawing
      const projected = points.map((p) => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = (z2 + 2) / 3;
        const px = cx + x1 * radius * scale;
        const py = cy + y2 * radius * scale;
        const alpha = Math.max(0.12, (z2 + 1) / 2);

        return { px, py, z2, scale, alpha, isAccent: p.isAccent };
      });

      projected.sort((a, b) => a.z2 - b.z2);

      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];

        if (pt.isAccent && pt.z2 > 0) {
          // Lavender Phosphor accent particle
          ctx.fillStyle = `rgba(253, 233, 255, ${pt.alpha})`;
        } else if (pt.z2 > 0.4) {
          // Luminous Aqua foreground particle
          ctx.fillStyle = `rgba(203, 255, 252, ${pt.alpha * 0.95})`;
        } else {
          // Deep water background particle
          ctx.fillStyle = `rgba(0, 130, 124, ${pt.alpha * 0.6})`;
        }

        ctx.beginPath();
        const dotRadius = Math.max(0.8, 1.85 * pt.scale);
        ctx.arc(pt.px, pt.py, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="w-full h-full max-w-full"
      />
    </div>
  );
}

