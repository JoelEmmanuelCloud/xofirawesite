import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    title: "Create your account",
    body: "Sign up in minutes and verify your identity once. KYC is built in and reusable across every transfer.",
  },
  {
    title: "Set the amount",
    body: "Enter how much to send in NGN or XOF and see the exact rate, fee, and payout before you confirm.",
  },
  {
    title: "Recipient gets paid",
    body: "Money lands in a bank account or mobile wallet in minutes, with live tracking from start to finish.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-green">
            How it works
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Send across borders in three simple steps.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="h-full bg-navy p-7 sm:p-8">
                <span className="text-5xl font-bold text-white/15">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
