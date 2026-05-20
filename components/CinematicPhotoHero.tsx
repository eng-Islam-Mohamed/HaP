'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getFeaturedPhoto } from '@/data/photos';
import { AmbientGlow } from './LuxuryBackground';

export default function CinematicPhotoHero() {
  const featured = getFeaturedPhoto();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24 px-6">
      {/* Ambient lighting */}
      <AmbientGlow color="gold" size={800} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <AmbientGlow color="burgundy" size={400} className="bottom-[10%] right-[15%]" />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Text above photo */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ornament-line mb-8">
            <div className="ornament-diamond" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl gold-text-gradient mb-5 text-balance">
            The girl this universe was made for.
          </h2>
          <p className="text-pearl/50 text-sm md:text-base tracking-wide max-w-lg mx-auto font-light text-balance">
            Every detail here exists because of you, Ikram.
          </p>
        </motion.div>

        {/* Cinematic Photo Frame */}
        <motion.div
          className="relative mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Outer Gold Border Glow */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/20 blur-sm" />

          {/* Photo Container */}
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 gold-border-glow">
            {/* Dark overlay at edges for cinematic look */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050507]/60 via-transparent to-[#050507]/30" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050507]/20 via-transparent to-[#050507]/20" />

            {/* The Photo */}
            <Image
              src={featured.src}
              alt={featured.alt}
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 60vw, 640px"
            />
          </div>

          {/* Caption below */}
          <motion.p
            className="font-serif text-pearl/60 italic text-sm md:text-base text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            &ldquo;{featured.caption}&rdquo;
          </motion.p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          className="ornament-line mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="ornament-diamond" />
        </motion.div>
      </div>
    </section>
  );
}
