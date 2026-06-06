import { Fragment } from "react";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  step?: number;
  start?: number;
}

export function AnimatedHeadline({
  text,
  className,
  step = 70,
  start = 120,
}: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            className="inline-block animate-[word-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] will-change-transform"
            style={{ animationDelay: `${start + i * step}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
