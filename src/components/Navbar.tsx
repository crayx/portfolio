"use client";
import styles from "./Navbar.module.css";
import { useTheme } from "@/hooks/useTheme";
import { usePet } from "@/hooks/usePet";
import { portfolioData } from "@/data/portfolioData";

export function Navbar() {
  const { toggleTheme, theme, isMounted } = useTheme();
  const { pet, setPet } = usePet();

  if (!isMounted) {
    return null;
  }

  const projectCount = portfolioData.projects.length;
  const skillsCount = portfolioData.skills.reduce(
    (acc, group) => acc + group.skills.length,
    0,
  );
  const experienceCount = portfolioData.experience.length;

  return (
    <header className={styles.nav}>
      <div className={styles.navLeft}>
        <div
          className={styles.petToggle}
          role="group"
          aria-label="Pick your pet"
        >
          <span className={styles.petToggleLabel}>Cat or dog person?</span>
          <button
            type="button"
            onClick={() => setPet("cat")}
            className={`${styles.petToggleBtn} ${pet === "cat" ? styles.petToggleActive : ""}`}
            aria-pressed={pet === "cat"}
          >
            <span aria-hidden>🐈</span>
            <span className={styles.petToggleText}>Cat</span>
          </button>
          <button
            type="button"
            onClick={() => setPet("dog")}
            className={`${styles.petToggleBtn} ${pet === "dog" ? styles.petToggleActive : ""}`}
            aria-pressed={pet === "dog"}
          >
            <span aria-hidden>🐕</span>
            <span className={styles.petToggleText}>Dog</span>
          </button>
        </div>
      </div>

      <nav className={styles.navLinks}>
        <a href="#projects">
          Work <span className={styles.count}>[{projectCount}]</span>
        </a>
        <a href="#skills">
          Skills <span className={styles.count}>[{skillsCount}]</span>
        </a>
        <a href="#experience">
          Experience <span className={styles.count}>[{experienceCount}]</span>
        </a>
        <a href="#contact">Contact</a>
      </nav>

      <div className={styles.navActions}>
        <button
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <a href="#contact" className={styles.ctaPill}>
          Let&rsquo;s Talk
          <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
