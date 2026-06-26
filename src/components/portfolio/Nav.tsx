import { useEffect, useState } from "react";

const links = [
  { href: "#identity", label: "Identity" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.985_0.025_95_/_0.78)] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden className="text-[var(--teal)]">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M20 6 C 12 14, 12 26, 20 34 C 28 26, 28 14, 20 6 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </svg>
          <span className="font-display text-lg tracking-tight text-[var(--ink)]">
            Thejas <span className="text-[var(--burgundy)]">S</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--teal)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] rounded-md border border-[var(--burgundy)] px-3 py-2 text-[var(--burgundy)] transition-all hover:bg-[var(--burgundy)] hover:text-[var(--ivory)]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
