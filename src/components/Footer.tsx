import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">Anuj</span>
            <span className="text-foreground">.dev</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Bridging Geophysics and Software Engineering.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/anuj-gangwar" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/anuj-gangwar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:anuj.gangwar.geophysics@gmail.com" aria-label="Email" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Anuj Gangwar
        </p>
      </div>
    </footer>
  );
}
