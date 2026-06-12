import { Award, Calendar, Bookmark, GraduationCap, ChevronRight } from "lucide-react";
import { ACHIEVEMENTS } from "../data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-20 bg-gray-950/40 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Path & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
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
                <div className="glass-card p-6 sm:p-8 rounded-xl border border-white/5 hover:border-cyan-500/25 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    {/* Organization Banner */}
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        {item.organization}
                      </span>
                    </div>

                    {/* Date/Period */}
                    <div className="flex items-center gap-1.5 text-gray-500 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400/60" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description text */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Internal Path Details */}
                  {idx === 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Collaboration
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-white/5 text-gray-400 uppercase tracking-widest">
                        Agile
                      </span>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Kali Linux
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-white/5 text-gray-400 uppercase tracking-widest">
                        SecOps
                      </span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                        Competitive Coding
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-white/5 text-gray-400 uppercase tracking-widest">
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
