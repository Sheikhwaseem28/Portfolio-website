import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Achievements } from "./components/Achievements";
import ParticlesBackground from "./components/ParticlesBackground";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <ScrollProgress />
      <ParticlesBackground />
      <BackToTop />
      
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Full Width Navbar */}
      <Navbar />
      
      {/* Container for other sections */}
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Technologies & Skills Section */}
        <section id="skills">
          <Skills />
        </section>

         <section id="experience">
          <Experience />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
          <div className="my-20">
            <h1 className="text-4xl text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Send Me a Message
            </h1>
            <Suspense fallback={<LoadingSpinner />}>
              <ContactForm />
            </Suspense>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
