export function Projects() {
  const projects = [
    {
      name: "Trafic Signal Optimization with GNNs",
      tech: "Python",
      description: "Implementation of neural networks for traffic simulation in SUMO as an agent to detect congestion, resulting in better traffic.",
      link: "https://github.com/yourusername/ecommerce-platform",
      category: "",
    },
    {
      name: "Portofolio Web",
      tech: "React, TypeScript",
      description: "This website is also a project of mine that showcases my capabilities in web design and engineering.",
      link: "https://github.com/yourusername/task-app",
      category: "",
    },
    {
      name: "Image Magnifier",
      tech: "React, TypeScript",
      description: "Image magnifier tool, a mini project I created during my project-based learning for React",
      link: "https://github.com/kfhanson/image-magnifier",
      category: "",
    },
    {
      name: "Lung Cancer Detection and Identification using CNNs",
      tech: "Python, Keras, OpenCV",
      description: "As a part of an group assignment, we collaborated to engineer a CT-Scan image analysis of lungs to detect cancer and classify it. High accruracy was achieved.",
      link: "https://github.com/kfhanson/Lung-Cancer-Detection",
      category: "",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-zinc-400">Filter by category:</span>
        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-sm">All</span>
        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-sm">Web</span>
        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-sm">AI</span>
        <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded text-sm">DevOps</span>
        <span className="text-zinc-500 text-sm italic">
          (Filtering functionality would be implemented in a real project)
        </span>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-zinc-700 rounded-md p-3 bg-zinc-800/50">
            <div className="flex justify-between items-start">
              <h3 className="text-yellow-400 font-semibold">{project.name}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  project.category === "Web"
                    ? "bg-green-500/20 text-green-400"
                    : project.category === "AI"
                      ? "bg-purple-500/20 text-purple-400"
                      : project.category === "DevOps"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {project.category}
              </span>
            </div>
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
          More smaller scale projects available in my GitHub profile. Type <span className="text-yellow-400">contact</span> to visit my social profiles.
        </p>
      </div>
    </div>
  )
}
