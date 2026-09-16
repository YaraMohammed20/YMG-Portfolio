import {FaCode,FaLaptopCode,FaGraduationCap,} from "react-icons/fa";
import FadeUp from "../Animations/FadeUp";

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <FadeUp>
            <div>
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm mb-4">
                About Me
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Turning ideas into
                <span className="text-gray-500">
                  {" "}digital experiences.
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
                I'm <span className="font-semibold text-gray-900">
                  Yara Mohammed
                </span>,
                a Computer Science student and Front-End Developer who enjoys
                building modern, responsive, and user-friendly web applications.
              </p>
              <p className="text-gray-500 leading-8 mt-5 max-w-xl">
                I work mainly with React, Next.js, TypeScript, JavaScript and
                Tailwind CSS. I'm always exploring new technologies and improving
                my skills to create better digital experiences.
              </p>
              <div className="flex gap-12 mt-10">
                <div>
                  <h3 className="text-3xl font-black text-gray-900">
                    10+
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Projects
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">
                    5+
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Technologies
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">
                    ∞
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-100 rounded-full blur-2xl" />
              <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center gap-5 pb-6 border-b border-gray-200">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-black">
                      Front-End Development
                    </h3>
                    <p className="text-gray-500">
                      Building modern web applications
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:-translate-y-1 transition duration-300">
                    <FaLaptopCode className="text-2xl text-gray-700 mb-4" />
                    <h4 className="font-bold text-black">
                      Development
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      React, Next.js, JavaScript & TypeScript
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-200 hover:-translate-y-1 transition duration-300">
                    <FaGraduationCap className="text-2xl text-gray-700 mb-4" />
                    <h4 className="font-bold text-gray-900">
                      Continuous Learning
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Exploring AI, Data Engineering & new technologies
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-5 rounded-2xl bg-black text-white">
                  <p className="text-sm text-gray-400">
                    Currently focused on
                  </p>
                  <h4 className="text-xl font-bold mt-1">
                    Creating better digital experiences.
                  </h4>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}