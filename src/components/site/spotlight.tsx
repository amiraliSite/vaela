'use client'

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { formatToman } from "@/lib/data"
import { Check } from "lucide-react"

const annotations = [
  { top: "22%", left: "8%", label: "چرم گاوی ۲٫۲ میلی‌متری", side: "right" as const },
  { top: "55%", left: "78%", label: "زیپ YKK ضدزنگ", side: "left" as const },
  { top: "80%", left: "15%", label: "پایه دوخته‌دوگانه", side: "right" as const },
]

const specs = [
  "بدنه ضدآب با پوشش DWR",
  "بخش لپ‌تاپ تا ۱۶ اینچ",
  "جیب مخفی ضدسرقت",
  "بند قفسه سینه‌ی دو وضعیتی",
]

export function Spotlight() {
  const ref = React.useRef<HTMLDivElement>(null)
  const imgWrapRef = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ["start end", "end start"],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2])

  return (
    <section
      id="spotlight"
      ref={ref}
      className="relative overflow-hidden bg-card/30 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image side */}
        <div ref={imgWrapRef} className="relative">
          <motion.div
            style={{ y: imgY, scale: imgScale, rotate }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/40"
          >
            <img
              src="https://images.unsplash.com/photo-1622560455234-0c8437613c8b?auto=format&fit=crop&w=1000&q=80"
              alt="کوله اورا تریپ"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          {/* Annotations */}
          {annotations.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
              className="absolute z-10"
              style={{ top: a.top, left: a.left }}
            >
              <div className="flex items-center gap-2">
                {a.side === "left" && (
                  <span className="whitespace-nowrap rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                    {a.label}
                  </span>
                )}
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="relative flex h-3 w-3 items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span className="absolute -inset-1 rounded-full border border-accent/60" />
                </motion.span>
                {a.side === "right" && (
                  <span className="whitespace-nowrap rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                    {a.label}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Floating price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-4 right-4 rounded-2xl border border-border/50 bg-background px-4 py-3 shadow-xl"
          >
            <div className="text-[10px] text-foreground/50">شروع از</div>
            <div className="text-lg font-bold">
              {formatToman(7_900_000)} <span className="text-xs font-normal">ت</span>
            </div>
          </motion.div>
        </div>

        {/* Copy side */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-accent"
          >
            ۰۲ — محصول ویژه
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            اورا تریپ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 font-mono text-sm text-foreground/60"
          >
            AURA TRIP — ۴۰L Travel Pack
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-md text-base leading-relaxed text-foreground/70"
          >
            کوله‌ای که برای سفرهای طولانی طراحی شده. ۴۰ لیتر گنجایش، بخش جداگانه
            کفش، بدنه ضدآب و بند قفسه‌ای که در ۶۰ ثانیه به کیف دستی تبدیل می‌شه.
            همراه هر سفر، هر آب‌وهوا، هر فصل.
          </motion.p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specs.map((s, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {s}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3"
            >
              افزودن به سبد
            </a>
            <a
              href="#lookbook"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground/80 hover:border-accent hover:text-accent"
            >
              دیدن در لوک‌بوک
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
