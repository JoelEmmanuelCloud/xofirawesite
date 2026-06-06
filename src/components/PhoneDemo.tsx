import Image from "next/image";
import { PhoneScreen } from "@/components/PhoneScreen";
import { cn } from "@/lib/utils";

const W = 300;
const H = 620;
const D = 22;

function Edge({
  style,
  vertical,
}: {
  style: React.CSSProperties;
  vertical?: boolean;
}) {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 rounded-[8px]"
      style={{
        ...style,
        background: vertical
          ? "linear-gradient(90deg,#0b1220,#41506b 50%,#0b1220)"
          : "linear-gradient(180deg,#0b1220,#41506b 50%,#0b1220)",
      }}
    />
  );
}

export function PhoneDemo({ className }: { className?: string }) {
  return (
    <div className={cn("relative [perspective:1800px]", className)}>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_40%,var(--color-green)_0%,transparent_60%)] opacity-25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-6 top-10 -z-10 h-40 w-40 animate-blob rounded-full bg-green/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-8 bottom-12 -z-10 h-40 w-40 animate-blob rounded-full bg-gold/40 blur-3xl [animation-delay:3s]"
      />
      <div
        aria-hidden
        className="absolute -bottom-2 left-1/2 -z-10 h-12 w-60 -translate-x-1/2 rounded-[50%] bg-black/30 blur-2xl dark:bg-black/50"
      />

      <div className="animate-float-slow [transform-style:preserve-3d]">
        <div
          className="phone-spin relative mx-auto"
          style={{ width: W, height: H }}
        >
          <Edge
            vertical
            style={{ width: D, height: H - 56, marginLeft: -D / 2, marginTop: -(H - 56) / 2, transform: `rotateY(90deg) translateZ(${W / 2}px)` }}
          />
          <Edge
            vertical
            style={{ width: D, height: H - 56, marginLeft: -D / 2, marginTop: -(H - 56) / 2, transform: `rotateY(-90deg) translateZ(${W / 2}px)` }}
          />
          <Edge
            style={{ width: W - 56, height: D, marginLeft: -(W - 56) / 2, marginTop: -D / 2, transform: `rotateX(90deg) translateZ(${H / 2}px)` }}
          />
          <Edge
            style={{ width: W - 56, height: D, marginLeft: -(W - 56) / 2, marginTop: -D / 2, transform: `rotateX(-90deg) translateZ(${H / 2}px)` }}
          />

          <div
            className="phone-face absolute left-1/2 top-1/2 rounded-[2.8rem] border border-white/15 bg-gradient-to-b from-slate-800 to-slate-950 p-2.5 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.65)] ring-1 ring-black/40"
            style={{ width: W, height: H, marginLeft: -W / 2, marginTop: -H / 2, transform: `translateZ(${D / 2}px)` }}
          >
            <div className="absolute left-1/2 top-3.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            <div className="h-full overflow-hidden rounded-[2.2rem]">
              <PhoneScreen />
            </div>
          </div>

          <PhoneBack />
        </div>
      </div>
    </div>
  );
}

function PhoneBack() {
  return (
    <div
      className="phone-face absolute left-1/2 top-1/2 overflow-hidden rounded-[2.8rem] border border-white/10 bg-gradient-to-br from-[#1a2742] via-[#0c1627] to-[#060c18] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.65)] ring-1 ring-black/40"
      style={{ width: W, height: H, marginLeft: -W / 2, marginTop: -H / 2, transform: `rotateY(180deg) translateZ(${D / 2}px)` }}
    >
      <div className="relative h-full">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.08)_45%,transparent_60%)]"
        />

        <div className="absolute left-6 top-6 grid h-24 w-24 grid-cols-2 gap-2 rounded-3xl bg-black/50 p-2.5 ring-1 ring-white/10">
          <Lens />
          <Lens />
          <Lens />
          <span className="flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-amber-100/80 shadow-[0_0_8px_rgba(255,240,200,0.6)]" />
          </span>
        </div>

        <div className="absolute right-7 top-9 h-3 w-3 rounded-full bg-white/10 ring-1 ring-white/15" />

        <div className="flex h-full flex-col items-center justify-center gap-5">
          <Image
            src="/xofira-mark.png"
            alt=""
            width={228}
            height={228}
            className="h-24 w-24 opacity-95 drop-shadow-[0_8px_24px_rgba(31,179,90,0.5)]"
          />
          <span className="text-2xl font-bold tracking-tight text-white/90">
            Xofira
          </span>
        </div>

        <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
          Fast · Secure · Global
        </span>
      </div>
    </div>
  );
}

function Lens() {
  return (
    <span className="flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-black ring-2 ring-white/10">
      <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#3a4a66] to-[#0a1120] ring-1 ring-white/20">
        <span className="block h-1.5 w-1.5 translate-x-1 translate-y-1 rounded-full bg-[#6ea8ff]/40" />
      </span>
    </span>
  );
}
