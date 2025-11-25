import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      icon: FaUser,
      cols: "md:col-span-1",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
      icon: FaEnvelope,
      cols: "md:col-span-1",
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      icon: MdSubject,
      cols: "md:col-span-2",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${field.cols}`}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  scale: focusedField === field.name ? 1.2 : 1,
                  color: focusedField === field.name ? "#a855f7" : "#737373",
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 z-10"
              >
                <field.icon className="text-lg" />
              </motion.div>

              {/* Input */}
              <motion.input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField("")}
                placeholder={field.placeholder}
                required
                whileHover={{ scale: 1.01 }}
                className="w-full pl-12 pr-4 py-4 bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 rounded-xl focus:border-purple-500 focus:outline-none text-neutral-300 transition-all placeholder:text-neutral-600"
              />

              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.3))",
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Message Textarea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative group"
        >
          {/* Icon */}
          <motion.div
            animate={{
              scale: focusedField === "message" ? 1.2 : 1,
              color: focusedField === "message" ? "#a855f7" : "#737373",
            }}
            className="absolute left-4 top-4 text-neutral-500 z-10"
          >
            <FaComment className="text-lg" />
          </motion.div>

          {/* Textarea */}
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField("")}
            placeholder="Your Message"
            required
            rows="6"
            whileHover={{ scale: 1.01 }}
            className="w-full pl-12 pr-4 py-4 bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 rounded-xl focus:border-purple-500 focus:outline-none text-neutral-300 resize-none transition-all placeholder:text-neutral-600"
          />

          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.3))",
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-500/50 transition-all overflow-hidden group"
          >
            {/* Button Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Icon and Text */}
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              <FaPaperPlane className="text-xl" />
            </motion.div>
            <span className="relative z-10 text-lg">Send Message</span>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "skewX(-20deg)",
              }}
            />
          </motion.button>
        </motion.div>
      </form>

      {/* Decorative Elements */}
      <div className="relative mt-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              bottom: -20,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactForm;
