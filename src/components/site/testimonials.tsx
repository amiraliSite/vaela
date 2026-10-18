'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/lib/data"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [i, setI] = React.useState(0)
  const next = React.useCallback(() => setI((v) => (v + 1) % testimonials.length), [])
  const prev = React.useCallback(() => setI((v) => (v - 1 + testimonials.length) % testimonials.length), [])

  // autoplay
  React.useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next])

  const t = testimonials[i]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-border/40 bg-card/30 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            05 — Voices
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            What customers say
          </h2>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="mb-4 h-8 w-8 text-accent" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div className="text-left">
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-foreground/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 hover:border-accent hover:text-accent"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: idx === i ? "24px" : "8px",
                  background: idx === i ? "var(--accent)" : "color-mix(in oklab, var(--foreground) 30%, transparent)",
                }}
                aria-label={`Voice ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 hover:border-accent hover:text-accent"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
