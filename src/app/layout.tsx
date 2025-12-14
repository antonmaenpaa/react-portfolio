import type { Metadata } from "next";
import { Poppins, Dawning_of_a_New_Day } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dawning = Dawning_of_a_New_Day({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dawning",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anton Mäenpää | Frontend Developer",
    template: "%s | Anton Mäenpää"
  },
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building accessible, high-performance digital experiences.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "Portfolio", "Anton Mäenpää"],
  authors: [{ name: "Anton Mäenpää" }],
  creator: "Anton Mäenpää",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antonmaenpaa-portfolio.netlify.app/",
    title: "Anton Mäenpää | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript.",
    siteName: "Anton Mäenpää Portfolio",
    images: [
      {
        url: "/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Anton Mäenpää Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton Mäenpää | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript.",
    images: ["/avatar.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dawning.variable}`}>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
