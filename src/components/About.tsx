import { Quote, Landmark, Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";
import Reveal from "./Reveal";

interface AboutProps {
  theme: "dark" | "light";
}

export default function About({ theme }: AboutProps) {
  const isLight = theme === "light";
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
    <section id="about" className={`w-full py-20 relative ${isLight ? "bg-[#f3f3f3] text-zinc-900" : "bg-[#111111] text-white"}`}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isLight ? "text-zinc-900" : "text-white"}`}>
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className={`mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase ${isLight ? "text-zinc-500" : "text-gray-400"}`}>
            My Story, Drive, and Aspirations
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          <Reveal>
            <div className={`relative p-8 sm:p-12 rounded-2xl border overflow-hidden ${isLight ? "bg-white/80 border-cyan-500/15 shadow-[0_18px_40px_rgba(14,116,144,0.10)]" : "glass-card border-cyan-500/10"}`}>
              <div className="absolute top-4 left-4 text-cyan-500/10">
                <Quote className="w-24 h-24 -mt-6 -ml-6" />
              </div>
              <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                  My Core Philosophy
                </span>
                <p className={`font-heading text-xl sm:text-3xl font-medium italic leading-tight mb-6 ${isLight ? "text-zinc-900" : "text-white"}`}>
                  “{PERSONAL_DETAILS.quote}”
                </p>
                <div className="w-8 h-0.5 bg-cyan-500/50 mb-3" />
                <span className={`font-mono text-sm ${isLight ? "text-zinc-600" : "text-gray-400"}`}>
                  — Niraj Kumar Gupta (NirGupta)
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/15 text-cyan-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${isLight ? "text-zinc-900" : "text-white"}`}>
                  Engineering Aspirations
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-10 items-start">
                <div className="space-y-5">
                  <p className={`leading-relaxed text-base sm:text-lg ${isLight ? "text-zinc-700" : "text-gray-400"}`}>
                    As a passionate <strong className={`font-mono ${isLight ? "text-zinc-900" : "text-white"}`}>Computer Engineering Student</strong> from Nepal, I am driven by the way systems communicate, scale, and solve real human problems. I enjoy creating solutions that are both technically sound and genuinely useful.
                  </p>
                  <p className={`leading-relaxed text-base sm:text-lg ${isLight ? "text-zinc-700" : "text-gray-400"}`}>
                    My work blends algorithmic thinking with modern product design—building clean Java logic, practical software systems, and polished frontend experiences with React, Tailwind CSS, and thoughtful UI patterns.
                  </p>
                  <p className={`leading-relaxed text-base sm:text-lg ${isLight ? "text-zinc-700" : "text-gray-400"}`}>
                    Beyond the classroom, I explore cybersecurity, system hardening, and software vulnerabilities in a hands-on way. I believe the most meaningful learning comes from building real applications and refining them through iteration.
                  </p>
                </div>

                <div className={`rounded-2xl border p-6 sm:p-7 ${isLight ? "bg-white/80 border-cyan-500/15 shadow-[0_14px_30px_rgba(14,116,144,0.08)]" : "soft-blue-card"}`}>
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
                    What guides me
                  </p>
                  <div className="space-y-4">
                    {[
                      "Problem solving with clarity and structure",
                      "Building systems that are both useful and scalable",
                      "Learning by shipping real, tested products",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                        <p className={`text-sm sm:text-base leading-relaxed ${isLight ? "text-zinc-700" : "text-gray-300"}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
