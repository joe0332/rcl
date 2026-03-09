/**
 * SITE CONFIGURATION
 * Edit this file to update brand, pricing, and copy across the entire site
 */

export const siteConfig = {
  // BRAND IDENTITY
  name: "Recall Labs",
  tagline: "Train recall. Raise your SAT score.",
  description: "Adaptive SAT prep powered by spaced repetition and retrieval practice. Master Math and Reading/Writing with personalized, science-backed study sessions.",

  // CALL TO ACTION TEXT
  cta: {
    primary: "Start Free",
    secondary: "See How It Works",
  },

  // PRICING (Single Plan)
  pricing: {
    planName: "Recall Labs Monthly",
    price: 49,
    currency: "$",
    interval: "month",
    billingNote: "Monthly billing • Cancel anytime",
    commitmentNote: "No long-term commitment required",
  },

  // NAVIGATION
  navigation: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ],

  // SOCIAL/CONTACT
  footer: {
    copyright: `© ${new Date().getFullYear()} Recall Labs. All rights reserved.`,
    email: "support@recalllabs.io",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ],
  },

  // LEGAL DISCLAIMERS
  disclaimers: {
    trademark: "SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this product.",
    results: "Individual results may vary. Score improvements depend on many factors including baseline knowledge, study consistency, and test-taking skills. Testimonials represent individual experiences and are not guarantees of future results.",
  },

  // CTA ROUTES
  routes: {
    signup: "https://buy.stripe.com/cNi8wP0RD7Pt05Gepe6AM02", // Stripe payment link
    demo: "/how-it-works",
  },

  // FEATURED STATS (for trust/social proof)
  stats: {
    studentsHelped: "10,000+",
    questionsAdaptive: "50,000+",
    averageImprovement: "120+ points",
  },

  // HERO TRUST ELEMENT (configurable - use one primary trust signal above the fold)
  // Mode: "quote" displays a student/parent quote | "metric" displays a verified stat
  heroTrustMode: "quote" as "quote" | "metric",
  heroTrustText: {
    quote: '"Recall Labs helped me stop wasting time on topics I already knew." — Sarah M., High School Junior',
    metric: "Trusted by 10,000+ students preparing for the SAT",
  },

  // ADAPTIVE PROOF CARD (before/after weekly study shift)
  adaptiveProofCard: {
    title: "Adaptive plan in action",
    subtitle: "How adaptation shifts study focus in one week",
    beforeLabel: "Before adaptation",
    afterLabel: "After adaptation",
    examples: [
      {
        topic: "Geometry",
        before: "2 questions/week",
        after: "8 questions/week",
        note: "weak area increased",
      },
      {
        topic: "Linear equations",
        before: "10 questions/week",
        after: "3 questions/week",
        note: "mastered topic reduced",
      },
      {
        topic: "Reading evidence",
        before: "1 review/week",
        after: "2 smart check-ins/week",
        note: "retention protection",
      },
    ],
    takeaway: "Study time shifted toward weak areas while mastered topics moved to maintenance check-ins.",
  },

  // COMPETITOR COMPARISON COPY
  // NOTE: Keep claims general and verifiable. Specific competitor pricing requires citation.
  competitorComparison: {
    headline: "Why choose Recall Labs",
    description: "Many traditional SAT prep programs are higher-cost and commitment-heavy. Recall Labs is designed to be affordable and flexible.",
    dimensions: [
      {
        feature: "Pricing Model",
        traditional: "Often higher monthly costs", // Compliance: Removed specific unverified price ranges
        recallprep: "$49/month",
      },
      {
        feature: "Commitment",
        traditional: "Multi-month contracts common", // Compliance: Softened from specific "3-6 months"
        recallprep: "Cancel anytime, no contract",
      },
      {
        feature: "Personalization",
        traditional: "Typically one-time diagnostic",
        recallprep: "Adapts after every question",
      },
      {
        feature: "Study Approach",
        traditional: "Fixed lesson sequences",
        recallprep: "Targets your weak areas",
      },
    ],
  },

  // TUTOR COMPARISON (for pricing page)
  // NOTE: Frame as market observation, not specific claim
  tutorComparison: {
    description: "Private SAT tutors commonly start around $50/hour and can be significantly higher depending on market and experience. Recall Labs offers daily adaptive practice at a predictable monthly cost.",
    recallprepValue: "Unlimited daily sessions at $49/month",
    tutorCost: "Starts ~$50/hour",
  },

  // COLORS (Tailwind classes - easy to swap)
  colors: {
    primary: "violet", // Main accent color
    secondary: "cyan", // Secondary accent
  },
};

export type SiteConfig = typeof siteConfig;
