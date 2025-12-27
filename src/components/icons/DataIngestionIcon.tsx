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
      <circle cx="100" cy="100" r="20" fill="hsl(175 40% 55% / 0.15)" stroke="hsl(175 40% 55%)" strokeWidth="2" />
      <circle cx="100" cy="100" r="8" fill="hsl(175 40% 55%)" />
      
      {/* Data sources - outer ring with different colors */}
      <circle cx="100" cy="40" r="14" fill="hsl(40 25% 95%)" stroke="hsl(200 55% 60%)" strokeWidth="1.5" />
      <circle cx="152" cy="70" r="14" fill="hsl(40 25% 95%)" stroke="hsl(15 70% 65%)" strokeWidth="1.5" />
      <circle cx="152" cy="130" r="14" fill="hsl(40 25% 95%)" stroke="hsl(260 45% 70%)" strokeWidth="1.5" />
      <circle cx="100" cy="160" r="14" fill="hsl(40 25% 95%)" stroke="hsl(150 40% 60%)" strokeWidth="1.5" />
      <circle cx="48" cy="130" r="14" fill="hsl(40 25% 95%)" stroke="hsl(340 50% 65%)" strokeWidth="1.5" />
      <circle cx="48" cy="70" r="14" fill="hsl(40 25% 95%)" stroke="hsl(25 75% 70%)" strokeWidth="1.5" />
      
      {/* Connection lines with colors */}
      <line x1="100" y1="54" x2="100" y2="80" stroke="hsl(200 55% 60%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="76" x2="116" y2="90" stroke="hsl(15 70% 65%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="140" y1="124" x2="116" y2="110" stroke="hsl(260 45% 70%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="146" x2="100" y2="120" stroke="hsl(150 40% 60%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="124" x2="84" y2="110" stroke="hsl(340 50% 65%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="76" x2="84" y2="90" stroke="hsl(25 75% 70%)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
      </line>
      
      {/* Labels */}
      <text x="100" y="44" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">GA4</text>
      <text x="152" y="74" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">META</text>
      <text x="152" y="134" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">IG</text>
      <text x="100" y="164" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">TT</text>
      <text x="48" y="134" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">X</text>
      <text x="48" y="74" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="10" fontWeight="500">TG</text>
    </svg>
  );
};

export default DataIngestionIcon;
