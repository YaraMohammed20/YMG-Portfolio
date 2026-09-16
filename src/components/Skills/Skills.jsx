import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap,} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiVite,} from "react-icons/si";
import FadeUp from "../Animations/FadeUp";
import StaggerContainer from "../Animations/StaggerContainer";
import FadeItem from "../Animations/FadeItem";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-4xl text-cyan-500" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-4xl text-black" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-sky-400" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-4xl text-purple-700" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-orange-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-gray-800" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-4xl text-violet-600" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">
                My Skills
              </p>
              <h2 className="text-5xl font-black text-gray-900 leading-tight mt-4">
                Tools I use to
                <span className="text-gray-500"> build.</span>
              </h2>
              <p className="text-gray-500 leading-8 mt-6">
                A collection of technologies and tools I use to create
                responsive, modern and user-friendly web applications.
              </p>
              <div className="w-20 h-1 bg-gray-900 mt-8 rounded-full" />
            </div>
          </FadeUp>
          <div className="lg:col-span-2">
            <StaggerContainer stagger={0.08} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <FadeItem key={skill.name}>
                  <div
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Technology
                      </p>
                    </div>
                  </div>
                </FadeItem>
              ))}
            </StaggerContainer>
            <FadeUp delay={0.2}>
              <div className="mt-6 rounded-2xl bg-black p-7 text-white">
                <p className="text-sm text-gray-400">
                  Always learning
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  Exploring new technologies and improving every day.
                </h3>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}