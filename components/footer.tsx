export default function Footer() {
    return (
      <footer className="w-full border-t border-white/10 bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold oswald">Bikesh Kumar</h2>
              <p className="text-gray-400 text-sm mt-2 font-mono">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>

  
            {/* Social Links */}
            <div className="flex gap-4 font-mono">
              <a
                href="https://github.com/Bikesh-1"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                GitHub
              </a>
  
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
  
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} Bikesh Sharma. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }