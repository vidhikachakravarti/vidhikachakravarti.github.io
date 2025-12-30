# Journey Tracker Website

Elite B2B healthcare SaaS website for Journey Tracker - an execution platform for clinical and care operations teams managing large patient volumes.

## 🚀 Live Preview

The development server is running at: **http://localhost:3000**

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Home page
│   ├── pricing/page.tsx            # Pricing page
│   ├── api/page.tsx                # API Documentation
│   ├── clients/page.tsx            # Clients page
│   ├── solutions/page.tsx          # Solutions page
│   ├── contact/page.tsx            # Contact/Demo request page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
│
├── components/
│   ├── ui/                         # Core UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionHeader.tsx
│   │
│   ├── shared/                     # Shared components
│   │   ├── Header.tsx              # Main navigation
│   │   ├── Footer.tsx              # Footer
│   │   ├── Logo.tsx                # Lillia logo
│   │   └── CTASection.tsx          # Call-to-action sections
│   │
│   ├── home/                       # Home page components
│   │   ├── Hero.tsx
│   │   ├── ComparisonFlow.tsx
│   │   ├── ComparisonCard.tsx
│   │   ├── TaglineDivider.tsx
│   │   ├── RoleValueProps.tsx
│   │   ├── ImpactMetrics.tsx
│   │   ├── ProductFlow.tsx         # Scroll-driven 8-step flow
│   │   └── ScaleStatement.tsx
│   │
│   └── pricing/
│       └── PricingCard.tsx
│
├── lib/
│   └── utils.ts                    # Utility functions
│
└── tailwind.config.ts              # Design system tokens
```

## 🎨 Design System

### Colors
- **Primary**: Vibrant purple (#7848FE) with lavender/peach tints
- **Accent**: Purple range (#9F7BFF to #1405D6) for CTAs and highlights
- **Neutral**: Warm grays and blacks (#F4F4F4 to #000000)
- **Semantic**: Success, warning, error, info (info uses brand purple)

### Typography
- **Font**: Inter (imported from Google Fonts)
- **Headings**: Semibold, tight tracking
- **Body**: Regular weight, generous line-height

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

## 📄 Pages Built

### ✅ Home Page
- Hero section with value proposition
- Problem/Solution comparison flow (4 states)
- Tagline divider
- Role-based value props (3 columns)
- Impact metrics (6 cards)
- **Product Flow** - 8-step scroll-driven feature showcase
- Scale statement
- CTA section

### ✅ Pricing Page
- Pricing hero
- Monthly/Annual billing toggle
- 4 pricing tiers (Starter, Growth, Scale, Enterprise)
- Placeholders for feature table, testimonials, FAQ

### ✅ API Documentation
- Developer-first dark theme
- Sidebar navigation
- Code examples
- Quick start guide

### ✅ Supporting Pages
- **Clients**: Industry showcase
- **Solutions**: Care delivery models
- **Contact**: Demo request form

## 🎭 Key Features

### Animations
- Framer Motion for smooth interactions
- Scroll-triggered fade-ins
- Hover states on cards and buttons
- Sticky visual in Product Flow section

### Design Principles
- Elite B2B SaaS quality (Stripe/Linear/Vercel level)
- AI-first visual language (systems thinking, not chatbot AI)
- Clean typography, strong hierarchy
- Minimal color palette
- Generous whitespace

### Content Integrity
- ✅ 100% of provided content used verbatim
- ✅ No modifications or enhancements to text
- ✅ Layout and visual design only

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

## 🌐 Navigation

- **Home**: /
- **Pricing**: /pricing
- **API Docs**: /api
- **Clients**: /clients
- **Solutions**: /solutions
- **Contact/Demo**: /contact

## 📱 Responsive Design

All pages are built mobile-first and fully responsive:
- Mobile: Single column layouts
- Tablet: 2-column grids
- Desktop: Full multi-column layouts

## ⚡ Performance

- Code splitting via Next.js App Router
- Image placeholders (ready for actual assets)
- Optimized animations with reduced motion support
- Clean component architecture

## 🎯 Conversion Optimization

- "Book a Demo" CTA in header (sticky)
- Multiple CTAs throughout pages
- Clear value propositions
- Trust-building elements
- Low-friction demo form (4 fields)

## 📝 Notes

- Image placeholders show file names (replace with actual screenshots)
- Testimonials/FAQ content marked as TBD
- Feature comparison table structure ready for content
- Client logos placeholder (6 slots)

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**
