import { motion } from "framer-motion";
import { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    const onScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = scrolled + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[999] bg-white/5">
      <div
        id="scroll-progress-bar"
        className="h-full bg-[#F5F5F5] transition-all duration-100"
        style={{ width: "0%" }}
      />
    </div>
  );
};

export default ScrollProgress;
