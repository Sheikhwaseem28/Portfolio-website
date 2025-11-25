import { HERO_CONTENT } from "../Data.js";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaLaptopCode, FaDatabase, FaReact } from "react-icons/fa";
import { SiJavascript, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sheikh Waseem
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-2xl py-9 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FaDownload />
                Download CV
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 font-semibold px-6 py-3 rounded-lg hover:bg-purple-500/10 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Animated Developer Illustration */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-96 h-96"
            >
              {/* Central Laptop */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <FaLaptopCode className="text-9xl text-purple-500" />
              </motion.div>

              {/* Orbiting Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                {/* React Icon */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaReact className="text-5xl text-cyan-400" />
                </motion.div>

                {/* JavaScript Icon */}
                <motion.div
                  className="absolute top-1/4 right-0"
                  whileHover={{ scale: 1.3 }}
                >
                  <SiJavascript className="text-5xl text-yellow-400" />
                </motion.div>

                {/* Node.js Icon */}
                <motion.div
                  className="absolute bottom-1/4 right-0"
                  whileHover={{ scale: 1.3 }}
                >
                  <SiNodedotjs className="text-5xl text-green-500" />
                </motion.div>

                {/* MongoDB Icon */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  whileHover={{ scale: 1.3 }}
                >
                  <SiMongodb className="text-5xl text-green-400" />
                </motion.div>

                {/* Tailwind Icon */}
                <motion.div
                  className="absolute bottom-1/4 left-0"
                  whileHover={{ scale: 1.3 }}
                >
                  <SiTailwindcss className="text-5xl text-cyan-500" />
                </motion.div>

                {/* Code Icon */}
                <motion.div
                  className="absolute top-1/4 left-0"
                  whileHover={{ scale: 1.3 }}
                >
                  <FaCode className="text-5xl text-purple-400" />
                </motion.div>
              </motion.div>

              {/* Pulsing Ring */}
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
                className="absolute inset-0 rounded-full border-4 border-purple-500"
              />

              {/* Secondary Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full border-2 border-cyan-500"
              />

              {/* Floating Code Brackets */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 left-10 text-6xl text-purple-300"
              >
                {"</>"}
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 right-10 text-6xl text-cyan-300"
              >
                {"{}"}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
