import { useState } from "react";
import { Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD =
  import.meta.env.VITE_ADMIN_PASSWORD || "dyp-admin-2026";

export default function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("dyp_admin_auth", "1");
      onSuccess();
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
    }
  };

  return (
    <div className="grid min-h-screen place-items-center px-5">
      <div className="w-full max-w-md">
        <Link
          to="/peanut"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-300"
        >
          <ArrowLeft size={14} /> Back to store
        </Link>

        <div className="glass p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-ink-950">
            <Lock size={22} />
          </div>
          <h1 className="mt-5 text-center font-display text-2xl font-bold text-white">
            Admin Access
          </h1>
          <p className="mt-2 text-center text-sm text-slate-400">
            Enter the admin password to manage products.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Password
              </label>
              <input
                autoFocus
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••••"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-amber-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-amber-400/20"
              />
            </div>

            {error && (
              <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110 active:scale-[0.98]"
            >
              Unlock Admin
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-slate-600">
            Default password: <code className="text-slate-500">dyp-admin-2026</code>
            <br />
            Change via <code className="text-slate-500">VITE_ADMIN_PASSWORD</code> on Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}