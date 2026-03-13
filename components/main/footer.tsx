"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="px-8 py-16" ref={ref}>
      {/* Top divider */}
      <div className="h-px w-full mb-12" style={{ background: "var(--border)" }} />

      <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        {/* Left: availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Available for work
            </span>
          </div>
          <p
            className="text-xs leading-relaxed max-w-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to freelance projects and full-time opportunities.
            Let&apos;s build something great together.
          </p>
        </motion.div>

        {/* Right: links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-start gap-3 md:items-end"
        >
          <p
            className="text-[9px] tracking-widest uppercase mb-1"
            style={{ color: "var(--text-tertiary)" }}
          >
            Get in touch
          </p>
          {["Email", "LinkedIn", "GitHub"].map((link) => (
            <a
              key={link}
              href="#"
              className="group flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              <span
                className="h-px w-0 transition-all duration-300 group-hover:w-4"
                style={{ background: "currentColor", display: "inline-block" }}
              />
              {link}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex items-center justify-between">
        <p
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-tertiary)" }}
        >
          © 2025 Portfolio
        </p>
        <p
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-tertiary)" }}
        >
          UX / UI Designer
        </p>
      </div>
    </footer>
  );
}
