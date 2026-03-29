import { PROJECTS } from "../Data.js";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

const Projects = () => (
  <div id="projects" className="section-divider py-12 md:py-24">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 md:mb-16"
    >
      <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">My Work</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
        Featured <span className="text-[#A1A1AA] font-light">Projects</span>
      </h2>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-10 max-w-5xl mx-auto"
    >
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-80 flex-shrink-0 overflow-hidden relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent lg:bg-gradient-to-r" />
              {/* Featured badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-xs text-[#F5F5F5] border border-white/10">
                <FaStar className="text-[10px] text-[#A1A1AA]" />
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Highlights */}
              {project.highlights && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] border border-white/10 text-[#A1A1AA] px-2 py-0.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="whitespace-pre-line text-[#A1A1AA] text-sm sm:text-base leading-relaxed flex-1 mb-4">
                {project.description}
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.1, y: -1 }}
                    className="text-xs bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/25 px-2.5 py-1 rounded-full transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 border border-white/15 text-[#F5F5F5] text-xs font-medium px-4 py-2 rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-[#F5F5F5] text-[#0F0F0F] text-xs font-semibold px-4 py-2 rounded-full hover:bg-white transition-all"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Projects;