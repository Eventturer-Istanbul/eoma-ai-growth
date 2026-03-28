import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
    <rect x="4" y="18" width="6" height="10" rx="1" fill="#F9AB00" />
    <rect x="13" y="10" width="6" height="18" rx="1" fill="#E37400" />
    <rect x="22" y="4" width="6" height="24" rx="1" fill="#F9AB00" />
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="22" height="22" rx="7" fill="url(#ig-grad)" />
    <circle cx="16" cy="16" r="5.5" stroke="white" strokeWidth="2" />
    <circle cx="22.5" cy="9.5" r="1.5" fill="white" />
  </svg>
);

const TwitterLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
    <path d="M6 6L13.5 16.5L6 26H8.5L14.5 18L20 26H26L18.2 15.2L25.5 6H23L17.2 13.4L12 6H6Z" />
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="26" height="26" rx="5" fill="#0A66C2" />
    <rect x="8" y="13" width="4" height="12" fill="white" />
    <circle cx="10" cy="9.5" r="2.5" fill="white" />
    <path d="M14 13h4v1.7C18.5 13.6 19.8 13 21.5 13c3.3 0 4.5 2 4.5 5v7H22v-6.5c0-1.5-.5-2.5-1.8-2.5-1.3 0-2.2 1-2.2 2.7V25H14V13Z" fill="white" />
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
    <path d="M22 6c.5 2.5 2 4 4 4.5v3.5c-1.5-.1-3-.5-4-1.2V19c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.4 0 .8 0 1.2.1v3.6c-.4-.1-.8-.1-1.2-.1-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4V6H22Z" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
    <path d="M16 3C8.8 3 3 8.8 3 16c0 5.7 3.7 10.6 8.9 12.3.6.1.8-.3.8-.6v-2c-3.6.8-4.4-1.7-4.4-1.7-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 1.9 3 1.4 3.7 1 .1-.8.4-1.4.8-1.7-2.8-.3-5.8-1.4-5.8-6.3 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.3 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.9-3 6-5.8 6.3.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6C25.3 26.6 29 21.7 29 16c0-7.2-5.8-13-13-13Z" />
  </svg>
);

interface Integration {
  name: string;
  Logo: (() => ReactNode) | null;
  emoji?: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Google Analytics", Logo: GoogleAnalyticsLogo },
  { name: "Twitter / X", Logo: TwitterLogo },
  { name: "Reddit", Logo: null, emoji: "\uD83D\uDFE0" },
  { name: "LinkedIn", Logo: LinkedInLogo },
  { name: "YouTube", Logo: null, emoji: "\u25B6" },
  { name: "TikTok", Logo: TikTokLogo },
  { name: "Instagram", Logo: InstagramLogo },
  { name: "GitHub", Logo: GitHubLogo },
];

export default function IntegrationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 py-20 md:py-28">
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sky">
            Connected Platforms
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl text-foreground">
            Plugged in and pulling data
          </h2>
          <div className="mx-auto flex h-1 w-20 gap-0.5 overflow-hidden rounded-full">
            <span className="flex-1 line-sky" />
            <span className="flex-1 line-teal" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INTEGRATIONS.map((int, i) => (
            <div
              key={int.name}
              className="flex flex-col items-center gap-3 rounded-xl p-5 bg-card border border-border transition-all duration-200 hover:scale-105"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${0.2 + i * 0.05}s, transform 0.4s ease ${0.2 + i * 0.05}s`,
              }}
            >
              {int.Logo ? (
                <int.Logo />
              ) : (
                <span className="text-2xl">{int.emoji}</span>
              )}
              <span className="text-center text-xs font-medium text-foreground">
                {int.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 line-mint" />
            <span className="relative inline-flex h-2 w-2 rounded-full line-mint" />
          </span>
          More integrations coming soon
        </p>
      </div>
    </section>
  );
}
