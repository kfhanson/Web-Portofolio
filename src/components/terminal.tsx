"use client"

import type React from "react"
import { ChevronRight } from "lucide-react"

interface TerminalProps {
  messages: { type: "command" | "response"; content: React.ReactNode }[]
  input: string
  setInput: (input: string) => void
  handleSubmit: (e: React.FormEvent) => void
  terminalEndRef: React.RefObject<HTMLDivElement>
}

export function Terminal({ messages, input, setInput, handleSubmit, terminalEndRef }: TerminalProps) {
  return (
    <div className="w-full max-w-4xl h-[80vh] bg-zinc-900 border border-zinc-700 rounded-md overflow-hidden flex flex-col">
      <div className="bg-zinc-800 p-2 border-b border-zinc-700 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-zinc-400 text-sm font-mono">portfolio-terminal</div>
      </div>

      <div className="flex-1 p-4 overflow-auto font-mono text-sm text-zinc-300">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message.type === "command" ? (
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$</span>
                <span>{message.content}</span>
              </div>
            ) : (
              <div className="pl-4 mt-1 mb-4">{message.content}</div>
            )}
          </div>
        ))}

        <div ref={terminalEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-zinc-700 p-2 flex items-center">
        <ChevronRight className="text-green-400 mr-2" size={16} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-zinc-300 font-mono"
          placeholder="Type a command..."
          autoFocus
        />
      </form>
    </div>
  )
}
