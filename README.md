# Portfolio

A modern, performant portfolio built with **Next.js 15**, **React 18**, and **TypeScript**.

## 🎯 Key Features

- **Server-Rendered Layouts** – Optimized initial page load with Next.js App Router
- **Type-Safe Components** – Fully typed with TypeScript for developer confidence
- **Responsive Design** – Mobile-first CSS with semantic media queries
- **Dark/Light Theme** – Client-side theme toggle with localStorage persistence
- **Scroll Reveal Animations** – Intersection Observer-based reveal animations
- **Performance Optimized** – Minimal JavaScript, CSS modules, SWC minification
- **Accessible HTML** – Semantic markup with ARIA labels
- **Modern Stack** – ESM modules, strict TypeScript, sensible defaults

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page composition
│   ├── page.module.css     # Page-specific styles
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── *.module.css        # Component-scoped styles
├── data/
│   ├── types.ts            # TypeScript type definitions
│   └── portfolioData.ts    # Portfolio content
└── hooks/
    ├── useTheme.ts         # Theme management hook
    └── useReveal.ts        # Scroll reveal hook
```

## 🎨 Design Tokens

CSS custom properties are defined in `globals.css`:

- **Colors** – `--bg`, `--text-main`, `--accent`, etc.
- **Spacing** – Consistent gaps and padding
- **Shadows** – `--shadow-soft` for depth
- **Radii** – `--radius-lg`, `--radius-full`

Supports **light** and **dark** themes via `[data-theme="light/dark"]`.

## ⚙️ Senior Developer Patterns

1. **Type Safety** – No `any` types; full TypeScript coverage
2. **Component Composition** – Small, focused, reusable components
3. **Hook Patterns** – Custom hooks for cross-cutting concerns (theme, reveal)
4. **SSR Safety** – Hydration mismatch prevention in `useTheme`
5. **Semantic CSS** – Scoped modules prevent style conflicts
6. **Accessibility** – ARIA labels, semantic HTML, keyboard support
7. **Performance** – Client components only where needed, minimal re-renders
8. **Code Organization** – Clear separation of concerns (data, hooks, components)

## 🔧 Technologies

- **Next.js 15** – React framework with App Router
- **React 18** – UI library with hooks
- **TypeScript 5** – Type safety and tooling
- **CSS Modules** – Scoped component styles
- **Intersection Observer API** – Scroll reveal animations

## 📝 License

MIT
