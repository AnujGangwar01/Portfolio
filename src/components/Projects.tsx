import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Borehole Log Visualization Tool",
    desc: "Parses LAS files and converts raw subsurface measurements into clean, multi-track geophysical visualizations using NumPy and Matplotlib.",
    tags: ["Python", "NumPy", "Matplotlib", "lasio"],
    pattern: "log",
  },
  {
    title: "Seismic Waveform Analysis Workflow",
    desc: "Optimized data parsing pipeline for seismic traces, focused on algorithmic efficiency and reproducible scientific interpretation.",
    tags: ["Python", "NumPy", "Signal Processing"],
    pattern: "wave",
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 320 120" className="w-full h-28" aria-hidden="true">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.72 0.18 235)" />
            <stop offset="1" stopColor="oklch(0.85 0.16 200)" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 Q 20 10 40 60 T 80 60 T 120 60 T 160 60 T 200 60 T 240 60 T 280 60 T 320 60"
          stroke="url(#wg)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 60 Q 20 90 40 60 T 80 30 T 120 70 T 160 40 T 200 80 T 240 35 T 280 65 T 320 50"
          stroke="oklch(0.85 0.16 200 / 0.5)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  }
  // log tracks
  return (
    <svg viewBox="0 0 320 120" className="w-full h-28" aria-hidden="true">
      {[40, 100, 160, 220, 280].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="10" x2={x} y2="110" stroke="oklch(0.3 0.04 258)" strokeDasharray="2 4" />
          <path
            d={`M${x} 10 ${Array.from({ length: 20 }).map((_, j) => {
              const y = 10 + j * 5;
              const offset = (Math.sin(j * 0.7 + i) * 18);
              return `L${x + offset} ${y}`;
            }).join(" ")}`}
            stroke={i % 2 === 0 ? "oklch(0.72 0.18 235)" : "oklch(0.85 0.16 200)"}
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
    <Section id="projects" eyebrow="Projects" title={<>Selected <span className="text-gradient">Work</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card/60 overflow-hidden hover:border-accent/60 transition-all shadow-card"
          >
            <div className="bg-background/60 border-b border-border p-6">
              <Visual kind={p.pattern} />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
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
              <div className="flex gap-3 mt-5">
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
                  <FaExternalLinkAlt size={12} /> Details
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
