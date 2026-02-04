type SectionProps = {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-20">
      {title && (
        <h2 className="text-3xl font-bold mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}