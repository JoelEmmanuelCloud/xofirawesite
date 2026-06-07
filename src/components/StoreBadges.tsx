import { cn } from "@/lib/utils";

const APPLE_PATH =
  "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z";

const PLAY_PATH =
  "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z";

const badge =
  "inline-flex items-center gap-2.5 rounded-xl bg-navy px-4 py-2.5 text-white shadow-soft ring-1 ring-white/10 transition hover:brightness-125 active:translate-y-px";

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a href="#" aria-label="Download on the App Store" className={badge}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d={APPLE_PATH} />
        </svg>
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium text-white/80">
            Download on the
          </span>
          <span className="mt-0.5 text-[17px] font-semibold leading-tight">
            App Store
          </span>
        </span>
      </a>

      <a href="#" aria-label="Get it on Google Play" className={badge}>
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <defs>
            <linearGradient id="gplay" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="34%" stopColor="#00E5A0" />
              <stop offset="68%" stopColor="#FFCE00" />
              <stop offset="100%" stopColor="#FF4B3E" />
            </linearGradient>
          </defs>
          <path d={PLAY_PATH} fill="url(#gplay)" />
        </svg>
        <span className="flex flex-col text-left leading-none">
          <span className="text-[9px] font-medium uppercase tracking-wide text-white/80">
            Get it on
          </span>
          <span className="mt-0.5 text-[17px] font-semibold leading-tight">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
