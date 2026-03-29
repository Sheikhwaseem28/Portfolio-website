import { useEffect } from "react";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Achievements } from "./components/Achievements";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ContactForm from "./components/ContactForm";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-10 w-10 border-t border-b border-white/40" />
  </div>
);

function App() {
  // Cursor glow effect
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return (
    <div
      className="relative text-[#F5F5F5] antialiased"
      style={{ background: "#0F0F0F" }}
    >
      <ScrollProgress />
      <BackToTop />

      {/* Full-width navbar */}
      <Navbar />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        
        <div className="my-12 md:my-20">
          <h2 className="text-3xl font-light text-center mb-2 text-[#F5F5F5]">
            Send Me a <span className="text-[#A1A1AA]">Message</span>
          </h2>
          <p className="text-center text-[#A1A1AA] text-sm mb-10">
            I'll get back to you as soon as possible.
          </p>
          <Suspense fallback={<LoadingSpinner />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
