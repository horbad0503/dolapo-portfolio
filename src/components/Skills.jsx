import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technical Competency"
          subtitle="The tools, techniques, and thinking I bring to every dataset."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = Icons[group.icon] || Icons.Circle;
            return (
              <Reveal key={group.title} delay={i * 0.06} className="h-full">
                <article className="glass card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-brand-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-brand-400/40 hover:text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}