export function OrnateDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="ornate-rule w-24 sm:w-40" />
      <svg
        width="44"
        height="20"
        viewBox="0 0 44 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="text-[var(--gold)]"
      >
        <path
          d="M2 10 Q 12 -2 22 10 T 42 10"
          stroke="currentColor"
          strokeWidth="1.25"
          fill="none"
        />
        <circle cx="22" cy="10" r="2.5" fill="currentColor" />
        <circle cx="2" cy="10" r="1.25" fill="currentColor" />
        <circle cx="42" cy="10" r="1.25" fill="currentColor" />
      </svg>
      <div className="ornate-rule w-24 sm:w-40" />
    </div>
  );
}
