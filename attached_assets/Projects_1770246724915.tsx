"use client"
import Reveal from "./Reveal"
import projects from "../data/projects.json"

export default function Projects() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={i}>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <ul className="mt-2 list-disc list-inside text-gray-500">
              {p.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
            </ul>
            <p className="mt-2 text-sm text-gray-400">{p.duration}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}