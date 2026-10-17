import { SITE } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { servicePages, serviceSlugList } from "@/data/servicePages";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "FurnitureStore"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.nameEn, SITE.collection, "کابینت پرویزی"],
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    image: [SITE.ogImage, `${SITE.url}/images/cabinet/20260715_184341.webp`],
    description:
      "رافل کابینت (مجموعه کابینت پرویزی) متخصص طراحی، تولید و اجرای کابینت آشپزخانه، کابینت مدرن و کلاسیک، کمد دیواری، کلوزت روم، میز تلویزیون، جا کفشی و دکوراسیون داخلی در تهران و شهر ری.",
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "IRR",
    paymentAccepted: "Cash, Card",
    foundingDate: "2010",
    areaServed: [
      { "@type": "City", name: "تهران" },
      { "@type": "City", name: "شهر ری" },
      { "@type": "AdministrativeArea", name: "استان تهران" },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "میدان شهرری، خیابان قم (سپاهیان انقلاب)",
        addressLocality: "شهر ری",
        addressRegion: "تهران",
        addressCountry: "IR",
        postalCode: SITE.geo.store.postalCode,
      },
      {
        "@type": "PostalAddress",
        streetAddress: "۶۰ متری شور آباد",
        addressLocality: "تهران",
        addressRegion: "تهران",
        addressCountry: "IR",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.store.lat,
      longitude: SITE.geo.store.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${SITE.geo.store.lat},${SITE.geo.store.lng}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "IR",
        availableLanguage: ["fa", "en", "ar"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [SITE.instagram, SITE.whatsapp],
    knowsAbout: [
      "کابینت آشپزخانه",
      "کابینت مدرن",
      "کابینت کلاسیک",
      "کمد دیواری",
      "کلوزت روم",
      "میز تلویزیون",
      "جا کفشی",
      "دکوراسیون داخلی چوبی",
      "CNC woodworking",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات رافل کابینت",
      itemListElement: serviceSlugList.map((slug, i) => ({
        "@type": "OfferCatalog",
        name: servicePages[slug].title,
        url: `${SITE.url}/services/${slug}`,
        position: i + 1,
      })),
    },
    makesOffer: serviceSlugList.map((slug) => ({
      "@type": "Offer",
      url: `${SITE.url}/services/${slug}`,
      itemOffered: {
        "@type": "Service",
        name: servicePages[slug].title,
        description: servicePages[slug].description,
        url: `${SITE.url}/services/${slug}`,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ["fa-IR", "en", "ar"],
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: "رافل کابینت | کابینت آشپزخانه، کمد دیواری، میز TV و جا کفشی",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    inLanguage: "fa-IR",
    primaryImageOfPage: SITE.ogImage,
    dateModified: new Date().toISOString().slice(0, 10),
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "خدمات رافل کابینت",
    itemListElement: serviceSlugList.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: servicePages[slug].title,
      url: `${SITE.url}/services/${slug}`,
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "رافل کابینت چه خدماتی ارائه می‌دهد؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "رافل کابینت خدمات طراحی، تولید و اجرای کابینت آشپزخانه (مدرن، کلاسیک و نئوکلاسیک)، کمد دیواری، کلوزت روم، میز تلویزیون، جا کفشی و دکوراسیون داخلی چوبی را ارائه می‌دهد.",
        },
      },
      {
        "@type": "Question",
        name: "کارگاه و فروشگاه رافل کابینت کجاست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: `فروشگاه در ${BRAND.storeAddress.fa} و کارگاه در ${BRAND.workshopAddress.fa} قرار دارد.`,
        },
      },
      {
        "@type": "Question",
        name: "آیا کمد دیواری و جا کفشی هم می‌سازید؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بله، کمد دیواری، کلوزت روم و جا کفشی سفارشی متناسب با فضای شما طراحی و اجرا می‌شود.",
        },
      },
      {
        "@type": "Question",
        name: "میز تلویزیون سفارشی هم دارید؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بله، میز TV و دیوار رسانه‌ای یکپارچه با نورپردازی و طراحی اختصاصی اجرا می‌شود.",
        },
      },
      {
        "@type": "Question",
        name: "چطور با رافل کابینت تماس بگیرم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: `شماره تماس اصلی ${BRAND.mainPhone} و واتساپ همان شماره است. همچنین می‌توانید از طریق سایت ${SITE.url} اقدام کنید.`,
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "خدمات", item: `${SITE.url}/#services` },
      { "@type": "ListItem", position: 3, name: "نمونه کارها", item: `${SITE.url}/#portfolio` },
      { "@type": "ListItem", position: 4, name: "تماس", item: `${SITE.url}/#contact` },
    ],
  };

  const graphs = [organization, website, webpage, itemList, faq, breadcrumb];

  return (
    <>
      {graphs.map((data, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
