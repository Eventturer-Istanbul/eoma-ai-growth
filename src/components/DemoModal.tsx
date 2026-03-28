import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      title: "We'll be in touch!",
      description: "Check your inbox — we'll send you available times shortly.",
    });

    setEmail("");
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Get a Demo
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-2">
            Enter your email and we'll schedule a walkthrough of EOMA tailored to
            your brand.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="h-12 text-base"
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Schedule a Meeting"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            No spam, no commitment — just a conversation.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
