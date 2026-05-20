'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { timelineChapters, type TimelineChapter } from '@/data/loveContent';
import { getTimelinePhotos } from '@/data/photos';
import type { PhotoItem } from '@/data/photos';
import SectionHeader from './SectionHeader';

/* ─── Chapter Card ────────────────────────────────────────────────── */

function ChapterCard({
  chapter,
  index,
  photo,
}: {
  chapter: TimelineChapter;
  index: number;
  photo: PhotoItem | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative mb-16 md:mb-24 pl-16 md:pl-0"
    >
      {/* ── Timeline Node ────────────────────────────────────── */}
      <div className="absolute left-[1.35rem] md:left-1/2 top-3 -translate-x-1/2 z-10">
        <div className="w-3 h-3 rounded-full bg-gold/60 border-2 border-gold/30" />
        {isInView && (
          <div className="absolute inset-[-4px] rounded-full border border-gold/20 animate-pulse-ring" />
        )}
      </div>

      {/* ── Card ─────────────────────────────────────────────── */}
      <div
        className={clsx(
          'md:w-[calc(50%-2.5rem)]',
          isEven
            ? 'md:ml-auto md:pl-0'
            : 'md:mr-auto md:pr-0'
        )}
      >
        <div
          className="glass-panel overflow-hidden gold-border-glow"
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s',
          }}
        >
          {/* Optional Chapter Photo */}
          {photo && (
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 40vw"
              />
              {/* Cinematic gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,19,33,0.85)] via-transparent to-transparent" />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Chapter Badge */}
            <span className="inline-block text-gold/50 text-xs tracking-[0.3em] uppercase font-sans mb-3">
              Chapter {chapter.number}
            </span>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl gold-text-gradient mb-4">
              {chapter.title}
            </h3>

            {/* Divider */}
            <div className="w-12 h-px bg-gold/20 mb-4" />

            {/* Content */}
            <p className="text-pearl/70 text-base leading-relaxed font-light font-serif italic">
              {chapter.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Text Timeline ───────────────────────────────────────────────── */

export default function TextTimeline() {
  const timelinePhotos = getTimelinePhotos();

  return (
    <section className="section-spacing relative">
      <SectionHeader
        title="Our Story in Little Pieces of Time"
        subtitle="Some memories live in photos. Others live quietly in the heart."
      />

      <div className="relative max-w-4xl mx-auto mt-8">
        {/* Central Gold Line */}
        <div
          className="absolute left-[1.35rem] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(201,169,110,0.3) 10%, rgba(201,169,110,0.3) 90%, transparent)',
          }}
        />

        {/* Chapters */}
        {timelineChapters.map((chapter, i) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            index={i}
            photo={timelinePhotos[i] ?? null}
          />
        ))}
      </div>
    </section>
  );
}
