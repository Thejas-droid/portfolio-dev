import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";
import { FloralCorner } from "./FloralCorner";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-[clamp(5rem,9vw,9rem)]">
      <FloralCorner className="pointer-events-none absolute -left-10 top-10 w-72 text-[var(--burgundy)] opacity-20" />
      <FloralCorner flip className="pointer-events-none absolute -right-10 bottom-0 w-72 text-[var(--teal)] opacity-20" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
          08 — Get in touch
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Building something <span className="italic text-[var(--teal)]">serious</span>?
        </h2>
        <OrnateDivider className="mt-6" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-2xl font-display text-lg leading-relaxed text-[var(--muted-foreground)]"
        >
          I'm interested in roles focused on scalable frontend platforms,
          micro-frontend architectures, and the path toward low-latency
          systems engineering. Reach out — I respond to every serious note.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:thejass274@gmail.com"
            className="rounded-md bg-[var(--burgundy)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ivory)] transition-transform hover:-translate-y-0.5"
          >
            thejass274@gmail.com
          </a>
          <a
            href="tel:+919188310718"
            className="rounded-md border border-[var(--teal)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--teal)] transition-colors hover:bg-[var(--teal)] hover:text-[var(--ivory)]"
          >
            +91 9188 310 718
          </a>
          <a
            href="https://linkedin.com/in/thejass274"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[var(--gold)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink)] transition-colors hover:bg-[var(--gold)]"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
          ◆ Thejas S · Cherthala, Alappuzha · India ◆
        </div>
      </div>
    </section>
  );
}
