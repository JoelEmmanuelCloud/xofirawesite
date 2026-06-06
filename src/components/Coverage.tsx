import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Flag } from "@/components/Flag";

const CITIES = {
  NG: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"],
  CI: ["Abidjan", "Bouaké", "Yamoussoukro", "San-Pédro", "Korhogo"],
};

export function Coverage() {
  return (
    <section id="coverage" className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Coverage"
            title={
              <>
                One corridor,{" "}
                <span className="gradient-text animate-gradient">
                  every direction
                </span>
              </>
            }
            description="Xofira is purpose-built for Nigeria and Ivory Coast. We focus on this corridor so we can deliver the best rates, speed, and reliability on every transfer."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <CityColumn country="NG" name="Nigeria" code="NGN" />
            <CityColumn country="CI" name="Ivory Coast" code="XOF" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[2.4rem] bg-gradient-to-br from-brand/20 via-green/10 to-gold/15 blur-2xl"
            />
            <div className="rounded-[2.4rem] border border-border bg-card p-8 shadow-lift">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Flag country="NG" className="h-20 w-20 shadow-soft" />
                  <span className="text-sm font-bold text-ink">Nigeria</span>
                  <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green">
                    NGN
                  </span>
                </div>

                <div className="relative flex-1 px-4">
                  <div className="h-0.5 w-full bg-gradient-to-r from-green via-brand to-gold" />
                  <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-glow">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                  <span className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full bg-brand/40" />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Flag country="CI" className="h-20 w-20 shadow-soft" />
                  <span className="text-sm font-bold text-ink">Ivory Coast</span>
                  <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold text-gold">
                    XOF
                  </span>
                </div>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-center">
                <div>
                  <dt className="text-xs text-muted">Settlement</dt>
                  <dd className="mt-1 text-lg font-bold text-ink">Minutes</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Availability</dt>
                  <dd className="mt-1 text-lg font-bold text-ink">24 / 7</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function CityColumn({
  country,
  name,
  code,
}: {
  country: "NG" | "CI";
  name: string;
  code: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-2.5">
        <Flag country={country} className="h-8 w-8" />
        <div className="leading-tight">
          <div className="text-sm font-bold text-ink">{name}</div>
          <div className="text-xs text-muted">{code}</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {CITIES[country].map((city) => (
          <li
            key={city}
            className="flex items-center gap-2 text-sm text-ink-soft"
          >
            <MapPin className="h-3.5 w-3.5 text-brand" />
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
