import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eomaLogo from "@/assets/eoma-logo.png";
import DemoModal from "@/components/DemoModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "hsl(var(--background) / 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "var(--shadow-soft)" : "none",
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <img src={eomaLogo} alt="EOMA" className="h-7 w-7" />
            <span className="text-base font-semibold text-foreground">EOMA</span>
          </a>

          <div className="flex items-center gap-6">
            <Link
              to="/blog"
              className="hidden sm:block text-sm font-medium text-foreground hover:text-teal transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 bg-foreground text-background rounded-lg h-9 px-5 text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Demo
            </button>
          </div>
        </div>
      </nav>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
