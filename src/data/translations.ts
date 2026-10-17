import type { Locale } from "@/lib/constants";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    whyUs: string;
    faq: string;
    contact: string;
  };
  hero: {
    brand: string;
    collection: string;
    tagline: string;
    subtitle: string;
    callCta: string;
    portfolioCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      kitchen: { title: string; desc: string };
      modern: { title: string; desc: string };
      classic: { title: string; desc: string };
      wardrobe: { title: string; desc: string };
      tv: { title: string; desc: string };
      interior: { title: string; desc: string };
    };
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: {
      cabinet: string;
      komod: string;
      jakafshi: string;
      tv: string;
      workshop: string;
      video: string;
    };
    view: string;
    close: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      design: { title: string; desc: string };
      execution: { title: string; desc: string };
      material: { title: string; desc: string };
      experience: { title: string; desc: string };
      price: { title: string; desc: string };
      delivery: { title: string; desc: string };
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    workshop: string;
    store: string;
    mainPhone: string;
    workshopPhones: string;
    storePhones: string;
    callNow: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    rights: string;
    quickLinks: string;
    follow: string;
    usefulLinks: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      q1: { q: string; a: string };
      q2: { q: string; a: string };
      q3: { q: string; a: string };
      q4: { q: string; a: string };
      q5: { q: string; a: string };
    };
  };
  theme: {
    light: string;
    dark: string;
  };
  lang: {
    fa: string;
    en: string;
    ar: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fa: {
    nav: {
      home: "خانه",
      about: "درباره ما",
      services: "خدمات",
      portfolio: "نمونه کارها",
      whyUs: "چرا ما",
      faq: "سوالات",
      contact: "تماس",
    },
    hero: {
      brand: "رافل کابینت",
      collection: "مجموعه کابینت پرویزی",
      tagline: "طراحی و اجرای کابینت‌های لوکس، دقیق و ماندگار",
      subtitle:
        "از ایده تا نصب نهایی؛ کابینت آشپزخانه مدرن و کلاسیک، کمد دیواری، کلوزت روم، میز تلویزیون، جا کفشی و دکوراسیون داخلی با کیفیت کارگاهی در تهران و شهر ری.",
      callCta: "تماس مستقیم",
      portfolioCta: "مشاهده نمونه کارها",
    },
    about: {
      eyebrow: "معرفی مجموعه",
      title: "کیفیت، زیبایی و اجرای دقیق",
      body: "رافل کابینت، مجموعه کابینت پرویزی با تجربه در طراحی، تولید و اجرای کابینت آشپزخانه، کابینت مدرن و کلاسیک، کمد دیواری، میز TV، جا کفشی و دکوراسیون داخلی چوبی؛ با تمرکز بر کیفیت متریال، زیبایی و اجرای دقیق در کارگاه مجهز به CNC.",
      highlight1: "تولید کارگاهی با دستگاه CNC",
      highlight2: "طراحی اختصاصی برای هر فضا",
      highlight3: "اجرا و نصب حرفه‌ای در محل",
    },
    services: {
      eyebrow: "خدمات",
      title: "آنچه برای فضای شما می‌سازیم",
      subtitle:
        "طراحی تا اجرا؛ کابینت، کمد، میز تلویزیون، جا کفشی و دکور چوبی متناسب با سبک زندگی و معماری فضای شما.",
      items: {
        kitchen: {
          title: "کابینت آشپزخانه",
          desc: "طراحی و ساخت کابینت آشپزخانه مدرن، کلاسیک و نئوکلاسیک با متریال بادوام و جزئیات دقیق.",
        },
        modern: {
          title: "کابینت مدرن",
          desc: "خطوط مینیمال، سطوح صاف، هایگلاس و جزئیات معاصر برای آشپزخانه‌های امروزی.",
        },
        classic: {
          title: "کابینت کلاسیک",
          desc: "قاب‌بندی ظریف، رنگ‌های لوکس و حس اصیل نئوکلاسیک برای فضاهای فاخر.",
        },
        wardrobe: {
          title: "کمد دیواری",
          desc: "کمد دیواری، کلوزت روم و فضای نگهداری لباس با نظم داخلی هوشمند و استفاده حداکثری از فضا.",
        },
        tv: {
          title: "میز تلویزیون",
          desc: "میز TV، دیوار رسانه‌ای و پنل تلویزیون یکپارچه با نورپردازی و تناسب بصری.",
        },
        interior: {
          title: "جا کفشی و دکور چوبی",
          desc: "جا کفشی ورودی، کنسول و دکوراسیون چوبی سفارشی هماهنگ با کابینت و فضای خانه.",
        },
      },
    },
    portfolio: {
      eyebrow: "نمونه کارها",
      title: "پروژه‌های واقعی اجرا شده",
      subtitle:
        "گالری تصاویر و ویدیوهای کارگاهی و نصب‌شده از پروژه‌های رافل کابینت.",
      filters: {
        cabinet: "کابینت",
        komod: "کمد",
        jakafshi: "جا کفشی",
        tv: "میز تلویزیون",
        workshop: "کارگاه",
        video: "ویدیو",
      },
      view: "بزرگ‌نمایی",
      close: "بستن",
    },
    whyUs: {
      eyebrow: "اعتمادسازی",
      title: "چرا رافل کابینت؟",
      subtitle:
        "ترکیب طراحی اختصاصی، تولید دقیق و خدمات شفاف برای یک تجربه مطمئن.",
      items: {
        design: {
          title: "طراحی اختصاصی",
          desc: "هر پروژه بر اساس معماری فضا و سلیقه شما طراحی می‌شود.",
        },
        execution: {
          title: "اجرای حرفه‌ای",
          desc: "از برش CNC تا رنگ و نصب نهایی، همه مراحل زیر نظر متخصصان.",
        },
        material: {
          title: "متریال با کیفیت",
          desc: "انتخاب متریال مقاوم و پرداخت سطح دقیق برای دوام بلندمدت.",
        },
        experience: {
          title: "تجربه بالا",
          desc: "سابقه اجرای پروژه‌های متنوع کابینت، کمد و دکوراسیون داخلی.",
        },
        price: {
          title: "قیمت مناسب",
          desc: "ارائه پیشنهاد شفاف و متناسب با بودجه، بدون کاهش کیفیت.",
        },
        delivery: {
          title: "تحویل دقیق",
          desc: "زمان‌بندی مشخص تولید و نصب، با هماهنگی کامل تا تحویل نهایی.",
        },
      },
    },
    contact: {
      eyebrow: "ارتباط با ما",
      title: "برای مشاوره رایگان تماس بگیرید",
      subtitle: "کارگاه و فروشگاه آماده پاسخگویی و بازدید حضوری هستند.",
      workshop: "کارگاه",
      store: "فروشگاه",
      mainPhone: "تماس اصلی",
      workshopPhones: "تلفن کارگاه",
      storePhones: "تلفن فروشگاه",
      callNow: "همین حالا تماس بگیرید",
      whatsapp: "پیام در واتساپ",
    },
    footer: {
      tagline: "طراحی، تولید و اجرای کابینت و دکوراسیون داخلی",
      rights: "تمامی حقوق برای رافل کابینت محفوظ است.",
      quickLinks: "دسترسی سریع",
      follow: "شبکه‌های اجتماعی",
      usefulLinks: "لینک‌های مفید",
    },
    faq: {
      eyebrow: "پرسش‌های پرتکرار",
      title: "سوالات رایج درباره کابینت و دکوراسیون",
      subtitle:
        "پاسخ کوتاه درباره کابینت آشپزخانه، کمد دیواری، میز تلویزیون و جا کفشی در رافل کابینت.",
      items: {
        q1: {
          q: "رافل کابینت چه خدماتی ارائه می‌دهد؟",
          a: "طراحی، تولید و اجرای کابینت آشپزخانه مدرن و کلاسیک، کمد دیواری، کلوزت روم، میز تلویزیون، جا کفشی و دکوراسیون داخلی چوبی.",
        },
        q2: {
          q: "فروشگاه و کارگاه کجا هستند؟",
          a: "فروشگاه در شهر ری، میدان شهرری، خیابان قم و کارگاه در تهران، ۶۰ متری شور آباد قرار دارد.",
        },
        q3: {
          q: "آیا جا کفشی و کمد دیواری سفارشی هم می‌سازید؟",
          a: "بله؛ جا کفشی ورودی، کمد دیواری و کلوزت روم متناسب با فضا و سلیقه شما طراحی و اجرا می‌شود.",
        },
        q4: {
          q: "میز تلویزیون سفارشی دارید؟",
          a: "بله؛ میز TV و دیوار رسانه‌ای یکپارچه با نورپردازی و طراحی اختصاصی اجرا می‌شود.",
        },
        q5: {
          q: "چطور سفارش بدهم؟",
          a: "با شماره ۰۹۱۲۳۰۶۲۱۴۳ تماس بگیرید یا از طریق واتساپ پیام دهید. وب‌سایت رسمی: rafelcabinet.ir",
        },
      },
    },
    theme: { light: "روشن", dark: "تیره" },
    lang: { fa: "فارسی", en: "English", ar: "العربية" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      whyUs: "Why Us",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      brand: "Rafel Cabinet",
      collection: "Parvizi Cabinet Collection",
      tagline: "Kitchen cabinets, wardrobes, TV units & shoe cabinets",
      subtitle:
        "From concept to installation — kitchen cabinets, wardrobes, closets, TV walls, shoe cabinets and custom wood interiors with workshop-grade quality in Tehran.",
      callCta: "Call Now",
      portfolioCta: "View Portfolio",
    },
    about: {
      eyebrow: "About the brand",
      title: "Custom cabinetry & wood interiors",
      body: "Rafel Cabinet (Parvizi Cabinet Collection) designs, produces and installs kitchen cabinets, wardrobes, closets, TV units, shoe cabinets and custom wood interiors — focused on quality, beauty and precise craftsmanship.",
      highlight1: "In-house CNC production",
      highlight2: "Bespoke design for every space",
      highlight3: "Professional on-site installation",
    },
    services: {
      eyebrow: "Services",
      title: "Cabinets, wardrobes, TV units & more",
      subtitle:
        "From kitchen cabinets to wardrobes, TV walls, shoe cabinets and full wood interiors — tailored to your space.",
      items: {
        kitchen: {
          title: "Kitchen Cabinets",
          desc: "Modern and classic kitchen cabinets with durable materials and refined detail.",
        },
        modern: {
          title: "Modern Cabinetry",
          desc: "Clean lines and contemporary kitchen cabinetry for today’s homes.",
        },
        classic: {
          title: "Classic Cabinetry",
          desc: "Elegant framing and luxurious classic kitchen cabinets.",
        },
        wardrobe: {
          title: "Wardrobes & Closets",
          desc: "Custom wardrobes, built-in closets and walk-in dressing rooms.",
        },
        tv: {
          title: "TV Units & Media Walls",
          desc: "Custom TV units and media walls with lighting and visual balance.",
        },
        interior: {
          title: "Shoe Cabinets & Wood Interiors",
          desc: "Entry shoe cabinets, consoles and custom wood décor matching your cabinetry.",
        },
      },
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Cabinet, wardrobe & TV unit projects",
      subtitle:
        "Gallery of kitchen cabinets, wardrobes, TV units and workshop work by Rafel Cabinet.",
      filters: {
        cabinet: "Cabinets",
        komod: "Wardrobes",
        jakafshi: "Shoe cabinets",
        tv: "TV Units",
        workshop: "Workshop",
        video: "Video",
      },
      view: "Enlarge",
      close: "Close",
    },
    whyUs: {
      eyebrow: "Trust",
      title: "Why choose Rafel Cabinet?",
      subtitle:
        "Specialists in kitchen cabinets, wardrobes, TV units and shoe cabinets — from design to installation.",
      items: {
        design: {
          title: "Custom Design",
          desc: "Every project is designed around your space, architecture and taste.",
        },
        execution: {
          title: "Professional Execution",
          desc: "From CNC cutting to finishing and installation — specialist oversight at every step.",
        },
        material: {
          title: "Quality Materials",
          desc: "Durable materials and precise surface finishing for long-term performance.",
        },
        experience: {
          title: "Deep Experience",
          desc: "Proven craft across kitchens, wardrobes, TV units and interiors.",
        },
        price: {
          title: "Fair Pricing",
          desc: "Transparent proposals aligned with budget — without compromising quality.",
        },
        delivery: {
          title: "On-Time Delivery",
          desc: "Clear production and installation timelines through final handover.",
        },
      },
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Order cabinets, wardrobes & TV units",
      subtitle:
        "Call for kitchen cabinets, wardrobes, TV units or shoe cabinets — or visit our showroom and workshop.",
      workshop: "Workshop",
      store: "Showroom",
      mainPhone: "Main phone",
      workshopPhones: "Workshop phones",
      storePhones: "Showroom phones",
      callNow: "Call now",
      whatsapp: "WhatsApp message",
    },
    footer: {
      tagline: "Kitchen cabinets, wardrobes, TV units & interiors",
      rights: "All rights reserved by Rafel Cabinet.",
      quickLinks: "Quick links",
      follow: "Social",
      usefulLinks: "Useful links",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions about cabinetry",
      subtitle:
        "Short answers about kitchen cabinets, wardrobes, TV units and shoe cabinets at Rafel Cabinet.",
      items: {
        q1: {
          q: "What services does Rafel Cabinet offer?",
          a: "Design, production and installation of modern and classic kitchen cabinets, wardrobes, closets, TV units, shoe cabinets and custom wood interiors.",
        },
        q2: {
          q: "Where are the showroom and workshop?",
          a: "Showroom: Shahr-e Rey, Shahre Rey Square, Qom Street. Workshop: Tehran, 60 Metri Shour Abad.",
        },
        q3: {
          q: "Do you build custom shoe cabinets and wardrobes?",
          a: "Yes — entry shoe cabinets, built-in wardrobes and walk-in closets tailored to your space.",
        },
        q4: {
          q: "Do you make custom TV units?",
          a: "Yes — custom TV units and media walls with lighting and bespoke design.",
        },
        q5: {
          q: "How do I place an order?",
          a: "Call +98 912 306 2143 or message on WhatsApp. Official website: rafelcabinet.ir",
        },
      },
    },
    theme: { light: "Light", dark: "Dark" },
    lang: { fa: "فارسی", en: "English", ar: "العربية" },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "الأعمال",
      whyUs: "لماذا نحن",
      faq: "أسئلة",
      contact: "تواصل",
    },
    hero: {
      brand: "رافل كابينت",
      collection: "مجموعة كابينت برويزي",
      tagline: "خزائن مطبخ وملابس ووحدات تلفاز وخزائن أحذية",
      subtitle:
        "من الفكرة إلى التركيب — خزائن مطبخ، خزائن ملابس، وحدات تلفاز، خزائن أحذية وديكور خشبي بجودة ورشة في طهران.",
      callCta: "اتصل الآن",
      portfolioCta: "عرض الأعمال",
    },
    about: {
      eyebrow: "عن المجموعة",
      title: "خزائن مخصصة وديكور خشبي",
      body: "رافل كابينت (مجموعة كابينت برويزي) تصمم وتنتج وتركّب خزائن المطبخ، خزائن الملابس، وحدات التلفاز، خزائن الأحذية والديكور الداخلي الخشبي — مع التركيز على الجودة والجمال والتنفيذ الدقيق.",
      highlight1: "إنتاج ورشي بأجهزة CNC",
      highlight2: "تصميم مخصص لكل مساحة",
      highlight3: "تركيب احترافي في الموقع",
    },
    services: {
      eyebrow: "الخدمات",
      title: "خزائن وملابس وتلفاز والمزيد",
      subtitle:
        "من خزائن المطبخ إلى خزائن الملابس وجدران التلفاز وخزائن الأحذية والديكور الخشبي — وفق مساحتك.",
      items: {
        kitchen: {
          title: "خزائن المطبخ",
          desc: "تصميم وتنفيذ خزائن مطبخ عصرية وكلاسيكية بمواد متينة وتفاصيل دقيقة.",
        },
        modern: {
          title: "خزائن عصرية",
          desc: "خطوط بسيطة وخزائن مطبخ معاصرة للمنازل الحديثة.",
        },
        classic: {
          title: "خزائن كلاسيكية",
          desc: "إطارات أنيقة وخزائن مطبخ كلاسيكية فاخرة.",
        },
        wardrobe: {
          title: "خزائن الملابس",
          desc: "خزائن مدمجة وغرف ملابس بتنظيم داخلي ذكي.",
        },
        tv: {
          title: "وحدات التلفاز",
          desc: "وحدات وجدران تلفاز متكاملة مع إضاءة وتوازن بصري.",
        },
        interior: {
          title: "خزائن أحذية وديكور خشبي",
          desc: "خزائن أحذية للمدخل وديكور خشبي مخصص منسجم مع خزائنك.",
        },
      },
    },
    portfolio: {
      eyebrow: "معرض الأعمال",
      title: "مشاريع خزائن وملابس وتلفاز",
      subtitle:
        "معرض خزائن المطبخ وخزائن الملابس ووحدات التلفاز وأعمال الورشة لرافل كابينت.",
      filters: {
        cabinet: "خزائن",
        komod: "خزائن ملابس",
        jakafshi: "خزائن أحذية",
        tv: "وحدات التلفاز",
        workshop: "ورشة",
        video: "فيديو",
      },
      view: "تكبير",
      close: "إغلاق",
    },
    whyUs: {
      eyebrow: "الثقة",
      title: "لماذا رافل كابينت؟",
      subtitle:
        "متخصصون في خزائن المطبخ والملابس ووحدات التلفاز وخزائن الأحذية — من التصميم إلى التركيب.",
      items: {
        design: {
          title: "تصميم مخصص",
          desc: "كل مشروع يُصمَّم وفق المساحة والعمارة وذوقك.",
        },
        execution: {
          title: "تنفيذ احترافي",
          desc: "من القص بـ CNC إلى التشطيب والتركيب تحت إشراف متخصصين.",
        },
        material: {
          title: "مواد عالية الجودة",
          desc: "اختيار مواد متينة وتشطيب سطحي دقيق لدوام طويل.",
        },
        experience: {
          title: "خبرة واسعة",
          desc: "سجل قوي في المطابخ وخزائن الملابس ووحدات التلفاز والديكور.",
        },
        price: {
          title: "سعر مناسب",
          desc: "عروض شفافة تناسب الميزانية دون المساس بالجودة.",
        },
        delivery: {
          title: "تسليم دقيق",
          desc: "جدول زمني واضح للإنتاج والتركيب حتى التسليم النهائي.",
        },
      },
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "اطلب خزائن وملابس ووحدات تلفاز",
      subtitle:
        "اتصل لخزائن المطبخ أو الملابس أو التلفاز أو الأحذية — أو زر المعرض والورشة.",
      workshop: "الورشة",
      store: "المعرض",
      mainPhone: "الهاتف الرئيسي",
      workshopPhones: "هواتف الورشة",
      storePhones: "هواتف المعرض",
      callNow: "اتصل الآن",
      whatsapp: "رسالة واتساب",
    },
    footer: {
      tagline: "خزائن مطبخ وملابس ووحدات تلفاز وديكور",
      rights: "جميع الحقوق محفوظة لرافل كابينت.",
      quickLinks: "روابط سريعة",
      follow: "التواصل",
      usefulLinks: "روابط مفيدة",
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "أسئلة عن الخزائن والديكور",
      subtitle:
        "إجابات قصيرة عن خزائن المطبخ والملابس ووحدات التلفاز وخزائن الأحذية في رافل كابينت.",
      items: {
        q1: {
          q: "ما خدمات رافل كابينت؟",
          a: "تصميم وإنتاج وتركيب خزائن مطبخ عصرية وكلاسيكية، خزائن ملابس، غرف ملابس، وحدات تلفاز، خزائن أحذية وديكور خشبي.",
        },
        q2: {
          q: "أين المعرض والورشة؟",
          a: "المعرض في شهر ري، ميدان شهرري، شارع قم. الورشة في طهران، ٦٠ متري شور آباد.",
        },
        q3: {
          q: "هل تصنعون خزائن أحذية وملابس مخصصة؟",
          a: "نعم؛ خزائن أحذية للمدخل وخزائن ملابس وغرف ملابس وفق مساحتك وذوقك.",
        },
        q4: {
          q: "هل لديكم وحدات تلفاز مخصصة؟",
          a: "نعم؛ وحدات وجدران تلفاز متكاملة مع إضاءة وتصميم خاص.",
        },
        q5: {
          q: "كيف أطلب؟",
          a: "اتصل على ٠٩١٢٣٠٦٢١٤٣ أو راسل واتساب. الموقع الرسمي: rafelcabinet.ir",
        },
      },
    },
    theme: { light: "فاتح", dark: "داكن" },
    lang: { fa: "فارسی", en: "English", ar: "العربية" },
  },
};
