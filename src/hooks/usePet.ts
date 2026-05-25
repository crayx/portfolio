"use client";

import { useEffect, useState } from "react";

export type Pet = "cat" | "dog";

const PET_STORAGE_KEY = "pet";
const PET_CHANGE_EVENT = "pet-change";

/**
 * Shared pet selection state. Persists to localStorage and syncs across
 * components in the same tab via a custom window event (the native `storage`
 * event only fires across tabs). Mirrors the SSR-safety pattern in useTheme.
 */
export function usePet() {
  const [pet, setPetState] = useState<Pet>("dog");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(PET_STORAGE_KEY);
    if (stored === "cat" || stored === "dog") {
      setPetState(stored);
    }
    setIsMounted(true);

    const handler = (e: Event) => {
      const next = (e as CustomEvent<Pet>).detail;
      if (next === "cat" || next === "dog") setPetState(next);
    };
    window.addEventListener(PET_CHANGE_EVENT, handler);
    return () => window.removeEventListener(PET_CHANGE_EVENT, handler);
  }, []);

  const setPet = (next: Pet) => {
    setPetState(next);
    window.localStorage.setItem(PET_STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent<Pet>(PET_CHANGE_EVENT, { detail: next }));
  };

  return { pet, setPet, isMounted };
}
