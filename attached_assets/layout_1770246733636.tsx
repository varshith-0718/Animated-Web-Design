export const metadata = {
  title: "Raavi Varshith Reddy | Portfolio",
  description: "AI / ML Engineer | GenAI | RAG | MLOps",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-6">
        {children}
      </body>
    </html>
  )
}