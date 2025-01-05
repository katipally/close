import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [rectangleStyle, setRectangleStyle] = useState({
    width: "80%",
    height: "50%",
    borderRadius: "3rem",
  });

  const sections = ["home-1", "home-2", "home-3", "about", "about-2", "work", "work-2"];

  const rectangleStyles = [
    { width: "80%", height: "50%", borderRadius: "3rem" },
    { width: "90%", height: "60%", borderRadius: "2rem" },
    { width: "85%", height: "55%", borderRadius: "2.5rem" },
    { width: "95%", height: "70%", borderRadius: "2rem" },
    { width: "92%", height: "65%", borderRadius: "1.5rem" },
    { width: "88%", height: "58%", borderRadius: "2.8rem" },
    { width: "86%", height: "62%", borderRadius: "2.2rem" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      
      setActiveSection(sectionIndex);
      setRectangleStyle(rectangleStyles[sectionIndex]);

      console.log("Scroll position:", scrollPosition);
      console.log("Active section:", sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="fixed-frame">
        <Navigation />
        <div 
          className="morphing-rectangle"
          style={{
            width: rectangleStyle.width,
            height: rectangleStyle.height,
            borderRadius: rectangleStyle.borderRadius,
          }}
        />
        {sections.map((section, index) => (
          <div
            key={section}
            className={`section ${index === activeSection ? "active" : ""}`}
          >
            {index < 3 && <Hero />}
            {index >= 3 && index < 5 && <About />}
            {index >= 5 && <Work />}
          </div>
        ))}
      </div>
      <div className="scroll-container" />
    </div>
  );
};

export default Index;