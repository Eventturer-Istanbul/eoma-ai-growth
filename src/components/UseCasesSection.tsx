import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      trigger: "You book a 70s rock band for your venue",
      action: "EOMA automatically shifts your Meta Ads targeting to Gen Z nostalgia audiences, updates your Instagram content calendar, and adjusts your email campaigns—all before you finish your coffee.",
      color: "teal",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      trigger: "You need fresh content for next week",
      action: "EOMA generates an SEO-optimized blog post based on your brand voice, creates matching social snippets, and pushes everything to your CMS—ready for your approval.",
      color: "coral",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      trigger: "You run a brand collaboration",
      action: "EOMA creates tasks in Notion for each deliverable, sets up tracking links, drafts influencer outreach emails, and schedules reminder notifications—your whole workflow, automated.",
      color: "lavender",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; line: string }> = {
    teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", line: "line-teal" },
    coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30", line: "line-coral" },
    lavender: { bg: "bg-lavender/10", text: "text-lavender", border: "border-lavender/30", line: "line-lavender" },
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[5%] w-24 h-24 rounded-full line-mint opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 right-[5%] w-32 h-32 rounded-full line-sky opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-mint font-medium text-sm tracking-wider uppercase">
            Real Examples
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground leading-tight"
        >
          See EOMA in Action
        </motion.h2>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 mx-auto mb-8 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-coral" />
          <div className="flex-1 line-lavender" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          One trigger. Complete execution. No manual work.
        </motion.p>

        {/* Use cases */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => {
            const colors = colorClasses[useCase.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className={`bg-card border ${colors.border} rounded-2xl p-6 md:p-8 relative overflow-hidden`}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-1 h-full ${colors.line}`} />

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Icon */}
                  <div className={`${colors.bg} ${colors.text} p-4 rounded-xl flex-shrink-0`}>
                    {useCase.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Trigger */}
                    <div className="mb-4">
                      <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                        When
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1">
                        {useCase.trigger}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-[1px] w-8 ${colors.line}`} />
                      <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Action */}
                    <div>
                      <span className={`text-sm font-semibold ${colors.text} uppercase tracking-wider`}>
                        EOMA automatically
                      </span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">
                        {useCase.action}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
