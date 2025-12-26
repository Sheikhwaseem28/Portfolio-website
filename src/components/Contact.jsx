import { CONTACT } from "../Data.js";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

export const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: CONTACT.address,
      color: "from-purple-500 to-pink-500",
      link: null,
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: CONTACT.phoneNo,
      color: "from-green-500 to-emerald-500",
      link: `tel:${CONTACT.phoneNo}`,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: CONTACT.email,
      color: "from-cyan-500 to-blue-500",
      link: `mailto:${CONTACT.email}`,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sheikh-waseem/",
      color: "hover:text-blue-500",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/Sheikhwaseem28",
      color: "hover:text-purple-500",
      label: "GitHub",
    },
    {
      icon: SiGeeksforgeeks,
      url: "https://www.geeksforgeeks.org/user/sheikhwc1zo/",
      color: "hover:text-green-500",
      label: "GeeksforGeeks",
    },
  ];

  // Function to handle email click
  const handleEmailClick = () => {
    const email = CONTACT.email;
    if (!email) {
      console.error("Email address is not defined in CONTACT data");
      return;
    }
    
    // Try multiple approaches to ensure email works
    try {
      // Approach 1: Direct mailto link
      window.location.href = `mailto:${email}`;
      
      // Fallback: Open in new tab after a delay
      setTimeout(() => {
        const mailWindow = window.open(`mailto:${email}`);
        if (!mailWindow) {
          // If popup blocked, show alert
          alert(`Please send an email to: ${email}`);
        }
      }, 1000);
      
    } catch (error) {
      console.error("Error opening email client:", error);
      // Last resort: Copy to clipboard and show message
      navigator.clipboard.writeText(email)
        .then(() => {
          alert(`Email address copied to clipboard: ${email}\nPlease paste it in your email client.`);
        })
        .catch(() => {
          alert(`Please send an email to: ${email}`);
        });
    }
  };

  // Function to handle contact card clicks
  const handleContactClick = (link) => {
    if (link && link.startsWith('mailto:')) {
      // Use the same robust email handler
      handleEmailClick();
    } else if (link) {
      // For phone links, just use standard behavior
      return true; // Let the default anchor behavior happen
    }
    return false; // Prevent default for email
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Get in Touch
        </span>
      </motion.h1>

      <div className="max-w-5xl mx-auto px-4">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center overflow-hidden">
                {/* Icon with Glow */}
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-block mb-4"
                >
                  {/* Glowing Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-full blur-xl`}
                  />

                  {/* Icon Container */}
                  <div className={`relative bg-gradient-to-br ${info.color} p-5 rounded-xl`}>
                    <info.icon className="text-3xl text-white" />
                  </div>
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-neutral-300 mb-2">
                  {info.label}
                </h3>

                {/* Value */}
                {info.link ? (
                  <motion.a
                    href={info.link}
                    onClick={(e) => {
                      if (info.link && info.link.startsWith('mailto:')) {
                        e.preventDefault();
                        handleEmailClick();
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm text-neutral-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${info.color} transition-all break-words cursor-pointer`}
                  >
                    {info.value}
                  </motion.a>
                ) : (
                  <p className="text-sm text-neutral-400 break-words">{info.value}</p>
                )}

                {/* Animated Bottom Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className={`h-1 mt-4 bg-gradient-to-r ${info.color} rounded-full mx-auto`}
                />

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
              </div>

              {/* Shadow Glow */}
              <motion.div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12"
        />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-neutral-300 mb-6">
            Connect with Me
          </h3>
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5 + index * 0.1,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-neutral-400 ${social.color} transition-colors text-4xl`}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-400 text-lg mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer"
          >
            <FaEnvelope className="text-xl" />
            <span>Send me an Email</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};