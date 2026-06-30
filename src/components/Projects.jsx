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
      {PROJECTS.map((project, index) => {
        // Split description by newlines and clean up bullet points
        const points = project.description
          ? project.description
              .split("\n")
              .map((p) => p.trim())
              .filter((p) => p.length > 0)
              .map((p) => p.replace(/^[•\s\-*]+/, ""))
          : [];

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group relative"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/0 rounded-full blur-3xl pointer-events-none group-hover:bg-white/5 transition-all duration-500" />

            {/* Top terminal-style window dot decoration */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#EF4444]/60 transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#F59E0B]/60 transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#10B981]/60 transition-colors duration-300" />
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#A1A1AA]">
                project_{index + 1}.config
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 relative z-10">
              {/* Left Column: Info & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Category / Star Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-[0.2em] font-mono text-[#A1A1AA] uppercase">
                      Featured Work
                    </span>
                    <div className="flex items-center gap-1 bg-white/5 backdrop-blur rounded-full px-2.5 py-0.5 text-[10px] text-[#F5F5F5] border border-white/10 shadow-sm">
                      <FaStar className="text-[8px] text-[#A1A1AA]" />
                      Featured
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-white transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * i }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="text-[10px] sm:text-xs bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/25 px-2.5 py-1 rounded-md transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Actions / Links */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 border border-white/15 text-[#F5F5F5] text-xs font-medium px-4 py-2 rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
                    >
                      <FaGithub className="text-sm" />
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
                      className="flex items-center gap-2 bg-[#F5F5F5] text-[#0F0F0F] text-xs font-semibold px-4 py-2 rounded-full hover:bg-white transition-all shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Right Column: Description & Highlights */}
              <div className="lg:col-span-7 lg:border-l lg:border-white/5 lg:pl-8 flex flex-col justify-between gap-6">
                {/* Description bullet list */}
                <div className="space-y-3">
                  {points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed group-hover:text-[#D1D5DB] transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0 group-hover:bg-white/50 transition-colors duration-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Highlights section */}
                {project.highlights && (
                  <div className="border-t border-white/5 pt-5">
                    <h4 className="text-[10px] font-mono tracking-wider uppercase text-white/40 mb-3">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#A1A1AA] leading-tight group-hover:text-[#D1D5DB] transition-colors duration-300"
                        >
                          <span className="text-[#A1A1AA]/50 group-hover:text-white/60 transition-colors duration-300">✦</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
);

export default Projects;