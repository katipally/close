import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      
      if (sectionIndex < 3) {
        setCurrentSection("Home");
      } else if (sectionIndex < 5) {
        setCurrentSection("About Me");
      } else {
        setCurrentSection("My Work");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 right-0 z-50 p-8 flex items-center space-x-4">
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-[2.25rem] md:text-[2.5rem]">
        <a href="#home-1">Yash</a>
      </span>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-colors"
        >
          <span className="text-white text-lg">{currentSection}</span>
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-40"
            onClick={() => setIsOpen(false)}
          >
            <ul className="space-y-1 text-black text-center font-bold">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-200 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;