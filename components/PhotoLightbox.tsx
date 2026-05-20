'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { photos, type PhotoItem } from '@/data/photos';

interface PhotoLightboxProps {
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function PhotoLightbox({
  isOpen,
  initialIndex,
  onClose,
}: PhotoLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync when opened with a new index
  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const currentPhoto = photos[currentIndex];
  const total = photos.length;

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Keyboard support
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, goNext, goPrev]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!currentPhoto) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/92 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8 md:px-12">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center text-pearl/50 hover:text-pearl transition-colors z-20"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                className="relative max-w-4xl w-full max-h-[75vh] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="relative w-full overflow-hidden rounded-lg border border-gold/10 shadow-[0_0_60px_rgba(201,169,110,0.08)]">
                  <Image
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain bg-black/50"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <motion.p
              key={`cap-${currentPhoto.id}`}
              className="font-serif text-pearl/70 italic text-sm md:text-base mt-5 text-center max-w-md"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              &ldquo;{currentPhoto.caption}&rdquo;
            </motion.p>

            {/* Counter */}
            <span className="text-pearl/30 text-[10px] tracking-[0.3em] uppercase mt-3">
              {currentIndex + 1} / {total}
            </span>

            {/* Navigation Buttons */}
            {total > 1 && (
              <>
                <button
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/15 bg-black/40 text-pearl/50 hover:text-pearl hover:border-gold/30 transition-all"
                  onClick={goPrev}
                  aria-label="Previous photo"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/15 bg-black/40 text-pearl/50 hover:text-pearl hover:border-gold/30 transition-all"
                  onClick={goNext}
                  aria-label="Next photo"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
