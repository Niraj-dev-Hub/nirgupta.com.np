import { ArrowUp, Terminal } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

interface FooterProps {
  theme: "dark" | "light";
}

export default function Footer({ theme }: FooterProps) {
  const isLight = theme === "light";
  const currentYear = new Date().getFullYear();

  const handleArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "achievements", label: "Path" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer id="footer-container" className={`w-full py-12 relative overflow-hidden border-t ${isLight ? "bg-[#f3f3f3] border-zinc-200" : "bg-gray-950 border-white/5"}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo brand and Domain */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-heading text-lg font-bold tracking-wider">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className={isLight ? "text-zinc-900" : "text-white"}>
                Nir<span className="text-cyan-400 font-mono">_Gupta</span>
              </span>
            </div>
            <a 
              href={`https://${PERSONAL_DETAILS.domain}`}
              className={`text-xs sm:text-sm font-mono hover:text-cyan-400 transition-colors ${isLight ? "text-zinc-500" : "text-gray-500"}`}
            >
              {PERSONAL_DETAILS.domain}
            </a>
          </div>

          {/* Sitemapped Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 max-w-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs sm:text-sm hover:text-cyan-400 font-medium transition-colors cursor-pointer font-sans ${isLight ? "text-zinc-600" : "text-gray-400"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Built with label & scroll back to top */}
          <div className="flex items-center gap-6">
            <div className="text-center md:text-right space-y-1">
              <p className={`text-sm ${isLight ? "text-zinc-700" : "text-gray-400"}`}>
                Built with <span className="text-cyan-400 animate-pulse">💻</span> by <strong className={isLight ? "text-zinc-900" : "text-white"}>{PERSONAL_DETAILS.shortName}</strong>
              </p>
              <p className={`text-xs font-mono ${isLight ? "text-zinc-500" : "text-gray-600"}`}>
                © {currentYear} Niraj Kumar Gupta.
              </p>
            </div>

            {/* Quick jump back to top */}
            <button
              id="footer-back-to-top"
              onClick={handleArrowClick}
              className={`p-3 border rounded-xl transition-all active:scale-95 group cursor-pointer ${isLight ? "bg-white border-zinc-200 text-zinc-600 hover:border-cyan-500 hover:text-gray-950" : "dark-button hover:bg-cyan-500 hover:text-gray-950"}`}
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
