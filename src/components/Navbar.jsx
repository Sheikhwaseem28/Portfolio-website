import { useState, useEffect } from "react";
import logo from "../assets/w.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About Me" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "experience",   label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "education",    label: "Education" },
  { id: "contact",      label: "Contact Me" },
  { id: "message",      label: "Message" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.id);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 110 && rect.bottom >= 110;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.img
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-12 lg:w-14 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => scrollToSection("home")}
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -1 }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#F5F5F5]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#F5F5F5] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4 text-lg text-[#A1A1AA]">
            {[
              { href: "https://www.linkedin.com/in/sheikh-waseem/", Icon: FaLinkedin },
              { href: "https://github.com/Sheikhwaseem28",            Icon: FaGithub   },
              { href: "https://leetcode.com/u/sheikhwaseem/",          Icon: SiLeetcode },
            ].map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.25, color: "#F5F5F5" }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-[#F5F5F5] transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-xl text-[#A1A1AA] z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span key="open"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate:   0, opacity: 1 }}
                  exit={{   rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{   opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{   opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-xl text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-white/10 text-[#F5F5F5]"
                        : "text-[#A1A1AA] hover:bg-white/5 hover:text-[#F5F5F5]"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <div className="flex justify-center gap-6 text-lg pt-3 border-t border-white/[0.06] mt-2">
                  {[
                    { href: "https://www.linkedin.com/in/sheikh-waseem/", Icon: FaLinkedin },
                    { href: "https://github.com/Sheikhwaseem28",            Icon: FaGithub   },
                    { href: "https://leetcode.com/u/sheikhwaseem/",          Icon: SiLeetcode },
                  ].map(({ href, Icon }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
