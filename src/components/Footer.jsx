import { motion } from "framer-motion";
import { CONTACT } from "../Data.js";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="border-t border-white/[0.06] py-10"
  >
    <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Brand */}
      <div>
        <p className="text-sm font-semibold text-[#F5F5F5]">Sheikh Waseem</p>
        <p className="text-xs text-[#A1A1AA] mt-0.5">Software Developer</p>
      </div>

      {/* Social */}
      <div className="flex items-center gap-4 text-[#A1A1AA] text-base">
        {[
          { Icon: FaLinkedin, href: CONTACT.linkedin },
          { Icon: FaGithub, href: CONTACT.github },
          { Icon: SiLeetcode, href: CONTACT.leetcode },
        ].map(({ Icon, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#F5F5F5" }}
            className="hover:text-[#F5F5F5] transition-colors"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
