import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <section id="home-1" className="section min-h-screen relative overflow-hidden">
        {/* Gradient overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-purple-500/20 via-pink-500/20 to-transparent" />
        
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8" ref={ref1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            <h1 className="text-7xl md:text-9xl tracking-tight">
              <span className="text-6xl md:text-8xl font-extralight">Hey, I'm </span>
              <span className="brand-text bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Yash</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section id="home-2" className="section">
        <div className="w-full max-w-7xl mx-auto text-center" ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <p className="text-5xl md:text-8xl text-white/90 font-extralight">
              I turn <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Data</span> into
            </p>
            <div className="relative w-full max-w-7xl aspect-[4/1] rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              <span className="brand-text text-7xl md:text-[14rem] bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Stories</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="home-3" className="section">
        <div className="w-full max-w-7xl mx-auto text-center" ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="relative w-full max-w-7xl aspect-[4/1] rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              <span className="brand-text text-7xl md:text-[14rem] bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">&amp; Ideas</span>
            </div>
            <p className="text-5xl md:text-8xl text-white/90 font-extralight">
              into <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Reality</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;