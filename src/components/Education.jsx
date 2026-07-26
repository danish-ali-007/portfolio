import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">

      <div className="text-center mb-16">

        <p className="text-indigo-400 uppercase tracking-[0.3em] font-semibold">
          Education
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Academic Journey
        </h2>

        <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-5"></div>

      </div>

      <div className="max-w-4xl mx-auto">

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-indigo-500 transition duration-300">

          <div className="flex items-start gap-5">

            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
              <GraduationCap size={30} />
            </div>

            <div className="flex-1">

              <h3 className="text-2xl font-bold">
               Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-indigo-400 mt-2">
                Artificial Intelligence & Machine Learning
              </p>

              <p className="text-slate-400 mt-2">
                Shri Shankaracharya Institute of Professional Management & Technology (SSIPMT), Raipur
             </p>

             <p className="text-slate-400 mt-2">
                Affiliated to CSVTU
             </p>

              <div className="flex items-center gap-2 mt-5 text-slate-400">

                <Calendar size={18} />

                <span>2023 – 2027</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}