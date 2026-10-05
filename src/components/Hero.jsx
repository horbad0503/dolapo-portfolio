import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, BadgeCheck } from "lucide-react";
import { profile, stats } from "../data/portfolio";

const bars = [45, 62, 38, 78, 55, 92, 70, 84];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* ── Left: text content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for Data Analytics Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-brand-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Dolapo Onipede
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                View My Projects <ArrowRight size={16} />
              </a>
              <a href={profile.cv} className="btn-ghost" download>
                <Download size={16} /> Download CV
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} /> Let's Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6 flex items-center gap-2 text-xs text-slate-500"
            >
              <MapPin size={14} /> {profile.location}
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass card-hover px-4 py-4 text-center"
                >
                  <dt className="font-display text-2xl font-bold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: profile + dashboard card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-indigo-500/10 to-transparent blur-2xl" />

            <div className="glass animate-floaty overflow-hidden p-6 shadow-2xl shadow-black/40">
              {/* Profile photo */}
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32 sm:h-36 sm:w-36">
                  {/* gradient ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-400 via-cyan-300 to-indigo-500 opacity-90 blur-[2px]" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-ink-950 bg-ink-900">
                    <img
                      src="/dolapo-profile.jpeg"
                      alt="Dolapo Onipede"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // fallback: show initials if the image is missing
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.classList.add(
                          "grid",
                          "place-items-center"
                        );
                        e.currentTarget.parentElement.innerHTML +=
                          '<span class="font-display text-2xl font-bold text-brand-300">DO</span>';
                      }}
                    />
                  </div>
                  {/* verified badge */}
                  <span className="absolute bottom-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full border-2 border-ink-950 bg-emerald-500 shadow-lg">
                    <BadgeCheck size={13} className="text-white" />
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  Dolapo Onipede
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                  Data Analyst
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {["Excel", "SQL", "Power BI", "Python"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-white/10" />

              {/* Revenue overview */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Revenue Overview
                  </p>
                  <p className="font-display text-xl font-bold text-white">
                    $126,579.04
                  </p>
                </div>
                <span className="chip !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-300">
                  ▲ 12.4%
                </span>
              </div>

              {/* Bars */}
              <div className="mt-5 flex h-32 items-end gap-2">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand-500/40 to-brand-300 animate-growBar"
                      style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                    />
                    <span className="text-[9px] text-slate-600">{months[i]}</span>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                {[
                  { k: "Orders", v: "830" },
                  { k: "Customers", v: "91" },
                  { k: "Unshipped", v: "21" },
                ].map((m) => (
                  <div key={m.k} className="text-center">
                    <p className="font-display text-lg font-bold text-white">
                      {m.v}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      {m.k}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating decorative chips */}
            <div className="absolute -left-4 top-1/4 hidden animate-floaty rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur-xl sm:block">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                SQL
              </p>
              <p className="font-display text-sm font-bold text-brand-300">
                Query
              </p>
            </div>
            <div
              className="absolute -right-3 bottom-16 hidden animate-floaty rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur-xl sm:block"
              style={{ animationDelay: "1.4s" }}
            >
              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                Power BI
              </p>
              <p className="font-display text-sm font-bold text-indigo-300">
                Dashboards
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}