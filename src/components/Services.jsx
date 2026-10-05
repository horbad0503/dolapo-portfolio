import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/portfolio";

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          subtitle="Practical analytics services that turn raw data into decisions."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Circle;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="glass card-hover flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-indigo-500 text-ink-950">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {s.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="chip">
                        {it}
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