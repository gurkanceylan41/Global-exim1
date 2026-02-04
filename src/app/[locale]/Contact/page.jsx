/**
 * Contact Page
 *
 * Contact information page with minimal design.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ContactClient from "../components/contact/ContactClient";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Contact Page Component
 */
export default async function ContactPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="w-full min-h-screen bg-white">
      <ContactClient />
    </div>
  );
}
