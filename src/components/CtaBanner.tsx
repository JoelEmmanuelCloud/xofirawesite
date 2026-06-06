import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section id="get-started" className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-7 py-12 sm:px-12 sm:py-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green/25 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
            </div>

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
                  Try it now
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to send money home?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  Join thousands moving money between Nigeria and Ivory Coast
                  with Xofira. No hidden fees, no waiting.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href="#" size="lg">
                  Create free account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="#how-it-works"
                  size="lg"
                  className="border-0 bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
