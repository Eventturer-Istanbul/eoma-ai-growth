import { useRef } from "react";
import { useInView } from "framer-motion";
import { Search, Radio } from "lucide-react";

const modules = [
  {
    icon: Search,
    accent: "teal",
    title: "SEO · GEO · AEO",
    description:
      "Traditional search rankings, AI-generated answer visibility, and generative engine optimisation — all in one pipeline.",
    outputs: [
      "SEO site audit with prioritised fix list",
      "GEO — how your brand surfaces in AI overviews and LLM answers",
      "AEO — citation accuracy and topic authority in AI models",
      "Blog posts written and optimised by the agent",
      "Direct site changes via GitHub PRs",
      "GA4-enriched performance signals",
    ],
  },
  {
    icon: Radio,
    accent: "coral",
    title: "Social Listening",
    description:
      "Six platforms monitored continuously. Trends, engagement patterns, and content signals — scoped to your brand automatically.",
    outputs: [
      "Twitter & Reddit trend detection",
      "YouTube transcript-based content intelligence",
      "TikTok & Instagram engagement pattern analysis",
      "LinkedIn industry conversation tracking",
      "Competitor benchmark digests",
      "Content calendar recommendations",
    ],
  },
];

const accentColors: Record<string, { bg: string; text: string; dot: string }> = {
  teal: {
    bg: "hsl(var(--color-teal) / 0.1)",
    text: "hsl(var(--color-teal))",
    dot: "line-teal",
  },
  coral: {
    bg: "hsl(var(--color-coral) / 0.1)",
    text: "hsl(var(--color-coral))",
    dot: "line-coral",
  },
};

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-do" ref={ref} className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div
          className="mb-12 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal">
            Two Modules. Real Outputs.
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl text-foreground">
            What EOMA actually does
          </h2>
          <div className="mx-auto flex h-1 w-20 gap-0.5 overflow-hidden rounded-full">
            <span className="flex-1 line-teal" />
            <span className="flex-1 line-coral" />
          </div>
        </div>

        {/* Module cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const colors = accentColors[mod.accent];
            return (
              <div
                key={mod.title}
                className="rounded-2xl p-6 md:p-8 bg-card border border-border"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.15}s, transform 0.5s ease ${0.2 + i * 0.15}s`,
                }}
              >
                <div
                  className="mb-4 inline-flex rounded-xl p-3"
                  style={{ background: colors.bg }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.text }} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {mod.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>

                <ul className="space-y-2.5">
                  {mod.outputs.map((output) => (
                    <li
                      key={output}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`}
                      />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
