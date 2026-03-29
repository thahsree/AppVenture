import ClientsSection from "@/sections/ClientsSection";
import CTASection from "@/sections/CTASection";
import HeroSection from "@/sections/HeroSection";
import ProcessSection from "@/sections/ProcessSection";
import ServicesSection from "@/sections/ServicesSection";
import SocialProofSection from "@/sections/SocialProofSection";
import TechStackSection from "@/sections/TechStackSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <TechStackSection />
      <ClientsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
