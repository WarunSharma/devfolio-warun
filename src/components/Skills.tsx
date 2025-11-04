'use client';
import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'jQuery'],
      color: 'blue'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'OracleDB'],
      color: 'cyan'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Jest', 'Webpack', 'Postman', 'K8s'],
      color: 'emerald'
    },
    {
      title: 'Miscellaneous',
      skills: ['Jira', 'Confluence', 'Figma', 'Notion', 'Slack', 'CI/CD (GitHub Actions)'],
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; border: string; bg: string }> = {
      blue: {
        text: 'text-blue-400',
        border: 'border-blue-500/50',
        bg: 'bg-blue-500/10'
      },
      cyan: {
        text: 'text-cyan-400',
        border: 'border-cyan-500/50',
        bg: 'bg-cyan-500/10'
      },
      emerald: {
        text: 'text-emerald-400',
        border: 'border-emerald-500/50',
        bg: 'bg-emerald-500/10'
      },
      rose: {
        text: 'text-rose-400',
        border: 'border-rose-500/50',
        bg: 'bg-rose-500/8'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`bg-slate-800/50 border ${colors.border} rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 ${colors.bg} border ${colors.border} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

