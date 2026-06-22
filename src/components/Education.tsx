import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaGraduationCap } from "react-icons/fa";

const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (C++)",
  "Web Development (MERN)",
  "Database Management Systems",
  "Operating Systems",
  "Mathematics & Numerical Methods",
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="// education.path"
      title={
        <>
          Academic <span className="text-gradient">Journey</span>
        </>
      }
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pl-12"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-transparent" />
          <div
            className="absolute left-0 top-2 w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground glow border border-accent/40"
            style={{ background: "var(--gradient-primary)" }}
          >
            <FaGraduationCap />
          </div>

          <div className="rounded-2xl border border-border bg-card/60 p-7 shadow-card relative overflow-hidden">
            <div
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-accent border border-accent/40 rounded px-1.5 py-0.5">
                  current
                </span>
                <h3 className="text-xl md:text-2xl font-bold mt-2">
                  Integrated M.Tech, Applied Geophysics
                </h3>
                <p className="text-accent mt-1">
                  Indian Institute of Technology (ISM) Dhanbad
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-background/40">
                2024 — 2028
              </span>
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              A 5-year integrated program combining rigorous training in earth sciences, physics,
              mathematics, and computational methods — with hands-on focus on seismic, well-log,
              and subsurface data interpretation.
            </p>

            <div className="mt-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Coursework Highlights
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-accent bg-background/40"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 pt-6 border-t border-border/60">
              {[
                { v: "5 yrs", l: "Integrated" },
                { v: "M.Tech", l: "Degree" },
                { v: "IIT", l: "(ISM) Dhanbad" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg border border-border/60 bg-background/40 p-3 text-center"
                >
                  <div className="text-base font-bold text-gradient-neon font-mono">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
