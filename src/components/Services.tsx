import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaLaptopCode, FaServer, FaTrophy } from "react-icons/fa";

const items = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Web Apps",
    desc: "End-to-end MERN apps — responsive React frontends, REST APIs, authentication, and deployment.",
    tag: "01",
    items: ["React", "Tailwind", "Auth"],
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    desc: "Node.js / Express services with MongoDB or MySQL, clean schemas, and well-structured endpoints.",
    tag: "02",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: FaTrophy,
    title: "DSA & Problem Solving",
    desc: "Strong C++ competitive programming background — open to algorithm-heavy projects and interview prep collaborations.",
    tag: "03",
    items: ["C++", "DSA", "System Design"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="// open_to.contribute"
      title={
        <>
          Where I can <span className="text-gradient">contribute</span>
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card/60 p-7 hover:border-accent/60 transition-all shadow-card overflow-hidden hover:-translate-y-1"
          >
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-foreground glow"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <it.icon size={22} />
                </div>
                <span className="text-3xl font-mono font-bold text-muted-foreground/30">
                  {it.tag}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{it.desc}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {it.items.map((x) => (
                  <span
                    key={x}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-border text-accent bg-background/40"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
