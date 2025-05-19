import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-400 font-bold">Contact</h2>

      <div className="space-y-3">
        <p>Feel free to reach out through any of these channels:</p>

        <div className="space-y-2 mt-4">
          <div className="flex items-center">
            <Mail className="text-yellow-400 mr-3" size={18} />
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
              your.email@example.com
            </a>
          </div>

          <div className="flex items-center">
            <Github className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/yourusername
            </a>
          </div>

          <div className="flex items-center">
            <Linkedin className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
          </div>

          <div className="flex items-center">
            <Twitter className="text-yellow-400 mr-3" size={18} />
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @yourusername
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 border border-zinc-700 rounded-md bg-zinc-800/50">
        <h3 className="text-yellow-400 font-semibold mb-2">Quick Message</h3>
        <p className="text-sm text-zinc-400 mb-4">In a real implementation, this would be a working contact form.</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-zinc-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-zinc-200"
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-zinc-200"
          ></textarea>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">Send Message</button>
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
