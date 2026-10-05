import { useEffect, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

const ACCENTS = [
  { value: "from-amber-400 to-orange-400", label: "Amber" },
  { value: "from-yellow-400 to-amber-500", label: "Yellow" },
  { value: "from-orange-400 to-red-400", label: "Orange" },
  { value: "from-amber-300 to-yellow-500", label: "Gold" },
  { value: "from-orange-300 to-amber-400", label: "Peach" },
  { value: "from-amber-500 to-orange-500", label: "Deep amber" },
  { value: "from-emerald-400 to-teal-400", label: "Emerald" },
  { value: "from-sky-400 to-cyan-400", label: "Sky" },
];

const CATEGORIES = ["Nuts", "Butter", "Oil", "Snacks", "Other"];

const EMPTY = {
  name: "",
  category: "Nuts",
  size: "",
  price: "",
  unit: "",
  description: "",
  image: "",
  emoji: "🥜",
  badge: "",
  accent: ACCENTS[0].value,
  available: true,
};

export default function ProductForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (initial) {
      setForm({ ...EMPTY, ...initial });
      setImagePreview(initial.image || "");
    } else {
      setForm(EMPTY);
      setImagePreview("");
    }
  }, [initial]);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleImageUrl = (url) => {
    set("image", url);
    setImagePreview(url);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) {
      // 500 KB limit for localStorage safety
      alert(
        "Image is over 500 KB. It will be stored in localStorage — large images may break persistence. Consider using a URL instead, or a smaller image."
      );
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      set("image", reader.result);
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    set("image", "");
    setImagePreview("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price.trim()) {
      alert("Name and price are required.");
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Image */}
      <div>
        <label className={labelClass}>Product Image</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative grid h-32 w-32 flex-shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {imagePreview ? (
              <>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full w-full object-cover"
                  onError={() => setImagePreview("")}
                />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-ink-950/80 text-red-300 backdrop-blur transition hover:bg-red-500/30"
                >
                  <X size={13} />
                </button>
              </>
            ) : (
              <ImageIcon size={22} className="text-slate-600" />
            )}
          </div>

          <div className="flex-1 space-y-3">
            <input
              type="text"
              value={form.image?.startsWith("data:") ? "" : form.image}
              onChange={(e) => handleImageUrl(e.target.value)}
              placeholder="Paste image URL or /products/filename.jpg"
              className={inputClass}
            />
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:border-amber-400/40 hover:text-white">
              <Upload size={13} />
              Or upload a file
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Name + Category */}
      <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
        <Field label="Product Name *">
          <input
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Roasted Peanuts"
            className={inputClass}
          />
        </Field>
        <Field label="Category">
          <select
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={inputClass}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Size + Price + Unit */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Size">
          <input
            value={form.size}
            onChange={(e) => set("size", e.target.value)}
            placeholder="500g · 1kg"
            className={inputClass}
          />
        </Field>
        <Field label="Price *">
          <input
            required
            value={form.price}
            onChange={(e) => set("price", e.target.value)}
            placeholder="₦3,500"
            className={inputClass}
          />
        </Field>
        <Field label="Unit">
          <input
            value={form.unit}
            onChange={(e) => set("unit", e.target.value)}
            placeholder="/ 500g"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Description */}
      <Field label="Description">
        <textarea
          rows={3}
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="A short, punchy description…"
          className={`${inputClass} resize-none`}
        />
      </Field>

      {/* Badge + Emoji + Accent */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Badge">
          <input
            value={form.badge}
            onChange={(e) => set("badge", e.target.value)}
            placeholder="Bestseller"
            className={inputClass}
          />
        </Field>
        <Field label="Emoji (fallback)">
          <input
            value={form.emoji}
            onChange={(e) => set("emoji", e.target.value)}
            placeholder="🥜"
            maxLength={4}
            className={inputClass}
          />
        </Field>
        <Field label="Accent">
          <select
            value={form.accent}
            onChange={(e) => set("accent", e.target.value)}
            className={inputClass}
          >
            {ACCENTS.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Availability */}
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={form.available}
          onChange={(e) => set("available", e.target.checked)}
          className="h-4 w-4 accent-amber-400"
        />
        <span className="text-sm text-slate-300">
          Available for purchase (uncheck to mark "Out of stock")
        </span>
      </label>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-2.5 text-sm font-semibold text-ink-950 transition hover:brightness-110 active:scale-[0.98]"
        >
          {initial ? "Save Changes" : "Add Product"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-amber-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-amber-400/20";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}