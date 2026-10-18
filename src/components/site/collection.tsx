'use client'

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { products, formatToman, type Product } from "@/lib/data"
import { Plus } from "lucide-react"

function ProductCard({ p, i }: { p: Product; i: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // tilt state
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: py * -8, y: px * 8 })
  }
  const onLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group perspective-1000"
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.3s ease",
        }}
        className="preserve-3d relative overflow-hidden rounded-3xl border border-border/40 bg-card"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={p.image}
            alt={`${p.name} — ${p.color}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Tag */}
          {p.tag && (
            <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
              {p.tag}
            </span>
          )}

          {/* Quick add */}
          <button
            className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 backdrop-blur transition-all duration-300 hover:bg-accent hover:text-accent-foreground group-hover:opacity-100"
            aria-label="افزودن به سبد"
            style={{ transform: "translateZ(40px)" }}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="font-bold tracking-tight">{p.name}</h3>
            <span className="font-mono text-xs text-foreground/50">{p.en}</span>
          </div>
          <p className="mb-3 text-xs text-foreground/60">{p.blurb}</p>

          <div className="flex items-center justify-between border-t border-border/40 pt-3">
            <div className="flex items-center gap-2">
              <span
                className="h-4 w-4 rounded-full border border-border/50"
                style={{ background: p.hex }}
                title={p.color}
              />
              <span className="text-xs text-foreground/70">{p.color}</span>
            </div>
            <div className="text-left">
              {p.oldPrice && (
                <div className="text-[10px] text-foreground/40 line-through">
                  {formatToman(p.oldPrice)} ت
                </div>
              )}
              <div className="text-sm font-bold">
                {formatToman(p.price)} <span className="text-xs font-normal">ت</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Collection() {
  return (
    <section id="collection" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              ۰۱ — کالکشن
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              قطعاتی که
              <br className="hidden sm:block" />
              <span className="text-foreground/40"> همراهت می‌شن.</span>
            </motion.h2>
          </div>
          <motion.a
            href="#lookbook"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="self-start text-sm text-foreground/60 underline-offset-4 hover:text-accent hover:underline sm:self-auto"
          >
            مشاهده‌ی همه‌ی محصولات ←
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
