import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { name: "Analytics", color: "line-teal" },
    { name: "Social", color: "line-coral" },
    { name: "Ads", color: "line-lavender" },
    { name: "SEO", color: "line-mint" },
    { name: "CRM", color: "line-sky" },
    { name: "Content", color: "line-rose" },
  ];

  return (
    <section ref={ref} id="problem" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-24 h-24 rounded-full line-coral opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-full line-lavender opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-coral font-medium text-sm tracking-wider uppercase">
            The Problem
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground leading-tight"
        >
          The Problem Isn't a Lack of Tools.
          <br className="hidden md:block" />
          <span className="text-coral">It's the Fragmentation.</span>
        </motion.h2>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 mx-auto mb-8 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-coral" />
          <div className="flex-1 line-rose" />
          <div className="flex-1 line-peach" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Marketers today juggle separate logins, separate invoices, and siloed data.
          Each tool solves one problem while creating three more.
        </motion.p>

        {/* Visual: Fragmented tools vs EOMA */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Fragmented tools */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 md:p-6 text-center shadow-soft"
                >
                  <div className={`w-3 h-3 rounded-full ${tool.color} mx-auto mb-2`} />
                  <span className="text-sm text-muted-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              6 tools. 6 logins. 6 invoices. 0 context.
            </p>
          </motion.div>

          {/* Right: EOMA unified */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-card border-2 border-teal/30 rounded-2xl p-8 md:p-12 text-center shadow-card relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex justify-center gap-1 mb-4">
                  {tools.map((tool) => (
                    <div key={tool.name} className={`w-2 h-2 rounded-full ${tool.color}`} />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">EOMA</h3>
                <p className="text-muted-foreground">All-in-one. Context-aware.</p>
              </div>
            </div>
            <p className="text-center text-teal mt-6 text-sm font-medium">
              1 platform. Full context. Complete execution.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium italic">
            "The era of managing ten different tabs is over."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ProblemSection;
