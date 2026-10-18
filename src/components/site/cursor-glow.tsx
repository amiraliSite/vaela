'use client'

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * Soft glow that follows the cursor on desktop only.
 * Hidden on touch devices to avoid stray visuals.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = React.useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.5 })

  React.useEffect(() => {
    // disable on touch / small screens
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)")
    setEnabled(mq.matches)
  }, [])

  React.useEffect(() => {
    if (!enabled) return
    const handler = (e: MouseEvent) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
      }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[80px]"
    />
  )
}
