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
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-4xl md:text-4.5xl"><a href="#home-1">Yash</a></span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 rounded-full bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-sm transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex items-center justify-center">
          <ul className="space-y-8 text-center">
            {menuItems.map((item) => (
              <li key={item.label} className="animate-fade-in">
                <a
                  href={item.href}
                  className="text-2xl hover:text-white/70 transition-colors"
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