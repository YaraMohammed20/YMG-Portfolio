import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import FadeUp from "../Animations/FadeUp";
import StaggerContainer from "../Animations/StaggerContainer";
import FadeItem from "../Animations/FadeItem";

const certifications = [
  {
    title: "React Front-End Development",
    issuer: "Information Technology Institute (ITI)",
    date: "2026",
    link: "https://drive.google.com/file/d/1lYvBHt9A2CSKhZeA9N0CFQYhqlTAVFpz/view",
  },
  {
    title: "Generative AI and AI Agent",
    issuer: "IBM SkillsBuild",
    date: "2026",
    link: "https://drive.google.com/file/d/1XjBiR_SDq96XHTLPdINoBwcpiNOMZ1s6/view",
  },
  {
    title: "Generative AI Foundations",
    issuer: "AWS Academy",
    date: "2026",
    link: "https://drive.google.com/file/d/1iKZ5oDWPFHPRYQYqE71xsqSHWW0miP5e/view",
  },
  {
    title: "Front-End Development Diploma",
    issuer: "Route IT Center",
    date: "2025",
    link: "https://drive.google.com/file/d/1Hb97V4dnVsdSFTlTjN8gOEpXTuJbLVxY/view",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <FadeUp>
            <div className="lg:sticky lg:top-24">
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">
                Certifications
              </p>

              <h2 className="text-5xl font-black text-gray-900 leading-tight mt-4">
                Learning that
                <span className="text-gray-500"> builds.</span>
              </h2>

              <p className="text-gray-500 leading-8 mt-6">
                Professional training and certifications that support my
                frontend development and technical skills.
              </p>

              <div className="w-20 h-1 bg-gray-900 mt-8 rounded-full" />
            </div>
          </FadeUp>

          <div className="lg:col-span-2">
            <StaggerContainer
              stagger={0.1}
              className="grid sm:grid-cols-2 gap-5"
            >
              {certifications.map((certificate) => (
                <FadeItem key={certificate.title}>
                  <div className="group relative h-full overflow-hidden p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-400 transition-all duration-500 ease-out">

                    <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gray-200/40 group-hover:scale-150 group-hover:bg-gray-300/30 transition-all duration-700" />

                    <div className="relative flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <FaCertificate className="text-xl" />
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 bg-white border border-gray-200 group-hover:border-gray-400 transition-colors duration-300">
                        {certificate.date}
                      </span>
                    </div>

                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 mt-6 group-hover:translate-x-1 transition-transform duration-300">
                        {certificate.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2">
                        {certificate.issuer}
                      </p>

                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-gray-900 group/link"
                      >
                        <span className="group-hover/link:underline">
                          View Certificate
                        </span>

                        <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500" />
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
                  Continuously developing my skills through practical training
                  and real-world projects.
                </h3>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}