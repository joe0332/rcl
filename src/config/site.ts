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

  // FEATURED STATS (for trust/social proof)
  stats: {
    studentsHelped: "10,000+",
    questionsAdaptive: "50,000+",
    averageImprovement: "120+ points",
  },

  // COMPETITOR COMPARISON COPY
  competitorComparison: {
    headline: "RecallPrep vs. Traditional SAT Prep",
    description: "Many traditional SAT prep programs require long-term commitments and high upfront costs. RecallPrep is affordable, flexible, and built on memory science.",
    dimensions: [
      {
        feature: "Monthly Cost",
        traditional: "$200-400/month",
        recallprep: "$49/month",
      },
      {
        feature: "Contract Required",
        traditional: "Often 3-6 months",
        recallprep: "None (cancel anytime)",
      },
      {
        feature: "Adaptive Personalization",
        traditional: "Initial diagnostic only",
        recallprep: "Continuous real-time adaptation",
      },
      {
        feature: "Study Efficiency",
        traditional: "Fixed lesson sequences",
        recallprep: "Focus on your weak areas",
      },
    ],
  },

  // COLORS (Tailwind classes - easy to swap)
  colors: {
    primary: "violet", // Main accent color
    secondary: "cyan", // Secondary accent
  },
};

export type SiteConfig = typeof siteConfig;
