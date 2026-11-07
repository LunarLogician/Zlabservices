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
  healthcareFraming: {
    hipaaCompliance: string;
    dataPrivacy: string;
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
    id: 'clinical-document-ai',
    slug: 'clinical-document-ai',
    title: 'EverlearnAI: Clinical Knowledge & Medical Exam Prep System',
    clientIndustry: 'Medical Education & Digital Health',
    clientType: 'Clinical Education Platform',
    header: 'Turning complex medical guidelines and lecture notes into verified clinical quizzes and flashcards.',
    overview:
      'Engineered an AI-driven learning and clinical knowledge platform that transforms dense medical textbooks, clinical guidelines, and lecture notes into high-yield quizzes, multiple-choice questions (MCQs), and spaced-repetition flashcards.',
    problem:
      'Medical students, nursing trainees, and clinical fellows waste countless hours manually creating flashcards and practice questions from complex clinical documentation. Existing AI tools hallucinate medical facts, fail to handle multi-page PDF documents, and expose uploaded study materials without proper data isolation.',
    solution:
      'Architected a full-stack web and mobile application utilizing Anthropic Claude 3.5 Sonnet for high-precision clinical reasoning. Implemented a chunked document ingestion pipeline with Apache PDFBox, vector similarity search, and automated citation linking back to source texts so users can verify every generated answer against clinical sources.',
    healthcareFraming: {
      hipaaCompliance:
        'Engineered with zero-data-retention API configurations, isolating user-uploaded medical documentation and preventing student data from being used in LLM training corpora.',
      dataPrivacy:
        'End-to-end encryption for stored study decks, role-based access control (RBAC), and automated scrubbing of any accidentally submitted protected health information (PHI).',
      integrations:
        'Cross-platform synchronization across web (Next.js) and mobile (Flutter) with Supabase PostgreSQL, Redis caching, and Stripe payment processing.',
    },
    stack: [
      'Next.js 16',
      'Flutter (iOS & Android)',
      'Claude 3.5 Sonnet',
      'Supabase (PostgreSQL)',
      'Redis',
      'Tailwind CSS',
      'Stripe',
    ],
    process: [
      {
        step: '01',
        title: 'Clinical Workflow Discovery & Document Schema',
        description:
          'Analyzed medical curriculum guidelines, USMLE preparation patterns, and PDF structural hierarchies to define parsing rules for medical tables, drug dosages, and clinical vignettes.',
      },
      {
        step: '02',
        title: 'Precision Extraction & Zero-Retention Inference Pipeline',
        description:
          'Constructed a specialized document parsing pipeline that chunks text while preserving medical terminology context. Routed prompts through zero-retention Claude API endpoints with strict medical accuracy temperature settings.',
      },
      {
        step: '03',
        title: 'Cross-Platform Web & Mobile Development',
        description:
          'Built the Next.js web portal and Flutter mobile application companion using Provider architecture, enabling offline study modes and real-time cross-device synchronization.',
      },
      {
        step: '04',
        title: 'Security Hardening & Production Launch',
        description:
          'Conducted security audits, rate-limiting configuration with Redis, automated webhook verification for Stripe, and deployed on hardened cloud infrastructure.',
      },
    ],
    results: [
      {
        label: 'Active Clinical Learners',
        value: '[FILL: real metric, e.g. 3,000+]',
        detail: 'Active students preparing for clinical certifications and medical exams.',
      },
      {
        label: 'Quizzes & Flashcards Generated',
        value: '[FILL: real metric, e.g. 50,000+]',
        detail: 'Automated clinical questions generated with zero human authoring bottleneck.',
      },
      {
        label: 'Study Time Saved',
        value: '[FILL: real metric, e.g. 70% reduction]',
        detail: 'Reduction in manual study material preparation time compared to conventional methods.',
      },
      {
        label: 'Development Timeline',
        value: '4 Weeks',
        detail: 'From initial architecture review to live production web and mobile launch.',
      },
    ],
    timeline: '4 to 5 weeks from architecture to production launch',
    publishedAt: '2026-02-15',
    author: {
      name: 'Muhammad Zubair',
      role: 'Lead AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://everlearnai.live',
    screenshots: [
      { label: 'Quiz Generator Engine', src: '/quiz.png' },
      { label: 'Student Dashboard', src: '/Dashboard.png' },
    ],
  },
  {
    id: 'healthtech-content-engine',
    slug: 'healthtech-content-engine',
    title: 'DevPost AI: Automated Communication Engine for HealthTech Founders',
    clientIndustry: 'Digital Health & HealthTech B2B',
    clientType: 'HealthTech Founders & Medical Communicators',
    header: 'Transforming clinical research, regulatory updates, and company milestones into verified professional thought leadership.',
    overview:
      'Developed a specialized publishing platform that enables HealthTech founders, healthcare executives, and medical innovators to draft, refine, and publish high-authority industry content without spending hours on manual drafting.',
    problem:
      'Digital health founders and healthcare CTOs need to communicate their vision, FDA milestones, and clinical AI advancements to attract investors, hospital partners, and clinical talent. However, generic AI writing tools produce superficial, inaccurate copy that sounds robotic and lacks clinical credibility. Furthermore, copying and pasting across multiple tools creates friction and security vulnerabilities.',
    solution:
      'Built a full-stack SaaS platform featuring Claude AI integration fine-tuned for healthcare communication. Features tone presets (scientific, executive, regulatory), single-click direct LinkedIn API publishing via OAuth 2.0, automated scheduling, and draft revision workflows.',
    healthcareFraming: {
      hipaaCompliance:
        'Architected with strict data boundary enforcement, ensuring proprietary clinical trial data and hospital client discussions are never ingested into public training models.',
      dataPrivacy:
        'OAuth 2.0 tokens are encrypted at rest with AES-256 and stored in isolated MongoDB collections with automated session expiration.',
      integrations:
        'Direct LinkedIn Marketing API integration, n8n workflow automations, Lemon Squeezy payment processing, and Vercel/Railway zero-downtime deployment.',
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
        title: 'Executive Communication Persona Modeling',
        description:
          'Structured prompt templates specifically calibrated for health technology executives, clinical AI researchers, and regulatory updates.',
      },
      {
        step: '02',
        title: 'Secure LinkedIn OAuth & Publishing Flow',
        description:
          'Engineered a secure direct-publishing pipeline complying with LinkedIn platform security standards, eliminating manual clipboard transfer of sensitive drafts.',
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
          'Integrated Lemon Squeezy subscription webhooks with idempotency keys and deployed on Railway and Vercel with automated monitoring.',
      },
    ],
    results: [
      {
        label: 'Content Creation Time Saved',
        value: '[FILL: real metric, e.g. 80% reduction]',
        detail: 'Draft generation to scheduled post time reduced from 2 hours to 10 minutes.',
      },
      {
        label: 'Posts Generated',
        value: '[FILL: real metric, e.g. 10,000+]',
        detail: 'High-authority posts created and published across professional networks.',
      },
      {
        label: 'Creator Community',
        value: '[FILL: real metric, e.g. 2,500+ users]',
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
      role: 'Lead AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://devpostfe.vercel.app',
    screenshots: [
      { label: 'LinkedIn Content Studio', src: '/devposthome.png' },
    ],
  },
  {
    id: 'healthtech-rfp-proposal-ai',
    slug: 'healthtech-rfp-proposal-ai',
    title: 'AI Proposal Maker: Enterprise B2B RFP & Clinical Contract Generator',
    clientIndustry: 'Healthcare Technology & Enterprise B2B Services',
    clientType: 'HealthTech Vendors & Healthcare Consultants',
    header: 'Generating tailored, compliance-aligned enterprise proposals for hospital systems and digital health partners in 30 seconds.',
    overview:
      'Created an AI-assisted proposal generation engine designed for technology vendors and consulting firms pitching hospital networks, digital health startups, and enterprise healthcare clients.',
    problem:
      'Pitching enterprise healthcare accounts and hospital procurement committees requires highly tailored proposals that address clinical risk, security certifications, timeline milestones, and compliance standards. Writing each RFP response manually takes days, while boilerplate templates result in low win rates.',
    solution:
      'Engineered a high-speed proposal engine utilizing OpenAI and Claude LLMs to analyze client project requirements, evaluate vendor capabilities, and generate bespoke, professional proposals within 30 seconds. Includes built-in compliance checklists, milestone schedules, and rate-limiting safeguards.',
    healthcareFraming: {
      hipaaCompliance:
        'Designed to scrub proprietary client names, patient volume estimates, and sensitive institutional identifiers prior to LLM analysis.',
      dataPrivacy:
        'Stateless API architecture with zero client-side caching of sensitive RFP data and encrypted database sessions.',
      integrations:
        'Stripe billing integration, Upwork API workflow compatibility, and custom export options (PDF, Markdown, DOCX).',
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
        title: 'B2B Healthcare Procurement Pattern Analysis',
        description:
          'Researched enterprise procurement criteria, BAA requirement structures, and clinical technology implementation scopes to define proposal generation algorithms.',
      },
      {
        step: '02',
        title: 'Structured Variable Prompt Architecture',
        description:
          'Constructed a dynamic prompting system that pairs project briefs with vendor credentials, producing proposals structured with Executive Summary, Scope of Work, Security Standards, and Milestones.',
      },
      {
        step: '03',
        title: 'Redis Rate Limiting & Stripe Checkout',
        description:
          'Configured distributed rate limiting using Redis to prevent API abuse, integrated Stripe for tiered subscriptions and credit-based usage.',
      },
      {
        step: '04',
        title: 'Export Pipeline & Cloud Deployment',
        description:
          'Implemented instant Markdown and PDF export functionality and deployed on Vercel with sub-second response times.',
      },
    ],
    results: [
      {
        label: 'Proposals Generated',
        value: '[FILL: real metric, e.g. 10,000+]',
        detail: 'Commercial proposals generated across technology and service verticals.',
      },
      {
        label: 'Turnaround Speed',
        value: '[FILL: real metric, e.g. 30 seconds]',
        detail: 'Average time required to generate a complete enterprise proposal brief.',
      },
      {
        label: 'Response Conversion Rate',
        value: '[FILL: real metric, e.g. 85% client engagement]',
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
      role: 'Lead AI Engineer & Certified Ethical Hacker',
    },
    liveUrl: 'https://aiproposalmaker.vercel.app',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug || cs.id === slug);
}
