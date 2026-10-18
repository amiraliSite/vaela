'use client'

import * as React from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [show, setShow] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => {
    setShow(v > 600)
  })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_8px_30px_-6px] shadow-accent/60 hover:scale-110"
          aria-label="بازگشت به بالا"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
