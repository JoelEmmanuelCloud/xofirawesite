"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Which directions can I send money?",
    a: "Xofira supports both directions of the corridor: send Nigerian Naira (NGN) to recipients in Ivory Coast as West African CFA francs (XOF), and send XOF from Ivory Coast to recipients in Nigeria as NGN.",
  },
  {
    q: "How fast do transfers arrive?",
    a: "The large majority of transfers are paid out within minutes. Timing can vary slightly depending on the recipient's bank or mobile-money provider, and you can track the status live at every step.",
  },
  {
    q: "How are the exchange rate and fees calculated?",
    a: "You always see the exact exchange rate and a single transparent fee before you confirm. The rate is locked the moment you confirm, so the amount your recipient receives never changes after you send.",
  },
  {
    q: "How do I fund a transfer?",
    a: "You can fund transfers by bank transfer, debit card, or mobile money, depending on your country. Recipients can be paid into a bank account, a mobile wallet, or via cash pickup.",
  },
  {
    q: "Is Xofira secure and regulated?",
    a: "Yes. Xofira operates under regulatory oversight in each market with full KYC and AML programs. Funds are safeguarded with regulated partners, and every transaction is encrypted and monitored for fraud.",
  },
  {
    q: "Are there limits on how much I can send?",
    a: "Transfer limits apply per transaction and are shown in the calculator. Higher limits may be available once your account is fully verified. Reach out to support if you need to move larger amounts.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before your first transfer."
        />

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface cursor-pointer"
                >
                  <span className="text-base font-semibold text-ink">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
