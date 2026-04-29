import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaFlask, FaUsers, FaCode } from "react-icons/fa";

const items = [
  {
    icon: FaFlask,
    role: "Research Intern",
    org: "CSIR – National Geophysical Research Institute (NGRI)",
    period: "Internship",
    tag: "research",
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
    tag: "leadership",
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
    tag: "build",
    points: [
      "Python-based pipelines for scientific data processing",
      "Seismic waveform analysis and borehole log visualization",
      "Focus on workflow automation and algorithmic efficiency",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience.timeline"
      title={
        <>
          Roles &amp; <span className="text-gradient">Research</span>
        </>
      }
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline rail */}
        <div
          className="absolute left-5 md:left-6 top-2 bottom-2 w-px hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), var(--primary), transparent)",
          }}
        />

        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative sm:pl-16"
            >
              {/* Timeline node */}
              <div
                className="absolute left-0 top-6 hidden sm:flex w-12 h-12 rounded-xl items-center justify-center text-primary-foreground glow border border-accent/40"
                style={{ background: "var(--gradient-primary)" }}
              >
                <it.icon />
              </div>

              <div className="group rounded-2xl border border-border bg-card/60 p-6 md:p-7 hover:border-accent/60 hover:bg-card transition-all shadow-card overflow-hidden relative">
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-50"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="flex gap-5">
                  <div
                    className="sm:hidden shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <it.icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-accent border border-accent/40 rounded px-1.5 py-0.5">
                            {it.tag}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg">{it.role}</h3>
                        <p className="text-accent text-sm mt-0.5">{it.org}</p>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-background/40">
                        {it.period}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-accent mt-1 font-mono">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
