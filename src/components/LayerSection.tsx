import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface LayerSectionProps {
  layerNumber: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  isReversed?: boolean;
}

const LayerSection = ({ 
  layerNumber, 
  title, 
  description, 
  features, 
  icon,
  isReversed = false 
}: LayerSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Layer {layerNumber}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h2>
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
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 card-glow">
                <div className="flex items-center justify-center text-primary">
                  {icon}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LayerSection;
