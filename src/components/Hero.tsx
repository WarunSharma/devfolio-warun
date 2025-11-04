'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      {/* Container with same max-width as Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-8 z-10 max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Hello,
              <br />
              This is <span className="text-blue-500">Warun Sharma</span> I&apos;m a{' '}
              <span className="text-cyan-400">Software Engineer</span>.
            </h1>

            {/* Social Links */}
            <div className="flex gap-5 text-blue-500 text-3xl">
              <a
                href="https://github.com/WarunSharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/warun-sharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/sharma.warun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaFacebook />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-slate-900 border border-blue-500 text-white px-6 py-3 rounded-full font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-blue-600 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Warun_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full font-semibold uppercase tracking-wider hover:from-indigo-600 hover:to-blue-600 transition"
              >
                Get Resume
              </a>
            </div>
          </div>

          {/* Right Code Block */}
          <div className="relative w-full max-w-lg bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-indigo-600"></div>
              <div className="h-[1px] w-1/2 bg-gradient-to-r from-indigo-600 to-transparent"></div>
            </div>
            <div className="px-6 py-4 border-b border-indigo-900 flex space-x-2">
              <div className="h-3 w-3 bg-red-400 rounded-full"></div>
              <div className="h-3 w-3 bg-orange-400 rounded-full"></div>
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
            </div>

            <div className="p-6 font-mono text-sm leading-6">
              <pre className="text-gray-300">
                <code>
                  <span className="text-blue-400">const</span> coder = {'{'}
                  {'\n'} &nbsp;&nbsp;
                  <span className="text-white">name:</span>{' '}
                  <span className="text-amber-300">'Warun Sharma'</span>,
                  {'\n'} &nbsp;&nbsp;
                  <span className="text-white">skills:</span> [
                  <span className="text-amber-300">'React'</span>,{' '}
                  <span className="text-amber-300">'Next.js'</span>,{' '}
                  <span className="text-amber-300">'Node.js'</span>,{' '}
                  <span className="text-amber-300">'TypeScript'</span>],
                  {'\n'} &nbsp;&nbsp;
                  <span className="text-white">hardWorker:</span>{' '}
                  <span className="text-orange-400">true</span>, {'\n'} &nbsp;&nbsp;
                  <span className="text-white">problemSolver:</span>{' '}
                  <span className="text-orange-400">true</span>, {'\n'} &nbsp;&nbsp;
                  <span className="text-green-400">hireable:</span>{' '}
                  <span className="text-orange-400">function</span>() {'{'}
                  {'\n'} &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-orange-400">return</span> (
                  {'\n'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-cyan-400">this.</span>
                  <span className="text-white">hardWorker</span> && {'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-cyan-400">this.</span>
                  <span className="text-white">problemSolver</span> && {'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-cyan-400">this.</span>
                  <span className="text-white">skills.length</span>{' '}
                  <span className="text-amber-300">&gt;=</span>{' '}
                  <span className="text-orange-400">4</span> {'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;); {'\n'}
                  &nbsp;&nbsp;{'}'} {'\n'}
                  {'};'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

