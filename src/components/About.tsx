import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaPython, FaChartLine, FaCode, FaGlobe } from "react-icons/fa";

const pillars = [
  { icon: FaPython, label: "Python", desc: "Idiomatic, performance-aware code", tag: "lang" },
  { icon: FaChartLine, label: "Data Analysis", desc: "Raw signals → insight", tag: "core" },
  { icon: FaCode, label: "Algorithms", desc: "Efficiency-first thinking", tag: "craft" },
  { icon: FaGlobe, label: "Geophysics", desc: "Earth science meets software", tag: "domain" },
];

const facts = [
  { k: "location", v: "Dhanbad, IN" },
  { k: "program", v: "Int. M.Tech '24–'28" },
  { k: "focus", v: "Subsurface + Code" },
  { k: "open_to", v: "Internships · Research" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about_me"
      title={
        <>
          Where <span className="text-gradient">science</span> meets{" "}
          <span className="text-gradient-neon">software</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* LEFT: Narrative + facts terminal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-8"
        >
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm an Integrated M.Tech student in{" "}
              <span className="text-foreground font-medium">Applied Geophysics</span> at IIT (ISM)
              Dhanbad, with a deep interest in{" "}
              <span className="text-accent">Software Engineering</span> and{" "}
              <span className="text-accent">Computational Science</span>.
            </p>
            <p>
              My work sits at the intersection of scientific exploration and software craft —
              designing efficient algorithms, processing large scientific datasets, and building
              tools that translate complex subsurface data into clear, actionable visualizations.
            </p>
            <p>
              I care about{" "}
              <span className="text-foreground font-medium">algorithmic efficiency</span>, clean
              code, and using software as a lens for understanding the natural world.
            </p>
          </div>

          {/* facts terminal */}
          <div className="glass rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/60 bg-card/40">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.2_165)]/70" />
              <span className="ml-3 text-[10px] font-mono text-muted-foreground">
                whoami.json
              </span>
            </div>
            <pre className="p-4 text-xs font-mono leading-relaxed">
              <span className="text-muted-foreground">{"{"}</span>
              {facts.map((f) => (
                <div key={f.k} className="pl-4">
                  <span className="text-accent">"{f.k}"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-[oklch(0.78_0.2_165)]">"{f.v}"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
              ))}
              <span className="text-muted-foreground">{"}"}</span>
            </pre>
          </div>
        </motion.div>

        {/* RIGHT: Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card/60 p-5 hover:border-accent/60 transition-all shadow-card overflow-hidden hover:-translate-y-1"
            >
              <div
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <p.icon size={20} />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5">
                  {p.tag}
                </span>
              </div>
              <div className="font-semibold relative">{p.label}</div>
              <div className="text-xs text-muted-foreground mt-1 relative">{p.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
