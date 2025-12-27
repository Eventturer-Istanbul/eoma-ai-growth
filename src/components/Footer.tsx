import eomaLogo from "@/assets/eoma-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={eomaLogo} alt="EOMA" className="w-8 h-8" />
          <span className="font-semibold text-lg">EOMA</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} EOMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
