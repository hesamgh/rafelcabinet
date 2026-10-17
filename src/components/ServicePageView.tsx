import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { SITE } from "@/lib/seo";
import { outboundLinks } from "@/data/seoLinks";
import {
  servicePages,
  type ServicePage,
  type ServiceSlug,
} from "@/data/servicePages";
import { LogoMark } from "@/components/LogoMark";

export function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-10 w-10 rounded-[10px]" />
            <span className="font-display text-xl sm:text-2xl">{SITE.name}</span>
          </Link>
          <a
            href={BRAND.telLink}
            className="rounded-full bg-[var(--fg)] px-4 py-2 text-xs text-[var(--bg)] sm:text-sm"
          >
            تماس: {BRAND.mainPhoneDisplay.fa}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="breadcrumb" className="mb-8 text-sm text-[var(--muted-fg)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--brass)]">
                خانه
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/#services" className="hover:text-[var(--brass)]">
                خدمات
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[var(--fg)]">{page.title}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article>
            <p className="text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
              رافل کابینت · {SITE.url.replace("https://", "")}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-base leading-8 text-[var(--muted-fg)] sm:text-lg">
              {page.intro}
            </p>

            <ul className="mt-8 space-y-3">
              {page.benefits.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-[var(--fg)] sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brass)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={BRAND.telLink}
                className="inline-flex rounded-full bg-[var(--fg)] px-6 py-3 text-sm text-[var(--bg)]"
              >
                مشاوره رایگان تلفنی
              </a>
              <Link
                href="/#portfolio"
                className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm"
              >
                مشاهده نمونه کارها
              </Link>
            </div>
          </article>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]">
            <Image
              src={page.image}
              alt={`${page.title} — نمونه کار رافل کابینت تهران و شهر ری | ${SITE.url.replace("https://", "")}`}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        <section className="mt-16 space-y-5 border-t border-[var(--border)] pt-12">
          <h2 className="font-display text-2xl sm:text-3xl">
            {page.title} در تهران و شهر ری
          </h2>
          {page.seoBody.map((para) => (
            <p key={para.slice(0, 32)} className="text-base leading-8 text-[var(--muted-fg)]">
              {para}
            </p>
          ))}
          <p className="text-base leading-8 text-[var(--muted-fg)]">
            فروشگاه رافل کابینت در {BRAND.storeAddress.fa} و کارگاه در{" "}
            {BRAND.workshopAddress.fa} آماده بازدید و مشاوره است. وب‌سایت رسمی:{" "}
            <a href={SITE.url} className="text-[var(--brass)] hover:underline" dir="ltr">
              rafelcabinet.ir
            </a>
          </p>
        </section>

        {page.faqs.length > 0 && (
          <section className="mt-16 border-t border-[var(--border)] pt-12">
            <h2 className="font-display text-2xl sm:text-3xl">سوالات رایج</h2>
            <div className="mt-6 space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <summary className="cursor-pointer font-medium text-[var(--fg)]">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-fg)]">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 border-t border-[var(--border)] pt-12">
          <h2 className="font-display text-2xl sm:text-3xl">خدمات مرتبط</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {page.related.map((slug) => {
              const related = servicePages[slug as ServiceSlug];
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--brass)]"
                >
                  <p className="font-display text-xl">{related.title}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--muted-fg)]">
                    {related.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16 border-t border-[var(--border)] pt-12">
          <h2 className="font-display text-2xl sm:text-3xl">لینک‌های مفید</h2>
          <ul className="mt-5 space-y-2 text-sm">
            {outboundLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brass)] hover:underline"
                >
                  {link.label.fa}
                </a>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="text-[var(--brass)] hover:underline">
                تماس و آدرس رافل کابینت
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted-fg)]">
        <p>
          وب‌سایت رسمی:{" "}
          <a href={SITE.url} className="text-[var(--brass)] hover:underline">
            {SITE.url.replace("https://", "")}
          </a>
        </p>
        <p className="mt-2">
          <Link href="/" className="hover:text-[var(--fg)]">
            بازگشت به صفحه اصلی
          </Link>
        </p>
      </footer>
    </div>
  );
}
