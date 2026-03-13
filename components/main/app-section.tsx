"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AppSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="app" className="px-8 py-24">
      {/* Top divider */}
      <div className="h-px w-full mb-16" style={{ background: "var(--border)" }} />

      {/* Section header */}
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-tertiary)" }}
        >
          02
        </span>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-black tracking-tight leading-none"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--text-primary)",
          }}
        >
          App UX/UI
        </motion.h2>
      </div>

      {/* In-progress card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm"
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-surface)",
          minHeight: "40vh",
        }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 20%, var(--bg-surface) 80%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[40vh] flex-col items-center justify-center p-16 text-center">
          {/* Pulsing dot */}
          <div className="relative mb-8">
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <div
              className="relative h-3 w-3 rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </div>

          <p
            className="mb-2 text-xs tracking-[0.4em] uppercase font-medium"
            style={{ color: "var(--accent)" }}
          >
            In Progress
          </p>

          <h3
            className="mb-4 font-black tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              color: "var(--text-primary)",
            }}
          >
            Something is being crafted.
          </h3>

          <p
            className="max-w-md text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            New app UX/UI work is currently in production.
            <br />
            Check back soon — it&apos;ll be worth the wait.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
