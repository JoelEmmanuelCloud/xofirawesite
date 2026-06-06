const RAILS = ["Paystack", "Flutterwave", "Wave", "Orange Money", "MTN MoMo"];

export function Partners() {
  return (
    <div className="max-lg:mx-auto max-lg:max-w-md">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted max-lg:text-center">
        Powered by trusted rails
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 max-lg:justify-center">
        {RAILS.map((name) => (
          <span
            key={name}
            className="text-base font-bold tracking-tight text-ink/35 transition hover:text-ink/60"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
