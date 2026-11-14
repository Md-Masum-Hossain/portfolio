# Portfolio Design & Engineering Standards (Master Blueprint)

## 0. Tech Stack & Codebase Constraints (CRITICAL)
- **JavaScript Only:** This project is built with **JavaScript (`.js` / `.jsx`)**, NOT TypeScript. Never generate `.ts` or `.tsx` files, TypeScript interfaces, or type annotations. Follow existing JS/JSX conventions strictly.
- **No Destructive Deletions:** Keep unused legacy components (such as `StarBackground.jsx`) intact in the codebase for future reuse; simply unmount or comment them out from active layouts.

## 1. Centralized Theme & Semantic Color Tokens (MANDATORY)
- **Single Source of Truth:** NEVER hardcode hex colors (e.g., `#0C0C0E`, `#E5A93C`) or raw Tailwind palette classes (e.g., `bg-zinc-900`, `text-amber-400`, `bg-blue-500`) inside components.
- **CSS Variables:** Define all theme colors as CSS custom properties in `globals.css` and map them to Tailwind utility classes (compatible with the project's existing Tailwind version) so changing one variable updates the entire site theme:
  - `--bg-base: #0C0C0E` (Warm Carbon — main page background)
  - `--bg-surface: #141417` (Elevated Graphite — inputs, subtle containers, mockup frames)
  - `--border-subtle: #232329` (1px hairline dividers and borders)
  - `--text-primary: #F4F4F5` (Alabaster White — main headings and titles)
  - `--text-secondary: #94949E` (Pewter Gray — body copy, descriptions, neutral icons)
  - `--accent-primary: #E5A93C` (Champagne Amber — primary CTAs like Hire Me / Live Demo, active tabs, key highlights)
  - `--accent-primary-fg: #0C0C0E` (Dark text on primary accent buttons)
  - `--accent-status: #34D399` (Soft Sage — strictly limited to "Available for Work" dot and "Completed" badges)
- **Usage:** Always use semantic utility classes (`bg-base`, `bg-surface`, `text-primary`, `text-secondary`, `border-subtle`, `bg-accent`, `text-accent`, `text-status`).
- **Color Discipline (Contact & Icons):** Remove multi-colored icon boxes ("rainbow" cards on Contact/Skills). Keep all contact and skill icons monochrome (`text-secondary`) and transition smoothly to `text-primary` or `border-accent/40` on hover.

## 2. Visual Aesthetic, Typography & Layout
- **No Card Fatigue:** Do NOT wrap sections like About, Skills, or CTA in floating boxes/cards. Use open layouts separated by `1px` hairline dividers (`border-t border-subtle`) and generous vertical whitespace (`py-24`).
- **Sharp Geometry:** Prefer crisp, architectural corners (`rounded-md` or `rounded-lg`) over overly rounded (`rounded-2xl` / `rounded-full`) elements.
- **Typography:** Pair `Geist Sans` (`tracking-tight` on large headings) for UI/headings and `Geist Mono` (`text-xs uppercase tracking-wider`) for tech tags, dates, and category labels.
- **Hero Cleanup:** Remove any stray debug text (like `center`) and avoid duplicate CTAs in the same viewport. Ensure footer "Connect" and Contact "Follow Me" social links (GitHub, LinkedIn, Email) are visible with proper `aria-label`s.

## 3. Background Architecture
- **Active Background:** Replace `StarBackground` with a subtle architectural grid or dot matrix (`opacity-[0.04]`) with a radial gradient mask fade on the Hero section only. Keep lower sections on clean `bg-base`.

## 4. Skills Section (Homepage & `/skills` Page)
- **Homepage Dual-Row Marquee:** Implement a smooth, slow (`35s–40s`) infinite dual-row marquee (Row 1 scrolling left: Frontend & Core; Row 2 scrolling right: Backend & Tools) with gradient edge masks.
- **Pause & Tooltip:** Pause animation on hover/focus (`animation-play-state: paused`) and show an unclipped tooltip above the icon (`py-8` container padding) displaying the exact technology name. Support tap-to-reveal on mobile.
- **Skills Page (`/skills`):** Remove arbitrary percentage bars (`90%`, `70%`). Merge `SCSS` and `Sass` into a single `Sass / SCSS` entry.

## 5. Projects Strategy (Homepage & `/projects` Page)
- **Curation & Cleanup:** Remove meta/duplicate projects (`Portfolio Website`, `Simple Portfolio Website`, and the redundant `Doctor's Appointment Booking System` since `Docvexa` covers it). Keep real projects: `Dorpon`, `Docvexa`, `Routine Scrapper`, `CPCCU`, `StudyNook`, `Product Hunt`. Remove empty filter tabs (like `Backend` if 0 items exist).
- **Homepage Featured Showcase:** Feature the top 3 real-world projects (`Dorpon`, `Docvexa`, `Routine Scrapper`) using an open Editorial Split-Showcase layout (text + tech tags + Live Demo/GitHub links on one side, clean UI preview on the other) instead of generic 3-column cards.
- **Project Cards (`/projects`):** Display tech stack pills and direct `Live Demo` + `GitHub` links directly on every card without forcing users to open the detail page first. Update finished MVPs from `In Progress` to `Completed` or `Live`.

## 6. Animation & Motion Guidelines (Framer Motion & GSAP)
- **Best Tool for the Job:** Use **Framer Motion** for component-level UI transitions, layout animations, and micro-interactions, OR **GSAP (with ScrollTrigger & `@gsap/react` `useGSAP`)** for smooth scroll-choreographed reveals and hero entrances—whichever delivers the cleanest, smoothest result without bloat.
- **No Bouncy Springs:** Never use default bouncy spring physics. Use smooth, authoritative easing (`[0.22, 1, 0.36, 1]` in Framer Motion or `power3.out` / `expo.out` in GSAP).
- **Subtle Movement:** Keep scroll-reveal translations minimal (`y: 14` to `y: 20`) and fast (`duration: 0.45`–`0.6`).
- **Trigger Once & Cleanup:** Always trigger scroll animations once (`viewport={{ once: true }}` or GSAP `once: true`) and properly revert GSAP contexts on unmount. Animate only GPU-composited properties (`opacity`, `transform`).

## 7. SEO, Accessibility & Copywriting
- **Fix `/about` Access:** Check `robots.js`, `middleware.js`, or server data-fetching so `/about` is publicly accessible (`200 OK`) for users and search engine crawlers.
- **Authentic Copy & Real Visuals:** Replace generic stock illustrations ("Developer working on a laptop") with real project screenshots/mockups. Eliminate AI-cliché phrases ("passionate developer", "seamless experience") in favor of concrete engineering challenges solved.