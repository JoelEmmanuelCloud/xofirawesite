import { ArrowRight, Star, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Flag } from "@/components/Flag";
import { PhoneDemo } from "@/components/PhoneDemo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-70" />
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-blob rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-10 h-[30rem] w-[30rem] animate-blob rounded-full bg-green/20 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-[-16rem] left-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-gold/15 blur-3xl [animation-delay:8s]" />
      </div>

      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <div className="animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] max-lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-semibold text-ink-soft shadow-soft">
            <span className="flex -space-x-1.5">
              <Flag country="NG" className="h-5 w-5 ring-2 ring-card" />
              <Flag country="CI" className="h-5 w-5 ring-2 ring-card" />
            </span>
            Nigeria ↔ Ivory Coast · both directions
          </div>

          <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl">
            Send money across{" "}
            <span className="gradient-text animate-gradient">borders</span>,{" "}
            <br className="hidden sm:block" />
            in a tap.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft max-lg:mx-auto">
            Xofira is a next-generation fintech platform for seamless,
            bidirectional transfers between NGN and XOF. Transparent rates, low
            fees, bank-grade security. Fast. Secure. Global.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row max-lg:justify-center">
            <Button href="#get-started" size="lg">
              Start a transfer
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#calculator" variant="secondary" size="lg">
              <Zap className="h-5 w-5 text-gold" />
              See live rates
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft max-lg:justify-center">
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
              <span className="text-muted">· 12,000+ customers</span>
            </div>
          </div>
        </div>

        <div className="animate-[rise_0.8s_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]">
          <PhoneDemo />
        </div>
      </Container>
    </section>
  );
}
