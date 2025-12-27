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
      <rect x="30" y="40" width="140" height="100" rx="16" fill="hsl(40 25% 95%)" stroke="hsl(40 20% 88%)" strokeWidth="2" />
      <polygon points="70,140 90,140 80,160" fill="hsl(40 25% 95%)" stroke="hsl(40 20% 88%)" strokeWidth="2" strokeLinejoin="round" />
      
      {/* AI brain icon */}
      <circle cx="100" cy="85" r="30" fill="hsl(15 70% 65% / 0.1)" stroke="hsl(15 70% 65%)" strokeWidth="2" />
      
      {/* Neural connections - colorful */}
      <circle cx="85" cy="75" r="4" fill="hsl(175 40% 55%)" />
      <circle cx="115" cy="75" r="4" fill="hsl(200 55% 60%)" />
      <circle cx="100" cy="95" r="4" fill="hsl(15 70% 65%)" />
      <circle cx="85" cy="95" r="4" fill="hsl(260 45% 70%)" />
      <circle cx="115" cy="95" r="4" fill="hsl(150 40% 60%)" />
      
      <line x1="85" y1="75" x2="100" y2="95" stroke="hsl(175 40% 55% / 0.5)" strokeWidth="1.5" />
      <line x1="115" y1="75" x2="100" y2="95" stroke="hsl(200 55% 60% / 0.5)" strokeWidth="1.5" />
      <line x1="85" y1="75" x2="115" y2="75" stroke="hsl(15 70% 65% / 0.5)" strokeWidth="1.5" />
      <line x1="85" y1="95" x2="100" y2="95" stroke="hsl(260 45% 70% / 0.5)" strokeWidth="1.5" />
      <line x1="115" y1="95" x2="100" y2="95" stroke="hsl(150 40% 60% / 0.5)" strokeWidth="1.5" />
      
      {/* Pulsing ring */}
      <circle cx="100" cy="85" r="40" stroke="hsl(15 70% 65% / 0.2)" strokeWidth="1" fill="none">
        <animate attributeName="r" from="30" to="50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Message dots - colorful */}
      <circle cx="50" cy="115" r="3" fill="hsl(175 40% 55%)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="115" r="3" fill="hsl(15 70% 65%)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="115" r="3" fill="hsl(260 45% 70%)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default AIOptimizeIcon;
