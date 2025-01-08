import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Import both icons
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center space-x-2 rounded-full border-2 border-white/60 bg-black px-6 py-3 hover:bg-black/90 transition-colors"
          animate={isOpen ? {
            borderRadius: "1rem",
            width: "280px",
            transition: { duration: 0.3, ease: "easeInOut" }
          } : {
            borderRadius: "9999px",
            width: "auto",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          {/* Current Section Name */}
          <span className="text-white text-lg font-medium">{currentSection}</span>
          {/* Conditional Icon */}
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white ml-2" />
            ) : (
              <Menu className="w-5 h-5 text-white ml-2" />
            )}
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-[280px] bg-black border-2 border-white/60 rounded-2xl py-2 z-40"
              onClick={() => setIsOpen(false)}
            >
              <motion.ul 
                className="flex flex-row flex-wrap gap-2 text-white text-center font-medium px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {menuItems.map((item) => (
                  <li key={item.label} className="w-full">
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
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
