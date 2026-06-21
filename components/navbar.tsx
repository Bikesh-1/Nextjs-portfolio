
export default function Navbar() {
  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] z-50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 p-2">
      
      <p className="oswald font-bold text-xl sm:text-2xl text-white ">
        Bikesh Kumar
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">

        <button className="inline-flex items-center gap-2 rounded border border-green-500/30 bg-green-500/15 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-green-400 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/25 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Open to Work
        </button>

        <a
          href="https://ik.imagekit.io/jwt52yyie/Bikesh-Resume.pdf?updatedAt=1780006626820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white px-3 sm:px-4 py-1.5 rounded font-mono text-xs sm:text-sm text-black cursor-pointer hover:bg-gray-200 transition">
            Download Resume
          </button>
        </a>

      </div>
    </div>
  );
}