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
          description="All your marketing data unified in one place. Analytics, social metrics, SEO rankings, ad performance—automatically collected and correlated. We also monitor competitor brands and adjacent industries so you always know what's moving around you."
          features={[
            "Google Analytics 4 & Search Console",
            "Meta, TikTok, LinkedIn, Twitter insights",
            "Competitor & reference brand monitoring",
            "Monthly intelligence reports & on-demand listening",
            "Real-time performance dashboards",
            "Pattern detection across campaigns and industries"
          ]}
          icon={<DataIngestionIcon />}
          accentColor="teal"
        />

        <LayerSection
          layerNumber="02"
          title="Context"
          description="In-context learning that understands your brand. EOMA learns your voice, knows your audience, and remembers your goals—no prompt engineering required. AI processes the data; our team interprets the context and guides every strategic decision."
          features={[
            "Brand voice & style learning",
            "Audience persona understanding",
            "Campaign history & performance memory",
            "Industry-specific insights",
            "Strategic interpretation layered onto AI analysis",
            "Quarterly grand strategy & monthly roadmaps"
          ]}
          icon={<AIOptimizeIcon />}
          accentColor="coral"
          isReversed
        />

        <LayerSection
          layerNumber="03"
          title="Execution"
          description="From insight to action—with human oversight at every step. EOMA handles content production, ad optimization, and publishing across platforms. AI scales the work; creative decisions stay intentionally human."
          features={[
            "Platform-native content for Instagram, YouTube, LinkedIn, X & TikTok",
            "AI-assisted blog writing & SEO content",
            "Paid media management across Meta & Google Ads",
            "Continuous performance monitoring & budget optimization",
            "Adaptive production volume based on strategic focus",
            "Every output reviewed with brand sensitivity in mind"
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
