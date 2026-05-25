"use client";
import styles from "./Projects.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { Project as ProjectType } from "@/data/types";

interface ProjectsProps {
  projects: ProjectType[];
}

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}>{project.title}</div>
        <span className={styles.projectBadge}>{project.badge}</span>
      </div>
      <p className={styles.projectBody}>{project.description}</p>
      <div className={styles.projectTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.projectTag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Selected Projects</h2>
        <span className={styles.sectionPill}>Shipped & impact‑driven</span>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
