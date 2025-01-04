import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-4xl md:text-4.5xl">
        <a href="#home-1">Yash</a>
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 rounded-full bg-black px-6 py-3 hover:bg-black/80 transition-colors border border-white/10 flex items-center gap-2"
      >
        <span className="text-white">Home</span>
        {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      <div
        className={cn(
          "fixed top-0 right-0 mt-24 mr-8 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-[2rem] py-6 px-12 min-w-[200px]">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label} className="animate-fade-in text-center">
                <a
                  href={item.href}
                  className="text-black text-lg hover:text-black/70 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;