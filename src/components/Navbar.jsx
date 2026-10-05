import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, profile, peanut } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* ── Brand: profile image + name ── */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/15">
            <img
              src="/dolapo-profile.jpeg"
              alt="Dolapo Onipede"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<span class="grid h-full w-full place-items-center bg-gradient-to-br from-brand-400 to-indigo-500 font-display text-sm font-bold text-ink-950">DO</span>';
              }}
            />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
            {profile.name}
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA cluster ── */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to={peanut.storePath}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:border-amber-400/60 hover:bg-amber-400/15"
          >
            🥜 DYP's Peanut <ExternalLink size={13} />
          </Link>
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Let's Connect
          </a>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x grid grid-cols-2 gap-2 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-brand-400/40 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Full-width peanut store link inside mobile menu */}
              <li className="col-span-2">
                <Link
                  to={peanut.storePath}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-300"
                >
                  🥜 Visit DYP's Peanut <ExternalLink size={13} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}