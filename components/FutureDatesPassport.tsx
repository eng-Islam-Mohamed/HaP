'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { passportStamps } from '@/data/loveContent';
import SectionHeader from './SectionHeader';

export default function FutureDatesPassport() {
  const [openStampId, setOpenStampId] = useState<string | null>(null);
  const selectedStamp = passportStamps.find((s) => s.id === openStampId);

  return (
    <section className="section-spacing relative">
      <SectionHeader
        title="The Passport of Future Moments"
        subtitle="Promises, dreams, and beautiful days waiting for us."
      />

      {/* ── Passport Container ───────────────────────────────── */}
      <div className="max-w-4xl mx-auto">
        {/* Outer Frame */}
        <div className="glass-panel-strong p-1 md:p-2 rounded-2xl border border-gold/15 gold-border-glow">
          {/* Inner Passport */}
          <div className="bg-navy-deep/80 rounded-xl p-6 md:p-10">
            {/* Passport Header */}
            <div className="text-center mb-10">
              <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase block mb-2">
                Passport
              </span>
              <h3 className="font-serif text-xl md:text-2xl gold-text-gradient">
                Future Moments
              </h3>
              <div className="luxury-divider mt-4" />
            </div>

            {/* ── Stamps Grid ────────────────────────────────── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {passportStamps.map((stamp, index) => (
                <motion.button
                  key={stamp.id}
                  className="group cursor-pointer p-4 md:p-6 rounded-xl border border-dashed border-gold/15 hover:border-gold/30 hover:bg-gold/5 transition-all duration-400"
                  onClick={() => setOpenStampId(stamp.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  aria-label={`Open stamp: ${stamp.title}`}
                >
                  {/* Stamp Circle */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold/20 mx-auto mb-3 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-400">
                    <span className="font-serif text-gold/50 text-lg md:text-xl group-hover:text-gold transition-colors duration-400">
                      {stamp.title.charAt(0)}
                    </span>
                  </div>

                  {/* Title */}
                  <p className="font-serif text-sm md:text-base text-pearl/80 text-center">
                    {stamp.title}
                  </p>

                  {/* Small Line */}
                  <div className="w-6 h-px bg-gold/20 mx-auto mt-2" />
                </motion.button>
              ))}
            </div>

            {/* Passport Footer */}
            <div className="text-center mt-10">
              <span className="text-pearl/25 text-[10px] tracking-[0.3em] uppercase">
                Valid Forever &bull; Made With Love
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stamp Detail Modal ───────────────────────────────── */}
      <AnimatePresence>
        {openStampId && selectedStamp && (
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
              onClick={() => setOpenStampId(null)}
            />

            {/* Content */}
            <motion.div
              className="relative glass-panel-strong p-8 md:p-12 max-w-md w-full border border-gold/20"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-5 text-pearl/40 hover:text-pearl transition-colors text-xl leading-none p-2"
                onClick={() => setOpenStampId(null)}
                aria-label="Close stamp"
              >
                &#x2715;
              </button>

              {/* Large Stamp Circle */}
              <div className="w-20 h-20 rounded-full border-2 border-gold/30 mx-auto mb-6 flex items-center justify-center">
                <span className="text-gold text-2xl font-serif">
                  {selectedStamp.title.charAt(0)}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl gold-text-gradient text-center mb-2">
                {selectedStamp.title}
              </h3>

              {/* Subtitle */}
              <p className="text-pearl/40 text-xs tracking-widest uppercase text-center mb-6">
                A Promise
              </p>

              {/* Divider */}
              <div className="luxury-divider mb-6" />

              {/* Promise */}
              <p className="font-serif text-pearl/80 italic text-base md:text-lg leading-relaxed text-center">
                {selectedStamp.promise}
              </p>

              {/* Redeemable Stamp */}
              <div className="mt-8 text-center">
                <span className="inline-block px-4 py-2 border border-gold/20 rounded text-gold/40 text-[10px] tracking-[0.3em] uppercase">
                  Redeemable
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
