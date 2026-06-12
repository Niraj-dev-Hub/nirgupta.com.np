import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Skills" },
    { id: "projects", label: "Projects" },
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
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="navbar-container"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-2 cursor-pointer font-heading text-xl font-bold tracking-wider group"
          >
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="text-white group-hover:text-cyan-400 transition-colors">
              Nir<span className="text-cyan-400 text-glow-blue font-extrabold font-mono">_Gupta</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative rounded-md nav-underline-hover ${
                    isActive
                      ? "text-cyan-400 bg-white/5 nav-underline-active"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
              className="ml-4 px-4 py-2 border border-cyan-500 text-cyan-400 text-sm font-semibold rounded-lg hover:bg-cyan-500 hover:text-gray-950 transition-all duration-300 box-glow-blue cursor-pointer"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] py-4 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`py-2 text-left text-base font-semibold tracking-wide transition-all ${
                  isActive ? "text-cyan-400 pl-2 border-l-2 border-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            id="mobile-cta-button"
            onClick={() => handleLinkClick("contact")}
            className="mt-3 w-full py-2.5 bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold rounded-lg text-center transition-all shadow-md shadow-cyan-500/20"
          >
            Connect Now
          </button>
        </div>
      </div>
    </nav>
  );
}
