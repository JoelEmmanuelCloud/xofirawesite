import { ArrowRight, Building2, Wallet, Banknote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flag } from "@/components/Flag";
import { CURRENCIES } from "@/lib/rates";

const PAYOUT = [
  { icon: Building2, label: "Bank accounts" },
  { icon: Wallet, label: "Mobile wallets" },
  { icon: Banknote, label: "Cash pickup" },
];

function CorridorCard({
  from,
  to,
}: {
  from: "NG" | "CI";
  to: "NG" | "CI";
}) {
  const fromCode = from === "NG" ? "NGN" : "XOF";
  const toCode = to === "NG" ? "NGN" : "XOF";
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <Flag country={from} className="h-11 w-11" />
        <div className="leading-tight">
          <div className="text-sm font-bold text-ink">
            {CURRENCIES[fromCode].country}
          </div>
          <div className="text-xs text-muted">{fromCode}</div>
        </div>
      </div>
      <ArrowRight className="mx-auto h-5 w-5 shrink-0 text-brand" />
      <div className="flex items-center gap-3">
        <Flag country={to} className="h-11 w-11" />
        <div className="leading-tight">
          <div className="text-sm font-bold text-ink">
            {CURRENCIES[toCode].country}
          </div>
          <div className="text-xs text-muted">{toCode}</div>
        </div>
      </div>
    </div>
  );
}

export function Coverage() {
  return (
    <section id="coverage" className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Coverage"
            title="One corridor, every direction"
            description="Xofira is purpose-built for Nigeria and Ivory Coast. We focus on this corridor so we can deliver the best rates, speed, and reliability on every single transfer."
          />

          <div className="mt-8 space-y-3">
            <CorridorCard from="NG" to="CI" />
            <CorridorCard from="CI" to="NG" />
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-ink">Pay out to</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {PAYOUT.map((method) => (
                <span
                  key={method.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink-soft"
                >
                  <method.icon className="h-4 w-4 text-brand" />
                  {method.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-green/5 to-gold/10 blur-2xl"
          />
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-lift">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-3">
                <Flag country="NG" className="h-20 w-20 shadow-soft" />
                <span className="text-sm font-bold text-ink">Nigeria</span>
                <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green">
                  NGN
                </span>
              </div>

              <div className="relative flex-1 px-4">
                <div className="h-px w-full bg-gradient-to-r from-green via-brand to-gold" />
                <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-glow">
                  <ArrowRight className="h-5 w-5" />
                </span>
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
      </Container>
    </section>
  );
}
