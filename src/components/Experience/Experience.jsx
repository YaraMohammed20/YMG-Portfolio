import ScrollAnimation from "../Animations/ScrollAnimation";
import StaggerContainer from "../Animations/StaggerContainer";
import FadeItem from "../Animations/FadeItem";
import MaskedHeading from "../Animations/MaskedHeading";

export default function Experience() {
  const experiences = [
    {
      date: "08/2026 – 09/2026",
      title: "Web Designer Trainee",
      company: "National Telecommunication Institute (NTI), Egypt",
      description: [
        "Designed web pages using HTML, CSS, and JavaScript.",
        "Applied responsive web design principles to deliver clean and user-friendly interfaces.",
        "Practiced modern web development techniques and UI implementation.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      date: "07/2026 – 08/2026",
      title: "React Front-End Trainee",
      company: "Information Technology Institute (ITI), Egypt",
      description: [
        "Engineered responsive web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
        "Built and maintained a library of 20+ reusable React components, cutting duplicate code across training projects.",
        "Worked with API responses and JSON data to populate dynamic web interfaces, handling loading and error states for a smoother user experience.",
        "Implemented unit testing using Jest to catch regressions and keep components reliable as the codebase grew.",
        "Optimized layouts across mobile, tablet, and desktop breakpoints for consistent usability.",
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "APIs", "Jest"],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50  py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-gray-500 font-semibold text-sm tracking-[3px] mb-4">
              PROFESSIONAL EXPERIENCE
            </p>
            <MaskedHeading
              text="My Experience"
              tag="h2"
              duration={1}
              stagger={0.06}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950"
            />
            <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-7 text-sm sm:text-base">
              My professional journey through front-end development,
              web design, and data engineering.
            </p>
          </div>
        </ScrollAnimation>
        <StaggerContainer delay={0.2} stagger={0.18} className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <FadeItem key={index}>
              <div className="relative grid grid-cols-1 lg:grid-cols-[160px_40px_1fr] gap-6 lg:gap-0 mb-10">
                <div className="lg:pt-7">
                  <p className="text-sm font-bold text-gray-400 lg:text-right lg:pr-8">
                    {experience.date}
                  </p>
                </div>
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-950 border-4 border-white shadow-md z-10" />
                  {index !== experiences.length - 1 && (
                    <div className="w-px flex-1 bg-gray-300 mt-8" />
                  )}
                </div>
                <div
                  className="
                    bg-white
                    border border-gray-200
                    rounded-3xl
                    p-6 sm:p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-950">
                        {experience.title}
                      </h3>
                      <p className="text-gray-500 font-medium mt-2">
                        {experience.company}
                      </p>
                    </div>
                    <span
                      className="
                        hidden sm:flex
                        shrink-0
                        w-10 h-10
                        items-center justify-center
                        rounded-full
                        bg-gray-100
                        text-gray-500
                        font-bold
                        text-sm"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div className="h-px bg-gray-100 my-6" />
                  <ul className="space-y-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base text-gray-600 leading-7">
                        <span className="mt-3 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-7">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1.5
                          rounded-full
                          bg-gray-100
                          text-gray-600
                          text-xs
                          font-semibold
                          hover:bg-gray-900
                          hover:text-white
                          transition">
                        {skill}
                      </span>
                    ))}
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