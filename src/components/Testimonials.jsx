import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 p-10 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-indigo-500/20 text-brand-300">
              <Quote size={26} />
            </div>
            <p className="font-display text-lg font-semibold text-white">
              Coming Soon
            </p>
            <p className="text-sm text-slate-400">
              Testimonials will be added here soon.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}