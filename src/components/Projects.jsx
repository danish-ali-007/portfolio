import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="text-center mb-16">
        <p className="text-indigo-400 uppercase tracking-[0.3em] font-semibold">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Featured Projects
        </h2>

        <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-5"></div>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
          Some of my recent projects built using React, Node.js, MongoDB,
          Python and AI technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {PROJECTS.map((project, index) => (

          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl hover:border-indigo-500 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
          >

            {/* Image */}

            <div className="relative overflow-hidden h-60">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

            </div>

            {/* Content */}

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-5">
                {project.desc}
              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tags.map((tag, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  >
                    {tag}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 flex items-center justify-center rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition"
                >
                  <FaGithub size={20} />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}