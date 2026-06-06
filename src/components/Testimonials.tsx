import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flag } from "@/components/Flag";

const REVIEWS = [
  {
    quote:
      "I pay my suppliers in Abidjan every week. With Xofira the money arrives before I even hang up the phone. The rate is the best I have found.",
    name: "Chinedu O.",
    role: "Importer, Lagos",
    country: "NG" as const,
  },
  {
    quote:
      "Sending money to my family in Nigeria used to take two days and cost a fortune. Now it is instant and I always know exactly what they will receive.",
    name: "Aïcha K.",
    role: "Nurse, Abidjan",
    country: "CI" as const,
  },
  {
    quote:
      "The app is clean, the fees are clear, and support actually answers in French. Xofira understands this corridor better than anyone.",
    name: "Marc D.",
    role: "Freelancer, Bouaké",
    country: "CI" as const,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Loved on both sides"
          title="Trusted by senders across the corridor"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <Quote className="h-8 w-8 text-brand/30" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Flag country={review.country} className="h-10 w-10" />
                <div>
                  <div className="text-sm font-bold text-ink">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted">{review.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
