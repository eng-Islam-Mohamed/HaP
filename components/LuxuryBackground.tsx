'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

// ─── Particle Data ──────────────────────────────────────────────────

interface ParticleData {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): ParticleData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 13 + 12,
    delay: Math.random() * 8,
  }));
}

// ─── Particles ──────────────────────────────────────────────────────

export function Particles({ count = 50 }: { count?: number }) {
  const particles = useMemo(() => generateParticles(count), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ─── Ambient Glow ───────────────────────────────────────────────────

const glowColors: Record<string, string> = {
  gold: 'rgba(201,169,110,0.06)',
  burgundy: 'rgba(114,47,55,0.06)',
  rose: 'rgba(212,131,138,0.04)',
};

export function AmbientGlow({
  color = 'gold',
  size = 600,
  className = '',
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const bg = glowColors[color] ?? glowColors.gold;

  return (
    <div
      className={`absolute rounded-full blur-[150px] pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
      }}
    />
  );
}

// ─── Combined Default ───────────────────────────────────────────────

export default function LuxuryBackground() {
  return (
    <>
      <Particles count={50} />
      <AmbientGlow
        color="gold"
        size={600}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
