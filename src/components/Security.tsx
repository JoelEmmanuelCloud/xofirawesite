import { Lock, FileCheck2, Eye, ServerCog } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    body: "Every byte in transit and at rest is encrypted with industry-standard cryptography.",
  },
  {
    icon: FileCheck2,
    title: "Licensed & compliant",
    body: "Operating under regulatory oversight in each market, with full KYC and AML programs.",
  },
  {
    icon: Eye,
    title: "Real-time monitoring",
    body: "Machine-learning fraud detection screens every transaction before it settles.",
  },
  {
    icon: ServerCog,
    title: "Safeguarded funds",
    body: "Customer balances are held separately in regulated partner institutions.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-green/20 blur-3xl" />
      </div>

      <Container>
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
            Security &amp; trust
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your money is protected at every step
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Trust is the foundation of cross-border payments. We hold ourselves
            to the standards of the institutions we work with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold">
                <pillar.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
