"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, ShieldCheck, Sparkles, Clock3 } from "lucide-react";
import { Flag } from "@/components/Flag";
import { cn } from "@/lib/utils";

const STEP_COUNT = 4;
const STEP_MS = 2600;

export function PhoneScreen({ className }: { className?: string }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const frame = requestAnimationFrame(() => setStep(3));
      return () => cancelAnimationFrame(frame);
    }
    const id = setInterval(() => {
      setStep((s) => (s + 1) % STEP_COUNT);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#eef4ff]",
        className,
      )}
    >
      <ScreenChrome />

      <div className="relative h-[calc(100%-3.25rem)]">
        <Screen active={step === 0}>
          <AmountScreen />
        </Screen>
        <Screen active={step === 1}>
          <ReviewScreen />
        </Screen>
        <Screen active={step === 2}>
          <ProcessingScreen />
        </Screen>
        <Screen active={step === 3}>
          <SuccessScreen />
        </Screen>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {Array.from({ length: STEP_COUNT }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === step ? "w-5 bg-[#2f7df6]" : "w-1.5 bg-slate-300",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function Screen({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 px-5 pt-3 transition-all duration-700 ease-out",
        active
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      {children}
    </div>
  );
}

function ScreenChrome() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-semibold text-slate-900">
      <span className="tabular">9:41</span>
      <div className="flex items-center gap-1.5 text-slate-700">
        <span className="h-2.5 w-4 rounded-[2px] bg-slate-800" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
        <span className="h-2.5 w-5 rounded-[3px] border border-slate-800" />
      </div>
    </div>
  );
}

function AppHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2f7df6] text-xs font-bold text-white">
          X
        </span>
        <span className="text-sm font-bold text-slate-900">{title}</span>
      </div>
      <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#2f7df6] to-[#1fb35a]" />
    </div>
  );
}

function AmountScreen() {
  return (
    <div>
      <AppHeader title="Send money" />
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span className="text-[11px] font-medium text-slate-400">You send</span>
        <div className="mt-1 flex items-center justify-between">
          <span className="tabular text-2xl font-bold text-slate-900">
            ₦100,000
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <Flag country="NG" className="h-5 w-5" />
            <span className="text-xs font-bold text-slate-700">NGN</span>
          </span>
        </div>
      </div>

      <div className="relative my-2 flex justify-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#2f7df6] text-white shadow-md">
          <ArrowRight className="h-4 w-4 rotate-90" />
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <span className="text-[11px] font-medium text-slate-400">
          Recipient gets
        </span>
        <div className="mt-1 flex items-center justify-between">
          <span className="tabular text-2xl font-bold text-[#1fb35a]">
            35,646
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <Flag country="CI" className="h-5 w-5" />
            <span className="text-xs font-bold text-slate-700">XOF</span>
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 text-[11px] text-slate-500">
        <span>Rate</span>
        <span className="tabular font-semibold text-slate-700">
          1 NGN = 0.3565 XOF
        </span>
      </div>

      <TapButton label="Continue" />
    </div>
  );
}

function ReviewScreen() {
  return (
    <div>
      <AppHeader title="Review transfer" />
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
        <Flag country="CI" className="h-11 w-11" />
        <div>
          <div className="text-sm font-bold text-slate-900">Aïcha Koné</div>
          <div className="text-[11px] text-slate-400">Abidjan · Wave wallet</div>
        </div>
      </div>

      <dl className="mt-3 space-y-2.5 rounded-2xl border border-slate-200 bg-white p-4 text-[12px] shadow-sm">
        <Line label="They receive" value="CFA 35,646" strong />
        <Line label="Transfer fee" value="₦900" />
        <Line label="Rate" value="0.3565" />
        <div className="h-px bg-slate-100" />
        <Line label="Total to pay" value="₦100,900" strong />
      </dl>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#e9f7ef] px-3.5 py-2.5 text-[11px] font-medium text-[#1fb35a]">
        <ShieldCheck className="h-4 w-4" />
        Rate locked · arrives in minutes
      </div>

      <TapButton label="Slide to send" />
    </div>
  );
}

function ProcessingScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center pb-10">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#2f7df6]/30" />
        <span className="absolute inset-0 rounded-full border-4 border-slate-100" />
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#2f7df6]" />
        <Sparkles className="h-8 w-8 text-[#2f7df6]" />
      </div>
      <p className="mt-6 text-sm font-bold text-slate-900">Sending securely</p>
      <p className="mt-1 text-[11px] text-slate-400">Encrypting your transfer…</p>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center pb-10 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#1fb35a]/12">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1fb35a]/30" />
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1fb35a] shadow-lg shadow-[#1fb35a]/40">
          <Check className="h-9 w-9 text-white" strokeWidth={3} />
        </span>
      </div>
      <p className="mt-6 text-lg font-bold text-slate-900">Money sent</p>
      <p className="mt-1 tabular text-2xl font-bold text-[#1fb35a]">CFA 35,646</p>
      <p className="mt-1 text-[12px] text-slate-500">to Aïcha Koné · Abidjan</p>
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600">
        <Clock3 className="h-3.5 w-3.5" /> Delivered in 1m 12s
      </span>
    </div>
  );
}

function Line({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className={cn("text-slate-400", strong && "font-semibold text-slate-600")}>
        {label}
      </dt>
      <dd
        className={cn(
          "tabular font-semibold text-slate-900",
          strong && "text-sm",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

function TapButton({ label }: { label: string }) {
  return (
    <div className="relative mt-4">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2f7df6] to-[#1f6ae6] text-sm font-bold text-white shadow-lg shadow-[#2f7df6]/30">
        {label}
        <ArrowRight className="h-4 w-4" />
      </div>
      <span className="absolute -bottom-1 right-6 h-7 w-7 animate-pulse-ring rounded-full bg-white/50" />
      <span className="absolute -bottom-1 right-8 h-4 w-4 rounded-full border-2 border-slate-700/60 bg-white/80" />
    </div>
  );
}
