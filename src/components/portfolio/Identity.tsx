import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

const frontend = [
  "React",
  "Angular",
  "TypeScript",
  "Micro Frontends",
  "Module Federation",
  "Design Systems",
  "Multi-tenant SaaS",
  "Performance",
];

const systems = [
  "C++",
  "Low-latency systems",
  "Order books & matching",
  "Concurrency",
  "Networking",
  "Algorithms",
  "Performance engineering",
  "Quant infrastructure",
];

function Column({
  kicker,
  title,
  description,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  description: string;
  items: string[];
  accent: "teal" | "burgundy";
}) {
  const color = accent === "teal" ? "var(--teal)" : "var(--burgundy)";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="vignette-card relative overflow-hidden rounded-xl p-8"
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: color }}
      />
      <div
        className="font-mono text-[10px] uppercase tracking-[0.28em]"
        style={{ color }}
      >
        {kicker}
      </div>
      <h3 className="mt-3 font-display text-2xl text-[var(--ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="rounded-md border px-3 py-1.5 font-mono text-xs"
            style={{ borderColor: color, color }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Identity() {
  return (
    <section id="identity" className="relative px-6 py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            02 — Engineering identity
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Two paths, <span className="italic text-[var(--teal)]">one engineer</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          <Column
            kicker="Path I"
            title="Frontend & Product Engineering"
            description="Designing scalable, multi-tenant frontend platforms — configurable, composable, and built for delivery teams in production."
            items={frontend}
            accent="teal"
          />
          <div className="md:mt-16">
            <Column
              kicker="Path II"
              title="Systems & Quant Engineering"
              description="Pursuing low-latency systems engineering — order books, matching engines, and performance-driven C++ for financial infrastructure."
              items={systems}
              accent="burgundy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
