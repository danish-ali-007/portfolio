import { Code2, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={28} />,
      title: "Frontend Development",
      desc: "Building modern, responsive and interactive web applications using React, Tailwind CSS and JavaScript.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Backend Development",
      desc: "Developing scalable REST APIs using Node.js, Express.js and MongoDB with secure authentication.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "AI & Data Analytics",
      desc: "Passionate about Machine Learning, Python, SQL, Power BI and solving real-world problems with AI.",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="text-center mb-14">
        <p className="text-indigo-400 font-semibold uppercase tracking-widest">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Know More About Me
        </h2>

        <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-5"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-bold mb-6 leading-tight">
            MERN Stack Developer &
            <span className="text-indigo-500"> AI Enthusiast</span>
          </h3>

          <p className="text-slate-400 leading-8 mb-5">
            I'm a passionate Full Stack Developer specializing in React,
            Node.js, Express.js and MongoDB. I enjoy building modern,
            responsive and high-performance web applications.
          </p>

          <p className="text-slate-400 leading-8 mb-5">
            Along with web development, I have strong interest in Artificial
            Intelligence, Machine Learning and Data Analytics using Python,
            SQL and Power BI.
          </p>

          <p className="text-slate-400 leading-8">
            I continuously improve my skills by building real-world projects,
            solving problems and learning new technologies.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}