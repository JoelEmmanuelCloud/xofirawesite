import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CalculatorSection } from "@/components/CalculatorSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Coverage } from "@/components/Coverage";
import { Security } from "@/components/Security";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Xofira",
  description:
    "Bidirectional money transfers between Nigeria (NGN) and Ivory Coast (XOF). Fast, secure, transparent cross-border payments.",
  url: "https://xofira.com",
  areaServed: ["Nigeria", "Ivory Coast"],
  currenciesAccepted: "NGN, XOF",
  slogan: "Fast. Secure. Global.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CalculatorSection />
        <HowItWorks />
        <Features />
        <Coverage />
        <Security />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
