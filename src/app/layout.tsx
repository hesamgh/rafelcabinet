import type { Metadata } from "next";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "رافل کابینت | کابینت آشپزخانه، کمد دیواری، میز TV و جا کفشی در تهران",
    template: "%s | رافل کابینت",
  },
  description:
    "رافل کابینت (مجموعه کابینت پرویزی) طراحی، تولید و اجرای کابینت آشپزخانه مدرن و کلاسیک، کمد دیواری، کلوزت روم، میز تلویزیون، جا کفشی و دکوراسیون داخلی در تهران و شهر ری. مشاوره رایگان: ۰۹۱۲۳۰۶۲۱۴۳ — rafelcabinet.ir",
  keywords: [...SITE.keywords],
  applicationName: "رافل کابینت",
  authors: [{ name: "رافل کابینت", url: SITE.url }],
  creator: "رافل کابینت | مجموعه کابینت پرویزی",
  publisher: "رافل کابینت",
  category: "home improvement",
  classification: "کابینت سازی و دکوراسیون داخلی",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  ...(SITE.googleSiteVerification
    ? { verification: { google: SITE.googleSiteVerification } }
    : {}),
  alternates: {
    canonical: SITE.url,
    languages: {
      "fa-IR": SITE.url,
      fa: SITE.url,
      en: `${SITE.url}/?lang=en`,
      ar: `${SITE.url}/?lang=ar`,
      "x-default": SITE.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US", "ar_AR"],
    url: SITE.url,
    siteName: "رافل کابینت",
    title: "رافل کابینت | کابینت، کمد دیواری، میز TV و جا کفشی",
    description:
      "طراحی و اجرای حرفه‌ای کابینت آشپزخانه، کمد دیواری، میز تلویزیون و جا کفشی در تهران و شهر ری. وب‌سایت: rafelcabinet.ir",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "رافل کابینت — نمونه کابینت آشپزخانه لوکس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "رافل کابینت | کابینت آشپزخانه و دکوراسیون داخلی",
    description:
      "کابینت مدرن و کلاسیک، کمد دیواری، میز TV و جا کفشی — مجموعه کابینت پرویزی | rafelcabinet.ir",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  other: {
    "geo.region": "IR-07",
    "geo.placename": "Tehran, Shahr-e Rey",
    "geo.position": `${SITE.geo.store.lat};${SITE.geo.store.lng}`,
    ICBM: `${SITE.geo.store.lat}, ${SITE.geo.store.lng}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${cormorant.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/cabinet/20260715_184341.webp" />
        <link rel="preload" as="video" href="/videos/hero-1.mp4" type="video/mp4" />
        <link rel="alternate" hrefLang="fa-IR" href={SITE.url} />
        <link rel="alternate" hrefLang="en" href={`${SITE.url}/?lang=en`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE.url}/?lang=ar`} />
        <link rel="alternate" hrefLang="x-default" href={SITE.url} />
      </head>
      <body className="min-h-full antialiased">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
