import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAppwrite,
  SiClerk,
  SiExpress,
  SiThreedotjs,
  SiGreensock,
} from "react-icons/si";

export default function About() {
  const techStack = [
    { name: "Java", icon: <FaJava /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "GSAP", icon: <SiGreensock /> },
    { name: "Three.js", icon: <SiThreedotjs /> },
    { name: "Lenis", icon: "⚡" },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Appwrite", icon: <SiAppwrite /> },
    { name: "Clerk", icon: <SiClerk /> },
  ];

  return (
    <div className="w-full min-h-screen bg-black relative z-50 flex flex-col items-center justify-center py-16 px-4">

      {/* Heading */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="oswald text-white text-center p-4 font-black text-3xl sm:text-4xl md:text-5xl underline">
          ABOUT ME
        </h1>
      </div>

      {/* Content */}
      <p className="max-w-5xl text-center text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light px-2">
        Hi, I&apos;m{" "}
        <span className="text-white font-semibold">
          Bikesh Kumar
        </span>
        , a Computer Science Engineering student, Full-Stack Developer, and
        Tech Head at E-Cell SMVIT. I enjoy building modern web applications,
        exploring new technologies, and turning ideas into impactful digital
        products. Passionate about development, startups, and innovation,
        I&apos;m always looking for opportunities to learn, create, and solve
        real-world problems through technology.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-4/5 lg:w-2/3 items-center justify-center mt-10 px-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="rounded-xl border border-white font-mono px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black cursor-pointer flex items-center gap-2"
          >
            <span className="text-sm sm:text-base">
              {tech.icon}
            </span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}