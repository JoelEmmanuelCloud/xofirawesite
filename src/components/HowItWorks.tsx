import { UserPlus, Calculator, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create your account",
    body: "Sign up in minutes and verify your identity once. KYC is built in and reusable across every transfer.",
  },
  {
    icon: Calculator,
    title: "Set the amount",
    body: "Enter how much to send in NGN or XOF. See the exact rate, fee, and payout before you confirm.",
  },
  {
    icon: Send,
    title: "Fund the transfer",
    body: "Pay with a bank transfer, card, or mobile money. Funds are secured the moment they reach us.",
  },
  {
    icon: CheckCircle2,
    title: "Recipient gets paid",
    body: "Money lands in a bank account or mobile wallet in minutes, with live tracking from start to finish.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From Lagos to Abidjan in{" "}
                <span className="gradient-text animate-gradient">four steps</span>
              </>
            }
            description="Whether you are sending naira to Ivory Coast or CFA francs back to Nigeria, the flow is the same."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition group-hover:opacity-100"
                />
                <span className="absolute right-5 top-4 text-5xl font-bold text-surface-strong transition group-hover:text-brand-soft">
                  {index + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:scale-110">
                  <step.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
