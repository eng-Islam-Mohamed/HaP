'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { reasons, constellationEdges } from '@/data/loveContent';
import SectionHeader from './SectionHeader';

export default function ConstellationReasons() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedReason = reasons.find((r) => r.id === selectedId);

  /* Build lookup for constellation line endpoints */
  const reasonMap = useMemo(() => {
    const map = new Map<number, { x: number; y: number }>();
    reasons.forEach((r) => map.set(r.id, { x: r.x, y: r.y }));
    return map;
  }, []);

  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionHeader
        title="The Galaxy of Reasons"
        subtitle="Every star holds something I love about you."
      />

      {/* ── Constellation Container ──────────────────────────── */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/10] mt-8">
        <div className="absolute inset-0 bg-navy-deep/50 rounded-2xl border border-gold/5 overflow-hidden">
          {/* Ambient background stars (tiny static dots) */}
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`bg-star-${i}`}
              className="absolute rounded-full bg-pearl/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 1.5 + 0.5,
                height: Math.random() * 1.5 + 0.5,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`,
              }}
            />
          ))}

          {/* ── Constellation Lines (SVG) ─────────────────────── */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {constellationEdges.map(([fromId, toId], i) => {
              const from = reasonMap.get(fromId);
              const to = reasonMap.get(toId);
              if (!from || !to) return null;
              return (
                <motion.line
                  key={`line-${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(201,169,110,0.1)"
                  strokeWidth="0.12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                />
              );
            })}
          </svg>

          {/* ── Interactive Stars ─────────────────────────────── */}
          {reasons.map((reason) => {
            const isSelected = selectedId === reason.id;
            return (
              <motion.button
                key={reason.id}
                className="absolute group cursor-pointer z-10"
                style={{
                  left: `${reason.x}%`,
                  top: `${reason.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() =>
                  setSelectedId(isSelected ? null : reason.id)
                }
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reason.delay * 0.2,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.6 }}
                aria-label={`Star ${reason.id}: Tap to reveal`}
              >
                {/* Glow Ring */}
                <div
                  className={clsx(
                    'absolute rounded-full blur-md transition-all duration-700',
                    isSelected
                      ? 'bg-gold/40 scale-[4] opacity-100'
                      : 'bg-gold/20 scale-100 opacity-0 group-hover:opacity-70'
                  )}
                  style={{
                    width: reason.size * 2.5,
                    height: reason.size * 2.5,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Star Dot */}
                <div
                  className={clsx(
                    'relative rounded-full transition-all duration-500',
                    isSelected
                      ? 'bg-gold shadow-[0_0_15px_rgba(201,169,110,0.6)]'
                      : 'bg-gold/70 animate-star-twinkle'
                  )}
                  style={{
                    width: reason.size * 2.5,
                    height: reason.size * 2.5,
                    animationDelay: `${reason.delay}s`,
                  }}
                />
              </motion.button>
            );
          })}

          {/* ── Selected Reason Overlay ───────────────────────── */}
          <AnimatePresence>
            {selectedReason && (
              <motion.div
                className="absolute bottom-4 left-1/2 z-20 glass-panel-strong p-5 md:p-7 max-w-sm md:max-w-md text-center border border-gold/20"
                style={{ transform: 'translateX(-50%)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-gold/60 text-[10px] tracking-widest uppercase block mb-2">
                  Star {selectedReason.id}
                </span>
                <p className="font-serif text-sm md:text-base text-pearl/90 italic leading-relaxed">
                  &ldquo;{selectedReason.text}&rdquo;
                </p>
                <span className="text-pearl/30 text-[10px] mt-3 block">
                  Tap another star to explore
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hint */}
      <p className="text-pearl/30 text-xs text-center mt-6">
        Touch the stars to discover each reason
      </p>
    </section>
  );
}
