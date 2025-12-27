import HeroSection from "@/components/HeroSection";
import LayerSection from "@/components/LayerSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import DataIngestionIcon from "@/components/icons/DataIngestionIcon";
import AIOptimizeIcon from "@/components/icons/AIOptimizeIcon";
import ExecutionIcon from "@/components/icons/ExecutionIcon";

const Index = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onJoinWaitlist={scrollToWaitlist} />
      
      <div id="layers">
        <LayerSection
          layerNumber="01"
          title="Data Ingestion"
          description="Connect all your marketing channels in one place. Track your own performance and spy on competitors—automatically."
          features={[
            "Google Analytics 4 integration",
            "Meta Ads & Instagram insights",
            "TikTok, Twitter (X), Reddit tracking",
            "Telegram channel analytics",
            "Competitor monitoring & benchmarking"
          ]}
          icon={<DataIngestionIcon />}
        />

        <LayerSection
          layerNumber="02"
          title="AI Intelligence"
          description="No more complex dashboards. Just chat with EOMA. Ask questions, get insights, and let AI optimize your ad spend in real-time."
          features={[
            "Natural language queries",
            "Real-time performance insights",
            "Automated budget optimization",
            "Predictive analytics",
            "24/7 intelligent monitoring"
          ]}
          icon={<AIOptimizeIcon />}
          isReversed
        />

        <LayerSection
          layerNumber="03"
          title="Instant Execution"
          description="From insight to action in seconds. Execute campaigns, update content, and manage ads across all platforms from one panel."
          features={[
            "Meta & Google Ads management",
            "Social media publishing",
            "GitHub deployments",
            "Notion workspace sync",
            "One-click campaign launches"
          ]}
          icon={<ExecutionIcon />}
        />
      </div>

      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;
