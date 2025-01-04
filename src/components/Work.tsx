import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "Driver Alertness Detection Using Computer Vision And Machine Learning",
      image: "/placeholder.svg",
    },
    {
      title: "Smart Shopping Cart - IoT",
      image: "/placeholder.svg",
    },
    {
      title: "Netflix Clone",
      image: "/placeholder.svg",
    },
    {
      title: "Virtual Mouse Using Computer Vision",
      image: "/placeholder.svg",
    },
  ];

  const publications = [
    {
      title: "Unveiling The Impact Of Attention Mechanisms On Text Generation: A Comparative Study",
    },
    {
      title: "Detection Driver Alertness System Using Machine Learning And Computer Vision",
    },
  ];

  return (
    <>
    <section id="work" className="section">
      <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full max-w-7xl rounded-[2rem] border-2 border-white/60 bg-black flex flex-col items-bottom justify-center p-8"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10"
                />
                <h3 className="text-xl text-center">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
    </section>

        <section id="work-2" className="section">
        <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full max-w-7xl rounded-[2rem] border-2 border-white/60 bg-black flex flex-col items-bottom justify-center p-8"
              >
                <h3 className="text-xl text-center">{publication.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Work;