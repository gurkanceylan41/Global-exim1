import AboutSection from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";

export const metadata = {
  title: "Global Exim - Küresel Ticaretin Güvenilir Ortağı",
  description:
    "70+ ülkeye ihracat yapan, kaliteli gofret ve bisküvi üreticisi. Uluslararası ticarette güvenilir iş ortağınız.",
  keywords:
    "ihracat, ithalat, gofret, bisküvi, uluslararası ticaret, Global Exim",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
