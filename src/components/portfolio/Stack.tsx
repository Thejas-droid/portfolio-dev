import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

const categories = {
  "Frontend Architecture": [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Micro Frontends",
    "Module Federation",
    "Design Systems",
    "Schema-driven UI",
    "Zustand",
    "TanStack Query",
    "Tailwind CSS",
    "Vite",
  ],
  Backend: [
    "REST APIs",
    "Node.js",
    "Java",
    "Authentication",
    "RBAC",
    "Multi-tenant data models",
  ],
  Cloud: [
    "AWS S3",
    "AWS CloudFront",
    "Jenkins CI/CD",
    "Multi-framework pipelines",
    "Release engineering",
  ],
  Systems: [
    "C++",
    "Concurrency",
    "Order book design",
    "Matching engines",
    "Networking",
    "Algorithms",
    "Performance profiling",
  ],
} as const;

type Key = keyof typeof categories;

export function Stack() {
  const keys = Object.keys(categories) as Key[];
  const [active, setActive] = useState<Key>(keys[0]);

  return (
    <section id="stack" className="relative px-6 py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            06 — Technical stack
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Tools, <span className="italic text-[var(--teal)]">by category</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {keys.map((k) => {
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? "border-[var(--burgundy)] bg-[var(--burgundy)] text-[var(--ivory)]"
                    : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--burgundy)]"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>

        <div className="vignette-card mt-8 rounded-xl p-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories[active].map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.025 }}
                  className="rounded-md border border-[var(--gold)] bg-[oklch(0.78_0.13_90_/_0.08)] px-3 py-1.5 font-mono text-xs text-[var(--ink)]"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
