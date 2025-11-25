import { motion } from "framer-motion";
import { SKILLS } from "../Data.js";
import { RiReactjsLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
  const technologies = [
    { icon: SiCplusplus, color: "text-blue-400", name: "C++", animation: "bounce" },
    { icon: FaHtml5, color: "text-orange-500", name: "HTML5", animation: "rotate" },
    { icon: DiCss3, color: "text-blue-500", name: "CSS3", animation: "pulse" },
    { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript", animation: "shake" },
    { icon: RiTailwindCssFill, color: "text-cyan-400", name: "Tailwind", animation: "swing" },
    { icon: FaBootstrap, color: "text-purple-500", name: "Bootstrap", animation: "float" },
    { icon: RiReactjsLine, color: "text-cyan-400", name: "React", animation: "spin" },
    { icon: RiNodejsLine, color: "text-green-500", name: "Node.js", animation: "wiggle" },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB", animation: "zoom" },
  ];

  // Different animation variants for each icon
  const getAnimationVariant = (animationType) => {
    const animations = {
      bounce: {
        animate: {
          y: [0, -20, 0],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      rotate: {
        animate: {
          rotate: [0, 360],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
      },
      pulse: {
        animate: {
          scale: [1, 1.15, 1],
        },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      shake: {
        animate: {
          x: [0, -10, 10, -10, 10, 0],
          rotate: [0, -5, 5, -5, 5, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      swing: {
        animate: {
          rotate: [0, 15, -15, 15, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      float: {
        animate: {
          y: [0, -15, -5, -15, 0],
          x: [0, 5, -5, 5, 0],
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      spin: {
        animate: {
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      wiggle: {
        animate: {
          rotate: [0, 10, -10, 10, -10, 0],
          x: [0, 5, -5, 0],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      zoom: {
        animate: {
          scale: [1, 1.2, 0.9, 1.2, 1],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };
    return animations[animationType];
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Technologies</span>
      </motion.h1>

      <div className="max-w-7xl mx-auto px-4">
        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12">
            {technologies.map((tech, index) => {
              const animation = getAnimationVariant(tech.animation);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.3,
                      rotateY: 180,
                      transition: { duration: 0.5 }
                    }}
                    className="relative bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-purple-500 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Glowing effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent)`,
                      }}
                    />

                    {/* Animated Icon */}
                    <motion.div
                      animate={animation.animate}
                      transition={animation.transition}
                      className="relative z-10"
                    >
                      <tech.icon className={`text-6xl ${tech.color}`} />
                    </motion.div>

                    {/* Tech name tooltip */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-8 text-xs text-neutral-400 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {tech.name}
                    </motion.span>

                    {/* Orbiting particles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: `${30 * Math.cos(i * Math.PI / 2)}px ${30 * Math.sin(i * Math.PI / 2)}px`,
                        }}
                      />
                    ))}

                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  {/* Skill Header */}
                  <div className="flex justify-between items-center mb-4">
                    <motion.span
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-lg font-semibold text-neutral-200"
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative h-4 bg-neutral-800 rounded-full overflow-hidden">
                    {/* Background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Actual Progress */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="relative h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1,
                        }}
                      />

                      {/* Glowing tip */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-cyan-500/50"
                      />
                    </motion.div>
                  </div>

                  {/* Floating particles on hover */}
                  <div className="relative">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${(i + 1) * 20}%`,
                          bottom: 0,
                        }}
                        animate={{
                          y: [0, -20, -40],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              { label: "Technologies", value: "10+", color: "from-purple-500 to-pink-500" },
              { label: "Projects", value: "15+", color: "from-cyan-500 to-blue-500" },
              { label: "DSA Problems Solved", value: "500+", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-lg text-center cursor-pointer min-w-[200px]`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1,
                  }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
