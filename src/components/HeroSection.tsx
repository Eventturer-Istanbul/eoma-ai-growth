import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  return (
    <section className="bg-milky relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Subtle decorative dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full line-teal opacity-30" />
        <div className="absolute right-[15%] top-[35%] h-2 w-2 rounded-full line-coral opacity-30" />
        <div className="absolute left-[20%] bottom-[30%] h-2 w-2 rounded-full line-lavender opacity-30" />
        <div className="absolute right-[10%] bottom-[25%] h-2 w-2 rounded-full line-mint opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground bg-card border border-border">
            <span className="h-2 w-2 rounded-full line-teal" />
            AI-Powered Marketing Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-foreground"
        >
          Search, AI visibility, and social intelligence —{" "}
          <span className="text-gradient">one AI agent.</span>
        </motion.h1>

        {/* Colorful underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mb-6 flex justify-center"
          style={{ transformOrigin: "center" }}
        >
          <div className="flex h-1 w-32 overflow-hidden rounded-full">
            <span className="flex-1 line-teal" />
            <span className="flex-1 line-coral" />
            <span className="flex-1 line-lavender" />
            <span className="flex-1 line-mint" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.4)}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          EOMA is an AI agent that runs SEO audits, tracks how your brand
          appears in AI-generated answers, monitors six social platforms, and
          turns it all into content and action plans — grounded in your brand
          context.
        </motion.p>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex justify-center"
        >
          <a
            href="#what-we-do"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 bg-foreground text-background rounded-xl h-14 px-10 text-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{
              boxShadow: "0 20px 25px -5px hsl(var(--foreground) / 0.1)",
            }}
          >
            See What EOMA Does
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
