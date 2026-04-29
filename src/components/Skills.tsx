import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaCode, FaBrain, FaUsers } from "react-icons/fa";

const groups = [
  {
    title: "Programming",
    icon: FaCode,
    badge: "stack",
    items: [
      { name: "Python", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "lasio", level: 78 },
    ],
  },
  {
    title: "Core Areas",
    icon: FaBrain,
    badge: "domain",
    items: [
      { name: "Data Analysis", level: 88 },
      { name: "Scientific Computing", level: 82 },
      { name: "Algorithmic Thinking", level: 85 },
      { name: "Workflow Automation", level: 78 },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    badge: "human",
    items: [
      { name: "Analytical Thinking", level: 92 },
      { name: "Technical Coordination", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills.toolbox"
      title={
        <>
          Toolbox &amp; <span className="text-gradient">Capabilities</span>
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card/60 p-6 shadow-card hover:border-accent/50 transition-all overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <g.icon size={16} />
                </div>
                <h3 className="font-bold font-mono text-sm tracking-widest text-foreground uppercase">
                  {g.title}
                </h3>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5">
                {g.badge}
              </span>
            </div>

            <div className="space-y-4">
              {g.items.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5 font-mono">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <span
                        className="absolute inset-y-0 right-0 w-6 blur-sm opacity-70"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
