import { PROJECTS } from "../Data.js";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
Projects
        </span>
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16 max-w-6xl mx-auto px-4"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="flex flex-col sm:flex-row gap-6 bg-neutral-900/30 backdrop-blur-sm rounded-2xl border border-neutral-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 p-6 h-auto sm:h-72"
            >
              {/* Project Image */}
              <div className="w-full sm:w-80 flex-shrink-0">
                <motion.div
                  className="relative overflow-hidden rounded-xl group/image h-full border-2 border-neutral-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-70 group-hover/image:opacity-40 transition-opacity duration-300" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0, scale: 1 }}
                    whileHover={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="absolute inset-0 flex items-center justify-center gap-6 bg-black/60 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="bg-purple-500 p-6 rounded-full hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/50"
                    >
                      <FaGithub className="text-4xl text-white" />
                    </motion.a>
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-cyan-500 p-6 rounded-full hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/50"
                      >
                        <FaExternalLinkAlt className="text-4xl text-white" />
                      </motion.a>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.5 },
                    }}
                    className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <FaStar />
                    Featured
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Highlights */}
                  {project.highlights && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-wrap gap-2 mb-3"
                    >
                      {project.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-neutral-400 leading-relaxed text-sm mb-4 line-clamp-3"
                  >
                    {project.description}
                  </motion.p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs bg-neutral-800/50 rounded-full text-purple-400 border border-neutral-700 hover:border-purple-500 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-3 mt-auto"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors shadow-lg text-sm font-semibold"
                  >
                    <FaGithub className="text-lg" />
                    <span>View Code</span>
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors shadow-lg text-sm font-semibold"
                    >
                      <FaExternalLinkAlt className="text-base" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>

              <motion.div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
