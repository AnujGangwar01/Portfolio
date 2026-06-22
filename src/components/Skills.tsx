import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const groups = [
  {
    title: "Languages",
    icon: FaCode,
    badge: "core",
    items: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 82 },
      { name: "C", level: 80 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "Full Stack",
    icon: FaServer,
    badge: "stack",
    items: [
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js / Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "CP & Tools",
    icon: FaTools,
    badge: "edge",
    items: [
      { name: "DSA in C++", level: 88 },
      { name: "Dynamic Programming", level: 80 },
      { name: "Graphs & Trees", level: 82 },
      { name: "Git & GitHub", level: 90 },
      { name: "Linux · VS Code · Postman", level: 85 },
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
