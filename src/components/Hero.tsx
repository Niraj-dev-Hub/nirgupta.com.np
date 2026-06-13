import { useEffect, useState } from "react";
import { Terminal, ArrowRight, FileText, MapPin, Code, Shield } from "lucide-react";
import { PERSONAL_DETAILS, TYPING_WORDS } from "../data";

const profileAvatar = "/images/pp.jpeg";

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing letters
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          // Finished typing, pause
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting letters
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
          setTypingSpeed(100);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 60 : 120);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx, typingSpeed]);

  const scrollToSection = (id: string) => {
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

  const handleDownloadResume = () => {
    window.open("public/Resume.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden w-full"
    >
      {/* Decorative Cyber Blur Backgrounds */}
      <div className="absolute top-1/4 left-[10%] w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="section-container relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Introductions, Text, Secondary Terminal */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Hardware Status Tag */}
          <div className="inline-flex items-center gap-2 bg-slate-950/60 border border-white/10 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono text-gray-300 tracking-wider backdrop-blur-md">
            <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{PERSONAL_DETAILS.location}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
            <span className="text-gray-400">Available for Opportunities</span>
          </div>

          {/* Introduction Prompt */}
          <p className="font-mono text-cyan-400 text-sm sm:text-base font-bold tracking-widest uppercase">
            Hello World, I am
          </p>

          {/* Fully scalable fluid typography */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
            {PERSONAL_DETAILS.fullName}
          </h1>

          {/* Custom animated typing cursor line */}
          <div className="min-h-[40px] sm:min-h-[50px]">
            <h2 className="font-mono text-xl sm:text-3xl text-gray-300 font-medium tracking-tight">
              I specialize in{" "}
              <span className="text-cyan-400 text-glow-blue border-r-2 border-cyan-400 pr-1 animate-pulse">
                {text}
              </span>
            </h2>
          </div>

          {/* Brief presentation summary */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            {PERSONAL_DETAILS.role}. Focused on building high-performance decentralized web applications, mastering competitive software architectures, and hardening network boundaries.
          </p>

          {/* CTA Action Block */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full max-w-md pt-4">
            <button
              id="hero-cta-work"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-extrabold text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/25 border border-cyan-400/20 active:scale-95 cursor-pointer"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-resume"
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-semibold text-base rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Resume (PDF)
            </button>
          </div>

          {/* Interactive Compact Terminal Display */}
          <div className="w-full max-w-xl pr-2 pt-6">
            <div className="glass-card rounded-xl p-4 text-left border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/70" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/70" />
                <span className="w-3.5 h-3.5 rounded-full bg-cyan-500/70" />
                <span className="font-mono text-xs text-gray-500 ml-2">bash ~ nirgupta.sh</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-1.5 leading-relaxed">
                <p className="text-gray-500"># System Hardware Profile</p>
                <p>
                  <span className="text-cyan-400">$</span> fetch-profile --user nirgupta
                </p>
                <p className="text-emerald-400">
                  ▸ Node: <span className="text-white">Active</span> | Active Domain:{" "}
                  <span className="text-white">{PERSONAL_DETAILS.domain}</span>
                </p>
                <p className="text-emerald-400">
                  ▸ Engineering Focus: <span className="text-white">Full Stack Sprints / Systems Sec</span>
                </p>
                <p className="text-emerald-400">
                  ▸ Live Build: <span className="text-white">{PERSONAL_DETAILS.currentlyBuildingName}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High Quality Stylized Profile Photo with Tech Accents */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Glowing Cyber Pulser Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-cyan-400/40 cyber-pulse-active" />

            {/* Orbiting micro tech tags */}
            <div className="absolute top-[10%] left-[10%] bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono px-2 py-1 rounded shadow-md z-10 flex items-center gap-1">
              <Code className="w-3 h-3" />
              <span>DEV</span>
            </div>
            <div className="absolute bottom-[10%] right-[10%] bg-slate-900/90 border border-blue-500/30 text-blue-400 text-[10px] font-mono px-2 py-1 rounded shadow-md z-10 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>SEC</span>
            </div>

            {/* Main Mirror Glass Frame */}
            <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl relative group bg-slate-900">
              
              {/* Profile Image Asset with no-referrer policy */}
              <img
                src={profileAvatar}
                alt="Niraj Kumar Gupta Profile Picture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Cyan Digital Grid scanoverlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d405_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            </div>

            {/* Tech Corner brackets */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60" />
          </div>
        </div>

      </div>
    </section>
  );
}
