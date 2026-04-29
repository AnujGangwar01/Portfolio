import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import heroImg from "@/assets/anuj-hero.jpg";

const taglines = [
  "Bridging Geophysics & Software Engineering",
  "Through Data-Driven Solutions",
  "Python · Computational Science · Algorithms",
];

const codeLines = [
  { c: "text-muted-foreground", t: "// anuj.gangwar — profile.py" },
  { c: "text-accent", t: "class Engineer:" },
  { c: "text-foreground/80", t: "    name = 'Anuj Gangwar'" },
  { c: "text-foreground/80", t: "    role = 'Geophysicist + Dev'" },
  { c: "text-foreground/80", t: "    stack = ['Python', 'C++', 'NumPy']" },
  { c: "text-foreground/80", t: "    focus = 'Subsurface Intelligence'" },
  { c: "text-accent", t: "    def build(self):" },
  { c: "text-[oklch(0.78_0.2_165)]", t: "        return insight(data)" },
];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = taglines[i % taglines.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1800);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 25 : 50,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.18]" aria-hidden="true" />
      <ParticleField />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden="true"
      />
      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-[120px] opacity-40"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-30"
        style={{ background: "var(--gradient-neon)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        {/* LEFT: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-mono text-accent mb-7 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities · Summer&apos;26
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-bold leading-[1.02] tracking-tight mb-6">
            <span className="block text-muted-foreground/70 text-2xl md:text-3xl font-mono font-normal mb-3">
              &gt; hello_world.exe
            </span>
            I'm <span className="text-gradient">Anuj</span>
            <span className="text-foreground">.</span>
            <br />
            <span className="text-foreground/90">I build with</span>{" "}
            <span className="text-gradient-neon">data</span>
            <span className="text-foreground">.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground min-h-[3rem] font-mono">
            <span className="text-accent/80">~$</span>{" "}
            <span className="cursor-blink">{text}</span>
          </p>

          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg">
            Integrated M.Tech in Applied Geophysics at{" "}
            <span className="text-foreground font-medium">IIT (ISM) Dhanbad</span>. I turn raw
            subsurface signals into clean Python pipelines, scientific visualisations, and
            algorithms that actually answer questions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground glow transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold border border-border bg-card/40 backdrop-blur text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              ↓ scroll
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
            {[
              { v: "2024–28", l: "IIT (ISM) Dhanbad" },
              { v: "CSIR", l: "NGRI Research Intern" },
              { v: "Python", l: "Scientific Stack" },
            ].map((s, idx) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="rounded-xl border border-border/60 bg-card/30 backdrop-blur p-3 sm:p-4 hover:border-accent/40 transition-colors"
              >
                <div className="text-lg sm:text-2xl font-bold text-gradient-neon font-mono">
                  {s.v}
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs mt-1 leading-tight">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Visual stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Portrait */}
            <div className="relative animate-float mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem]">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60"
                style={{ background: "var(--gradient-primary)" }}
              />
              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-accent/20 animate-[spin_18s_linear_infinite]" />
              <div
                className="relative w-full h-full rounded-[2rem] overflow-hidden border border-accent/40 glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                <img
                  src={heroImg}
                  alt="Anuj Gangwar"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
                {/* Scanline */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent 0 3px, oklch(1 0 0 / 0.04) 3px 4px)",
                  }}
                />
              </div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 sm:-left-10 top-6 glass rounded-xl px-3.5 py-2.5 border border-border shadow-card"
              >
                <div className="text-[10px] font-mono text-accent">~/python</div>
                <div className="text-xs sm:text-sm font-medium">NumPy · Matplotlib</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-2 sm:-right-8 bottom-10 glass rounded-xl px-3.5 py-2.5 border border-border shadow-card"
              >
                <div className="text-[10px] font-mono text-accent">geophysics.lasio</div>
                <div className="text-xs sm:text-sm font-medium">Borehole · Seismic</div>
              </motion.div>
            </div>

            {/* Code terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 glass rounded-2xl border border-border shadow-card overflow-hidden hidden sm:block"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/60 bg-card/40">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.2_165)]/70" />
                <span className="ml-3 text-[10px] font-mono text-muted-foreground">
                  profile.py — anuj@ism
                </span>
              </div>
              <pre className="p-4 text-[11px] sm:text-xs font-mono leading-relaxed overflow-hidden">
                {codeLines.map((l, idx) => (
                  <div key={idx} className={l.c}>
                    {l.t}
                  </div>
                ))}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
