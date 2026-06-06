import { Wallet, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: Wallet,
    title: "Low, flat fees",
    body: "One transparent fee and a fair exchange rate, shown in full before you ever confirm a transfer.",
  },
  {
    icon: Layers,
    title: "Every payout method",
    body: "Pay out to bank accounts, mobile wallets, or cash pickup on both sides of the corridor.",
  },
  {
    icon: ShieldCheck,
    title: "Unmatched security",
    body: "Encrypted end to end, monitored in real time, and safeguarded with regulated partners.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
                  Borderless by design
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                  Built to move money, both ways.
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-soft lg:text-right">
                A financial bridge purpose-built for Nigeria and Ivory Coast,
                engineered around how Africans actually send and receive across
                borders.
              </p>
            </div>

            <div className="mt-10 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green">
                    <feature.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
