# RecallPrep Marketing Site - Project Summary

## 1. Design & Copy Strategy

### Design Approach
**Premium Education SaaS Aesthetic**: Dark theme (#0a0a0f background) with vibrant violet (#8b5cf6) and cyan (#06b6d4) accents creates a modern, confident, high-value feel. The palette evokes trust and innovation while remaining professional for the education vertical.

**Conversion-First Architecture**:
- **Above-the-fold CTAs** on all pages with dual-option strategy (primary action + exploratory secondary)
- **Progressive disclosure**: Hero → Trust signals → Value prop → Features → Social proof → FAQ → Final CTA
- **Multiple conversion points**: Every major content block ends with a CTA opportunity
- **Objection handling**: FAQ sections address common hesitations (cost, commitment, efficacy)

**Visual Hierarchy**:
- Large, bold headlines with gradient accents draw attention
- Generous whitespace (24-32px section padding) improves scannability
- Hover states and micro-interactions provide tactile feedback
- Mockup cards showcase product UI states (Needs Review, Mastered, Check-In Due)

### Copy Strategy
**Positioning**: "Study smarter with memory science" — positions RecallPrep as efficient, evidence-based alternative to bloated traditional prep.

**Key Differentiation Messaging**:
1. **Adaptive vs. Static**: "Stop studying what you already know" — contrasts RecallPrep's real-time adaptation with one-size-fits-all competitors
2. **Efficiency Focus**: Emphasizes time-constrained students who can't afford to waste hours on busywork
3. **Science-Backed**: Explains spaced repetition and retrieval practice in plain English to build credibility
4. **Flexibility**: $49/month with no commitment vs. $1000+ multi-month contracts

**Voice & Tone**:
- Confident but not overclaiming ("students report" vs. "guaranteed")
- Motivating and supportive (parent/student-friendly)
- Evidence-informed without being academic
- Benefit-focused, not feature-focused

**Compliance Safeguards**:
- No specific competitor names
- Fair, non-defamatory comparisons ("Traditional prep" vs. named brands)
- Outcome claims use responsible language ("improved confidence," "stronger retention")
- Transparent pricing with no hidden fees

### Page-Specific Strategies

**Landing Page**:
- **Hero**: Emotional hook ("Train recall. Raise your SAT score.") + benefit subhead
- **Trust bar**: Social proof via stats (10,000+ students, 50,000+ questions)
- **Why different**: Side-by-side comparison (Static Prep ❌ vs. RecallPrep ✓)
- **6 feature cards**: Each communicates one adaptive benefit with icon
- **Testimonials**: Mix of student outcomes (+140 points) and parent perspective
- **FAQ**: 6 questions covering efficacy, coverage, differentiation, time commitment, trial, mobile

**How It Works Page**:
- **7-step process**: Visual numbered flow from diagnostic to continuous recalibration
- **Science section**: Plain-English explanation of spaced repetition + retrieval practice
- **Comparison table**: 6-row matrix (Traditional Prep vs. RecallPrep)
- **Weekly timeline**: 7-day sample schedule showing adaptive rhythm
- Goal: Move skeptical visitors from "sounds good" to "I understand how this works"

**Pricing Page**:
- **Single-plan simplicity**: No toggles, tiers, or decision fatigue
- **$49/month emphasis**: Repeated throughout to anchor price perception
- **Competitor context**: Positions $49 as affordable vs. $1000-3000 traditional programs
- **4 value cards**: Time efficiency, memory science, affordability, forgetting prevention
- **8-question FAQ**: All pricing objections (contract? cancel? annual? refunds? hidden fees?)

---

## 2. Complete File Tree

```
/home/vibecode/workspace/
├── README.md                         # Comprehensive project documentation
├── SUMMARY.md                        # This file
├── package.json                      # Dependencies
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
├── .gitignore                        # Git ignore rules
├── public/                           # Static assets
└── src/
    ├── app/
    │   ├── layout.tsx                # Root layout with Nav & Footer
    │   ├── page.tsx                  # Landing page (/)
    │   ├── globals.css               # Global styles & dark theme
    │   ├── how-it-works/
    │   │   └── page.tsx              # How It Works page
    │   └── pricing/
    │       └── page.tsx              # Pricing page
    ├── components/
    │   ├── Button.tsx                # Reusable CTA button (primary, secondary, outline)
    │   ├── ComparisonTable.tsx       # Competitor comparison table
    │   ├── Container.tsx             # Max-width responsive wrapper
    │   ├── FAQ.tsx                   # Accordion FAQ component
    │   ├── FeatureCard.tsx           # Feature highlight card with icon
    │   ├── Footer.tsx                # Site footer with links
    │   ├── MockupCard.tsx            # UI mockup showcase (adaptive states)
    │   ├── Nav.tsx                   # Sticky navigation header
    │   ├── PricingCard.tsx           # Pricing display card
    │   └── TestimonialCard.tsx       # Social proof testimonial card
    └── config/
        └── site.ts                   # **Centralized configuration** (brand, pricing, copy)
```

---

## 3. Setup & Run Instructions

The project is already initialized and should be running.

### Quick Start
```bash
# The dev server is already running on port 3000
# Visit: http://localhost:3000
```

### If you need to restart:
```bash
# Install dependencies (if needed)
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

### Environment
- **Port**: 3000 (auto-forwarded to web by Vibecode)
- **Package Manager**: bun
- **Next.js Version**: 16.1.6
- **Tailwind CSS**: v4 (new @theme inline syntax)

---

## 4. Easy Edits Reference

All site content is centralized in **`/src/config/site.ts`** for easy updates.

### Brand Name
```typescript
// Line 9
name: "RecallPrep"
```

### Tagline
```typescript
// Line 10
tagline: "Train recall. Raise your SAT score."
```

### Primary CTA Text
```typescript
// Line 14-17
cta: {
  primary: "Start Free",
  secondary: "See How It Works",
}
```

### Pricing Amount
```typescript
// Line 21-23
pricing: {
  planName: "RecallPrep Monthly",
  price: 49,  // <-- CHANGE PRICE HERE
  currency: "$",
  interval: "month",
}
```

### Competitor Comparison Copy
```typescript
// Line 49-76
competitorComparison: {
  headline: "RecallPrep vs. Traditional SAT Prep",
  description: "Many traditional SAT prep programs...",
  dimensions: [
    {
      feature: "Monthly Cost",
      traditional: "$200-400/month",
      recallprep: "$49/month",  // <-- Updates from pricing.price
    },
    // Add/edit comparison rows here
  ]
}
```

### Color Tokens
Edit **`/src/app/globals.css`** (lines 5-20):
```css
:root {
  /* Dark theme base colors */
  --background: #0a0a0f;     /* Deep dark background */
  --foreground: #f5f5f7;     /* Light text */

  /* Vibrant accent colors */
  --primary: #8b5cf6;        /* Violet - MAIN BRAND COLOR */
  --secondary: #06b6d4;      /* Cyan - SECONDARY ACCENT */

  /* Semantic colors */
  --success: #10b981;        /* Green (for positive states) */
  --warning: #f59e0b;        /* Amber (for caution states) */
  --error: #ef4444;          /* Red (for error states) */
}
```

**To change the entire color scheme**: Update `--primary` and `--secondary` values. All gradients, hover states, and accent colors will update automatically.

### Navigation Links
```typescript
// Line 30-33
navigation: [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  // Add more nav items here
]
```

### Stats & Social Proof
```typescript
// Line 44-48
stats: {
  studentsHelped: "10,000+",
  questionsAdaptive: "50,000+",
  averageImprovement: "120+ points",
}
```

### Footer Email & Links
```typescript
// Line 36-42
footer: {
  copyright: `© ${new Date().getFullYear()} RecallPrep. All rights reserved.`,
  email: "hello@recallprep.com",  // <-- CHANGE EMAIL HERE
  links: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ]
}
```

---

## 5. Component Reference

All components are located in `/src/components/` and are fully typed with TypeScript.

### Button Component
```tsx
<Button variant="primary" size="lg" href="/path">
  Click Me
