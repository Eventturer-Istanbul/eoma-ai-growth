# EOMA — Brand & Design System Reference

> Complete branding, color system, typography, component styles, and design patterns for the EOMA landing page.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Shadows & Elevation](#shadows--elevation)
6. [Gradients](#gradients)
7. [Border Radius](#border-radius)
8. [Button System](#button-system)
9. [Card System](#card-system)
10. [Input & Form Styles](#input--form-styles)
11. [Accent Color Palette](#accent-color-palette)
12. [Custom Utility Classes](#custom-utility-classes)
13. [Animation & Motion](#animation--motion)
14. [Responsive Breakpoints](#responsive-breakpoints)
15. [Scrollbar Styling](#scrollbar-styling)
16. [Section-Level Design Patterns](#section-level-design-patterns)
17. [Brand Assets](#brand-assets)
18. [Tech Stack](#tech-stack)

---

## Brand Identity

| Property        | Value                               |
| --------------- | ----------------------------------- |
| **Brand Name**  | EOMA                                |
| **Font**        | Outfit (Google Fonts)               |
| **Tone**        | Warm, modern, approachable, premium |
| **Theme Color** | `#f7f5f2` (warm off-white)          |
| **Dark Mode**   | Supported via `.dark` class toggle  |

---

## Color System

All colors use **HSL format** as CSS custom properties. Tailwind maps them via `hsl(var(--token))`.

### Light Mode (Default)

| Token                      | HSL Value     | Hex Approx. | Usage                      |
| -------------------------- | ------------- | ----------- | -------------------------- |
| `--background`             | `40 30% 97%`  | `#f7f5f2`   | Page background            |
| `--foreground`             | `220 20% 25%` | `#333c4d`   | Primary text               |
| `--card`                   | `40 25% 95%`  | `#f2efeb`   | Card backgrounds           |
| `--card-foreground`        | `220 20% 25%` | `#333c4d`   | Card text                  |
| `--primary`                | `220 25% 45%` | `#566d8f`   | Primary actions, links     |
| `--primary-foreground`     | `40 30% 97%`  | `#f7f5f2`   | Text on primary            |
| `--secondary`              | `40 20% 92%`  | `#ece9e4`   | Secondary backgrounds      |
| `--secondary-foreground`   | `220 20% 30%` | `#3d4759`   | Text on secondary          |
| `--muted`                  | `40 15% 90%`  | `#e8e5e1`   | Muted/disabled backgrounds |
| `--muted-foreground`       | `220 15% 50%` | `#6d7787`   | Muted/placeholder text     |
| `--accent`                 | `175 45% 55%` | `#4dbfb3`   | Accent (teal)              |
| `--accent-foreground`      | `40 30% 97%`  | `#f7f5f2`   | Text on accent             |
| `--destructive`            | `0 65% 55%`   | `#d94040`   | Error/destructive          |
| `--destructive-foreground` | `40 30% 97%`  | `#f7f5f2`   | Text on destructive        |
| `--border`                 | `40 20% 88%`  | `#e2ded9`   | Borders                    |
| `--input`                  | `40 20% 90%`  | `#e8e4df`   | Input backgrounds          |
| `--ring`                   | `220 25% 45%` | `#566d8f`   | Focus ring                 |

### Dark Mode

| Token                      | HSL Value       | Hex Approx. | Usage                  |
| -------------------------- | --------------- | ----------- | ---------------------- |
| `--background`             | `220 20% 12%`   | `#181d26`   | Page background        |
| `--foreground`             | `40 20% 95%`    | `#f4f2ef`   | Primary text           |
| `--card`                   | `220 20% 15%`   | `#1f2530`   | Card backgrounds       |
| `--card-foreground`        | `40 20% 95%`    | `#f4f2ef`   | Card text              |
| `--primary`                | `175 45% 55%`   | `#4dbfb3`   | Primary actions (teal) |
| `--primary-foreground`     | `220 20% 12%`   | `#181d26`   | Text on primary        |
| `--secondary`              | `220 15% 20%`   | `#2b3040`   | Secondary backgrounds  |
| `--secondary-foreground`   | `40 20% 95%`    | `#f4f2ef`   | Text on secondary      |
| `--muted`                  | `220 15% 18%`   | `#262b38`   | Muted backgrounds      |
| `--muted-foreground`       | `220 15% 60%`   | `#8b93a3`   | Muted text             |
| `--accent`                 | `175 45% 55%`   | `#4dbfb3`   | Accent (teal)          |
| `--accent-foreground`      | `220 20% 12%`   | `#181d26`   | Text on accent         |
| `--destructive`            | `0 62.8% 30.6%` | `#7f1d1d`   | Error/destructive      |
| `--destructive-foreground` | `40 20% 95%`    | `#f4f2ef`   | Text on destructive    |
| `--border`                 | `220 15% 22%`   | `#2f3545`   | Borders                |
| `--input`                  | `220 15% 20%`   | `#2b3040`   | Input backgrounds      |
| `--ring`                   | `175 45% 55%`   | `#4dbfb3`   | Focus ring (teal)      |

---

## Typography

### Font Import

```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");
```

### Font Family

```css
font-family: "Outfit", sans-serif;
```

### Font Weights

| Weight | Name     | Usage                           |
| ------ | -------- | ------------------------------- |
| 300    | Light    | Subtle text, large display text |
| 400    | Regular  | Body text                       |
| 500    | Medium   | UI elements, labels             |
| 600    | Semibold | Subheadings, card titles        |
| 700    | Bold     | Headings, hero text             |

### Type Scale (Tailwind Classes)

| Element          | Mobile      | Tablet (md) | Desktop (lg) |
| ---------------- | ----------- | ----------- | ------------ |
| Hero Headline    | `text-3xl`  | `text-5xl`  | `text-6xl`   |
| Section Headline | `text-3xl`  | `text-4xl`  | `text-5xl`   |
| Card Title       | `text-xl`   | `text-2xl`  | —            |
| Body Large       | `text-lg`   | `text-xl`   | —            |
| Body             | `text-base` | —           | —            |
| Small            | `text-sm`   | —           | —            |
| Tiny             | `text-xs`   | —           | —            |

### Text Rendering

```css
body {
  -webkit-font-smoothing: antialiased; /* via Tailwind's `antialiased` */
}
```

---

## Spacing & Layout

### Container

```
Max width:  1400px (2xl breakpoint)
Padding:    2rem (32px)
Centering:  auto margins
```

### Section Spacing

| Pattern                  | Classes              |
| ------------------------ | -------------------- |
| Section vertical padding | `py-24 md:py-32`     |
| Section horizontal pad   | `px-6`               |
| Content max width        | `max-w-6xl mx-auto`  |
| Component gaps (tight)   | `gap-4`              |
| Component gaps (normal)  | `gap-8` to `gap-12`  |
| Component gaps (wide)    | `gap-16` to `gap-20` |

---

## Shadows & Elevation

| Token           | Value                                | Usage                 |
| --------------- | ------------------------------------ | --------------------- |
| `--shadow-soft` | `0 4px 30px hsl(220 20% 25% / 0.06)` | Subtle surface lift   |
| `--shadow-card` | `0 8px 40px hsl(220 20% 25% / 0.08)` | Card hover / emphasis |

### Tailwind Utilities

```css
.shadow-soft {
  box-shadow: var(--shadow-soft);
}
.shadow-card {
  box-shadow: var(--shadow-card);
}
```

### Hover Shadow (Buttons)

```
hover:shadow-lg hover:shadow-primary/15   /* default button */
hover:shadow-xl hover:shadow-foreground/20 /* hero button */
```

---

## Gradients

### Multi-Color Gradient

```css
--gradient-multi: linear-gradient(
  135deg,
  hsl(175 40% 55%),
  /* Teal */ hsl(200 55% 60%),
  /* Sky */ hsl(260 45% 70%),
  /* Lavender */ hsl(340 50% 65%) /* Rose */
);
```

Used for: gradient text (`.text-gradient`), gradient borders (`.border-gradient`), decorative underlines.

### Subtle Background Gradient

```css
--gradient-subtle: linear-gradient(
  180deg,
  hsl(40 30% 97%),
  /* Background */ hsl(40 25% 94%) /* Slightly deeper warm */
);
```

Used for: hero section background (`.bg-milky`).

---

## Border Radius

| Token      | Value                       | Pixels (approx.) |
| ---------- | --------------------------- | ---------------- |
| `--radius` | `0.75rem`                   | 12px             |
| `lg`       | `var(--radius)`             | 12px             |
| `md`       | `calc(var(--radius) - 2px)` | 10px             |
| `sm`       | `calc(var(--radius) - 4px)` | 8px              |

### Common Border Patterns

| Element        | Radius                        |
| -------------- | ----------------------------- |
| Buttons (base) | `rounded-lg`                  |
| Buttons (sm)   | `rounded-md`                  |
| Buttons (lg)   | `rounded-lg`                  |
| Buttons (xl)   | `rounded-xl`                  |
| Cards          | `rounded-lg` to `rounded-2xl` |
| Badges/Pills   | `rounded-full`                |
| Inputs         | `rounded-lg`                  |

---

## Button System

Built with **Class Variance Authority (CVA)** on top of Radix `Slot`.

### Base Styles (All Buttons)

```
inline-flex items-center justify-center gap-2
whitespace-nowrap rounded-lg text-sm font-medium
ring-offset-background transition-all duration-300
focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-ring focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

### Variants

| Variant        | Styles                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `default`      | `bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15`                                |
| `destructive`  | `bg-destructive text-destructive-foreground hover:bg-destructive/90`                                                            |
| `outline`      | `border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50`                                |
| `secondary`    | `bg-secondary text-secondary-foreground hover:bg-secondary/80`                                                                  |
| `ghost`        | `hover:bg-secondary hover:text-foreground`                                                                                      |
| `link`         | `text-primary underline-offset-4 hover:underline`                                                                               |
| `hero`         | `bg-foreground text-background font-semibold hover:shadow-xl hover:shadow-foreground/20 hover:scale-[1.02] active:scale-[0.98]` |
| `hero-outline` | `border-2 border-foreground/30 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/50 font-semibold`   |

### Sizes

| Size      | Classes                          |
| --------- | -------------------------------- |
| `default` | `h-10 px-4 py-2`                 |
| `sm`      | `h-9 rounded-md px-3`            |
| `lg`      | `h-12 rounded-lg px-8 text-base` |
| `xl`      | `h-14 rounded-xl px-10 text-lg`  |
| `icon`    | `h-10 w-10`                      |

---

## Card System

### Base Card

```
rounded-lg border bg-card text-card-foreground shadow-sm
```

### Card Sub-Components

| Part             | Classes                                              |
| ---------------- | ---------------------------------------------------- |
| Card Header      | `flex flex-col space-y-1.5 p-6`                      |
| Card Title       | `text-2xl font-semibold leading-none tracking-tight` |
| Card Description | `text-sm text-muted-foreground`                      |
| Card Content     | `p-6 pt-0`                                           |
| Card Footer      | `flex items-center p-6 pt-0`                         |

### Emphasis Card (EOMA branded)

```
bg-card border-2 border-teal/30 rounded-2xl p-8 md:p-12 shadow-card
/* + gradient background overlay */
```

---

## Input & Form Styles

### Input

```
h-12 rounded-lg border bg-secondary/50 px-4 py-2 text-base
transition-all duration-300
focus: ring-2 ring-primary border-primary/50
```

### Form Elements

| Part             | Classes                                |
| ---------------- | -------------------------------------- |
| Form Item        | `space-y-2`                            |
| Form Description | `text-sm text-muted-foreground`        |
| Form Message     | `text-sm font-medium text-destructive` |

---

## Accent Color Palette

Seven **matte pastel** accent colors used across sections for visual diversity.

| Name     | CSS Variable       | HSL Value     | Hex Approx. | Usage Context              |
| -------- | ------------------ | ------------- | ----------- | -------------------------- |
| Teal     | `--color-teal`     | `175 40% 55%` | `#53b3a8`   | EOMA brand accent, CTAs    |
| Coral    | `--color-coral`    | `15 70% 65%`  | `#d98060`   | Warnings, tool highlights  |
| Lavender | `--color-lavender` | `260 45% 70%` | `#9d85c9`   | Section dividers, paradigm |
| Mint     | `--color-mint`     | `150 40% 60%` | `#6dbf8f`   | Success, growth indicators |
| Peach    | `--color-peach`    | `25 75% 70%`  | `#e8a56b`   | Warmth, people-focused     |
| Sky      | `--color-sky`      | `200 55% 60%` | `#5ea3cc`   | Information, tech layer    |
| Rose     | `--color-rose`     | `340 50% 65%` | `#cc6b8f`   | Attention, highlights      |

### Color Utility Classes

```css
/* Background colors */
.line-teal {
  background-color: hsl(var(--color-teal));
}
.line-coral {
  background-color: hsl(var(--color-coral));
}
.line-lavender {
  background-color: hsl(var(--color-lavender));
}
.line-mint {
  background-color: hsl(var(--color-mint));
}
.line-peach {
  background-color: hsl(var(--color-peach));
}
.line-sky {
  background-color: hsl(var(--color-sky));
}
.line-rose {
  background-color: hsl(var(--color-rose));
}

/* Text colors */
.text-teal {
  color: hsl(var(--color-teal));
}
.text-coral {
  color: hsl(var(--color-coral));
}
.text-lavender {
  color: hsl(var(--color-lavender));
}
.text-mint {
  color: hsl(var(--color-mint));
}
.text-peach {
  color: hsl(var(--color-peach));
}
.text-sky {
  color: hsl(var(--color-sky));
}
.text-rose {
  color: hsl(var(--color-rose));
}
```

---

## Custom Utility Classes

| Class              | Effect                                 |
| ------------------ | -------------------------------------- |
| `.text-gradient`   | Gradient text using `--gradient-multi` |
| `.border-gradient` | Gradient border using `border-image`   |
| `.bg-milky`        | Subtle vertical background gradient    |
| `.shadow-soft`     | Light elevation shadow                 |
| `.shadow-card`     | Pronounced card shadow                 |

---

## Animation & Motion

### Library: Framer Motion

| Pattern          | Config                                          |
| ---------------- | ----------------------------------------------- |
| Section entrance | `opacity: 0 → 1`, `y: 30 → 0`                   |
| Stagger children | Sequential `delay` increments (0.1s–0.2s steps) |
| Trigger          | `useInView` with `once: true`                   |
| Duration         | `0.6s` – `0.8s`                                 |
| Easing           | `easeOut`                                       |

### CSS Keyframe Animations

```css
/* Accordion expand/collapse */
accordion-down: height 0 → var(--radix-accordion-content-height), 0.2s ease-out
accordion-up:   height var(--radix-accordion-content-height) → 0, 0.2s ease-out
```

### Interaction Micro-Animations

| Element         | Effect                                   |
| --------------- | ---------------------------------------- |
| Hero button     | `hover:scale-[1.02] active:scale-[0.98]` |
| Cards           | `hover:-translate-y-1 hover:shadow-card` |
| All transitions | `transition-all duration-300`            |

---

## Responsive Breakpoints

Standard Tailwind breakpoints with notable layout shifts:

| Breakpoint | Width   | Key Changes                                |
| ---------- | ------- | ------------------------------------------ |
| Base       | 0px+    | Single column, compact spacing             |
| `sm`       | 640px+  | Form row layout, 2-column grids            |
| `md`       | 768px+  | Major layout changes, larger typography    |
| `lg`       | 1024px+ | Full desktop layout, side-by-side sections |
| `2xl`      | 1400px+ | Max container width cap                    |

---

## Scrollbar Styling

```css
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}
```

---

## Section-Level Design Patterns

### Hero Section

- Background: `.bg-milky` (subtle gradient)
- Decorative colorful horizontal + vertical lines with varying opacity
- Logo: `h-20 md:h-28`
- Tagline badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border`
- Headline: `text-3xl md:text-5xl lg:text-6xl font-bold`
- Colorful underline: `h-1 w-32` with multi-segment color blocks
- CTA: `variant="hero"` + `variant="hero-outline"`, `size="xl"`

### Problem Section

- Tool cards: `bg-card border border-border rounded-xl p-4 md:p-6`
- EOMA emphasis card: `bg-card border-2 border-teal/30 rounded-2xl p-8 md:p-12 shadow-card`
- Each tool has a unique accent color (teal, coral, lavender, mint, sky, rose)

### Paradigm Section

- Background: `bg-card`
- Decorative dividers: `h-[1px]` colored lines at `opacity-20`
- Section badge: `rounded-full bg-background border`
- Old/New comparison cards: `rounded-2xl p-6 md:p-8`
- New way card gets `border-2 border-teal/30` + gradient overlay

### Layer Section

- Alternating layout (content left/right via `isReversed` prop)
- Feature lists with colored indicator dots
- Visual container: `bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card`

### Use Cases Section

- Cards: `bg-card border rounded-2xl p-6 md:p-8`
- Colored accent bar: `h-1 w-full` using CSS variable colors
- Icon containers: `bg-{color}/10 p-4 rounded-xl`

### Integrations Section

- Background: `bg-card`
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6`
- Items: `bg-background border border-border rounded-xl p-4` with hover effects

### Blog Section

- Post cards: `rounded-xl border border-border bg-card p-6`
- Color accent bar: `h-1 w-12 rounded-full`
- Hover: `shadow-card -translate-y-1`

### Waitlist/CTA Section

- Decorative blur elements in background
- Form container: `max-w-3xl mx-auto text-center`
- Form: `flex flex-col sm:flex-row gap-4`

### Footer

- Background: `bg-card`
- Top border: `border-t border-border`
- Colorful divider: `h-1 w-24` with four accent color segments

---

## Brand Assets

| Asset      | Path                        | Size    |
| ---------- | --------------------------- | ------- |
| Full Logo  | `src/assets/eoma-logo.png`  | ~105 KB |
| Tight Logo | `src/assets/logo_tight.png` | ~42 KB  |

### PWA / Favicon

- Located in `/public/` directory
- Manifest background: `#f7f5f2`

---

## Tech Stack

| Layer            | Technology                                           |
| ---------------- | ---------------------------------------------------- |
| Framework        | React + TypeScript (Vite)                            |
| Styling          | Tailwind CSS v3 + CSS Custom Properties              |
| Component System | Radix UI Primitives + CVA (class-variance-authority) |
| Animation        | Framer Motion                                        |
| Icons            | Lucide React                                         |
| Typography       | `@tailwindcss/typography` plugin                     |
| Animation Utils  | `tailwindcss-animate` plugin                         |
| Routing          | React Router                                         |
| Utility          | `clsx` + `tailwind-merge` (via `cn()` helper)        |

---

## Quick Reference: CSS Variables (Copy-Paste)

```css
:root {
  /* Core palette */
  --background: 40 30% 97%;
  --foreground: 220 20% 25%;
  --card: 40 25% 95%;
  --card-foreground: 220 20% 25%;
  --primary: 220 25% 45%;
  --primary-foreground: 40 30% 97%;
  --secondary: 40 20% 92%;
  --secondary-foreground: 220 20% 30%;
  --muted: 40 15% 90%;
  --muted-foreground: 220 15% 50%;
  --accent: 175 45% 55%;
  --accent-foreground: 40 30% 97%;
  --destructive: 0 65% 55%;
  --destructive-foreground: 40 30% 97%;
  --border: 40 20% 88%;
  --input: 40 20% 90%;
  --ring: 220 25% 45%;
  --radius: 0.75rem;

  /* Accent palette */
  --color-teal: 175 40% 55%;
  --color-coral: 15 70% 65%;
  --color-lavender: 260 45% 70%;
  --color-mint: 150 40% 60%;
  --color-peach: 25 75% 70%;
  --color-sky: 200 55% 60%;
  --color-rose: 340 50% 65%;

  /* Gradients */
  --gradient-multi: linear-gradient(
    135deg,
    hsl(175 40% 55%),
    hsl(200 55% 60%),
    hsl(260 45% 70%),
    hsl(340 50% 65%)
  );
  --gradient-subtle: linear-gradient(180deg, hsl(40 30% 97%), hsl(40 25% 94%));

  /* Shadows */
  --shadow-soft: 0 4px 30px hsl(220 20% 25% / 0.06);
  --shadow-card: 0 8px 40px hsl(220 20% 25% / 0.08);
}
```
