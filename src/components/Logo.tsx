"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  onDark?: boolean;
  className?: string;
  href?: string;
}

function Lockup({ light }: { light?: boolean }) {
  return (
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
          light ? "text-white" : "text-brand-ink",
        )}
      >
        Xofira
      </span>
    </span>
  );
}

export function Logo({ onDark = false, className, href = "/" }: LogoProps) {
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === pathname) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-label="Xofira home"
      className={cn(
        "inline-flex items-center rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      {onDark ? (
        <Lockup light />
      ) : (
        <>
          <Image
            src="/xofira-logo.png"
            alt="Xofira"
            width={650}
            height={188}
            priority
            className="h-9 w-auto dark:hidden"
          />
          <span className="hidden dark:flex">
            <Lockup light />
          </span>
        </>
      )}
    </Link>
  );
}
