import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const { scrollYProgress } = useScroll();

  // Rectangle morphing properties
  const rectangleWidth = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "90%",
    "85%",
    "80%",
    "75%",
    "70%",
    "65%",
  ]);
  const rectangleHeight = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "80%",
    "75%",
    "70%",
    "65%",
    "60%",
    "55%",
  ]);
  const rectangleBorderRadius = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "3rem",
    "2.5rem",
    "2rem",
    "1.75rem",
    "1.5rem",
    "1.25rem",
  ]);

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const sectionRefs = useRef({});

  useEffect(() => {
    menuItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(
              menuItems.find((item) => item.href === `#${entry.target.id}`).label
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

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
            className="relative z-50 flex items-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-colors"
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

      {/* Morphing Rectangle */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white/60 z-10"
        style={{
          width: rectangleWidth,
          height: rectangleHeight,
          borderRadius: rectangleBorderRadius,
        }}
      />
    </>
  );
};

export default Navigation;