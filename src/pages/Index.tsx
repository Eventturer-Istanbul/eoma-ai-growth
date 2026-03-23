import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ParadigmSection from "@/components/ParadigmSection";
import LayerSection from "@/components/LayerSection";
import UseCasesSection from "@/components/UseCasesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import WaitlistForm from "@/components/WaitlistForm";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import DataIngestionIcon from "@/components/icons/DataIngestionIcon";
import AIOptimizeIcon from "@/components/icons/AIOptimizeIcon";
import ExecutionIcon from "@/components/icons/ExecutionIcon";

const Index = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
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
            "Pattern detection across campaigns and industries",
          ]}
          icon={<DataIngestionIcon />}
          accentColor="teal"
        />

        <LayerSection
          layerNumber="02"
          title="Context"
          description="Raw data means nothing without understanding. EOMA's context layer correlates signals across every platform, learns your brand voice, understands your competitive landscape, and turns noise into strategic clarity."
          features={[
            "Brand voice & messaging DNA extraction",
            "Cross-platform signal correlation",
            "Competitive positioning intelligence",
            "Audience behavior pattern recognition",
            "Content gap & opportunity detection",
            "Campaign performance attribution",
          ]}
          icon={<AIOptimizeIcon />}
          accentColor="lavender"
        />

        <LayerSection
          layerNumber="03"
          title="Execution"
          description="Intelligence without action is just a dashboard. EOMA's execution layer turns insights into content, campaigns, and optimizations—with human-in-the-loop approval so nothing goes live without your sign-off."
          features={[
            "AI Content Studio with brand voice",
            "Multi-platform publishing (one-click)",
            "Campaign creation from insights",
            "Approval-based workflow: AI drafts → You approve",
            "Auto-boost high performers",
            "The Loop: detect → optimize → learn → repeat",
          ]}
          icon={<ExecutionIcon />}
          accentColor="coral"
        />
      </div>

      {/* Use Cases */}
      <UseCasesSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Blog */}
      <BlogSection />

      {/* Waitlist */}
      <div id="waitlist">
        <WaitlistForm />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
