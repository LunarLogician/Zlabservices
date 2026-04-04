import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZLab Services - AI Product Studio",
  description: "ZLab builds intelligent software — AI products shipped to production. Founded by Muhammad Zubair in Islamabad, Pakistan.",
  keywords: "AI, product studio, software development, AI SaaS, Flutter apps, VS Code extensions",
  authors: [{ name: "Muhammad Zubair" }],
  openGraph: {
    title: "ZLab Services - AI Product Studio",
    description: "We engineer AI products that ship.",
    type: "website",
    url: "https://zlabservices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-white">{children}</body>
    </html>
  );
}
