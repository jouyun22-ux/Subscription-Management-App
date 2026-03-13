"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8"
      style={{
        background: "#111111",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "20px 32px",
      }}
    >
      <nav className="flex items-center gap-8">
        {(
          [
            { href: "#works", label: "Works" },
            { href: "#app", label: "App UX/UI" },
            { href: "#about", label: "About" },
          ] as { href: string; label: string }[]
        ).map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="transition-opacity duration-200"
            style={{
              fontSize: "13px",
              letterSpacing: "0.08em",
              fontWeight: 400,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
