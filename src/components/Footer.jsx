import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/15">
                <img
                src="/dolapo-profile.jpeg"
                alt="Dolapo Onipede"
                className="h-full w-full object-cover"
                />
            </span>
            <span className="font-display text-sm font-semibold text-white">
                {profile.fullName}
            </span>
            </a>
            <p className="mt-4 text-sm text-slate-400">{profile.role}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.tagline}</p>

            <div className="mt-5 flex gap-2">
              {[
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Github, href: profile.github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-brand-400/40 hover:text-brand-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="col-span-2">
                <Link
                    to="/peanut"
                    className="font-semibold text-amber-300 transition hover:text-amber-200"
                >
                    🥜 Peanut Store →
                </Link>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition hover:text-brand-300"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="transition hover:text-brand-300"
                >
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>

            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300 transition hover:text-brand-200"
            >
              <ArrowUp size={14} /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}