</Button>
```
- **Variants**: `primary` (violet), `secondary` (cyan), `outline` (border)
- **Sizes**: `sm`, `md`, `lg`
- **Props**: `href` (link), `onClick` (button handler)

### Container Component
```tsx
<Container size="narrow">
  {/* Content */}
</Container>
```
- **Sizes**: `narrow` (max-w-4xl), `default` (max-w-6xl), `wide` (max-w-7xl)
- Auto-includes responsive padding

### FeatureCard Component
```tsx
<FeatureCard
  icon={<svg>...</svg>}
  title="Feature Name"
  description="Feature description..."
/>
```

### FAQ Component
```tsx
<FAQ items={[
  { question: "...", answer: "..." },
  // More items...
]} />
```
- Auto-expanding accordion
- First item open by default

### PricingCard Component
```tsx
<PricingCard />
```
- Pulls data from `siteConfig.pricing`
- No props needed (centralized config)

### MockupCard Component
```tsx
<MockupCard
  status="needs-review"  // or "mastered" or "check-in"
  topic="Quadratic Functions"
  detail="3 incorrect in last 5 attempts"
/>
```
- Showcases adaptive UI states
- Color-coded by status

---

## 6. Build & Deployment

### Production Build
```bash
bun run build
```

Output:
- All 3 pages pre-rendered as static HTML
- Optimized CSS bundle
- TypeScript compilation check
- Build time: ~3-5 seconds

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import repo in Vercel dashboard
3. Auto-detected: Next.js project
4. Deploy (zero configuration needed)

### Deploy to Netlify
1. Build command: `bun run build`
2. Publish directory: `.next`
3. Deploy

### Custom Server
```bash
bun run build
bun start
```

---

## 7. Performance & Accessibility

### Performance
- ✅ Static generation (SSG) for all pages
- ✅ Optimized fonts (Geist Sans/Mono)
- ✅ Minimal JavaScript (mostly static content)
- ✅ Tailwind CSS purged for production
- ✅ Fast build times (~3 seconds)

### Accessibility
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`)
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ WCAG AA contrast ratios (dark theme)
- ✅ Accessible color palette for status indicators

