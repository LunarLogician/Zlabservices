# ZLab Services - AI Product Studio Landing Page

A premium, high-performance landing page for ZLab Services, an AI product studio founded by Muhammad Zubair in Islamabad, Pakistan.

## 🎨 Design Features

### Aesthetics
- **Glassmorphism Design**: Frosted glass cards with semi-transparent backgrounds and backdrop blur
- **Aurora Gradient Mesh**: Softly animated gradient blobs in the background (purple, teal, pink)
- **Premium Typography**: Using Clash Display for headlines and Inter/Outfit for body text
- **Dark Theme**: Deep navy background (#06060f) with white typography
- **Smooth Animations**: Powered by Framer Motion for scroll-triggered and hover effects

### Key Components

1. **Navbar**
   - Fixed frosted glass navbar with smooth backdrop blur
   - Logo with glowing accent dot
   - Navigation links: Services, Products, About, Contact
   - CTA button "Hire Us"
   - Mobile-responsive hamburger menu

2. **Hero Section**
   - Full viewport height with aurora gradient background
   - Animated badge pill "AI Product Studio · Islamabad, PK"
   - Large headline: "We engineer AI products that ship."
   - Two CTA buttons: Primary gradient and ghost style
   - Floating stat cards: 4+ Products, 10K+ Installs, 5+ Years, 3 Services
   - Scroll indicator animation

3. **Services Section**
   - Three glass cards showcasing core services:
     - AI SaaS Development
     - Mobile Applications (Flutter)
     - Dev Tools & Extensions
   - Each card includes icon, description, and tech stack pills
   - Smooth hover animations and lift effects

4. **Products Section**
   - 5-card responsive grid showing shipped products:
     - EverlearnAI (Flutter AI study platform)
     - DevPost AI (LinkedIn AI post generator)
     - VS Code Extension (10K+ installs)
     - LocalBeam (Open-source npm CLI)
     - PromptCraft (Coming Soon)
   - Product badges, descriptions, and tech tags
   - External links to live products

5. **About Section**
   - Split layout: Text on left, founder card on right
   - Studio philosophy and founding story
   - Founder bio card with:
     - Portrait circle with gradient glow
     - Name: Muhammad Zubair
     - Role: Founder & Lead Engineer
     - 4 stat chips (CEH Certified, Products, Installs, University)

6. **Contact Section**
   - Large CTA: "Let's build something"
   - Email display and mailto button
   - Social links: GitHub, LinkedIn, Twitter
   - Responsive layout

7. **Footer**
   - Aurora gradient divider line
   - Logo and copyright
   - Navigation links
   - Minimal, premium design

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (default), with support for Clash Display and Syne

## 📁 Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, animations, utilities
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Main landing page
│   │   └── favicon.ico
│   ├── components/
│   │   ├── AuroraBackground.tsx  # Animated aurora mesh
│   │   ├── Navbar.tsx            # Fixed navigation
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Services.tsx          # Services showcase
│   │   ├── Products.tsx          # Products grid
│   │   ├── About.tsx             # About & founder section
│   │   ├── Contact.tsx           # Contact CTA
│   │   └── Footer.tsx            # Footer
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
├── package.json
└── next.config.ts
```

## 🎯 Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Glassmorphism design system
✅ Aurora gradient animations
✅ Scroll-triggered fade-up animations
✅ Smooth hover interactions
✅ Framer Motion integration
✅ Pill-shaped badges
✅ Tech stack highlighting
✅ Product showcase with live links
✅ Founder biographical card
✅ Fixed navbar with mobile menu
✅ Contact section with email & socials
✅ Dark mode optimized (no light mode)
✅ Fast page loads with Next.js optimization
✅ SEO-friendly metadata

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20.18.1 or later
- npm 9.2.0 or later

### Installation

1. **Navigate to project directory**
   ```bash
   cd /home/zubair/Downloads/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Colors
Update color variables in `src/app/globals.css`:
- `--background`: Background color (#06060f)
- `--primary`: Primary accent (purple #7c3aed)
- `--secondary`: Secondary accent (teal #0d9488)
- `--accent`: Accent color (pink #ec4899)

### Typography
Configure fonts in `tailwind.config.ts`:
- Display: Clash Display / Syne
- Body: Inter / Outfit

### Animations
Modify keyframes in `src/app/globals.css`:
- `aurora`: Aurora blob animation
- `float`: Floating elements
- `fade-up`: Scroll animation
- `glow`: Text glow effect

### Content
Edit component files in `src/components/` to update:
- Service descriptions and tech stacks
- Product information and links
- Founder bio and stats
- Social media links
- Email address

## 📱 Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on push

### Deploy to other platforms

The project can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Azure App Service
- Railway
- Heroku
- Self-hosted servers

## 📝 Development Notes

- All components use client-side rendering (`'use client'`) for animations
- Framer Motion variants enable smooth, coordinated animations
- Tailwind CSS provides rapid styling with custom extensions
- Aurora background uses fixed positioning (z-index: -1) to stay behind content
- Glassmorphism effect achieved with `backdrop-filter: blur()` and semi-transparent backgrounds

## 🔗 Links

- **Live Products**:
  - EverlearnAI: https://everlearnai.live
  - DevPost AI: https://devpostfe.vercel.app
  - VS Code Marketplace: https://marketplace.visualstudio.com
  - NPM: https://www.npmjs.com

- **Social**:
  - GitHub: https://github.com
  - LinkedIn: https://linkedin.com
  - Twitter/X: https://twitter.com

## 📧 Contact

Email: zubair@zlabservices.com

## 📄 License

All rights reserved © 2025 ZLab Services
