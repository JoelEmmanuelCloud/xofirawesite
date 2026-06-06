import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "lockup";
  onDark?: boolean;
  className?: string;
  href?: string;
}

export function Logo({
  variant = "full",
  onDark = false,
  className,
  href = "/",
}: LogoProps) {
  const content =
    variant === "full" && !onDark ? (
      <Image
        src="/xofira-logo.png"
        alt="Xofira"
        width={650}
        height={188}
        priority
        className="h-9 w-auto"
      />
    ) : (
      <span className="flex items-center gap-2.5">
        <Image
          src="/xofira-mark.png"
          alt=""
          width={228}
          height={228}
          className="h-9 w-9"
        />
        <span
          className={cn(
            "text-2xl font-bold tracking-tight",
            onDark ? "text-white" : "text-brand-ink",
          )}
        >
          Xofira
        </span>
      </span>
    );

  return (
    <Link
      href={href}
      aria-label="Xofira home"
      className={cn(
        "inline-flex items-center rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      {content}
    </Link>
  );
}
