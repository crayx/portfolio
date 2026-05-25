'use client';

import { useEffect, useState } from 'react';
import type { Theme } from '@/data/types';

const THEME_STORAGE_KEY = 'theme';

/**
 * Hook to manage theme state with SSR safety
 * Prevents hydration mismatch by initializing theme after mount
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage after mount to prevent hydration issues
  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = storedTheme === 'light' ? 'light' : 'dark';

    setTheme(initialTheme);
    setIsMounted(true);

    // Apply theme to DOM
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      // Persist preference
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);

      return nextTheme;
    });
  };

  return {
    theme,
    toggleTheme,
    isMounted,
  };
}
