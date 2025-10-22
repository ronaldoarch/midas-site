import HeroSection from "@/components/HeroSection";
import MethodSection from "@/components/MethodSection";
import StepsSection from "@/components/StepsSection";
import AssessmentSection from "@/components/AssessmentSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <MethodSection />
      <StepsSection />
      <AssessmentSection />
      <CTASection />
      <FAQSection />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
