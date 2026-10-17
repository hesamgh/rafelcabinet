import { SITE } from "@/lib/seo";

/** لینک‌های خارجی معتبر — برای اعتماد گوگل و دسترسی کاربر */
export const outboundLinks = [
  {
    id: "maps-store",
    label: { fa: "موقعیت فروشگاه در نقشه گوگل", en: "Store on Google Maps", ar: "المتجر على خرائط جوجل" },
    href: `https://www.google.com/maps/search/?api=1&query=${SITE.geo.store.lat},${SITE.geo.store.lng}`,
  },
  {
    id: "maps-workshop",
    label: { fa: "موقعیت کارگاه در نقشه گوگل", en: "Workshop on Google Maps", ar: "الورشة على خرائط جوجل" },
    href: `https://www.google.com/maps/search/?api=1&query=${SITE.geo.workshop.lat},${SITE.geo.workshop.lng}`,
  },
  {
    id: "instagram",
    label: { fa: "اینستاگرام رافل کابینت", en: "Rafel Cabinet Instagram", ar: "إنستغرام رافل كابينت" },
    href: SITE.instagram,
  },
  {
    id: "whatsapp",
    label: { fa: "واتساپ مشاوره", en: "WhatsApp consultation", ar: "واتساب الاستشارة" },
    href: SITE.whatsapp,
  },
] as const;

/** پروفایل‌هایی که باید در آن‌ها لینک به سایت ثبت شود (کار آف‌سایت) */
export const backlinkTargets = [
  {
    name: "Google Business Profile",
    url: "https://business.google.com/",
    tip: "پروفایل کسب‌وکار گوگل بسازید و وب‌سایت را rafelcabinet.ir بگذارید",
  },
  {
    name: "Instagram Bio",
    url: SITE.instagram,
    tip: "لینک سایت را در بیو اینستاگرام قرار دهید",
  },
  {
    name: "Neshan / Balad",
    url: "https://neshan.org/",
    tip: "کسب‌وکار را در نشان و بلد ثبت کنید با لینک سایت",
  },
  {
    name: "Telegram channel / bot",
    url: "https://telegram.org/",
    tip: "کانال تلگرام با لینک ثابت به سایت",
  },
] as const;
