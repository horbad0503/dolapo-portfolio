import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { approach } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title="My Approach to Data"
          subtitle="A structured, business-first way of working with data — from question to insight."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Circle;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="glass card-hover h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-indigo-500/20 text-brand-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}