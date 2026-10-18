'use client'

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { toast } from "sonner"
import { Send } from "lucide-react"

export function CTA() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const [email, setEmail] = React.useState("")
  const [busy, setBusy] = React.useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      toast.error("یه ایمیل معتبر وارد کن")
      return
    }
    setBusy(true)
    // simulate request
    await new Promise((r) => setTimeout(r, 700))
    toast.success("ماله شد! به جمع ما خوش اومدی.")
    setEmail("")
    setBusy(false)
  }

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
      </motion.div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-background/70 p-8 backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            ۰۶ — خبرنامه
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            اولین نفری باش که
            <br />
            <span className="text-accent">کالکشن جدید رو می‌بینه.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-foreground/70">
            هر ماه یه نامه با اتمسفر برند، داستان پشت محصول، و کد تخفیف ویژه
            برای مشترکین. بدون اسپم، قول می‌دم.
          </p>

          <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیلت..."
              className="h-12 flex-1 rounded-full border border-border/60 bg-background/80 px-5 text-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-accent"
              aria-label="ایمیل"
            />
            <button
              type="submit"
              disabled={busy}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 disabled:opacity-50"
            >
              {busy ? "صبر کن..." : "عضو شو"}
              <Send className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-foreground/50">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              بدون اسپم
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              لغو هر زمان
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ۱۲٬۴۰۰ عضو فعال
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
