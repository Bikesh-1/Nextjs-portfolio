import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiPostgresql, SiPrisma, SiAppwrite,
  SiClerk, SiExpress, SiThreedotjs, SiGreensock, SiTypescript,
  SiDocker, SiAmazon,
} from "react-icons/si";

const techStack = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Appwrite", icon: <SiAppwrite /> },
  { name: "Clerk", icon: <SiClerk /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
];

const highlights = [
  { value: "500+", label: "Users reached across deployed platforms" },
  { value: "4", label: "Developers led through reviews and Git workflows" },
  { value: "60%", label: "Fewer integration bugs through team workflows" },
  { value: "200+", label: "Recruitment applications handled" },
];

export default function About() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-5">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">01 / The engineer behind the code</p>
          <h2 className="oswald text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl">About <span className="text-zinc-600">me.</span></h2>
        </div>
        <span className="hidden font-mono text-xs text-zinc-600 sm:block">BENGALURU, INDIA ↗</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="text-2xl font-medium leading-relaxed tracking-tight text-zinc-200 sm:text-3xl">
            I&apos;m Bikesh Kumar — a full-stack developer who builds <span className="text-zinc-500">real products for real users</span> and enjoys breaking down complex problems with Java and DSA.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            I&apos;m pursuing a B.E. in Computer Science at SMVIT (2027) and currently serve as Tech Head at E-Cell SMVIT. I&apos;ve built and deployed full-stack platforms used by 500+ students, designed secure APIs and relational data models, and led a team of four developers. My work spans product engineering, backend systems, database design, and algorithmic problem-solving.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Beyond the stack</p>
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-amber-300">Java · DSA</span>
            </div>
            <h3 className="oswald mt-3 text-3xl font-semibold uppercase sm:text-4xl">Think. Solve. Optimize.</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              I practice data structures and algorithms in Java, focusing on writing efficient solutions and strengthening problem-solving fundamentals for software engineering.
            </p>
            <a href="https://leetcode.com/u/Bikesh_sharma/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200">
              Explore my LeetCode <span>↗</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div key={item.value + item.label} className="rounded-xl border border-white/10 p-4">
                <p className="oswald text-3xl font-semibold text-white sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Recognition</p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">Finalist — Blueprint Startup Competition, EDC IIT Delhi</p>
            <p className="text-sm leading-7 text-zinc-400">Microsoft for Startups Founders Hub Member</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/Bikesh-1" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs text-white transition hover:bg-white hover:text-black">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/bikesh-kumar07/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs text-white transition hover:bg-white hover:text-black">LinkedIn ↗</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">Technical toolkit</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech.name} className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-xs text-zinc-300 transition duration-200 hover:border-white/40 hover:bg-white hover:text-black">
                <span className="text-base">{tech.icon}</span>{tech.name}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Core computer science</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "SQL"].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">{skill}</span>
              ))}
            </div>
          </div>
          <p className="mt-8 font-mono text-[10px] leading-6 text-zinc-600">ALWAYS LEARNING. ALWAYS BUILDING. ALWAYS OPTIMIZING.</p>
        </div>
      </div>
    </section>
  );
}