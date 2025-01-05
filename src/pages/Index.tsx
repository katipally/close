import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
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