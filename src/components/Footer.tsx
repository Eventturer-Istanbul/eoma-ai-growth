import { Link } from "react-router-dom";
import eomaLogo from "@/assets/eoma-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={eomaLogo} alt="EOMA" className="h-7 w-7" />
            <span className="font-semibold text-sm text-foreground">EOMA</span>
          </div>

          <Link
            to="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-teal transition-colors"
          >
            Blog
          </Link>

          {/* Color bar — desktop only */}
          <div className="hidden md:flex items-center gap-1">
            <div className="line-teal h-1 w-8 rounded-full" />
            <div className="line-coral h-1 w-8 rounded-full" />
            <div className="line-lavender h-1 w-8 rounded-full" />
            <div className="line-mint h-1 w-8 rounded-full" />
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {year} EOMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
