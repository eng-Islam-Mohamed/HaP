'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import {
  countdownTitle,
  countdownSubtitle,
  countdownEmotionalText,
} from '@/data/loveContent';
import { Particles, AmbientGlow } from '@/components/LuxuryBackground';

interface CountdownScreenProps {
  onComplete: () => void;
}

const units = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export default function CountdownScreen({ onComplete }: CountdownScreenProps) {
  const { days, hours, minutes, seconds, isUnlocked, isLoading } =
    useCountdown();

  // Transition out once the countdown reaches zero
  useEffect(() => {
    if (!isLoading && isUnlocked) {
      onComplete();
    }
  }, [isLoading, isUnlocked, onComplete]);

  const values = isLoading
    ? ['00', '00', '00', '00']
    : [pad(days), pad(hours), pad(minutes), pad(seconds)];

  return (
    <motion.section
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050507]"
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      {/* Ambient lighting */}
      <AmbientGlow
        color="gold"
        size={600}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Floating particles */}
      <Particles count={40} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h1
          className="font-serif text-2xl md:text-4xl gold-text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {countdownTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-pearl/50 text-sm tracking-[0.15em] uppercase mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {countdownSubtitle}
        </motion.p>

        {/* Emotional text */}
        <motion.p
          className="text-pearl/40 text-sm italic font-serif mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {countdownEmotionalText}
        </motion.p>

        {/* Countdown grid */}
        <motion.div
          className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
        >
          {units.map((label, i) => (
            <div
              key={label}
              className="glass-panel-strong gold-border-glow p-3 md:p-6 text-center overflow-hidden"
            >
              <span className="block font-serif text-3xl md:text-5xl gold-text-gradient font-semibold leading-none">
                {values[i]}
              </span>
              <span className="block text-pearl/40 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-2 md:mt-3">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Waiting text */}
        <motion.p
          className="mt-16 text-pearl/30 text-xs tracking-[0.15em] uppercase animate-glow-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Waiting for midnight...
        </motion.p>
      </div>
    </motion.section>
  );
}
