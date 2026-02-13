import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { poems, loveLetters, sweetMessages } from "@/data/loveMessages";

interface LoveContentProps {
  onContinue: () => void;
}

const LoveContent = ({ onContinue }: LoveContentProps) => {
  const [contentType, setContentType] = useState<"poem" | "letter" | "message">("poem");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pick random indices on mount so it's different each visit
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * poems.length));
  }, []);

  const getContent = useCallback(() => {
    switch (contentType) {
      case "poem":
        return {
          title: poems[currentIndex % poems.length].title,
          content: poems[currentIndex % poems.length].content,
        };
      case "letter":
        return {
          title: "A Love Letter For You 💌",
          content: loveLetters[currentIndex % loveLetters.length],
        };
      case "message":
        return {
          title: "Sweet Nothings 💕",
          content: sweetMessages[currentIndex % sweetMessages.length],
        };
    }
  }, [contentType, currentIndex]);

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
                setCurrentIndex(Math.floor(Math.random() * 10));
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

        {/* Content card */}
        <motion.div
          key={`${contentType}-${currentIndex}`}
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
            onClick={() => setCurrentIndex((prev) => prev + 1)}
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
