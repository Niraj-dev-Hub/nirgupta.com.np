import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.background = theme === "light" ? "#f3f3f3" : "#060b19";
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = ["hero", "about", "tech-stack", "projects", "gallery", "achievements", "contact"];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      if (intersectingEntries.length > 0) {
        // Sort by closest to viewport top to handle overlapping bounds correctly
        const closest = intersectingEntries.reduce((prev, curr) => {
          return Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev;
        });
        setActiveSection(closest.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1,
      rootMargin: "-20% 0px -40% 0px"
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden ${
      theme === "light" ? "text-zinc-900 bg-[#f3f3f3]" : "text-gray-100 bg-[#060b19]"
    }`}>
      {/* Dynamic Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />

      {/* Main Column Stack Row-by-Row */}
      <main className="w-full flex flex-col">
        {/* Section 1: Hero */}
        <Hero theme={theme} />
        
        {/* Section 2: About + Philosophy */}
        <About theme={theme} />
        
        {/* Section 3: Tech Stack */}
        <TechStack theme={theme} />
        
        {/* Section 4: Featured Projects */}
        <Projects theme={theme} />
        
        {/* Section 5: Gallery ("My Creative Space") */}
        <Gallery theme={theme} />
        
        {/* Section 6: Achievements */}
        <Achievements theme={theme} />
        
        {/* Section 7: Contact */}
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

