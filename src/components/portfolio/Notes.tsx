import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

const notes = [
  {
    tag: "Architecture",
    title: "Micro Frontends in production",
    blurb:
      "What actually breaks when you ship Module Federation: routing, session, CSS isolation, and the CI/CD seams between two frameworks.",
  },
  {
    tag: "Platforms",
    title: "Schema-driven UI without the regret",
    blurb:
      "How to design a JSON contract for runtime UI that survives a year of product changes without becoming a second framework.",
  },
  {
    tag: "Performance",
    title: "A latency budget for product engineers",
    blurb:
      "Treating perceived speed as a feature: budgets, instrumentation, and the smallest set of metrics that actually move.",
  },
  {
    tag: "Systems",
    title: "Reading the order book",
    blurb:
      "Notes from building a price-time-priority matching core in C++ — concurrency models, data layout, and the cost of allocation.",
  },
];

export function Notes() {
  return (
    <section className="relative px-6 py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            07 — Engineering notes
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Writing, <span className="italic text-[var(--teal)]">in progress</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {notes.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="vignette-card group rounded-xl p-7 transition-transform hover:-translate-y-0.5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--gold)]">
                {n.tag}
              </div>
              <h3 className="mt-2 font-display text-xl text-[var(--ink)]">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {n.blurb}
              </p>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--burgundy)]">
                Draft · coming soon →
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
