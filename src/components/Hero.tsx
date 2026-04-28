import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import heroImg from "@/assets/anuj-hero.jpg";

const taglines = [
  "Bridging Geophysics and Software Engineering",
  "Through Data-Driven Solutions",
  "Python · Computational Science · Algorithms",
];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = taglines[i % taglines.length];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1600);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((n) => n + 1);
        }
      }
    }, del ? 30 : 55);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <ParticleField />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1 text-xs font-mono text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Anuj Gangwar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground min-h-[3.5rem] font-mono">
            <span className="cursor-blink">{text}</span>
          </p>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Integrated M.Tech student in Applied Geophysics at{" "}
            <span className="text-foreground font-medium">IIT (ISM) Dhanbad</span>, focused on Python,
            scientific computing, and turning raw subsurface data into meaningful insight.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-border bg-card/50 text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex gap-8 font-mono text-sm">
            <div>
              <div className="text-2xl font-bold text-gradient-neon">2024–28</div>
              <div className="text-muted-foreground text-xs mt-1">IIT (ISM) Dhanbad</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient-neon">CSIR</div>
              <div className="text-muted-foreground text-xs mt-1">NGRI Research Intern</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient-neon">Python</div>
              <div className="text-muted-foreground text-xs mt-1">Scientific Stack</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div
              className="absolute -inset-6 rounded-full blur-3xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-accent/50 glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <img
                src={heroImg}
                alt="Anuj Gangwar"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            {/* floating chips */}
            <div className="absolute -left-6 top-10 glass rounded-xl px-4 py-3 border border-border shadow-card hidden md:block">
              <div className="text-xs font-mono text-accent">~/python</div>
              <div className="text-sm font-medium">NumPy · Matplotlib</div>
            </div>
            <div className="absolute -right-4 bottom-12 glass rounded-xl px-4 py-3 border border-border shadow-card hidden md:block">
              <div className="text-xs font-mono text-accent">geophysics.lasio</div>
              <div className="text-sm font-medium">Borehole · Seismic</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
