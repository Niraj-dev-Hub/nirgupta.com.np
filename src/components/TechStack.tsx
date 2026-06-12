import { Code, Layout, Database, Wrench, Terminal, Cpu } from "lucide-react";
import { SKILL_GROUPS } from "../data";
import Reveal from "./Reveal";

export default function TechStack() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-6 h-6 text-cyan-400" />;
      case "layout":
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case "database":
        return <Database className="w-6 h-6 text-cyan-400" />;
      case "wrench":
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case "terminal":
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="tech-stack" className="w-full py-20 bg-gray-950 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
            Languages, Libraries, Systems, & Tools
          </p>
        </div>

        {/* Responsive Grid representing grouped skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 100}>
              <div className="glass-card hover:translate-y-[-4px] transition-all duration-300 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                      {getIcon(group.icon)}
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>

                  <hr className="border-white/5 mb-6" />

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle technology metadata line */}
                <span className="font-mono text-[10px] text-gray-600 mt-8 tracking-wider block text-right">
                  GRP_0{idx + 1} // SYS_STK
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
