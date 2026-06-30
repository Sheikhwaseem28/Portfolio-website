import { HERO_CONTENT } from "../Data.js";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";
import resumePDF from "./Sheikh_Waseem_Resume.pdf";

/* ── Variants ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeInOut" } },
});

const techIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiExpress, label: "Express" },
];

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Sheikh_Waseem_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="min-h-[80vh] flex items-center section-divider">
      <div className="w-full flex flex-col lg:flex-row items-center gap-6 pt-24 pb-12 md:py-24">
        {/* ── Left Content ─────────────────── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F5F5F5] leading-tight mb-3 md:mb-4"
          >
            Sheikh Waseem
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="shimmer-text text-xl sm:text-2xl font-medium tracking-wide">
              Software Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="max-w-lg text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp(0.55)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#F5F5F5] text-[#0F0F0F] font-semibold text-sm px-6 py-3 rounded-full hover:bg-white transition-all"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-white/20 text-[#F5F5F5] font-medium text-sm px-6 py-3 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Let's Talk
              <FaArrowRight className="text-xs" />
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8 mt-12"
          >
            {[
              { value: "400+", label: "Problems Solved" },
              { value: "15+", label: "Projects Built" },
              { value: "AIR 343", label: "GFG Ranking" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-[#F5F5F5]">{stat.value}</p>
                <p className="text-xs text-[#A1A1AA] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right Illustration ──────────── */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Outer pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border border-white/30"
            />
            {/* Inner pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.25, 0.08] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-4 rounded-full border border-white/20"
            />

            {/* Center: Code Brackets */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center select-none">
                <p className="text-7xl font-thin text-[#F5F5F5]/80 leading-none">&lt;/&gt;</p>
                <motion.p
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-xs text-[#A1A1AA] mt-2 tracking-widest"
                >
                  SOFTWARE DEVELOPER
                </motion.p>
              </div>
            </motion.div>

            {/* Orbiting tech icons */}
            {techIcons.map(({ Icon, label }, i) => {
              const angle = (i / techIcons.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = 160; // px from center
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                    className="flex flex-col items-center gap-1 cursor-default"
                    title={label}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/30 transition-all">
                      <Icon className="text-lg" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;