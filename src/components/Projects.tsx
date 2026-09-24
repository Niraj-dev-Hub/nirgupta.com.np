import { Github, Blocks, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";
import Reveal from "./Reveal";

interface ProjectsProps {
  theme: "dark" | "light";
}

export default function Projects({ theme }: ProjectsProps) {
  const isLight = theme === "light";

  return (
    <section id="projects" className={`w-full py-20 relative ${isLight ? "bg-[#f3f3f3] text-zinc-900" : "bg-[#111111] text-white"}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isLight ? "text-zinc-900" : "text-white"}`}>
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className={`mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase ${isLight ? "text-zinc-500" : "text-gray-400"}`}>
            My Creative Engineering Prototypes
          </p>
        </div>

        {/* Featured Projects Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const isFeaturedProject = Boolean(project.featured);

            return (
              <Reveal 
                key={project.title} 
                delay={idx * 100}
                className={isFeaturedProject ? "md:col-span-2 lg:col-span-3 lg:mb-4" : ""}
              >
                <div 
                  className={`p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                    isLight
                      ? "glass-card"
                      : "dark-surface shadow-[0_18px_35px_rgba(2,6,23,0.42)]"
                  } ${
                    isFeaturedProject && !isLight
                      ? "border-[#23415d] bg-[#0f1e2f]"
                      : ""
                  }`}
                >
                  {/* Decorative Project Accent Glow on hover */}
                  <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${isLight ? "bg-cyan-500/10 group-hover:bg-cyan-500/15" : "bg-[#7dd3fc]/10 group-hover:bg-[#7dd3fc]/15"}`} />
                  
                  <div>
                    {/* Top badging */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Blocks className="w-5 h-5 text-cyan-400" />
                        <span className={`font-mono text-xs uppercase tracking-widest ${isLight ? "text-zinc-500" : "text-gray-500"}`}>
                          Project_0{idx + 1}
                        </span>
                      </div>
                      {isFeaturedProject && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${isLight ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" : "text-[#d8f5ff] bg-[#11263a] border-[#2d5d7a]"}`}>
                          <Sparkles className="w-3.5 h-3.5 animate-bounce" />
                          Featured Active Prototyping
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-4 transition-colors ${
                      isFeaturedProject ? "lg:text-3xl" : ""
                    } ${isLight ? "text-zinc-900 group-hover:text-cyan-400" : "text-[#e6f8ff] group-hover:text-[#9ad8ff]"}`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isFeaturedProject ? "lg:max-w-4xl" : ""
                    } ${isLight ? "text-zinc-700" : "text-slate-300"}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Foot section with tag badges and click action */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${isLight ? "bg-[#1e1e1e] text-zinc-200 border-[#333333]" : "bg-[#1e1e1e] border-[#333333] text-[#dfeffc]"}`}
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
                        className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 border font-extrabold text-sm rounded-lg transition-all cursor-pointer ${
                          isLight
                            ? "bg-cyan-500 hover:bg-cyan-600 text-gray-950 shadow-md shadow-cyan-500/10"
                            : "dark-button shadow-[0_10px_24px_rgba(11,178,220,0.12)]"
                        } active:scale-95`}
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
