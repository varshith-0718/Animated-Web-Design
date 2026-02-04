"use client"
import { motion } from "framer-motion"

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="w-24 h-24 bg-purple-300 rounded-full absolute top-10 left-10 opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="w-16 h-16 bg-indigo-400 rounded-full absolute bottom-20 right-16 opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full absolute top-1/3 right-1/3 opacity-30"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
    </div>
  )
}