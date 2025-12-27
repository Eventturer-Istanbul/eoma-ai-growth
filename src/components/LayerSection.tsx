import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface LayerSectionProps {
  layerNumber: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  accentColor: string;
  isReversed?: boolean;
}

const LayerSection = ({ 
  layerNumber, 
  title, 
  description, 
  features, 
  icon,
  accentColor,
  isReversed = false 
}: LayerSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses: Record<string, { dot: string; text: string; line: string }> = {
    teal: { dot: "line-teal", text: "text-teal", line: "line-teal" },
    coral: { dot: "line-coral", text: "text-coral", line: "line-coral" },
    lavender: { dot: "line-lavender", text: "text-lavender", line: "line-lavender" },
    mint: { dot: "line-mint", text: "text-mint", line: "line-mint" },
    sky: { dot: "line-sky", text: "text-sky", line: "line-sky" },
    rose: { dot: "line-rose", text: "text-rose", line: "line-rose" },
  };

  const colors = colorClasses[accentColor] || colorClasses.teal;

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative line */}
      <div className={`absolute top-1/2 ${isReversed ? 'right-0' : 'left-0'} w-1/3 h-[1px] ${colors.line} opacity-20`} />
      
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className={`${colors.text} font-medium text-sm tracking-wider uppercase mb-4 block`}>
                Layer {layerNumber}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
                {title}
              </h2>
              {/* Colorful underline */}
              <div className={`h-1 w-16 ${colors.line} rounded-full mb-6`} />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
              <div className="flex items-center justify-center">
                {icon}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LayerSection;
