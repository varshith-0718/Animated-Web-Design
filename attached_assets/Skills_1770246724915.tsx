"use client"
import Reveal from "./Reveal"
import skills from "../data/skills.json"

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-0.5 bg-primary"></div>
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={i}>
            <div>
              <h4 className="font-semibold">{category}</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {items.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}