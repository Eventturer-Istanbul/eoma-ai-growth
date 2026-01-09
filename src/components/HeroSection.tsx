import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoTight from "@/assets/logo_tight.png";

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
          className="mb-6"
        >
          <img
            src={logoTight}
            alt="EOMA Logo"
            className="h-20 md:h-28 mx-auto"
          />
        </motion.div>

        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full line-teal" />
            Marketing in a Box | AI Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight"
        >
          The Era of Tools is Over.{" "}
          <br className="hidden md:block" />
          Welcome to the Era of{" "}
          <span className="text-gradient">Horizontals</span>.
        </motion.h1>

        {/* Colorful underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-32 mx-auto mb-8 rounded-full overflow-hidden flex"
        >
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-coral" />
          <div className="flex-1 line-lavender" />
          <div className="flex-1 line-mint" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          EOMA is a <strong className="text-foreground">Context-Aware AI Agency</strong> that automates everything
          from data collection to final execution—all from one intelligent platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            onClick={onJoinWaitlist}
          >
            Join the Waitlist
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
