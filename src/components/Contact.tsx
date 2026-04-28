import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const links = [
  { icon: FaEnvelope, label: "anuj.gangwar.geophysics@gmail.com", href: "mailto:anuj.gangwar.geophysics@gmail.com" },
  { icon: FaLinkedin, label: "linkedin.com/in/anuj-gangwar", href: "https://linkedin.com/in/anuj-gangwar" },
  { icon: FaGithub, label: "github.com/anuj-gangwar", href: "https://github.com/anuj-gangwar" },
  { icon: FaMapMarkerAlt, label: "IIT (ISM) Dhanbad, Jharkhand, India", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build <span className="text-gradient">something</span></>}>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
        Open to collaborations, opportunities, and technical discussions across software,
        scientific computing, and applied geophysics.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 hover:border-accent/60 hover:bg-card transition-colors group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <l.icon />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground break-all">
                {l.label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="rounded-2xl border border-border bg-card/60 p-6 space-y-4 shadow-card"
        >
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-accent">Name</label>
            <input
              required
              className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-accent">Email</label>
            <input
              type="email"
              required
              className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-accent">Message</label>
            <textarea
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-primary)" }}
          >
            {sent ? "✓ Message ready — opens in your client" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
