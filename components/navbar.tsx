"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] px-4 transition-all duration-300 sm:px-8 lg:px-12 ${scrolled ? "pt-3" : "pt-5"}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${scrolled ? "border-white/15 bg-black/80 shadow-2xl shadow-black/30" : "border-transparent bg-black/20"}`}>
        <Link href="#home" className="oswald text-xl font-bold tracking-tight text-white sm:text-2xl">
          BIKESH<span className="text-white/45">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-mono text-xs text-zinc-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to Work
          </span>
          <a href="https://ik.imagekit.io/jwt52yyie/Bikesh-Kumar-Resume-Final.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-3 py-2 font-mono text-[11px] font-semibold text-black transition hover:bg-zinc-200 sm:px-4 sm:text-xs">
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}