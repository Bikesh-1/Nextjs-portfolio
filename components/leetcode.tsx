export default function LeetCode() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto mb-10 w-full max-w-[1180px] border-b border-white/10 pb-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">03 / Problem-solving practice</p>
        <h2 className="oswald text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl">LeetCode <span className="text-zinc-600">activity.</span></h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          Practicing Data Structures & Algorithms in Java — strengthening problem-solving, pattern recognition, and writing efficient solutions.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:p-6">
        <a href="https://leetcode.com/u/Bikesh_sharma/" target="_blank" rel="noopener noreferrer" className="block" aria-label="Open Bikesh Kumar's LeetCode profile">
          <img
            src="https://leetcard.jacoblin.cool/Bikesh_sharma?theme=dark&font=Ubuntu&ext=heatmap"
            alt="LeetCode profile statistics and submission activity for Bikesh Kumar"
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[1000px] rounded-lg"
          />
        </a>
      </div>

      <div className="mx-auto mt-5 flex w-full max-w-[1180px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Java · DSA · Consistent practice</p>
        <a href="https://leetcode.com/u/Bikesh_sharma/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-zinc-500 transition hover:text-white">Explore LeetCode profile ↗</a>
      </div>
    </section>
  );
}