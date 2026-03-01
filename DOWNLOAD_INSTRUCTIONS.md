# Download & Restore Instructions

## What's in the Archive

**File**: `recallprep-site.tar.gz` (104KB)

**Contains**:
- ✅ All source code (src/ directory)
- ✅ All documentation (PROJECT_CONTEXT.md, POLISH_FIXES.md, etc.)
- ✅ Configuration files (package.json, tsconfig.json, etc.)
- ✅ Public assets (public/ directory)
- ✅ Project instructions (CLAUDE.md, STACK.md)

**Excludes** (can be regenerated):
- ❌ node_modules/ (run `npm install` to restore)
- ❌ .next/ (run `npm run dev` to regenerate)
- ❌ .git/ (git history not included)

---

## Restore in Fresh Vibecode Sandbox

### Step 1: Download the Archive
Download `recallprep-site.tar.gz` from this workspace.

### Step 2: Upload to New Sandbox
In your fresh Vibecode sandbox, upload the tarball to `/home/vibecode/`

### Step 3: Extract
```bash
cd /home/vibecode
tar -xzf recallprep-site.tar.gz
cd workspace
```

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Start Development Server
```bash
npm run dev
```

Server will run on port 3000 (auto-forwarded in Vibecode).

---

## Restore in Claude Code CLI (Non-Sandbox)

### Step 1: Download & Extract
```bash
# Download recallprep-site.tar.gz to your local machine
tar -xzf recallprep-site.tar.gz
cd workspace
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development
```bash
npm run dev
```

Visit http://localhost:3000

---

## What to Share with Claude in New Session

### Option A: Minimal Context
Just share the codebase. Claude can read:
- `PROJECT_CONTEXT.md` - Comprehensive project overview
- `POLISH_FIXES.md` - Most recent changes
- `src/config/site.ts` - All content configuration

### Option B: Full Context
Share the codebase + tell Claude:
> "This is the RecallPrep marketing site. Read PROJECT_CONTEXT.md first. The site follows these principles: config-driven content, compliance-safe messaging, single pricing ($49/month), and uses inline styles for critical UI (Button.tsx). Continue following the same patterns established in the codebase."

### Option C: Specific Task
Share the codebase + specific request:
> "Read PROJECT_CONTEXT.md. I need to [specific task]. Follow the same config-driven pattern used throughout the codebase."

---

## Key Files to Reference

### For Configuration Changes
- `src/config/site.ts` - All content, pricing, CTAs, trust elements

### For Understanding Recent Work
- `PROJECT_CONTEXT.md` - Full project overview and patterns
- `POLISH_FIXES.md` - Latest changes (trust + arrows)
- `HERO_ENHANCEMENTS.md` - Proof card implementation
- `CTA_VISIBILITY_FIX.md` - Button visibility solution

### For Architecture
- `src/app/page.tsx` - Landing page structure
- `src/components/Button.tsx` - Inline styles pattern
- `src/components/BeforeAfterProofCard.tsx` - Directional logic

---

## Verification Checklist

After restore, verify:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts server on port 3000
- [ ] Landing page loads at http://localhost:3000
- [ ] Primary "Start Free" button is visible (purple background, white text)
- [ ] Before/After proof card shows arrows:
  - Geometry: ↑ green (2 → 8)
  - Linear equations: ↓ orange (10 → 3)
  - Reading evidence: ↑ green (1 → 2)
- [ ] Hero trust element shows quote (configurable in site.ts)
- [ ] All 3 pages accessible: /, /how-it-works, /pricing

---

## Quick Reference

**Project**: RecallPrep SAT prep marketing site
**Tech**: Next.js 16, Tailwind v4, TypeScript
**Pages**: 3 (Landing, How It Works, Pricing)
**Pricing**: $49/month, cancel anytime
**Theme**: Dark premium (violet + cyan)
**Last Updated**: 2026-03-01
**Version**: V6 (Trust simplification + directional arrow fix)
**Build Status**: ✅ Passing (3.9s)

---

## Troubleshooting

### Issue: "Module not found" errors
**Fix**: Run `npm install` in the workspace directory

### Issue: Port 3000 already in use
**Fix**: `pkill -f next-server` or use different port: `npm run dev -- -p 3001`

### Issue: Build fails
**Fix**: Delete `.next` folder and retry: `rm -rf .next && npm run dev`

### Issue: Button text not visible
**Check**: `src/components/Button.tsx` should use inline styles with explicit hex colors (#8b5cf6, #ffffff)

### Issue: Arrows pointing wrong direction
**Check**: `src/components/BeforeAfterProofCard.tsx` should have extractNumber() and getDirection() functions

---

**Archive Created**: 2026-03-01 18:35 UTC
**Archive Size**: 104KB
**Archive Name**: `recallprep-site.tar.gz`
