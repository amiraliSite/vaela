'use client'

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Send, MapPin } from "lucide-react"

const cols = [
  {
    title: "محصولات",
    links: [
      { label: "کوله", href: "#" },
      { label: "کیف دوشی", href: "#" },
      { label: "متقاطع", href: "#" },
      { label: "محدود", href: "#" },
    ],
  },
  {
    title: "درباره",
    links: [
      { label: "داستان ما", href: "#features" },
      { label: "کارگاه", href: "#" },
      { label: "پایداری", href: "#" },
      { label: "تماس", href: "#" },
    ],
  },
  {
    title: "کمک",
    links: [
      { label: "ارسال و بازگشت", href: "#" },
      { label: "گارانش", href: "#" },
      { label: "راهنمای اندازه", href: "#" },
      { label: "سوال‌های متداول", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top brand row */}
        <div className="flex flex-col gap-8 border-b border-border/40 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50">
                <span className="font-mono text-sm font-bold text-accent">V</span>
              </span>
              <span className="text-lg font-bold tracking-[0.2em]">VAELA</span>
            </Link>
            <p className="mt-3 text-sm text-foreground/60">
              کوله و کیف دوشی پریمیوم، دست‌دوز از چرم طبیعی. ساخته‌شده با عشق
              در تهران.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-foreground/60">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span>تهران، خیابان فرشته</span>
            </div>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {[Instagram, Twitter, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-colors hover:border-accent hover:text-accent"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
                  {c.title}
                </h4>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-foreground/70 transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-foreground/50">
            © ۱۴۰۵ VAELA Studio — تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <Link href="#" className="hover:text-accent">حریم خصوصی</Link>
            <Link href="#" className="hover:text-accent">شرایط استفاده</Link>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="overflow-hidden px-4 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="select-none text-center"
        >
          <span className="block bg-gradient-to-b from-foreground/15 to-foreground/5 bg-clip-text text-[18vw] font-bold leading-none tracking-tighter text-transparent">
            VAELA
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
