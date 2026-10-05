import { useSyncExternalStore } from "react";
import { productStore } from "../lib/productStore";

export function useProducts() {
  const products = useSyncExternalStore(
    productStore.subscribe,
    productStore.getSnapshot,
    productStore.getServerSnapshot
  );

  return {
    products,
    ready: true,
    add: productStore.add,
    update: productStore.update,
    remove: productStore.remove,
    reset: productStore.reset,
    refresh: productStore.refresh,
    exportJSON: productStore.exportJSON,
    importJSON: productStore.importJSON,
  };
}