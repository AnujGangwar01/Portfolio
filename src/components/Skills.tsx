import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "lasio", level: 78 },
    ],
  },
  {
    title: "Core Areas",
    items: [
      { name: "Data Analysis", level: 88 },
      { name: "Scientific Computing", level: 82 },
      { name: "Algorithmic Thinking", level: 85 },
      { name: "Workflow Automation", level: 78 },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Analytical Thinking", level: 92 },
      { name: "Technical Coordination", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>Toolbox & <span className="text-gradient">Capabilities</span></>}>
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="rounded-2xl border border-border bg-card/60 p-6 shadow-card"
          >
            <h3 className="font-bold mb-5 font-mono text-sm tracking-widest text-accent uppercase">
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.items.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
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
