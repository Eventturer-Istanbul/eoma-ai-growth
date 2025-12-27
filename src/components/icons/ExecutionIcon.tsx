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
      <rect x="60" y="50" width="80" height="100" rx="8" fill="hsl(40 25% 95%)" stroke="hsl(260 45% 70%)" strokeWidth="2" />
      
      {/* Panel header */}
      <rect x="60" y="50" width="80" height="20" rx="8" fill="hsl(260 45% 70% / 0.15)" />
      <circle cx="75" cy="60" r="3" fill="hsl(175 40% 55%)" />
      <circle cx="85" cy="60" r="3" fill="hsl(15 70% 65%)" />
      <circle cx="95" cy="60" r="3" fill="hsl(150 40% 60%)" />
      
      {/* Action buttons - colorful */}
      <rect x="70" y="80" width="25" height="20" rx="4" fill="hsl(175 40% 55% / 0.2)" stroke="hsl(175 40% 55%)" strokeWidth="1" />
      <rect x="105" y="80" width="25" height="20" rx="4" fill="hsl(15 70% 65% / 0.2)" stroke="hsl(15 70% 65%)" strokeWidth="1" />
      <rect x="70" y="110" width="25" height="20" rx="4" fill="hsl(260 45% 70% / 0.2)" stroke="hsl(260 45% 70%)" strokeWidth="1" />
      <rect x="105" y="110" width="25" height="20" rx="4" fill="hsl(150 40% 60% / 0.2)" stroke="hsl(150 40% 60%)" strokeWidth="1" />
      
      {/* Integration arrows */}
      <line x1="60" y1="90" x2="30" y2="70" stroke="hsl(175 40% 55%)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      <circle cx="25" cy="65" r="10" fill="hsl(40 25% 95%)" stroke="hsl(175 40% 55%)" strokeWidth="1.5" />
      <text x="25" y="69" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="8" fontWeight="500">GH</text>
      
      <line x1="140" y1="90" x2="170" y2="70" stroke="hsl(15 70% 65%)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <circle cx="175" cy="65" r="10" fill="hsl(40 25% 95%)" stroke="hsl(15 70% 65%)" strokeWidth="1.5" />
      <text x="175" y="69" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="8" fontWeight="500">AD</text>
      
      <line x1="60" y1="120" x2="30" y2="140" stroke="hsl(260 45% 70%)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>
      <circle cx="25" cy="145" r="10" fill="hsl(40 25% 95%)" stroke="hsl(260 45% 70%)" strokeWidth="1.5" />
      <text x="25" y="149" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="8" fontWeight="500">NT</text>
      
      <line x1="140" y1="120" x2="170" y2="140" stroke="hsl(150 40% 60%)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </line>
      <circle cx="175" cy="145" r="10" fill="hsl(40 25% 95%)" stroke="hsl(150 40% 60%)" strokeWidth="1.5" />
      <text x="175" y="149" textAnchor="middle" fill="hsl(220 20% 50%)" fontSize="8" fontWeight="500">SM</text>
    </svg>
  );
};

export default ExecutionIcon;
