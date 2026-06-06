import { TrendingUp, Coins, Timer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { TransferCalculator } from "@/components/TransferCalculator";

const POINTS = [
  {
    icon: TrendingUp,
    title: "Mid-market rates",
    body: "We start from the real exchange rate and add one clear margin, never a hidden markup.",
  },
  {
    icon: Coins,
    title: "One flat fee",
    body: "See the exact fee before you send. What you confirm is what your recipient receives.",
  },
  {
    icon: Timer,
    title: "Rate lock",
    body: "Your rate is fixed the moment you confirm, so the payout amount never moves.",
  },
];

export function CalculatorSection() {
  return (
    <section id="calculator" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />
        <div className="absolute left-1/4 top-1/4 h-80 w-80 animate-blob rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-blob rounded-full bg-green/15 blur-3xl [animation-delay:5s]" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            Live calculator
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Know the exact amount{" "}
            <span className="gradient-text animate-gradient">before you send</span>
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            Type any amount in naira or CFA francs and watch the conversion
            update instantly, both directions, with full transparency.
          </p>

          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <point.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-brand/20 via-green/10 to-gold/20 blur-xl"
            />
            <TransferCalculator className="mx-auto max-w-md" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
