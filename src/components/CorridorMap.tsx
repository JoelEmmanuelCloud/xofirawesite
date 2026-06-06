"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Flag } from "@/components/Flag";
import { cn } from "@/lib/utils";
import {
  VB_W,
  VB_H,
  NG_ID,
  CI_ID,
  LAGOS,
  ABIDJAN,
  COUNTRIES,
} from "@/lib/mapPaths";

const CTRL = {
  x: (LAGOS.x + ABIDJAN.x) / 2,
  y: Math.min(LAGOS.y, ABIDJAN.y) - 78,
};
const ARC = `M ${ABIDJAN.x} ${ABIDJAN.y} Q ${CTRL.x} ${CTRL.y} ${LAGOS.x} ${LAGOS.y}`;

const TRANSACTIONS = [
  { label: "₦100,000", to: "CFA 35,646" },
  { label: "CFA 50,000", to: "₦139,200" },
  { label: "₦250,000", to: "CFA 89,100" },
  { label: "CFA 120,000", to: "₦334,080" },
];

const CHIP = { x: CTRL.x, y: CTRL.y - 14 };

function pct(x: number, y: number) {
  return { left: `${(x / VB_W) * 100}%`, top: `${(y / VB_H) * 100}%` };
}

export function CorridorMap({ className }: { className?: string }) {
  const [animate, setAnimate] = useState(false);
  const [tx, setTx] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(
      () => setTx((t) => (t + 1) % TRANSACTIONS.length),
      2200,
    );
    return () => clearInterval(id);
  }, [animate]);

  const active = TRANSACTIONS[animate ? tx : 0];

  return (
    <div className={cn("relative mx-auto aspect-[480/540] w-full max-w-xl", className)}>
      <div
        aria-hidden
        className="absolute left-[26%] top-[42%] -z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-green)_0%,transparent_65%)] opacity-25 blur-2xl"
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

        <g className="stroke-background" strokeWidth={0.7}>
          {COUNTRIES.map((c) => {
            const highlight = c.id === NG_ID || c.id === CI_ID;
            if (highlight) return null;
            return <path key={c.id} d={c.d} className="fill-ink/15" />;
          })}
        </g>

        {COUNTRIES.filter((c) => c.id === NG_ID || c.id === CI_ID).map((c) => (
          <path
            key={`glow-${c.id}`}
            d={c.d}
            className={c.id === NG_ID ? "fill-green" : "fill-brand"}
            filter="url(#soft)"
            opacity={0.5}
          />
        ))}
        {COUNTRIES.filter((c) => c.id === NG_ID || c.id === CI_ID).map((c) => (
          <path
            key={`fill-${c.id}`}
            d={c.d}
            className={c.id === NG_ID ? "fill-green stroke-green" : "fill-brand stroke-brand"}
            strokeWidth={0.5}
          />
        ))}

        <path
          d={ARC}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth={2}
          strokeOpacity={0.22}
          strokeLinecap="round"
        />
        {animate ? (
          <path
            d={ARC}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="14 150"
          >
            <animate attributeName="stroke-dashoffset" from="164" to="0" dur="2.4s" repeatCount="indefinite" />
          </path>
        ) : null}

        {[LAGOS, ABIDJAN].map((c, i) => (
          <g key={i}>
            {animate ? (
              <circle cx={c.x} cy={c.y} r={5} className={i === 0 ? "fill-green/40" : "fill-brand/40"}>
                <animate attributeName="r" from="5" to="18" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" repeatCount="indefinite" />
              </circle>
            ) : null}
            <circle cx={c.x} cy={c.y} r={5} className={i === 0 ? "fill-green" : "fill-brand"} />
            <circle cx={c.x} cy={c.y} r={5} fill="none" className="stroke-background" strokeWidth={2} />
          </g>
        ))}

        {animate ? (
          <>
            <circle r={4} className="fill-green">
              <animateMotion dur="2.4s" repeatCount="indefinite" path={ARC} />
            </circle>
            <circle r={4} className="fill-brand">
              <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path={ARC} />
            </circle>
          </>
        ) : null}
      </svg>

      <CityTag country="CI" name="Ivory Coast" city="Abidjan" point={ABIDJAN} side="left" />
      <CityTag country="NG" name="Nigeria" city="Lagos" point={LAGOS} side="right" />

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        style={pct(CHIP.x, CHIP.y)}
      >
        <div
          key={animate ? tx : "static"}
          className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-ink shadow-lift"
          style={animate ? { animation: "chip-in 0.5s ease-out both" } : undefined}
        >
          <span className="tabular">{active.label}</span>
          <ArrowRight className="h-3 w-3 text-green" />
          <span className="tabular text-green">{active.to}</span>
        </div>
      </div>
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
        side === "left" ? "-translate-x-[94%] translate-y-3" : "translate-x-[6%] translate-y-3",
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
