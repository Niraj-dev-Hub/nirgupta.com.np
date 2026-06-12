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
    <div className="relative min-h-screen text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-400 bg-[#060b19] overflow-x-hidden">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Column Stack Row-by-Row */}
      <main className="w-full flex flex-col">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: About + Philosophy */}
        <About />
        
        {/* Section 3: Tech Stack */}
        <TechStack />
        
        {/* Section 4: Featured Projects */}
        <Projects />
        
        {/* Section 5: Gallery ("My Creative Space") */}
        <Gallery />
        
        {/* Section 6: Achievements */}
        <Achievements />
        
        {/* Section 7: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

