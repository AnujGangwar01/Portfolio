import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-20 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display font-bold text-2xl">
              <span className="text-gradient">Anuj</span>
              <span className="text-foreground">.dev</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Bridging Geophysics and Software Engineering through data-driven solutions.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-3">
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-3">
              Connect
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/anuj-gangwar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/anuj-gangwar"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:anuj.gangwar.geophysics@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">
              IIT (ISM) Dhanbad · India
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Anuj Gangwar — Built with Python-grade precision.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-accent">$</span> deployed · React · TanStack
          </p>
        </div>
      </div>
    </footer>
  );
}
