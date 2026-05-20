'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { unlockTexts } from '@/data/loveContent';
import { Particles, AmbientGlow } from '@/components/LuxuryBackground';

interface UnlockMomentProps {
  onComplete: () => void;
}

export default function UnlockMoment({ onComplete }: UnlockMomentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalTexts = unlockTexts.length;

  const advance = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (currentIndex < totalTexts) {
      // Show each text for 2.5 seconds before advancing
      const timer = setTimeout(advance, 2500);
      return () => clearTimeout(timer);
    }

    // All texts have been shown — wait 2s then complete
    const completeTimer = setTimeout(onComplete, 2000);
    return () => clearTimeout(completeTimer);
  }, [currentIndex, totalTexts, advance, onComplete]);

  const isLastText = currentIndex === totalTexts - 1;

  return (
    <motion.section
      className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-[#050507]"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {/* Ambient lighting */}
      <AmbientGlow
        color="gold"
        size={900}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Floating particles */}
      <Particles count={80} />

      {/* Sequential text reveal */}
      <div className="relative z-10 flex items-center justify-center min-h-[200px] px-6">
        <AnimatePresence mode="wait">
          {currentIndex < totalTexts && (
            <motion.h1
              key={currentIndex}
              className={`font-serif text-3xl md:text-5xl lg:text-6xl text-center max-w-3xl ${
                isLastText ? 'gold-text-shimmer' : 'text-pearl'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2 }}
            >
              {unlockTexts[currentIndex]}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Gold horizontal light sweep */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.section>
  );
}
