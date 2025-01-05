import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navigation />
      <div className="relative z-20">
        <Hero />
        <About />
        <Work />
      </div>
    </div>
  );
};

export default Index;