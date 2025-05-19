export function AboutMe() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">About Me</h2>

      <div className="space-y-2">
        <p>
          Hello! I'm <span className="text-yellow-400">Your Name</span>, a passionate developer with expertise in:
        </p>

        <ul className="list-disc list-inside pl-4">
          <li>Frontend Development (React, Next.js)</li>
          <li>Backend Development (Node.js, Express)</li>
          <li>Database Management (MongoDB, PostgreSQL)</li>
          <li>Cloud Services (AWS, Vercel)</li>
        </ul>

        <p className="mt-4">
          I have <span className="text-yellow-400">X years</span> of experience building web applications and solving
          complex problems with elegant solutions.
        </p>

        <p>
          When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 italic">
          Type <span className="text-yellow-400">projects</span> to see my work or{" "}
          <span className="text-yellow-400">contact</span> to get in touch.
        </p>
      </div>
    </div>
  )
}
