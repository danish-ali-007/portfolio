import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl text-white mb-8">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700"
            >
              <Icon className="text-white mb-4" size={30} />

              <h3 className="text-white font-bold mb-3">
                {skill.name}
              </h3>

              {skill.items.map((item) => (
                <p key={item} className="text-gray-400">
                  {item}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}