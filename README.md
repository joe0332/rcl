# RecallPrep Marketing Site

A high-converting, 3-page marketing website for RecallPrep, an adaptive SAT prep web app powered by spaced repetition and retrieval practice.

## 🎯 Project Overview

This is a conversion-focused marketing site built with Next.js and Tailwind CSS, featuring:

- **Landing Page (/)**: Hero, features, testimonials, FAQ, and CTAs
- **How It Works (/how-it-works)**: 7-step process, science explanation, comparison table, weekly timeline
- **Pricing (/pricing)**: Single $49/month plan, competitor comparison, value props, pricing FAQ

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **Font**: Geist Sans & Geist Mono

## 📦 Installation & Setup

The project is already initialized. The dev server should already be running on port 3000.

If you need to restart:

```bash
# Install dependencies (if needed)
bun install

# Run development server
bun dev
```

The site will be available at `http://localhost:3000`

## 📁 File Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── how-it-works/
│   │   └── page.tsx          # How It Works page
│   ├── pricing/
│   │   └── page.tsx          # Pricing page
│   ├── layout.tsx            # Root layout with Nav & Footer
│   └── globals.css           # Global styles & theme
├── components/
│   ├── Button.tsx            # Reusable CTA buttons
│   ├── ComparisonTable.tsx   # Competitor comparison
│   ├── Container.tsx         # Max-width wrapper
│   ├── FAQ.tsx               # Accordion FAQ
│   ├── FeatureCard.tsx       # Feature highlight cards
│   ├── Footer.tsx            # Site footer
│   ├── MockupCard.tsx        # UI mockup showcases
│   ├── Nav.tsx               # Sticky navigation
│   ├── PricingCard.tsx       # Pricing display
│   └── TestimonialCard.tsx   # Social proof cards
└── config/
    └── site.ts               # **EDIT THIS FILE** for easy updates
```

## ✏️ Easy Edits Guide

All brand, pricing, and copy is centralized in `/src/config/site.ts`. Edit this file to update:

### 1. Brand Identity
```typescript
name: "RecallPrep"           // Product name
tagline: "Train recall..."   // Tagline
description: "..."           // Meta description
```

### 2. Call to Action Text
```typescript
cta: {
  primary: "Start Free"
  secondary: "See How It Works"
}
```

### 3. Pricing
```typescript
pricing: {
  planName: "RecallPrep Monthly"
  price: 49                   // Change price here
  currency: "$"
  interval: "month"
  billingNote: "..."
  commitmentNote: "..."
}
```

### 4. Competitor Comparison Copy
```typescript
competitorComparison: {
  headline: "..."
  description: "..."
  dimensions: [               // Edit comparison rows
    { feature: "...", traditional: "...", recallprep: "..." }
  ]
}
```

### 5. Color Scheme

**Primary Method** (Recommended): Edit CSS variables in `/src/app/globals.css`:

```css
:root {
  --primary: #8b5cf6;        /* Main accent color */
  --secondary: #06b6d4;      /* Secondary accent */
}
```

**Alternative**: Use Tailwind utility classes throughout components.

Current color palette:
- **Background**: Deep dark (#0a0a0f)
- **Primary**: Violet (#8b5cf6)
- **Secondary**: Cyan (#06b6d4)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### 6. Stats & Social Proof

```typescript
stats: {
  studentsHelped: "10,000+"
  questionsAdaptive: "50,000+"
  averageImprovement: "120+ points"
}
```

### 7. Navigation Links

```typescript
navigation: [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" }
]
```

### 8. Footer Content

```typescript
footer: {
  copyright: "© 2026 RecallPrep..."
  email: "hello@recallprep.com"
  links: [...]
}
```

## 🎨 Design Strategy

### Conversion-Focused Elements
- **Above-the-fold CTAs** on every page
- **Clear value proposition** in hero sections
- **Social proof** via testimonials and stats
- **Urgency/scarcity** through benefit-focused copy
- **FAQ sections** to address objections
- **Multiple CTA opportunities** throughout pages

### Visual Design
- **Dark theme** with vibrant violet/cyan accents
- **Generous spacing** for readability
- **Gradient backgrounds** for visual interest
- **Hover effects** for interactivity
- **Accessible contrast** (WCAG AA compliant)
- **Responsive** mobile-first design

### UX Principles
- **Sticky navigation** for easy access
- **Semantic HTML** for accessibility
- **Focus states** for keyboard navigation
- **Smooth scrolling** for anchor links
- **Fast performance** with Next.js optimization

## 📱 Responsive Design

All components are mobile-responsive:
- **Mobile**: Single column, stacked layout
- **Tablet (md)**: 2-column grids where appropriate
- **Desktop (lg)**: Full layout with side-by-side content

## 🔒 Compliance Notes

- No specific competitor names mentioned
- Responsible outcome claims (no guarantees)
- "Students report..." language for testimonials
- Fair, non-defamatory comparisons
- Transparent pricing with no hidden fees

## 🧪 Testing Checklist

- [x] All navigation links work
- [x] CTA buttons link correctly
- [x] Responsive on mobile, tablet, desktop
- [x] Accessible keyboard navigation
- [x] Dark theme displays correctly
- [x] FAQ accordions open/close
- [x] Fast page load times
- [x] Build compiles successfully

## 🚢 Deployment

This is a standard Next.js app. Deploy to:

- **Vercel** (recommended): Connect repo, auto-deploy
- **Netlify**: Add build command `bun run build`
- **Custom server**: Run `bun run build && bun start`

## 📈 Future Enhancements

Potential additions (not currently implemented):

- [ ] Contact form
- [ ] Blog/content section
- [ ] Student dashboard preview
- [ ] Video testimonials
- [ ] Interactive demo
- [ ] A/B testing framework
- [ ] Analytics integration
- [ ] Email capture modal

## 📞 Support

For questions about this codebase, refer to inline comments in:
- `/src/config/site.ts` - Brand & copy configuration
- `/src/app/globals.css` - Theme & colors
- `/src/components/*` - Reusable component docs

---

Built with Next.js, Tailwind CSS, and TypeScript.
