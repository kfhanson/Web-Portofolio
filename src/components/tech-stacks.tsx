"use client"

import Gravity, { MatterBody } from "@/components/gravity"

export function TechStacks() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Tech Stacks</h2>

      <p className="mb-4">These are the technologies I work with:</p>

      <div className="w-full h-[400px] border border-zinc-700 rounded-md bg-zinc-800/50 relative overflow-hidden">
        <div className="pt-6 text-2xl text-zinc-300 w-full text-center">My Skills</div>
        <div className="absolute w-full text-center text-zinc-500 text-sm">
          Drag and interact with the bubbles!
        </div>
        <Gravity gravity={{ x: 0, y: 0.5 }} className="w-full h-full">
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="30%" y="10%">
            <div className="text-lg bg-[#61dafb] text-zinc-900 rounded-full hover:cursor-grab px-6 py-3">React</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="50%" y="20%">
            <div className="text-lg bg-[#3178c6] text-white rounded-full hover:cursor-grab px-6 py-3">TypeScript</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="70%" y="10%" angle={10}>
            <div className="text-lg bg-[#000000] text-white rounded-full hover:cursor-grab px-6 py-3">Next.js</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="20%" y="30%">
            <div className="text-lg bg-[#38bdf8] text-zinc-900 rounded-full hover:cursor-grab px-6 py-3">Tailwind</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="60%" y="30%">
            <div className="text-lg bg-[#4db33d] text-white rounded-full hover:cursor-grab px-6 py-3">MongoDB</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="40%" y="40%">
            <div className="text-lg bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-6 py-3">
              JavaScript
            </div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="80%" y="40%">
            <div className="text-lg bg-[#ff4154] text-white rounded-full hover:cursor-grab px-6 py-3">React Query</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="25%" y="50%">
            <div className="text-lg bg-[#764abc] text-white rounded-full hover:cursor-grab px-6 py-3">Redux</div>
          </MatterBody>
        </Gravity>
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 italic">
          Type <span className="text-yellow-400">about</span> to learn more about me or{" "}
          <span className="text-yellow-400">projects</span> to see my work.
        </p>
      </div>
    </div>
  )
}
