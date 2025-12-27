const AIOptimizeIcon = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[200px] h-auto"
    >
      {/* Chat bubble background */}
      <rect x="30" y="40" width="140" height="100" rx="16" className="fill-secondary stroke-border" strokeWidth="2" />
      <polygon points="70,140 90,140 80,160" className="fill-secondary stroke-border" strokeWidth="2" strokeLinejoin="round" />
      
      {/* AI brain icon in center */}
      <circle cx="100" cy="85" r="30" className="fill-primary/10 stroke-primary" strokeWidth="2" />
      
      {/* Neural connections */}
      <circle cx="85" cy="75" r="4" className="fill-primary" />
      <circle cx="115" cy="75" r="4" className="fill-primary" />
      <circle cx="100" cy="95" r="4" className="fill-primary" />
      <circle cx="85" cy="95" r="4" className="fill-primary/60" />
      <circle cx="115" cy="95" r="4" className="fill-primary/60" />
      
      <line x1="85" y1="75" x2="100" y2="95" className="stroke-primary/50" strokeWidth="1.5" />
      <line x1="115" y1="75" x2="100" y2="95" className="stroke-primary/50" strokeWidth="1.5" />
      <line x1="85" y1="75" x2="115" y2="75" className="stroke-primary/50" strokeWidth="1.5" />
      <line x1="85" y1="95" x2="100" y2="95" className="stroke-primary/30" strokeWidth="1.5" />
      <line x1="115" y1="95" x2="100" y2="95" className="stroke-primary/30" strokeWidth="1.5" />
      
      {/* Pulsing rings */}
      <circle cx="100" cy="85" r="40" className="stroke-primary/20" strokeWidth="1" fill="none">
        <animate attributeName="r" from="30" to="50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Message dots */}
      <circle cx="50" cy="115" r="3" className="fill-muted-foreground/40">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="115" r="3" className="fill-muted-foreground/40">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="115" r="3" className="fill-muted-foreground/40">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default AIOptimizeIcon;
