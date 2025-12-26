import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Tailwind CSS, and modern web technologies.",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-400",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Creating robust APIs and server-side applications with Node.js, Express, and database integration.",
      color: "from-green-400 to-emerald-500",
      iconColor: "text-green-400",
    },
    {
      icon: FaMobile,
      title: "Full-Stack Solutions",
      description: "End-to-end application development with seamless frontend-backend integration and deployment.",
      color: "from-purple-400 to-pink-500",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Tech Stack
        </span>
      </motion.h1>

      <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="relative h-full bg-neutral-900/50 backdrop-blur-sm rounded-2xl border-2 border-neutral-800 overflow-hidden cursor-pointer"
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Border Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${service.color})`,
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col items-center">
                  {/* Icon Container with Animation */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                    className="mb-6 relative"
                  >
                    {/* Glowing Background */}
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
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-xl`}
                    />

                    {/* Icon */}
                    <div
                      className={`relative bg-neutral-800/80 p-6 rounded-2xl border border-neutral-700 group-hover:border-transparent transition-colors duration-300`}
                    >
                      <service.icon className={`text-6xl ${service.iconColor}`} />
                    </div>

                    {/* Orbiting Dots */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.3,
                        }}
                        style={{
                          top: "50%",
                          left: "50%",
                          transformOrigin: `${40 * Math.cos((i * 2 * Math.PI) / 3)}px ${
                            40 * Math.sin((i * 2 * Math.PI) / 3)
                          }px`,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className={`text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className={`h-1 mt-6 bg-gradient-to-r ${service.color} rounded-full`}
                  />

                  {/* Floating Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, -50, -100],
                        x: [(i - 2) * 10, (i - 2) * 15, (i - 2) * 10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        bottom: 0,
                        left: `${20 + i * 15}%`,
                      }}
                    />
                  ))}

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Shine Effect */}
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
              </motion.div>

              {/* Shadow Effect */}
              <motion.div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
