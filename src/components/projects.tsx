export function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      tech: "Next.js, Tailwind CSS, Stripe, MongoDB",
      description: "A full-featured e-commerce solution with payment processing and inventory management.",
      link: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      name: "Task Management App",
      tech: "React, Redux, Firebase",
      description: "A collaborative task management tool with real-time updates and team features.",
      link: "https://github.com/yourusername/task-app",
    },
    {
      name: "Weather Dashboard",
      tech: "Vue.js, Chart.js, OpenWeather API",
      description: "An interactive weather visualization tool with forecasting and historical data.",
      link: "https://github.com/yourusername/weather-dashboard",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-700 rounded-md p-3 bg-zinc-800/50">
            <h3 className="text-yellow-400 font-semibold">{project.name}</h3>
            <div className="text-zinc-400 text-sm mt-1">{project.tech}</div>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 italic">
          Type <span className="text-yellow-400">about</span> to learn more about me or{" "}
          <span className="text-yellow-400">contact</span> to get in touch.
        </p>
      </div>
    </div>
  )
}
