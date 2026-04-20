# Planning Guide

A professional HCM (Human Capital Management) landing page for Arkav, a SaaS platform that helps companies manage HR operations including attendance, leave, payroll, and reporting with a clean, self-serve onboarding approach.

**Experience Qualities**: 
1. **Professional** - Clean, trustworthy design that conveys reliability and enterprise readiness for HR operations
2. **Approachable** - Simple language and clear value propositions that make complex HR management feel accessible
3. **Efficient** - Streamlined content flow that quickly communicates benefits and gets users to conversion points

**Complexity Level**: Content Showcase (information-focused)
This is a marketing-focused SaaS landing page designed to communicate the platform's value proposition, features, workflow, and pricing in a clear, professional manner optimized for B2B customers.

## Essential Features

### Hero Section with Value Proposition
- **Functionality**: Clear headline stating the platform's core offering with immediate visual hierarchy
- **Purpose**: Capture attention and communicate what Arkav does within 3 seconds of page load
- **Trigger**: Page load and scroll events with subtle parallax
- **Progression**: User lands → sees headline + badge → understands value prop → clicks CTA or scrolls to learn more
- **Success criteria**: Clear messaging, high-contrast CTAs, professional visual treatment

### Dashboard Preview Section
- **Functionality**: Interactive dashboard mockup showing actual UI preview with animations
- **Purpose**: Build credibility by showing the actual product interface and key features visually
- **Trigger**: Scroll into viewport with 3D perspective entrance animation
- **Progression**: User scrolls → dashboard animates into view → tabs and cards interact → chart bars animate → user gains confidence in product quality
- **Success criteria**: Realistic UI representation, smooth animations, clear value demonstration

### Features/Benefits Section
- **Functionality**: Three-column grid showcasing key outcomes (speed, collaboration, compliance)
- **Purpose**: Build trust by highlighting real outcomes instead of just listing features
- **Trigger**: Scroll into viewport with fade-in animation
- **Progression**: User scrolls → cards animate in → user reads benefits → continues to next section
- **Success criteria**: Scannable content, clear icons, outcome-focused messaging

### How It Works Process
- **Functionality**: Step-by-step visualization of the onboarding and usage flow
- **Purpose**: Remove friction by showing exactly how simple the setup process is
- **Trigger**: Scroll reveal with staggered entrance
- **Progression**: User scrolls → sees 3 clear steps → understands simplicity → gains confidence
- **Success criteria**: Linear flow, minimal text, clear progression indicators

### Pricing Tiers
- **Functionality**: Three-tier pricing display with clear differentiation and popular badge
- **Purpose**: Provide transparent pricing to qualify leads and drive trial signups
- **Trigger**: Scroll into view with subtle scale animation
- **Progression**: User scrolls → compares tiers → identifies fit → clicks CTA for selected tier
- **Success criteria**: Clear value differentiation, visual hierarchy highlighting recommended tier

### Call-to-Action Section
- **Functionality**: Final conversion point with dual CTAs (trial + demo)
- **Purpose**: Convert interested visitors into users or qualified leads
- **Trigger**: Always visible on scroll
- **Progression**: User scrolls → sees compelling CTA → clicks trial or demo → enters conversion funnel
- **Success criteria**: High contrast, clear value statement, low-friction language

## Edge Case Handling
- **Reduced Motion Preference**: Disable parallax and complex animations, use simple fades
- **Mobile Responsiveness**: Stack columns, adjust text sizes, ensure touch-friendly CTA buttons
- **Long Content**: Graceful text truncation and expansion where needed
- **Loading States**: Progressive content loading with skeleton screens
- **Browser Compatibility**: Fallbacks for gradient effects and modern CSS features

## Design Direction
The design should feel professional, clean, and trustworthy—like an enterprise SaaS product. Use a light, airy background with subtle blue accents that convey professionalism and reliability. Orange accent color adds energy and draws attention to CTAs without feeling aggressive. Typography should be highly legible with strong hierarchy to support scanning behavior typical of B2B decision-makers.

