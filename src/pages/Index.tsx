import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

const Index = () => {
  const [rectangleStyle, setRectangleStyle] = useState({
    width: "80%",
    height: "50%",
    borderRadius: "3rem",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is currently in view
      const section = Math.floor(scrollPosition / windowHeight);
      
      // Define different styles for each section
      const styles = [
        { width: "80%", height: "50%", borderRadius: "3rem" }, // home-1
        { width: "85%", height: "60%", borderRadius: "2.5rem" }, // home-2
        { width: "90%", height: "65%", borderRadius: "2rem" }, // home-3
        { width: "95%", height: "70%", borderRadius: "1.5rem" }, // about
        { width: "85%", height: "75%", borderRadius: "1rem" }, // about-2
        { width: "80%", height: "60%", borderRadius: "2rem" }, // work
        { width: "90%", height: "55%", borderRadius: "2.5rem" }, // work-2
      ];

      // Get the current section's style
      const currentStyle = styles[Math.min(section, styles.length - 1)];
      
      setRectangleStyle(currentStyle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="morphing-rectangle" style={rectangleStyle} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
      </div>
    </div>
  );
};

export default Index;