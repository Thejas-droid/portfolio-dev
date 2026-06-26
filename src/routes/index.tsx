import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Identity } from "@/components/portfolio/Identity";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Approach } from "@/components/portfolio/Approach";
import { Stack } from "@/components/portfolio/Stack";
import { Notes } from "@/components/portfolio/Notes";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thejas S — Software Engineer | Scalable Frontend & Systems" },
      {
        name: "description",
        content:
          "Thejas S — Software Engineer building scalable systems, from frontend architecture to performance-oriented computing. Micro frontends, multi-tenant SaaS, and low-latency engineering.",
      },
      { property: "og:title", content: "Thejas S — Software Engineer" },
      {
        property: "og:description",
        content:
          "Scalable frontend architecture, micro frontends, multi-tenant systems, and a path into low-latency / quant engineering.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Identity />
      <Experience />
      <Projects />
      <Approach />
      <Stack />
      <Notes />
      <Contact />
    </main>
  );
}
