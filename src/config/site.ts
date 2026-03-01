/**
 * SITE CONFIGURATION
 * Edit this file to update brand, pricing, and copy across the entire site
 */

export const siteConfig = {
  // BRAND IDENTITY
  name: "RecallPrep",
  tagline: "Train recall. Raise your SAT score.",
  description: "Adaptive SAT prep powered by spaced repetition and retrieval practice. Master Math and Reading/Writing with personalized, science-backed study sessions.",

  // CALL TO ACTION TEXT
  cta: {
    primary: "Start Free",
    secondary: "See How It Works",
  },

  // PRICING (Single Plan)
  pricing: {
    planName: "RecallPrep Monthly",
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
    copyright: `© ${new Date().getFullYear()} RecallPrep. All rights reserved.`,
    email: "hello@recallprep.com",
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
    signup: "/pricing", // Unified conversion route - directs to pricing page with trial info
    demo: "/how-it-works",
  },

  // FEATURED STATS (for trust/social proof)
  stats: {
    studentsHelped: "10,000+",
    questionsAdaptive: "50,000+",
    averageImprovement: "120+ points",
  },

  // COMPETITOR COMPARISON COPY
  // NOTE: Keep claims general and verifiable. Specific competitor pricing requires citation.
  competitorComparison: {
    headline: "Why choose RecallPrep",
    description: "Many traditional SAT prep programs are higher-cost and commitment-heavy. RecallPrep is designed to be affordable and flexible.",
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
    description: "Private SAT tutors commonly start around $50/hour and can be significantly higher depending on market and experience. RecallPrep offers daily adaptive practice at a predictable monthly cost.",
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
