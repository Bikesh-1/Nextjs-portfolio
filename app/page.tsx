"use client";
import Image from "next/image";
import DotField from "../components/DotField";
import Navbar from "@/components/navbar";
import About from "@/components/aboutme";
import Github from "@/components/github";
import Project from "@/components/project";
import Footer from "@/components/footer";
// import Leetcode from "@/components/leetcode";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={30}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#dadada"
          gradientTo="#ffffff"
          glowColor="#000"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-40 flex min-h-screen flex-col items-center justify-center px-4 text-white text-center">
        <div >
          <h1 className="oswald font-bold uppercase leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Full Stack Developer <br />
            skilled in DSA & Java,
          </h1>

          <h1 className="oswald  text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            focused on building scalable products that solve real-world problems.
          </h1>
        </div>

        <p className="font-mono mt-4 text-xs sm:text-sm md:text-base px-4 max-w-2xl">
          Full Stack Developer • DSA • Next.js • React • Node.js • JAVA
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
          <a
            className="bg-white p-2 rounded-lg hover:scale-110 transition"
            href="https://github.com/Bikesh-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>

          <a
            className="bg-white p-2 rounded-lg hover:scale-110 transition"
            href="https://leetcode.com/u/HcGc1iJwi5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/leetcode.svg"
              alt="LeetCode"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>

          <a
            className="bg-white p-2 rounded-lg hover:scale-110 transition"
            href="https://www.linkedin.com/in/bikesh-kumar07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>
        </div>
      </div>

      <About />
      <Github />
      <Project />
      <Footer />

    </div>
  );
}