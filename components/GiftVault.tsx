'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { giftBoxes } from '@/data/loveContent';
import SectionHeader from './SectionHeader';

/* ─── Lock SVG Icon ───────────────────────────────────────────────── */

function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UnlockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.83-1" />
    </svg>
  );
}

/* ─── Gift Vault ──────────────────────────────────────────────────── */

export default function GiftVault() {
  const [openBoxId, setOpenBoxId] = useState<string | null>(null);

  const toggleBox = (id: string) => {
    setOpenBoxId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-spacing relative">
      <SectionHeader
        title="The Gift Vault"
        subtitle="Five little doors. Five pieces of my heart."
      />

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {giftBoxes.map((box, index) => {
          const isOpen = openBoxId === box.id;

          return (
            <motion.button
              key={box.id}
              className="glass-panel relative group overflow-hidden cursor-pointer text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              onClick={() => toggleBox(box.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -3 }}
              aria-label={`${isOpen ? 'Close' : 'Open'} gift: ${box.label}`}
            >
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  /* ── Locked State ──────────────────────────── */
                  <motion.div
                    key="locked"
                    className="p-8 md:p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LockIcon className="w-8 h-8 text-gold/40 mx-auto mb-6" />

                    <span className="block text-gold/30 text-xs tracking-[0.3em] uppercase mb-3">
                      Gift {String(box.number).padStart(2, '0')}
                    </span>

                    <h3 className="font-serif text-lg text-pearl mb-2">
                      {box.label}
                    </h3>

                    <span className="text-pearl/30 text-xs">Tap to open</span>
                  </motion.div>
                ) : (
                  /* ── Opened State ──────────────────────────── */
                  <motion.div
                    key="opened"
                    className="p-8 md:p-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <UnlockIcon className="w-7 h-7 text-gold/60 mx-auto mb-5" />

                    <h3 className="font-serif text-lg gold-text-gradient mb-4">
                      {box.label}
                    </h3>

                    <div className="w-10 h-px bg-gold/30 mx-auto mb-4" />

                    <p className="font-serif text-pearl/80 italic text-base leading-relaxed">
                      {box.content}
                    </p>

                    <span className="block text-pearl/25 text-xs mt-5">
                      Tap to close
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/40 transition-all duration-500" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
