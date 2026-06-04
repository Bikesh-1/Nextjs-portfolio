export default function Project() {
    const projects = [
    {
        title: "Sundown Studio",
        description: "A visually immersive landing page inspired by modern creative studios, featuring smooth animations and interactive UI.",
        image: "https://ik.imagekit.io/jwt52yyie/sundown.png?updatedAt=1770638106816",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://bikesh-1.github.io/Sundown-Studio/",
        code: "https://github.com/Bikesh-1/Sundown-Studio.git",
    },
    {
        title: "WeThink",
        description: "An animated web experience showcasing collaborative savings and community-driven financial support concepts.",
        image: "https://ik.imagekit.io/jwt52yyie/wethinkOne.png?updatedAt=1770652945899",
        tech: ["HTML", "GSAP", "CSS", "JavaScript"],
        live: "https://bikesh-1.github.io/WeThinkElastic/",
        code: "https://github.com/Bikesh-1/WeThinkElastic.git",
    },
    {
        title: "Emojy",
        description: "A fun and interactive emoji-based web application with engaging animations and a clean user experience.",
        image: "https://ik.imagekit.io/jwt52yyie/Brave.png?updatedAt=1770652690170",
        tech: ["HTML", "GSAP", "CSS", "JavaScript"],
        live: "https://github.com/Bikesh-1/emjoy.git",
        code: "https://bikesh-1.github.io/emjoy/",
    },
    {
        title: "E-Cell Recruitment",
        description: "A recruitment platform for E-Cell SMVIT that streamlines applications, registrations, and candidate management.",
        image: "https://ik.imagekit.io/jwt52yyie/image2.png",
        tech: ["React", "Tailwind", "Appwrite", "Clerk"],
        live: "https://www.ecellsmvit.in/recruitment",
        code: "#",
    },
    {
        title: "Startup-Mela",
        description: "A startup exhibition and networking platform enabling registrations, payments, and event management for entrepreneurs.",
        image: "https://ik.imagekit.io/jwt52yyie/image1.png",
        tech: ["Next.js", "Postgres", "Tailwind", "Prisma", "Cashfree API"],
        live: "https://www.startupmela-ecellsmvit.in/",
        code: "#",
    },
    {
        title: "Axis",
        description: "A modern student-focused platform designed to help users discover opportunities, resources, and career growth paths.",
        image: "https://ik.imagekit.io/jwt52yyie/image5.png",
        tech: ["Next.js", "Appwrite", "Tailwind"],
        live: "https://axis-axis.appwrite.network/",
        code: "#",
    },
];

    return (
        <div className="w-full min-h-screen bg-black p-6 relative z-50">
            <h1 className="uppercase oswald text-white text-center p-4 font-black text-4xl underline mb-10">
                Project Showcase
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-80 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-600 transition-all duration-300 p-4"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-44 object-fit rounded"
                        />

                        <div className="p-5">
                            <h2 className="text-white text-xl font-semibold">
                                {project.title}
                            </h2>

                            <p className="text-zinc-400 text-sm mt-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            <div className="flex items-center justify-between mt-5">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-sm font-medium text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition"
                                >
                                    View Project →
                                </a>

                                <a
                                    href={project.code}
                                    target="_blank"
                                    className="text-sm font-medium text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}