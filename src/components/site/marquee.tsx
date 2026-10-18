'use client'

const items = [
  "Vegetable-Tanned",
  "Hand-Stitched",
  "Lifetime Warranty",
  "Free Shipping",
  "Free Repairs",
  "Crafted Slowly",
]

export function Marquee() {
  // duplicate the list so the animation loops seamlessly
  const loop = [...items, ...items]
  return (
    <section
      id="marquee"
      className="relative border-y border-border/40 bg-card/30 py-4"
      aria-label="Brand qualities"
    >
      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee gap-12">
          {loop.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-foreground/60"
            >
              <span>{t}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
