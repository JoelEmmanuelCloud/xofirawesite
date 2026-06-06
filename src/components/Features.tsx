import {
  Gauge,
  BadgePercent,
  ShieldCheck,
  RefreshCw,
  Smartphone,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: Gauge,
    title: "Minutes, not days",
    body: "Most transfers settle in under three minutes through direct banking and mobile-money rails on both sides of the corridor.",
    accent: "text-brand bg-brand-soft",
  },
  {
    icon: BadgePercent,
    title: "Transparent pricing",
    body: "One clear fee and a fair exchange rate shown upfront. No hidden markups, no surprises after you send.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    body: "Funds are safeguarded, data is encrypted end to end, and every transaction is monitored for fraud in real time.",
    accent: "text-gold bg-gold-soft",
  },
  {
    icon: RefreshCw,
    title: "Truly bidirectional",
    body: "Send NGN to XOF or XOF to NGN with the same speed and pricing. One platform for the whole corridor.",
    accent: "text-brand bg-brand-soft",
  },
  {
    icon: Smartphone,
    title: "Pay your way",
    body: "Fund with bank transfer, debit card, or mobile money, and pay out to bank accounts or wallets.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Headphones,
    title: "Human support",
    body: "Real people in your timezone, fluent in English and French, ready whenever you need a hand.",
    accent: "text-gold bg-gold-soft",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Xofira"
          title="Built for the Nigeria–Ivory Coast corridor"
          description="Everything you need to move money across borders, designed around how Africans actually send and receive."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.accent}`}
              >
                <feature.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
