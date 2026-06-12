import { Quote, Landmark, Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";
import Reveal from "./Reveal";

export default function About() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="w-full py-20 bg-gray-950/40 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
            My Story, Drive, and Aspirations
          </p>
        </div>

        {/* Section Content Column Stack (stacked vertically as per mandatory order rules) */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Main Philosophy Quote - Displayed Prisitinely and Prominently */}
          <Reveal>
            <div className="relative glass-card p-8 sm:p-12 rounded-2xl border border-cyan-500/10 box-glow-blue overflow-hidden">
              <div className="absolute top-4 left-4 text-cyan-500/10">
                <Quote className="w-24 h-24 -mt-6 -ml-6" />
              </div>
              <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                  My Core Philosophy
                </span>
                <p className="font-heading text-xl sm:text-3xl font-medium text-white italic leading-tight mb-6">
                  “{PERSONAL_DETAILS.quote}”
                </p>
                <div className="w-8 h-0.5 bg-cyan-500/50 mb-3" />
                <span className="text-gray-400 font-mono text-sm">
                  — Niraj Kumar Gupta (NirGupta)
                </span>
              </div>
            </div>
          </Reveal>

          {/* Grid Layout of Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Biography */}
            <Reveal delay={100}>
              <div className="space-y-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-cyan-400" />
                  Engineering Aspirations
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  As a passionate <strong className="text-white font-mono">Computer Engineering Student</strong> from Nepal, my curiosity drives me to discover how systems communicate and scale. I focus on developing clean algorithmic logic with Java while crafting highly interactive, modern frontends with React, Tailwind CSS, and cybernetic layouts.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  When I am not attending classes, I dive into cybersecurity, analyzing structural software vulnerabilities, studying system boundaries on Kali Linux, and hardening configurations. I strongly believe that building real applications is the single most rewarding style of learning.
                </p>
              </div>
            </Reveal>

            {/* Current Work Focus & Quick Stats */}
            <Reveal delay={200}>
              <div className="space-y-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-cyan-400" />
                  Active Focus
                </h3>

                {/* Currently Building Indicator - Promiscuous and click-ready */}
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform" />
                  <div className="relative">
                    <span className="inline-block bg-cyan-500 text-gray-950 text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-md mb-3 tracking-wider animate-pulse">
                      Currently Building
                    </span>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 decoration-cyan-500 group-hover:text-cyan-400 transition-colors">
                      {PERSONAL_DETAILS.currentlyBuildingName}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      An ecological and environmental tracking platform designed to evaluate and coordinate preservation metrics inside Nepal.
                    </p>
                    <a
                      href={PERSONAL_DETAILS.currentlyBuildingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      View GitHub Repository
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Quick Checklists */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm">Full-Stack Sprints</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm">Security Auditing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
