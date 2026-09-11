# Course Catalog

A course catalog web application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** for the Advanced Web Technologies course — Lab 1.

## What's implemented

- **4 routes**: `/`, `/about`, `/courses`, `/courses/[id]`
- **Server Components** for all pages and the `CourseCard` component
- **Client Component** — `LikeButton` (the only file with `'use client'`)
- **Dynamic route** `/courses/[id]` with `generateStaticParams` for static generation
- **`loading.tsx`** — shows a loading indicator during the 300ms simulated delay
- **`not-found.tsx`** — shown when a course ID doesn't exist (e.g. `/courses/does-not-exist`)
- **Navigation** in `layout.tsx` shared across all pages
- Mock data in `lib/courses.ts` simulating a backend with a 300ms delay

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
