import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaPython, FaChartLine, FaCode, FaGlobe } from "react-icons/fa";

const pillars = [
  { icon: FaPython, label: "Python", desc: "Idiomatic, performance-aware code" },
  { icon: FaChartLine, label: "Data Analysis", desc: "From raw signals to insight" },
  { icon: FaCode, label: "Algorithms", desc: "Efficiency-first thinking" },
  { icon: FaGlobe, label: "Geophysics", desc: "Earth science meets software" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Where <span className="text-gradient">science meets software</span></>}>
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm an Integrated M.Tech student in <span className="text-foreground font-medium">Applied Geophysics</span> at
            IIT (ISM) Dhanbad, with a deep interest in <span className="text-accent">Software Engineering</span> and{" "}
            <span className="text-accent">Computational Science</span>.
          </p>
          <p>
            My work sits at the intersection of scientific exploration and software craft — designing efficient
            algorithms, processing large scientific datasets, and building tools that translate complex subsurface
            data into clear, actionable visualizations.
          </p>
          <p>
            I care about <span className="text-foreground font-medium">algorithmic efficiency</span>, clean code, and
            using software as a lens for understanding the natural world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {pillars.map((p) => (
            <div
              key={p.label}
              className="group rounded-2xl border border-border bg-card/60 p-5 hover:border-accent/60 transition-colors shadow-card"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <p.icon size={20} />
              </div>
              <div className="font-semibold">{p.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
