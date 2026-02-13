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
  dragging?: boolean;
  dragX?: number;
  dragY?: number;
}

interface ClickHeart {
  id: number;
  x: number;
  y: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);
  const nextId = useRef(100);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setHearts(generated);
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

  const emojis = ["💖", "💕", "💗", "❤️", "💓", "🥰", "✨"];

  return (
    <div
      className="fixed inset-0 pointer-events-auto overflow-hidden z-0"
      onClick={handleBackgroundClick}
      style={{ cursor: "pointer" }}
    >
      {/* Floating hearts - draggable */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          data-heart
          drag
          dragMomentum
          dragElastic={0.3}
          whileTap={{ scale: 1.5 }}
          className="absolute cursor-grab active:cursor-grabbing select-none"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -20, -10, -25, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💖
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
      {Array.from({ length: 15 }, (_, i) => (
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
  );
};

export default FloatingHearts;
