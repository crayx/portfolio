"use client";
import styles from "./Contact.module.css";
import { useReveal } from "@/hooks/useReveal";
import type { Contact as ContactType } from "@/data/types";

interface ContactProps {
  contacts: ContactType[];
}

export function Contact({ contacts }: ContactProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.sectionCard} ${isVisible ? styles.reveal : ""}`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <span className={styles.sectionPill}>Let's build something</span>
      </div>
      <p className={styles.contactBody}>
        Interested in collaborating on frontend‑heavy products, design systems,
        or performance‑sensitive experiences. Short‑ and long‑term engagements
        welcome.
      </p>
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.type}>
            {contact.label}:
            <a href={contact.url} target="_blank" rel="noreferrer">
              {contact.type === "email"
                ? contact.url.replace("mailto:", "")
                : contact.url}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
