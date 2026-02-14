import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { poems, loveLetters, sweetMessages } from "@/data/loveMessages";

interface LoveContentProps {
  onContinue: () => void;
}

const shuffleIndices = (length: number) => {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const LoveContent = ({ onContinue }: LoveContentProps) => {
  const [step, setStep] = useState<"poem" | "letter" | "message">("poem");

  const poemIdx = useRef(shuffleIndices(poems.length));
  const letterIdx = useRef(shuffleIndices(loveLetters.length));
  const msgIdx = useRef(shuffleIndices(sweetMessages.length));

  const poemI = useRef(0);
  const letterI = useRef(0);
  const msgI = useRef(0);

  const getContent = useCallback(() => {
    switch (step) {
      case "poem": {
        const i = poemIdx.current[poemI.current % poems.length];
        return { title: poems[i].title, content: poems[i].content, font: "font-body text-lg" };
      }
      case "letter": {
        const i = letterIdx.current[letterI.current % loveLetters.length];
        return { title: "A Love Letter For You 💌", content: loveLetters[i], font: "font-handwritten text-2xl" };
      }
      case "message": {
        const i = msgIdx.current[msgI.current % sweetMessages.length];
        return { title: "Sweet Nothings 💕", content: sweetMessages[i], font: "font-handwritten text-2xl" };
      }
    }
  }, [step]);

  const content = getContent();

  const handleNext = () => {
    if (step === "poem") {
      poemI.current++;
      setStep("letter");
    } else if (step === "letter") {
      letterI.current++;
      setStep("message");
    } else {
      msgI.current++;
      onContinue();
    }
  };

  const handleDownload = () => {
    const text = `${content.title}\n\n${content.content}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "love-memory.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const stepLabel = step === "poem" ? "📜 A Poem For You" : step === "letter" ? "💌 A Love Letter" : "💕 A Sweet Message";
  const stepNumber = step === "poem" ? 1 : step === "letter" ? 2 : 3;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground font-body">Step {stepNumber} of 3</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-8">
            {stepLabel}
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-rose rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-display font-bold text-primary text-glow text-center mb-6">
              {content.title}
            </h3>
            <div className={`${content.font} text-foreground whitespace-pre-line leading-relaxed text-center`}>
              {content.content}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
              onClick={handleNext}
              className="bg-glow-gradient text-primary-foreground px-8 py-3 rounded-full font-body font-semibold shadow-glow"
            >
              {step === "message" ? "Continue to Gallery 💖" : "Next 💗"}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoveContent;
