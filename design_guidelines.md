# Dartmoor Pottery - Design Guidelines

## Design Approach

**Selected Approach:** Reference-based with contemporary gallery aesthetic, drawing inspiration from high-end craft e-commerce like Etsy Studio and ceramics brands such as East Fork Pottery and Heath Ceramics. This approach emphasizes editorial photography, bold typography, and breathing room to let the pottery speak for itself.

**Core Principles:**
- Typography as primary visual element
- Generous negative space to create calm, focused browsing
- Photography as atmospheric storytelling, not just product display
- Contemporary minimalism with artisanal warmth

---

## Typography System

**Primary Font:** Cormorant Garamond (Google Fonts)
- Elegant serif for headlines and feature text
- Weights: 300 (Light), 400 (Regular), 600 (SemiBold)

**Secondary Font:** Inter (Google Fonts)
- Clean sans-serif for body text and UI elements
- Weights: 400 (Regular), 500 (Medium)

**Type Scale:**
- Hero Headline: text-7xl lg:text-8xl (Cormorant, font-light)
- Section Headers: text-5xl lg:text-6xl (Cormorant, font-light)
- Subheadings: text-2xl lg:text-3xl (Cormorant, font-normal)
- Body Large: text-lg lg:text-xl (Inter, font-normal)
- Body: text-base (Inter, font-normal)
- Small: text-sm (Inter, font-medium)

**Typography Treatment:**
- Generous line-height (leading-relaxed for body, leading-tight for headlines)
- Max-width constraints for readability: max-w-prose for body text, max-w-4xl for headlines
- Letter-spacing: tracking-tight for large headlines, tracking-normal for body

---

## Layout & Spacing System

**Tailwind Spacing Units:** Use 4, 8, 12, 16, 20, 24, 32 as primary spacing values
- Component padding: p-8, p-12, p-16
- Section padding: py-20 md:py-32 lg:py-40
- Element gaps: gap-8, gap-12, gap-16
- Margins: mb-8, mb-12, mb-16 for vertical rhythm

**Container Strategy:**
- Full-width sections: w-full
- Content containers: max-w-7xl mx-auto px-8
- Narrow content: max-w-4xl mx-auto
- Text-only sections: max-w-3xl mx-auto

**Grid System:**
- Product grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature sections: grid-cols-1 lg:grid-cols-2 with asymmetric content
- Maintain consistent gap-8 lg:gap-12 between grid items

---

## Page Structure & Sections

### 1. Hero Section
**Layout:** Full viewport height (min-h-screen) with AI-extended pottery photo background
- Large-scale typography overlaying image: "Dartmoor Pottery" in Cormorant
- Subtle tagline below in Inter
- Minimal navigation bar at top (transparent with white text)
- CTA button with backdrop-blur-md background positioned in lower third
- Image treatment: Subtle overlay (bg-black/20) for text legibility

### 2. Brand Story Section
**Layout:** Two-column asymmetric (40/60 split)
- Left: Large block quote or mission statement in Cormorant text-4xl
- Right: Body copy with ample line-height in Inter
- Background: Pure white with generous padding (py-32)
- No images—pure typography and negative space

### 3. Featured Collection
**Layout:** Full-width background section with AI-extended pottery photo
- Overlaid content in contained max-w-5xl area
- Typography-driven product showcase
- 3-column grid on desktop, single column mobile
- Product names in Cormorant text-2xl, descriptions in Inter
- Backdrop-blur cards for product information overlay

### 4. Craftsmanship Section
**Layout:** Split-screen design
- Left 50%: Large image of pottery-making process
- Right 50%: Centered text content with generous padding
- Headline + body copy + small detail text
- Reverse layout on next section for visual variety

### 5. Location & Studio
**Layout:** Centered content with background treatment
- Dartmoor landscape as AI-extended background
- Central content block (max-w-2xl) with blurred backdrop
- Studio information, opening hours, location details
- Emphasis on Dartmoor heritage and local craftsmanship

### 6. Newsletter/Contact
**Layout:** Minimal centered section
- Clean white background
- Simple form with generous spacing
- Typography-driven CTA
- Minimal decorative elements

### 7. Footer
**Layout:** Multi-column informational
- 3 columns: Shop, About, Connect
- Social media icons
- Studio address and contact
- Copyright in small Inter font

---

## Component Library

### Navigation
- Transparent header with white text over hero
- Logo: "Dartmoor Pottery" in Cormorant text-2xl
- Links in Inter text-sm uppercase tracking-wider
- Minimal hamburger menu on mobile

### Buttons
**Primary CTA:** 
- Rounded-full with generous padding (px-8 py-4)
- Backdrop-blur-md when on images
- Border: border border-white/30
- Hover state: Built-in component behavior

**Secondary:**
- Text links with underline decoration
- Hover: slight opacity change

### Cards (Product/Content)
- Minimal borders or shadows
- Focus on typography hierarchy
- Generous internal padding (p-8)
- Backdrop-blur-sm when overlaying images

### Image Treatments
- AI-extended backgrounds: Seamless blend with extended canvas space
- Overlay gradients: Subtle (bg-gradient-to-t from-black/30)
- No heavy filters—let pottery colors shine naturally

---

## Images

**Required Images:**
1. **Hero Background:** AI-extended pottery bowl photo (from attached images)—full-bleed, extending canvas to create space for headline and CTA overlay
2. **Featured Collection Background:** AI-extended pottery collection photo—wide format with text overlay space
3. **Craftsmanship Image:** Hands working with clay or pottery-making process
4. **Location Background:** Dartmoor landscape—AI-extended for full-width section with centered text overlay

**Image Strategy:**
- Use actual provided pottery photos as hero and section backgrounds
- AI-extend backgrounds to create compositional space for text overlays
- Maintain natural pottery colors—earthy terracotta, warm clay tones, soft neutrals
- High-quality, editorial-style photography that feels authentic and artisanal

---

## Responsive Behavior

**Breakpoint Strategy:**
- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px)
- Typography scales down gracefully: text-6xl becomes text-4xl on mobile
- Grids collapse to single column below md breakpoint
- Section padding reduces: py-20 on mobile, py-32+ on desktop
- Background images remain full-bleed across all devices

---

## Animations & Interactions

**Minimal Approach:**
- Smooth scroll behavior
- Subtle fade-in on scroll for section headers only
- No carousels or heavy animations
- Focus on typography and layout transitions
- Button hover states handled by component defaults

---

## Accessibility

- Maintain WCAG AA contrast ratios even with image overlays
- Use backdrop-blur and semi-transparent backgrounds to ensure text legibility
- Semantic HTML structure with proper heading hierarchy
- Alt text for all pottery images describing form, glaze, and character
- Keyboard navigation support throughout