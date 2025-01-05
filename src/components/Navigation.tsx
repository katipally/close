import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const { scrollYProgress } = useScroll();

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  // Rectangle morphing properties
  const width = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
    ["100%", "95%", "90%", "85%", "80%", "75%", "70%"]
  );
  
  const height = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
    ["100vh", "90vh", "85vh", "80vh", "75vh", "70vh", "65vh"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
    ["0rem", "1rem", "2rem", "2.5rem", "3rem", "3.5rem", "4rem"]
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const menuItem = menuItems.find(
              (item) => item.href === `#${sectionId}`
            );
            if (menuItem) {
              setCurrentSection(menuItem.label);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [menuItems]);

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 p-8 flex items-center space-x-4">
        <span className="brand-text fixed top-0 left-0 z-50 p-8 text-[2.25rem] md:text-[2.5rem]">
          <a href="#home-1">Yash</a>
        </span>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex items-center space-x-2 rounded-full bg-black/80 backdrop-blur-sm p-4 hover:bg-black/90 transition-colors"
          >
            <span className="text-white text-lg">{currentSection}</span>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 z-40"
              onClick={() => setIsOpen(false)}
            >
              <ul className="space-y-1 text-white text-center font-bold">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
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

      {/* Morphing Rectangle */}
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white/60 z-10"
        style={{
          width,
          height,
          borderRadius,
        }}
      />
    </>
  );
};

export default Navigation;