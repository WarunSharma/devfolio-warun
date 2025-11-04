'use client';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex items-center">
      {/* Container with same max-width as Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve built and contributed to
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 border border-blue-500/50 rounded-lg p-12 backdrop-blur-sm text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-4">
              Coming Soon
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Projects are currently under development and will be added here soon. 
              <br />
              Stay tuned for exciting updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

