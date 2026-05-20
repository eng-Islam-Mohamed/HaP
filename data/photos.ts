/* ===================================================================
 *  data/photos.ts
 *  Photo metadata for Ikram's birthday website.
 *  All images live in public/images/ikram/.
 * =================================================================== */

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

export const photos: PhotoItem[] = [
  {
    id: "ikram-01",
    src: "/images/ikram/ikram-01.jpg",
    alt: "Ikram",
    caption: "The kind of beauty that makes time quiet.",
    featured: true,
  },
  {
    id: "ikram-02",
    src: "/images/ikram/ikram-02.jpg",
    alt: "Ikram",
    caption: "A moment that feels softer than words.",
  },
  {
    id: "ikram-03",
    src: "/images/ikram/ikram-03.jpg",
    alt: "Ikram",
    caption: "Some smiles stay in the heart forever.",
  },
  {
    id: "ikram-04",
    src: "/images/ikram/ikram-04.jpg",
    alt: "Ikram",
    caption: "Her smile, my favorite kind of peace.",
  },
  {
    id: "ikram-05",
    src: "/images/ikram/ikram-05.jpg",
    alt: "Ikram",
    caption: "A little piece of the universe I wanted to keep.",
  },
  {
    id: "ikram-06",
    src: "/images/ikram/ikram-06.jpg",
    alt: "Ikram",
    caption: "Not just a photo — a feeling.",
  },
  {
    id: "ikram-07",
    src: "/images/ikram/ikram-07.jpg",
    alt: "Ikram",
    caption: "The kind of presence that makes everything softer.",
  },
  {
    id: "ikram-08",
    src: "/images/ikram/ikram-08.jpg",
    alt: "Ikram",
    caption: "A beautiful moment, kept gently.",
  },
  {
    id: "ikram-09",
    src: "/images/ikram/ikram-09.jpg",
    alt: "Ikram",
    caption: "A memory wrapped in light.",
  },
];

/** Get the featured photo, or the first photo as fallback */
export function getFeaturedPhoto(): PhotoItem {
  return photos.find((p) => p.featured) ?? photos[0];
}

/** Get photos for editorial (first 4) */
export function getEditorialPhotos(): PhotoItem[] {
  return photos.slice(0, 4);
}

/** Get photos for timeline chapters (map chapter index → photo) */
export function getTimelinePhotos(): (PhotoItem | null)[] {
  // Assign photos to chapters 0 (Beginning), 2 (Became Special), 4 (Today)
  return [
    photos[2] ?? null, // Chapter I  — The Beginning
    null,              // Chapter II — The First Smile (text-only)
    photos[4] ?? null, // Chapter III — Became Special
    null,              // Chapter IV — Little Things (text-only)
    photos[6] ?? null, // Chapter V — Today
    null,              // Chapter VI — The Future (text-only)
  ];
}
