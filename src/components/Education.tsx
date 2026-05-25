"use client";
import styles from "./Education.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { Education as EducationType } from "@/data/types";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="education"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <span className={styles.sectionPill}>Foundations</span>
      </div>
      <div className={styles.eduList}>
        {education.map((edu) => (
          <div key={edu.institution} className={styles.eduItem}>
            <strong>{edu.institution}</strong>
            <div className={styles.eduMeta}>
              {edu.degree} · {edu.period} · {edu.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
