import { useEffect, useState } from "react";
import {
  Mail,
  ArrowUpRight,

  Code2,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  ExternalLink,
  Layers3,
} from "lucide-react";
const projects = [
  {
    number: "01",
    title: "TrackHer",
    category: "Full Stack Development",
    description:
      "A period and pregnancy tracking application featuring cycle predictions, symptom logging, personalized insights, and an AI-powered chatbot.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Bijita02/Trackher.git",
  },
  {
    number: "02",
    title: "Friendly Finds",
    category: "Full Stack Development",
    description:
      "A student-focused second-hand marketplace designed to make buying and selling pre-owned stationery and furniture simple and affordable.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    github: "https://github.com/Koju-r28/Friendlyfinds.git",
  },
  {
    number: "03",
    title: "Vehicle Rental System",
    category: "Desktop Application",
    description:
      "A desktop-based vehicle rental management system with customer and admin functionalities for managing rental operations.",
    tech: ["C++", "Qt", "SQLite"],
    github: "https://github.com/swostika77/Vehicle-Rental-System.git",
  },
];

const skills = [
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "Canva",
];

const education = [
  {
    degree: "Bachelor of Engineering / Computer Science",
    school: "Kathmandu University",
    year: "Present",
    status: "Currently studying",
  },
  {
    degree: "Higher Secondary Education / +2 Science",
    school: "Khowpa Secondary School",
    year: "2022 – 2024",
    status: "Completed",
  },
  {
    degree: "School Education / SEE",
    school: "Sunshine National School",
    year: "2010 – 2022",
    status: "Completed",
  },
];

