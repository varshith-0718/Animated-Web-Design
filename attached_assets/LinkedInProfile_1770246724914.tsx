import { linkedinProfile } from "../lib/linkedin"

export default function LinkedInProfile() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold">{linkedinProfile.name}</h2>
      <p className="text-gray-600 mt-2">{linkedinProfile.headline}</p>
      <p className="mt-6 max-w-2xl">{linkedinProfile.about}</p>
      <div className="mt-10 space-y-6">
        {linkedinProfile.experience.map((exp, i) => (
          <div key={i} className="border-l-2 pl-4">
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-500">
              {exp.company} • {exp.duration}
            </p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
        target="_blank"
        className="inline-block mt-8 text-blue-600"
      >
        View on LinkedIn →
      </a>
    </section>
  )
}