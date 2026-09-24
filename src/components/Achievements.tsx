import { Calendar, GraduationCap } from "lucide-react";
import { ACHIEVEMENTS } from "../data";
import Reveal from "./Reveal";

interface AchievementsProps {
  theme: "dark" | "light";
}

export default function Achievements({ theme }: AchievementsProps) {
  const isLight = theme === "light";

  return (
    <section id="achievements" className={`w-full py-20 relative ${isLight ? "bg-[#f3f3f3] text-zinc-900" : "bg-[#111111] text-white"}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isLight ? "text-zinc-900" : "text-white"}`}>
            Path & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className={`mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase ${isLight ? "text-zinc-500" : "text-gray-400"}`}>
            Education, Community Engagement, and Milestones
          </p>
        </div>

        {/* Timeline Sequence Layout */}
        <div className="relative border-l-2 border-cyan-500/20 pl-6 sm:pl-10 space-y-12 my-6 ml-3 sm:ml-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 150}>
              <div className="relative">
                {/* Glowing Node Point */}
                <span className="absolute -left-[39px] sm:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-gray-950 border-2 border-cyan-500 flex items-center justify-center box-glow-blue">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                </span>

                {/* Event Card Content */}
                <div className={`p-6 sm:p-8 rounded-xl border transition-all ${isLight ? "glass-card border-zinc-200/80" : "glass-card border-white/5 hover:border-cyan-500/25"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    {/* Organization Banner */}
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        {item.organization}
                      </span>
                    </div>

                    {/* Date/Period */}
                    <div className={`flex items-center gap-1.5 font-mono text-xs ${isLight ? "text-zinc-500" : "text-gray-500"}`}>
                      <Calendar className="w-3.5 h-3.5 text-cyan-400/60" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading text-lg sm:text-xl font-bold mb-3 ${isLight ? "text-zinc-900" : "text-white"}`}>
                    {item.title}
                  </h3>

                  {/* Description text */}
                  <p className={`text-sm leading-relaxed ${isLight ? "text-zinc-700" : "text-gray-400"}`}>
                    {item.description}
                  </p>

                  {/* Internal Path Details */}
                  {idx === 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Collaboration
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-[#1e1e1e] text-[#dfeffc] border border-[#333333] uppercase tracking-widest">
                        Agile
                      </span>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Kali Linux
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-[#1e1e1e] text-[#dfeffc] border border-[#333333] uppercase tracking-widest">
                        SecOps
                      </span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Competitive Coding
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-[#1e1e1e] text-[#dfeffc] border border-[#333333] uppercase tracking-widest">
                        Java Algorithmic
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
