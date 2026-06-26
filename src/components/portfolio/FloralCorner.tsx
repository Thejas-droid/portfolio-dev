type Props = {
  className?: string;
  flip?: boolean;
};

/** Decorative Art Nouveau whiplash floral corner, used as a subtle ornament. */
export function FloralCorner({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      >
        <path d="M10 190 C 40 170, 60 150, 70 110 S 110 40, 180 20" />
        <path d="M10 190 C 50 180, 90 160, 110 130" opacity="0.6" />
        <path d="M70 110 C 50 100, 40 80, 55 55 C 70 35, 95 40, 100 60 C 105 85, 80 100, 70 110 Z" />
        <path d="M120 70 C 110 55, 120 35, 145 35 C 165 35, 175 55, 165 75 C 155 90, 130 90, 120 70 Z" />
        <circle cx="78" cy="78" r="2.5" fill="currentColor" />
        <circle cx="145" cy="55" r="2.5" fill="currentColor" />
        <path d="M70 110 q -10 10 -20 5 q 5 -15 20 -5 Z" fill="currentColor" opacity="0.35" />
        <path d="M165 30 q 10 -10 18 -2 q -6 12 -18 2 Z" fill="currentColor" opacity="0.35" />
      </g>
    </svg>
  );
}
