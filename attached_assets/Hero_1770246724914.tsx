"use client"
import { motion } from "framer-motion"
import FloatingShapes from "./FloatingShapes"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-start px-6 py-20 overflow-hidden">
      <FloatingShapes />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-slate-900"
      >
        Hi, I’m Raavi 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-slate-700 max-w-xl leading-relaxed"
      >
        I build interactive, modern, and scalable web experiences with clean design and smooth animations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-indigo-600 transition-all"
        >
          View LinkedIn
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  )
}