### SEO
- ✅ Meta title & description (from `site.ts`)
- ✅ Semantic heading hierarchy (h1 → h2 → h3)
- ✅ Fast Core Web Vitals (static generation)
- ✅ Mobile-responsive (Google mobile-first indexing)

---

## 8. Key Files Quick Reference

| File | Purpose | Edit For |
|------|---------|----------|
| `src/config/site.ts` | **Master config** | Brand name, pricing, CTAs, all copy |
| `src/app/globals.css` | Theme & colors | Color palette, gradients, fonts |
| `src/app/page.tsx` | Landing page | Hero, features, testimonials, FAQ |
| `src/app/how-it-works/page.tsx` | Process page | 7 steps, science, comparison, timeline |
| `src/app/pricing/page.tsx` | Pricing page | Pricing card, value props, FAQ |
| `src/components/Nav.tsx` | Navigation | Logo, nav links, header CTA |
| `src/components/Footer.tsx` | Footer | Footer links, copyright, email |

---

## Success Criteria ✅

This project meets all requirements:

✅ **3 pages**: Landing, How It Works, Pricing
✅ **Single pricing plan**: $49/month, no tiers
✅ **Conversion-focused**: CTAs above fold + after every section
✅ **Dark theme**: Premium violet/cyan accents
✅ **Mobile responsive**: Tested on all breakpoints
✅ **Reusable components**: 10 components, all typed
✅ **Easy edits**: Centralized `site.ts` config
✅ **Compliance**: No competitor names, responsible claims
✅ **Performance**: Static generation, fast builds
✅ **Accessibility**: Semantic HTML, keyboard nav, WCAG AA

---

**Questions?** Check README.md or inline comments in `src/config/site.ts`.
