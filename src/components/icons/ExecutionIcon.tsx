const ExecutionIcon = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[200px] h-auto"
    >
      {/* Central command panel */}
      <rect x="60" y="50" width="80" height="100" rx="8" className="fill-secondary stroke-primary" strokeWidth="2" />
      
      {/* Panel header */}
      <rect x="60" y="50" width="80" height="20" rx="8" className="fill-primary/20" />
      <circle cx="75" cy="60" r="3" className="fill-primary/60" />
      <circle cx="85" cy="60" r="3" className="fill-primary/60" />
      <circle cx="95" cy="60" r="3" className="fill-primary/60" />
      
      {/* Action buttons */}
      <rect x="70" y="80" width="25" height="20" rx="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1" />
      <rect x="105" y="80" width="25" height="20" rx="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1" />
      <rect x="70" y="110" width="25" height="20" rx="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1" />
      <rect x="105" y="110" width="25" height="20" rx="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1" />
      
      {/* Integration arrows going out */}
      <line x1="60" y1="90" x2="30" y2="70" className="stroke-primary" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      <circle cx="25" cy="65" r="10" className="fill-card stroke-primary/50" strokeWidth="1.5" />
      <text x="25" y="69" textAnchor="middle" className="fill-muted-foreground text-[8px] font-medium">GH</text>
      
      <line x1="140" y1="90" x2="170" y2="70" className="stroke-primary" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <circle cx="175" cy="65" r="10" className="fill-card stroke-primary/50" strokeWidth="1.5" />
      <text x="175" y="69" textAnchor="middle" className="fill-muted-foreground text-[8px] font-medium">AD</text>
      
      <line x1="60" y1="120" x2="30" y2="140" className="stroke-primary" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>
      <circle cx="25" cy="145" r="10" className="fill-card stroke-primary/50" strokeWidth="1.5" />
      <text x="25" y="149" textAnchor="middle" className="fill-muted-foreground text-[8px] font-medium">NT</text>
      
      <line x1="140" y1="120" x2="170" y2="140" className="stroke-primary" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </line>
      <circle cx="175" cy="145" r="10" className="fill-card stroke-primary/50" strokeWidth="1.5" />
      <text x="175" y="149" textAnchor="middle" className="fill-muted-foreground text-[8px] font-medium">SM</text>
      
      {/* Checkmark animation */}
      <path d="M 95 95 L 100 100 L 110 88" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <animate attributeName="stroke-dasharray" from="0,30" to="30,0" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export default ExecutionIcon;
