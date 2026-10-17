import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
