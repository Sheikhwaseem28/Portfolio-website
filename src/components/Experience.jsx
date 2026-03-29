import { EXPERIENCES } from "../Data.js";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

export const Experience = () => (
  <div id="experience" className="section-divider py-12 md:py-24">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 md:mb-16"
    >
      <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Career</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
        Professional <span className="text-[#A1A1AA] font-light">Experience</span>
      </h2>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      {/* Animated vertical line */}
      <div className="relative pl-8 md:pl-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5F5F5] via-[#A1A1AA] to-transparent origin-top"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="absolute -left-8 md:-left-[3.25rem] top-6 w-4 h-4 rounded-full bg-[#F5F5F5] border-4 border-[#0F0F0F] shadow-lg"
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <FaBriefcase className="text-[#A1A1AA] text-sm" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F5F5] leading-tight">{exp.role}</h3>
                      <p className="text-sm text-[#A1A1AA]">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] bg-white/5 border border-white/10 rounded-full px-3 py-1 self-start sm:self-auto">
                    <FaCalendarAlt className="text-[10px]" />
                    {exp.year}
                  </div>
                </div>

                {/* Description */}
                <div className="whitespace-pre-line text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-5">
                  {exp.description}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.08, y: -1 }}
                      className="text-xs bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/25 px-2.5 py-1 rounded-full transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom animate line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px mt-5 bg-gradient-to-r from-[#F5F5F5]/30 to-transparent rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Summary badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="glass-card rounded-full px-8 py-3 flex items-center gap-3"
        >
          <span className="text-3xl font-bold text-[#F5F5F5]">{EXPERIENCES.length}+</span>
          <span className="text-[#A1A1AA] text-sm">Professional Experiences</span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);