import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

const Education = () => {
  return (
    <div id="education" className="section-divider py-12 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Academic Foundation</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
          My <span className="text-[#A1A1AA] font-light">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
        >
          {/* Subtle Ambient Glow on Hover */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors duration-300">
                <FaGraduationCap className="text-[#A1A1AA] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div>
                <span className="text-[10px] tracking-widest font-mono text-[#A1A1AA] uppercase">Degree Program</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-1 group-hover:text-white transition-colors duration-300">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm sm:text-base text-[#D1D5DB] font-medium mt-1">
                  Computer Science & Engineering (CSE)
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A1A1AA] mt-3">
                  <FaUniversity className="text-xs flex-shrink-0" />
                  <span>Shri Shankaracharya Institute of Professional Management and Technology, Raipur, Chhattisgarh</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] bg-white/5 border border-white/10 rounded-full px-3 py-1.5 font-medium">
                <FaCalendarAlt className="text-[10px]" />
                <span>Class of 2025</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mt-1">
                Graduated
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
