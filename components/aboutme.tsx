import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiPostgresql, SiPrisma, SiAppwrite,
  SiClerk, SiExpress, SiThreedotjs, SiGreensock,
} from "react-icons/si";

const techStack = [
  { name: "Java", icon: <FaJava /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Lenis", icon: "↗" },
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

export default function About() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-5">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">01 / A little introduction</p>
          <h2 className="oswald text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl">About <span className="text-zinc-600">me.</span></h2>
        </div>
        <span className="hidden font-mono text-xs text-zinc-600 sm:block">BENGALURU, INDIA ↗</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="text-2xl font-medium leading-relaxed tracking-tight text-zinc-200 sm:text-3xl">
            I&apos;m Bikesh Kumar - a developer who enjoys turning complex ideas into <span className="text-zinc-500">useful, thoughtful digital products.</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            A Computer Science Engineering student, full-stack developer, and Tech Head at E-Cell SMVIT. I work across the stack, from shaping clean interfaces to building dependable backend systems. I enjoy exploring new technologies, solving problems with Java, and building products that make a real difference.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/Bikesh-1" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs text-white transition hover:bg-white hover:text-black">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/bikesh-kumar07/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs text-white transition hover:bg-white hover:text-black">LinkedIn ↗</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">My toolkit</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech.name} className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-xs text-zinc-300 transition duration-200 hover:border-white/40 hover:bg-white hover:text-black">
                <span className="text-base">{tech.icon}</span>{tech.name}
              </span>
            ))}
          </div>
          <p className="mt-5 font-mono text-[10px] leading-6 text-zinc-600">ALWAYS LEARNING. ALWAYS BUILDING.</p>
        </div>
      </div>
    </section>
  );
}
