import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
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
  { value: 180, suffix: "K+", label: "Transfers settled" },
  { value: 99.98, decimals: 2, suffix: "%", label: "Settlement success" },
];

export function TrustBar() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Our mission
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Moving money for thousands, every day
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Senders and businesses across Nigeria and Ivory Coast trust Xofira
              to move money quickly, transparently, and safely.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                  />
                </dt>
                <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
