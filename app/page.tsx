'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';

import EntryScreen from '@/components/EntryScreen';
import CountdownScreen from '@/components/CountdownScreen';
import UnlockMoment from '@/components/UnlockMoment';
import CinematicPhotoHero from '@/components/CinematicPhotoHero';
import LetterRoom from '@/components/LetterRoom';
import LuxuryPhotoGallery from '@/components/LuxuryPhotoGallery';
import ConstellationReasons from '@/components/ConstellationReasons';
import EditorialMagazine from '@/components/EditorialMagazine';
import TextTimeline from '@/components/TextTimeline';
import GiftVault from '@/components/GiftVault';
import FutureDatesPassport from '@/components/FutureDatesPassport';
import BirthdayCertificate from '@/components/BirthdayCertificate';
import FinalMessage from '@/components/FinalMessage';
import AudioController from '@/components/AudioController';

type Phase = 'entry' | 'countdown' | 'unlock' | 'experience';

export default function Home() {
  const { isUnlocked, isLoading } = useCountdown();
  const [phase, setPhase] = useState<Phase>('entry');
  const [audioEnabled, setAudioEnabled] = useState(false);

  /* ── Handlers ────────────────────────────────────────────────────── */

  const handleEnter = useCallback(() => {
    setAudioEnabled(true);

    if (isUnlocked) {
      setPhase('unlock');
    } else {
      setPhase('countdown');
    }
  }, [isUnlocked]);

  const handleCountdownComplete = useCallback(() => {
    setPhase('unlock');
  }, []);

  const handleUnlockComplete = useCallback(() => {
    setPhase('experience');
  }, []);

  /* ── Render ──────────────────────────────────────────────────────── */

  // Wait for hydration before committing to a flow
  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#050507]" />
    );
  }

  return (
    <>
      <main>
        {/* ── Phase Screens (stacked, with exit animations) ──── */}
        <AnimatePresence mode="wait">
          {phase === 'entry' && (
            <EntryScreen key="entry" onEnter={handleEnter} />
          )}

          {phase === 'countdown' && (
            <CountdownScreen
              key="countdown"
              onComplete={handleCountdownComplete}
            />
          )}

          {phase === 'unlock' && (
            <UnlockMoment
              key="unlock"
              onComplete={handleUnlockComplete}
            />
          )}
        </AnimatePresence>

        {/* ── Full Experience (rendered after unlock) ─────────── */}
        {phase === 'experience' && (
          <div>
            {/* 1. Cinematic Photo Hero — first impression with her photo */}
            <CinematicPhotoHero />

            <div className="luxury-divider my-4" />

            {/* 2. Letter Room — love letters */}
            <LetterRoom />

            <div className="luxury-divider my-4" />

            {/* 3. Photo Gallery — all her photos in luxury grid */}
            <LuxuryPhotoGallery />

            <div className="luxury-divider my-4" />

            {/* 4. Constellation — interactive star reasons */}
            <ConstellationReasons />

            <div className="luxury-divider my-4" />

            {/* 5. Editorial Magazine — high-end magazine tribute */}
            <EditorialMagazine />

            <div className="luxury-divider my-4" />

            {/* 6. Timeline — story chapters with select photos */}
            <TextTimeline />

            <div className="luxury-divider my-4" />

            {/* 7. Gift Vault — lockable gifts */}
            <GiftVault />

            <div className="luxury-divider my-4" />

            {/* 8. Future Passport — promises & dreams */}
            <FutureDatesPassport />

            <div className="luxury-divider my-4" />

            {/* 9. Certificate — official appreciation */}
            <BirthdayCertificate />

            <div className="luxury-divider my-4" />

            {/* 10. Final Message — emotional ending with photo */}
            <FinalMessage />
          </div>
        )}
      </main>

      {/* ── Floating Audio Controller ────────────────────────── */}
      <AudioController enabled={audioEnabled} />
    </>
  );
}
