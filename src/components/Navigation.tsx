import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface MenuItem {
  label: string;
  href: string;
}

interface Position {
  left: number;
  width: number;
  opacity: number;
}

const AnimatedNavigation = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  
  const menuItems: MenuItem[] = [
    { label: "Home", href: "#home-1" },
    { label: "About Me", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Initialize section refs
    menuItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const matchingItem = menuItems.find(
              (item) => item.href === `#${entry.target.id}`
            );
            if (matchingItem) {
              setCurrentSection(matchingItem.label);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section instanceof HTMLElement) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 right-0 z-50 p-8 flex items-center">
      <span className="brand-text fixed top-0 left-0 z-50 p-8 text-[2.25rem] md:text-[2.5rem]">
        <a href="#home-1">Yash</a>
      </span>

      <ul 
        className="relative flex w-fit rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm p-1"
        onMouseLeave={() => {
          setPosition(prev => ({
            ...prev,
            opacity: 0,
          }));
        }}
      >
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            setPosition={setPosition}
            isActive={currentSection === item.label}
          >
            {item.label}
          </NavItem>
        ))}
        
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

interface NavItemProps {
  children: string;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  isActive: boolean;
}

const NavItem = ({ children, href, setPosition, isActive }: NavItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-none px-4 py-2 text-sm md:text-base transition-colors ${
        isActive
          ? 'text-white font-bold hover:mix-blend-difference'
          : 'text-white/70 hover:text-white hover:mix-blend-difference'
      }`}
    >
      <a href={href} className="cursor-pointer">
        {children}
      </a>
    </li>
  );
};




interface CursorProps {
  position: Position;
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
        top: "5px",
      }}
      className="absolute z-0 h-[calc(100%-10px)] top-5 rounded-full bg-white/100"
    />
  );
};

export default AnimatedNavigation;