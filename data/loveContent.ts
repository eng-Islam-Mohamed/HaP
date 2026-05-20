/* ===================================================================
 *  data/loveContent.ts
 *  All editable content for "A Universe Made Only For Ikram"
 *  Edit texts here — the rest of the codebase reads from this file.
 * =================================================================== */

// ─── Types ───────────────────────────────────────────────────────────

export interface Letter {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface Reason {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export interface TimelineChapter {
  id: string;
  number: string;
  title: string;
  content: string;
}

export interface GiftBox {
  id: string;
  number: number;
  label: string;
  content: string;
}

export interface PassportStamp {
  id: string;
  title: string;
  promise: string;
}

// ─── Constants ───────────────────────────────────────────────────────

/** The exact moment the birthday experience unlocks.
 *  2026-05-21T00:00:00+01:00  =  midnight, Africa/Algiers (CET) */
export const BIRTHDAY_UNLOCK_DATE = "2026-05-21T00:00:00+01:00";

export const HER_NAME = "Ikram";

// ─── 1. Entry Screen ────────────────────────────────────────────────

export const entryTexts = [
  "Some people are not meant to receive ordinary gifts.",
  "Some people deserve a whole universe.",
  "This one was made only for you, Ikram.",
];

// ─── 2. Countdown ───────────────────────────────────────────────────

export const countdownTitle = "Ikram\u2019s birthday universe is almost ready.";
export const countdownSubtitle = "Locked until 21 May at 00:00.";
export const countdownEmotionalText =
  "When midnight arrives, this universe becomes yours.";

// ─── 3. Unlock Moment ───────────────────────────────────────────────

export const unlockTexts = [
  "Midnight has arrived.",
  "The universe is now yours.",
  "Happy Birthday, Ikram.",
];

// ─── 4. Love Letters ────────────────────────────────────────────────

export const letters: Letter[] = [
  {
    id: "birthday",
    title: "For Your Birthday",
    subtitle: "A letter written with love",
    content:
      "Happy Birthday, my love. I wanted to give you something that does not disappear after one day. So I made you this little universe \u2014 a place where every word, every star, and every detail exists only because of you. I hope today reminds you how deeply loved, valued, and appreciated you are.",
  },
  {
    id: "smile",
    title: "When You Need to Smile",
    subtitle: "Open this whenever you need warmth",
    content:
      "If you are reading this, I hope it gives you even a small smile. You have a way of making life softer, lighter, and more beautiful just by being yourself. Your smile is not just beautiful \u2014 it changes the feeling of the whole world around me.",
  },
  {
    id: "miss",
    title: "When You Miss Me",
    subtitle: "A reminder across any distance",
    content:
      "Whenever you miss me, remember that somewhere, somehow, I am thinking of you too. You are not just someone in my life. You are one of the most beautiful parts of it. Even in silence, even from far away, my heart remembers you.",
  },
  {
    id: "special",
    title: "When You Forget How Special You Are",
    subtitle: "Read this when the world feels heavy",
    content:
      "Ikram, you are special in ways that are hard to explain. Not only because of how beautiful you are, but because of your heart, your presence, your softness, and the way you make ordinary moments feel precious. Never forget that you are rare.",
  },
  {
    id: "promise",
    title: "A Promise From Me",
    subtitle: "Words I will always mean",
    content:
      "I promise to keep choosing you with care, respect, patience, and love. I promise to remind you of your worth when the world feels heavy. I promise to make you feel loved not only on special days, but in the quiet normal days too.",
  },
];

// ─── 5. Constellation Reasons ───────────────────────────────────────

export const reasons: Reason[] = [
  { id: 1,  text: "Your presence makes everything feel calmer.",              x: 12, y: 15, size: 5, delay: 0    },
  { id: 2,  text: "Your voice is one of my favorite sounds.",                 x: 42, y: 10, size: 6, delay: 0.2  },
  { id: 3,  text: "You make ordinary days feel meaningful.",                  x: 78, y: 18, size: 4, delay: 0.4  },
  { id: 4,  text: "You have a heart that deserves to be protected.",          x: 22, y: 32, size: 7, delay: 0.6  },
  { id: 5,  text: "You are beautiful without even trying.",                   x: 55, y: 28, size: 5, delay: 0.8  },
  { id: 6,  text: "Your kindness makes you unforgettable.",                   x: 88, y: 35, size: 6, delay: 1.0  },
  { id: 7,  text: "You inspire me to become better.",                         x: 8,  y: 52, size: 4, delay: 1.2  },
  { id: 8,  text: "You are my peace in a noisy world.",                       x: 38, y: 48, size: 7, delay: 1.4  },
  { id: 9,  text: "You make love feel soft and real.",                         x: 68, y: 55, size: 5, delay: 1.6  },
  { id: 10, text: "You are my favorite thought.",                              x: 25, y: 70, size: 6, delay: 1.8  },
  { id: 11, text: "You deserve happiness that stays.",                         x: 58, y: 72, size: 4, delay: 2.0  },
  { id: 12, text: "You are not just loved. You are deeply appreciated.",       x: 15, y: 85, size: 5, delay: 2.2  },
  { id: 13, text: "You make my heart feel at home.",                           x: 48, y: 82, size: 6, delay: 2.4  },
  { id: 14, text: "You are the kind of person the world is lucky to have.",    x: 82, y: 75, size: 4, delay: 2.6  },
  { id: 15, text: "You are my favorite part of every day.",                    x: 92, y: 12, size: 5, delay: 2.8  },
];

/** Pairs of reason IDs to draw constellation lines between */
export const constellationEdges: [number, number][] = [
  [1, 2],  [2, 3],  [2, 5],
  [4, 5],  [5, 6],
  [4, 8],  [7, 8],  [8, 9],
  [9, 6],  [10, 11], [10, 13],
  [11, 14], [12, 13], [13, 14],
  [3, 15],
];

// ─── 6. Memory Timeline ─────────────────────────────────────────────

export const timelineChapters: TimelineChapter[] = [
  {
    id: "ch-1",
    number: "I",
    title: "The Beginning",
    content:
      "Every beautiful story begins quietly. Ours began with simple moments that slowly became important.",
  },
  {
    id: "ch-2",
    number: "II",
    title: "The First Smile",
    content:
      "Some smiles stay in the heart longer than pictures. Yours became one of them.",
  },
  {
    id: "ch-3",
    number: "III",
    title: "The Moment You Became Special",
    content:
      "I do not know the exact second it happened, but somewhere along the way, you became someone I did not want to lose.",
  },
  {
    id: "ch-4",
    number: "IV",
    title: "The Little Things",
    content:
      "It is the little things about you that stay with me \u2014 your way of speaking, your softness, your energy, your presence.",
  },
  {
    id: "ch-5",
    number: "V",
    title: "Today, Your Day",
    content:
      "Today is not just a date. It is the day the world received someone who would become so precious to me.",
  },
  {
    id: "ch-6",
    number: "VI",
    title: "The Future I Hope For",
    content:
      "I hope the future gives us more laughter, more peace, more memories, and more reasons to be grateful for each other.",
  },
];

// ─── 7. Gift Vault ──────────────────────────────────────────────────

export const giftBoxes: GiftBox[] = [
  {
    id: "gift-1",
    number: 1,
    label: "A Message",
    content: "You are loved more than these words can fully explain.",
  },
  {
    id: "gift-2",
    number: 2,
    label: "A Promise",
    content:
      "I promise to make you feel valued, not only on special days, but also on normal days.",
  },
  {
    id: "gift-3",
    number: 3,
    label: "A Future Date",
    content:
      "This unlocks one future date planned by me \u2014 no stress for you, only a beautiful moment.",
  },
  {
    id: "gift-4",
    number: 4,
    label: "A Secret Wish",
    content:
      "My wish is simple: may your heart always feel safe, your smile always return, and your dreams always move closer.",
  },
  {
    id: "gift-5",
    number: 5,
    label: "The Final Surprise",
    content:
      "The final surprise is not inside this website. It is waiting for you in real life.",
  },
];

// ─── 8. Future Dates Passport ────────────────────────────────────────

export const passportStamps: PassportStamp[] = [
  {
    id: "stamp-1",
    title: "Forever Celebrations",
    promise:
      "Not only today, not only on birthdays \u2014 I want to keep celebrating you in little ways, again and again.",
  },
  {
    id: "stamp-2",
    title: "Garden Day",
    promise:
      "A peaceful day in a garden, surrounded by calm, fresh air, soft conversations, and your beautiful presence.",
  },
  {
    id: "stamp-3",
    title: "Long Walk",
    promise:
      "A long walk where we talk about everything and nothing, with no rush, no noise, only us.",
  },
  {
    id: "stamp-4",
    title: "Surprise Call",
    promise:
      "A call made only to remind you that you are loved, missed, and always in my heart.",
  },
  {
    id: "stamp-5",
    title: "Dream Trip",
    promise:
      "One dream destination, one day, with you \u2014 a place where we create memories that feel like a movie.",
  },
  {
    id: "stamp-6",
    title: "Engagement",
    promise:
      "One day, I hope to hold your hand in front of the world and say that my heart chose you.",
  },
  {
    id: "stamp-7",
    title: "Marriage",
    promise:
      "One day, I hope we build a life full of peace, love, mercy, laughter, and beautiful little moments together.",
  },
  {
    id: "stamp-8",
    title: "Quiet Evenings",
    promise:
      "Soft evenings, calm lights, warm talks, and the kind of peace that only feels complete when it is with you.",
  },
];

// ─── 9. Certificate ─────────────────────────────────────────────────

export const certificateTitle = "Certificate of Eternal Appreciation";
export const certificateRecipient = "Ikram";
export const certificateBody =
  "For being the most beautiful part of my world, for making life softer, and for being someone whose existence deserves to be celebrated.";
export const certificateSigned = "From the one who loves you";

// ─── 10. Final Message ──────────────────────────────────────────────

export const finalMessageLines = [
  "I did not build this only to say happy birthday.",
  "I built it because you deserve something that feels personal, gentle, and unforgettable.",
  "Every word, every star, every photo, and every little detail here was made for you.",
  "Happy Birthday, Ikram.",
  "This universe is yours.",
];

export const lastSurprise =
  "You are my favorite person. And today, I hope you feel as loved as you truly are.";
