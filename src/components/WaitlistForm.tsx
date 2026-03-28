import { useState, FormEvent, useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're on the list!",
      description: "We'll notify you when EOMA launches.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="px-4 py-20 md:py-28 bg-card">
      <div
        className="mx-auto max-w-2xl text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl text-foreground">
          Ready to see what your marketing data is telling you?
        </h2>
        <div className="mx-auto mb-6 flex h-1 w-20 gap-0.5 overflow-hidden rounded-full">
          <span className="flex-1 line-teal" />
          <span className="flex-1 line-coral" />
          <span className="flex-1 line-lavender" />
        </div>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Connect your brand, let the AI agent do the heavy lifting, and get
          actionable outputs — not dashboards you'll never check.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
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
      </div>
    </section>
  );
};

export default WaitlistForm;
