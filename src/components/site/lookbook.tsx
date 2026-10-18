'use client'

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { lookbook } from "@/lib/data"

export function Lookbook() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // horizontal pan as user scrolls vertically through this section.
  // LTR reading: items are arranged left-to-right; content pans left to reveal later items.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  return (
    <section
      id="lookbook"
      ref={ref}
      className="relative h-[260vh] py-20 sm:py-28"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                04 — Lookbook
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Our seasons
              </h2>
            </div>
            <span className="hidden text-sm text-foreground/50 sm:block">
              Scroll →
            </span>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="relative mt-8 flex flex-1 items-center">
          <motion.div style={{ x }} className="flex gap-6 px-4 will-change-transform sm:px-6 lg:px-8">
            {lookbook.map((item, i) => (
              <article
                key={item.id}
                className="group relative h-[60vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl border border-border/40 sm:w-[55vw] lg:w-[40vw]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")} — {item.tone}
                  </div>
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{item.caption}</p>
                </div>

                {/* corner mark */}
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-background/60 text-xs backdrop-blur">
                  ✦
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
