import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp,} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="lg:pr-10">
            <a href="/" className="inline-block text-4xl font-bold tracking-tight mb-6 text-gray-300">
              YMG<span className="text-gray-500 fs-5">.dev</span>
            </a>
            <p className="text-gray-100 leading-7 max-w-md">
              Front-End Developer focused on creating modern,
              responsive, and user-friendly web experiences with
              React, Next.js, and Tailwind CSS.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://github.com/YaraMohammed20"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-11 h-11 rounded-full
                  border border-gray-300
                  bg-white
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-gray-400
                  hover:text-white
                  hover:border-gray-900
                  transition-all duration-300">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yara-mohammed-gamal"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11 h-11 rounded-full
                  border border-gray-300
                  bg-white
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-gray-400
                  hover:text-white
                  hover:border-gray-900
                  transition-all duration-300">
                <FaLinkedin />
              </a>
              <a
                href="mailto:yara.mohammed.gamal.dev@gmail.com"
                aria-label="Email"
                className="
                  w-11 h-11 rounded-full
                  border border-gray-300
                  bg-white
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-gray-400
                  hover:text-white
                  hover:border-gray-900
                  transition-all duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase  text-gray-300 mb-7">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#skills" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-100 hover:text-gray-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase  text-gray-300 mb-7">
              Let's Connect
            </h3>
            <p className="text-gray-100 leading-7 mb-6">
              Have a project in mind or want to work together?
              Feel free to reach out.
            </p>
            <a
              href="mailto:yara.mohammed.gamal.dev@gmail.com"
              className="
                inline-flex items-center gap-3
                text-gray-400
                hover:text-gray-500
                transition-colors duration-300
                break-all">
              <FaEnvelope className="text-gray-400 shrink-0" />
              yara.mohammed.gamal.dev@gmail.com
            </a>
            <p className="flex items-center gap-3 text-gray-100 mt-5">
              <span className="w-2 h-2 rounded-full bg-green-100 animate-pulse" />
              Available for opportunities
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300" />
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-100 text-center md:text-left">
            © {new Date().getFullYear()} YMG. All rights reserved.
          </p>
          <p className="text-sm text-gray-100 flex items-center gap-2">
            Made with
            <FaHeart className="text-gray-700" />
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              w-10 h-10 rounded-full
              border border-gray-300
              bg-white
              flex items-center justify-center
              text-gray-700
              hover:bg-gray-900
              hover:text-white
              hover:border-gray-900
              transition-all duration-300">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}