"use client"

import Gravity, { MatterBody } from "@/components/gravity"

// Define tech categories with their colors
const techCategories = {
  web: "#3178c6", // Web - blue
  data: "#4db33d", // Data - green
  language: "#f7df1e", // Languages - yellow
  tool: "#ff4154", // Tools - red
  ml: "#8A2BE2", // ML frameworks - purple
}

export function TechStacks() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Tech Stacks</h2>

      <p className="mb-4">These are the technologies I work with:</p>

      <div className="w-full h-[500px] border border-zinc-700 rounded-md bg-zinc-800/50 relative overflow-hidden">
        <div className="pt-6 text-2xl text-zinc-300 w-full text-center">My Tech Stack</div>

        <div className="absolute w-full text-center text-zinc-500 text-sm">
          Drag and interact with the bubbles!
        </div>

        <div className="absolute top-22 left-4 z-10 flex flex-wrap gap-2">
          <div className="px-2 py-1 bg-opacity-80 rounded text-xs flex items-center">
            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: techCategories.language }}></span>
            <span className="text-zinc-300">Languages</span>
          </div>
          <div className="px-2 py-1 bg-opacity-80 rounded text-xs flex items-center">
            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: techCategories.web }}></span>
            <span className="text-zinc-300">Web</span>
          </div>
          <div className="px-2 py-1 bg-opacity-80 rounded text-xs flex items-center">
            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: techCategories.ml }}></span>
            <span className="text-zinc-300">ML Frameworks</span>
          </div>
          <div className="px-2 py-1 bg-opacity-80 rounded text-xs flex items-center">
            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: techCategories.tool }}></span>
            <span className="text-zinc-300">Tools</span>
          </div>
          <div className="px-2 py-1 bg-opacity-80 rounded text-xs flex items-center">
            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: techCategories.data }}></span>
            <span className="text-zinc-300">Data</span>
          </div>
        </div>

        <Gravity gravity={{ x: 0, y: 0.3 }} className="w-full h-full">
          {/* Programming Languages */}
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="25%" y="20%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">
              JavaScript
            </div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="45%" y="25%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">
              TypeScript
            </div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="65%" y="20%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">Python</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="85%" y="25%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">C/C++</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="15%" y="30%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">Java</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="35%" y="35%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">SQL</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="55%" y="30%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">Go</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="75%" y="35%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">R</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="25%" y="40%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">HTML</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="45%" y="45%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">CSS</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="65%" y="40%">
            <div className="text-sm bg-[#f7df1e] text-zinc-900 rounded-full hover:cursor-grab px-4 py-2">PHP</div>
          </MatterBody>

          {/* Frameworks */}
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="20%" y="55%">
            <div className="text-sm bg-[#3178c6] text-white rounded-full hover:cursor-grab px-4 py-2">React</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="40%" y="60%">
            <div className="text-sm bg-[#3178c6] text-white rounded-full hover:cursor-grab px-4 py-2">Next.js</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="60%" y="55%">
            <div className="text-sm bg-[#3178c6] text-white rounded-full hover:cursor-grab px-4 py-2">Tailwind</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="80%" y="60%">
            <div className="text-sm bg-[#8A2BE2] text-white rounded-full hover:cursor-grab px-4 py-2">TensorFlow</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="30%" y="65%">
            <div className="text-sm bg-[#8A2BE2] text-white rounded-full hover:cursor-grab px-4 py-2">PyTorch</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="50%" y="70%">
            <div className="text-sm bg-[#8A2BE2] text-white rounded-full hover:cursor-grab px-4 py-2">Keras</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="70%" y="65%">
            <div className="text-sm bg-[#3178c6] text-white rounded-full hover:cursor-grab px-4 py-2">Laravel</div>
          </MatterBody>

          {/* Tools & Platforms */}
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="25%" y="80%">
            <div className="text-sm bg-[#ff4154] text-white rounded-full hover:cursor-grab px-4 py-2">Docker</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="45%" y="85%">
            <div className="text-sm bg-[#ff4154] text-white rounded-full hover:cursor-grab px-4 py-2">Git</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="65%" y="80%">
            <div className="text-sm bg-[#ff4154] text-white rounded-full hover:cursor-grab px-4 py-2">Power BI</div>
          </MatterBody>


          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="85%" y="85%">
            <div className="text-sm bg-[#4db33d] text-white rounded-full hover:cursor-grab px-4 py-2">SPSS</div>
          </MatterBody>
          <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.7 }} x="15%" y="75%">
            <div className="text-sm bg-[#4db33d] text-white rounded-full hover:cursor-grab px-4 py-2">Lambda</div>
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
