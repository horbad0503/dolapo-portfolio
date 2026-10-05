import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const initialForm = { name: "", email: "", projectType: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback so the form works out of the box.
    const subject = encodeURIComponent(
      `Portfolio Inquiry — ${form.projectType || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "theglobaldolapo", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "dolapoData", href: profile.github },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Interested in data analytics, dashboards, SQL, or data-driven decision-making? I'm open to connecting with professionals, organizations, and teams interested in using data to better understand performance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Left — details */}
          <Reveal>
            <div className="glass h-full p-6 sm:p-8">
              <span className="chip">
                <MapPin size={12} className="mr-1.5" /> {profile.location}
              </span>

              <div className="mt-6 space-y-3">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-brand-400/40 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-400/20 to-indigo-500/20 text-brand-300">
                      <d.icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                        {d.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-slate-200">
                        {d.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass p-6 sm:p-8">
              {sent && (
                <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-sm text-emerald-300">
                  <CheckCircle2 size={16} />
                  Thanks! Your email client should open with the inquiry pre-filled.
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project Type">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    className={inputClass}
                  >
                    <option value="">Select a project type</option>
                    <option>Business Data Analysis</option>
                    <option>Data Cleaning & Preparation</option>
                    <option>BI & Dashboards</option>
                    <option>SQL & Database Analysis</option>
                    <option>Data Storytelling & Reporting</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your data or project…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Send Inquiry <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-400/20";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}