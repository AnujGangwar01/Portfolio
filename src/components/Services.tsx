import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaLaptopCode, FaDatabase, FaHandshake } from "react-icons/fa";

const items = [
  {
    icon: FaLaptopCode,
    title: "Software Development",
    desc: "Building Python tools, automation scripts, and clean computational pipelines.",
  },
  {
    icon: FaDatabase,
    title: "Scientific Data Analysis",
    desc: "Turning raw geophysical and scientific data into clear, reproducible insight.",
  },
  {
    icon: FaHandshake,
    title: "Research Collaboration",
    desc: "Open to academic and industry projects in geophysics and computational science.",
  },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Open To" title={<>Where I can <span className="text-gradient">contribute</span></>}>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card/60 p-7 hover:border-accent/60 transition-colors shadow-card text-center"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-5 glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <it.icon size={22} />
            </div>
            <h3 className="font-bold text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
