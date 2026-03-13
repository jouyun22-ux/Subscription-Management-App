"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    index: "01",
    category: "Product Design",
    title: "Subscription Management App",
    tags: ["UX Research", "UI Design", "Prototype"],
    year: "2024",
    description:
      "End-to-end UX/UI design for a subscription management platform — user flows, component system, and high-fidelity prototypes.",
  },
  {
    index: "02",
    category: "UX Design",
    title: "Project Title",
    tags: ["User Research", "Wireframe", "Testing"],
    year: "2024",
    description:
      "Placeholder — replace with your actual project description.",
  },
  {
    index: "03",
    category: "UI System",
    title: "Project Title",
    tags: ["Design System", "Components", "Tokens"],
    year: "2023",
    description:
      "Placeholder — replace with your actual project description.",
  },
];

function ProjectCard({ project, i }: { project: (typeof projects)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col justify-between border-t pt-6 pb-8 cursor-pointer"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Hover background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
        style={{ background: "var(--bg-surface)" }}
      />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-[10px] tracking-widest font-medium"
            style={{ color: "var(--text-tertiary)" }}
          >
            {project.index}
          </span>
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "var(--text-tertiary)" }}
          >
            {project.year}
          </span>
        </div>

        {/* Category */}
        <p
          className="text-xs tracking-[0.15em] uppercase mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="text-2xl font-bold leading-tight mb-4 transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Tags + arrow */}
      <div className="relative z-10 flex items-end justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-[10px] tracking-widest uppercase"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{ color: "var(--text-tertiary)" }}
        >
          ↗
        </span>
      </div>
    </motion.article>
  );
}

export function WorksSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="works" className="px-8 py-24">
      {/* Section header */}
      <div ref={headerRef} className="flex items-baseline justify-between mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-tertiary)" }}
        >
          01
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-black tracking-tight leading-none"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            color: "var(--text-primary)",
          }}
        >
          Works
        </motion.h2>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.index} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
