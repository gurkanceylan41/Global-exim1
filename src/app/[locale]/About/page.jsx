/**
 * About Page
 *
 * Company information page displaying mission, vision, values,
 * timeline, testimonials, and call-to-action sections.
 * All content is internationalized using next-intl.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import HeroSection from "../components/about/HeroSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import ValuesSection from "../components/about/ValuesSection";
import TimelineSection from "../components/about/TimelineSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import CTASection from "../components/about/CTASection";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * About Page Component
 */
export default async function AboutPage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <div className="w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section - Company introduction with stats */}
      <HeroSection />

      {/* Mission/Vision/Values Section - Tabbed content */}
      <MissionVisionSection />

      {/* Values Section - Core company values grid */}
      <ValuesSection />

      {/* Timeline Section - Company history milestones */}
      <TimelineSection />

      {/* Why Choose Us Section - Key differentiators */}
      <WhyChooseUsSection />

      {/* Testimonials Section - Customer feedback */}
      <TestimonialsSection />

      {/* CTA Section - Contact call-to-action */}
      <CTASection />
    </div>
  );
}
