import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (name) => {
    setActive(name);
    setOpen(false);
  };

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black backdrop-blur-xl border border-gray-900 shadow-lg rounded-full px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-white"
          >
            YMG<span className="text-gray-500">.dev</span>
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.name)}
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  active === link.name
                    ? "bg-gray-100 text-black"
                    : "text-gray-300 hover:text-black hover:bg-gray-200"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl text-gray-700"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-3 bg-black border border-gray-900 shadow-lg rounded-3xl p-6">
            <div className="flex flex-col items-center gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleClick(link.name)}
                  className={`w-full text-center text-sm font-medium px-5 py-3 rounded-full transition-all duration-300 ${
                    active === link.name
                       ? "bg-gray-100 text-black"
                       : "text-gray-300 hover:text-black hover:bg-gray-200"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}