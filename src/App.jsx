import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certification from "./components/Certification";
import "./styles/animations.css";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative">
      <Background />

      <Navbar />

      <Hero />

      <main className="relative max-w-7xl mx-auto px-6">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}