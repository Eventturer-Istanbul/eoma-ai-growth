const DataIngestionIcon = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[200px] h-auto"
    >
      {/* Central hub */}
      <circle cx="100" cy="100" r="20" className="fill-primary/20 stroke-primary" strokeWidth="2" />
      <circle cx="100" cy="100" r="8" className="fill-primary" />
      
      {/* Data sources - outer ring */}
      <circle cx="100" cy="40" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      <circle cx="152" cy="70" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      <circle cx="152" cy="130" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      <circle cx="100" cy="160" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      <circle cx="48" cy="130" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      <circle cx="48" cy="70" r="14" className="fill-secondary stroke-primary/50" strokeWidth="1.5" />
      
      {/* Connection lines */}
      <line x1="100" y1="54" x2="100" y2="80" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="76" x2="116" y2="90" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="124" x2="116" y2="110" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="146" x2="100" y2="120" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="124" x2="84" y2="110" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="76" x2="84" y2="90" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      
      {/* Icons in circles */}
      <text x="100" y="44" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">GA4</text>
      <text x="152" y="74" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">META</text>
      <text x="152" y="134" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">IG</text>
      <text x="100" y="164" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">TT</text>
      <text x="48" y="134" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">X</text>
      <text x="48" y="74" textAnchor="middle" className="fill-muted-foreground text-[10px] font-medium">TG</text>
    </svg>
  );
};

export default DataIngestionIcon;
