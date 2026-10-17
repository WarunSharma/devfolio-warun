const COMPANIES = [
  {
    name: "ADP",
    role: "Software Engineer",
    period: "Aug 2018 – Dec 2020",
    color: "blue",
    description:
      "Worked on payroll and HR software solutions, focusing on backend services and API integrations.",
    skills: ["CSS", "HTML", "React", "Node.js", "REST APIs", "SQL"],
  },
  {
    name: "PureSoftware",
    role: "Senior Developer",
    period: "Jan 2021 – Jun 2023",
    color: "cyan",
    description:
      "Developed user-friendly interfaces and enhanced user experience through modern web technologies.",
    skills: ["Node.js", "ORMs", "ORACLE", "PostgreSQL", "Express.js", "React"],
  },
  {
    name: "Sapiens",
    role: "Developer",
    period: "Jul 2023 – Dec 2025",
    color: "emerald",
    description:
      "Contributing to various projects, focusing on full-stack development and cloud solutions.",
      skills: ["Next.js", "TypeScript", "Styled Components", "React"],
  },
  {
    name: "BestBuy",
    role: "Senior Software Engineer",
    period: "Dec 2025 - Present",
    color: "rose",
    description:
      "Leading a team of developers to deliver high-quality software solutions and drive innovation.",
    skills: ["Next.js", "TypeScript", "LESS", "React"],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { text: string; border: string; bg: string }> = {
    blue: {
      text: "text-blue-400",
      border: "border-blue-500/50",
      bg: "bg-blue-500/8",
    },
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/50",
      bg: "bg-cyan-500/8",
    },
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/50",
      bg: "bg-emerald-500/8",
    },
    rose: {
      text: "text-rose-400",
      border: "border-rose-500/50",
      bg: "bg-rose-500/8",
    },
  };
  return colors[color] || colors.blue;
};

export default function PastCompanies() {
  return (
    <section
      id="past-companies"
      className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-2">
            Past <span className="text-blue-500">Companies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Places I&apos;ve contributed to — roles, durations and focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANIES.map((c) => {
            const colors = getColorClasses(c.color);
            return (
              <article
                key={c.name}
                className={`bg-slate-800/50 border ${colors.border} rounded-lg p-6 backdrop-blur-sm hover:scale-105 transform transition duration-300`}
                aria-labelledby={`company-${c.name}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-md ${colors.bg} ${colors.border} text-xl font-bold`}
                  >
                    {c.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h3
                      id={`company-${c.name}`}
                      className={`text-xl font-bold ${colors.text}`}
                    >
                      {c.name}
                    </h3>
                    <div className="text-sm text-gray-300">{c.role}</div>
                    <div className="text-xs text-gray-500 mt-1">{c.period}</div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-300">
                  <p className="mb-2">{c.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {c.skills &&
                      c.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-gray-700/50 text-gray-200 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </li>
                      ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
