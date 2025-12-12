import React from "react";

interface ScrollIndicatorProps {
  active: number;
}

const sections = ["#hero", "#about", "#projects", "#contact"];

export default function ScrollIndicator({ active }: ScrollIndicatorProps) {
  const scrollToSection = (index: number) => {
    const el = document.querySelector(sections[index]) as HTMLElement | null;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === i
              ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
              : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}
