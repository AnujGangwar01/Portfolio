import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaFlask, FaUsers, FaCode } from "react-icons/fa";

const items = [
  {
    icon: FaFlask,
    role: "Research Intern",
    org: "CSIR – National Geophysical Research Institute (NGRI)",
    period: "Internship",
    points: [
      "Hands-on experience with seismic data acquisition workflows",
      "Exposure to industry practices in geophysical research",
      "Worked alongside senior scientists on field data interpretation",
    ],
  },
  {
    icon: FaUsers,
    role: "Alumni Outreach Coordinator",
    org: "Students' Placement Team, IIT (ISM) Dhanbad",
    period: "2027–28 Cycle",
    points: [
      "Coordinated professional outreach with alumni and recruiters",
      "Managed communication for the upcoming placement season",
      "Built and maintained an active recruiter–alumni network",
    ],
  },
  {
    icon: FaCode,
    role: "Academic & Development Work",
    org: "Self-driven Projects",
    period: "Ongoing",
    points: [
      "Python-based pipelines for scientific data processing",
      "Seismic waveform analysis and borehole log visualization",
      "Focus on workflow automation and algorithmic efficiency",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Roles & <span className="text-gradient">Research</span></>}>
      <div className="space-y-6 max-w-4xl mx-auto">
        {items.map((it, idx) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group rounded-2xl border border-border bg-card/60 p-6 md:p-7 hover:border-accent/60 hover:bg-card transition-all shadow-card"
          >
            <div className="flex gap-5">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <it.icon />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-bold text-lg">{it.role}</h3>
                    <p className="text-accent text-sm mt-0.5">{it.org}</p>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {it.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5 text-muted-foreground text-sm">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
