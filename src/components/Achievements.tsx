"use client";
import styles from "./Achievements.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { Achievement } from "@/data/types";

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="achievements"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Beyond Code</h2>
        <span className={styles.sectionPill}>
          Discipline · Art · Performance
        </span>
      </div>
      <ul className={styles.achievementList}>
        {achievements.map((achievement, idx) => (
          <li key={idx}>
            <span className={styles.achievementTag}>{achievement.tag}</span>
            {achievement.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
