import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Platform logo components
const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F9AB00">
    <path d="M22.84 2.998v18.004c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V2.998c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zM13.08 21.002V8.998c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v12.004c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2zM3.32 21.002v-6.004c0-1.1-.9-2-2-2H.998c-.55 0-1 .45-1 1v7.004c0 .55.45 1 1 1h.322c1.1 0 2-.9 2-2z"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0081FB">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80"/>
        <stop offset="25%" stopColor="#F77737"/>
        <stop offset="50%" stopColor="#E1306C"/>
        <stop offset="75%" stopColor="#C13584"/>
        <stop offset="100%" stopColor="#833AB4"/>
      </linearGradient>
    </defs>
    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const TwitterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#26A5E4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#FBBC04" d="M3.9 12c0-1.2.4-2.3 1.1-3.3L1.6 5.3C.6 7.1 0 9.2 0 12c0 2.8.6 5 1.6 6.7l3.4-3.4C4.3 14.3 3.9 13.2 3.9 12z"/>
    <path fill="#4285F4" d="M12 3.9c2.2 0 4.1.8 5.6 2.1l3.3-3.3C18.7 1 15.6 0 12 0 7.4 0 3.5 2.6 1.6 6.3l3.4 3.4C6.1 6.7 8.8 3.9 12 3.9z"/>
    <path fill="#34A853" d="M12 20.1c-3.2 0-5.9-2.8-6.9-5.8l-3.4 3.4C3.5 21.4 7.4 24 12 24c3.5 0 6.6-1.4 8.9-3.7l-3.2-3.2c-1.4 1.3-3.4 3-5.7 3z"/>
    <path fill="#EA4335" d="M20.1 12c0-.8-.1-1.6-.3-2.3H12v4.6h4.5c-.2 1.1-.8 2-1.7 2.7l3.2 3.2c1.9-1.8 3.1-4.5 3.1-8.2z"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.746 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.448-1.632z"/>
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
    <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
    <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
    <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const WebflowLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4353FF">
    <path d="M17.802 8.56s-1.946 6.027-2.087 6.49c-.047-.404-1.095-6.49-1.095-6.49s-2.04 0-3.103 0c0 0-1.9 4.158-2.603 5.972-.063-.396-.81-5.972-.81-5.972H5.094s1.72 9.984 1.815 10.62c1.124 0 3.12 0 3.12 0s1.921-4.166 2.048-4.555c.033.387 1.053 4.555 1.053 4.555h3.118s3.658-10.62 3.756-10.62H17.802z"/>
  </svg>
);

interface Integration {
  name: string;
  category: string;
  logo: ReactNode;
}

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations: Integration[] = [
    { name: "Google Analytics", category: "Analytics", logo: <GoogleAnalyticsLogo /> },
    { name: "Meta Ads", category: "Advertising", logo: <MetaLogo /> },
    { name: "Instagram", category: "Social", logo: <InstagramLogo /> },
    { name: "Twitter / X", category: "Social", logo: <TwitterLogo /> },
    { name: "LinkedIn", category: "Social", logo: <LinkedInLogo /> },
    { name: "TikTok", category: "Social", logo: <TikTokLogo /> },
    { name: "Telegram", category: "Messaging", logo: <TelegramLogo /> },
    { name: "Google Ads", category: "Advertising", logo: <GoogleAdsLogo /> },
    { name: "Notion", category: "Productivity", logo: <NotionLogo /> },
    { name: "GitHub", category: "Development", logo: <GitHubLogo /> },
    { name: "Slack", category: "Messaging", logo: <SlackLogo /> },
    { name: "Webflow", category: "CMS", logo: <WebflowLogo /> },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden bg-card">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] line-sky opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] line-sky opacity-20" />
      <div className="absolute top-1/3 right-[10%] w-24 h-24 rounded-full line-teal opacity-10 blur-2xl" />
      <div className="absolute bottom-1/3 left-[10%] w-20 h-20 rounded-full line-coral opacity-10 blur-2xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-sky font-medium text-sm tracking-wider uppercase">
            Integrations
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground leading-tight"
        >
          One Window. <span className="text-gradient">Every Platform.</span>
        </motion.h2>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 mx-auto mb-8 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-sky" />
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-mint" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Connect all your marketing tools and let EOMA handle the orchestration.
          No more tab-switching. No more copy-pasting.
        </motion.p>

        {/* Integration grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="bg-background border border-border rounded-xl p-4 text-center hover:border-teal/50 hover:shadow-soft transition-all duration-200 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                {integration.logo}
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">{integration.name}</h3>
              <p className="text-xs text-muted-foreground">{integration.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full line-mint animate-pulse" />
            More integrations coming soon
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
