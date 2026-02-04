import React from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
