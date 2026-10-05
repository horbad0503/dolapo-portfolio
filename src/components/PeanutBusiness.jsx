import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Package, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { peanut } from "../data/portfolio";

const icons = [Sprout, Package, Sparkles];

export default function PeanutBusiness() {
  return (
    <section id="peanut" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Also From Dolapo"
          title="Dolapo's Peanut"
          subtitle={peanut.shortPitch}
        />

        <Reveal delay={0.1}>
          <div className="mt-12 grid items-center gap-8 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/[0.08] via-orange-500/[0.04] to-transparent p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Small-batch · Nigerian-made
              </span>

              <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {peanut.brand}
              </h3>
              <p className="mt-3 max-w-lg text-base text-slate-400">
                {peanut.tagline}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {peanut.highlights.map((h, i) => {
                  const Icon = icons[i] || Sprout;
                  return (
                    <div
                      key={h.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <Icon size={16} className="text-amber-300" />
                      <p className="mt-2 font-display text-sm font-semibold text-white">
                        {h.label}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{h.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={peanut.storePath}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_0_36px_-8px_rgba(251,191,36,0.8)] hover:brightness-110 active:scale-[0.98]"
                >
                  Visit the Peanut Store <ArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/${peanut.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — product preview */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-orange-500/10 blur-2xl" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { e: "🥜", n: "Roasted Peanuts" },
                  { e: "🥜", n: "Peanut Butter" },
                  { e: "🫙", n: "Peanut Oil" },
                  { e: "🎁", n: "Snack Packs" },
                ].map((p) => (
                  <div
                    key={p.n}
                    className="glass flex flex-col items-center gap-2 p-5 text-center"
                  >
                    <span className="text-4xl">{p.e}</span>
                    <span className="text-xs font-medium text-slate-300">
                      {p.n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}