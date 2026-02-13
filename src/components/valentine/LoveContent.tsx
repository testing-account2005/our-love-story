import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { poems, loveLetters, sweetMessages } from "@/data/loveMessages";

interface LoveContentProps {
  onContinue: () => void;
}

// Shuffle array and track used indices to never repeat
const shuffleIndices = (length: number) => {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const photoEmojis = ["📸", "🥰", "💑", "💕", "✨", "🌹", "💖", "🎉"];

const LoveContent = ({ onContinue }: LoveContentProps) => {
  const [contentType, setContentType] = useState<"poem" | "letter" | "message">("poem");
  const [displayIndex, setDisplayIndex] = useState(0);

  const poemOrder = useRef(shuffleIndices(poems.length));
  const letterOrder = useRef(shuffleIndices(loveLetters.length));
  const messageOrder = useRef(shuffleIndices(sweetMessages.length));

  const getContent = useCallback(() => {
    switch (contentType) {
      case "poem": {
        const idx = poemOrder.current[displayIndex % poems.length];
        return { title: poems[idx].title, content: poems[idx].content };
      }
      case "letter":
        return {
          title: "A Love Letter For You 💌",
          content: loveLetters[letterOrder.current[displayIndex % loveLetters.length]],
        };
      case "message":
        return {
          title: "Sweet Nothings 💕",
          content: sweetMessages[messageOrder.current[displayIndex % sweetMessages.length]],
        };
    }
  }, [contentType, displayIndex]);

  const tabs = [
    { key: "poem" as const, label: "📜 Poem" },
    { key: "letter" as const, label: "💌 Letter" },
    { key: "message" as const, label: "💕 Message" },
  ];

  const content = getContent();

  const handleDownload = () => {
    const text = `${content.title}\n\n${content.content}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "love-letter.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const randomPhoto = photoEmojis[displayIndex % photoEmojis.length];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-8">
          📜 Love Content Just For You
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setContentType(tab.key);
                setDisplayIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                contentType === tab.key
                  ? "bg-glow-gradient text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Random photo display */}
        <motion.div
          key={`photo-${displayIndex}`}
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="mx-auto w-32 h-32 mb-6 glass-rose rounded-2xl flex items-center justify-center text-5xl shadow-glow"
        >
          {randomPhoto}
        </motion.div>

        {/* Content card */}
        <motion.div
          key={`${contentType}-${displayIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-rose rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold text-primary text-glow text-center mb-6">
            {content.title}
          </h3>
          <div className={`${contentType === "letter" ? "font-handwritten text-2xl" : "font-body text-lg"} text-foreground whitespace-pre-line leading-relaxed text-center`}>
            {content.content}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setDisplayIndex((prev) => prev + 1)}
            className="glass text-foreground px-6 py-3 rounded-full font-body"
          >
            🔄 Show Another
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="glass text-foreground px-6 py-3 rounded-full font-body"
          >
            📥 Save This
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContinue}
            className="bg-glow-gradient text-primary-foreground px-6 py-3 rounded-full font-body font-semibold shadow-glow"
          >
            Continue 💖
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveContent;
