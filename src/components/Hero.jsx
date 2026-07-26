// src/components/Hero.jsx

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Photo2 from "../assets/Photo2.png";

export default function Hero() {
  return (
    <header className="relative max-w-6xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-14 items-center">
      {/* Left */}
      <div>
        <span className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-xs text-indigo-300 px-3.5 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DANISH ALI
          </span>
        </h1>

        <p className="text-lg text-slate-300 font-medium mb-4">
          MERN Stack Developer | AI & ML Student
        </p>

        <p className="text-slate-400 max-w-md leading-relaxed mb-8">
          I build reliable, fast systems and enjoy the unglamorous parts most
          people skip — the migrations, the on-call rotations, the code that
          has to work at 3am. Placeholder bio, swap in your own.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="#projects"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg shadow-indigo-500/25"
          >
            View my work
          </a>

          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium px-6 py-3 rounded-full transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <div className="flex gap-4 mt-8">

  <a
    href="https://github.com/danish-ali-007"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-indigo-500"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/danishali0786/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-indigo-500"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="mailto:danishqwerty01@gmail.com"
    className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-indigo-500"
  >
    <Mail size={18} />
  </a>

</div>
      </div>

      {/* Right */}
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 scale-90" />

        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400">
          <img
            src={Photo2}
            alt="Danish Profile"
            className="w-full h-full object-cover rounded-full border-4 border-slate-950"
          />
        </div>

        <div className="absolute -bottom-3 -left-3 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl">
          <div className="text-xl font-bold text-indigo-300"></div>
          <div className="text-xs text-slate-400">FRESHERS</div>
        </div>

        <div className="absolute -top-3 -right-3 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl">
          <div className="text-xl font-bold text-purple-300">4</div>
          <div className="text-xs text-slate-400">PROJECTS SHIPPED</div>
        </div>
      </div>
    </header>
  );
}