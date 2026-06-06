import { Zap, Building2, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { AreaChart } from "@/components/AreaChart";
import { Flag } from "@/components/Flag";

const VOLUME = [0.6, 0.85, 1.0, 1.25, 1.55, 1.85];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export function WhyXofira() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Why us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Why senders prefer Xofira
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-7">
              <span className="text-5xl font-bold tracking-tight text-green sm:text-6xl">
                120k+
              </span>
              <p className="mt-6 text-[15px] font-medium leading-relaxed text-ink-soft">
                Customers already sending money across the corridor with Xofira.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={80}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <h3 className="max-w-xs text-xl font-bold leading-snug text-ink">
                Instant payout, in either direction
              </h3>
              <div className="mt-auto flex items-center gap-4 pt-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green text-white shadow-soft">
                  <Zap className="h-5 w-5" />
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-green via-border to-navy" />
                <Flag country="NG" className="h-9 w-9" />
                <Flag country="CI" className="h-9 w-9" />
                <span className="h-px flex-1 bg-gradient-to-r from-navy via-border to-green" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white shadow-soft">
                  <Building2 className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={160}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold">
                <Lock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">Locked-in rates</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Your rate is fixed the moment you confirm. The amount your
                recipient gets never changes after you send.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={240}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted">Monthly volume</p>
                  <p className="tabular mt-1 text-2xl font-bold text-ink">
                    ₦1.85B
                  </p>
                </div>
                <span className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-ink-soft">
                  6 months
                </span>
              </div>
              <div className="mt-4 h-40 flex-1">
                <AreaChart data={VOLUME} labels={MONTHS} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
