# RecallPrep Marketing Site - Project Context

## Quick Start (Fresh Session Restore)

```bash
# Extract the archive
tar -xzf recallprep-site.tar.gz
cd workspace

# Install dependencies
npm install

# Start development server
npm run dev
# Server runs on port 3000
```

---

## Project Overview

**Product**: RecallPrep - Adaptive SAT prep web app
**Site Purpose**: 3-page marketing site for conversion
**Tech Stack**: Next.js 16, Tailwind CSS v4, TypeScript
**Theme**: Dark premium (#0a0a0f background, #8b5cf6 violet primary, #06b6d4 cyan secondary)

---

## Key Design Principles (Learned Through Iteration)

1. **Config-Driven Everything**: All content, pricing, CTAs in `src/config/site.ts` - easy to update without touching components
2. **Compliance-First**: No specific competitor prices, general language only, legal disclaimers in footer
3. **Single Pricing Model**: $49/month, monthly billing, cancel anytime, no long-term commitment
4. **CTA Consistency**: All "Start Free" buttons → `/pricing` route
5. **Trust Signal Clarity**: Single primary trust element above the fold (not competing signals)
6. **Inline Styles for Critical UI**: Button component uses explicit hex colors for guaranteed visibility (avoiding CSS custom property issues)

---

## Architecture

### Pages
- **/** (Landing) - Hero, before/after proof card, features, testimonials, FAQ, final CTA
- **/how-it-works** - 5-step adaptive learning loop, detailed process explanation
- **/pricing** - Single plan card, tutor comparison, competitor comparison, FAQ

### Core Components
- **Button.tsx** - Primary/Secondary/Outline variants with explicit inline styles
- **BeforeAfterProofCard.tsx** - Shows adaptive study shift with dynamic directional arrows
- **AdaptiveLearningLoop.tsx** - 5-step circular visual
- **TrustBar.tsx** - Compact trust signals (not used in hero anymore)
- **Nav.tsx**, **Footer.tsx**, **Container.tsx** - Layout primitives
- **FeatureCard.tsx**, **TestimonialCard.tsx**, **MockupCard.tsx**, **PricingCard.tsx**, **FAQ.tsx** - Content blocks

### Configuration
**src/config/site.ts** contains:
- Brand identity (name, tagline, description)
- CTA text (primary, secondary)
- Pricing model (plan name, price, billing note)
- Navigation links
- Footer content and legal disclaimers
- Stats for social proof
- **Hero trust element** with mode switcher:
  - `heroTrustMode: "quote" | "metric"`
  - `heroTrustText: { quote: string, metric: string }`
- **Adaptive proof card** data (examples, labels, takeaway)
- Competitor comparison messaging
- Tutor comparison messaging

---

## Critical Implementation Details

### 1. Button Visibility Fix
**Problem**: Primary CTA buttons were invisible (white-on-white) due to CSS custom property resolution issues.

**Solution**: Explicit inline styles in `src/components/Button.tsx`:
```typescript
const getInlineStyles = (): React.CSSProperties => {
  if (variant === "primary") {
    return {
      backgroundColor: "#8b5cf6", // violet
      color: "#ffffff",
      borderColor: "#8b5cf6",
    };
  }
  // ... other variants
};
```

**Why**: Guarantees 21:1 contrast ratio, WCAG AAA compliant, CSS specificity proof.

### 2. Directional Arrow Logic
**Component**: `src/components/BeforeAfterProofCard.tsx`

**Functions**:
```typescript
// Extract numeric value from "10 questions/week" → 10
const extractNumber = (str: string): number => {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

// Determine arrow direction based on numeric comparison
const getDirection = (before: string, after: string) => {
  const beforeNum = extractNumber(before);
  const afterNum = extractNumber(after);

  if (afterNum > beforeNum) {
    return { arrow: "↑", color: "text-success" }; // Increased
  } else if (afterNum < beforeNum) {
    return { arrow: "↓", color: "text-warning" }; // Decreased
  } else {
    return { arrow: "→", color: "text-muted-foreground" }; // No change
  }
};
```

**Example Results**:
- Geometry: 2 → 8 (increase) = ↑ green
- Linear equations: 10 → 3 (decrease) = ↓ orange
- Reading evidence: 1 → 2 (increase) = ↑ green

### 3. Trust Element Above the Fold
**Location**: `src/app/page.tsx` lines 44-49

**Implementation**:
```typescript
<div className="mt-6 pt-6 border-t border-border/50">
  <p className="text-sm text-muted-foreground italic leading-relaxed">
    {siteConfig.heroTrustText[siteConfig.heroTrustMode]}
  </p>
</div>
```

**Configuration**: Switch mode in `src/config/site.ts`:
```typescript
heroTrustMode: "quote" as "quote" | "metric",  // Change to "metric" for stat display
```

---

## Content Strategy

### Messaging Hierarchy
1. **Above the fold**: Headline → Subhead → CTAs → Single trust element
2. **Proof card**: Concrete before/after weekly study shift
3. **Value proposition**: "Stop studying what you already know" section
4. **Features**: 6 core feature cards
5. **Outcomes**: 3 testimonials (student efficiency, retention, parent perspective)
6. **FAQ**: 6 common questions
7. **Final CTA**: Conversion-focused with pricing link

### Compliance Rules
- ✅ No specific competitor prices (use "Often higher monthly costs")
- ✅ No unsubstantiated claims
- ✅ SAT® trademark disclaimer in footer
- ✅ Results variability disclaimer in footer
- ✅ Tutor comparison framed as "market observation"
- ✅ General language for competitor comparison

---

## Evolution History

### V1 → V2
- Added legal disclaimers
- Refined competitor messaging for compliance
- Created AdaptiveLearningLoop component
- Improved landing hero readability
- Added TrustBar component

### V2 → V3
- Fixed CTA consistency (all → `/pricing`)
- Fixed "How It Works" heading capitalization
- Added tutor comparison
- Verified all CTAs route correctly

### V3 → V4
- **Critical**: Rewrote Button component with inline styles for visibility
- Guaranteed WCAG AAA contrast ratios

### V4 → V5
- Added BeforeAfterProofCard component
- Added hero proof line (single trust element)
- Positioned proof card after hero section

### V5 → V6 (Current)
- Removed TrustBar from hero (competing trust signals)
- Made trust element config-switchable (quote vs metric mode)
- Fixed directional arrow logic in BeforeAfterProofCard
- Linear equations now correctly shows ↓ for 10→3 decrease

---

## Continuation Instructions for New Session

### If Starting Fresh
1. Read this document first
2. Review `src/config/site.ts` to understand content structure
3. Check recent documentation files:
   - `POLISH_FIXES.md` - Most recent changes (trust simplification, arrow fix)
   - `HERO_ENHANCEMENTS.md` - Proof card implementation
   - `CTA_VISIBILITY_FIX.md` - Button visibility solution
   - `V3_REFINEMENT.md` - CTA consistency fixes
   - `V2_CHANGES.md` - Initial refinements

### User Preferences (Learned)
- Prefers incremental refinement over rebuilds
- Values compliance-safe messaging highly
- Wants config-driven content (easy updates without code changes)
- Expects detailed documentation of changes
- Appreciates build verification after changes
- Wants conversion-focused copy without hype

### Common Workflows
**To update pricing**: Edit `src/config/site.ts` → `pricing` object
**To update trust element**: Edit `heroTrustMode` and `heroTrustText` in config
**To update proof card examples**: Edit `adaptiveProofCard.examples` in config
**To update CTAs**: Edit `cta` and `routes` in config

---

## File Reference Map

### Pages
- `src/app/page.tsx` - Landing page
- `src/app/how-it-works/page.tsx` - Process explanation
- `src/app/pricing/page.tsx` - Pricing and comparison

### Components
- `src/components/Button.tsx` - ⚠️ Uses inline styles for visibility
- `src/components/BeforeAfterProofCard.tsx` - ⚠️ Has directional logic
- `src/components/AdaptiveLearningLoop.tsx` - 5-step cycle visual
- `src/components/Nav.tsx` - Navigation with CTA
- `src/components/Footer.tsx` - Footer with legal disclaimers
- `src/components/Container.tsx` - Layout container
- `src/components/FeatureCard.tsx` - Feature block
- `src/components/TestimonialCard.tsx` - Testimonial with optional improvement stat
- `src/components/MockupCard.tsx` - Adaptive status mockup
- `src/components/PricingCard.tsx` - Pricing plan card
- `src/components/FAQ.tsx` - Accordion FAQ
- `src/components/TrustBar.tsx` - Trust signals (not used in hero)

### Configuration
- `src/config/site.ts` - ⚠️ Single source of truth for all content

### Styling
- `src/app/globals.css` - Tailwind v4 theme, custom CSS properties

---

## Known Issues & Solutions

### Issue: CSS Custom Properties Not Resolving
**Symptoms**: Colors not applying, white-on-white text
**Solution**: Use inline styles with explicit hex values (see Button.tsx)
**Why**: Tailwind v4 CSS custom property resolution can be inconsistent

### Issue: Competing Trust Signals
**Symptoms**: Too many social proof elements above the fold
**Solution**: Single trust element with mode switcher (quote vs metric)
**Why**: Cleaner visual hierarchy, better conversion focus

### Issue: Arrow Direction Mismatch
**Symptoms**: Arrows not matching numeric direction (e.g., 10→3 showing ↑)
**Solution**: Dynamic calculation via extractNumber() + getDirection()
**Why**: Ensures visual accuracy in proof card

---

## Build & Deploy

### Development
```bash
npm run dev
```
Runs on port 3000 (forwarded to web in Vibecode sandbox)

### Production Build
```bash
npm run build
```
Generates static site in `.next/` directory

### All Builds Throughout Project
- ✅ All successful (3.5-3.9s build times)
- ✅ No TypeScript errors
- ✅ All routes generated successfully
- ✅ Static generation for all pages

---

## Legal & Compliance

### Required Disclaimers (in Footer)
1. **SAT® Trademark**: "SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this product."
2. **Results Variability**: "Individual results may vary. Score improvements depend on many factors including baseline knowledge, study consistency, and test-taking skills. Testimonials represent individual experiences and are not guarantees of future results."

### Messaging Guidelines
- Never cite specific competitor pricing without verification
- Use general terms ("often higher," "commonly start around")
- Frame tutor comparison as market observation, not claim
- Testimonials should include role/context
- All stats should be verifiable or marked as placeholder

---

## Success Metrics (Conversion Focus)

1. **Above-the-fold clarity**: User understands value prop in 5 seconds
2. **Social proof**: Single trust element visible without scrolling
3. **Concrete proof**: Before/after card shows real numbers immediately
4. **CTA visibility**: Primary buttons always visible (21:1 contrast)
5. **CTA consistency**: All "Start Free" → `/pricing`
6. **Compliance safety**: No risky competitor claims

---

## Next Session Checklist

- [ ] Review this document
- [ ] Check `src/config/site.ts` for current content
- [ ] Read `POLISH_FIXES.md` for most recent changes
- [ ] Verify dev server runs (`npm run dev`)
- [ ] Understand inline styles pattern in Button.tsx
- [ ] Note: User prefers in-place refinement over rebuilds

---

**Last Updated**: 2026-03-01
**Current Version**: V6 (Trust simplification + directional arrow fix)
**Build Status**: ✅ Passing (3.9s)
