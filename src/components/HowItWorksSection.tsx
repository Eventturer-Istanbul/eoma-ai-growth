import { useRef } from "react";
import { useInView } from "framer-motion";
import { PlugZap, Brain, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PlugZap,
    accent: "teal",
    title: "Connect",
    description:
      "Onboard your brand in minutes. EOMA connects to your GA4, your website, and starts monitoring your social platforms — no manual configuration needed.",
  },
  {
    number: "02",
    icon: Brain,
    accent: "lavender",
    title: "Analyse",
    description:
      "The AI agent audits your site for SEO, measures your brand's visibility in AI answers (GEO/AEO), scrapes social signals across six platforms, and maps what's working and what's missing.",
  },
  {
    number: "03",
    icon: FileCheck,
    accent: "coral",
    title: "Act",
    description:
      "Get audit reports, blog posts, content suggestions, and site fixes delivered as ready-to-review outputs. Approve and publish — or let the agent push changes directly via GitHub.",
  },
];

const accentColors: Record<string, { bg: string; text: string }> = {
  teal: { bg: "hsl(var(--color-teal) / 0.1)", text: "hsl(var(--color-teal))" },
  lavender: { bg: "hsl(var(--color-lavender) / 0.1)", text: "hsl(var(--color-lavender))" },
  coral: { bg: "hsl(var(--color-coral) / 0.1)", text: "hsl(var(--color-coral))" },
};

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="px-4 py-20 md:py-28 bg-card"
    >
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
            Simple Process
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl text-foreground">
            How it works
          </h2>
          <div className="mx-auto flex h-1 w-20 gap-0.5 overflow-hidden rounded-full">
            <span className="flex-1 line-teal" />
            <span className="flex-1 line-lavender" />
            <span className="flex-1 line-coral" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const colors = accentColors[step.accent];
            return (
              <div
                key={step.number}
                className="rounded-2xl p-6 bg-background border border-border"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.12}s, transform 0.5s ease ${0.2 + i * 0.12}s`,
                }}
              >
                <span
                  className="mb-3 block text-xs font-bold uppercase tracking-widest"
                  style={{ color: colors.text }}
                >
                  Step {step.number}
                </span>

                <div
                  className="mb-4 inline-flex rounded-xl p-3"
                  style={{ background: colors.bg }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.text }} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
