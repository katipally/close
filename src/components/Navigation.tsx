import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const menuItems = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact Me", href: "#contact" },
  ];

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
    <nav className="fixed top-0 right-0 z-50 p-8 flex items-center space-x-4">
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-[2.25rem] md:text-[2.5rem]">
        <a href="#home-1">Yash</a>
      </span>

      <motion.div
        className="relative"
        animate={isOpen ? {
          width: "auto",
        } : {
          width: "auto",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="relative z-50 flex items-center space-x-2 border-2 border-white/60 bg-black overflow-hidden"
          animate={isOpen ? {
            borderRadius: "2rem",
            width: "auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          } : {
            borderRadius: "9999px",
            width: "3.5rem",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center py-3 space-x-2"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.div>
            <motion.span 
              className="text-white text-lg font-medium origin-left"
              initial={false}
              animate={isOpen ? { 
                opacity: 1,
                x: 0,
                display: "block"
              } : { 
                opacity: 0,
                x: -20,
                transitionEnd: {
                  display: "none"
                }
              }}
              transition={{ duration: 0.2 }}
            >
              {currentSection}
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  opacity: 0,
                  x: -20,
                  transition: {
                    duration: 0.2
                  }
                }}
                className="flex items-center gap-4 ml-4"
              >
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-2 rounded-full transition-colors whitespace-nowrap",
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
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navigation;