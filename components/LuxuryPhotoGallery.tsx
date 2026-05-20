'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { photos } from '@/data/photos';
import SectionHeader from './SectionHeader';
import PhotoLightbox from './PhotoLightbox';

export default function LuxuryPhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="section-spacing relative">
      <SectionHeader
        title="The Gallery of Ikram"
        subtitle="Some beauty does not need to be explained. It only needs to be seen gently."
      />

      {/* ── Editorial Grid ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((photo, index) => {
            // Make featured (first) photo span 2 rows on desktop
            const isFeatured = index === 0;

            return (
              <motion.button
                key={photo.id}
                className={`group relative overflow-hidden rounded-xl border border-gold/8 cursor-pointer ${
                  isFeatured
                    ? 'col-span-2 md:col-span-1 md:row-span-2'
                    : ''
                }`}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.015 }}
                aria-label={`View photo: ${photo.caption}`}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden ${
                  isFeatured ? 'aspect-[3/4]' : 'aspect-square'
                }`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={
                      isFeatured
                        ? '(max-width: 768px) 95vw, 33vw'
                        : '(max-width: 768px) 48vw, 33vw'
                    }
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-5">
                    <p className="font-serif text-pearl/90 italic text-xs md:text-sm leading-relaxed">
                      &ldquo;{photo.caption}&rdquo;
                    </p>
                  </div>

                  {/* Subtle gold border on hover */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 rounded-xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
