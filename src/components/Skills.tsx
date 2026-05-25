"use client";
import styles from "./Skills.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { SkillGroup } from "@/data/types";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export function Skills({ skillGroups }: SkillsProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <span className={styles.sectionPill}>Toolbox</span>
      </div>
      <div className={styles.skillsGroups}>
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className={styles.skillsGroupTitle}>{group.category}</h3>
            <div className={styles.chips}>
              {group.skills.map((skill) => (
                <span key={skill.name} className={styles.chip}>
                  <span
                    className={`${styles.chipDot} ${styles[skill.level] ?? ""}`}
                  ></span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
