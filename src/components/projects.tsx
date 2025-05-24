"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Search, Filter } from "lucide-react"


export function Projects() {
  const projects = useMemo(
    () => [
      {
        name: "Trafic Signal Optimization with LSTM",
        tech: "Python, SUMO",
        description: "Implementation of neural networks for traffic simulation in SUMO as an agent to detect congestion, resulting in better traffic.",
        link: "https://github.com/kfhanson/Traffic-Signal-Optimization-using-Q-Learning-and-SUMO",
        categories: ["ai", "iot"],
      },
      {
        name: "Portofolio Web",
        tech: "React, TypeScript",
        description: "This website is also a project of mine that showcases my capabilities in web design and engineering.",
        link: "https://github.com/kfhanson/terminal",
        categories: ["web"],
      },
      {
        name: "Image Magnifier",
        tech: "React, TypeScript",
        description: "Image magnifier tool, a mini project I created during my project-based learning for React",
        link: "https://github.com/kfhanson/image-magnifier",
        categories: ["web"],
      },
      {
        name: "Lung Cancer Detection and Identification using CNNs",
        tech: "Python, Keras, OpenCV",
        description: "As a part of an group assignment, we collaborated to engineer a CT-Scan image analysis of lungs to detect cancer and classify it. High accruracy was achieved.",
        link: "https://github.com/kfhanson/Lung-Cancer-Detection",
        categories: ["ai"],
      },
      {
        name: "SageMaker LLM via Lambda",
        tech: "Python, Lambda, Amazon SageMaker AI, S3 Bucket",
        description: "To learn more about AWS and it's services, I created a project that utilizes the tools available in the AWS console.",
        link: "https://github.com/kfhanson/AWS-LLM-Connector",
        categories: ["cloud", "ai"],
      },
    ],
    [],
  )

  const categoryColors = {
    web: "border-green-500",
    ai: "border-purple-500",
    cloud: "border-blue-500",
    iot: "border-cyan-500",
  }

  const categoryLabels = {
    web: { text: "Web Development", bg: "bg-green-500" },
    ai: { text: "AI/ML", bg: "bg-purple-500" },
    cloud: { text: "Cloud Computing", bg: "bg-blue-500" },
    iot: { text: "IoT", bg: "bg-cyan-500" },
  }

  // Search and Filters
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  const toggleFilter = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== category))
    } else {
      setActiveFilters([...activeFilters, category])
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setActiveFilters([])
  }

  // Apply filters and search
  useEffect(() => {
    let result = projects

    // Apply category filters if any are active
    if (activeFilters.length > 0) {
      result = result.filter((project) =>
        project.categories.some((category) => activeFilters.includes(category)),
      )
    }

    // Apply search query if it exists
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tech.toLowerCase().includes(query),
      )
    }

    setFilteredProjects(result)
  }, [searchQuery, activeFilters, projects])

  // Get primary category for border color (using first category)
  const getPrimaryCategory = (categories: string[]) => {
    return categories[0] || "web" // Default to web if no categories
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Projects</h2>

      {/* Search and filter section */}
      <div className="space-y-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-zinc-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center mr-2">
            <Filter size={16} className="text-zinc-500 mr-1" />
            <span className="text-zinc-400 text-sm">Filter:</span>
          </div>
          {Object.entries(categoryLabels).map(([key, value]) => (
            <button
              key={key}
              onClick={() => toggleFilter(key)}
              className={`text-xs px-2 py-1 rounded-md transition-colors ${
                activeFilters.includes(key) ? `${value.bg} text-white` : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {value.text}
            </button>
          ))}
          {(activeFilters.length > 0 || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 hover:bg-zinc-700 ml-auto"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-zinc-500">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {/* Projects list */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`border-l-4 ${
                categoryColors[getPrimaryCategory(project.categories) as keyof typeof categoryColors]
              } rounded-md p-3 bg-zinc-800/50`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-yellow-400 font-semibold">{project.name}</h3>
                <div className="flex flex-wrap gap-1 justify-end">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className={`${
                        categoryLabels[category as keyof typeof categoryLabels].bg
                      } text-white text-xs px-2 py-1 rounded`}
                    >
                      {categoryLabels[category as keyof typeof categoryLabels].text}
                    </span>
                  ))}
                </div>
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
      ) : (
        <div className="p-6 text-center bg-zinc-800/50 rounded-md border border-zinc-700">
          <p className="text-zinc-400">No projects match your search criteria.</p>
          <button onClick={clearFilters} className="text-green-400 hover:underline mt-2">
            Clear filters
          </button>
        </div>
      )}

      {/* Coming soon message */}
      <div className="mt-8 p-4 border border-zinc-700 border-dashed rounded-md bg-zinc-800/30 text-center">
        <p className="text-zinc-400">
          <span className="text-yellow-400 font-semibold">More projects coming soon!</span>
        </p>
        <p className="text-sm text-zinc-500 mt-1">
          I&apos;m constantly working on new and exciting projects. Check back later for updates.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 italic">
          More smaller scale projects available in my GitHub profile. Type <span className="text-yellow-400">contact</span> to visit my social profiles.
        </p>
      </div>
    </div>
  )
}
