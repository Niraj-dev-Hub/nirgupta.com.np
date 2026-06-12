import { Github, ExternalLink, Blocks, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-gray-950/40 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
            My Creative Engineering Prototypes
          </p>
        </div>

        {/* Featured Projects Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            // Give the active 'EcoTrack-Nepal' project a featured neon border highlight
            const isLatestEcoTrack = project.title.toLowerCase().includes("ecotrack");
            
            return (
              <Reveal 
                key={project.title} 
                delay={idx * 100}
                className={isLatestEcoTrack ? "md:col-span-2 lg:col-span-3 lg:mb-4" : ""}
              >
                <div 
                  className={`glass-card p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                    isLatestEcoTrack 
                      ? "border border-cyan-500/30 bg-cyan-500/[0.02] box-glow-blue" 
                      : ""
                  }`}
                >
                  {/* Decorative Project Accent Glow on hover */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                  
                  <div>
                    {/* Top badging */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Blocks className="w-5 h-5 text-cyan-400" />
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                          Project_0{idx + 1}
                        </span>
                      </div>
                      {isLatestEcoTrack && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 animate-bounce" />
                          Featured Active Prototyping
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors ${
                      isLatestEcoTrack ? "lg:text-3xl" : ""
                    }`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-400 text-sm sm:text-base leading-relaxed mb-6 ${
                      isLatestEcoTrack ? "lg:max-w-4xl" : ""
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Foot section with tag badges and click action */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/5 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <hr className="border-white/5" />

                    <div className="flex items-center gap-4">
                      <a
                        id={`project-btn-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-gray-950 font-extrabold text-sm rounded-lg transition-all shadow-md shadow-cyan-500/10 cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
