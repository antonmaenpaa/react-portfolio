import type { Metadata } from "next";
import { Poppins, Dawning_of_a_New_Day } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
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
  title: "React Portfolio",
  description: "My Modern React Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dawning.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
