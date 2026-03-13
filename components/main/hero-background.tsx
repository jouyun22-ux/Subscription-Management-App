"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 580"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Dot Grid ─────────────────────────────── */}
        <defs>
          <pattern
            id="dotGrid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="#ffffff" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="900" height="580" fill="url(#dotGrid)" />

        {/* ── LEFT: Color Palette ───────────────────── */}
        {/* Frame label */}
        <text x="38" y="72" fontFamily="monospace" fontSize="9" fill="#666">
          Design System / Colors
        </text>
        {/* Palette border */}
        <rect
          x="36"
          y="78"
          width="168"
          height="52"
          rx="4"
          fill="none"
          stroke="#333"
          strokeWidth="0.5"
        />
        {/* Color chips */}
        {[
          { x: 44, color: "#0D0D0D", label: "bg-dark" },
          { x: 74, color: "#ffffff", label: "white" },
          { x: 104, color: "#F5F5F5", label: "text" },
          { x: 134, color: "#666666", label: "muted" },
          { x: 164, color: "#2A2A2A", label: "surface" },
        ].map(({ x, color, label }) => (
          <g key={label}>
            <rect
              x={x}
              y="86"
              width="24"
              height="24"
              rx="4"
              fill={color}
              stroke="#444"
              strokeWidth="0.5"
            />
            <text
              x={x + 12}
              y="120"
              fontFamily="monospace"
              fontSize="6"
              fill="#555"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}

        {/* ── LEFT: Typography Scale ────────────────── */}
        <text x="38" y="158" fontFamily="monospace" fontSize="9" fill="#666">
          Typography / Scale
        </text>
        <rect
          x="36"
          y="164"
          width="168"
          height="74"
          rx="4"
          fill="none"
          stroke="#333"
          strokeWidth="0.5"
        />
        <text
          x="46"
          y="184"
          fontFamily="sans-serif"
          fontSize="18"
          fill="#dddddd"
          fontWeight="700"
        >
          Heading 1
        </text>
        <text
          x="46"
          y="202"
          fontFamily="sans-serif"
          fontSize="13"
          fill="#aaaaaa"
          fontWeight="500"
        >
          Heading 2
        </text>
        <text x="46" y="216" fontFamily="sans-serif" fontSize="10" fill="#888">
          Body — 14px / 1.6
        </text>
        <text x="46" y="228" fontFamily="sans-serif" fontSize="8" fill="#666">
          Caption — 11px / 1.4
        </text>

        {/* ── LEFT: Spacing Tokens ──────────────────── */}
        <text x="38" y="262" fontFamily="monospace" fontSize="9" fill="#666">
          Spacing / Tokens
        </text>
        <rect
          x="36"
          y="268"
          width="168"
          height="56"
          rx="4"
          fill="none"
          stroke="#333"
          strokeWidth="0.5"
        />
        {[
          { w: 4, label: "4px", x: 46, y: 282 },
          { w: 8, label: "8px", x: 46, y: 296 },
          { w: 16, label: "16px", x: 46, y: 310 },
          { w: 32, label: "32px", x: 46, y: 311 },
        ].map(({ w, label, x, y }, i) => (
          <g key={label}>
            <rect
              x={x}
              y={278 + i * 14}
              width={w * 2.5}
              height="8"
              rx="1.5"
              fill="white"
              opacity="0.2"
            />
            <text
              x={x + w * 2.5 + 6}
              y={278 + i * 14 + 6}
              fontFamily="monospace"
              fontSize="7"
              fill="#555"
            >
              {label}
            </text>
          </g>
        ))}

        {/* ── RIGHT: AI & Tools Icons ───────────────── */}
        <text
          x="680"
          y="72"
          fontFamily="monospace"
          fontSize="9"
          fill="#666"
          textAnchor="middle"
        >
          Tools / AI & Design
        </text>
        <rect
          x="632"
          y="78"
          width="96"
          height="96"
          rx="4"
          fill="none"
          stroke="#333"
          strokeWidth="0.5"
        />
        {/* 2x2 grid of tool icon cards */}
        {[
          { cx: 650, cy: 100, name: "Figma" },
          { cx: 698, cy: 100, name: "Claude" },
          { cx: 650, cy: 148, name: "ChatGPT" },
          { cx: 698, cy: 148, name: "Ccode" },
        ].map(({ cx, cy, name }) => (
          <g key={name}>
            <rect
              x={cx - 22}
              y={cy - 22}
              width="44"
              height="44"
              rx="10"
              fill="#2C2C2C"
              stroke="#444"
              strokeWidth="0.5"
            />
            {/* Figma icon */}
            {name === "Figma" && (
              <>
                <rect x={cx - 8} y={cy - 12} width="10" height="10" rx="5" fill="#F24E1E" />
                <rect x={cx + 2} y={cy - 12} width="10" height="10" rx="5" fill="#FF7262" />
                <rect x={cx - 8} y={cy - 2} width="10" height="10" rx="5" fill="#A259FF" />
                <rect x={cx + 2} y={cy - 2} width="10" height="10" rx="2" fill="#1ABCFE" />
                <rect x={cx - 8} y={cy + 8} width="10" height="10" rx="5" fill="#0ACF83" />
              </>
            )}
            {/* Claude icon */}
            {name === "Claude" && (
              <>
                <circle cx={cx} cy={cy - 4} r="10" fill="#D4A574" opacity="0.25" />
                <circle cx={cx} cy={cy - 4} r="7" fill="none" stroke="#D4A574" strokeWidth="1" />
                <circle cx={cx - 3} cy={cy - 6} r="1.5" fill="#D4A574" />
                <circle cx={cx + 3} cy={cy - 6} r="1.5" fill="#D4A574" />
                <path
                  d={`M ${cx - 3} ${cy - 1} Q ${cx} ${cy + 2} ${cx + 3} ${cy - 1}`}
                  fill="none"
                  stroke="#D4A574"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </>
            )}
            {/* ChatGPT icon */}
            {name === "ChatGPT" && (
              <>
                <circle cx={cx} cy={cy - 2} r="10" fill="#10A37F" opacity="0.2" />
                <circle cx={cx} cy={cy - 2} r="7" fill="none" stroke="#10A37F" strokeWidth="1" />
                <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 6} stroke="#10A37F" strokeWidth="1" />
                <line x1={cx - 8} y1={cy - 2} x2={cx + 8} y2={cy - 2} stroke="#10A37F" strokeWidth="1" />
              </>
            )}
            {/* Claude Code icon */}
            {name === "Ccode" && (
              <>
                <text x={cx - 8} y={cy - 3} fontFamily="monospace" fontSize="9" fill="#D4A574" fontWeight="700">
                  {">"}_
                </text>
                <line x1={cx - 8} y1={cy + 4} x2={cx + 8} y2={cy + 4} stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
                <line x1={cx - 8} y1={cy + 8} x2={cx + 4} y2={cy + 8} stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
              </>
            )}
            {/* Label */}
            <text
              x={cx}
              y={cy + 26}
              fontFamily="sans-serif"
              fontSize="7"
              fill="#666"
              textAnchor="middle"
            >
              {name === "Ccode" ? "Claude Code" : name}
            </text>
          </g>
        ))}

        {/* ── RIGHT: UI Card Mockup ─────────────────── */}
        <text
          x="762"
          y="220"
          fontFamily="monospace"
          fontSize="9"
          fill="#666"
          textAnchor="middle"
        >
          Screen / Result Card
        </text>
        {/* Browser window */}
        <rect
          x="687"
          y="226"
          width="150"
          height="110"
          rx="6"
          fill="#242424"
          stroke="#3a3a3a"
          strokeWidth="0.8"
        />
        {/* Top bar */}
        <rect x="687" y="226" width="150" height="18" rx="6" fill="#2e2e2e" />
        <rect x="687" y="238" width="150" height="6" fill="#2e2e2e" />
        {/* Traffic lights */}
        <circle cx="698" cy="235" r="3" fill="#FF5F57" opacity="0.6" />
        <circle cx="708" cy="235" r="3" fill="#FFBD2E" opacity="0.6" />
        <circle cx="718" cy="235" r="3" fill="#28C840" opacity="0.6" />
        {/* Content */}
        <rect x="697" y="252" width="80" height="8" rx="2" fill="#333" />
        <rect x="697" y="265" width="120" height="5" rx="1.5" fill="#2a2a2a" />
        <rect x="697" y="274" width="100" height="5" rx="1.5" fill="#2a2a2a" />
        <rect x="697" y="283" width="110" height="5" rx="1.5" fill="#2a2a2a" />
        {/* Buttons */}
        <rect x="697" y="298" width="54" height="18" rx="4" fill="#3a3a3a" />
        <text x="724" y="310" fontFamily="sans-serif" fontSize="7" fill="#aaa" textAnchor="middle">
          View Details
        </text>
        <rect x="757" y="298" width="54" height="18" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="0.5" />
        <text x="784" y="310" fontFamily="sans-serif" fontSize="7" fill="#777" textAnchor="middle">
          Compare
        </text>

        {/* ── RIGHT: User Flow ──────────────────────── */}
        <text
          x="748"
          y="370"
          fontFamily="monospace"
          fontSize="9"
          fill="#666"
          textAnchor="middle"
        >
          Flow / Search
        </text>
        {/* Node: 입력 */}
        <rect x="672" y="378" width="44" height="24" rx="4" fill="#2C2C2C" stroke="#444" strokeWidth="0.5" />
        <text x="694" y="393" fontFamily="sans-serif" fontSize="8" fill="#999" textAnchor="middle">
          입력
        </text>
        {/* Arrow 입력→분석 */}
        <line x1="716" y1="390" x2="728" y2="390" stroke="#555" strokeWidth="0.8" />
        <polygon points="728,387 733,390 728,393" fill="#555" />
        {/* Node: 분석 (accent) */}
        <rect x="733" y="378" width="44" height="24" rx="8" fill="#333" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <text x="755" y="393" fontFamily="sans-serif" fontSize="8" fill="#ddd" textAnchor="middle">
          분석
        </text>
        {/* Arrow 분석→결과 (vertical) */}
        <line x1="755" y1="402" x2="755" y2="414" stroke="#555" strokeWidth="0.8" />
        <polygon points="752,414 755,419 758,414" fill="#555" />
        {/* Node: 결과 */}
        <rect x="733" y="419" width="44" height="24" rx="4" fill="#2C2C2C" stroke="#444" strokeWidth="0.5" />
        <text x="755" y="434" fontFamily="sans-serif" fontSize="8" fill="#999" textAnchor="middle">
          결과
        </text>

        {/* ── Figma Cursor (near typewriter area) ────── */}
        <g opacity="0.6">
          {/* Cursor arrow */}
          <polygon
            points="450,298 450,316 454,312 458,320 461,319 457,311 463,311"
            fill="#ffffff"
            stroke="#000"
            strokeWidth="0.5"
          />
          {/* Name tag */}
          <rect x="462" y="299" width="42" height="14" rx="7" fill="#00C2FF" />
          <text x="483" y="309" fontFamily="sans-serif" fontSize="7" fill="white" textAnchor="middle">
            Juyeon
          </text>
        </g>

        {/* ── Spacing Marker (below typewriter) ───────── */}
        <g opacity="0.3">
          {/* Left vertical line */}
          <line x1="390" y1="338" x2="390" y2="350" stroke="#ff4444" strokeWidth="1" />
          {/* Right vertical line */}
          <line x1="414" y1="338" x2="414" y2="350" stroke="#ff4444" strokeWidth="1" />
          {/* Horizontal connector */}
          <line x1="390" y1="344" x2="414" y2="344" stroke="#ff4444" strokeWidth="0.8" />
          {/* Label */}
          <text x="402" y="358" fontFamily="monospace" fontSize="6" fill="#ff4444" textAnchor="middle">
            24px
          </text>
        </g>

        {/* ── Guideline: horizontal red dashed ────────── */}
        <line
          x1="0"
          y1="280"
          x2="900"
          y2="280"
          stroke="#ff4444"
          strokeWidth="0.3"
          strokeDasharray="5,8"
          opacity="0.12"
        />
        <line
          x1="0"
          y1="340"
          x2="900"
          y2="340"
          stroke="#ff4444"
          strokeWidth="0.3"
          strokeDasharray="5,8"
          opacity="0.12"
        />

        {/* ── Vignette Overlay ─────────────────────────── */}
        <defs>
          <radialGradient
            id="vignette"
            cx="45%"
            cy="55%"
            r="60%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.93" />
            <stop offset="30%" stopColor="#1a1a1a" stopOpacity="0.82" />
            <stop offset="60%" stopColor="#1a1a1a" stopOpacity="0.35" />
            <stop offset="85%" stopColor="#1a1a1a" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        <rect width="900" height="580" fill="url(#vignette)" />
      </svg>
    </div>
  );
}
