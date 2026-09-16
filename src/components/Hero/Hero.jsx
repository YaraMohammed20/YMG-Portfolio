import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import portImg from "../../assets/MeD.png";
import MaskedHeading from "../Animations/MaskedHeading";
import Prism from "../Animations/AnimatedBackground";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 py-20 sm:py-35">
      <div className="absolute inset-0 z-0">
        <Prism
          height={3.5}
          baseWidth={5.5}
          animationType="rotate"
          glow={1}
          noise={0.15}
          transparent={true}
          scale={3.6}
          colorFrequency={1}
          timeScale={0.5}
          bloom={1}
          lightMode={false}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="text-gray-300 font-semibold text-lg">
              Hello, I'm
            </p>
            <MaskedHeading
              text="Yara M. Gamal"
              tag="h1"
              duration={0.8}
              stagger={0.05}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 text-gray-200"
            />
            <h2 className="text-2xl sm:text-3xl text-gray-300 mt-4">
              Front-End Developer
            </h2>
            <p className="mt-6 text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              I build responsive, modern and user-friendly web applications
              using React, Next.js, TypeScript and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
              <a
                href="#projects"
                className="bg-black text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 hover:text-black transition"
              >
                View Projects
                <FaArrowRight />
              </a>
              <a
                href="/Yara_Mohammed_Gamal_CV_2026.pdf"
                className="border border-black text-gray-200 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-center hover:bg-gray-200 hover:text-black hover:border-gray-200 transition"
              >
                Download CV
              </a>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-10 lg:ml-30 text-3xl text-black">
              <a
                href="https://github.com/YaraMohammed20"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yara-mohammed-gamal"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center mt-8 lg:mt-0 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 sm:-translate-y-6 z-20 animate-[float_6s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                ⚛ React
              </span>
            </div>
            <div className="absolute top-16 left-0 sm:left-2 md:left-4 lg:left-0 z-20 animate-[float_7s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                Git
              </span>
            </div>
            <div className="absolute bottom-16 left-0 sm:left-2 md:left-4 lg:left-0 z-20 animate-[float_8s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                JavaScript
              </span>
            </div>
            <div className="absolute top-16 right-0 sm:right-2 md:right-4 lg:right-0 z-20 animate-[float_7.5s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                TypeScript
              </span>
            </div>
            <div className="absolute bottom-16 right-0 sm:right-2 md:right-4 lg:right-0 z-20 animate-[float_6.5s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                Next.js
              </span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 sm:translate-y-6 z-20 animate-[float_7s_ease-in-out_infinite]">
              <span className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                Tailwind
              </span>
            </div>
            <img
              src={portImg}
              alt="Yara"
              className="
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-72 md:h-72
                lg:w-80 lg:h-80
                xl:w-96 xl:h-96
                object-cover
                rounded-full
                shadow-2xl
                transition-all
                duration-500
                ease-out
                hover:scale-105
                hover:-translate-y-3
                hover:rotate-2
                hover:shadow-gray-600
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}