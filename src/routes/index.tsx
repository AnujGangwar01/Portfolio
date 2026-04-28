import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anuj Gangwar — Geophysics × Software Engineering" },
      {
        name: "description",
        content:
          "Portfolio of Anuj Gangwar, Integrated M.Tech student in Applied Geophysics at IIT (ISM) Dhanbad. Python, scientific computing, and data-driven solutions.",
      },
      { property: "og:title", content: "Anuj Gangwar — Geophysics × Software Engineering" },
      {
        property: "og:description",
        content:
          "Bridging Geophysics and Software Engineering through data-driven solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