const quotes = [
  "Small steps still move you forward.",
  "Create with curiosity. Learn with courage.",
  "Progress over perfection.",
  "Stay curious, keep building.",
];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typedQuote, setTypedQuote] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    let delay = isDeleting ? 35 : 65;

    if (!isDeleting && typedQuote === currentQuote) {
      delay = 1800;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedQuote === currentQuote) {
        setIsDeleting(true);
      } else if (isDeleting && typedQuote.length === 0) {
        setIsDeleting(false);
        setQuoteIndex((current) => (current + 1) % quotes.length);
      } else if (isDeleting) {
        setTypedQuote(currentQuote.slice(0, typedQuote.length - 1));
      } else {
        setTypedQuote(currentQuote.slice(0, typedQuote.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typedQuote, isDeleting, quoteIndex]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f9fa] text-[#252a34]">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-[#e5e7eb] bg-[#f8f9fa]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          <a href="#home" className="text-2xl font-black tracking-tight">
            ritu<span className="text-[#52677f]">.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-medium text-[#667085] md:flex">
            {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-[#52677f]"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="mailto:kojur28@gmail.com"
            className="rounded-full bg-[#29313d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#52677f]"
          >
            Let's Talk ↗
          </a>
        </nav>
      </header>

      <main>

        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-12"
        >
          <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-slate-200/40 blur-[100px]" />
          <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-slate-200/30 blur-[100px]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#52677f] shadow-sm">
                <Sparkles size={15} />
                Computer Science Student
              </div>

              <h1 className="text-5xl font-black leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
                Hello, I'm
                <span className="block text-[#52677f]">
                  Ritu Koju.
                </span>
                <span className="text-[#303946]">
                  Developer in
                </span>
                <span className="block text-[#8b95a3]">
                  the making.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#667085]">
                I enjoy turning ideas into functional digital experiences.
                I'm passionate about web development, problem-solving, and
                continuously exploring new technologies.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-full bg-[#52677f] px-7 py-4 font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:bg-[#7544df]"
                >
                  Explore My Work
                  <ArrowUpRight size={19} />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-[#d5dbe2] bg-white px-7 py-4 font-semibold transition hover:border-[#52677f] hover:text-[#52677f]"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <a
                  href="https://github.com/Koju-r28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-[#e1e5e9] bg-white p-3 text-[#667085] transition hover:-translate-y-1 hover:text-[#52677f]"
                >
               <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65 .5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.2 3.3 1.6.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/ritu-koju-50877436a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-[#e1e5e9] bg-white p-3 text-[#667085] transition hover:-translate-y-1 hover:text-[#52677f]"
                >
               <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
                </a>

                <a
                  href="mailto:kojur28@gmail.com"
                  aria-label="Email"
                  className="rounded-full border border-[#e1e5e9] bg-white p-3 text-[#667085] transition hover:-translate-y-1 hover:text-[#52677f]"
                >
                  <Mail size={21} />
                </a>
              </div>
            </div>

            {/* HERO PROFILE CARD */}
            <div className="relative mx-auto w-full max-w-md">

              <div className="absolute -right-5 -top-5 h-full w-full rounded-[2.5rem] border-2 border-slate-200" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#29313d] p-8 text-white shadow-xl shadow-slate-200 sm:p-12">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#52677f]/15 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-widest text-slate-200">
                      HELLO!
                    </span>
                    <Sparkles className="text-slate-300" />
                  </div>

                  <div className="my-16 flex justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-full border border-slate-300/30 bg-gradient-to-br from-[#b69afc] via-[#52677f] to-[#5635a7] shadow-2xl shadow-slate-900/40">
                      <span className="text-8xl font-black text-white">
                        R
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-300">
                    HELLO, WORLD!
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Ritu Koju
                  </h2>

                  <p className="mt-3 text-[#c6ccd4]">
                    Learning · Building · Growing
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Developer", "Learner", "Problem Solver"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-100"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-7 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
                <div className="rounded-xl bg-slate-100 p-3 text-[#52677f]">
                  <Code2 size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold">Building ideas</p>
                  <p className="text-xs text-[#87909c]">One project at a time</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 py-28 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#52677f]">
                01 / ABOUT ME
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                A little about
                <span className="text-[#52677f]"> who I am.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-9 text-[#667085]">
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
                I'm currently focused on improving my development skills
                and building projects that challenge me to learn something
                new.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-[#52677f] transition hover:gap-4"
              >
                Let's connect <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>



        {/* QUOTES / TYPEWRITER */}
        <section className="px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#e1e5e9] bg-white px-7 py-16 text-center shadow-sm sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#52677f]">
              A LITTLE INSPIRATION
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#303946] sm:text-4xl">
              “{typedQuote}
              <span className="ml-1 inline-block h-8 w-[2px] translate-y-1 animate-pulse bg-[#52677f] sm:h-10" />
              ”
            </h2>
            <p className="mt-5 text-sm text-[#87909c]">
              A reminder to keep learning, creating, and growing.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="bg-[#29313d] px-6 py-28 text-white lg:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
              02 / WHAT I WORK WITH
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="text-4xl font-black sm:text-5xl">
                My Technical
                <span className="text-slate-300"> Skills.</span>
              </h2>

              <p className="max-w-md leading-7 text-[#c6ccd4]">
                Technologies and tools I use to build applications and
                bring my ideas to life.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-slate-300/50 hover:bg-slate-600/20"
                >
                  <span className="text-sm font-medium text-slate-300">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-bold transition group-hover:text-slate-300">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#52677f]">
              03 / MY WORK
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="text-4xl font-black sm:text-5xl">
                Selected
                <span className="text-[#52677f]"> Projects.</span>
              </h2>

              <a
                href="https://github.com/Koju-r28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#52677f] hover:gap-4"
              >
                More on GitHub <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex flex-col rounded-3xl border border-[#e2e6ea] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-100/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#87909c]">
                      PROJECT / {project.number}
                    </span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="rounded-full bg-[#eef1f4] p-3 text-[#52677f] transition hover:bg-[#52677f] hover:text-white"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <div className="my-8 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edf0f3] to-[#e2e7ed]">
                    {project.number === "01" && (
                      <Sparkles size={48} className="text-[#52677f]" />
                    )}
                    {project.number === "02" && (
                      <Layers3 size={48} className="text-[#52677f]" />
                    )}
                    {project.number === "03" && (
                      <BriefcaseBusiness size={48} className="text-[#52677f]" />
                    )}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest text-[#52677f]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#667085]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#eef1f4] px-3 py-2 text-xs font-semibold text-[#536174]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-[#e6e9ed] pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold transition hover:text-[#52677f]"
                    >
                      View Repository
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="bg-[#f0f2f4] px-6 py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#52677f]">
              04 / EXPERIENCE
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Experience<span className="text-[#52677f]">.</span>
            </h2>

            <div className="mt-14 rounded-3xl border border-[#e1e5e9] bg-white p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-[#eef1f4] p-4 text-[#52677f]">
                    <BriefcaseBusiness size={26} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#667085]">
                      Event & Team Experience
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#303946]">
                      Design Team & Marketing Team Member
                    </h3>
                    <p className="mt-2 text-lg font-medium text-[#52677f]">
                      IT Meet 2025
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full bg-[#eef1f4] px-5 py-3 text-sm font-semibold text-[#52677f]">
                  2025
                </span>
              </div>

              <p className="mt-7 max-w-3xl leading-8 text-[#667085]">
                Collaborated with the design and marketing teams to support
                event branding, promotional activities, and communication for
                IT Meet 2025. This experience helped me strengthen my teamwork,
                creativity, and communication skills while contributing to a
                technology-focused event.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Teamwork", "Event Design", "Marketing", "Communication"].map((item) => (
                  <span key={item} className="rounded-full bg-[#eef1f4] px-3 py-2 text-xs font-semibold text-[#536174]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="bg-[#f0f2f4] px-6 py-28 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#52677f]">
              05 / MY JOURNEY
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Education<span className="text-[#52677f]">.</span>
            </h2>

            <div className="mt-14 space-y-5">
              {education.map((item, index) => (
                <div
                  key={item.school}
                  className="group flex flex-col gap-5 rounded-3xl border border-[#e1e5e9] bg-white p-7 transition hover:shadow-xl hover:shadow-slate-100 sm:flex-row sm:items-center sm:justify-between sm:p-9"
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl bg-[#edf0f3] p-4 text-[#52677f]">
                      {index === 0 ? (
                        <GraduationCap size={25} />
                      ) : (
                        <Code2 size={25} />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold sm:text-xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-[#667085]">
                        {item.school}
                      </p>

                      <p className="mt-2 text-xs font-medium text-[#87909c]">
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <span className="whitespace-nowrap rounded-full bg-[#eef1f4] px-5 py-3 text-sm font-bold text-[#52677f]">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#29313d] px-8 py-20 text-center text-white sm:px-16">

            <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-slate-600/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-slate-600/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
                <Mail size={30} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
                06 / GET IN TOUCH
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                Have an idea?
                <span className="block text-slate-300">
                  Let's build it.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl leading-8 text-[#c6ccd4]">
                I'm always open to interesting projects, learning
                opportunities, collaborations, and conversations.
                Feel free to reach out!
              </p>

              <a
                href="mailto:kojur28@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#52677f] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#7544df]"
              >
                Say Hello <ArrowUpRight size={19} />
              </a>

              <div className="mt-12 flex justify-center gap-5">
                <a
                  href="https://github.com/Koju-r28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65 .5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.2 3.3 1.6.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/ritu-koju-50877436a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
                </a>

                <a
                  href="mailto:kojur28@gmail.com"
                  aria-label="Email"
                  className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                >
                  <Mail size={21} />
                </a>

                <a
                  href="https://www.instagram.com/rittttssss.k/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/ritu.koju.18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#e2e6ea] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#87909c] sm:flex-row">
          <p>
            © 2026 Ritu Koju. Made with care.
          </p>

          <a
            href="#home"
            className="font-semibold transition hover:text-[#52677f]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
