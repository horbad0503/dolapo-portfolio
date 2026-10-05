import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, X, Target, Lightbulb, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              {project.title}
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Target size={16} className="text-brand-300" /> The Challenge
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Lightbulb size={16} className="text-brand-300" /> The Approach
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.approach}
                </p>
              </div>

              {project.keyResult && (
                <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-sm text-emerald-300/90">
                  <strong className="font-semibold">Key result:</strong> {project.keyResult}
                </p>
              )}

              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-brand-300" /> Outcome Highlights
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-white">Tools</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Github size={16} /> View on GitHub
              </a>
              <button onClick={onClose} className="btn-ghost">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}