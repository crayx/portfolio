"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HireMeGame.module.css";

interface HireMeGameProps {
  open: boolean;
  onClose: () => void;
  onHireForReal?: () => void;
}

const GAME_DURATION = 5;
const SAFE_RADIUS = 110; // px — when cursor enters this radius, button bolts
const BTN_HALF_W = 70;
const BTN_HALF_H = 26;

type GameState = "idle" | "playing" | "finished";

export function HireMeGame({ open, onClose, onHireForReal }: HireMeGameProps) {
  const [state, setState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const arenaRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(pos);

  // Keep a ref of latest pos so the mouse handler always reads fresh values
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    if (!open) {
      setState("idle");
      setScore(0);
      setTimeLeft(GAME_DURATION);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (state !== "playing") return;
    if (timeLeft <= 0) {
      setState("finished");
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [state, timeLeft]);

  const placeRandom = () => {
    const arena = arenaRef.current;
    if (!arena) return;
    const w = arena.clientWidth;
    const h = arena.clientHeight;
    const x = Math.random() * Math.max(1, w - 2 * BTN_HALF_W) + BTN_HALF_W;
    const y = Math.random() * Math.max(1, h - 2 * BTN_HALF_H) + BTN_HALF_H;
    setPos({ x, y });
  };

  const dodge = (mx: number, my: number) => {
    const arena = arenaRef.current;
    if (!arena) return;
    const w = arena.clientWidth;
    const h = arena.clientHeight;
    const { x, y } = posRef.current;

    // Direction from cursor to button — extend further in that direction
    let dx = x - mx;
    let dy = y - my;
    const len = Math.hypot(dx, dy);
    if (len < 0.001) {
      // cursor sits exactly on the button — pick a random direction
      const a = Math.random() * Math.PI * 2;
      dx = Math.cos(a);
      dy = Math.sin(a);
    } else {
      dx /= len;
      dy /= len;
    }

    const jump = SAFE_RADIUS + 80 + Math.random() * 60;
    let nx = x + dx * jump + (Math.random() - 0.5) * 40;
    let ny = y + dy * jump + (Math.random() - 0.5) * 40;

    // Clamp into arena
    nx = Math.max(BTN_HALF_W, Math.min(w - BTN_HALF_W, nx));
    ny = Math.max(BTN_HALF_H, Math.min(h - BTN_HALF_H, ny));

    // If the clamp leaves it close to the cursor, teleport to the opposite corner
    if (Math.hypot(nx - mx, ny - my) < SAFE_RADIUS) {
      nx =
        mx > w / 2
          ? BTN_HALF_W + Math.random() * 60
          : w - BTN_HALF_W - Math.random() * 60;
      ny =
        my > h / 2
          ? BTN_HALF_H + Math.random() * 60
          : h - BTN_HALF_H - Math.random() * 60;
    }

    setPos({ x: nx, y: ny });
  };

  const handleArenaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state !== "playing") return;
    const arena = arenaRef.current;
    if (!arena) return;
    const rect = arena.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const { x, y } = posRef.current;
    if (Math.hypot(mx - x, my - y) < SAFE_RADIUS) {
      dodge(mx, my);
    }
  };

  const start = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setState("playing");
    setTimeout(placeRandom, 0);
  };

  const handleHit = () => {
    setScore((s) => s + 1);
    placeRandom();
  };

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close game"
        >
          ×
        </button>

        <header className={styles.header}>
          <h3>Catch the Hire Me</h3>
          <div className={styles.meta}>
            <span>
              Score <strong>{score}</strong>
            </span>
            <span>
              Time <strong>{timeLeft}s</strong>
            </span>
          </div>
        </header>

        <div
          className={styles.arena}
          ref={arenaRef}
          onMouseMove={handleArenaMouseMove}
        >
          {state === "idle" && (
            <div className={styles.center}>
              <p className={styles.intro}>
                The Hire Me button doesn&rsquo;t want to be caught. Chase it
                down — every catch is a point. You have {GAME_DURATION} seconds.
              </p>
              <button className={styles.actionBtn} onClick={start}>
                Start
              </button>
            </div>
          )}

          {state === "playing" && (
            <>
              <button
                className={styles.hireBtn}
                onClick={handleHit}
                style={{ left: pos.x, top: pos.y }}
              >
                Naehh!
              </button>
              <a
                href="#contact"
                onClick={() => {
                  onHireForReal?.();
                  onClose();
                }}
                className={styles.linkBtn}
              >
                Hire me
                <span aria-hidden>↗</span>
              </a>
            </>
          )}

          {state === "finished" && (
            <div className={styles.center}>
              <h4 className={styles.endTitle}>Time&rsquo;s up!</h4>
              <p className={styles.endScore}>
                You caught it <strong>{score}</strong>{" "}
                {score === 1 ? "time" : "times"}.
              </p>
              <div className={styles.endActions}>
                <button className={styles.actionBtn} onClick={start}>
                  Play again
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    onHireForReal?.();
                    onClose();
                  }}
                  className={styles.linkBtn}
                >
                  Hire me for real
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
