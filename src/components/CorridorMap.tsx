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
  NG_CITIES,
  CI_CITIES,
  COUNTRIES,
  type City,
} from "@/lib/mapPaths";

const NG_HUB = NG_CITIES.find((c) => c.hub) ?? NG_CITIES[0];
const CI_HUB = CI_CITIES.find((c) => c.hub) ?? CI_CITIES[0];

const PAIRS = [
  { ng: 0, ci: 0, lift: 84, dir: 1 },
  { ng: 1, ci: 2, lift: 58, dir: -1 },
  { ng: 2, ci: 4, lift: 72, dir: 1 },
  { ng: 3, ci: 3, lift: 40, dir: -1 },
];

function arcPath(a: City, b: City, lift: number) {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - lift;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

const MAIN_ARC = arcPath(NG_CITIES[0], CI_CITIES[0], PAIRS[0].lift);
const CHIP = {
  x: (NG_HUB.x + CI_HUB.x) / 2,
  y: Math.min(NG_HUB.y, CI_HUB.y) - PAIRS[0].lift - 12,
};

const TRANSACTIONS = [
  { label: "₦100,000", to: "CFA 35,646" },
  { label: "CFA 50,000", to: "₦139,200" },
  { label: "₦250,000", to: "CFA 89,100" },
  { label: "CFA 120,000", to: "₦334,080" },
];

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
        aria-label="Real-time transfers across cities in Nigeria and Ivory Coast"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-brand)" />
            <stop offset="100%" stopColor="var(--color-green)" />
          </linearGradient>
        </defs>

        <g className="stroke-background" strokeWidth={0.7}>
          {COUNTRIES.map((c) =>
            c.id === NG_ID || c.id === CI_ID ? null : (
              <path key={c.id} d={c.d} className="fill-ink/15" />
            ),
          )}
        </g>

        {COUNTRIES.filter((c) => c.id === NG_ID || c.id === CI_ID).map((c) => (
          <path
            key={`fill-${c.id}`}
            d={c.d}
            className={c.id === NG_ID ? "fill-green/90 stroke-green" : "fill-brand/90 stroke-brand"}
            strokeWidth={0.5}
          />
        ))}

        {PAIRS.map((p, i) => {
          const a = NG_CITIES[p.ng];
          const b = CI_CITIES[p.ci];
          const d = arcPath(a, b, p.lift);
          const main = i === 0;
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth={main ? 2 : 1.25}
                strokeOpacity={main ? 0.3 : 0.18}
                strokeLinecap="round"
              />
              {animate ? (
                <circle r={main ? 4 : 3} className={p.dir === 1 ? "fill-green" : "fill-brand"}>
                  <animateMotion
                    dur={`${main ? 2.4 : 3}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints={p.dir === 1 ? "0;1" : "1;0"}
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              ) : null}
            </g>
          );
        })}

        {animate ? (
          <path
            d={MAIN_ARC}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="14 150"
          >
            <animate attributeName="stroke-dashoffset" from="164" to="0" dur="2.4s" repeatCount="indefinite" />
          </path>
        ) : null}

        {[...NG_CITIES.map((c) => ({ c, ng: true })), ...CI_CITIES.map((c) => ({ c, ng: false }))].map(
          ({ c, ng }, i) => (
            <g key={i}>
              {animate && c.hub ? (
                <circle cx={c.x} cy={c.y} r={5} className={ng ? "fill-green/40" : "fill-brand/40"}>
                  <animate attributeName="r" from="5" to="17" dur="2.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" repeatCount="indefinite" />
                </circle>
              ) : null}
              <circle cx={c.x} cy={c.y} r={c.hub ? 5 : 3} className={ng ? "fill-green" : "fill-brand"} />
              <circle cx={c.x} cy={c.y} r={c.hub ? 5 : 3} fill="none" className="stroke-background" strokeWidth={1.5} />
            </g>
          ),
        )}
      </svg>

      <CityTag country="CI" name="Ivory Coast" count={CI_CITIES.length} point={CI_HUB} side="left" />
      <CityTag country="NG" name="Nigeria" count={NG_CITIES.length} point={NG_HUB} side="right" />

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
  count,
  point,
  side,
}: {
  country: "NG" | "CI";
  name: string;
  count: number;
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
        <div className="text-[10px] text-muted">{count} cities live</div>
      </div>
    </div>
  );
}
