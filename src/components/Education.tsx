import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaGraduationCap } from "react-icons/fa";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">Journey</span></>}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pl-12"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-transparent" />
          <div
            className="absolute left-0 top-2 w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            <FaGraduationCap />
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-7 shadow-card">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold">Integrated M.Tech, Applied Geophysics</h3>
                <p className="text-accent mt-1">Indian Institute of Technology (ISM) Dhanbad</p>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                2024 — 2028
              </span>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A 5-year integrated program combining rigorous training in earth sciences,
              physics, mathematics, and computational methods — with hands-on focus on
              seismic, well-log, and subsurface data interpretation.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
