import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl mb-8"
        >
          Hey, I'm <span className="brand-text">Yash</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80"
        >
          I turn <span className="brand-text">Data</span> into{" "}
          <span className="brand-text">Stories</span> &{" "}
          <span className="brand-text">Ideas</span> into{" "}
          <span className="text-white">Reality</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;