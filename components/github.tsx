import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-10 border-b border-white/10 pb-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">02 / Consistency matters</p>
        <h2 className="oswald text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl">GitHub <span className="text-zinc-600">activity.</span></h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-7">
        <div className="min-w-[650px]">
          <GitHubCalendar
            username="Bikesh-1"
            blockSize={13}
            blockMargin={4}
            fontSize={11}
            colorScheme="dark"
            theme={{
              dark: ["#18181b", "#3f3f46", "#71717a", "#a1a1aa", "#f4f4f5"],
            }}
          />
        </div>
      </div>
      <a href="https://github.com/Bikesh-1" target="_blank" rel="noopener noreferrer" className="mt-5 self-end font-mono text-xs text-zinc-500 transition hover:text-white">Explore GitHub profile ↗</a>
    </section>
  );
}