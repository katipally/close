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
        className="relative z-50 rounded-[1rem] bg-white/5 backdrop-blur-md px-6 py-4 hover:bg-white/10 transition-colors border border-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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