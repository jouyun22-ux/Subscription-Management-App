"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-between px-8 pt-28 pb-10 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Grid line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Center readability overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        {/* Sub label */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            fontWeight: 400,
            color: "#666666",
            textTransform: "uppercase",
          }}
        >
          UX / UI Designer · Product Thinker
        </motion.p>

        {/* Main headline — one line */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-baseline justify-center gap-3 mb-8"
        >
          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 56px)",
              fontWeight: 400,
              color: "#cccccc",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            경계 없이 만드는
          </h1>
          <div
            style={{
              fontSize: "clamp(34px, 5.5vw, 56px)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <Typewriter
              text={["디자이너", "엔지니어", "크리에이터"]}
              speed={80}
              deleteSpeed={40}
              waitTime={2000}
              initialDelay={800}
              loop={true}
              cursorChar={<span style={{ fontWeight: 200, color: "#ffffff" }}>_</span>}
              hideCursorOnType={false}
              className="font-semibold text-white"
              cursorClassName="ml-0.5 text-white"
            />
          </div>
        </motion.div>

        {/* Sub copy */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            fontWeight: 400,
            color: "#bbbbbb",
          }}
        >
          문제를 정의하고, 경험을 설계하고, 화면으로 완성합니다.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 flex justify-center"
        style={{ color: "var(--text-tertiary)" }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-xs tracking-widest"
          >
            ↓
          </motion.div>
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
