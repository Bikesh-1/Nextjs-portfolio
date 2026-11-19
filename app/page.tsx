"use client";

import Image from "next/image";
import Link from "next/link";
import DotField from "../components/DotField";
import Navbar from "@/components/navbar";
import About from "@/components/aboutme";
import Github from "@/components/github";
import Project from "@/components/project";
import Footer from "@/components/footer";

const socials = [
  { label: "GitHub", href: "https://github.com/Bikesh-1", icon: "/github.svg" },
  { label: "LeetCode", href: "https://leetcode.com/u/HcGc1iJwi5/", icon: "/leetcode.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bikesh-kumar07/", icon: "/linkedin.svg" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-65" aria-hidden="true">
        <DotField
          dotRadius={1.2}
          dotSpacing={32}
          bulgeStrength={48}
          glowRadius={150}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={450}
          cursorForce={0.08}
          bulgeOnly
          gradientFrom="#858585"
          gradientTo="#ffffff"
          glowColor="#050505"
        />
      </div>

      <section id="home" className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-20 pt-32 text-center sm:px-8">
        <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:text-xs">
          <span className="h-px w-8 bg-zinc-700" />
          Full-Stack Developer · Java · DSA
          <span className="h-px w-8 bg-zinc-700" />
        </div>

        <h1 className="hero-title oswald max-w-[1400px] text-[clamp(3.3rem,10.2vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.045em]">
          <span className="block">Building Products.</span>
          <span className="mt-2 block text-zinc-500">Solving Problems.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          I build scalable digital products, solve challenging problems, and turn ideas into real-world experiences.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-zinc-500 sm:gap-3 sm:text-xs">
          {["Next.js", "React", "Node.js", "Java", "PostgreSQL"].map((skill, index) => (
            <span key={skill} className="flex items-center gap-2">
              {index > 0 && <span className="text-zinc-700">/</span>}
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-mono text-xs font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200">
            Explore my work <span className="transition-transform group-hover:translate-x-1">↗</span>
          </Link>
          <a href="mailto:bikeshkumar07@gmail.com" className="rounded-full border border-white/20 px-6 py-3 font-mono text-xs text-white transition hover:border-white/60 hover:bg-white/5">
            Get in touch
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 sm:h-16 sm:w-16"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={28}
                height={28}
                className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

        <a href="#about" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600 transition hover:text-white">
          Scroll to explore <span className="animate-bounce text-lg">↓</span>
        </a>
      </section>

      <div className="relative z-10">
        <div id="about" className="scroll-mt-24"><About /></div>
        <div id="github" className="scroll-mt-24"><Github /></div>
        <div id="projects" className="scroll-mt-24"><Project /></div>
        <div id="contact" className="scroll-mt-24"><Footer /></div>
      </div>
    </main>
  );
}