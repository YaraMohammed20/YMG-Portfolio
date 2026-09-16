import { FaExternalLinkAlt,} from "react-icons/fa";
import techmart from "../../assets/E.png";
import ghibli from "../../assets/G.png";
import FadeUp from "../Animations/FadeUp";
import StaggerContainer from "../Animations/StaggerContainer";
import FadeItem from "../Animations/FadeItem";

const projects = [
  {
    title: "Studio Ghibli",
    image: ghibli,
    description:
      "A responsive movie explorer built with React that allows users to browse Studio Ghibli films, search movies, and manage a watch list.",
    technologies: ["React", "Tailwind", "Axios", "API"],
    github: "https://github.com/YaraMohammed20/Ghibli",
    live: "https://ghibli-mid.vercel.app/",
  },
  {
    title: "TechMart",
    image: techmart,
    description:
      "A modern e-commerce website with product browsing, responsive UI, shopping cart, and clean user experience.",
    technologies: ["Next.js", "Tailwind", "HeroUI", "Redux"],
    github: "https://github.com/YaraMohammed20/Techmart-E-Commerce",
    live: "https://techmart-e-commerce-imxy.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">
                My Work
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-3">
                Selected{" "}
                <span className="text-gray-500">
                  Projects.
                </span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-md leading-7">
              A selection of projects I've built while exploring modern
              technologies, APIs, and responsive UI development.
            </p>
          </div>
        </FadeUp>
        <StaggerContainer stagger={0.15} className="space-y-16">
          {projects.map((project, index) => (
            <FadeItem key={project.title}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                <div className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-80
                      lg:h-96
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl font-black text-gray-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 leading-8 mt-5 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-sm
                          text-gray-600
                          border
                          border-gray-200
                          bg-gray-50
                          px-4
                          py-2
                          rounded-full
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-black 
                        text-white
                        px-6
                        py-3
                        rounded-full
                        hover:bg-gray-800
                        hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </FadeItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}