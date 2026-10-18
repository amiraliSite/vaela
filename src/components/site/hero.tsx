'use client'

import * as React from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"

const headline = ["Travel", "with", "Grace"]

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.5 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax — image rises and shrinks slightly as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left — copy */}
        <motion.div
          style={{ y: textY }}
          className="order-2 lg:order-1 lg:col-span-7"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Spring 2025 Collection — Now Available</span>
          </motion.div>

          {/* Headline with reveal mask */}
          <h1 className="font-display font-bold leading-[0.95] tracking-tight">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              {headline.map((w, i) => (
                <span
                  key={i}
                  className="mr-4 inline-block overflow-hidden align-bottom"
                  style={{ paddingBottom: "0.1em" }}
                >
                  <motion.span
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="mt-2 block overflow-hidden text-3xl sm:text-5xl lg:text-6xl">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-mono font-light text-accent"
              >
                VAELA
              </motion.span>
            </span>
          </h1>

          {/* Sub */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-md text-base text-foreground/70 sm:text-lg"
          >
            Premium hand-stitched shoulder bags and backpacks in
            vegetable-tanned leather. Built in our workshop for journeys
            that last — like the leather itself.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:shadow-[0_8px_30px_-6px] hover:shadow-accent/50"
            >
              View Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#spotlight"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-8 border-t border-border/40 pt-6 text-sm"
          >
            {[
              { k: "15+ yrs", v: "Craft experience" },
              { k: "8,500+", v: "Bags delivered" },
              { k: "4.9 / 5", v: "Average rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-xl font-bold text-foreground">{s.k}</div>
                <div className="text-xs text-foreground/60">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating image */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* glow frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-2xl" />

            {/* main image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="grain-bg relative h-full w-full overflow-hidden rounded-[2rem] border border-border/40"
            >
              <img
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/794384051c4e.jpg"
                alt="Premium VAELA leather backpack"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating chip — top */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 top-8 hidden rounded-2xl border border-border/40 bg-card/80 p-3 backdrop-blur-xl sm:block"
            >
              <div className="text-[10px] uppercase tracking-widest text-foreground/50">
                Material
              </div>
              <div className="text-sm font-bold">Hand-stitched cowhide</div>
            </motion.div>

            {/* Floating chip — bottom */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 bottom-12 hidden rounded-2xl border border-border/40 bg-card/80 p-3 backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#7a2f24", "#b88a5a", "#2a2522"].map((c) => (
                    <span
                      key={c}
                      className="h-6 w-6 rounded-full border-2 border-background"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="text-sm font-bold">+24 colors</div>
              </div>
              <div className="text-[10px] text-foreground/50">Seasonal palette</div>
            </motion.div>

            {/* Floating chip — price */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold backdrop-blur"
            >
              From $275
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-foreground/50"
      >
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
