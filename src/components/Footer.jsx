import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold">
              Danish<span className="text-indigo-500">.</span>
            </h2>

            <p className="text-slate-400 mt-2">
              MERN Stack Developer • AI Enthusiast
            </p>
          </div>

          {/* Social Icons */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/danish-ali-007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/danishali0786/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Danish Ali. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-400 text-sm">
            Made with
            <Heart className="text-red-500 fill-red-500" size={16} />
            using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}