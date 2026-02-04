"use client";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 100) current = section;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <ul className="flex justify-center gap-6 py-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`font-medium hover:text-primary transition ${
                active === section ? "text-primary underline" : "text-slate-700"
              }`}
            >
              {section.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}