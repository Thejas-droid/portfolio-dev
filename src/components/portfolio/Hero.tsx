import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloralCorner } from "./FloralCorner";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100dvh] overflow-hidden pt-28"
    >
      {/* parallax grid */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 grid-pattern opacity-60"
        aria-hidden
      />
      {/* corner ornaments */}
      <FloralCorner className="absolute -left-6 -top-4 w-64 text-[var(--gold)] opacity-50" />
      <FloralCorner
        flip
        className="absolute -right-6 -top-4 w-64 text-[var(--gold)] opacity-50"
      />
      <FloralCorner className="absolute -left-6 bottom-0 w-72 rotate-180 text-[var(--teal)] opacity-30" />
      <FloralCorner
        flip
        className="absolute -right-6 bottom-0 w-72 rotate-180 text-[var(--teal)] opacity-30"
      />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]"
        >
          ◆ Cherthala, IN  ·  Software Engineer  ◆
        </motion.p>

        {/* Portrait Vignette Medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mt-8 mb-3"
        >
          {/* Ambient ethereal glow behind portrait */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[var(--gold)] via-[var(--burgundy)] to-[var(--teal)] opacity-25 blur-xl transition-all duration-700 group-hover:opacity-50 group-hover:blur-2xl animate-pulse" />

          {/* Outer ornamental ring */}
          <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40 rounded-full border-2 border-[var(--gold)]/70 bg-[var(--cream)]/60 p-1.5 backdrop-blur-md shadow-[0_10px_30px_oklch(0.22_0.04_50_/_0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            {/* Inner frame */}
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--teal)]/40 bg-[var(--ink)]">
              <img
                src="/profile.jpg"
                alt="Thejas S"
                onError={(e) => {
                  // Fallback to local dev artifact path if public/profile.jpg is not copied yet
                  e.currentTarget.src =
                    "/@fs/C:/Users/theja/.gemini/antigravity-ide/brain/6e67cfbd-6fe1-424b-816a-f3cdf7fbeea1/media__1782489689802.jpg";
                }}
                className="h-full w-full object-cover object-[center_18%] filter grayscale-[15%] contrast-[115%] brightness-105 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-125"
              />
              {/* Subtle vignette gradient blend */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[var(--ink)]/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
            </div>
          </div>

          {/* Decorative Art Nouveau badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-[var(--gold)] bg-[var(--ivory)] px-3 py-0.5 font-mono text-[9px] font-semibold tracking-[0.25em] uppercase text-[var(--burgundy)] shadow-md transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[var(--teal)] group-hover:text-[var(--teal)]">
            <span>✦</span>
            <span>DEV</span>
            <span>✦</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-6 font-display text-[clamp(2.75rem,7vw,3.5rem)] font-bold leading-[1.02] tracking-tight"
        >
          Thejas <span className="text-gradient-gold">S</span>
        </motion.h1>

        <motion.div
          style={{ y: y1 }}
          className="mt-4 font-display text-[clamp(1rem,1.6vw,1.35rem)] italic text-[var(--muted-foreground)]"
        >
          building scalable systems —
          <span className="text-[var(--teal)]"> from frontend architecture</span>
          <br className="hidden sm:block" />
          <span className="text-[var(--burgundy)]"> to performance-oriented computing.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { k: "Frameworks", v: "Angular · React" },
            { k: "Architecture", v: "Micro Frontends" },
            { k: "Systems", v: "C++ · Low-latency" },
            { k: "Tenancy", v: "Multi-tenant SaaS" },
          ].map((m) => (
            <div
              key={m.k}
              className="vignette-card rounded-md px-3 py-3 text-left"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {m.k}
              </div>
              <div className="mt-1 font-display text-sm text-[var(--ink)]">{m.v}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-md bg-[var(--teal)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ivory)] shadow-[0_2px_12px_oklch(0.52_0.09_195_/_0.35)] transition-transform hover:-translate-y-0.5"
          >
            See engineering work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--burgundy)] px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--burgundy)] transition-colors hover:bg-[var(--burgundy)] hover:text-[var(--ivory)]"
          >
            thejass274@gmail.com
          </a>
        </motion.div>

        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-16 hidden font-mono text-[11px] leading-relaxed text-[var(--muted-foreground)] sm:block"
        >
          {`// system.boot
> initializing  scalable.frontend  ✓
> mounting      micro.frontends    ✓
> compiling     low.latency.core   …`}
        </motion.pre>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
        scroll ↓
      </div>
    </section>
  );
}
