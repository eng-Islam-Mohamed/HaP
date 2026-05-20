'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { letters } from '@/data/loveContent';
import SectionHeader from './SectionHeader';

export default function LetterRoom() {
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);
  const selectedLetter = letters.find((l) => l.id === openLetterId);

  return (
    <section className="section-spacing relative">
      <SectionHeader
        title="The Letter Room"
        subtitle="Some words are too special to be sent only once."
      />

      {/* ── Letter Cards ─────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {letters.map((letter, index) => (
          <motion.button
            key={letter.id}
            className="glass-panel p-8 md:p-10 w-full md:w-[calc(33.333%-1.5rem)] min-w-[260px] cursor-pointer group text-center"
            onClick={() => setOpenLetterId(letter.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            whileHover={{
              y: -4,
              borderColor: 'rgba(201,169,110,0.3)',
              transition: { duration: 0.4 },
            }}
            aria-label={`Open letter: ${letter.title}`}
          >
            {/* Ornament */}
            <div className="w-8 h-px bg-gold/30 mx-auto mb-6 group-hover:bg-gold/50 transition-colors duration-500" />

            {/* Title */}
            <h3 className="font-serif text-lg md:text-xl text-pearl mb-2">
              {letter.title}
            </h3>

            {/* Subtitle */}
            <p className="text-pearl/40 text-xs tracking-widest uppercase">
              {letter.subtitle}
            </p>
          </motion.button>
        ))}
      </div>

      {/* ── Modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {openLetterId && selectedLetter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenLetterId(null)}
            />

            {/* Content */}
            <motion.div
              className="relative glass-panel-strong p-8 md:p-12 lg:p-16 max-w-2xl w-full border border-gold/20 max-h-[85vh] overflow-y-auto no-scrollbar"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-5 text-pearl/40 hover:text-pearl transition-colors text-xl leading-none p-2"
                onClick={() => setOpenLetterId(null)}
                aria-label="Close letter"
              >
                &#x2715;
              </button>

              {/* Ornament */}
              <div className="ornament-line mb-8">
                <div className="ornament-diamond" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl gold-text-gradient mb-2 text-center">
                {selectedLetter.title}
              </h3>

              {/* Subtitle */}
              <p className="text-pearl/40 text-xs tracking-widest uppercase text-center mb-8">
                {selectedLetter.subtitle}
              </p>

              {/* Divider */}
              <div className="luxury-divider mb-8" />

              {/* Letter Content */}
              <p className="text-pearl/80 text-base md:text-lg leading-[1.9] font-light font-serif italic text-center">
                {selectedLetter.content}
              </p>

              {/* Bottom Ornament */}
              <div className="ornament-diamond mx-auto mt-10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
