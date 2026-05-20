'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={clsx('text-center mb-16 md:mb-20', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Ornament */}
      <div className="ornament-line mb-8">
        <div className="ornament-diamond" />
      </div>

      {/* Title */}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl gold-text-gradient mb-4 text-balance">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-pearl/50 text-sm md:text-base tracking-wide max-w-lg mx-auto font-light text-balance">
          {subtitle}
        </p>
      )}

      {/* Bottom Divider */}
      <div className="luxury-divider mt-8" />
    </motion.div>
  );
}
