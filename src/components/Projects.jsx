import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've Built"
          subtitle="Selected analytics work spanning healthcare, retail, banking, HR, and software quality."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} className="h-full">
              <article className="glass card-hover group flex h-full flex-col overflow-hidden">
                {/* accent header */}
                <div className={`relative h-1.5 w-full bg-gradient-to-r ${p.accent}`} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-sm font-bold text-slate-600">
                      {p.id}
                    </span>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-brand-400/50 group-hover:text-brand-300"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    {p.category}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {p.challenge}
                  </p>

                  {p.keyResult && (
                    <p className="mt-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3 text-xs text-emerald-300/90">
                      <strong className="font-semibold">Key result:</strong> {p.keyResult}
                    </p>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-300 transition hover:text-brand-200"
                  >
                    View Details <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}