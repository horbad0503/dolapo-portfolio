import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Where I Work"
          subtitle="Applying analytics in practice while helping others build data skills."
        />

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company} delay={i * 0.08}>
              <article className="glass card-hover relative overflow-hidden p-6 sm:p-8">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-400 to-indigo-500" />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-brand-300">
                      <Briefcase size={14} /> {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="chip">{job.period}</span>
                    <p className="mt-2 flex items-center justify-end gap-1.5 text-xs text-slate-500">
                      <MapPin size={12} /> {job.location}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  {job.summary}
                </p>

                <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Key Contributions
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {job.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}