## Color Selection
A professional, trustworthy palette suitable for B2B SaaS with clean light backgrounds and strategic accent use.

- **Primary Color**: Professional blue `oklch(0.50 0.18 240)` - conveys trust, reliability, and corporate professionalism
- **Secondary Colors**: 
  - Light grey `oklch(0.92 0.02 240)` for subtle backgrounds
  - Muted blue `oklch(0.50 0.02 240)` for secondary text
- **Accent Color**: Warm orange `oklch(0.62 0.20 35)` - energetic CTA color that drives action
- **Foreground/Background Pairings**: 
  - Background (Light grey #F8F9FB / oklch(0.98 0.01 240)): Dark text (#333335 / oklch(0.20 0.02 240)) - Ratio 16.8:1 ✓
  - Primary (Professional blue oklch(0.50 0.18 240)): White text (#FFFFFF / oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent (Warm orange oklch(0.62 0.20 35)): White text - Ratio 4.7:1 ✓
  - Card (White oklch(1 0 0)): Dark text - Ratio 19.5:1 ✓

## Font Selection
Professional, highly legible typefaces optimized for B2B content consumption and trust-building.

- **Primary Font**: Space Grotesk - Modern geometric sans with personality for headlines while maintaining professionalism
- **Secondary Font**: Inter - Industry-standard readable font for body text and UI elements

- **Typographic Hierarchy**: 
  - Hero Title: Space Grotesk Bold/56px/tight letter-spacing (-0.01em) - Strong but not overwhelming
  - Section Headers: Space Grotesk Bold/40px/tight letter-spacing - Clear section breaks
  - Subheadings: Space Grotesk Medium/20px/normal letter-spacing - Content grouping
  - Body Text: Inter Regular/16px/relaxed line-height (1.6) - Optimized readability
  - Small Text/Labels: Inter Medium/14px/normal letter-spacing - UI and metadata

## Animations
Animations should enhance professionalism and guide attention without being distracting. Subtle parallax on hero (0.5x speed), smooth fade-up on scroll reveal (300ms ease-out, triggered at 20% viewport). Hover states on buttons show gentle scale (1.02x) and shadow deepening (150ms). All animations respect reduced-motion preferences with instant transitions as fallback.

## Component Selection
- **Components**: 
  - Button (shadcn) - Primary and outline variants for CTA hierarchy
  - Card (shadcn) - Clean containers for features and pricing with subtle borders
  - Badge (shadcn) - For labels and tags (HCM + SaaS, Popular, etc.)
  - Separator (shadcn) - Subtle dividers between major sections
- **Customizations**: 
  - Light gradient backgrounds for hero using radial gradients at low opacity
  - Subtle grid pattern overlay for visual texture without distraction
  - Custom pricing cards with highlighted "recommended" tier
  - Professional icon treatments using Phosphor duotone style
- **States**: 
  - Buttons: Default solid, hover with slight elevation, active with subtle scale-down, focus ring
  - Cards: Subtle border on default, primary color border on hover
  - Links: Underline on hover, color shift to primary
- **Icon Selection**: 
  - Lightning for speed/efficiency, Users for collaboration, Target for compliance
  - ArrowRight for CTAs and progression indicators
  - All icons use duotone weight for modern, friendly appearance
- **Spacing**: 
  - Large section gaps: py-32 (128px) desktop, py-16 (64px) mobile
  - Card spacing: p-8 (32px) for comfortable content breathing
  - Content spacing: space-y-6 (24px) for related content blocks
  - CTA gaps: gap-4 (16px) for button groups
- **Mobile**: 
  - Hero text scales to 36px on mobile
  - Three-column layouts stack to single column
  - Reduce vertical spacing by 50% (py-32 → py-16)
  - Full-width cards with adjusted padding (p-6 instead of p-8)
  - Touch-optimized button sizes (minimum 44x44px)
