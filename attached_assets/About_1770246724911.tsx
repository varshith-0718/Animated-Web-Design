"use client"
import Reveal from "./Reveal"

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-0.5 bg-primary"></div>
        <h2 className="text-3xl font-bold">About</h2>
      </div>

      <Reveal>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Hi, I’m Raavi, an AI/ML engineer building interactive, scalable, and elegant digital experiences.
          I enjoy modern technologies like Next.js, Tailwind CSS, and Framer Motion to create polished web apps.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-indigo-600 transition-all">
            Learn More
          </button>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-primary font-semibold hover:underline"
          >
            View LinkedIn →
          </a>
        </div>
      </Reveal>
    </section>
  )
}