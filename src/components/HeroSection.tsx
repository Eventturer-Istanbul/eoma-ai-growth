import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import eomaLogo from "@/assets/eoma-logo.png";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-milky">
      {/* Decorative colorful lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-[20%] left-0 w-full h-[1px] line-teal opacity-20" />
        <div className="absolute top-[35%] left-0 w-full h-[1px] line-coral opacity-15" />
        <div className="absolute top-[65%] left-0 w-full h-[1px] line-lavender opacity-20" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] line-mint opacity-15" />
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-[15%] w-[1px] h-full line-sky opacity-15" />
        <div className="absolute top-0 left-[85%] w-[1px] h-full line-rose opacity-15" />
        
        {/* Colorful dots */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full line-teal opacity-40" />
        <div className="absolute top-[35%] left-[85%] w-2 h-2 rounded-full line-coral opacity-40" />
        <div className="absolute top-[65%] left-[15%] w-2 h-2 rounded-full line-lavender opacity-40" />
        <div className="absolute top-[80%] left-[85%] w-2 h-2 rounded-full line-mint opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={eomaLogo} 
            alt="EOMA Logo" 
            className="w-28 h-28 md:w-36 md:h-36 mx-auto animate-float"
          />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-foreground"
        >
          EOMA
        </motion.h1>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-32 mx-auto mb-6 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-coral" />
          <div className="flex-1 line-lavender" />
          <div className="flex-1 line-mint" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6"
        >
          Marketing in a box
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12"
        >
          The AI agency that tracks, optimizes, and executes your entire marketing strategy—all from one intelligent platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onJoinWaitlist}
          >
            Join the Waitlist
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => document.getElementById('layers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Scroll indicator with colorful ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full line-teal" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
