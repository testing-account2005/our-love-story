import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { noButtonMessages, celebrationMessages } from "@/data/loveMessages";

interface ValentineQuestionProps {
  onYes: () => void;
}

const ValentineQuestion = ({ onYes }: ValentineQuestionProps) => {
  const [noCount, setNoCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [yesScale, setYesScale] = useState(1);
  const [noOpacity, setNoOpacity] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [shaking, setShaking] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const handleNo = () => {
    const randomMsg = noButtonMessages[Math.floor(Math.random() * noButtonMessages.length)];
    setMessage(randomMsg);
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => Math.min(prev + 0.15, 3));
    setNoOpacity((prev) => Math.max(prev - 0.08, 0.2));
    setNoSize((prev) => Math.max(prev - 0.06, 0.3));
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  const fireConfetti = useCallback(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#ff1493", "#ff6b9d", "#ffd700", "#ff4500"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ff1493", "#ff6b9d", "#ffd700", "#ff4500"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleYes = () => {
    setCelebrating(true);
    fireConfetti();
    setTimeout(() => onYes(), 6000);
  };

  if (celebrating) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-8xl mb-8"
          >
            🥳
          </motion.div>

          <div className="space-y-4">
            {celebrationMessages.slice(0, 5).map((msg, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.5 }}
                className="text-2xl md:text-3xl font-handwritten text-primary text-glow"
              >
                {msg}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-8 flex justify-center gap-4 text-5xl"
          >
            {["💖", "🎉", "💕", "🎊", "💗"].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, delay: i * 0.2, duration: 1 }}
              >
                {e}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.h2
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4"
        >
          Will you be my
          <br />
          <span className="text-primary text-glow">Valentine?</span> 💕
        </motion.h2>

        <AnimatePresence mode="wait">
          {message && (
            <motion.p
              key={message}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl font-handwritten text-gold text-glow-gold my-6"
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: yesScale }}
            onClick={handleYes}
            className={`bg-glow-gradient text-primary-foreground px-10 py-4 rounded-full font-bold text-xl font-body shadow-glow ${
              noCount > 3 ? "animate-pulse-glow" : ""
            }`}
          >
            ❤️ YES
          </motion.button>

          <motion.button
            animate={{
              scale: noSize,
              opacity: noOpacity,
            }}
            onClick={handleNo}
            className={`glass text-foreground px-8 py-3 rounded-full font-body text-lg ${
              shaking ? "animate-shake" : ""
            }`}
          >
            💔 NO
          </motion.button>
        </div>

        {noCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mt-6"
          >
            NO clicks: {noCount} times 😭 (the button is shrinking btw 👀)
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ValentineQuestion;
