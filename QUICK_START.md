# 🚀 Quick Reference Guide

## Start Here

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## File Tree with Purposes

```
src/
├── app/
│   ├── layout.tsx           → Root HTML structure + metadata (SERVER)
│   ├── page.tsx             → Homepage composition (CLIENT)
│   ├── globals.css          → CSS variables, theme tokens, global styles
│   └── page.module.css      → Grid layout for page
│
├── components/              → Reusable React components
│   ├── Navbar.tsx           → Header with theme toggle
│   ├── Hero.tsx             → Hero intro + chips
│   ├── Experience.tsx       → Work history
│   ├── Projects.tsx         → Project showcase
│   ├── Skills.tsx           → Tech skills with levels
│   ├── Education.tsx        → Education info
│   ├── Achievements.tsx     → Achievements/awards
│   ├── Contact.tsx          → Contact links
│   ├── Footer.tsx           → Footer
│   └── *.module.css         → Scoped styles for each component
│
├── data/
│   ├── types.ts             → TypeScript interfaces (Experience, Project, etc.)
│   └── portfolioData.ts     → All your content here! ⭐️
│
└── hooks/
    ├── useTheme.ts          → Theme state + localStorage
    └── useReveal.ts         → Scroll-reveal animations
```

---

## Common Tasks

### 🎨 Update Your Experience
**File:** `src/data/portfolioData.ts`

Find `experience: [ /* ... */ ]` and update:
```tsx
{
  id: 'comeon',
  role: 'Frontend Development',
  company: 'ComeOn Group',
  period: 'Sep 2025 – Present',
  points: [
    'Point 1',
    'Point 2',
  ],
}
```

### 🚀 Add a New Project
**File:** `src/data/portfolioData.ts`

Find `projects: [ /* ... */ ]` and add:
```tsx
{
  id: 'my-project',
  title: 'Project Name',
  badge: 'Badge text',
  description: 'Project description...',
  tags: ['React', 'TypeScript'],
}
```

### 🎯 Change Your Logo Color
**File:** `src/components/Navbar.module.css`

Find `.navLogo` and change `background: conic-gradient(...)` 

### 🌈 Change Theme Colors
**File:** `src/app/globals.css`

Edit `:root { }` section for dark mode:
```css
:root {
  --bg: #050816;
  --accent: #7c3aed;
  --text-main: #f9fafb;
  /* ... */
}
```

Edit `[data-theme='light']` for light mode colors.

### ✏️ Add New Section
**Pattern from Experience.tsx:**

1. Create `src/components/MySectionName.tsx`
2. Create `src/components/MySectionName.module.css`
3. Import and use in `src/app/page.tsx`

Example:
```tsx
// src/components/MySectionName.tsx
import styles from './MySectionName.module.css';
import { useReveal } from '@/hooks/useReveal';

export function MySectionName() {
  const { ref, isVisible } = useReveal();
  
  return (
    <section 
      ref={ref} 
      className={`${styles.card} ${isVisible ? styles.reveal : ''}`}
    >
      Content here
    </section>
  );
}
```

Then add to `page.tsx`:
```tsx
import { MySectionName } from '@/components/MySectionName';

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <MySectionName />
    </>
  );
}
```

---

## NPM Commands

```bash
npm run dev         # Start development server (hot reload)
npm run build       # Build for production
npm run start       # Start production server
npm run type-check  # Check TypeScript errors
npm run lint        # Check code style + errors
```

---

## Important Concepts

### `useReveal` Hook
Adds scroll reveal animations:
```tsx
const { ref, isVisible } = useReveal();
<section ref={ref} className={isVisible ? 'reveal' : ''}>
```

### `useTheme` Hook
Manages dark/light mode:
```tsx
const { theme, toggleTheme } = useTheme();
// theme = 'dark' or 'light'
// toggleTheme() = switch theme
```

### CSS Modules
Scoped styles prevent conflicts:
```tsx
// Navbar.tsx
import styles from './Navbar.module.css';
<div className={styles.navLogo}>M</div>

// Applies as: .Navbar_navLogo__xyz123 {...}
```

### TypeScript Types
See `src/data/types.ts` for all interfaces. Keep data in `portfolioData.ts` matching these types.

---

## Styling Guide

### Dark Mode (Default)
Uses `:root` CSS variables in `globals.css`

### Light Mode  
Uses `[data-theme='light']` overrides

### Component Styles
Each component in its own `.module.css` file

### Responsive
```css
@media (max-width: 900px) { /* Tablet */ }
@media (max-width: 640px) { /* Mobile */ }
```

---

## Component Props Reference

### Navbar
```tsx
<Navbar />  // No props needed - uses hooks
```

### Hero
```tsx
<Hero 
  title="Crafting reliable..."
  highlightText="frontend experiences"
  subtitle="I'm a frontend engineer..."
  currentRole="ComeOn Group · Frontend"
  previousRoles="Ex-Nielsen · InterviewBit"
  stats={['5+ years...']}
  chips={[...]}  // from portfolioData.hero.chips
/>
```

### Experience
```tsx
<Experience experiences={portfolioData.experience} />
```

### Projects
```tsx
<Projects projects={portfolioData.projects} />
```

### Skills
```tsx
<Skills skillGroups={portfolioData.skills} />
```

### Contact
```tsx
<Contact contacts={portfolioData.contact} />
```

---

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your repo
5. Deploy (automatic on every push)

### npm Package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## TypeScript Tips

All types in `src/data/types.ts`:

```tsx
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  tags?: string[];  // optional
}
```

Create new items matching these types - TypeScript will catch mistakes!

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers ✓

---

## Performance Tips

- ✅ CSS Modules = no unused CSS
- ✅ Next.js code splitting = smaller bundles
- ✅ Client components only where needed
- ✅ Images: use Next.js `<Image/>` (when added)

---

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npm run type-check
```

### Styling not applying
Check component.module.css exists and is imported.

### Theme not persisting
Check `useTheme` hook - localStorage needs to be enabled.

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Update `portfolioData.ts` with your content
4. ✅ Customize colors in `globals.css`
5. ✅ Deploy to Vercel
6. ✅ Add custom domain

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- See `DEVELOPMENT.md` for detailed patterns

---

**You're all set! Happy coding! 🎉**
