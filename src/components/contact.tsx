import { Mail, Github, Linkedin, BookOpen } from "lucide-react"

export function Contact() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Contact</h2>

      <div className="space-y-3">
        <p>Feel free to reach out through any of these channels:</p>

        <div className="space-y-2 mt-4">
          <div className="flex items-center">
            <Mail className="text-yellow-400 mr-3" size={18} />
            <a href="mailto:kfhanson.2508@gmail.com" className="text-blue-400 hover:underline">
              kfhanson.2508@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <Github className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://github.com/kfhanson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/kfhanson
            </a>
          </div>

          <div className="flex items-center">
            <Linkedin className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://linkedin.com/in/karldritz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/karldritz
            </a>
          </div>

          <div className="flex items-center">
            <BookOpen className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://medium.com/@karldritz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              medium.com/@karldritz
            </a>
          </div>
        </div>
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
