"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Terminal } from "@/components/terminal"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { CV } from "@/components/cv"
import { TechStacks } from "@/components/tech-stacks"
import { GripVertical, TerminalIcon } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

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
              <span className="text-yellow-400">cv</span> - View my resume/CV
            </li>
            <li>
              <span className="text-yellow-400">tech</span> - View my tech stacks
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
  const terminalRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Window state
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 800, height: 600 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState("")
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevSize, setPrevSize] = useState({ width: 800, height: 600 })
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 })
  const [isTerminalVisible, setIsTerminalVisible] = useState(true)

  // Shortcut position
  const [shortcutPosition, setShortcutPosition] = useState({ x: 20, y: 20 })

  // Drag state
  const dragStartPos = useRef({ x: 0, y: 0 })
  const resizeStartSize = useRef({ width: 0, height: 0 })
  const resizeStartPos = useRef({ x: 0, y: 0 })

  // Center the terminal on first render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const centerX = Math.max(0, (window.innerWidth - size.width) / 2)
      const centerY = Math.max(0, (window.innerHeight - size.height) / 2)
      setPosition({ x: centerX, y: centerY })
      setShortcutPosition({
        x: window.innerWidth - 100,
        y: 20,
      })
    }
  }, [])

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
        case "cv":
          response = <CV />
          break
        case "tech":
          response = <TechStacks />
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
                <span className="text-yellow-400">cv</span> - View my resume/CV
              </li>
              <li>
              <span className="text-yellow-400">tech</span> - View my tech stacks
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

  // Handle dragging
  const startDrag = (e: React.MouseEvent) => {
    if (isMobile || isMaximized) return
    e.preventDefault()
    setIsDragging(true)
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  // Handle resizing
  const startResize = (e: React.MouseEvent, direction: string) => {
    if (isMobile || isMaximized) return
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeDirection(direction)
    resizeStartSize.current = { ...size }
    resizeStartPos.current = {
      x: e.clientX,
      y: e.clientY,
    }
  }

  // Handle mouse move for both dragging and resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStartPos.current.x
        const newY = e.clientY - dragStartPos.current.y

        // Prevent dragging outside the viewport
        const maxX = window.innerWidth - size.width
        const maxY = window.innerHeight - size.height

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStartPos.current.x
        const deltaY = e.clientY - resizeStartPos.current.y

        let newWidth = resizeStartSize.current.width
        let newHeight = resizeStartSize.current.height
        let newX = position.x
        let newY = position.y

        // Minimum size constraints
        const minWidth = 400
        const minHeight = 300

        // Handle different resize directions
        if (resizeDirection.includes("e")) {
          newWidth = Math.max(minWidth, resizeStartSize.current.width + deltaX)
        }
        if (resizeDirection.includes("s")) {
          newHeight = Math.max(minHeight, resizeStartSize.current.height + deltaY)
        }
        if (resizeDirection.includes("w")) {
          const possibleWidth = Math.max(minWidth, resizeStartSize.current.width - deltaX)
          newX = position.x + (resizeStartSize.current.width - possibleWidth)
          newWidth = possibleWidth
        }
        if (resizeDirection.includes("n")) {
          const possibleHeight = Math.max(minHeight, resizeStartSize.current.height - deltaY)
          newY = position.y + (resizeStartSize.current.height - possibleHeight)
          newHeight = possibleHeight
        }

        setSize({ width: newWidth, height: newHeight })
        setPosition({ x: newX, y: newY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, position, size, resizeDirection])

  // Toggle maximize
  const toggleMaximize = () => {
    if (isMaximized) {
      // Restore previous size and position
      setSize(prevSize)
      setPosition(prevPosition)
    } else {
      // Save current size and position
      setPrevSize(size)
      setPrevPosition(position)
      // Maximize
      setSize({ width: window.innerWidth, height: window.innerHeight - 40})
      setPosition({ x: 0, y: 0 })
    }
    setIsMaximized(!isMaximized)
  }

  // Close terminal (hide)
  const closeTerminal = () => {
    setIsTerminalVisible(false)
  }

  // Open terminal
  const openTerminal = () => {
    setIsTerminalVisible(true)
  }

  const resetTerminal = () => {
    const centerX = Math.max(0, (window.innerWidth - 800) / 2)
    const centerY = Math.max(0, (window.innerHeight - 600) / 2)
    setSize({ width: 800, height: 600 })
    setPosition({ x: centerX, y: centerY })
    setIsMaximized(false)
    setMessages([
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
                <span className="text-yellow-400">cv</span> - View my resume/CV
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
  }

  return (
    <main className="min-h-screen bg-zinc-900 overflow-hidden">
      {/* Terminal shortcut icon - always visible */}
      <div
        className="absolute w-16 h-16 bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-700 transition-colors z-10"
        style={{
          left: `${shortcutPosition.x}px`,
          top: `${shortcutPosition.y}px`,
        }}
        onClick={openTerminal}
      >
        <TerminalIcon size={32} className="text-green-400" />
        <span className="text-xs text-zinc-300 mt-1">Terminal</span>
      </div>

      {isTerminalVisible && (
        <div
          ref={terminalRef}
          className="absolute shadow-xl rounded-md overflow-hidden flex flex-col z-20"
          style={{
            width: isMobile ? "100%" : `${size.width}px`,
            height: isMobile ? "calc(100% - 40px)" : `${size.height}px`, // Leave space for footer on mobile
            left: isMobile ? 0 : `${position.x}px`,
            top: isMobile ? 0 : `${position.y}px`,
            transition: isDragging || isResizing ? "none" : "box-shadow 0.3s ease",
          }}
        >
          {/* Terminal header with drag handle */}
          <div
            className={`bg-zinc-800 p-2 border-b border-zinc-700 flex items-center ${
              !isMobile && !isMaximized ? "cursor-move" : ""
            }`}
            onMouseDown={startDrag}
          >
            <div className="flex space-x-2 mr-4">
              <div
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:brightness-110 transition-all"
                onClick={closeTerminal}
                title="Close"
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:brightness-110 transition-all"
                onClick={toggleMaximize}
                title={isMaximized ? "Exit Full Screen" : "Full Screen"}
              ></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-zinc-400 text-sm font-mono flex-1 text-center">portfolio-terminal</div>
            {!isMobile && (
              <div className="flex items-center space-x-2 text-zinc-500">
                <GripVertical size={16} className="drag-handle opacity-50" />
              </div>
            )}
          </div>

          {/* Terminal content */}
          <Terminal
            messages={messages}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            terminalEndRef={terminalEndRef}
          />

          {/* Resize handles - only show when not maximized and not on mobile */}
          {!isMobile && !isMaximized && (
            <>
              <div
                className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-10"
                onMouseDown={(e) => startResize(e, "nw")}
              />
              <div
                className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize z-10"
                onMouseDown={(e) => startResize(e, "ne")}
              />
              <div
                className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize z-10"
                onMouseDown={(e) => startResize(e, "sw")}
              />
              <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-10 flex items-center justify-center"
                onMouseDown={(e) => startResize(e, "se")}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="text-zinc-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V3H3V0H0ZM7 0V3H10V0H7ZM0 7V10H3V7H0ZM7 7V10H10V7H7Z" />
                </svg>
              </div>
              <div
                className="absolute top-0 left-4 right-4 h-2 cursor-n-resize"
                onMouseDown={(e) => startResize(e, "n")}
              />
              <div
                className="absolute bottom-0 left-4 right-4 h-2 cursor-s-resize"
                onMouseDown={(e) => startResize(e, "s")}
              />
              <div
                className="absolute left-0 top-4 bottom-4 w-2 cursor-w-resize"
                onMouseDown={(e) => startResize(e, "w")}
              />
              <div
                className="absolute right-0 top-4 bottom-4 w-2 cursor-e-resize"
                onMouseDown={(e) => startResize(e, "e")}
              />
            </>
          )}
        </div>
      )}

      <footer className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center bg-zinc-900 border-t border-zinc-800 z-0">
        <span className="text-zinc-500 text-sm">© {new Date().getFullYear()} Karldritz Farrel Hanson - All Rights Reserved</span>
      </footer>
    </main>
  )
}
