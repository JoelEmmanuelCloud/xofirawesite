"use client";

import { useMemo, useState } from "react";
import { ArrowDownUp, ShieldCheck, Clock3, Info } from "lucide-react";
import { Flag } from "@/components/Flag";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CURRENCIES,
  type CurrencyCode,
  quoteBySend,
  quoteByReceive,
  formatAmount,
  formatCurrency,
  formatRate,
} from "@/lib/rates";

function parseAmount(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  const normalized =
    parts.length > 2 ? `${parts[0]}.${parts.slice(1).join("")}` : cleaned;
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function CurrencyTag({ code }: { code: CurrencyCode }) {
  const info = CURRENCIES[code];
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full bg-surface px-3.5 py-2 ring-1 ring-border">
      <Flag country={info.countryCode as "NG" | "CI"} className="h-6 w-6" />
      <div className="leading-none">
        <div className="text-sm font-bold">{code}</div>
        <div className="mt-0.5 text-[11px] text-muted">{info.country}</div>
      </div>
    </div>
  );
}

export function TransferCalculator({ className }: { className?: string }) {
  const [from, setFrom] = useState<CurrencyCode>("NGN");
  const [editing, setEditing] = useState<"send" | "receive">("send");
  const [sendStr, setSendStr] = useState("100000");
  const [receiveStr, setReceiveStr] = useState("");

  const to: CurrencyCode = from === "NGN" ? "XOF" : "NGN";

  const quote = useMemo(() => {
    return editing === "send"
      ? quoteBySend(parseAmount(sendStr), from)
      : quoteByReceive(parseAmount(receiveStr), from);
  }, [editing, sendStr, receiveStr, from]);

  const sendValue =
    editing === "send" ? sendStr : formatAmount(quote.sendAmount, from);
  const receiveValue =
    editing === "receive" ? receiveStr : formatAmount(quote.receiveAmount, to);

  function swap() {
    const nextSend = quote.receiveAmount;
    setFrom(to);
    setEditing("send");
    setSendStr(nextSend ? String(nextSend) : "");
    setReceiveStr("");
  }

  const limitError = quote.belowMin
    ? `Minimum transfer is ${formatCurrency(quote.limits.min, from)}`
    : quote.aboveMax
      ? `Maximum transfer is ${formatCurrency(quote.limits.max, from)}`
      : null;

  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-card p-5 shadow-lift ring-1 ring-border sm:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-ink">Send money</h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Live indicative rate
        </span>
      </div>

      <div className="relative mt-4 space-y-3">
        <FieldBlock
          label="You send"
          inputId="send-amount"
          value={sendValue}
          onChange={(v) => {
            setEditing("send");
            setSendStr(v);
          }}
          currency={from}
          invalid={Boolean(limitError)}
        />

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={swap}
            aria-label="Swap currencies"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-white shadow-glow-green ring-4 ring-card transition hover:rotate-180 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green/40 cursor-pointer"
          >
            <ArrowDownUp className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>

        <FieldBlock
          label="Recipient gets"
          inputId="receive-amount"
          value={receiveValue}
          onChange={(v) => {
            setEditing("receive");
            setReceiveStr(v);
          }}
          currency={to}
        />
      </div>

      {limitError ? (
        <p role="alert" className="mt-3 text-sm font-medium text-danger">
          {limitError}
        </p>
      ) : null}

      <dl className="mt-5 space-y-2.5 rounded-xl bg-surface p-4 text-sm">
        <Row
          label="Transfer fee"
          value={formatCurrency(quote.fee, from)}
        />
        <Row
          label="Exchange rate"
          value={formatRate(from)}
        />
        <div className="h-px bg-border" />
        <Row
          label="Total to pay"
          value={formatCurrency(quote.totalToPay, from)}
          strong
        />
      </dl>

      <Button href="#get-started" size="lg" className="mt-5 w-full">
        Get started
      </Button>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5 text-green" /> Arrives in minutes
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-green" /> Licensed &amp; secured
        </span>
      </div>

      <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-relaxed text-muted">
        <Info className="mt-px h-3.5 w-3.5 shrink-0" />
        Rates shown are indicative and refresh continuously. Your exact rate is
        locked the moment you confirm a transfer.
      </p>
    </div>
  );
}

interface FieldBlockProps {
  label: string;
  inputId: string;
  value: string;
  onChange: (value: string) => void;
  currency: CurrencyCode;
  invalid?: boolean;
}

function FieldBlock({
  label,
  inputId,
  value,
  onChange,
  currency,
  invalid,
}: FieldBlockProps) {
  return (
    <label
      htmlFor={inputId}
      className={cn(
        "flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition focus-within:border-green focus-within:ring-4 focus-within:ring-green/10",
        invalid ? "border-danger" : "border-border",
      )}
    >
      <div className="min-w-0 flex-1">
        <span className="block text-xs font-medium text-muted">{label}</span>
        <input
          id={inputId}
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="tabular w-full bg-transparent text-2xl font-bold text-ink outline-none placeholder:text-border-strong"
        />
      </div>
      <CurrencyTag code={currency} />
    </label>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className={cn("text-muted", strong && "font-semibold text-ink")}>
        {label}
      </dt>
      <dd
        className={cn(
          "tabular text-right font-medium text-ink",
          strong && "text-base font-bold",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
