import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      onClick={scrollTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full glass-card border border-white/20 flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/40 transition-colors shadow-xl"
    >
      <FaArrowUp className="text-sm" />
    </motion.button>
  );
};

export default BackToTop;
