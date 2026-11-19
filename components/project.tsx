const projects = [
  {
    number: "01",
    title: "Sundown Studio",
    description: "A visually immersive landing page inspired by modern creative studios, featuring smooth animations and interactive UI.",
    image: "https://ik.imagekit.io/jwt52yyie/sundown.png?updatedAt=1770638106816",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://bikesh-1.github.io/Sundown-Studio/",
    code: "https://github.com/Bikesh-1/Sundown-Studio.git",
  },
  {
    number: "02",
    title: "WeThink",
    description: "An animated web experience showcasing collaborative savings and community-driven financial support concepts.",
    image: "https://ik.imagekit.io/jwt52yyie/wethinkOne.png?updatedAt=1770652945899",
    tech: ["HTML", "GSAP", "CSS", "JavaScript"],
    live: "https://bikesh-1.github.io/WeThinkElastic/",
    code: "https://github.com/Bikesh-1/WeThinkElastic.git",
  },
  {
    number: "03",
    title: "Emojy",
    description: "A fun and interactive emoji-based web application with engaging animations and a clean user experience.",
    image: "https://ik.imagekit.io/jwt52yyie/Brave.png?updatedAt=1770652690170",
    tech: ["HTML", "GSAP", "CSS", "JavaScript"],
    live: "https://github.com/Bikesh-1/emjoy.git",
    code: "https://bikesh-1.github.io/emjoy/",
  },
  {
    number: "04",
    title: "E-Cell Recruitment",
    description: "A recruitment platform for E-Cell SMVIT that streamlines applications, registrations, and candidate management.",
    image: "https://ik.imagekit.io/jwt52yyie/image2.png",
    tech: ["React", "Tailwind", "Appwrite", "Clerk"],
    live: "https://www.ecellsmvit.in/recruitment",
    code: "#",
  },
  {
    number: "05",
    title: "Startup Mela",
    description: "A startup exhibition and networking platform enabling registrations, payments, and event management for entrepreneurs.",
    image: "https://ik.imagekit.io/jwt52yyie/image1.png",
    tech: ["Next.js", "Postgres", "Tailwind", "Prisma", "Cashfree API"],
    live: "https://www.startupmela-ecellsmvit.in/",
    code: "#",
  },
  {
    number: "06",
    title: "Axis",
    description: "A modern student-focused platform designed to help users discover opportunities, resources, and career growth paths.",
    image: "https://ik.imagekit.io/jwt52yyie/image5.png",
    tech: ["Next.js", "Appwrite", "Tailwind"],
    live: "https://axis-axis.appwrite.network/",
    code: "#",
  },
];

export default function Project() {
  return (
    <section className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-5">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">03 / Selected work</p>
          <h2 className="oswald text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl">Featured <span className="text-zinc-600">projects.</span></h2>
        </div>
        <span className="hidden font-mono text-xs text-zinc-600 sm:block">THINGS I&apos;VE BUILT ↗</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.number} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition duration-500 hover:-translate-y-1 hover:border-white/30">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title + " project preview"}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045] group-hover:opacity-80"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md">{project.number} / 06</span>
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={"Open " + project.title} className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-white text-lg text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">↗</a>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="oswald text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">{project.title}</h3>
                <div className="flex gap-4 pt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Live ↗</a>
                  {project.code !== "#" && <a href={project.code} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Code ↗</a>}
                </div>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-zinc-400">{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}