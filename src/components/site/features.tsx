'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Leaf, Hand, ShieldCheck, Truck } from "lucide-react"

const icons = {
  leaf: Leaf,
  hand: Hand,
  shield: ShieldCheck,
  truck: Truck,
}

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-accent"
          >
            03 — Why VAELA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Beyond a bag.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-foreground/60"
          >
            We don't just make bags. We build a lasting companion for your
            journeys — one that gets better with age. That's our promise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "leaf" as const, title: "Vegetable-Tanned", desc: "Cowhide tanned with plant extracts, no heavy metals, 100% biodegradable." },
            { icon: "hand" as const, title: "Hand-Stitched", desc: "Every bag stitched by our craftspeople with double-stitched seams — built to resist tearing." },
            { icon: "shield" as const, title: "Lifetime Warranty", desc: "Any structural defect is repaired without time limit. Truly lifetime." },
            { icon: "truck" as const, title: "Free Shipping", desc: "Free shipping worldwide on orders over $300." },
          ].map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-6"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{f.desc}</p>

                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-foreground/30">
                  / {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
