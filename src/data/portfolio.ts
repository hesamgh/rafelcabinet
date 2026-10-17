export type PortfolioCategory =
  | "cabinet"
  | "komod"
  | "jakafshi"
  | "tv"
  | "workshop"
  | "video";

export type PortfolioItem = {
  id: string;
  src: string;
  type: "image" | "video";
  category: PortfolioCategory[];
  span?: "tall" | "wide" | "normal";
};

/** Curated real project media — weak/duplicate shots removed */
export const portfolioItems: PortfolioItem[] = [
  // Cabinet
  {
    id: "c1",
    src: "/images/cabinet/cabinet-1.webp",
    type: "image",
    category: ["cabinet"],
    span: "tall",
  },
  {
    id: "c2",
    src: "/images/cabinet/20260715_184341.webp",
    type: "image",
    category: ["cabinet"],
    span: "tall",
  },
  {
    id: "c3",
    src: "/images/cabinet/20260715_184349.webp",
    type: "image",
    category: ["cabinet"],
  },
  {
    id: "c4",
    src: "/images/cabinet/20260715_184600.webp",
    type: "image",
    category: ["cabinet"],
    span: "wide",
  },
  {
    id: "c5",
    src: "/images/cabinet/20260722_190439.webp",
    type: "image",
    category: ["cabinet"],
    span: "wide",
  },
  {
    id: "c6",
    src: "/images/cabinet/20260722_190442.webp",
    type: "image",
    category: ["cabinet"],
    span: "tall",
  },
  {
    id: "c7",
    src: "/images/cabinet/20260722_191828.webp",
    type: "image",
    category: ["cabinet"],
  },
  {
    id: "c8",
    src: "/images/cabinet/20260726_192731.webp",
    type: "image",
    category: ["cabinet"],
    span: "tall",
  },
  {
    id: "c9",
    src: "/images/cabinet/20260726_193106.webp",
    type: "image",
    category: ["cabinet"],
  },
  {
    id: "c10",
    src: "/images/cabinet/20260720_163316.webp",
    type: "image",
    category: ["cabinet"],
  },
  {
    id: "c11",
    src: "/images/cabinet/20260712_185543.webp",
    type: "image",
    category: ["cabinet"],
  },

  // Wardrobe / closet
  {
    id: "k2",
    src: "/images/komod/20260726_191737.webp",
    type: "image",
    category: ["komod"],
  },
  {
    id: "k3",
    src: "/images/komod/20260722_204157.webp",
    type: "image",
    category: ["komod"],
  },
  {
    id: "k4",
    src: "/images/komod/20260722_191049_1_.webp",
    type: "image",
    category: ["komod"],
  },
  {
    id: "k5",
    src: "/images/komod/20260722_192118.webp",
    type: "image",
    category: ["komod"],
  },

  // Shoe cabinets
  {
    id: "jf1",
    src: "/images/komod/jakafshi-1.webp",
    type: "image",
    category: ["jakafshi"],
    span: "tall",
  },
  {
    id: "jf2",
    src: "/images/komod/jakafshi-2.webp",
    type: "image",
    category: ["jakafshi"],
    span: "tall",
  },

  // TV units
  {
    id: "t1",
    src: "/images/miz-tv/20260715_185218.webp",
    type: "image",
    category: ["tv"],
    span: "wide",
  },
  {
    id: "t2",
    src: "/images/miz-tv/miz-tv-1.webp",
    type: "image",
    category: ["tv"],
  },
  {
    id: "t3",
    src: "/images/miz-tv/miz-tv-2.webp",
    type: "image",
    category: ["tv"],
    span: "wide",
  },
  {
    id: "t4",
    src: "/images/miz-tv/20260722_191537.webp",
    type: "image",
    category: ["tv"],
  },
  {
    id: "t5",
    src: "/images/miz-tv/20260722_190928.webp",
    type: "image",
    category: ["tv"],
  },

  // Workshop
  {
    id: "w1",
    src: "/images/kargah/photo_2026-09-05_17-19-11.webp",
    type: "image",
    category: ["workshop"],
    span: "wide",
  },
  {
    id: "w2",
    src: "/images/kargah/photo_2026-09-05_17-18-10.webp",
    type: "image",
    category: ["workshop"],
  },
  {
    id: "w3",
    src: "/images/kargah/photo_2026-09-05_17-19-15.webp",
    type: "image",
    category: ["workshop"],
  },
  {
    id: "w5",
    src: "/images/kargah/photo_2026-09-05_17-20-11.webp",
    type: "image",
    category: ["workshop"],
  },
  {
    id: "w6",
    src: "/images/kargah/photo_2026-09-05_17-20-22.webp",
    type: "image",
    category: ["workshop"],
    span: "tall",
  },
  {
    id: "w7",
    src: "/images/kargah/photo_2026-09-05_17-20-27.webp",
    type: "image",
    category: ["workshop"],
  },

  // Videos — only under the video filter
  {
    id: "v1",
    src: "/videos/gallery-1.mp4",
    type: "video",
    category: ["video"],
  },
  {
    id: "v2",
    src: "/videos/IMG_2534.mp4",
    type: "video",
    category: ["video"],
    span: "tall",
  },
  {
    id: "v4",
    src: "/videos/gallery-3.mp4",
    type: "video",
    category: ["video"],
  },
  {
    id: "v3",
    src: "/videos/IMG_0968.mp4",
    type: "video",
    category: ["video"],
    span: "tall",
  },
  {
    id: "v5",
    src: "/videos/gallery-4.mp4",
    type: "video",
    category: ["video"],
  },
  {
    id: "v6",
    src: "/videos/IMG_2419.mp4",
    type: "video",
    category: ["video"],
  },
];

export const serviceImages = {
  kitchen: "/images/cabinet/20260715_184341.webp",
  modern: "/images/cabinet/cabinet-1.webp",
  classic: "/images/cabinet/20260726_192731.webp",
  wardrobe: "/images/komod/20260726_191737.webp",
  tv: "/images/miz-tv/20260715_185218.webp",
  interior: "/images/komod/jakafshi-1.webp",
} as const;

export const aboutImages = [
  "/images/kargah/photo_2026-09-05_17-19-11.webp",
  "/images/kargah/photo_2026-09-05_17-18-10.webp",
  "/images/kargah/photo_2026-09-05_17-20-22.webp",
] as const;

export const heroVideos = [
  "/videos/hero-1.mp4",
  "/videos/gallery-4.mp4",
  "/videos/gallery-1.mp4",
] as const;
export const heroPoster = "/images/cabinet/20260715_184341.webp";
