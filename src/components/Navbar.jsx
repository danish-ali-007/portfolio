import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          Danish<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium shadow-lg shadow-indigo-500/30"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-6">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center bg-indigo-600 py-3 rounded-full hover:bg-indigo-500 transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}