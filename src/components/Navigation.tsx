import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Import both icons
import { cn } from "@/lib/utils";

import { motion, useViewportScroll, useTransform } from "framer-motion";

const FixedRectangle = ({ scrollYProgress }) => {
  // Rectangle morphing properties
  const rectangleWidth = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [
    "80%",
    "85%",
    "90%",
    "95%",
  ]);
  const rectangleHeight = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [
    "50%",
    "60%",
    "65%",
    "70%",
  ]);
  const rectangleBorderRadius = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [
    "3rem",
    "2rem",
    "1.5rem",
    "1rem",
  ]);
  const rectangleOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white/60 z-50"
      style={{
        width: rectangleWidth,
        height: rectangleHeight,
        borderRadius: rectangleBorderRadius,
        opacity: rectangleOpacity,
      }}
    />
  );
};


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu toggle state
  const [currentSection, setCurrentSection] = useState("Home"); // Current section state

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({}); // Store references to each section

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Contact Me", href: "#contact" },
  ];

  useEffect(() => {
    // Initialize section refs dynamically
    menuItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // Check which section is visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(
              menuItems.find((item) => item.href === `#${entry.target.id}`).label
            );
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [menuItems]);

  return (
    <nav className="fixed top-0 right-0 z-50 p-8 flex items-center space-x-4">
      {/* Brand Name */}
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-[2.25rem] md:text-[2.5rem]">
        <a href="#home-1">Yash</a>
      </span>

      {/* Hamburger Menu */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center space-x-2 rounded-full border-2 border-white/60 bg-black px-6 py-3 hover:bg-black/90 transition-colors"
        >
          {/* Current Section Name */}
          <span className="text-white text-lg font-medium">{currentSection}</span>
          {/* Conditional Icon */}
          {isOpen ? (
            <X className="w-5 h-5 text-white ml-2" />
          ) : (
            <Menu className="w-5 h-5 text-white ml-2" />
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-[280px] bg-black border-2 border-white/60 rounded-full py-2 z-40"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            <ul className="space-y-1 text-white text-center font-medium px-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 rounded-full transition-colors",
                      item.label === currentSection
                        ? "bg-white text-black"
                        : "hover:bg-white/10"
                    )}
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

