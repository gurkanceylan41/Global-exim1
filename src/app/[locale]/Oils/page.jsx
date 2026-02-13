/**
 * Oils Page - Bunge Style
 *
 * Detailed page about specialty oils, fats and lecithins.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import OilsClient from "../components/oils/OilsClient";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "oils.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function OilsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OilsClient />;
}
