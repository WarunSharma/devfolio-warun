'use client';

import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      {/* Container with same max-width as Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 flex-1">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-2">
                About <span className="text-blue-500">Me</span>
              </h2>
            </div>
            
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I&apos;m a dedicated{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-cyan-900/20 text-cyan-300 font-semibold">
                  Software Engineer <span className="text-sm text-cyan-200">💻</span>
                </span>{" "}
                who transforms ideas into{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-pink-900/20 text-pink-300 font-medium">
                  user-centric <span className="text-sm text-pink-200">🎯</span>
                </span>{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-indigo-900/20 text-indigo-300 font-medium">
                  web applications <span className="text-sm text-indigo-200">🌐</span>
                </span>
                . With a passion for{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-yellow-900/20 text-yellow-300 font-medium">
                  clean code <span className="text-sm text-yellow-200">✨</span>
                </span>{" "}
                and{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-900/20 text-emerald-300 font-medium">
                  innovative solutions <span className="text-sm text-emerald-200">🚀</span>
                </span>
                , I bring technical expertise and creative problem-solving to every project.
              </p>
              
              <p>
                My expertise spans the full stack, with deep proficiency in{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-cyan-900/20 text-cyan-300 font-medium">
                  React <span className="text-sm text-cyan-200">⚛️</span>
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-neutral-900/80 text-white font-medium">
                  Next.js <span className="text-xs bg-white/10 px-1 rounded text-white">SSR</span>
                </span>
                , and{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-900/20 text-emerald-300 font-medium">
                  Node.js <span className="text-sm text-emerald-200">⬢</span>
                </span>
                . I also work with{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-sky-900/20 text-sky-300 font-medium">
                  TypeScript
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-pink-900/20 text-pink-300 font-medium">
                  GraphQL
                </span>
                , and modern styling tools like{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-indigo-900/20 text-indigo-300 font-medium">
                  Tailwind CSS
                </span>
                . These technologies help me build scalable, high-performance applications that not only meet 
                business objectives but exceed user expectations.
              </p>
              
              <p>
                What drives me is the constant challenge of solving complex problems elegantly. I&apos;m committed to writing{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-yellow-900/20 text-yellow-300 font-medium">
                  maintainable <span className="text-sm text-yellow-200">🧩</span>
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-rose-900/20 text-rose-300 font-medium">
                  well-documented <span className="text-sm text-rose-200">📝</span>
                </span>
                {" "}code that stands the test of time. Whether working{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-900/20 text-emerald-300 font-medium">
                  independently <span className="text-sm text-emerald-200">🚀</span>
                </span>
                {" "}or as part of a{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-indigo-900/20 text-indigo-300 font-medium">
                  collaborative team <span className="text-sm text-indigo-200">🤝</span>
                </span>
                , I bring <span className="font-semibold text-white">enthusiasm</span>, attention to detail, and a growth mindset to every challenge.
              </p>
              
              <p>
                Beyond coding, I stay current with emerging technologies and best practices. I believe in{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-sky-900/20 text-sky-300 font-medium">
                  continuous learning <span className="text-sm text-sky-200">📚</span>
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-violet-900/20 text-violet-300 font-medium">
                  open-source contributions <span className="text-sm text-violet-200">✨</span>
                </span>
                , and active{" "}
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-700/20 text-emerald-200 font-medium">
                  community mentoring <span className="text-sm text-emerald-100">🧑‍🏫</span>
                </span>
                . I enjoy sharing knowledge through talks, blog posts, and pair‑programming to help others grow.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">7+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-cyan-400 mb-1">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400 mb-1">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 max-w-md z-10">
            <div className="relative aspect-square rounded-lg overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Warun Sharma"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

