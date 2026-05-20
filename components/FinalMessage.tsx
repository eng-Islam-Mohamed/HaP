'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { finalMessageLines, lastSurprise } from '@/data/loveContent';
import { photos } from '@/data/photos';
import { Particles, AmbientGlow } from './LuxuryBackground';

export default function FinalMessage() {
  const [showSurprise, setShowSurprise] = useState(false);

  // Use the last photo for the final emotional section
  const finalPhoto = photos[photos.length - 1];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-spacing relative overflow-hidden">
      {/* Ambient Effects */}
      <AmbientGlow color="gold" size={800} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Particles count={30} />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Emotional Photo */}
        {finalPhoto && (
          <motion.div
            className="relative max-w-xs mx-auto mb-12 md:mb-16 rounded-2xl overflow-hidden border border-gold/15 gold-border-glow"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/50 via-transparent to-[#050507]/20 z-10 pointer-events-none" />

            <Image
              src={finalPhoto.src}
              alt={finalPhoto.alt}
              width={400}
              height={500}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 70vw, 300px"
            />
          </motion.div>
        )}

        {finalMessageLines.map((line, i) => {
          const isLastLine = i === finalMessageLines.length - 1;
          const isBirthdayLine = line.includes('Happy Birthday');

          return (
            <motion.p
              key={i}
              className={
                isLastLine
                  ? 'font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 gold-text-gradient font-semibold'
                  : isBirthdayLine
                  ? 'font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10 text-pearl'
                  : 'font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-pearl/80'
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.25, duration: 0.8 }}
            >
              {line}
            </motion.p>
          );
        })}

        {/* Ornament */}
        <motion.div
          className="ornament-line mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: finalMessageLines.length * 0.25 + 0.3 }}
        >
          <div className="ornament-diamond" />
        </motion.div>

        {/* ── Last Surprise Button ────────────────────────────── */}
        <AnimatePresence mode="wait">
          {!showSurprise ? (
            <motion.button
              key="btn"
              className="luxury-button mt-4"
              onClick={() => setShowSurprise(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: finalMessageLines.length * 0.25 + 0.8,
                duration: 0.8,
              }}
              exit={{ opacity: 0, y: -10 }}
              aria-label="Reveal the last surprise"
            >
              One Last Surprise
            </motion.button>
          ) : (
            <motion.div
              key="surprise"
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              {/* Small Divider */}
              <div className="luxury-divider mb-8" />

              {/* Surprise Text */}
              <p className="font-serif text-xl md:text-2xl text-pearl/90 italic leading-relaxed text-balance">
                {lastSurprise}
              </p>

              {/* Final Ornament */}
              <div className="ornament-diamond mx-auto mt-10" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-20">
          <span className="text-pearl/20 text-xs tracking-[0.2em] uppercase">
            Made with love, for Ikram
          </span>
        </div>
      </div>
    </section>
  );
}
