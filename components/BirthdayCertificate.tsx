'use client';

import { motion } from 'framer-motion';
import {
  certificateTitle,
  certificateRecipient,
  certificateBody,
  certificateSigned,
} from '@/data/loveContent';

export default function BirthdayCertificate() {
  return (
    <section className="section-spacing relative">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* ── Outer Frame ─────────────────────────────────────── */}
        <div
          className="p-1 md:p-1.5 rounded-2xl border-2 border-gold/25 gold-border-glow"
          style={{
            background:
              'linear-gradient(135deg, rgba(201,169,110,0.05), transparent 50%, rgba(201,169,110,0.05))',
          }}
        >
          {/* Inner Frame */}
          <div className="p-1 rounded-xl border border-gold/15">
            {/* Certificate Content */}
            <div className="bg-navy-deep/90 rounded-lg p-8 md:p-12 lg:p-16 text-center">
              {/* Top Ornament */}
              <div className="ornament-line mb-8">
                <div className="ornament-diamond" />
              </div>

              {/* Label */}
              <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase block mb-6">
                Official Document
              </span>

              {/* Title */}
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl gold-text-gradient mb-8 text-balance">
                {certificateTitle}
              </h2>

              {/* Divider */}
              <div className="luxury-divider mb-8" />

              {/* Presented To */}
              <span className="text-pearl/40 text-xs tracking-[0.2em] uppercase block mb-3">
                Presented to
              </span>

              {/* Recipient Name */}
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl gold-text-shimmer mb-8">
                {certificateRecipient}
              </h3>

              {/* Body */}
              <p className="font-serif text-pearl/70 text-base md:text-lg leading-relaxed italic max-w-xl mx-auto mb-10 text-balance">
                {certificateBody}
              </p>

              {/* Divider */}
              <div className="luxury-divider mb-8" />

              {/* Seal (SVG) */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="mx-auto mb-6"
                aria-hidden="true"
              >
                {/* Outer dashed ring */}
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="rgba(201,169,110,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
                {/* Middle ring */}
                <circle
                  cx="40"
                  cy="40"
                  r="28"
                  fill="none"
                  stroke="rgba(201,169,110,0.2)"
                  strokeWidth="0.5"
                />
                {/* Inner ring */}
                <circle
                  cx="40"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke="rgba(201,169,110,0.15)"
                  strokeWidth="0.5"
                />
                {/* Center diamond */}
                <rect
                  x="37"
                  y="37"
                  width="6"
                  height="6"
                  transform="rotate(45 40 40)"
                  fill="rgba(201,169,110,0.4)"
                />
                {/* Small decorative dots */}
                <circle cx="40" cy="16" r="1.5" fill="rgba(201,169,110,0.25)" />
                <circle cx="40" cy="64" r="1.5" fill="rgba(201,169,110,0.25)" />
                <circle cx="16" cy="40" r="1.5" fill="rgba(201,169,110,0.25)" />
                <circle cx="64" cy="40" r="1.5" fill="rgba(201,169,110,0.25)" />
              </svg>

              {/* Signed */}
              <span className="text-pearl/40 text-xs tracking-[0.2em] uppercase block mb-2">
                Signed with love
              </span>

              <p className="font-serif text-xl md:text-2xl text-gold/70 italic">
                {certificateSigned}
              </p>

              {/* Bottom Ornament */}
              <div className="ornament-line mt-8">
                <div className="ornament-diamond" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
