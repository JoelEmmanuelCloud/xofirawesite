"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Flag } from "@/components/Flag";
import { cn } from "@/lib/utils";

const VB_W = 480;
const VB_H = 540;

const NG = { x: 190, y: 316 };
const CI = { x: 133, y: 330 };
const CTRL = { x: 162, y: 214 };

const ARC = `M ${CI.x} ${CI.y} Q ${CTRL.x} ${CTRL.y} ${NG.x} ${NG.y}`;

const AFRICA =
  "M120 95 C150 78 215 76 252 80 C300 84 345 88 392 110 C410 138 414 178 420 208 C458 206 474 214 470 226 C452 240 432 244 416 256 C404 300 386 356 352 418 C330 458 312 492 290 512 C280 522 268 520 260 506 C246 474 236 432 232 392 C230 360 236 340 224 326 C214 318 200 318 190 322 C168 320 150 326 133 332 C112 330 96 326 86 312 C72 300 66 282 72 262 C78 240 92 224 98 206 C104 170 108 130 120 95 Z";

const NIGERIA =
  "M176 304 C186 300 202 302 208 312 C212 322 204 332 192 332 C180 332 170 324 169 315 C169 309 172 306 176 304 Z";

const IVORY =
  "M120 318 C130 314 145 316 151 324 C155 333 149 341 139 341 C129 341 118 335 116 327 C115 323 116 320 120 318 Z";

function pct(x: number, y: number) {
  return { left: `${(x / VB_W) * 100}%`, top: `${(y / VB_H) * 100}%` };
}

const CHIPS = [
  { label: "₦100,000", to: "CFA 35,646", x: 162, y: 178, delay: 0 },
  { label: "CFA 50,000", to: "₦139,200", x: 108, y: 244, delay: 1800 },
  { label: "₦250,000", to: "CFA 89,100", x: 220, y: 244, delay: 3400 },
];

export function CorridorMap({ className }: { className?: string }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-xl", className)}>
      <div
        aria-hidden
        className="absolute left-[28%] top-[55%] -z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-green)_0%,transparent_65%)] opacity-25 blur-2xl"
      />

      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-full w-full"
        role="img"
        aria-label="Real-time transfers between Nigeria and Ivory Coast"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-brand)" />
            <stop offset="100%" stopColor="var(--color-green)" />
          </linearGradient>
          <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        <path d={AFRICA} className="fill-surface-strong stroke-border" strokeWidth={1.5} />

        <path d={IVORY} className="fill-brand" filter="url(#soft)" opacity={0.5} />
        <path d={NIGERIA} className="fill-green" filter="url(#soft)" opacity={0.5} />
        <path d={IVORY} className="fill-brand" />
        <path d={NIGERIA} className="fill-green" />

        <path
          d={ARC}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth={2.5}
          strokeOpacity={0.22}
          strokeLinecap="round"
        />
        {animate ? (
          <path
            d={ARC}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="16 175"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="191"
              to="0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </path>
        ) : null}

        {[NG, CI].map((c, i) => (
          <g key={i}>
            {animate ? (
              <circle cx={c.x} cy={c.y} r={6} className={i === 0 ? "fill-green/40" : "fill-brand/40"}>
                <animate attributeName="r" from="6" to="22" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" repeatCount="indefinite" />
              </circle>
            ) : null}
            <circle cx={c.x} cy={c.y} r={6} className={i === 0 ? "fill-green" : "fill-brand"} />
            <circle cx={c.x} cy={c.y} r={6} fill="none" className="stroke-background" strokeWidth={2.5} />
          </g>
        ))}

        {animate ? (
          <>
            <circle r={4.5} className="fill-green">
              <animateMotion dur="2.4s" repeatCount="indefinite" path={ARC} />
            </circle>
            <circle r={4.5} className="fill-brand">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                keyPoints="1;0"
                keyTimes="0;1"
                calcMode="linear"
                path={ARC}
              />
            </circle>
          </>
        ) : null}
      </svg>

      <CityTag country="CI" name="Ivory Coast" city="Abidjan" point={CI} side="left" />
      <CityTag country="NG" name="Nigeria" city="Lagos" point={NG} side="right" />

      {CHIPS.map((chip) => (
        <div
          key={chip.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          style={pct(chip.x, chip.y)}
        >
          <div
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-ink shadow-lift"
            style={
              animate
                ? { animation: `chip-cycle 5.4s ease-in-out ${chip.delay}ms infinite` }
                : undefined
            }
          >
            <span className="tabular">{chip.label}</span>
            <ArrowRight className="h-3 w-3 text-green" />
            <span className="tabular text-green">{chip.to}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CityTag({
  country,
  name,
  city,
  point,
  side,
}: {
  country: "NG" | "CI";
  name: string;
  city: string;
  point: { x: number; y: number };
  side: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "absolute flex items-center gap-2 rounded-xl border border-border bg-card px-2.5 py-1.5 shadow-soft",
        side === "left" ? "-translate-x-[92%] translate-y-4" : "translate-x-[8%] translate-y-4",
      )}
      style={{ left: `${(point.x / VB_W) * 100}%`, top: `${(point.y / VB_H) * 100}%` }}
    >
      <Flag country={country} className="h-6 w-6" />
      <div className="leading-tight">
        <div className="text-xs font-bold text-ink">{name}</div>
        <div className="text-[10px] text-muted">{city}</div>
      </div>
    </div>
  );
}
