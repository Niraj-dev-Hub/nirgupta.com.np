import { useState, useEffect } from "react";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Skills" },
    { id: "gallery", label: "Gallery" },
    { id: "achievements", label: "Path" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
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

  const isWorkActive = activeSection === "projects";

  return (
    <header
      id="navbar-container"
      className="fixed top-0 left-0 w-full z-50 pt-4 px-3 sm:px-4"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-[92rem] mx-auto">
        <div
          className={`nav-pill flex items-center justify-between gap-3 sm:gap-6 w-full max-w-5xl h-[72px] pl-5 sm:pl-8 pr-2 sm:pr-2.5 rounded-full border backdrop-blur-[14px] ${
            isLight
              ? "bg-white/75 border-black/10 text-zinc-900 shadow-[0_4px_18px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
              : "bg-[oklch(0.28_0_0_/_0.72)] border-white/13 text-white shadow-[0_4px_18px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.2)]"
          }`}
        >
          <button
            type="button"
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-2.5 cursor-pointer shrink-0 group"
            aria-label="Home"
          >
            <Terminal className="w-5 h-5 text-[#4B8FEA] group-hover:rotate-12 transition-transform" />
            <span
              className={`text-[15px] tracking-[0.08em] ${
                isLight ? "text-zinc-900" : "text-white"
              }`}
            >
              <b className="font-semibold">Nir</b>
              <span className="font-light">Gupta</span>
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-end min-w-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative rounded-md nav-underline-hover ${
                    isActive
                      ? isLight
                        ? "text-[#2B6CB0] nav-underline-active"
                        : "text-cyan-400 nav-underline-active"
                      : isLight
                        ? "text-zinc-500 hover:text-zinc-900"
                        : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              id="nav-link-resume"
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex h-12 items-center justify-center px-6 sm:px-8 rounded-full text-[15px] font-semibold border backdrop-blur-[14px] transition-colors ${
                isLight
                  ? "bg-white/70 border-black/10 text-zinc-900 hover:bg-white"
                  : "bg-[oklch(0.28_0_0_/_0.72)] border-white/13 text-white hover:bg-white/10"
              }`}
            >
              Resume
            </a>
            <button
              id="nav-link-projects"
              type="button"
              onClick={() => handleLinkClick("projects")}
              className={`h-12 inline-flex items-center justify-center px-6 sm:px-8 rounded-full text-[15px] font-semibold text-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] relative ${
                isWorkActive
                  ? "bg-gradient-to-b from-[#4B8FEA] to-[#2B6CB0] nav-underline-active"
                  : "bg-gradient-to-b from-[#4B8FEA] to-[#2B6CB0] hover:from-[#5a9af0] hover:to-[#3a7bc4]"
              }`}
            >
              Work
            </button>

            <button
              id="mobile-nav-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`xl:hidden p-2 rounded-full transition-colors ${
                isLight ? "text-zinc-700 hover:bg-black/5" : "text-zinc-300 hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          id="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
          className={`h-[72px] w-[72px] shrink-0 rounded-full border grid place-items-center backdrop-blur-[14px] transition-colors ${
            isLight
              ? "bg-white/75 border-black/10 text-zinc-600 hover:text-zinc-900 shadow-[0_4px_18px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
              : "bg-[oklch(0.28_0_0_/_0.72)] border-white/13 text-zinc-400 hover:text-white shadow-[0_4px_18px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.2)]"
          }`}
        >
          {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      <div
        id="mobile-nav-menu"
        className={`xl:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[420px] py-3 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`mx-3 rounded-3xl border p-4 flex flex-col gap-1 ${
            isLight
              ? "bg-white/90 border-black/10 text-zinc-900"
              : "bg-zinc-950/95 border-white/10 text-white backdrop-blur-lg"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`py-2 text-left text-base font-semibold tracking-wide transition-all relative ${
                  isActive
                    ? "text-cyan-400 pl-2 border-l-2 border-cyan-400 nav-underline-active"
                    : isLight
                      ? "text-zinc-500 hover:text-zinc-900"
                      : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-2 py-2.5 text-center rounded-full border border-white/15 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <button
            id="mobile-cta-button"
            type="button"
            onClick={() => handleLinkClick("contact")}
            className="mt-2 w-full py-2.5 bg-[#4B8FEA] hover:bg-[#2B6CB0] text-white font-bold rounded-full text-center transition-all"
          >
            Connect Now
          </button>
        </div>
      </div>
    </header>
  );
}
