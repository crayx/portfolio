"use client";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>
        <strong>Portfolio</strong> · Hand‑crafted UI with semantic HTML & modern
        CSS.
      </span>
      <span>Last updated · {currentYear}</span>
    </footer>
  );
}
