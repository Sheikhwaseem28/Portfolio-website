import { ABOUT_TEXT } from "../Data.js";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBrain, FaRocket } from "react-icons/fa";
import { SiCplusplus, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        {/* Animated Illustration Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-10"
        >
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Central Brain/Code Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Glowing Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl"
                  />
                  
                  {/* Main Icon */}
                  <FaBrain className="relative text-8xl text-purple-400" />
                </div>
              </motion.div>

              {/* Orbiting Icons - C++ */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl shadow-lg">
                    <SiCplusplus className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* LeetCode Icon */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute top-1/4 right-0 transform translate-x-1/2"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-4 rounded-xl shadow-lg">
                    <SiLeetcode className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* Code Icon */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute bottom-1/4 right-0 transform translate-x-1/2"
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-xl shadow-lg">
                    <FaCode className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* Laptop Icon */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                >
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-4 rounded-xl shadow-lg">
                    <FaLaptopCode className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* Rocket Icon */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute bottom-1/4 left-0 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-4 rounded-xl shadow-lg">
                    <FaRocket className="text-4xl text-white" />
                  </div>
                </motion.div>

                {/* Algorithm Icon */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute top-1/4 left-0 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-xl shadow-lg">
                    <FaBrain className="text-4xl text-white" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="120"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="150"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5 10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#a855f7" : "#06b6d4",
                    top: `${20 + (i % 4) * 20}%`,
                    left: `${20 + (i % 4) * 20}%`,
                  }}
                />
              ))}

             
            </div>
          </div>
        </motion.div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-2xl py-16 text-lg leading-relaxed"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
