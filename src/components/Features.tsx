import {
  RefreshCw,
  Gauge,
  BadgePercent,
  ShieldCheck,
  Building2,
  Wallet,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Flag } from "@/components/Flag";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Xofira"
            title={
              <>
                Built for the{" "}
                <span className="gradient-text animate-gradient">
                  Nigeria–Ivory Coast
                </span>{" "}
                corridor
              </>
            }
            description="Everything you need to move money across borders, designed around how Africans actually send and receive."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-[#1b4fb0] p-8 text-white shadow-glow">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-green/30 blur-3xl"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                <RefreshCw className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Truly bidirectional</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/80">
                Send NGN to XOF or XOF to NGN with the same speed and pricing.
                One platform for the entire corridor, in both directions.
              </p>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-2.5">
                    <Flag country="NG" className="h-9 w-9 ring-2 ring-white/30" />
                    <span className="text-sm font-semibold">Nigeria</span>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-lg">
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-semibold">Ivory Coast</span>
                    <Flag country="CI" className="h-9 w-9 ring-2 ring-white/30" />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal className="sm:col-span-2" delay={80}>
            <FeatureCard
              icon={Gauge}
              accent="text-brand bg-brand-soft"
              title="Minutes, not days"
              body="Most transfers settle in under three minutes through direct banking and mobile-money rails on both sides."
              wide
            />
          </Reveal>

          <Reveal delay={160}>
            <FeatureCard
              icon={BadgePercent}
              accent="text-green bg-green-soft"
              title="Transparent pricing"
              body="One clear fee, one fair rate, shown upfront."
            />
          </Reveal>

          <Reveal delay={240}>
            <FeatureCard
              icon={ShieldCheck}
              accent="text-gold bg-gold-soft"
              title="Bank-grade security"
              body="Encrypted, monitored, and safeguarded funds."
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft">
            <span className="font-semibold text-ink">Pay out to</span>
            {[
              { icon: Building2, label: "Bank accounts" },
              { icon: Wallet, label: "Mobile wallets" },
              { icon: Banknote, label: "Cash pickup" },
            ].map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 font-medium text-ink-soft"
              >
                <m.icon className="h-4 w-4 text-brand" />
                {m.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  accent,
  title,
  body,
  wide,
}: {
  icon: typeof Gauge;
  accent: string;
  title: string;
  body: string;
  wide?: boolean;
}) {
  return (
    <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent} transition group-hover:scale-110`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed text-ink-soft ${wide ? "max-w-md" : ""}`}>
        {body}
      </p>
    </article>
  );
}
