export function AboutMe() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">About Me</h2>

      <div className="space-y-2">
        <p>
          Hi! I'm <span className="text-yellow-400">Karldritz Farrel Hanson</span>, a try-hard student with expertise in:
        </p>

        <ul className="list-disc list-inside pl-4">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Computer Vision</li>
          <li>Frontend Development (React, Next.js, JavaScript, TypeScript)</li>
          <li>Backend Integration (PHP, MySQL)</li>
          <li>Data Science/Analytics (SPSS, Power BI)</li>
        </ul>

        <p className="mt-4">
          I have been coding for <span className="text-yellow-400">4 years</span> filling up my experience with multiple fields, from building web applications to solving
          complex problems with smart solutions. Currently, I prioritize myself in studying Artificial Intelligence since that is what I'm most passionate about.
        </p>

        <p>
          When I'm not coding, you can find me fitness, trying new stuffs and/or experimenting with new technologies. I am a curious fellow, wanting to try new experiences.
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
