// A single shared store for products.
// Every component that uses useProducts() reads from and writes to this.

import { peanutProducts as seed } from "../data/portfolio";

const STORAGE_KEY = "dyp_peanut_products_v1";
const listeners = new Set();
let current = null; // cached snapshot

function loadFromStorage() {
  if (current !== null) return current;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    current = Array.isArray(parsed) && parsed.length ? parsed : seed;
  } catch {
    current = seed;
  }
  return current;
}

function emit() {
  listeners.forEach((fn) => fn());
}

function setProducts(next) {
  current = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (e) {
    console.warn("localStorage write failed — image too large?", e);
  }
  emit();
}

// Cross-tab sync: if another tab edits products, this tab picks it up.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      current = null; // invalidate cache
      emit(); // notify all subscribers to re-read
    }
  });
}

export const productStore = {
  // React's useSyncExternalStore API
  subscribe: (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: () => loadFromStorage(),
  getServerSnapshot: () => seed,

  // ── Mutations ──
  add: (product) => {
    const id =
      product.id ||
      `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setProducts([{ ...product, id }, ...loadFromStorage()]);
    return id;
  },

  update: (id, patch) => {
    setProducts(
      loadFromStorage().map((p) => (p.id === id ? { ...p, ...patch } : p))
    );
  },

  remove: (id) => {
    setProducts(loadFromStorage().filter((p) => p.id !== id));
  },

  reset: () => {
    setProducts(seed);
  },

  refresh: () => {
    current = null;
    emit();
  },

  exportJSON: () => JSON.stringify(loadFromStorage(), null, 2),

  importJSON: (json) => {
    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) return false;
      setProducts(parsed);
      return true;
    } catch {
      return false;
    }
  },
};