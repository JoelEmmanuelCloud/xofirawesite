export type CurrencyCode = "NGN" | "XOF";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  country: string;
  countryCode: string;
  locale: string;
  decimals: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  NGN: {
    code: "NGN",
    symbol: "₦",
    name: "Nigerian Naira",
    country: "Nigeria",
    countryCode: "NG",
    locale: "en-NG",
    decimals: 2,
  },
  XOF: {
    code: "XOF",
    symbol: "CFA",
    name: "West African CFA franc",
    country: "Ivory Coast",
    countryCode: "CI",
    locale: "fr-CI",
    decimals: 0,
  },
};

const MID_RATE_NGN_TO_XOF = 0.3597;
const FX_MARGIN = 0.009;
const FEE_RATE = 0.009;
const MIN_FEE: Record<CurrencyCode, number> = {
  NGN: 250,
  XOF: 90,
};
const SEND_LIMIT: Record<CurrencyCode, { min: number; max: number }> = {
  NGN: { min: 1000, max: 5000000 },
  XOF: { min: 350, max: 1800000 },
};

export interface Quote {
  from: CurrencyCode;
  to: CurrencyCode;
  sendAmount: number;
  fee: number;
  totalToPay: number;
  appliedRate: number;
  receiveAmount: number;
  belowMin: boolean;
  aboveMax: boolean;
  limits: { min: number; max: number };
}

function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function appliedRate(from: CurrencyCode): number {
  const mid = from === "NGN" ? MID_RATE_NGN_TO_XOF : 1 / MID_RATE_NGN_TO_XOF;
  return mid * (1 - FX_MARGIN);
}

export function midRate(from: CurrencyCode): number {
  return from === "NGN" ? MID_RATE_NGN_TO_XOF : 1 / MID_RATE_NGN_TO_XOF;
}

function feeFor(amount: number, from: CurrencyCode): number {
  const fromInfo = CURRENCIES[from];
  return roundTo(Math.max(MIN_FEE[from], amount * FEE_RATE), fromInfo.decimals);
}

export function quoteBySend(sendAmount: number, from: CurrencyCode): Quote {
  const to: CurrencyCode = from === "NGN" ? "XOF" : "NGN";
  const safeAmount = Number.isFinite(sendAmount) && sendAmount > 0 ? sendAmount : 0;
  const rate = appliedRate(from);
  const fee = feeFor(safeAmount, from);
  const limits = SEND_LIMIT[from];

  return {
    from,
    to,
    sendAmount: safeAmount,
    fee,
    totalToPay: roundTo(safeAmount + fee, CURRENCIES[from].decimals),
    appliedRate: rate,
    receiveAmount: roundTo(safeAmount * rate, CURRENCIES[to].decimals),
    belowMin: safeAmount > 0 && safeAmount < limits.min,
    aboveMax: safeAmount > limits.max,
    limits,
  };
}

export function quoteByReceive(receiveAmount: number, from: CurrencyCode): Quote {
  const rate = appliedRate(from);
  const safeReceive = Number.isFinite(receiveAmount) && receiveAmount > 0 ? receiveAmount : 0;
  const sendAmount = roundTo(safeReceive / rate, CURRENCIES[from].decimals);
  return quoteBySend(sendAmount, from);
}

export function formatCurrency(amount: number, currency: CurrencyCode): string {
  const info = CURRENCIES[currency];
  return new Intl.NumberFormat(info.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: info.decimals,
    maximumFractionDigits: info.decimals,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function formatAmount(amount: number, currency: CurrencyCode): string {
  const info = CURRENCIES[currency];
  return new Intl.NumberFormat(info.locale, {
    minimumFractionDigits: info.decimals,
    maximumFractionDigits: info.decimals,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function formatRate(from: CurrencyCode): string {
  const to: CurrencyCode = from === "NGN" ? "XOF" : "NGN";
  const rate = appliedRate(from);
  const decimals = rate < 1 ? 4 : 2;
  const value = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(rate);
  return `1 ${from} = ${value} ${to}`;
}
