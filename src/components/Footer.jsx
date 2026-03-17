import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-900">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neutral-400 text-sm"
          >
            © {new Date().getFullYear()} Sheikh Waseem. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-neutral-400 text-sm"
          >
            Made with <FaHeart className="text-red-500" /> using React & Framer Motion
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 text-2xl"
          >
            <a href="https://www.linkedin.com/in/sheikh-waseem/" className="hover:text-cyan-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sheikhwaseem28" className="hover:text-cyan-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/sheikhwaseem/" className="hover:text-cyan-400 transition-colors">
              <SiLeetcode />
            </a>

          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
