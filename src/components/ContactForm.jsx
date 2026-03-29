import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const inputClass =
  "w-full pl-11 pr-4 py-3.5 bg-[#1A1A1A] border border-white/[0.08] rounded-xl " +
  "focus:border-white/30 focus:outline-none text-[#F5F5F5] text-sm " +
  "transition-all duration-200 placeholder:text-[#A1A1AA]/50";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const fields = [
    { name: "name",    type: "text",  placeholder: "Your Name",  Icon: FaUser,    col: "" },
    { name: "email",   type: "email", placeholder: "Your Email", Icon: FaEnvelope, col: "" },
    { name: "subject", type: "text",  placeholder: "Subject",    Icon: MdSubject,  col: "md:col-span-2" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map(({ name, type, placeholder, Icon, col }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative ${col}`}
            >
              <motion.div
                animate={{
                  scale: focusedField === name ? 1.1 : 1,
                  color: focusedField === name ? "#F5F5F5" : "#A1A1AA",
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
              >
                <Icon className="text-sm" />
              </motion.div>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                placeholder={placeholder}
                required
                className={inputClass}
              />
            </motion.div>
          ))}
        </div>

        {/* Textarea */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: focusedField === "message" ? 1.1 : 1,
              color: focusedField === "message" ? "#F5F5F5" : "#A1A1AA",
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-3.5 top-4 pointer-events-none z-10"
          >
            <FaComment className="text-sm" />
          </motion.div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField("")}
            placeholder="Your Message"
            required
            rows={6}
            className={`${inputClass} resize-none`}
          />
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            disabled={submitted}
            className={`relative w-full flex items-center justify-center gap-3 font-semibold text-sm py-4 rounded-xl transition-all overflow-hidden ${
              submitted
                ? "bg-white/10 text-[#A1A1AA] cursor-default"
                : "bg-[#F5F5F5] text-[#0F0F0F] hover:bg-white"
            }`}
          >
            {/* Shine sweep */}
            {!submitted && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
                  transform: "skewX(-20deg)",
                }}
              />
            )}
            <FaPaperPlane className={`text-xs ${submitted ? "" : ""}`} />
            <span>{submitted ? "Message Sent!" : "Send Message"}</span>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
