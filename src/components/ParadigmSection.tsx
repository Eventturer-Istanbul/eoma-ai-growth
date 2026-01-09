import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ParadigmSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden bg-card">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] line-lavender opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] line-lavender opacity-20" />
      <div className="absolute top-1/3 left-[10%] w-20 h-20 rounded-full line-lavender opacity-10 blur-2xl" />
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 rounded-full line-teal opacity-10 blur-2xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm text-lavender font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full line-lavender" />
            The Paradigm Shift
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-foreground leading-tight"
        >
          From <span className="text-muted-foreground line-through">Tools</span> to{" "}
          <span className="text-teal">Agency</span>.
          <br className="hidden md:block" />
          From <span className="text-muted-foreground line-through">Verticals</span> to{" "}
          <span className="text-gradient">Horizontals</span>.
        </motion.h2>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 mx-auto mb-10 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-lavender" />
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-sky" />
        </motion.div>

        {/* Visual: Verticals to Horizontals transformation */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* Left: Old way - Verticals */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  OLD WAY
                </span>
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-6 mt-2 line-through decoration-2">
                Vertical Tools
              </h3>
              <div className="space-y-3">
                {[
                  "Instagram Tool",
                  "SEO Dashboard",
                  "Analytics Platform",
                  "Ad Manager",
                  "Content Scheduler",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 0.6, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground/60"
                  >
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <span className="line-through">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: New way - Horizontals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-background border-2 border-teal/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-lavender/5" />
              <div className="absolute -top-3 left-6 z-10">
                <span className="px-3 py-1.5 line-teal text-white text-xs font-medium rounded-full">
                  NEW WAY
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-6 mt-2 relative z-10">
                Horizontal Agency
              </h3>
              <div className="space-y-3 relative z-10">
                {[
                  { text: "Marketing in a Box", color: "line-teal" },
                  { text: "Sales in a Box", color: "line-coral" },
                  { text: "Operations in a Box", color: "line-lavender" },
                  { text: "Finance in a Box", color: "line-mint" },
                  { text: "HR in a Box", color: "line-sky" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            You won't buy an Instagram tool or an SEO dashboard.
            <br className="hidden md:block" />
            You'll buy{" "}
            <strong className="text-foreground">Marketing in a Box</strong>—a complete AI agency
            that handles everything from data to execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParadigmSection;
