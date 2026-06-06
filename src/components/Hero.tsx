import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Flag } from "@/components/Flag";
import { TransferCalculator } from "@/components/TransferCalculator";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-96 w-96 rounded-full bg-green/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-soft shadow-soft">
            <span className="flex -space-x-1.5">
              <Flag country="NG" className="h-5 w-5 ring-2 ring-white" />
              <Flag country="CI" className="h-5 w-5 ring-2 ring-white" />
            </span>
            Nigeria ↔ Ivory Coast, both directions
          </div>

          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Move money between{" "}
            <span className="text-green">Nigeria</span> and{" "}
            <span className="text-brand">Ivory Coast</span> in minutes
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Xofira is a next-generation fintech platform enabling seamless
            bidirectional transfers between NGN and XOF. Transparent rates, low
            fees, and bank-grade security. Fast. Secure. Global.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#get-started" size="lg">
              Start a transfer
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
            <div className="flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </span>
              <span className="font-semibold text-ink">4.9/5</span>
              <span className="text-muted">from 12,000+ customers</span>
            </div>
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:120ms] lg:justify-self-end">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-transparent to-green/10"
          />
          <TransferCalculator className="mx-auto max-w-md" />
        </div>
      </Container>
    </section>
  );
}
