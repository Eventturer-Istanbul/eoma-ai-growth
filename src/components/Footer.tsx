import eomaLogo from "@/assets/eoma-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={eomaLogo} alt="EOMA" className="w-8 h-8" />
          <span className="font-semibold text-lg text-foreground">EOMA</span>
        </div>
        
        {/* Colorful divider */}
        <div className="hidden md:flex h-1 w-24 rounded-full overflow-hidden">
          <div className="flex-1 line-teal" />
          <div className="flex-1 line-coral" />
          <div className="flex-1 line-lavender" />
          <div className="flex-1 line-mint" />
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} EOMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
