import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import SmoothScroll from "@/components/SmoothScroll";
import Background3D from "@/components/Background3D";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize text splitting animations
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach(title => {
      const splitText = new SplitType(title as HTMLElement, { types: 'words' });
      gsap.from(splitText.words, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Initialize fade-in animations for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white relative">
        <Background3D />
        <Navigation />
        <Hero />
        <About />
        <Work />
      </div>
    </SmoothScroll>
  );
};

export default Index;