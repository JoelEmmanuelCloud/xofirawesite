import { Container } from "@/components/ui/Container";

const STATS = [
  { value: "₦18B+", label: "Transferred to date" },
  { value: "120k+", label: "Active customers" },
  { value: "< 3 min", label: "Average payout time" },
  { value: "99.98%", label: "Settlement success" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <Container className="py-10">
        <dl className="grid grid-cols-2 gap-y-8 sm:gap-x-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="tabular text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
