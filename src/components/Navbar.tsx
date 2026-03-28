import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eomaLogo from "@/assets/eoma-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        </div>
      </div>
    </nav>
  );
}
