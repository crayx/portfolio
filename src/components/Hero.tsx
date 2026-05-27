"use client";
import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { HireMeGame } from "./HireMeGame";
import { usePet } from "@/hooks/usePet";

interface ConfettiPiece {
  id: number;
  dx: number;
  dy: number;
  rotation: number;
  size: number;
  color: string;
  duration: number;
}

const CONFETTI_COLORS = [
  "#FF6B6B",
  "#FECA57",
  "#48DBFB",
  "#1DD1A1",
  "#FF9FF3",
  "#A55EEA",
  "#FFA502",
];

interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

interface HeroProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  socialLinks?: SocialLink[];
  status?: string;
}

export function Hero({
  name,
  role,
  description,
  image,
  socialLinks = [],
}: HeroProps) {
  const parts = name.trim().split(/\s+/);
  const firstWord = parts[0] ?? name;
  const restWord = parts.slice(1).join(" ");
  const [gameOpen, setGameOpen] = useState(false);
  const { pet } = usePet();
  const petEmoji = pet === "cat" ? "🐈" : "🐕";
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  // The navbar's Hire Me button lives in a separate component, so it
  // signals here via a window event to open the same game modal.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setGameOpen(true);
    window.addEventListener("open-hire-game", handler);
    return () => window.removeEventListener("open-hire-game", handler);
  }, []);

  const fireConfetti = () => {
    const base = Date.now();
    const pieces: ConfettiPiece[] = Array.from({ length: 70 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 90 + Math.random() * 240;
      return {
        id: base + i,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        rotation: (Math.random() - 0.5) * 720,
        size: 6 + Math.random() * 8,
        color:
          CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        duration: 1200 + Math.random() * 900,
      };
    });
    setConfetti(pieces);
    window.setTimeout(() => setConfetti([]), 2400);
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.heroName}>
        <span className={styles.nameOutlined}>{firstWord}</span>
        {restWord && <span className={styles.nameFilled}>{restWord}</span>}
      </h1>

      {image && (
        <div className={styles.heroFigure} aria-hidden="true">
          <Image
            src={image}
            alt=""
            width={793}
            height={2505}
            priority
            sizes="(max-width: 900px) 60vw, 480px"
            className={styles.heroFigureImg}
          />
        </div>
      )}

      <div className={styles.heroScene} key={pet} aria-hidden="true">
        <div className={styles.dog}>{petEmoji}</div>
        <div className={styles.wool}>🧶</div>
      </div>


      {confetti.length > 0 && (
        <div className={styles.confettiLayer} aria-hidden="true">
          {confetti.map((p) => (
            <span
              key={p.id}
              className={styles.confettiPiece}
              style={
                {
                  "--dx": `${p.dx}px`,
                  "--dy": `${p.dy}px`,
                  "--rotation": `${p.rotation}deg`,
                  "--size": `${p.size}px`,
                  "--color": p.color,
                  "--duration": `${p.duration}ms`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className={styles.heroBottomLeft}>
        <h2 className={styles.heroRole}>{role}</h2>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.heroCtas}>
          <a href="#contact" className={styles.heroCta}>
            Let&rsquo;s collaborate
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div className={styles.heroTopLeft}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
            >
              {link.icon && <span aria-hidden>{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>
      )}

      <HireMeGame
        open={gameOpen}
        onClose={() => setGameOpen(false)}
        onHireForReal={fireConfetti}
      />
    </section>
  );
}
