import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Section } from "./Section";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_o7ih91k";
const EMAILJS_TEMPLATE_ID = "template_bwrgkb9";
const EMAILJS_PUBLIC_KEY = "FWI4GSi38Jl7Q873q";

const links = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "gangwar7819@gmail.com",
    href: "mailto:gangwar7819@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anuj-gangwar-47b8a0320/",
    href: "https://www.linkedin.com/in/anuj-gangwar-47b8a0320/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/AnujGangwar01",
    href: "https://github.com/AnujGangwar01",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "IIT (ISM) Dhanbad, Jharkhand, India",
    href: "#",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || err?.message || "Failed to send. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="// contact.open"
      title={
        <>
          Let's build <span className="text-gradient">something</span>
        </>
      }
    >
      <p className="text-center text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
        Open to collaborations, opportunities, and technical discussions across software,
        scientific computing, and applied geophysics.
      </p>

      <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* LEFT: Contact channels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          <div className="rounded-2xl border border-border bg-card/60 p-5 shadow-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.65_0.2_150)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.65_0.2_150)]" />
              </span>
              <span className="text-xs font-mono text-[oklch(0.55_0.18_150)]">
                AVAILABLE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently accepting messages and new opportunities.
            </p>
          </div>

          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 hover:border-accent/60 hover:bg-card transition-all group hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <l.icon />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  {l.label}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground break-all">
                  {l.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl border border-border bg-card/60 shadow-card overflow-hidden relative"
        >
          <div
            className="absolute inset-x-0 top-0 h-px opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border/60 bg-card/40">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.78_0.2_165)]/70" />
            <span className="ml-3 text-[10px] font-mono text-muted-foreground">
              new_message.txt
            </span>
          </div>

          <div className="p-6 space-y-4">
            <input type="hidden" name="to_name" value="Anuj" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  Name
                </label>
                <input
                  name="from_name"
                  required
                  className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent">
                Subject
              </label>
              <input
                name="subject"
                className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-lg bg-background/60 border border-border px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none transition-all"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-primary-foreground glow transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: "var(--gradient-primary)" }}
            >
              {status === "sending" && <>Sending…</>}
              {status === "sent" && <>✓ Message sent — thanks!</>}
              {status === "error" && <>✕ {errorMsg || "Something went wrong"}</>}
              {status === "idle" && (
                <>
                  Send Message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
