import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

useEffect(() => {
  if (status) {
    const timer = setTimeout(() => {
      setStatus("");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [status]);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const response = await fetch("https://formspree.io/f/mwvgavbg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  }

  setLoading(false);
};

  return (
    <section id="contact" className="py-16 md:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 uppercase tracking-[0.3em] font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto mt-5"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or looking for a MERN Developer?
            Feel free to reach out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                  <Mail size={24} />
                </div>

                <div className="overflow-hidden">
                  <p className="text-slate-400">Email</p>

                  <a
                    href="mailto:danishqwerty01@gmail.com"
                    className="font-semibold break-all hover:text-indigo-400 transition"
                  >
                    danishqwerty01@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-slate-400">Phone</p>

                  <a
                    href="tel:+919999999999"
                    className="font-semibold hover:text-indigo-400 transition"
                  >
                    +91 8817332345
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-slate-400">Location</p>

                  <h4 className="font-semibold">
                    Raipur, Chhattisgarh, India
                  </h4>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex justify-center sm:justify-start gap-4 mt-10">

              <a
                href="https://github.com/danish-ali-007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/danishali0786/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
              >
                <FaLinkedin size={20} />
              </a>

            </div>
          </div>

          {/* Right */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

  <div>
    <label className="block mb-2 font-medium">
      Full Name
    </label>

    <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  required
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-indigo-500"
/>
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  required
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-indigo-500"
/>
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Message
    </label>

   <textarea
  name="message"
  rows={6}
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  required
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none resize-none focus:border-indigo-500"
/>
  </div>

  <button
  type="submit"
  disabled={loading}
  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-60"
>
  <Send size={20} />

  {loading ? "Sending..." : "Send Message"}
</button>

{status === "success" && (
  <p className="text-green-400 text-center font-medium transition-all duration-500">
    ✅ Message sent successfully!
  </p>
)}

{status === "error" && (
  <p className="text-red-400 text-center font-medium transition-all duration-500">
    ❌ Failed to send message. Please try again.
  </p>
)}


</form>

          </div>

        </div>
      </div>
    </section>
  );
}