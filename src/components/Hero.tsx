import { useEffect, useState } from "react";
import { PERSONAL_DETAILS, TYPING_WORDS } from "../data";

const profileAvatar = "/images/newPP.jpg";

interface HeroProps {
  theme: "dark" | "light";
}

export default function Hero({ theme }: HeroProps) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const isLight = theme === "light";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
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

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden w-full ${
        isLight ? "bg-[#f3f3f3] text-zinc-900" : "bg-[#111111] text-white"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <div className="relative mb-6 sm:mb-8">
          <div
            className={`w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-90 lg:h-90 rounded-full p-[10px] sm:p-[8px] ${
              isLight ? "bg-zinc-300/80" : "bg-[#2a2a2a]"
            }`}
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden border ${
                isLight ? "border-black/10" : "border-white/13"
              }`}
            >
              <img
                src={profileAvatar}
                alt="Niraj Kumar Gupta Profile Picture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          className={`font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-semibold tracking-tight leading-[1.08] max-w-4xl ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
        >
         <span className="text-[#4B8FEA]">Niraj Gupta <br/></span>
        
         
        </h1>

        <div className="mt-5 min-h-[2rem] sm:min-h-[2.5rem]">
          <p
            className={`text-lg sm:text-2xl font-medium ${
              isLight ? "text-zinc-600" : "text-zinc-300"
            }`}
          >
            I specialize in{" "}
            <span className="text-[#4B8FEA] caret-blink pr-0.5">
              {text}
            </span>
          </p>
        </div>

        <p
          className={`mt-3 text-base sm:text-xl md:text-2xl font-normal max-w-3xl leading-relaxed ${
            isLight ? "text-zinc-500" : "text-[#b3b3b3]"
          }`}
        >
         {PERSONAL_DETAILS.role}.
        </p>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#4B8FEA] hover:opacity-80 transition-opacity"
      >
        <svg viewBox="0 0 40 40" className="w-8 h-8 animate-bounce" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 4.5h36l-3.24 5.61H5.24L2 4.5Z" fill="currentColor" />
          <path d="M9.38 17.28h21.24l-3.24 5.61H12.62l-3.24-5.61Z" fill="currentColor" />
          <path d="M16.76 30.07h6.48L20 35.68l-3.24-5.61Z" fill="currentColor" />
        </svg>
      </button>
    </section>
  );
}
