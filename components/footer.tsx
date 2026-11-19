export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">05 / What&apos;s next?</p>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <h2 className="oswald max-w-4xl text-6xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              Have an idea?
              <span className="mt-2 block text-zinc-600">Let&apos;s build it.</span>
            </h2>
            <a href="mailto:bikeshkumar.work@gmail.com" className="mt-8 inline-flex items-center gap-4 border-b border-white pb-2 font-mono text-sm text-white transition hover:border-zinc-500 hover:text-zinc-300">
              bikeshkumar.work@gmail.com <span className="text-xl">↗</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-zinc-400">
            <a href="https://github.com/Bikesh-1" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/bikesh-kumar07/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn ↗</a>
            <a href="https://leetcode.com/u/Bikesh_sharma/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LeetCode ↗</a>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-wider text-zinc-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Bikesh Kumar. All rights reserved.</span>
          <span>Designed & built with intention.</span>
          <a href="#home" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}