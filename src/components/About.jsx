import { ABOUT_TEXT } from "../Data.js";
import { motion } from "framer-motion";

const slideLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } } };
const slideRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } } };

const codeLines = [
  'const developer = {',
  '  name: "Sheikh Waseem",',
  '  role: "MERN Stack Dev",',
  '  passion: "Problem Solving",',
  '  dsa: "350+ Problems",',
  '  gfg: "AIR 343",',
  '};',
];

const About = () => (
  <div id="about" className="section-divider pt-10 pb-12 md:pt-14 md:pb-24">
    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 md:mb-16"
    >
      <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Who I Am</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
        About <span className="text-[#A1A1AA] font-light">Me</span>
      </h2>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Left: animated code block illustration */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative w-full max-w-sm">
          {/* Code window chrome */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <span className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <span className="w-3 h-3 rounded-full bg-[#3f3f46]" />
              <span className="ml-4 text-xs text-[#A1A1AA] font-mono">about.js</span>
            </div>
            {/* Code body */}
            <div className="p-6 font-mono text-sm space-y-1">
              {codeLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className={`${
                    i === 0 || i === codeLines.length - 1
                      ? "text-[#F5F5F5]"
                      : "text-[#A1A1AA]"
                  } whitespace-pre`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Floating accent badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-5 glass-card rounded-xl px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-[#A1A1AA]">Open to work</p>
            <p className="text-sm font-semibold text-[#F5F5F5]">Available Now</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right: text block */}
      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1"
      >
        <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base mb-8">
          {ABOUT_TEXT}
        </p>

        {/* Quick traits */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "DSA Problems",    value: "350+" },
            { label: "GFG Rank",        value: "AIR 343" },
            { label: "Projects Built",  value: "15+" },
            { label: "Availability",    value: "Immediate" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-xl p-4"
            >
              <p className="text-xl font-bold text-[#F5F5F5]">{item.value}</p>
              <p className="text-xs text-[#A1A1AA] mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default About;
