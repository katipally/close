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
      <section id="home-1" className="section">
        <div className="section-content" ref={ref1}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-9xl text-center"
          >
            <span className="text-6xl md:text-8xl font-light">Hey, I'm </span>
            <span className="brand-text">Yash</span>
          </motion.h1>
        </div>
      </section>

      <section id="home-2" className="section">
        <div className="section-content" ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <p className="text-5xl md:text-8xl text-white/90 font-light">
              I turn <span className="text-8xl md:text-9xl font-bold">Data</span> into
            </p>
            <span className="brand-text text-7xl md:text-[14rem] text-white">Stories</span>
          </motion.div>
        </div>
      </section>

      <section id="home-3" className="section">
        <div className="section-content" ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <span className="brand-text text-7xl md:text-[14rem] text-white">&amp; Ideas</span>
            <p className="text-5xl md:text-8xl text-white/90 font-light">
              into <span className="text-white text-8xl md:text-9xl font-bold">Reality</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;