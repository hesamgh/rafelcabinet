export const BRAND = {
  name: "رافل کابینت",
  nameEn: "Rafel Cabinet",
  collection: "مجموعه کابینت پرویزی",
  collectionEn: "Parvizi Cabinet Collection",
  mainPhone: "09123062143",
  mainPhoneDisplay: {
    fa: "۰۹۱۲ ۳۰۶ ۲۱۴۳",
    en: "0912 306 2143",
    ar: "٠٩١٢ ٣٠٦ ٢١٤٣",
  },
  workshopPhones: [
    {
      raw: "02156545874",
      display: {
        fa: "۰۲۱ ۵۶۵۴ ۵۸۷۴",
        en: "021 5654 5874",
        ar: "٠٢١ ٥٦٥٤ ٥٨٧٤",
      },
    },
    {
      raw: "02156545875",
      display: {
        fa: "۰۲۱ ۵۶۵۴ ۵۸۷۵",
        en: "021 5654 5875",
        ar: "٠٢١ ٥٦٥٤ ٥٨٧٥",
      },
    },
  ],
  storePhones: [
    {
      raw: "02155972860",
      display: {
        fa: "۰۲۱ ۵۵۹۷ ۲۸۶۰",
        en: "021 5597 2860",
        ar: "٠٢١ ٥٥٩٧ ٢٨٦٠",
      },
    },
    {
      raw: "02155938247",
      display: {
        fa: "۰۲۱ ۵۵۹۳ ۸۲۴۷",
        en: "021 5593 8247",
        ar: "٠٢١ ٥٥٩٣ ٨٢٤٧",
      },
    },
  ],
  workshopAddress: {
    fa: "تهران، ۶۰ متری شور آباد",
    en: "Tehran, 60-Metri Shourabad",
    ar: "طهران، ٦٠ متري شور آباد",
  },
  storeAddress: {
    fa: "شهر ری، میدان شهرری، خیابان قم (سپاهیان انقلاب)",
    en: "Shahr-e Rey, City Square, Qom St. (Sepahian Engelab)",
    ar: "شهر ري، ميدان شهرري، شارع قم (سپاهيان انقلاب)",
  },
  telLink: "tel:09123062143",
} as const;

export type Locale = "fa" | "en" | "ar";
export type ThemeMode = "light" | "dark";
