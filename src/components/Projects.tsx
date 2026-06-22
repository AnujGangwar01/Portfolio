import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "InterviewIQ",
    desc: "AI-powered interview preparation platform with mock interviews, resume-based questions, real-time feedback, authentication, and a personalized dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Gemini AI"],
    pattern: "ai",
    meta: "01 / interview-iq",
    repo: "https://github.com/AnujGangwar01/Interview-Agent",
    live: "https://github.com/AnujGangwar01/Interview-Agent",
  },
  {
    title: "Personal Portfolio",
    desc: "Modern, responsive portfolio built with React, TypeScript and Tailwind — animated hero, project showcase, and a working contact form wired to EmailJS.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "EmailJS"],
    pattern: "grid",
    meta: "02 / portfolio",
    repo: "https://github.com/AnujGangwar01/Portfolio",
    live: "https://anujgangwar.lovable.app",
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === "ai") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-32" aria-hidden="true">
        <defs>
          <linearGradient id="aig" x1="0" x2="1">
            <stop offset="0" stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        {[30, 60, 90, 120].map((y) => (
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
        {/* neural-net style nodes */}
        {[
          [40, 35],
          [40, 70],
          [40, 105],
          [160, 25],
          [160, 70],
          [160, 115],
          [280, 50],
          [280, 90],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="url(#aig)" />
        ))}
        {[
          [40, 35, 160, 25],
          [40, 35, 160, 70],
          [40, 70, 160, 25],
          [40, 70, 160, 70],
          [40, 70, 160, 115],
          [40, 105, 160, 70],
          [40, 105, 160, 115],
          [160, 25, 280, 50],
          [160, 70, 280, 50],
          [160, 70, 280, 90],
          [160, 115, 280, 90],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#aig)"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        ))}
        <text
          x="160"
          y="135"
          fontSize="9"
          fontFamily="monospace"
          fill="var(--muted-foreground)"
          textAnchor="middle"
        >
          gemini · interview · feedback
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 140" className="w-full h-32" aria-hidden="true">
      <defs>
        <linearGradient id="gg" x1="0" x2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      {Array.from({ length: 7 }).map((_, i) =>
        Array.from({ length: 4 }).map((_, j) => (
          <rect
            key={`${i}-${j}`}
            x={20 + i * 42}
            y={15 + j * 28}
            width="34"
            height="20"
            rx="3"
            fill="url(#gg)"
            fillOpacity={0.12 + ((i + j) % 4) * 0.18}
            stroke="color-mix(in oklab, var(--border) 80%, transparent)"
          />
        )),
      )}
      <text
        x="160"
        y="135"
        fontSize="9"
        fontFamily="monospace"
        fill="var(--muted-foreground)"
        textAnchor="middle"
      >
        react · tailwind · framer-motion
      </text>
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
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt size={11} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
