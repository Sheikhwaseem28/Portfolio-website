import { ACHIEVEMENTS, STATS } from "../Data.js";
import { motion } from "framer-motion";
import { FaCertificate, FaTrophy, FaAward, FaStar, FaBook } from "react-icons/fa";

export const Achievements = () => {
  const getIcon = (category) => {
    const iconMap = {
      Publication: FaBook,
      Certification: FaCertificate,
      Assessment: FaAward,
      "Technical Skills": FaStar,
      "Competitive Programming": FaTrophy,
    };
    return iconMap[category] || FaCertificate;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
          Achievements
        </span>{" "}
        <span className="text-neutral-300">& Certifications</span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 space-y-6"
      >
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = getIcon(achievement.category);
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                x: 10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="flex items-start gap-4 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-shrink-0"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg"
                  />

                  <div className="relative bg-gradient-to-br from-purple-500 to-cyan-500 p-4 rounded-xl">
                    <Icon className="text-3xl text-white" />
                  </div>
                </motion.div>

                <div className="flex-1 min-w-0">
                  {achievement.category && (
                    <span className="inline-block text-xs text-purple-400 font-semibold mb-2 bg-purple-500/10 px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  )}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-neutral-200 text-base leading-relaxed"
                  >
                    {achievement.description}
                  </motion.p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-0.5 mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  />
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.1 + index * 0.1,
                  }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {index + 1}
                </motion.div>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    transform: "skewX(-20deg)",
                  }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(168, 85, 247, 0.2), transparent)",
                  }}
                />

                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -30, -60],
                      x: [(i - 1) * 15, (i - 1) * 20, (i - 1) * 15],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      bottom: "20%",
                      left: `${30 + i * 20}%`,
                    }}
                  />
                ))}
              </div>

              <motion.div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

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
              {STATS.certifications}+
            </motion.span>{" "}
            Professional Certifications
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
