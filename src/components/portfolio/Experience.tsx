import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

const items = [
  {
    period: "Nov 2025 — Present",
    role: "Frontend Engineer",
    org: "Jaldee Soft Pvt Ltd · Thrissur",
    points: [
      "Led independent frontend delivery across multiple products using Angular and React, shipping scalable multi-tenant systems.",
      "Architected a configurable Lead Collection SDK enabling schema-driven UI rendering across external client websites.",
      "Designed JSON-driven systems supporting runtime customization of UI, workflows, and features without redeployment.",
      "Contributed to Micro Frontend architecture using Module Federation for modular feature delivery.",
      "Owned production releases — Jenkins, AWS deployments, and incident response across platforms.",
    ],
  },
  {
    period: "Aug 2025 — Oct 2025",
    role: "Software Developer Trainee",
    org: "Jaldee Soft Pvt Ltd · Thrissur",
    points: [
      "Improved Angular-based applications by resolving production bugs and shipping UI enhancements.",
      "Built reusable components and integrated REST APIs for dynamic, data-driven features.",
      "Collaborated with product and QA teams to deliver features inside agile sprint cycles.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            03 — Experience
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Production systems, <span className="italic text-[var(--burgundy)]">owned end-to-end</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <ol className="relative mt-16 space-y-12 border-l border-dashed border-[var(--gold)] pl-8 md:pl-12">
          {items.map((it, i) => (
            <motion.li
              key={it.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
              className="relative"
            >
              <span className="absolute -left-[42px] top-1.5 flex h-5 w-5 items-center justify-center md:-left-[56px]">
                <span className="absolute h-5 w-5 rounded-full border border-[var(--burgundy)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--burgundy)]" />
              </span>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--teal)]">
                {it.period}
              </div>
              <h3 className="mt-1 font-display text-2xl text-[var(--ink)]">
                {it.role}
                <span className="ml-2 text-base font-normal italic text-[var(--muted-foreground)]">
                  — {it.org}
                </span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ink)]/85">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-[var(--gold)]"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
