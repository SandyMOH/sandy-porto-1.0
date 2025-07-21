import type { Metadata } from "next";
import { Syne, Architects_Daughter } from "next/font/google";
import "./globals.css";

const fontSyne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne", // CSS variable for Syne
});

const fontArchitectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"], // This font only has a 400 weight
  display: "swap",
  variable: "--font-architects-daughter", // CSS variable for Architects Daughter
});

export const metadata: Metadata = {
  title: "Sandy Mo.",
  description:
    "Sandy Mo. is a personal website showcasing my work and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSyne.variable} ${fontArchitectsDaughter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
