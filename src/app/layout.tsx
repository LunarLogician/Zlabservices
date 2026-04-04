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
  icons: {
    icon: [{ url: '/fav.png', type: 'image/png' }],
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  openGraph: {
    title: "ZLab Services - AI Product Studio",
    description: "We engineer AI products that ship.",
    type: "website",
    url: "https://zlabservices.com",
    images: [{ url: '/fav.png', width: 1200, height: 630, alt: 'ZLab Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZLab Services - AI Product Studio',
    description: 'We engineer AI products that ship.',
    images: ['/fav.png'],
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
