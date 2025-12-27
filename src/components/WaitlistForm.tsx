import { useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when EOMA launches.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} id="waitlist" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative colorful elements */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full line-teal opacity-10 blur-2xl" />
      <div className="absolute bottom-1/4 right-[10%] w-24 h-24 rounded-full line-coral opacity-10 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full line-lavender opacity-5 blur-3xl" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to transform your marketing?
          </h2>
          
          {/* Colorful underline */}
          <div className="h-1 w-24 mx-auto mb-6 rounded-full overflow-hidden flex">
            <div className="flex-1 line-coral" />
            <div className="flex-1 line-peach" />
            <div className="flex-1 line-rose" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience the future of AI-powered marketing.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
