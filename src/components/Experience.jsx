import { EXPERIENCES } from "../Data.js";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Professional Experience
        </span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-0 lg:left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 group"
            >
              <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* Year Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full lg:w-1/4 relative"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <FaCalendarAlt className="text-lg" />
                      <p className="font-semibold">{experience.year}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md"
                      />
                      <div className="relative w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-neutral-950" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-full lg:w-3/4"
                >
                  <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    {/* Role and Company */}
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-3 rounded-lg">
                          <FaBriefcase className="text-2xl text-white" />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <h6 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
                          {experience.role}
                        </h6>
                        <p className="text-neutral-300 font-semibold">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: techIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-purple-300 border border-purple-500/30 hover:border-cyan-500/50 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Animated Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-0.5 mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full shadow-xl"
        >
          <p className="text-white font-bold text-lg">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl"
            >
              {EXPERIENCES.length}+
            </motion.span>{" "}
            Professional Experiences
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
