"use client"

import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import FloatingShapes from "../components/FloatingShapes"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-0.5 bg-primary"></div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <Skills />
      </section>

      {/* Floating background shapes for parallax effect */}
      <FloatingShapes />
    </main>
  )
}