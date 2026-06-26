import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

const principles = [
  {
    title: "Architecture first",
    body: "Decisions about boundaries, ownership, and data flow are made before the first component lands. Code follows the model, not the other way around.",
  },
  {
    title: "Reusable systems",
    body: "Build platforms, not pages. SDKs, schema-driven UIs, and design systems amortize effort across every tenant and feature.",
  },
  {
    title: "Performance is a feature",
    body: "Latency budgets, bundle budgets, render budgets. Treat user-perceived speed as a first-class product requirement.",
  },
  {
    title: "AI-assisted engineering",
    body: "Use AI as compiler-grade scaffolding — accelerating delivery on well-specified problems while keeping architecture human-owned.",
  },
  {
    title: "Clean code, on purpose",
    body: "Types tell the truth, modules have a single reason to change, and animation/state systems are predictable to reason about.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative px-6 py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            05 — Engineering approach
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            How I <span className="italic text-[var(--burgundy)]">build software</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`vignette-card rounded-xl p-7 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--gold)]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-[var(--ink)]">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
