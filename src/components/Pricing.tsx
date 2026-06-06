import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Personal",
    price: "Free",
    note: "Pay only a small flat fee per transfer.",
    features: [
      "Send and receive both ways",
      "Bank, wallet & cash payout",
      "Live rate tracking",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "Custom",
    note: "Preferred rates and bulk payouts for companies.",
    features: [
      "Volume exchange rates",
      "Bulk & scheduled payouts",
      "Dedicated account manager",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Plans
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Simple pricing for everyone
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <div
                className={cn(
                  "group flex h-full flex-col rounded-3xl p-8 transition",
                  plan.featured
                    ? "bg-gradient-to-br from-green to-[#0f7d44] text-white shadow-glow-green"
                    : "border border-border bg-surface text-ink",
                )}
              >
                <div className="flex items-start justify-between">
                  <h3
                    className={cn(
                      "text-lg font-bold",
                      plan.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full transition group-hover:rotate-45",
                      plan.featured
                        ? "bg-white/20 text-white"
                        : "bg-card text-green ring-1 ring-border",
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.featured ? "text-white/80" : "text-ink-soft",
                  )}
                >
                  {plan.note}
                </p>

                <ul className="mt-8 space-y-3 border-t pt-6 text-sm" style={{ borderColor: plan.featured ? "rgba(255,255,255,0.2)" : "var(--color-border)" }}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0",
                          plan.featured ? "text-white" : "text-green",
                        )}
                        strokeWidth={2.5}
                      />
                      <span
                        className={plan.featured ? "text-white/90" : "text-ink-soft"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#get-started"
                  className={cn(
                    "mt-8 flex h-12 items-center justify-center rounded-xl text-[15px] font-semibold transition",
                    plan.featured
                      ? "bg-white text-green hover:brightness-95"
                      : "bg-navy text-white hover:brightness-125",
                  )}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
