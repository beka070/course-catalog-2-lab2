# Course Catalog

A course catalog web application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** for the Advanced Web Technologies course.

## What's implemented

- **4 routes**: `/`, `/about`, `/courses`, `/courses/[id]`
- **Server Components** for all pages and the `CourseCard` component
- **Client Component** — `LikeButton` (interactivity) and `NavBar` (active link detection)
- **Dynamic route** `/courses/[id]` with `generateStaticParams` for static generation
- **`loading.tsx`** — shows a loading indicator during the 300ms simulated delay
- **`not-found.tsx`** — shown when a course ID doesn't exist (e.g. `/courses/does-not-exist`)
- **Navigation** in `layout.tsx` shared across all pages
- Mock data in `lib/courses.ts` simulating a backend with a 300ms delay

## Lab 2 — Styling with Tailwind CSS and shadcn/ui

- Installed **shadcn/ui** and added `Card` and `Button` components
- Rewrote `CourseCard` using `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `Button` — no bare `div` or `button` elements remain
- Responsive course grid: **1 column** on mobile → **2 columns** on tablet (sm) → **3 columns** on desktop (lg) → **4 columns** on wide screens (xl)
- Cards have a subtle **hover shadow + sky-blue border** effect
- Navigation styled with padding, hover states, and an **active link highlight** (sky-blue)
- **Dark mode** support following the system preference — works on `CourseCard`, `NavBar`, and the page background
- Custom accent color (`sky-accent`) added via `tailwind.config.ts`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
