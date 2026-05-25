"use client";
import styles from "./Experience.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { Experience as ExperienceType } from "@/data/types";

interface ExperienceProps {
  experiences: ExperienceType[];
}

function ExperienceItem({ item }: { item: ExperienceType }) {
  return (
    <article className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <div>
          <div className={styles.experienceRole}>
            {item.role} · {item.company}
          </div>
          <div className={styles.experienceMeta}>
            <span>{item.period}</span>
            {item.tags?.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <ul className={styles.experiencePoints}>
        {item.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function Experience({ experiences }: ExperienceProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <span className={styles.sectionPill}>
          5+ years · Frontend & Product
        </span>
      </div>
      <div className={styles.experienceList}>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} item={exp} />
        ))}
      </div>
    </section>
  );
}
