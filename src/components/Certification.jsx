import { Award, Star } from "lucide-react";

export default function Certification() {
  return (
    <section id="certification" className="py-24">

      <div className="text-center mb-16">

        <p className="text-indigo-400 uppercase tracking-[0.3em] font-semibold">
          Certifications
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Achievements
        </h2>

        <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-5"></div>

      </div>

      <div className="max-w-4xl mx-auto">

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-indigo-500 transition duration-300">

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
              <Award size={32} />
            </div>

            <div className="flex-1">

              <h3 className="text-2xl font-bold">
                HackerRank SQL Certificate
              </h3>

              <p className="text-slate-400 mt-2">
                Demonstrated strong SQL skills through HackerRank certification.
              </p>

              <div className="flex items-center gap-2 mt-4 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />

                <span className="ml-2 text-slate-300">
                  5★ SQL
                </span>
              </div>

            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
            >
              View Certificate
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}