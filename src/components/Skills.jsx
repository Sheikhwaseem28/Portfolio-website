import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaTools, FaBook } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: FaCode,
      skills: ["C++", "JavaScript", "SQL", "Python", "C"],
    },
    {
      category: "Frameworks & Tech",
      icon: FaServer,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-Learn",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: FaCloud,
      skills: ["REST APIs", "Microservices", "Google Cloud (GCP)"],
    },
    {
      category: "Developer Tools",
      icon: FaTools,
      skills: ["VS Code", "GitHub", "Postman"],
    },
    {
      category: "Core CS",
      icon: FaBook,
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
      ],
    },
  ];

  return (
    <div id="skills" className="section-divider py-12 md:py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Proficiencies</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
          Technical <span className="text-[#A1A1AA] font-light">Skills</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Compact Categorized Chips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            // Frame frameworks section wider if it contains more items, otherwise keep it regular
            const isFrameworks = cat.category === "Frameworks & Tech";
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-start ${isFrameworks ? "lg:col-span-2" : ""
                  }`}
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/0 rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                      <Icon className="text-sm" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-white transition-colors duration-300">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Chips List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 text-[#D1D5DB] hover:text-white px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
