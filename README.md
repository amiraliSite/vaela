# VAELA — Premium Leather Bags & Backpacks

> Travel with Grace. Premium hand-stitched shoulder bags & backpacks in vegetable-tanned leather.

A premium single-page marketing site for a fictional leather-goods brand. Built with a focus on motion design, scroll-driven storytelling, and editorial typography.

## ✦ Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Motion**: Framer Motion 12
- **Theme**: `next-themes` (dark/light)
- **Toasts**: `sonner`
- **Icons**: `lucide-react`
- **UI**: `shadcn/ui` (New York)

## ✦ Typography (external CDN)

Loaded via `<link>` from Google Fonts in `src/app/layout.tsx`:

| Role | Font | Use |
|------|------|-----|
| Display | **Fraunces** (variable, optical-sized) | Headings (`h1`–`h3`, `.font-display`) |
| Body | **Inter** | Body copy |
| Mono | **JetBrains Mono** | Eyebrows, accents, prices |

## ✦ Sections (all on `/`)

1. **Navbar** — transparent → solid on scroll, theme toggle
2. **Hero** — letter-by-letter headline reveal, parallax product image, floating chips
3. **Marquee** — infinite brand qualities strip
4. **Collection** — 6 products with 3D-tilt hover cards
5. **Spotlight** — Featured "Aura Trip" with pulsing annotations & scroll-driven parallax
6. **Features** — 4 brand pillars with scroll-staggered reveal
7. **Lookbook** — horizontal pan gallery (sticky + scroll-linked)
8. **Testimonials** — auto-playing carousel
9. **CTA** — newsletter form with toast confirmation
10. **Footer** — sticky, with giant gradient wordmark

## ✦ Getting started

```bash
bun install
bun run dev
# → http://localhost:3000
```

Set `DATABASE_URL` in `.env` (Prisma uses SQLite by default):

```
DATABASE_URL=file:./db/custom.db
```

## ✦ Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, theme provider
│  ├─ page.tsx          # composes all sections
│  └─ globals.css       # warm "leather" theme tokens
├─ components/
│  ├─ site/             # all VAELA-specific sections
│  │  ├─ navbar.tsx
│  │  ├─ hero.tsx
│  │  ├─ marquee.tsx
│  │  ├─ collection.tsx
│  │  ├─ spotlight.tsx
│  │  ├─ features.tsx
│  │  ├─ lookbook.tsx
│  │  ├─ testimonials.tsx
│  │  ├─ cta.tsx
│  │  ├─ footer.tsx
│  │  ├─ theme-provider.tsx
│  │  ├─ theme-toggle.tsx
│  │  ├─ scroll-progress.tsx
│  │  ├─ cursor-glow.tsx
│  │  └─ back-to-top.tsx
│  └─ ui/               # shadcn/ui components
└─ lib/
   ├─ data.ts           # products, testimonials, lookbook, features
   └─ utils.ts
```

## ✦ License

MIT — built as a portfolio piece. Use freely.
