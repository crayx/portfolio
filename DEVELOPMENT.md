# Development Guide

## Project Overview

Your portfolio has been professionally converted from static HTML to a modern Next.js 15 application with full TypeScript support. This guide explains the architecture, patterns, and best practices used.

## Architecture Principles

### 1. **Component-Driven Architecture**
- Small, focused components with single responsibility
- Props-based composition for reusability
- CSS Modules for scope-isolated styles

Example component pattern:
```tsx
interface ComponentProps {
  data: DataType[];
  // Explicit props for clarity
}

export function Component({ data }: ComponentProps) {
  const { ref, isVisible } = useReveal();
  
  return (
    <section ref={ref} className={styles.section}>
      {/* Component markup */}
    </section>
  );
}
```

### 2. **Type Safety First**
- All components fully typed with TypeScript
- Shared types in `src/data/types.ts`
- No `any` types throughout codebase
- Strict compiler options enabled

### 3. **Server-Side Rendering (Layout)**
```tsx
// src/app/layout.tsx - Runs on server
export const metadata: Metadata = { /* ... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html>{children}</html>;
}
```

### 4. **Client-Side Interactivity (Page)**
```tsx
// src/app/page.tsx - 'use client' directive
'use client';

export default function Home() {
  return <main>{/* Components */}</main>;
}
```

## Core Patterns

### Hook Pattern: useTheme

**Purpose:** Theme management with SSR safety

**Key Implementation:**
- Initializes after mount to prevent hydration mismatch
- Persists preference to localStorage
- Updates DOM `data-theme` attribute
- Theme toggle button in Navbar

```tsx
const { theme, toggleTheme, isMounted } = useTheme();

if (!isMounted) return null; // Prevent hydration mismatch
```

### Hook Pattern: useReveal

**Purpose:** Scroll-triggered reveal animations

**Key Implementation:**
- Uses Intersection Observer API
- Observes element visibility
- Automatically unobserves after first reveal
- Adds `visible` class to trigger CSS transitions

```tsx
const { ref, isVisible } = useReveal();

<section ref={ref} className={isVisible ? styles.reveal : ''} />
```

## File Organization

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Server component, metadata
│   ├── page.tsx                 # Client component, composition
│   ├── globals.css              # Theme tokens, global styles
│   └── page.module.css          # Page-specific layout styles
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation + theme toggle
│   ├── Hero.tsx                 # Hero section with chips
│   ├── Experience.tsx           # Work history
│   ├── Projects.tsx             # Project showcase
│   ├── Skills.tsx               # Skill groups with levels
│   ├── Education.tsx            # Education info
│   ├── Achievements.tsx         # Beyond Code section
│   ├── Contact.tsx              # Contact links
│   ├── Footer.tsx               # Footer
│   └── *.module.css             # Scoped component styles
│
├── data/
│   ├── types.ts                 # TypeScript type definitions
│   └── portfolioData.ts         # Portfolio content (SEO-friendly)
│
└── hooks/
    ├── useTheme.ts              # Theme state management
    └── useReveal.ts             # Scroll reveal animations
```

## CSS Architecture

### Design Tokens (globals.css)

```css
:root {
  --bg: #050816;
  --accent: #7c3aed;
  --text-main: #f9fafb;
  /* ... */
}

[data-theme='light'] {
  /* Light theme overrides */
}
```

### Component Scoping (CSS Modules)

Each component has its own `.module.css`:

```css
/* Experience.module.css */
.sectionCard { /* Scoped to Experience component */ }
.experienceItem { /* No conflicts with other components */ }
```

**Benefits:**
- No style conflicts
- Easy refactoring
- Clear component boundaries
- Automatic BEM-like naming

### Responsive Design

```css
@media (max-width: 900px) {
  .sections {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .pageShell { padding: 16px 14px 60px; }
}
```

## Data Flow

### Content Management

All portfolio content lives in `src/data/portfolioData.ts`:

```tsx
// Single source of truth
const portfolioData: PortfolioData = {
  hero: { /* hero content */ },
  experience: [ /* array of experiences */ ],
  projects: [ /* array of projects */ ],
  skills: [ /* skill groups */ ],
  // ...
};

// Used in components
export function Home() {
  return (
    <Experience experiences={portfolioData.experience} />
  );
}
```

**Advantages:**
- SEO-friendly (content in source code)
- Easy updates without CMS
- Type-safe via TypeScript
- Easily migrated to CMS later

### Adding New Content

1. Update the type definition in `src/data/types.ts`
2. Add data to `src/data/portfolioData.ts`
3. Pass to component via props

Example:
```tsx
// types.ts
export interface Experience {
  id: string;
  role: string;
  company: string;
  points: string[];
}

// portfolioData.ts
export const portfolioData: PortfolioData = {
  experience: [
    {
      id: 'comeon',
      role: 'Frontend Development',
      company: 'ComeOn Group',
      points: ['Implemented APIs', 'Migrated to TypeScript'],
    }
  ]
};
```

## Performance Optimizations

### 1. **Image Optimization** (Future)
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image src="/avatar.jpg" alt="Meghna" width={400} height={400} />
```

### 2. **Code Splitting**
- Next.js automatically splits at route boundaries
- Components loaded on demand

### 3. **CSS Optimization**
- CSS Modules eliminate unused styles
- Minified in production (SWC)
- Critical CSS inlined

### 4. **Hydration Optimization**
- `useTheme` hook prevents hydration mismatch
- Careful `'use client'` placement

## Development Workflow

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Adding a New Section

1. Create component:
```tsx
// src/components/NewSection.tsx
import styles from './NewSection.module.css';
import { useReveal } from '@/hooks/useReveal';

export function NewSection({ data }) {
  const { ref, isVisible } = useReveal();
  
  return (
    <section ref={ref} className={isVisible ? styles.reveal : ''}>
      {/* Content */}
    </section>
  );
}
```

2. Add styles:
```css
/* src/components/NewSection.module.css */
.reveal { opacity: 1; transform: translateY(0); }
```

3. Add to page:
```tsx
// src/app/page.tsx
<NewSection data={portfolioData.newData} />
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Production Deployment

### Build

```bash
npm run build
npm run start
```

### Deployment Platforms

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Others:** Docker, Node.js hosting, static export

### environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility (A11y)

✅ Semantic HTML (`<header>`, `<nav>`, `<section>`, `<main>`)
✅ ARIA labels on interactive elements
✅ Keyboard navigation support
✅ Color contrast compliance
✅ Proper heading hierarchy

## SEO Optimizations

✅ Metadata in layout
✅ Semantic HTML structure
✅ Open Graph meta tags (can be added)
✅ Schema structured data (can be added)

## Testing (Optional Future Setup)

For E2E testing:
```bash
npm install --save-dev cypress
npx cypress open
```

For unit tests:
```bash
npm install --save-dev jest @testing-library/react
```

## Common Tasks

### Update Hero Section
Edit `src/data/portfolioData.ts` → `portfolioData.hero`

### Add New Experience
1. Update `src/data/types.ts` if needed
2. Add entry to `portfolioData.experience` array
3. Component automatically renders

### Change Colors
Edit CSS variables in `src/app/globals.css`

### Add New Page
Create `src/app/blog/page.tsx` and corresponding layout

## Debugging

### Browser DevTools
- React DevTools extension
- Network tab for API calls
- Performance tab for animations

### Server Logs
```bash
npm run dev
# Check terminal for errors
```

### Type Errors
```bash
npm run type-check
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

**Questions?** Check the well-commented source code or refer to official documentation.
