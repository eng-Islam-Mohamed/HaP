'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getEditorialPhotos } from '@/data/photos';
import SectionHeader from './SectionHeader';

/* ── Editorial Blocks Data ───────────────────────────────────────────── */

const blocks = [
  {
    tag: 'Cover Story',
    title: 'The Beauty of Her Presence',
    text: 'Some people enter life quietly and still change the entire atmosphere. Ikram is one of those rare people.',
    photoIndex: 0,
    layout: 'left' as const,
  },
  {
    tag: 'Feature',
    title: 'The Smile That Changes Everything',
    text: 'Her smile is not just something seen. It is something felt.',
    photoIndex: 1,
    layout: 'right' as const,
  },
  {
    tag: "Editor\u2019s Note",
    title: 'Why This Day Matters',
    text: 'Today matters because it belongs to someone whose existence deserves to be celebrated carefully, beautifully, and sincerely.',
    photoIndex: 2,
    layout: 'left' as const,
  },
  {
    tag: 'Final Line',
    title: 'She Is Rare',
    text: 'She is rare. She is loved. She is Ikram.',
    photoIndex: 3,
    layout: 'center' as const,
  },
];

/* ── Component ───────────────────────────────────────────────────────── */

export default function EditorialMagazine() {
  const editorialPhotos = getEditorialPhotos();

  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionHeader
        title="The Ikram Edition"
        subtitle="A small editorial tribute to the woman I love."
      />

      <div className="max-w-5xl mx-auto space-y-20 md:space-y-32">
        {blocks.map((block, i) => {
          const photo = editorialPhotos[block.photoIndex];
          const isCenter = block.layout === 'center';
          const isRight = block.layout === 'right';

          if (isCenter) {
            /* ── Center Layout (Final Line) ──────────────────── */
            return (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Tag */}
                <span className="text-gold/50 text-[10px] tracking-[0.4em] uppercase block mb-4">
                  {block.tag}
                </span>

                {/* Photo */}
                {photo && (
                  <div className="relative max-w-md mx-auto mb-8 rounded-xl overflow-hidden border border-gold/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/50 via-transparent to-transparent z-10 pointer-events-none" />
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={750}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 90vw, 450px"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl gold-text-gradient mb-5">
                  {block.title}
                </h3>

                {/* Text */}
                <p className="font-serif text-pearl/80 text-lg md:text-xl italic leading-relaxed max-w-lg mx-auto">
                  {block.text}
                </p>

                {/* Ornament */}
                <div className="ornament-diamond mx-auto mt-8" />
              </motion.div>
            );
          }

          /* ── Side-by-side Layout (Cover Story, Feature, Editor's Note) */
          return (
            <motion.div
              key={i}
              className={`flex flex-col ${
                isRight ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 lg:gap-16 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Photo Side */}
              {photo && (
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-xl overflow-hidden border border-gold/10 gold-border-glow">
                    {/* Cinematic overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/40 via-transparent to-[#050507]/20 z-10 pointer-events-none" />

                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={700}
                      height={900}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 95vw, 45vw"
                    />
                  </div>
                </div>
              )}

              {/* Text Side */}
              <div className={`w-full md:w-1/2 ${isRight ? 'md:text-right' : ''}`}>
                {/* Tag */}
                <span className="text-gold/50 text-[10px] tracking-[0.4em] uppercase block mb-4">
                  {block.tag}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl gold-text-gradient mb-6">
                  {block.title}
                </h3>

                {/* Decorative Line */}
                <div className={`w-16 h-px bg-gold/25 mb-6 ${isRight ? 'md:ml-auto' : ''}`} />

                {/* Text */}
                <p className="font-serif text-pearl/75 text-base md:text-lg italic leading-[1.9]">
                  {block.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
