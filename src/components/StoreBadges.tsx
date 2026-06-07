import Image from "next/image";
import { cn } from "@/lib/utils";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href="#"
        aria-label="Download on the App Store"
        className="inline-block transition hover:opacity-80"
      >
        <Image
          src="/appstore.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          unoptimized
          priority
          className="h-[46px] w-auto"
        />
      </a>
      <a
        href="#"
        aria-label="Get it on Google Play"
        className="inline-block transition hover:opacity-80"
      >
        <Image
          src="/googleplay.svg"
          alt="Get it on Google Play"
          width={155}
          height={46}
          unoptimized
          priority
          className="h-[46px] w-auto"
        />
      </a>
    </div>
  );
}
