import { ArrowRight, Apple, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Flag } from "@/components/Flag";

export function CtaBanner() {
  return (
    <section id="get-started" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center shadow-glow sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
          >
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-green/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gold/40 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white">
              <span className="flex -space-x-1.5">
                <Flag country="NG" className="h-5 w-5 ring-2 ring-brand" />
                <Flag country="CI" className="h-5 w-5 ring-2 ring-brand" />
              </span>
              Fast. Secure. Global.
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Your first transfer is minutes away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Join thousands moving money between Nigeria and Ivory Coast with
              Xofira. No hidden fees, no waiting.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" variant="gold" size="lg">
                Create free account
                <ArrowRight className="h-5 w-5" />
              </Button>
              <div className="flex gap-3">
                <Button
                  href="#"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 text-white ring-white/30 hover:bg-white/20"
                >
                  <Apple className="h-5 w-5" /> iOS
                </Button>
                <Button
                  href="#"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 text-white ring-white/30 hover:bg-white/20"
                >
                  <Smartphone className="h-5 w-5" /> Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
