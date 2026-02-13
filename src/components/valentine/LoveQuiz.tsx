import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themedQuizQuestions, quizQuestions } from "@/data/loveMessages";
import { useTheme } from "@/contexts/ThemeContext";

interface LoveQuizProps {
  onComplete: () => void;
}

const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const { theme } = useTheme();
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Use themed questions first, then fall back to generic ones
  const questions = [...themedQuizQuestions[theme], ...quizQuestions];

  const handleAnswer = (resultText: string) => {
    setResult(resultText);
    setShowResult(true);
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((prev) => prev + 1);
        setShowResult(false);
        setResult(null);
      } else {
        onComplete();
      }
    }, 2500);
  };

  const q = questions[currentQ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-muted-foreground mb-2 font-body">💬 Secret Love Quiz</p>
        <p className="text-xs text-muted-foreground">
          {currentQ + 1} / {questions.length}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="glass-rose rounded-3xl p-8 md:p-12 max-w-lg w-full text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            {q.question}
          </h2>

          {!showResult ? (
            <div className="flex flex-col gap-4">
              {q.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswer(opt.result)}
                  className="glass rounded-xl px-6 py-4 text-foreground font-body text-lg hover:shadow-glow transition-all"
                >
                  {opt.text}
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-8"
            >
              <p className="text-2xl font-handwritten text-primary text-glow">
                {result}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoveQuiz;
