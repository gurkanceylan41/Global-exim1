import HeroSection from "../components/about/HeroSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import ValuesSection from "../components/about/ValuesSection";
import TimelineSection from "../components/about/TimelineSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import CTASection from "../components/about/CTASection";

export const metadata = {
  title: "Hakkımızda - Global Exim",
  description: "2010'dan bu yana 70+ ülkeye ihracat yapan Global Exim hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimiz.",
  keywords: "Global Exim, hakkımızda, ihracat şirketi, Türkiye, uluslararası ticaret",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission/Vision/Values Section */}
      <MissionVisionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
