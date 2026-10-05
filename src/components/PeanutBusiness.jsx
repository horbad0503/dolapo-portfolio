import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Package,
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { peanut } from "../data/portfolio";
import { useProducts } from "../hooks/useProducts";

const icons = [Sprout, Package, Sparkles];

export default function PeanutBusiness() {
  const { products } = useProducts();
  const preview = products.filter((p) => p.available !== false).slice(0, 4);

  return (
    <section id="peanut" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Also From Dolapo"
          title={peanut.brand}
          subtitle={peanut.shortPitch}
        />

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/[0.08] via-orange-500/[0.04] to-transparent">
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
              {/* ── LEFT: brand + CTA ── */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-amber-400/30">
                    <img
                      src={peanut.logo}
                      alt={peanut.brand}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="grid h-full w-full place-items-center bg-gradient-to-br from-amber-400 to-orange-500 text-2xl">🥜</div>';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-widest text-amber-300">
                      {peanut.brand}
                    </p>
                    <p className="text-xs text-slate-500">
                      Small-batch · Nigerian-made
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {peanut.tagline}
                </h3>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
                  Roasted, ground, and packaged with care — for homes, events,
                  offices, and retailers across Nigeria. Order by the pack or
                  in bulk.
                </p>

                {/* highlights */}
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
                        <p className="mt-0.5 text-xs text-slate-500">
                          {h.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={peanut.storePath}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_0_36px_-8px_rgba(251,191,36,0.8)] hover:brightness-110 active:scale-[0.98]"
                  >
                    Visit the Store <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`https://wa.me/${peanut.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-400/40 hover:bg-white/5"
                  >
                    <MessageCircle size={15} /> Order on WhatsApp
                  </a>
                </div>
              </div>

              {/* ── RIGHT: product preview ── */}
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-orange-500/10 blur-2xl" />

                {preview.length === 0 ? (
                  <div className="glass grid h-64 place-items-center text-center">
                    <div>
                      <span className="text-5xl">🥜</span>
                      <p className="mt-3 text-sm text-slate-400">
                        Products coming soon
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {preview.map((p, i) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="glass group relative overflow-hidden"
                      >
                        {/* accent strip */}
                        <div
                          className={`h-1 w-full bg-gradient-to-r ${p.accent}`}
                        />

                        {/* image */}
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/5">
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.parentElement.innerHTML = `<div class="grid h-full place-items-center text-5xl">${p.emoji || "🥜"}</div>`;
                              }}
                            />
                          ) : (
                            <div className="grid h-full place-items-center text-5xl">
                              {p.emoji || "🥜"}
                            </div>
                          )}

                          {/* badge */}
                          {p.badge && (
                            <span className="absolute left-2 top-2 rounded-full border border-amber-400/30 bg-ink-950/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur">
                              {p.badge}
                            </span>
                          )}
                        </div>

                        {/* info */}
                        <div className="p-3">
                          <p className="truncate font-display text-sm font-semibold text-white">
                            {p.name}
                          </p>
                          {p.size && (
                            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                              {p.size}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-display text-sm font-bold text-amber-300">
                              {p.price}
                            </span>
                            {p.unit && (
                              <span className="text-[9px] text-slate-600">
                                {p.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-3 hidden animate-floaty items-center gap-2 rounded-full border border-amber-400/30 bg-ink-900/90 px-4 py-2 backdrop-blur-xl sm:flex">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-white">
                    Fresh batches weekly
                  </span>
                </div>
              </div>
            </div>

            {/* ── BOTTOM STRIP: quick stats ── */}
            <div className="border-t border-amber-400/10 bg-amber-500/[0.03] px-6 py-4 sm:px-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <ShoppingBag size={13} className="text-amber-300" />
                    <strong className="font-semibold text-white">
                      {products.filter((p) => p.available !== false).length}
                    </strong>{" "}
                    products available
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
                  <span>Nationwide delivery</span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
                  <span>Bulk orders welcome</span>
                </div>

                <Link
                  to={peanut.storePath}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition hover:text-amber-200"
                >
                  Browse full range <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}