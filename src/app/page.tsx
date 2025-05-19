"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ type: "command" | "response"; content: React.ReactNode }[]>([
    {
      type: "response",
      content: (
        <div className="space-y-2">
          <p className="text-green-400">Welcome to my portfolio terminal!</p>
          <p>Type one of the following commands to navigate:</p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-yellow-400">about</span> - Learn about me
            </li>
            <li>
              <span className="text-yellow-400">projects</span> - View my projects
            </li>
            <li>
              <span className="text-yellow-400">contact</span> - Get in touch
            </li>
            <li>
              <span className="text-yellow-400">help</span> - Show available commands
            </li>
            <li>
              <span className="text-yellow-400">clear</span> - Clear the terminal
            </li>
          </ul>
        </div>
      ),
    },
  ])
  const terminalEndRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()

    // Add the command to messages
    setMessages((prev) => [...prev, { type: "command", content: command }])

    // Process the command
    let response

    switch (command) {
      case "about":
        response = <AboutMe />
        break
      case "projects":
        response = <Projects />
        break
      case "contact":
        response = <Contact />
        break
      case "help":
        response = (
          <div className="space-y-2">
            <p>Available commands:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="text-yellow-400">about</span> - Learn about me
              </li>
              <li>
                <span className="text-yellow-400">projects</span> - View my projects
              </li>
              <li>
                <span className="text-yellow-400">contact</span> - Get in touch
              </li>
              <li>
                <span className="text-yellow-400">help</span> - Show available commands
              </li>
              <li>
                <span className="text-yellow-400">clear</span> - Clear the terminal
              </li>
            </ul>
          </div>
        )
        break
      case "clear":
        setMessages([])
        return
      default:
        response = (
          <div>
            <p className="text-red-400">Command not recognized: {command}</p>
            <p>
              Type <span className="text-yellow-400">help</span> to see available commands.
            </p>
          </div>
        )
    }

    // Add the response to messages
    setMessages((prev) => [...prev, { type: "response", content: response }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-zinc-900 relative">
      <Terminal
        messages={messages}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        terminalEndRef={terminalEndRef}
      />
      <footer className="absolute bottom-2 text-center w-full text-zinc-500 text-sm">
        © {new Date().getFullYear()} Karldritz Farrel Hanson - All Rights Reserved
      </footer>
    </main>
  )
}
