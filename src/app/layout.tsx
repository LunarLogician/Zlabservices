import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zlabservices.site'),
  title: {
    default: 'ZLab Services | Hardened Multi-Tenant AI & Agentic Systems Studio',
    template: '%s | ZLab Services',
  },
  description:
    'ZLab Services engineers production-grade Full-Stack AI SaaS, Multi-Tenant Agentic Systems, and Autonomous AI Workflows with strict tenant data isolation. Shipped in 3 to 4 weeks.',
  keywords: [
    'Hardened Multi-Tenant AI',
    'AI Agentic Systems',
    'Multi-Tenant AI SaaS',
    'Full-Stack AI Development',
    'Postgres Row Level Security AI',
    'LangGraph Agent Workflows',
    'Flutter Cross-Platform AI Apps',
    'Muhammad Zubair Certified Ethical Hacker',
  ],
  authors: [{ name: 'Muhammad Zubair', url: 'https://zlabservices.site' }],
  creator: 'Muhammad Zubair',
  publisher: 'ZLab Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://zlabservices.site',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/fav.png', type: 'image/png' },
    ],
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  openGraph: {
    title: 'ZLab Services | Hardened Multi-Tenant AI & Agentic Systems Studio',
    description:
      'We engineer production-grade Full-Stack AI SaaS, Multi-Tenant Agentic Systems, and Autonomous AI Workflows with zero prompt-leakage architecture. Shipped in 3 to 4 weeks.',
    type: 'website',
    url: 'https://zlabservices.site',
    siteName: 'ZLab Services',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZLab Services - Hardened Multi-Tenant AI & Agentic Systems Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZLab Services | Hardened Multi-Tenant AI & Agentic Systems Studio',
    description:
      'We engineer production-grade Full-Stack AI SaaS, Multi-Tenant Agentic Systems, and Autonomous AI Workflows for tech founders.',
    images: ['/og-image.png'],
    creator: '@zlabservices',
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://zlabservices.site/#organization',
      name: 'ZLab Services',
      url: 'https://zlabservices.site',
      logo: 'https://zlabservices.site/og-image.png',
      image: 'https://zlabservices.site/og-image.png',
      description:
        'Specialized artificial intelligence product studio engineering hardened multi-tenant AI systems, autonomous agentic workflows, and full-stack web/mobile applications.',
      founder: {
        '@type': 'Person',
        '@id': 'https://zlabservices.site/#founder',
        name: 'Muhammad Zubair',
        jobTitle: 'Founder & Lead AI Engineer',
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Certified Ethical Hacker (CEH)',
            credentialCategory: 'Cybersecurity Certification',
            recognizedBy: {
              '@type': 'Organization',
              name: 'EC-Council',
            },
          },
        ],
        sameAs: [
          'https://www.linkedin.com/company/devpost-ai/?viewAsMember=true',
          'https://github.com/LunarLogician',
        ],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'zlabservices@gmail.com',
        contactType: 'technical sales',
        availableLanguage: ['English'],
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Worldwide',
        },
      ],
      knowsAbout: [
        'Full-Stack AI Web Development',
        'Multi-Tenant AI Systems Architecture',
        'AI Agentic Systems & Autonomous Workflows',
        'Tool Sandboxing & Code Execution',
        'Postgres Row-Level Security (RLS) & Vector Memory Isolation',
        'Cybersecurity & Pen-Testing',
        'Next.js 16, TypeScript, Flutter, Python',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zlabservices.site/#website',
      url: 'https://zlabservices.site',
      name: 'ZLab Services',
      publisher: {
        '@id': 'https://zlabservices.site/#organization',
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#012624] text-[#edfffe]">
        {children}
      </body>
    </html>
  );
}
