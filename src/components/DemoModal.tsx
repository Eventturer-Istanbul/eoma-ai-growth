import { useState, useEffect, FormEvent } from "react";
import { format, isSameDay, isWeekend, isBefore, startOfDay, addDays } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { fetchAvailableSlots, bookDemo } from "@/lib/api";
import { ArrowLeft, CalendarCheck, Loader2 } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = 1 | 2 | 3;

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedTime, setBookedTime] = useState("");
  const { toast } = useToast();

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setEmail("");
        setName("");
        setSelectedDate(undefined);
        setSelectedSlot(undefined);
        setSlots([]);
      }, 200);
    }
  }, [open]);

  // Fetch slots when modal opens or step changes to 2
  useEffect(() => {
    if (open && step === 2) {
      setLoadingSlots(true);
      fetchAvailableSlots()
        .then((res) => setSlots(res.slots))
        .catch((err) => {
          console.error(err);
          toast({
            title: "Error",
            description: "Failed to load available times. Please try again.",
            variant: "destructive",
          });
        })
        .finally(() => setLoadingSlots(false));
    }
  }, [open, step]);

  // Get time slots for the selected date
  const slotsForDate = selectedDate
    ? slots
        .filter((s) => isSameDay(new Date(s), selectedDate))
        .sort()
    : [];

  // Get dates that have at least one available slot
  const availableDates = new Set(
    slots.map((s) => startOfDay(new Date(s)).toISOString())
  );

  const handleStep1 = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({ title: "Name required", description: "Please enter your name.", variant: "destructive" });
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setStep(2);
  };

  const handleBook = async () => {
    if (!selectedSlot) return;

    setIsSubmitting(true);
    try {
      await bookDemo({
        email,
        name,
        scheduled_at: selectedSlot,
        timezone: userTimezone,
      });

      const slotDate = new Date(selectedSlot);
      setBookedTime(
        slotDate.toLocaleString("en-US", {
          timeZone: userTimezone,
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setStep(3);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast({ title: "Booking failed", description: message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={step === 2 ? "sm:max-w-xl" : "sm:max-w-md"}>
        {/* Step 1: Info */}
        {step === 1 && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Get a Demo
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground mt-2">
                Enter your details and pick a time for a walkthrough of EOMA.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleStep1} className="mt-4 space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base"
              />
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Next — Pick a Time
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No spam, no commitment — just a conversation.
              </p>
            </form>
          </>
        )}

        {/* Step 2: Schedule */}
        {step === 2 && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="p-1 rounded-md hover:bg-muted transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                </button>
                <DialogTitle className="text-xl font-bold text-foreground">
                  Pick a Date & Time
                </DialogTitle>
              </div>
              <DialogDescription className="text-sm text-muted-foreground">
                Weekdays, 10:00–17:00 (Istanbul time). Shown in your local time.
              </DialogDescription>
            </DialogHeader>

            {loadingSlots ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <div className="mt-2 flex flex-col sm:flex-row gap-4">
                {/* Calendar */}
                <div className="shrink-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setSelectedSlot(undefined);
                    }}
                    disabled={(date) =>
                      isWeekend(date) ||
                      isBefore(date, startOfDay(new Date())) ||
                      !availableDates.has(startOfDay(date).toISOString())
                    }
                    fromDate={new Date()}
                    toDate={addDays(new Date(), 30)}
                  />
                </div>

                {/* Time slots */}
                <div className="flex-1 min-w-0">
                  {selectedDate ? (
                    <>
                      <p className="text-sm font-medium text-foreground mb-3">
                        {format(selectedDate, "EEEE, MMMM d")}
                      </p>
                      {slotsForDate.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {slotsForDate.map((slot) => {
                            const slotDate = new Date(slot);
                            const timeLabel = slotDate.toLocaleTimeString("en-US", {
                              timeZone: userTimezone,
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            });
                            const isSelected = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                                  isSelected
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-border bg-background text-foreground hover:border-muted-foreground"
                                }`}
                              >
                                {timeLabel}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          No available slots for this date.
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground py-4">
                      Select a date to see available times.
                    </p>
                  )}
                </div>
              </div>
            )}

            <Button
              variant="hero"
              size="lg"
              className="w-full mt-4"
              disabled={!selectedSlot || isSubmitting}
              onClick={handleBook}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Booking...
                </>
              ) : (
                "Book Demo"
              )}
            </Button>
          </>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card">
              <CalendarCheck className="h-7 w-7 text-teal" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">You're booked!</h2>
            <p className="text-muted-foreground mb-1">
              {bookedTime}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Check your email for confirmation and a calendar link.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
