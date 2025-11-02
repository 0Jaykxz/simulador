# Design Guidelines: Science Fair Experiment Presentation

## Design Approach
**Reference-Based with Educational Focus**: Drawing inspiration from modern educational platforms (Khan Academy, Duolingo) combined with the visual energy of science communication sites (Science Friday, NASA Education). The design should feel exciting and accessible while maintaining educational credibility.

## Core Design Principles
- **Curiosity-Driven**: Visual hierarchy that sparks interest and encourages exploration
- **Scientific Clarity**: Clear information architecture despite playful aesthetics
- **Interactive Learning**: Hands-on elements that reinforce understanding
- **Achievement-Oriented**: Progress indicators and feedback that motivate engagement

## Typography
**Font Families** (via Google Fonts CDN):
- Headlines: 'Space Grotesk' - Bold (700), SemiBold (600) - modern, scientific feel
- Body Text: 'Inter' - Regular (400), Medium (500) - excellent readability
- Interactive Elements: 'Space Grotesk' Medium (500) - consistency with headlines

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsections: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Quiz Questions: text-lg md:text-xl font-medium
- Button Text: text-base md:text-lg font-medium

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20 (maintaining consistent rhythm)
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Element gaps: gap-6 to gap-8
- Container max-width: max-w-6xl for content, max-w-7xl for full sections

**Grid Structure**:
- Hero: Full-width with centered content (max-w-4xl)
- Experiment Explanation: Single column with max-w-4xl, interspersed with full-width visual elements
- Quiz: Centered container (max-w-3xl) with question cards
- Simulator Section: Two-column layout on desktop (explanation + visual preview), stacking on mobile

## Component Library

### Navigation
Sticky header with transparent-to-solid transition on scroll, containing:
- Logo/experiment title (left)
- Navigation links to sections: "O Experimento", "Quiz", "Simulador" (center/right)
- Compact design (h-16 to h-20)

### Hero Section
Full-viewport entry (80vh to 90vh) featuring:
- Large hero image: Vibrant photograph of the actual experiment in action or scientific illustration
- Overlaid headline with experiment name
- Short tagline explaining the core concept (1 sentence)
- Primary CTA button: "Explorar o Experimento" with blurred background
- Subtle animated scroll indicator at bottom

### Experiment Explanation Section
Rich multi-paragraph layout with:
- Section header: "Como Funciona o Experimento"
- 3-4 subsections with icons (from Heroicons): Objective, Materials, Procedure, Results
- Mixed content blocks alternating text and supporting visuals
- Step-by-step cards for procedure (numbered, with brief descriptions)
- Pull-out fact boxes or key insights with distinct visual treatment
- Scientific diagrams or process illustrations

### Quiz Component
Interactive assessment featuring:
- Section header: "Teste Seus Conhecimentos"
- Introduction text explaining the quiz format
- Question cards (4-6 questions) displayed one at a time
- Multiple choice options as large, tappable buttons
- Immediate visual feedback (correct/incorrect)
- Progress indicator showing current question number
- Final score display with encouraging message
- "Tentar Novamente" button for retaking

### Simulator Section
Engaging introduction to the interactive tool:
- Section header: "Simulador Online"
- Two-column layout: Left - explanation text, Right - simulator preview/screenshot
- Bulleted list of simulator features
- Instructions for using the simulator
- Large "Abrir Simulador" CTA button launching the interactive tool
- Visual mockup or iframe preview of simulator interface

### Footer
Comprehensive footer containing:
- Brief credit: "Projeto desenvolvido para [Nome da Escola] - Feira de Ciências [Ano]"
- Student/team names and class information
- Teacher supervisor acknowledgment
- Links to additional resources or bibliography
- Optional social sharing buttons

## Animations
Minimal and purposeful:
- Smooth scroll behavior for navigation
- Fade-in on scroll for section headers (subtle entrance)
- Hover scale (1.05) on quiz answer buttons
- Success/error animations for quiz feedback (gentle bounce or shake)
- No distracting continuous animations

## Icons
**Heroicons Outline** (via CDN) for:
- Navigation menu (mobile)
- Section indicators (beaker, clipboard, computer for each section)
- Quiz feedback (check-circle, x-circle)
- Feature lists (check marks)

## Images
**Hero Section**: Large, high-quality photograph of the experiment setup or in progress - creates immediate visual impact and context
**Experiment Section**: 2-3 supporting images showing materials, process steps, or results
**Simulator Section**: Screenshot or preview of the simulator interface
All images should be bright, well-lit, and professionally composed to convey scientific credibility

## Responsive Behavior
- Mobile-first approach with single-column stacking
- Quiz buttons full-width on mobile, grid layout on tablet+
- Hero text sizing scales dramatically (5xl to 7xl)
- Section padding reduces on mobile (py-12 vs py-20)
- Navigation collapses to hamburger menu on mobile