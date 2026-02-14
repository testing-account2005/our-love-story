import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface ClickHeart {
  id: number;
  x: number;
  y: number;
}

interface CursorTrail {
  id: number;
  x: number;
  y: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);
  const [cursorTrail, setCursorTrail] = useState<CursorTrail[]>([]);
  const nextId = useRef(100);
  const trailId = useRef(0);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 8,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.25 + 0.05,
    }));
    setHearts(generated);
  }, []);

  // Heart cursor trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrailTime.current < 60) return;
      lastTrailTime.current = now;

      const id = trailId.current++;
      setCursorTrail((prev) => [...prev.slice(-12), { id, x: e.clientX, y: e.clientY }]);

      setTimeout(() => {
        setCursorTrail((prev) => prev.filter((t) => t.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleBackgroundClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-heart]")) return;

    const id = nextId.current++;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setClickHearts((prev) => prev.filter((h) => h.id !== id));
    }, 2000);
  }, []);

  const emojis = ["💖", "💕", "💗", "❤️", "💓", "🥰", "✨", "💘", "💝"];
  const heartChars = ["💖", "💗", "❤️", "💕", "💓"];

  return (
    <>
      {/* Custom cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Cursor trail hearts */}
      {cursorTrail.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0.8, scale: 0.6 }}
          animate={{ opacity: 0, scale: 0.2, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9999] select-none"
          style={{ left: t.x - 6, top: t.y - 6, fontSize: "12px" }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main glowing cursor heart */}
      <div
        className="fixed pointer-events-none z-[10000] select-none"
        style={{ display: "none" }}
        id="heart-cursor"
      />

      {/* Cursor follower via CSS */}
      <style>{`
        body::after {
          content: '❤️';
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          font-size: 20px;
          filter: drop-shadow(0 0 8px hsl(340, 80%, 60%));
          transform: translate(-50%, -50%);
          transition: left 0.05s, top 0.05s;
        }
      `}</style>

      {/* Track cursor position via JS → CSS variable */}
      <CursorTracker />

      <div
        className="fixed inset-0 pointer-events-auto overflow-hidden z-0"
        onClick={handleBackgroundClick}
      >
        {/* Floating hearts - draggable with parallax drift */}
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            data-heart
            drag
            dragMomentum
            dragElastic={0.3}
            whileTap={{ scale: 1.5 }}
            className="absolute select-none"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
            }}
            animate={{
              y: [0, -(heart.size * 2), -(heart.size), -(heart.size * 2.5), 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {heartChars[heart.id % heartChars.length]}
          </motion.div>
        ))}

        {/* Click-spawned hearts */}
        {clickHearts.map((ch) => (
          <motion.div
            key={ch.id}
            data-heart
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 1.5, 1], opacity: [1, 1, 0], y: -80 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute pointer-events-none select-none"
            style={{
              left: ch.x,
              top: ch.y,
              fontSize: "28px",
              transform: "translate(-50%, -50%)",
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </motion.div>
        ))}

        {/* Sparkles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: `hsl(340, 80%, ${60 + Math.random() * 20}%)`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Tiny component to track cursor via JS and move a pseudo-element
const CursorTracker = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `body::after { left: -100px; top: -100px; }`;
    document.head.appendChild(style);

    const move = (e: MouseEvent) => {
      style.textContent = `body::after { left: ${e.clientX}px; top: ${e.clientY}px; }`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default FloatingHearts;
