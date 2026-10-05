import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingBag,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Truck,
  ShieldCheck,
  Leaf,
  Sparkles,
  Lock,
  Settings,
} from "lucide-react";
import { peanut } from "../data/portfolio";
import { useProducts } from "../hooks/useProducts";



export default function PeanutStore() {
  const { products } = useProducts();
  const visible = products.filter((p) => p.available !== false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[36rem] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-amber-300"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div className="flex items-center gap-2.5">
            <img
              src={peanut.logo}
              alt={peanut.brand}
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/15"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.insertAdjacentHTML(
                  "afterend",
                  '<span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-base">🥜</span>'
                );
              }}
            />
            <span className="font-display text-sm font-semibold text-white">
              {peanut.brand}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={peanut.adminPath}
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-300 sm:inline-flex"
            >
              <Lock size={12} /> Admin
            </Link>
            <a
              href={`https://wa.me/${peanut.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-xs font-semibold text-ink-950 transition hover:brightness-110 sm:inline-flex"
            >
              <MessageCircle size={14} /> Order Now
            </a>
          </div>
        </div>
      </header>

      <main className="container-x">
        {/* HERO */}
        <section className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-3xl ring-2 ring-amber-400/30">
              <img
                src={peanut.logo}
                alt={peanut.brand}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber-300">
              <Sparkles size={12} /> Small-batch · Nigerian-made
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Fresh. Natural.{" "}
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                Peanut-perfect.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {peanut.tagline} Roasted, ground, and packaged with care — for
              homes, events, and retailers across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110 active:scale-[0.98]"
              >
                <ShoppingBag size={16} /> Shop Products
              </a>
              <a
                href={`https://wa.me/${peanut.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { icon: Leaf, t: "100% Natural", d: "No additives or preservatives" },
              { icon: Truck, t: "Fast Delivery", d: "Nationwide shipping available" },
              { icon: ShieldCheck, t: "Fresh Guarantee", d: "Roasted & packed weekly" },
            ].map((f) => (
              <div key={f.t} className="glass flex items-center gap-3 p-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-300">
                  <f.icon size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {f.t}
                  </p>
                  <p className="text-xs text-slate-500">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-16">
          <div className="text-center">
            <p className="eyebrow !text-amber-400">Our Products</p>
            <h2 className="section-title mt-2">Shop the Range</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
              Pick your favourite — order via WhatsApp or phone for the fastest
              response.
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="mt-12 text-center text-slate-500">
              No products available right now. Check back soon.
            </p>
          ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-amber-400/40"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />

                  {/* image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/5">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.innerHTML = `<div class="grid h-full place-items-center text-6xl">${p.emoji || "🥜"}</div>`;
                        }}
                      />
                    ) : (
                      <div className="grid h-full place-items-center text-6xl">
                        {p.emoji || "🥜"}
                      </div>
                    )}

                    {p.badge && (
                      <span className="absolute left-3 top-3 rounded-full border border-amber-400/30 bg-ink-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    {p.size && (
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-slate-500">
                        {p.size}
                      </p>
                    )}

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {p.description}
                    </p>

                    <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
                      <div>
                        <p className="font-display text-xl font-bold text-white">
                          {p.price}
                        </p>
                        {p.unit && (
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            {p.unit}
                          </p>
                        )}
                      </div>
                      <a
                        href={`https://wa.me/${peanut.contact.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'd like to order: ${p.name} (${p.size}) — ${p.price}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-xs font-semibold text-ink-950 transition hover:brightness-110"
                      >
                        <ShoppingBag size={13} /> Order
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* ABOUT */}
        <section className="py-16">
          <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow !text-amber-400">Our Story</p>
              <h2 className="section-title mt-2">
                Made in small batches. Made with care.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                {peanut.brand} started as a simple side passion — turning locally
                sourced Nigerian groundnuts into clean, honest products that
                people actually enjoy. Every batch is roasted, ground, and
                packaged by hand.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                We supply families, offices, schools, event planners, and
                resellers. Bulk pricing is available — just reach out.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${peanut.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/40 hover:bg-white/5"
                >
                  <Phone size={15} /> {peanut.contact.phone}
                </a>
                <a
                  href={`mailto:${peanut.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-amber-400/40 hover:bg-white/5"
                >
                  <Mail size={15} /> Email us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-500/15 to-orange-500/10 blur-2xl" />
              <div className="grid grid-cols-2 gap-3">
                {products.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="glass flex aspect-square items-center justify-center overflow-hidden text-5xl"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.innerHTML = `<span>${p.emoji || "🥜"}</span>`;
                        }}
                      />
                    ) : (
                      <span>{p.emoji || "🥜"}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-500/[0.10] via-orange-500/[0.05] to-transparent p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to place an order?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
              Reach out on WhatsApp for the fastest response — we deliver
              nationwide and offer bulk pricing for resellers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${peanut.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110 active:scale-[0.98]"
              >
                <MessageCircle size={16} /> Order on WhatsApp
              </a>
              <a href={`tel:${peanut.contact.phone}`} className="btn-ghost">
                <Phone size={16} /> Call {peanut.contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container-x flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src={peanut.logo}
              alt={peanut.brand}
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/15"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="font-display text-sm font-semibold text-white">
              {peanut.brand}
            </span>
          </div>

          <div className="flex gap-2">
            <a
              href={`https://wa.me/${peanut.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href={`mailto:${peanut.contact.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Mail size={17} />
            </a>
            <a
              href={peanut.contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Instagram size={17} />
            </a>
            <Link
              to={peanut.adminPath}
              aria-label="Admin"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Settings size={17} />
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {peanut.brand}
          </p>
        </div>
      </footer>
    </div>
  );
}