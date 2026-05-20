'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface AudioControllerProps {
  enabled: boolean;
}

export default function AudioController({ enabled }: AudioControllerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsVisible(true);
      })
      .catch(() => {
        // No audio file or autoplay blocked — hide controller silently
        setIsVisible(false);
      });

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [enabled]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 glass-panel w-11 h-11 flex items-center justify-center border border-gold/20 cursor-pointer"
      style={{ borderRadius: '0.75rem' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggle}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        /* Speaker Playing */
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(201,169,110,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="rgba(201,169,110,0.15)" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        /* Speaker Muted */
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(201,169,110,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="rgba(201,169,110,0.1)" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </motion.button>
  );
}
