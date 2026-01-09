import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ParadigmSection from "@/components/ParadigmSection";
import LayerSection from "@/components/LayerSection";
import UseCasesSection from "@/components/UseCasesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
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
      {/* Hero: The Era of Horizontals */}
      <HeroSection onJoinWaitlist={scrollToWaitlist} />

      {/* Problem: Fragmentation */}
      <ProblemSection />

      {/* Paradigm Shift: Verticals to Horizontals */}
      <ParadigmSection />

      {/* Three Pillars: Data, Context, Execution */}
      <div id="pillars">
        <LayerSection
          layerNumber="01"
          title="Data"
          description="All your marketing data unified in one place. Analytics, social metrics, SEO rankings, ad performance—automatically collected and correlated."
          features={[
            "Google Analytics 4 & Search Console",
            "Meta, TikTok, LinkedIn, Twitter insights",
            "Competitor monitoring & benchmarking",
            "Real-time performance dashboards",
            "Historical trend analysis"
          ]}
          icon={<DataIngestionIcon />}
          accentColor="teal"
        />

        <LayerSection
          layerNumber="02"
          title="Context"
          description="In-context learning that understands your brand. EOMA learns your voice, knows your audience, and remembers your goals—no prompt engineering required."
          features={[
            "Brand voice & style learning",
            "Audience persona understanding",
            "Campaign history & performance memory",
            "Industry-specific insights",
            "Contextual recommendations"
          ]}
          icon={<AIOptimizeIcon />}
          accentColor="coral"
          isReversed
        />

        <LayerSection
          layerNumber="03"
          title="Execution"
          description="From insight to action in seconds. EOMA doesn't just analyze—it executes. Content creation, ad optimization, social publishing, and more."
          features={[
            "AI content generation & publishing",
            "Automated ad campaign management",
            "Social media scheduling & posting",
            "Task creation in Notion & other tools",
            "Real-time campaign adjustments"
          ]}
          icon={<ExecutionIcon />}
          accentColor="lavender"
        />
      </div>

      {/* Use Cases: Real examples */}
      <UseCasesSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Waitlist */}
      <WaitlistForm />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
