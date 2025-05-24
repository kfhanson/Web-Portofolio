export function AboutMe() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">About Me</h2>

      <div className="space-y-2">
        <p>
          Hi! I&apos;m <span className="text-yellow-400">Karldritz Farrel Hanson</span>, a try-hard student with expertise in:
        </p>

        <ul className="list-disc list-inside pl-4">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Computer Vision</li>
          <li>Frontend Development (React, Next.js, JavaScript, TypeScript)</li>
          <li>Backend Integration (PHP, MySQL)</li>
          <li>Data Science/Analytics (SPSS, Power BI)</li>
          <li>Cloud Services (AWS)</li>
        </ul>

        <p className="mt-4">
          With <span className="text-yellow-400">4 years</span> of coding experience, I&apos;ve worked across diverse fields, from developing web applications to 
          solving complex problems with effective solutions. I am now prioritizing my studies in Artificial Intelligence, a field I&apos;m deeply passionate about.
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll find me getting into fitness, trying out new stuff, and experimenting with new tech. I&apos;m a curious person who loves new experiences.
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
