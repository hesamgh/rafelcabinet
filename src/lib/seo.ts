export const SITE_URL = "https://rafelcabinet.ir";

export const SITE = {
  url: SITE_URL,
  name: "رافل کابینت",
  nameEn: "Rafel Cabinet",
  collection: "مجموعه کابینت پرویزی",
  locale: "fa_IR",
  phone: "+989123062143",
  email: "info@rafelcabinet.ir",
  whatsapp: "https://wa.me/989123062143",
  instagram: "https://www.instagram.com/rafelcabinet/",
  ogImage: `${SITE_URL}/og.jpg`,
  /** Google Search Console — HTML tag / meta verification */
  googleSiteVerification: "Akul5GfP9Icv23gmihkrC8JKYHMnhNyxwqQamV21qnc",
  keywords: [
    "کابینت",
    "کابینت آشپزخانه",
    "کابینت مدرن",
    "کابینت کلاسیک",
    "کابینت نئوکلاسیک",
    "کمد دیواری",
    "کلوزت روم",
    "میز تلویزیون",
    "میز TV",
    "دیوار TV",
    "جا کفشی",
    "جاکفشی",
    "دکوراسیون داخلی",
    "کابینت تهران",
    "کابینت شهر ری",
    "کابینت سازی تهران",
    "کابینت سازی شهر ری",
    "تولید کابینت",
    "رافل کابینت",
    "کابینت پرویزی",
    "کابینت ممبران",
    "کابینت هایگلاس",
    "کابینت چوبی",
    "کمد لباس",
    "طراحی کابینت",
    "نصب کابینت",
    "کابینت سفارشی",
    "قیمت کابینت آشپزخانه",
    "سفارش کابینت تهران",
    "cabinet",
    "kitchen cabinet",
    "wardrobe",
    "TV unit",
    "shoe cabinet",
  ],
  geo: {
    store: {
      lat: 35.5935,
      lng: 51.439,
      addressFa: "شهر ری، میدان شهرری، خیابان قم (سپاهیان انقلاب)",
      addressEn: "Shahr-e Rey, City Square, Qom St. (Sepahian Engelab)",
      postalCode: "18736",
    },
    workshop: {
      lat: 35.516,
      lng: 51.385,
      addressFa: "تهران، ۶۰ متری شور آباد",
      addressEn: "Tehran, 60-Metri Shourabad",
    },
  },
} as const;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
