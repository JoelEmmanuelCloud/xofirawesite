import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/CountUp";

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { value: 18, prefix: "₦", suffix: "B+", label: "Transferred to date" },
  { value: 120, suffix: "k+", label: "Active customers" },
  { value: 3, prefix: "< ", suffix: " min", label: "Average payout" },
  { value: 99.98, decimals: 2, suffix: "%", label: "Settlement success" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-surface/60">
      <Container className="py-10">
        <dl className="grid grid-cols-2 gap-y-8 sm:gap-x-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
