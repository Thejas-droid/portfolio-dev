import { motion } from "framer-motion";
import { OrnateDivider } from "./OrnateDivider";

type Project = {
  name: string;
  tagline: string;
  problem: string;
  challenge: string;
  architecture: string;
  tech: string[];
  impact: string;
  flow: string[];
  flagship?: boolean;
};

const projects: Project[] = [
  {
    name: "Gold ERP System",
    tagline: "AI-assisted micro frontend inside a legacy shell",
    problem:
      "Deliver a full ERP for a gold-trading business in weeks, not months, without disrupting an existing Angular shell.",
    challenge:
      "Integrate a React micro frontend into Angular with isolated styles, cross-framework routing, session sync, and CI/CD that builds both stacks.",
    architecture:
      "Shell hosts the React MFE inside Shadow DOM. Module Federation exposes feature bundles. Jenkins multi-stage pipeline builds React → Angular → deploys to AWS.",
    tech: ["React", "TypeScript", "Module Federation", "Shadow DOM", "Angular shell", "Jenkins"],
    impact:
      "Shipped production ERP modules at AI-accelerated pace, reducing typical delivery cycle from months to weeks.",
    flow: ["Shell", "Micro Frontend", "Components", "APIs"],
    flagship: false,
  },
  {
    name: "Lead Collection SDK & Platform",
    tagline: "Schema-driven embeddable runtime",
    problem:
      "Let non-technical clients embed lead collection on any website with their own branding, fields, and workflows — without redeploying.",
    challenge:
      "Build an SDK that renders dynamic UI from JSON, isolates CSS on third-party hosts, handles script injection, and tracks leads centrally.",
    architecture:
      "S3-hosted JSON config drives a Vite-bundled React runtime. Components resolve at runtime from a schema; tenants control theme, fields, and actions.",
    tech: ["React", "Vite", "Tailwind CSS", "JSON-driven UI", "AWS S3 / CloudFront"],
    impact:
      "Unified lead capture across multi-channel clients with zero-code config changes and a single dashboard.",
    flow: ["JSON Config", "SDK Runtime", "Embedded UI", "Lead Manager"],
  },
  {
    name: "Lead Manager / CRM Platform",
    tagline: "Full-stack SaaS for multi-channel pipelines",
    problem:
      "Centralize leads from the SDK, manual entry, and integrations behind one role-aware CRM.",
    challenge:
      "Design a frontend that scales across roles, tenants, and async data without sacrificing latency or developer ergonomics.",
    architecture:
      "React + TypeScript SPA with Zustand for client state and TanStack Query for server state. RBAC-driven views over REST APIs backed by relational storage.",
    tech: ["React", "TypeScript", "Zustand", "TanStack Query", "REST APIs", "RBAC"],
    impact:
      "Single platform replaces fragmented tooling and gives operations a real-time view of pipeline health.",
    flow: ["Capture", "Qualify", "Assign", "Convert"],
  },
  {
    name: "Digital Consultation Platform",
    tagline: "Multi-tenant booking across web & mobile",
    problem:
      "One platform must serve 50+ tenant deployments with varying branding, workflows, and payment surfaces.",
    challenge:
      "Refactor the UI to be configuration-driven, improve booking flow conversion, and ship a mobile experience without a native rewrite.",
    architecture:
      "Configuration-driven templates and feature toggles. Angular WebView wraps the responsive web app for cross-platform mobile delivery.",
    tech: ["Angular", "WebView", "Feature toggles", "Multi-tenant"],
    impact:
      "Improved booking and payment UX across 50+ tenants with a single shared codebase.",
    flow: ["Discover", "Book", "Pay", "Consult"],
  },
  {
    name: "Hotel Management Platform",
    tagline: "Modular workflows with role-based access",
    problem:
      "Operate reservations, front desk, billing, and settlement as a single coherent system across staff roles.",
    challenge:
      "Compose independent modules behind a single shell while keeping data, permissions, and workflow state consistent.",
    architecture:
      "Modular feature units, RBAC gates, and shared domain services. Workflow steps are first-class — each transition is auditable and observable.",
    tech: ["React", "TypeScript", "RBAC", "Modular architecture"],
    impact:
      "Operations move through a single coherent journey from reservation to settlement.",
    flow: ["Reservation", "Check-in", "Billing", "Settlement"],
  },
  {
    name: "Low-Latency Exchange Engine",
    tagline: "Flagship systems project — financial infrastructure",
    problem:
      "Build the core of an exchange — an order book and matching engine — with the latency profile required for real markets.",
    challenge:
      "Lock-aware concurrency, predictable allocation, NUMA-aware data layout, and a wire protocol that survives bursty load.",
    architecture:
      "C++ matching engine over a price-time priority order book. Single-writer hot paths, fixed-size pools, and zero-copy networking on the ingress side.",
    tech: ["C++", "Matching engine", "Order book", "Concurrency", "Networking", "Perf engineering"],
    impact:
      "A foundation for venue-grade trading systems — built to be measured in microseconds, not features.",
    flow: ["Order", "Order Book", "Matching Engine", "Trade"],
    flagship: true,
  },
];

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-[var(--gold)] bg-[oklch(0.78_0.13_90_/_0.08)] px-2.5 py-1 text-[var(--ink)]">
            {s}
          </span>
          {i < steps.length - 1 && (
            <span className="text-[var(--burgundy)]" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Card({ p, index }: { p: Project; index: number }) {
  const flagship = p.flagship;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`vignette-card relative overflow-hidden rounded-xl p-8 ${
        flagship ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background: flagship
            ? "linear-gradient(90deg, var(--burgundy), var(--gold), var(--teal))"
            : index % 2 === 0
              ? "var(--teal)"
              : "var(--burgundy)",
        }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--burgundy)]">
            Case Study {String(index + 1).padStart(2, "0")}
            {flagship && <span className="ml-2 text-[var(--gold)]">✦ Flagship</span>}
          </div>
          <h3 className="mt-2 font-display text-2xl text-[var(--ink)] sm:text-3xl">
            {p.name}
          </h3>
          <p className="mt-1 font-display italic text-[var(--muted-foreground)]">
            {p.tagline}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label="Problem" value={p.problem} />
        <Field label="Engineering challenge" value={p.challenge} />
        <Field label="Architecture" value={p.architecture} />
        <Field label="Impact" value={p.impact} />
      </div>

      <FlowDiagram steps={p.flow} />

      <ul className="mt-6 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-[var(--border)] bg-[oklch(0.985_0.025_95_/_0.6)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--teal)]">
        {label}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink)]/85">{value}</p>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
            04 — Selected work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Case studies, <span className="italic text-[var(--teal)]">not screenshots</span>
          </h2>
          <OrnateDivider className="mt-6" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <Card key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
