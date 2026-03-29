import { ACHIEVEMENTS, STATS } from "../Data.js";
import { motion } from "framer-motion";
import { FaCertificate, FaTrophy, FaAward, FaStar, FaBook, FaChartLine } from "react-icons/fa";

const iconMap = {
  trophy:      FaTrophy,
  award:       FaAward,
  certificate: FaCertificate,
  chart:       FaChartLine,
  star:        FaStar,
  book:        FaBook,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.88, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.6, ease: "easeInOut" } },
};

export const Achievements = () => (
  <div id="achievements" className="section-divider py-12 md:py-24">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 md:mb-16"
    >
      <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Recognition</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
        Achievements & <span className="text-[#A1A1AA] font-light">Certifications</span>
      </h2>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-4xl mx-auto space-y-5"
    >
      {ACHIEVEMENTS.map((ach, index) => {
        const Icon = iconMap[ach.icon] || FaCertificate;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, x: 6, transition: { duration: 0.25 } }}
            className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-white/20 transition-colors cursor-default group overflow-hidden relative"
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)", transform: "skewX(-15deg)" }}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <Icon className="text-[#A1A1AA] text-xl group-hover:text-[#F5F5F5] transition-colors" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {ach.category && (
                <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-[#A1A1AA] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full mb-2">
                  {ach.category}
                </span>
              )}
              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">{ach.description}</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px mt-3 bg-gradient-to-r from-white/20 to-transparent rounded-full"
              />
            </div>

            {/* Number badge */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 * index }}
              className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-xs text-[#A1A1AA] font-bold"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>

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
        <span className="text-3xl font-bold text-[#F5F5F5]">{STATS.certifications}+</span>
        <span className="text-[#A1A1AA] text-sm">Professional Certifications</span>
      </motion.div>
    </motion.div>
  </div>
);
