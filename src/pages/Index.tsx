import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import { SmoothScroll } from "@/components/SmoothScroll";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <Navigation />
        
        {/* Background Rectangle */}
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70vh] border-2 border-white/60 rounded-[3rem] bg-black/50 backdrop-blur-sm z-0"
          style={{
            y: backgroundY,
            opacity
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Work />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Index;