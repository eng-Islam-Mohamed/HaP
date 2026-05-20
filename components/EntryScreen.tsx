'use client';

import { motion } from 'framer-motion';
import { entryTexts } from '@/data/loveContent';
import { Particles, AmbientGlow } from '@/components/LuxuryBackground';

interface EntryScreenProps {
  onEnter: () => void;
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507]"
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      {/* Ambient lighting */}
      <AmbientGlow
        color="gold"
        size={700}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <AmbientGlow
        color="burgundy"
        size={400}
        className="top-[15%] right-[10%]"
      />

      {/* Floating particles */}
      <Particles count={60} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        {/* Sequential entry texts */}
        {entryTexts.map((text, i) => (
          <motion.p
            key={i}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-pearl/80 leading-relaxed mb-8 text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 1.8 + 0.5,
              duration: 1.4,
              ease: 'easeOut',
            }}
          >
            {text}
          </motion.p>
        ))}

        {/* Ornament divider */}
        <motion.div
          className="ornament-line mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: entryTexts.length * 1.8 + 0.5,
            duration: 1,
          }}
        >
          <div className="ornament-diamond" />
        </motion.div>

        {/* Enter button */}
        <motion.button
          className="luxury-button mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: entryTexts.length * 1.8 + 2,
            duration: 1.2,
          }}
          onClick={onEnter}
          aria-label="Enter the birthday experience"
        >
          Enter Your Universe
        </motion.button>
      </div>
    </motion.section>
  );
}
