import { ArrowUp, Terminal } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

export default function Footer() {
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
    <footer id="footer-container" className="w-full bg-gray-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo brand and Domain */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-heading text-lg font-bold tracking-wider">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-white">
                Nir<span className="text-cyan-400 font-mono">_Gupta</span>
              </span>
            </div>
            <a 
              href={`https://${PERSONAL_DETAILS.domain}`}
              className="text-xs sm:text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors"
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
                className="text-xs sm:text-sm text-gray-400 hover:text-cyan-400 font-medium transition-colors cursor-pointer font-sans"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Built with label & scroll back to top */}
          <div className="flex items-center gap-6">
            <div className="text-center md:text-right space-y-1">
              <p className="text-gray-400 text-sm">
                Built with <span className="text-cyan-400 animate-pulse">💻</span> by <strong className="text-white">{PERSONAL_DETAILS.shortName}</strong>
              </p>
              <p className="text-gray-600 text-xs font-mono">
                © {currentYear} Niraj Kumar Gupta.
              </p>
            </div>

            {/* Quick jump back to top */}
            <button
              id="footer-back-to-top"
              onClick={handleArrowClick}
              className="p-3 bg-white/5 hover:bg-cyan-500 border border-white/10 hover:border-cyan-500 text-gray-400 hover:text-gray-950 rounded-xl transition-all active:scale-95 group cursor-pointer"
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
