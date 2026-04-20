# Planning Guide

A modern, energetic landing page showcasing an event or competition with smooth parallax scrolling effects, bold typography, and dynamic visual elements that create an immersive experience.

**Experience Qualities**: 
1. **Dynamic** - The page should feel alive with smooth parallax effects and subtle animations that respond to user scrolling
2. **Energetic** - Bold colors, strong typography, and confident design choices that convey excitement and momentum
3. **Polished** - Professional execution with attention to spacing, transitions, and visual hierarchy

**Complexity Level**: Content Showcase (information-focused)
This is a marketing-focused landing page designed to present information about an event/competition in an engaging, visually striking way with multiple content sections.

## Essential Features

### Hero Section with Parallax
- **Functionality**: Large hero area with layered parallax scrolling elements
- **Purpose**: Create immediate visual impact and establish brand identity
- **Trigger**: Page load and scroll events
- **Progression**: User lands on page → sees bold headline and visuals → begins scrolling → elements move at different speeds creating depth
- **Success criteria**: Smooth 60fps parallax animation, clear headline visibility, immediate visual interest

### Multi-Layer Scroll Experience
- **Functionality**: Different content sections with varying scroll speeds and reveal animations
- **Purpose**: Maintain user engagement through the entire page journey
- **Trigger**: User scroll interactions
- **Progression**: User scrolls → background elements move slower → foreground elements move faster → new sections fade/slide in
- **Success criteria**: Buttery smooth animations, no janky scrolling, clear content hierarchy

### Feature/Info Sections
- **Functionality**: Multiple content blocks showcasing event details, schedule, or key information
- **Purpose**: Communicate important information in digestible, visually appealing blocks
- **Trigger**: Scroll into viewport
- **Progression**: User scrolls to section → elements animate in → content becomes readable → user continues scrolling
- **Success criteria**: Clear readability, smooth entrance animations, logical information flow

### Call-to-Action Elements
- **Functionality**: Prominent buttons or links for registration, learning more, or taking action
- **Purpose**: Drive user conversion and engagement
- **Trigger**: Visibility in viewport or user hover
- **Progression**: User sees CTA → hovers over button → sees interactive feedback → clicks → navigates to action
- **Success criteria**: High visibility, clear interaction states, compelling copy

## Edge Case Handling
- **Reduced Motion Preference**: Respect prefers-reduced-motion by disabling parallax and using simple fades instead
- **Performance on Low-End Devices**: Use CSS transforms for animations (GPU-accelerated), debounce scroll handlers
- **Mobile Touch Interactions**: Ensure parallax works smoothly on touch devices, adjust scroll multipliers for mobile
- **Missing Content**: Graceful handling if sections are empty, maintaining layout integrity
- **Very Long/Short Screens**: Adaptive parallax ranges based on viewport height

## Design Direction
The design should evoke energy, innovation, and forward momentum - like a tech conference or competition brand. Bold geometric shapes, vibrant gradients, and confident typography create a sense of excitement. The parallax effects should feel purposeful and smooth, adding depth without being gimmicky.

## Color Selection
A vibrant, high-energy palette with strong contrasts and dynamic gradients.

- **Primary Color**: Electric violet `oklch(0.55 0.25 285)` - conveys innovation, creativity, and energy
- **Secondary Colors**: 
  - Deep indigo `oklch(0.35 0.15 275)` for depth and contrast
  - Cyber cyan `oklch(0.75 0.15 195)` for accents and highlights
- **Accent Color**: Neon orange `oklch(0.72 0.20 45)` - high-energy call-to-action color that demands attention
- **Foreground/Background Pairings**: 
  - Background (Dark indigo #0F0B1F / oklch(0.12 0.08 275)): White text (#FFFFFF / oklch(1 0 0)) - Ratio 15.2:1 ✓
  - Primary (Electric violet oklch(0.55 0.25 285)): White text - Ratio 5.1:1 ✓
  - Accent (Neon orange oklch(0.72 0.20 45)): Dark text (oklch(0.15 0 0)) - Ratio 8.9:1 ✓
  - Card/Section (Deep purple oklch(0.18 0.10 280)): White text - Ratio 11.8:1 ✓

## Font Selection
The typeface should feel modern, technical, and dynamic with excellent readability at all sizes.

- **Primary Font**: Space Grotesk - A geometric sans-serif with distinct personality, perfect for headlines and creating visual impact
- **Secondary Font**: Inter - Clean, highly legible for body text and supporting content

- **Typographic Hierarchy**: 
  - Hero Title: Space Grotesk Bold/72px/tight letter-spacing (-0.02em) - Maximum impact
  - Section Headers: Space Grotesk Bold/48px/tight letter-spacing
  - Subheadings: Space Grotesk Medium/24px/normal letter-spacing
  - Body Text: Inter Regular/18px/relaxed line-height (1.7)
  - Small Text/Labels: Inter Medium/14px/wide letter-spacing (0.05em) for emphasis

## Animations
Animations should enhance the storytelling and create a sense of momentum. Primary focus on smooth parallax scrolling with layered depth - background elements move at 0.3-0.5x speed, midground at 0.7x, foreground at 1x. Section reveals use subtle fade-up animations (300ms ease-out) triggered at 20% viewport intersection. CTAs have gentle scale and glow effects on hover (150ms). All animations respect reduced motion preferences with graceful fallbacks to simple opacity transitions.

## Component Selection
- **Components**: 
  - Button (shadcn) - for CTAs with custom hover states using scale and shadow effects
  - Card (shadcn) - for content sections with glassmorphism backdrop-blur effects
  - Separator (shadcn) - subtle dividers between major sections
  - Badge (shadcn) - for labels, dates, or category tags
- **Customizations**: 
  - Custom parallax wrapper components using framer-motion scroll-linked animations
  - Gradient overlays using multiple radial gradients for rich backgrounds
  - Custom grid patterns using repeating-linear-gradient for texture
  - Glassmorphic cards with backdrop-filter blur and semi-transparent backgrounds
- **States**: 
  - Buttons: Default with gradient background, hover with scale(1.05) and enhanced glow, active with scale(0.98), disabled with reduced opacity
  - Cards: Subtle border glow on hover, smooth background color shift
  - Interactive elements: Transform and shadow changes within 150-200ms
- **Icon Selection**: 
  - Phosphor icons set to regular weight for clarity
  - ArrowRight for CTAs, Calendar for dates, MapPin for location, Users for team/community, Trophy for achievements
- **Spacing**: 
  - Large section gaps: py-32 (128px) for dramatic breathing room
  - Content spacing: space-y-8 (32px) for related content
  - Component padding: p-8 or p-12 for cards
  - Inline spacing: gap-4 (16px) for button groups
- **Mobile**: 
  - Hero text scales from 72px → 40px on mobile
  - Reduce parallax intensity by 50% on mobile for better performance
  - Stack horizontal layouts vertically with full-width cards
  - Reduce py-32 → py-16 on mobile for better proportion
  - Touch-optimized button sizes (min 44x44px)
