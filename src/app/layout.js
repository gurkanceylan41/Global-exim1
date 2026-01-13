import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Global Exim - Kuresel Ticaretin Guvenilir Ortagi",
    template: "%s | Global Exim",
  },
  description: "Global Exim - 70+ ulkeye ihracat yapan, kaliteli gofret ve biskuvi ureticisi. Uluslararasi ticarette guvenilir is ortaginiz.",
  keywords: ["ihracat", "ithalat", "gofret", "biskuvi", "uluslararasi ticaret", "Global Exim", "Turkiye"],
  authors: [{ name: "Global Exim" }],
  creator: "Global Exim",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Global Exim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
