import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "Java", "R"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React JS"],
    },
    {
      category: "Database Management",
      items: ["MySQL", "SQL"],
    },
    {
      category: "Artificial Intelligence",
      items: ["Data Engineering", "Machine Learning", "Deep Learning", "Computer Vision"],
    },
    {
      category: "Graphic Design & Tools",
      items: ["Photoshop", "Illustrator", "Canva", "Figma"],
    },
  ];

  return (
    <>
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-7xl aspect-[4/1] rounded-[3rem] border-2 border-white/60 bg-black flex flex-col items-bottom justify-center p-8 mb-48"
        >
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-center">About Me</h2>
          <p className="text-lg md:text-xl text-white/80 text-center max-w-4xl">
            Hi, I am Yash, a passionate Data Analytics graduate student at San José State University
            with a solid background in Computer Science and Engineering. I have experience in machine
            learning, deep learning, computer vision, and web development. I thrive in challenging
            environments where I can utilize my problem-solving skills, creativity, and collaborative
            mindset.
          </p>
        </motion.div>
        </div>
    </section>

    <section id="about-2" className="section">
    <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-7xl rounded-[3rem] border-2 border-white/60 bg-black flex flex-col items-bottom justify-center p-12"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-bold">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2 text-white/80">
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;