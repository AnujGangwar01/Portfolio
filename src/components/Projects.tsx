import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Borehole Log Visualization Tool",
    desc: "Parses LAS files and converts raw subsurface measurements into clean, multi-track geophysical visualizations using NumPy and Matplotlib.",
    tags: ["Python", "NumPy", "Matplotlib", "lasio"],
    pattern: "log",
    meta: "01 / well_logs",
  },
  {
    title: "Seismic Waveform Analysis Workflow",
    desc: "Optimized data parsing pipeline for seismic traces, focused on algorithmic efficiency and reproducible scientific interpretation.",
    tags: ["Python", "NumPy", "Signal Processing"],
    pattern: "wave",
    meta: "02 / seismic",
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-32" aria-hidden="true">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent)" />
          </linearGradient>
          <linearGradient id="wfill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0.25" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 40, 60, 80, 100, 120].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="320"
            y2={y}
            stroke="color-mix(in oklab, var(--border) 60%, transparent)"
            strokeDasharray="2 6"
          />
        ))}
        <path
          d="M0 70 Q 20 20 40 70 T 80 70 T 120 70 T 160 70 T 200 70 T 240 70 T 280 70 T 320 70 L 320 140 L 0 140 Z"
          fill="url(#wfill)"
        />
        <path
          d="M0 70 Q 20 20 40 70 T 80 70 T 120 70 T 160 70 T 200 70 T 240 70 T 280 70 T 320 70"
          stroke="url(#wg)"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0 70 Q 20 20 40 70 T 80 70 T 120 70 T 160 70 T 200 70 T 240 70 T 280 70 T 320 70;
              M0 70 Q 20 110 40 70 T 80 70 T 120 70 T 160 70 T 200 70 T 240 70 T 280 70 T 320 70;
              M0 70 Q 20 20 40 70 T 80 70 T 120 70 T 160 70 T 200 70 T 240 70 T 280 70 T 320 70"
          />
        </path>
        <path
          d="M0 70 Q 20 95 40 70 T 80 50 T 120 80 T 160 55 T 200 85 T 240 50 T 280 75 T 320 65"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 140" className="w-full h-32" aria-hidden="true">
      {[40, 100, 160, 220, 280].map((x, i) => (
        <g key={i}>
          <line
            x1={x}
            y1="10"
            x2={x}
            y2="130"
            stroke="color-mix(in oklab, var(--border) 80%, transparent)"
            strokeDasharray="2 4"
          />
          <text
            x={x}
            y="8"
            fontSize="6"
            fontFamily="monospace"
            fill="var(--muted-foreground)"
            textAnchor="middle"
          >
            T{i + 1}
          </text>
          <path
            d={`M${x} 12 ${Array.from({ length: 22 })
              .map((_, j) => {
                const y = 12 + j * 5.4;
                const offset = Math.sin(j * 0.7 + i) * 18;
                return `L${x + offset} ${y}`;
              })
              .join(" ")}`}
            stroke={i % 2 === 0 ? "var(--primary)" : "var(--accent)"}
            strokeWidth="1.5"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// projects.selected"
      title={
        <>
          Selected <span className="text-gradient">Work</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card/60 overflow-hidden hover:border-accent/60 transition-all shadow-card hover:-translate-y-1"
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="bg-background/40 border-b border-border p-6 relative">
              <div className="absolute top-3 left-4 text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                {p.meta}
              </div>
              <Visual kind={p.pattern} />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 group-hover:text-gradient transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-accent bg-background/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-5 pt-5 border-t border-border/60">
                <a
                  href="https://github.com/anuj-gangwar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://github.com/anuj-gangwar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt size={11} /> Details
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
