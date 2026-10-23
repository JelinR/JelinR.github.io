"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observedSections = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 z-10 hidden -translate-y-1/2 xl:block"
    >
      <ol className="relative space-y-5 border-l border-zinc-300 py-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="relative pl-4">
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block text-xs tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? "font-medium text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                <span
                  className={`absolute -left-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-zinc-900 bg-[#FFFCF8] ring-2 ring-[#FFFCF8]"
                      : "border-zinc-300 bg-[#FFFCF8]"
                  }`}
                  aria-hidden="true"
                />
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
