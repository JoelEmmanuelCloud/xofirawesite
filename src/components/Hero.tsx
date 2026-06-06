import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Flag } from "@/components/Flag";
import { CorridorMap } from "@/components/CorridorMap";
import { EmailCapture } from "@/components/EmailCapture";
import { Partners } from "@/components/Partners";

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-soft/70 via-background to-background" />
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-50" />
        <div className="absolute -right-20 top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,var(--color-green)_0%,transparent_60%)] opacity-[0.12] blur-2xl" />
        <div className="absolute -left-32 top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-brand)_0%,transparent_60%)] opacity-[0.10] blur-2xl" />
      </div>

      <Container className="grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-36">
        <div className="animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] max-lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink-soft shadow-soft">
            <span className="flex -space-x-1.5">
              <Flag country="NG" className="h-4 w-4 ring-2 ring-card" />
              <Flag country="CI" className="h-4 w-4 ring-2 ring-card" />
            </span>
            Now live: Nigeria ↔ Ivory Coast
          </div>

          <h1 className="mt-5 text-[2.7rem] font-bold leading-[1.03] tracking-tight text-ink sm:text-[3.4rem]">
            Send money across borders, the moment it matters.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft max-lg:mx-auto">
            Xofira moves money both ways between Nigeria (NGN) and Ivory Coast
            (XOF) in minutes. Transparent rates, low fees, bank-grade security.
            Fast. Secure. Global.
          </p>

          <div className="mt-8 max-lg:mx-auto max-lg:max-w-md">
            <EmailCapture />
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-ink-soft max-lg:justify-center">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1.5} />
              ))}
            </span>
            <span className="font-semibold text-ink">4.9/5</span>
            <span className="text-muted">from 12,000+ customers</span>
          </div>

          <div className="mt-10">
            <Partners />
          </div>
        </div>

        <div className="animate-[rise_0.8s_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]">
          <CorridorMap />
        </div>
      </Container>
    </section>
  );
}
