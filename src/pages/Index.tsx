import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import BlogSection from "@/components/BlogSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <BlogSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;
