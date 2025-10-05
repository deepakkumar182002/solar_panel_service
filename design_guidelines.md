# Design Guidelines for Devanshi Renewable Energy Website

## Design Approach
**Reference-Based Approach**: Inspired by https://trivenisolargeneration.in/ - a modern, professional solar energy website with clean layouts and strong visual hierarchy.

## Core Design Principles
- **Professional & Futuristic Aesthetic**: Clean, modern design with eco-friendly solar energy theme
- **Visual Storytelling**: Use high-quality solar panel imagery, green fields, futuristic cityscapes
- **Trust & Authority**: Establish credibility through professional layouts and smooth interactions

## Color Palette

### Dark Mode (Primary)
- Background: `#182830` (dark teal-gray)
- Text: White/light gray for readability
- Accent: Vibrant teal/cyan (`180 80% 50%`) for CTAs and highlights
- Secondary: Warm amber/gold (`40 85% 55%`) representing solar energy

### Light Mode
- Background: White
- Text: `#182830` (dark gray/black)
- Same accent colors adapted for light backgrounds

## Typography
- **Headings**: Bold, modern sans-serif (Inter, Poppins, or Montserrat)
- **Hero Title**: Extra large (text-5xl to text-7xl), bold weight
- **Body**: Clean, readable sans-serif (text-base to text-lg)
- **Hierarchy**: Clear size distinction between h1, h2, h3 levels

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Component spacing: `gap-6 md:gap-8`

## Hero Section
**Large Hero Image**: YES - Wide desktop-style hero with futuristic solar panel setup
- Full viewport height (min-h-screen)
- Overlay gradient for text readability
- Centered content with tagline and dual CTA buttons
- Button treatment: Primary solid button + outline button with blurred background

## Images Strategy
1. **Hero**: Wide panoramic solar panel installation (sunset/sunrise lighting)
2. **About Section**: Modern solar farm, team working on installation
3. **Services Cards**: Icon-based with subtle background images
4. **Projects Gallery**: Real solar installation photos (residential/commercial/industrial)
5. **Video Section**: Embedded intro video about solar energy
6. **Contact**: Office location or solar installation backdrop

## Component Library

### Navigation
- Sticky header with backdrop blur
- Logo on left, nav links center/right
- Dark/Light mode toggle
- Mobile hamburger menu
- Smooth scroll behavior

### Hero Section
- Full-width background image with overlay
- Centered h1 tagline with animated text
- Two CTA buttons (Get a Quote + Contact Us) with hover lift effects
- Scroll indicator at bottom

### Service Cards (Grid Layout)
- 3-column grid (responsive to 1 column on mobile)
- Icon at top, title, description
- Hover: lift effect, subtle glow, scale icon
- Background: subtle gradient or solid color

### Project Gallery
- Masonry or responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Category filter tabs (Residential/Commercial/Industrial)
- Image hover: zoom effect, overlay with project details
- Lightbox on click for full view

### Solar Calculator
- Clean form layout with input fields
- Real-time calculation display
- Visual representations (charts/progress bars)
- Result cards showing: System Size, Savings, CO2 Reduction

### Contact Section
- Two-column layout: Form + Map/Info
- Form fields with proper validation states
- WhatsApp floating button (bottom-right)
- Google Maps embed

### AI Chatbot
- Floating bottom-right corner
- Chat bubble icon with pulse animation
- Expandable chat window
- Professional conversational UI

### Footer
- Multi-column layout (Company Info | Quick Links | Contact | Social)
- Social media icons with hover effects
- Newsletter signup form
- Copyright and legal links

## Animations & Interactions
**Scroll Animations** (Framer Motion):
- Fade in: Opacity 0 to 1, y: 20 to 0
- Slide in: From left/right with stagger
- Zoom: Scale 0.9 to 1 on scroll

**Hover Effects**:
- Cards: Lift (translateY: -8px), shadow increase
- Buttons: Slight scale (1.05), color transition
- Images: Zoom (scale: 1.1), brightness increase

**Performance**: Use `will-change` sparingly, prefer `transform` and `opacity`

## Accessibility
- Dark mode toggle with persistent localStorage
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- ARIA labels for interactive elements
- Focus states for keyboard navigation
- Sufficient color contrast in both modes

## Icons
Use **React Icons** or **Lucide Icons**:
- Solar panels, sun, leaf for eco-theme
- Arrow right for CTAs
- Check marks for features
- Location, phone, email for contact

## Mobile Responsiveness
- Hero: Full viewport height on desktop, 70vh on mobile
- Grids: 3 columns → 2 → 1 stack
- Navigation: Hamburger menu on mobile
- Touch-friendly button sizes (min 44x44px)
- Readable text sizes (minimum 16px body)

## Key Visual Moments
1. **Hero entrance**: Fade in with parallax effect
2. **Services grid**: Staggered card animations on scroll
3. **Project gallery**: Smooth filter transitions
4. **Calculator results**: Animated number counting
5. **Chatbot**: Bounce attention grabber on first load

**Overall Tone**: Professional, trustworthy, innovative, eco-conscious, forward-thinking with strong emphasis on clean energy and sustainability.