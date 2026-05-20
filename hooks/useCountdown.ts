'use client';

import { useState, useEffect, useCallback } from 'react';
import { BIRTHDAY_UNLOCK_DATE } from '@/data/loveContent';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isUnlocked: boolean;
  isLoading: boolean;
}

/**
 * Reactive countdown hook targeting BIRTHDAY_UNLOCK_DATE.
 * Returns `isLoading: true` during SSR / first hydration frame,
 * then ticks every second until unlock.
 *
 * Developer preview: set NEXT_PUBLIC_BYPASS_BIRTHDAY_LOCK=true
 * in .env.local to skip the lock and preview the full experience.
 */
export function useCountdown(): CountdownTime {
  const bypass =
    process.env.NEXT_PUBLIC_BYPASS_BIRTHDAY_LOCK === 'true';

  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isUnlocked: bypass,
    isLoading: !bypass,
  });

  const calculate = useCallback((): CountdownTime => {
    const target = new Date(BIRTHDAY_UNLOCK_DATE).getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isUnlocked: true,
        isLoading: false,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isUnlocked: false,
      isLoading: false,
    };
  }, []);

  useEffect(() => {
    // First paint with real values
    setTime(calculate());

    const interval = setInterval(() => {
      const next = calculate();
      setTime(next);
      if (next.isUnlocked) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculate]);

  return time;
}
