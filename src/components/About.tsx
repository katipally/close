import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "Java", "R"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React JS", "NodeJS"],
    },
    {
      category: "Data Engineering Tools",
      items: ["Hadoop", "Spark", "Snowflake","Airflow", "Apache Kafka", "DBT", "AWS Glue"],
    },
    {
      category: "Data Science Tools",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Computer Vision"],
    },
    {
      category: "Visualization Tools",
      items: ["Power BI", "Tableau", "Looker", "D3.js"],
    },
    {
      category: "Cloud Technologies",
      items: ["AWS (EC2, S3, Lambda, SageMaker)", "Azure (Data Factory, Synapse Analytics)", "Google Cloud Platform (BigQuery, Dataflow)"],
    },
    {
      category: "Database Management",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Graphic Design & Tools",
      items: ["Photoshop", "Illustrator", "Canva", "Figma"],
    },
    {
      category: "Other Skills",
      items: ["Data Warehousing", "Data Preprocessing", "ETL Processes", "Feature Engineering", "Model Deployment (MLflow, AWS SageMaker)", "Statistics", "Experimentation Design", "Prompt Engineering"],
    },
    {
      category: "Soft Skills",
      items: ["Effective Communication", "Analytical Thinking", "Problem-Solving", "Attention to Detail", "Time Management", "Adaptability", "Team Collaboration", "Initiative", "Critical Thinking", "Eagerness to Learn", "Creative Problem-Solving", "Multi-tasking", "Active Listening"],
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
          I am a Data Analytics graduate student at San José State University with a strong foundation in Computer Science and Engineering. My expertise includes designing efficient data pipelines, building ETL workflows, and developing machine learning models to extract actionable insights. I excel at analyzing complex datasets, creating predictive models, and transforming raw data into meaningful solutions.
          With experience in cloud platforms, database management, and data visualization tools, I focus on delivering precise, data-driven results that inform strategic decision-making. I aim to leverage my technical skills and analytical mindset to contribute to impactful and innovative projects.
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl mb-4 font-bold">{skillGroup.category}</h3>
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