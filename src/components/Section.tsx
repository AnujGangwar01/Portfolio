import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
                <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-accent">
                  {eyebrow}
                </p>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
