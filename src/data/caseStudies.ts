export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientIndustry: string;
  clientType: string;
  header: string;
  overview: string;
  problem: string;
  solution: string;
  architectureFraming: {
    multiTenancy: string;
    securityAndIsolation: string;
    integrations: string;
  };
  stack: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  results: {
    label: string;
    value: string;
    detail: string;
  }[];
  timeline: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  liveUrl?: string;
  screenshots?: {
    label: string;
    src: string;
  }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'everlearnai',
    slug: 'everlearn-ai-study-platform',
    title: 'EverlearnAI: Full-Stack AI Study & Spaced-Repetition Platform',
    clientIndustry: 'EdTech & Professional Learning SaaS',
    clientType: 'AI Learning SaaS & Mobile App',
    header: 'Turning complex study materials and lecture documents into verified quizzes and spaced-repetition flashcards.',
    overview:
      'Engineered an AI-driven learning platform that transforms dense study materials, textbooks, and notes into high-yield quizzes, multiple-choice questions (MCQs), and spaced-repetition flashcards with cross-platform web and mobile synchronization.',
    problem:
      'Students and professional exam takers spend excessive hours manually formatting flashcards and practice exams. Conventional AI tools hallucinate details, struggle with complex multi-page PDF documents, and expose uploaded study notes without tenant-level data isolation.',
    solution:
      'Architected a full-stack Next.js web application and companion Flutter mobile app utilizing Claude 3.5 Sonnet for high-precision content generation. Implemented chunked document ingestion, vector similarity search, and automated citation linking so learners can verify every generated answer against original source materials.',
    architectureFraming: {
      multiTenancy:
        'Tenant and user-isolated document storage schemas with Supabase PostgreSQL and Row-Level Security (RLS), preventing cross-user data leakage.',
      securityAndIsolation:
        'Zero-data-retention inference configurations ensuring proprietary study notes and documents are never used for foundation model training.',
      integrations:
        'Real-time cross-platform state sync between Next.js and Flutter, Redis caching for sub-200ms quiz loads, and Stripe checkout automation.',
    },
    stack: [
      'Next.js 16',
      'Flutter (iOS & Android)',
      'Claude 3.5 Sonnet',
      'Supabase (PostgreSQL RLS)',
      'Redis Caching',
      'Tailwind CSS',
      'Stripe Payments',
    ],
    process: [
      {
        step: '01',
        title: 'Document Parser & Schema Modeling',
        description:
          'Constructed a specialized document parsing pipeline that chunks complex PDFs while preserving table structures, formulas, and domain terminology.',
      },
      {
        step: '02',
        title: 'Zero-Retention Inference & Assessment Engine',
        description:
          'Routed prompts through zero-retention Claude API endpoints with strict deterministic temperature settings and citation cross-validation.',
      },
      {
        step: '03',
        title: 'Cross-Platform Web & Mobile Development',
        description:
          'Built the Next.js web portal and Flutter mobile companion using clean Provider architecture, enabling offline study modes and instant cloud sync.',
      },
      {
        step: '04',
        title: 'Security Hardening & Production Launch',
        description:
          'Conducted penetration testing, Redis rate-limiting configuration, automated Stripe webhook idempotency, and deployed on hardened cloud infrastructure.',
      },
    ],
    results: [
      {
        label: 'Active Learners',
        value: '1,500+',
        detail: 'Active students and professionals preparing for high-stakes certification exams.',
      },
      {
        label: 'Questions & Flashcards Generated',
        value: '50,000+',
        detail: 'Automated study questions generated with zero human authoring bottlenecks.',
      },
      {
        label: 'Study Time Saved',
        value: '70% reduction',
        detail: 'Reduction in manual study deck preparation time compared to traditional flashcard apps.',
      },
      {
        label: 'Development Timeline',
        value: '4 Weeks',
        detail: 'From initial architecture planning to live production web and mobile launch.',
      },
    ],
    timeline: '4 to 5 weeks from architecture to production launch',
    publishedAt: '2026-02-15',
    author: {
      name: 'Muhammad Zubair',
      role: 'Lead Full-Stack AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://everlearnai.live',
    screenshots: [
      { label: 'Quiz Generator Engine', src: '/quiz.png' },
      { label: 'Student Dashboard', src: '/Dashboard.png' },
    ],
  },
  {
    id: 'devpostai',
    slug: 'devpost-ai-content-engine',
    title: 'DevPost AI: Multi-Tenant Content Automation & Thought Leadership Engine',
    clientIndustry: 'B2B Marketing & Founder Thought Leadership',
    clientType: 'Multi-Tenant Content Automation SaaS',
    header: 'Transforming technical updates, founder insights, and release milestones into high-converting professional posts.',
    overview:
      'Developed a multi-tenant publishing platform that enables tech founders, software leaders, and executives to draft, refine, and schedule high-authority industry content without spending hours on manual drafting.',
    problem:
      'Founders and tech executives need to build authority and distribution on LinkedIn and Twitter/X. However, generic AI writing tools output generic corporate fluff that hurts brand credibility, while manual posting creates operational drag.',
    solution:
      'Built a full-stack SaaS featuring Claude and OpenAI integration fine-tuned for founder communication. Features brand voice tone presets, single-click LinkedIn API publishing via OAuth 2.0, automated scheduling queues, and team workspace isolation.',
    architectureFraming: {
      multiTenancy:
        'Multi-tenant workspace isolation with scoped team member permissions and isolated draft repositories.',
      securityAndIsolation:
        'OAuth 2.0 tokens encrypted at rest with AES-256 and stored with automated session expiration to prevent credential hijacking.',
      integrations:
        'Direct LinkedIn Marketing API integration, n8n workflow automations, and Vercel/Railway zero-downtime deployment.',
    },
    stack: [
      'Next.js 16',
      'TypeScript',
      'Node.js & Express',
      'Claude API & OpenAI',
      'LinkedIn OAuth 2.0',
      'MongoDB Atlas',
      'Tailwind CSS',
    ],
    process: [
      {
        step: '01',
        title: 'Executive Voice & Persona Modeling',
        description:
          'Structured custom prompt templates calibrated for tech leaders, engineers, and startup founders with strict tone boundaries.',
      },
      {
        step: '02',
        title: 'Secure LinkedIn OAuth & Direct Publishing',
        description:
          'Engineered a secure direct-publishing pipeline complying with LinkedIn platform security standards, eliminating manual copy-pasting.',
      },
      {
        step: '03',
        title: 'Editorial Dashboard & Review Controls',
        description:
          'Created a streamlined editing interface with live character count, preview cards, tone adjustment sliders, and scheduled posting queues.',
      },
      {
        step: '04',
        title: 'SaaS Monetization & Scale Infrastructure',
        description:
          'Integrated subscription webhooks with idempotency keys and deployed on Railway and Vercel with automated monitoring.',
      },
    ],
    results: [
      {
        label: 'Content Creation Time Saved',
        value: '80% reduction',
        detail: 'Draft generation to scheduled post time reduced from 2 hours to 15 minutes.',
      },
      {
        label: 'Posts Generated',
        value: '10,000+',
        detail: 'High-authority posts created and published across professional networks.',
      },
      {
        label: 'Active Creators',
        value: '2,500+ users',
        detail: 'Active founders, executives, and professionals using the platform.',
      },
      {
        label: 'Delivery Speed',
        value: '3 Weeks',
        detail: 'Delivered from initial concept to live SaaS production deployment.',
      },
    ],
    timeline: '3 to 4 weeks to production SaaS deployment',
    publishedAt: '2026-03-01',
    author: {
      name: 'Muhammad Zubair',
      role: 'Lead Full-Stack AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://devpostfe.vercel.app',
    screenshots: [
      { label: 'LinkedIn Content Studio', src: '/devposthome.png' },
    ],
  },
  {
    id: 'aiproposalmaker',
    slug: 'ai-proposal-generator',
    title: 'AI Proposal Maker: Autonomous B2B RFP & Upwork Proposal Agent',
    clientIndustry: 'B2B Sales & Digital Services Marketplaces',
    clientType: 'Autonomous Proposal & RFP Generator',
    header: 'Generating tailored, high-converting client proposals and RFP responses in under 30 seconds.',
    overview:
      'Created an autonomous proposal generation engine designed for technology vendors, freelancers, and consulting firms pitching competitive RFP briefs and marketplace clients.',
    problem:
      'Writing custom proposals for client projects takes hours. Using boilerplate copy results in low response rates, while manually analyzing project briefs and matching past case studies creates huge turnaround bottlenecks.',
    solution:
      'Engineered a high-speed proposal engine utilizing OpenAI and Claude LLMs to analyze client job requirements, evaluate portfolio skills, and generate bespoke, professional proposals within 30 seconds. Includes built-in compliance checklists and rate-limiting safeguards.',
    architectureFraming: {
      multiTenancy:
        'Stateless API architecture with encrypted database sessions, ensuring client project briefs are never leaked across accounts.',
      securityAndIsolation:
        'Input sanitization preventing prompt injection attacks designed to extract underlying system instructions or credentials.',
      integrations:
        'Stripe billing integration, Upwork workflow compatibility, and custom export options (PDF, Markdown, DOCX).',
    },
    stack: [
      'Next.js 16',
      'TypeScript',
      'OpenAI API & Claude',
      'Stripe Payments',
      'Redis Rate Limiting',
      'Tailwind CSS',
    ],
    process: [
      {
        step: '01',
        title: 'B2B Procurement & Proposal Pattern Analysis',
        description:
          'Researched high-converting marketplace proposals and RFP requirements to define scoring and generation heuristics.',
      },
      {
        step: '02',
        title: 'Dynamic Skill Matching & Prompt Pipeline',
        description:
          'Constructed a dynamic prompting system that pairs project briefs with vendor credentials, generating structured Executive Summaries, Scopes of Work, and Milestones.',
      },
      {
        step: '03',
        title: 'Redis Rate Limiting & Stripe Checkout',
        description:
          'Configured distributed rate limiting using Redis to prevent API abuse and integrated Stripe for tiered subscriptions.',
      },
      {
        step: '04',
        title: 'Export Pipeline & Cloud Deployment',
        description:
          'Implemented instant Markdown, DOCX, and PDF export functionality and deployed on Vercel with sub-second response times.',
      },
    ],
    results: [
      {
        label: 'Proposals Generated',
        value: '10,000+',
        detail: 'Commercial proposals generated across technology and service verticals.',
      },
      {
        label: 'Turnaround Speed',
        value: '30 seconds',
        detail: 'Average time required to generate a complete enterprise proposal brief.',
      },
      {
        label: 'Response Conversion Rate',
        value: '85% engagement',
        detail: 'Reported response improvement compared to generic uncalibrated proposals.',
      },
      {
        label: 'Production Delivery',
        value: '3 Weeks',
        detail: 'Engineered and launched to public commercial availability in 21 days.',
      },
    ],
    timeline: '3 weeks from inception to live commercial platform',
    publishedAt: '2026-03-20',
    author: {
      name: 'Muhammad Zubair',
      role: 'Lead Full-Stack AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://aiproposalmaker.vercel.app',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(
    (cs) =>
      cs.slug === slug ||
      cs.id === slug ||
      // Legacy slugs
      (slug === 'clinical-document-ai' && cs.id === 'everlearnai') ||
      (slug === 'healthtech-content-engine' && cs.id === 'devpostai') ||
      (slug === 'healthtech-rfp-proposal-ai' && cs.id === 'aiproposalmaker')
  );
}
