import { CONTACT } from "../Data.js";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true },
  transition:{ duration: 0.6, delay, ease: "easeInOut" },
});

const handleEmailClick = () => {
  try {
    window.location.href = `mailto:${CONTACT.email}`;
  } catch {
    navigator.clipboard.writeText(CONTACT.email).then(() =>
      alert(`Email copied: ${CONTACT.email}`)
    );
  }
};

export const Contact = () => (
  <div id="contact" className="section-divider py-12 md:py-24">
    {/* Heading */}
    <motion.div
      {...fadeUp(0)}
      className="text-center mb-10 md:mb-16"
    >
      <p className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase mb-3">Let's Connect</p>
      <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5]">
        Get in <span className="text-[#A1A1AA] font-light">Touch</span>
      </h2>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {[
          { Icon: FaMapMarkerAlt, label: "Location", value: CONTACT.address,  link: null },
          { Icon: FaPhoneAlt,     label: "Phone",    value: CONTACT.phoneNo,  link: `tel:${CONTACT.phoneNo}` },
          { Icon: FaEnvelope,     label: "Email",    value: CONTACT.email,    link: `mailto:${CONTACT.email}`, onClick: handleEmailClick },
        ].map(({ Icon, label, value, link, onClick }, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.15)}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-card rounded-2xl p-6 text-center hover:border-white/20 transition-colors group"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0,-10,10,0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <Icon className="text-[#A1A1AA] group-hover:text-[#F5F5F5] transition-colors text-lg" />
              </motion.div>
            </div>
            <p className="text-xs text-[#A1A1AA] uppercase tracking-widest mb-1">{label}</p>
            {link ? (
              <a
                href={link}
                onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
                className="text-sm text-[#F5F5F5] hover:text-[#A1A1AA] transition-colors break-all"
              >
                {value}
              </a>
            ) : (
              <p className="text-sm text-[#F5F5F5] break-all">{value}</p>
            )}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="h-px mt-4 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
        className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-12"
      />

      {/* Social links */}
      <motion.div {...fadeUp(0.3)} className="text-center">
        <p className="text-sm text-[#A1A1AA] mb-6 tracking-wide">Connect with me</p>
        <div className="flex justify-center items-center gap-5">
          {[
            { Icon: FaLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
            { Icon: FaGithub,   href: CONTACT.github,   label: "GitHub"   },
            { Icon: SiLeetcode, href: CONTACT.leetcode,  label: "LeetCode" },
          ].map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/25 transition-all text-xl"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp(0.5)} className="text-center mt-12">
        <p className="text-[#A1A1AA] text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <motion.button
          onClick={handleEmailClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 bg-[#F5F5F5] text-[#0F0F0F] font-semibold text-sm px-8 py-3 rounded-full hover:bg-white transition-all"
        >
          <FaEnvelope />
          Send Me an Email
        </motion.button>
      </motion.div>
    </div>
  </div>
);