'use client'

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#collection", label: "کالکشن" },
  { href: "#spotlight", label: "محصول ویژه" },
  { href: "#features", label: "چرا VAELA؟" },
  { href: "#lookbook", label: "لوک‌بوک" },
  { href: "#testimonials", label: "تجربه‌ها" },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full border border-accent/50"
            />
            <span className="font-mono text-sm font-bold tracking-tight text-accent">
              V
            </span>
          </span>
          <span className="text-lg font-bold tracking-[0.2em]">
            VAELA
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
            >
              <Link
                href={l.href}
                className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 right-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            className="relative h-9 w-9 rounded-full"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              ۲
            </span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden h-9 w-9 rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label="منو"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/20 py-3 text-foreground/80 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
