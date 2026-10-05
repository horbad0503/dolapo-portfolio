import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Download,
  Upload,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { peanut } from "../data/portfolio";
import { useProducts } from "../hooks/useProducts";
import AdminLogin from "../components/admin/AdminLogin";
import ProductForm from "../components/admin/ProductForm";

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [editing, setEditing] = useState(null); // null | "new" | product object
  const [importText, setImportText] = useState("");
  const [showImport, setShowImport] = useState(false);
  const [toast, setToast] = useState(null);

  const {
    products,
    add,
    update,
    remove,
    reset,
    exportJSON,
    importJSON,
    refresh,
  } = useProducts();

  useEffect(() => {
    if (sessionStorage.getItem("dyp_admin_auth") === "1") setAuthed(true);
  }, []);

  // Auto-dismiss toast after 2.8s
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  };

  const logout = () => {
    sessionStorage.removeItem("dyp_admin_auth");
    setAuthed(false);
  };

  // ── CRUD handlers ──
  const handleSubmit = (data) => {
    const isEdit = editing && editing !== "new";

    if (isEdit) {
      update(editing.id, data);
      showToast(`"${data.name}" updated`);
    } else {
      add(data);
      showToast(`"${data.name}" added`);
    }

    // Close the form, then force a re-read so the table refreshes
    setEditing(null);
    refresh();
  };

  const handleDelete = (p) => {
    if (!confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    remove(p.id);
    showToast(`"${p.name}" deleted`, "warn");
    refresh();
  };

  const handleExport = async () => {
    const json = exportJSON();
    try {
      await navigator.clipboard.writeText(json);
      showToast("Products copied to clipboard");
      alert(
        "Products copied to clipboard as JSON.\n\nPaste them into peanutProducts in src/data/portfolio.js, then commit & push to make them permanent for all visitors."
      );
    } catch {
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "dyp-peanut-products.json";
      a.click();
      URL.revokeObjectURL(url);
      showToast("Products downloaded as JSON");
    }
  };

  const handleImport = () => {
    if (importJSON(importText)) {
      showToast("Products imported successfully");
      setImportText("");
      setShowImport(false);
      refresh();
    } else {
      showToast("Invalid JSON — check the format", "error");
    }
  };

  const handleReset = () => {
    if (
      !confirm(
        "Reset to the original seed products? Your local changes will be lost."
      )
    )
      return;
    reset();
    showToast("Products reset to defaults", "warn");
    refresh();
  };

  return (
    <div className="min-h-screen bg-ink-950 pb-24">
      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            to="/peanut"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-amber-300"
          >
            <ArrowLeft size={16} /> Back to store
          </Link>

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
              Admin Panel
            </span>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-red-400/40 hover:text-red-300"
          >
            <LogOut size={13} /> Sign out
          </button>
        </div>
      </header>

      <main className="container-x pt-10">
        {/* stats + actions */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Products
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              {products.length} product{products.length !== 1 && "s"} ·{" "}
              {products.filter((p) => p.available !== false).length} available
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Download size={13} /> Export JSON
            </button>
            <button
              onClick={() => setShowImport((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-300"
            >
              <Upload size={13} /> Import
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-red-400/40 hover:text-red-300"
            >
              <RotateCcw size={13} /> Reset
            </button>
            <button
              onClick={() => setEditing("new")}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-xs font-semibold text-ink-950 transition hover:brightness-110"
            >
              <Plus size={14} /> Add Product
            </button>
          </div>
        </div>

        {/* import panel */}
        {showImport && (
          <div className="glass mt-6 p-5">
            <p className="text-sm font-semibold text-white">Import Products</p>
            <p className="mt-1 text-xs text-slate-400">
              Paste a JSON array of products (from a previous Export).
            </p>
            <textarea
              rows={6}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder='[{"id":"p1","name":"…"}]'
              className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs text-slate-200 outline-none focus:border-amber-400/60"
            />
            <div className="mt-3 flex gap-2">
              <button
                onClick={handleImport}
                className="rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-ink-950 transition hover:brightness-110"
              >
                Import
              </button>
              <button
                onClick={() => {
                  setShowImport(false);
                  setImportText("");
                }}
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* form (when editing or adding) */}
        {(editing === "new" || (editing && typeof editing === "object")) && (
          <div className="glass mt-8 p-6">
            <h2 className="font-display text-xl font-bold text-white">
              {editing === "new" ? "Add New Product" : `Edit "${editing.name}"`}
            </h2>
            <div className="mt-6">
              <ProductForm
                initial={editing === "new" ? null : editing}
                onSubmit={handleSubmit}
                onCancel={() => setEditing(null)}
              />
            </div>
          </div>
        )}

        {/* product table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03] text-[11px] uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Product</th>
                <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                  Category
                </th>
                <th className="hidden px-4 py-3 font-semibold md:table-cell">
                  Size
                </th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="hidden px-4 py-3 font-semibold lg:table-cell">
                  Status
                </th>
                <th className="px-4 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-slate-500"
                  >
                    No products yet. Click{" "}
                    <strong className="text-slate-300">Add Product</strong> to
                    start.
                  </td>
                </tr>
              )}
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-white/5 transition hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 flex-shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.parentElement.innerHTML = `<span class="text-lg">${p.emoji || "🥜"}</span>`;
                            }}
                          />
                        ) : (
                          <span className="text-lg">{p.emoji || "🥜"}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-medium text-white">
                          {p.name}
                        </p>
                        {p.badge && (
                          <span className="mt-0.5 inline-block rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 text-slate-400 sm:table-cell">
                    {p.category || "—"}
                  </td>
                  <td className="hidden px-4 py-3 text-slate-400 md:table-cell">
                    {p.size || "—"}
                  </td>
                  <td className="px-4 py-3 font-semibold text-white">
                    {p.price}
                    {p.unit && (
                      <span className="ml-1 text-[10px] font-normal text-slate-500">
                        {p.unit}
                      </span>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 lg:table-cell">
                    {p.available === false ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-300">
                        <EyeOff size={10} /> Out
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                        <Eye size={10} /> Live
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-1.5">
                      <button
                        onClick={() => setEditing(p)}
                        aria-label="Edit"
                        className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-amber-400/40 hover:text-amber-300"
                      >
                        <Pencil size={13} />
                      </button>
                      <button
                        onClick={() => handleDelete(p)}
                        aria-label="Delete"
                        className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-red-400/40 hover:text-red-300"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* footer hint */}
        <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-xs text-amber-200/90">
          <strong className="font-semibold">Heads up:</strong> Changes you make
          here are saved in <em>your browser only</em>. To make them permanent
          for all visitors, click <strong>Export JSON</strong>, paste the output
          into <code className="rounded bg-black/30 px-1">peanutProducts</code>{" "}
          in{" "}
          <code className="rounded bg-black/30 px-1">
            src/data/portfolio.js
          </code>
          , then commit &amp; push to GitHub.
        </div>
      </main>

      {/* toast */}
      {toast && (
        <div
          key={toast.id}
          style={{ animation: "slideUp 0.3s ease-out" }}
          className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium shadow-lg backdrop-blur-xl ${
            toast.type === "error"
              ? "border-red-400/30 bg-red-500/15 text-red-300"
              : toast.type === "warn"
                ? "border-amber-400/30 bg-amber-500/15 text-amber-300"
                : "border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
          }`}
        >
          {toast.type === "error" || toast.type === "warn" ? (
            <AlertCircle size={15} />
          ) : (
            <CheckCircle2 size={15} />
          )}
          {toast.message}
        </div>
      )}
    </div>
  );
}