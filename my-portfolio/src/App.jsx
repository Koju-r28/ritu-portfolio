import { Mail, ArrowUpRight, Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TrackHer",
    description:
      "A full-stack period and pregnancy tracking application with cycle predictions, symptom logging, personalized insights, and an AI chatbot.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Bijita02/Trackher.git",
  },
  {
    title: "Friendly Finds",
    description:
      "A modern thrift-store web application focused on creating a simple and engaging shopping experience.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Koju-r28/Friendlyfinds.git",
  },
  {
    title: "Vehicle Rental System",
    description:
      "A desktop-based vehicle rental management system with customer and admin functionality.",
    tech: ["C++", "Qt", "SQLite"],
    github: "https://github.com/swostika77/Vehicle-Rental-System.git",
  },
];

const skills = [
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Ritu<span className="text-slate-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-slate-500">
              About
            </a>

            <a href="#skills" className="transition hover:text-slate-500">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-slate-500">
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-slate-500"
            >
              Contact
            </a>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kojur28@gmail.com"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      <main>
        
        <section
          id="home"
          className="flex min-h-screen items-center px-6 pt-20"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Computer Science Student
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Hi, I'm Ritu.
                <br />
                I build things
                <span className="text-slate-400"> for the web.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                I'm a Computer Science student passionate about building
                useful, clean, and user-friendly applications while constantly
                learning new technologies.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
                >
                  View my work
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:border-slate-900"
                >
                  Contact me
                </a>
              </div>

              
              <div className="mt-10 flex gap-5">
                <a
                  href="https://github.com/Koju-r28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <Code size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ritu-koju-50877436a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <ExternalLink size={22} />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kojur28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>

        
        <section
          id="about"
          className="border-t border-slate-200 px-6 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                01
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                About Me
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600 md:col-span-2">
              <p>
                I'm a Computer Science student who enjoys creating
                applications that solve real-world problems.
              </p>

              <p>
                My interests include web development, software development,
                databases, and exploring new technologies. I enjoy taking an
                idea from a simple concept and turning it into something
                functional and meaningful.
              </p>

              <p>
                I'm currently focused on improving my development skills and
                building projects that challenge me to learn something new.
              </p>
            </div>
          </div>
        </section>

        
        <section
          id="skills"
          className="border-t border-slate-200 bg-slate-50 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              02
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Skills
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        
        <section
          id="projects"
          className="border-t border-slate-200 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              03
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Featured Projects
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="rounded-full p-1"
                    >
                      <ArrowUpRight
                        size={20}
                        className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-900"
                      />
                    </a>
                  </div>

                  
                  <p className="mt-5 min-h-32 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  
                  <div className="mt-7 flex gap-5 text-sm font-medium">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-slate-500"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

       
        <section
          id="education"
          className="border-t border-slate-200 bg-slate-50 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              04
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Education
            </h2>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold">
                    Bachelor of Engineering / Computer Science
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Kathmandu University
                  </p>
                </div>

                <p className="text-sm font-medium text-slate-400">
                  Present
                </p>
              </div>
            </div>
          </div>
        </section>

     
        <section
          id="contact"
          className="border-t border-slate-200 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              05
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Let's build something together.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              I'm always open to interesting projects, opportunities, and
              conversations.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kojur28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
            >
              <Mail size={18} />
              Get in touch
            </a>

            
            <div className="mt-8 flex gap-6 text-sm font-medium">
              <a
                href="https://github.com/Koju-r28"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-500"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ritu-koju-50877436a/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-500"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kojur28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-500"
              >
                Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Ritu. All rights reserved.</p>

          <p>Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;